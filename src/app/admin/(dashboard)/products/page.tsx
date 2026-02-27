import { EmptyState } from "@/components/admin/EmptyState";
import { EditIcon, ImageIcon, ProductIcon } from "@/components/admin/icons";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    include: {
      store: { select: { name: true } },
      category: { select: { name: true } },
      images: { where: { isPrimary: true }, take: 1 },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-turkmen-green">Products</h1>
          <p className="text-gray-600">Manage textiles across all stores</p>
        </div>
        <Link
          href="/admin/products/new"
          className="btn btn-primary"
        >
          + Add Product
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-turkmen-green/5">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Product</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Store</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Category</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Price</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Stock</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((product) => {
              const thumb = product.images[0];
              return (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {thumb ? (
                        <Image
                          src={thumb.path}
                          alt={thumb.alt || product.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-lg object-cover border border-gray-200"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
                          <ImageIcon className="w-5 h-5 text-gray-400" />
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-500">{product.fiber}</p>
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
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      product.stock > 5 ? "bg-green-100 text-green-600" :
                      product.stock > 0 ? "bg-yellow-100 text-yellow-600" :
                      "bg-red-100 text-red-600"
                    }`}>
                      {product.stock} in stock
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      product.isActive ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
                    }`}>
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
            })}
          </tbody>
        </table>

        {products.length === 0 && (
          <EmptyState
            icon={<ProductIcon className="w-8 h-8" />}
            title="No products yet"
            description="Add your first product to get started."
            actionLabel="Add Product"
            actionHref="/admin/products/new"
          />
        )}
      </div>
    </div>
  );
}
