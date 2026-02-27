"use client";

import { deleteProductImage, setPrimaryImage, uploadProductImage } from "@/app/admin/(dashboard)/products/actions";
import Image from "next/image";
import { useState } from "react";
import { ConfirmModal } from "./ConfirmModal";

interface ProductImage {
  id: string;
  path: string;
  alt: string | null;
  isPrimary: boolean;
}

interface ImageUploadProps {
  productId: string;
  existingImages?: ProductImage[];
}

export function ImageUpload({ productId, existingImages = [] }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<ProductImage[]>(existingImages);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", file);

    const result = await uploadProductImage(productId, formData);

    if (result.success) {
      window.location.reload();
    } else {
      setError(result.error || "Upload failed");
    }

    setUploading(false);
  }

  async function handleDelete(imageId: string) {
    const result = await deleteProductImage(imageId);

    if (result.success) {
      window.location.reload();
    } else {
      setError(result.error || "Delete failed");
    }
  }

  async function handleSetPrimary(imageId: string) {
    const result = await setPrimaryImage(imageId);

    if (result.success) {
      window.location.reload();
    } else {
      setError(result.error || "Failed to set primary");
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Product Images
        </label>
        <div className="flex items-center gap-4">
          <label
            htmlFor="image-upload"
            className={`btn btn-ghost cursor-pointer ${uploading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleUpload}
            disabled={uploading}
            className="hidden"
          />
          <span className="text-xs text-gray-500">Max 5MB, JPG/PNG/WebP</span>
        </div>
        {error && (
          <p className="text-sm text-red-600 mt-2">{error}</p>
        )}
      </div>

      {/* Image Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div
              key={img.id}
              className={`relative group rounded-lg overflow-hidden border-2 ${
                img.isPrimary ? "border-turkmen-gold" : "border-gray-200"
              }`}
            >
              <Image
                src={img.path}
                alt={img.alt || "Product image"}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />

              {img.isPrimary && (
                <div className="absolute top-2 left-2 bg-turkmen-gold text-white text-xs px-2 py-1 rounded">
                  Primary
                </div>
              )}

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                {!img.isPrimary && (
                  <button
                    onClick={() => handleSetPrimary(img.id)}
                    className="bg-turkmen-green text-white px-3 py-1 rounded text-sm hover:bg-turkmen-green/90 transition"
                  >
                    Set Primary
                  </button>
                )}
                <button
                  onClick={() => setDeleteTarget(img.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {images.length === 0 && (
        <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-gray-500 text-sm">No images uploaded yet</p>
          <p className="text-gray-400 text-xs mt-1">Upload your first product image above</p>
        </div>
      )}

      <ConfirmModal
        open={deleteTarget !== null}
        title="Delete image?"
        description="This will permanently remove this image. This cannot be undone."
        confirmLabel="Delete Image"
        onCancel={() => setDeleteTarget(null)}
        onConfirm={() => {
          if (deleteTarget) {
            handleDelete(deleteTarget);
            setDeleteTarget(null);
          }
        }}
      />
    </div>
  );
}
