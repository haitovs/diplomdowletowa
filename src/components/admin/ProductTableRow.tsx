"use client";

import { uploadProductImage } from "@/app/admin/(dashboard)/products/actions";
import { EditIcon, ImageIcon } from "@/components/admin/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

interface ProductRowProps {
  product: {
    id: string;
    name: string;
    fiber: string;
    price: number;
    stock: number;
    isActive: boolean;
    store: { name: string };
    category: { name: string };
    images: { path: string; alt: string | null }[];
  };
}

export function ProductTableRow({ product }: ProductRowProps) {
  const router = useRouter();
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [thumbPath, setThumbPath] = useState(product.images[0]?.path ?? null);
  const [error, setError] = useState<string | null>(null);

  const handleDrop = useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragOver(false);

      const file = e.dataTransfer.files[0];
      if (!file || !file.type.startsWith("image/")) return;

      setUploading(true);
      setError(null);

      const formData = new FormData();
      formData.append("image", file);

      try {
        const result = await uploadProductImage(product.id, formData, true);
        if (result.success && result.path) {
          setThumbPath(result.path);
          router.refresh();
        } else {
          setError(result.error || "Upload failed");
        }
      } catch {
        setError("Upload failed");
      }

      setUploading(false);
    },
    [product.id, router]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  }, []);

  return (
    <tr
      className={`transition-colors ${
        dragOver
          ? "bg-turkmen-green/10 ring-2 ring-inset ring-turkmen-green/40"
          : uploading
            ? "bg-turkmen-gold/10"
            : "hover:bg-gray-50"
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          {uploading ? (
            <div className="w-12 h-12 rounded-lg bg-turkmen-gold/20 border border-turkmen-gold/30 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-turkmen-gold border-t-transparent rounded-full animate-spin" />
            </div>
          ) : thumbPath ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={thumbPath}
              alt={product.images[0]?.alt || product.name}
              className="w-12 h-12 rounded-lg object-cover border border-gray-200"
            />
          ) : (
            <div className="w-12 h-12 rounded-lg bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center group cursor-default"
                 title="Drop an image here">
              <ImageIcon className="w-5 h-5 text-gray-400" />
            </div>
          )}
          <div>
            <p className="font-medium text-gray-900">{product.name}</p>
            <p className="text-sm text-gray-500">{product.fiber}</p>
            {error && <p className="text-xs text-red-500">{error}</p>}
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-gray-600">{product.store.name}</td>
      <td className="px-6 py-4">
        <span className="bg-turkmen-gold/10 text-turkmen-green px-3 py-1 rounded-full text-sm border border-turkmen-gold/20">
          {product.category.name}
        </span>
      </td>
      <td className="px-6 py-4 font-medium">{Number(product.price).toFixed(2)} TMT</td>
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            product.stock > 5
              ? "bg-green-100 text-green-600"
              : product.stock > 0
                ? "bg-yellow-100 text-yellow-600"
                : "bg-red-100 text-red-600"
          }`}
        >
          {product.stock} in stock
        </span>
      </td>
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            product.isActive ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
          }`}
        >
          {product.isActive ? "Active" : "Inactive"}
        </span>
      </td>
      <td className="px-6 py-4">
        <Link
          href={`/admin/products/${product.id}`}
          className="inline-flex items-center gap-1.5 text-turkmen-gold hover:text-turkmen-green transition"
        >
          <EditIcon className="w-4 h-4" />
          Edit
        </Link>
      </td>
    </tr>
  );
}
