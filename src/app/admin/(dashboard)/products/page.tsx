import { EmptyState } from "@/components/admin/EmptyState";
import { ProductIcon } from "@/components/admin/icons";
import { ProductTableRow } from "@/components/admin/ProductTableRow";
import { prisma } from "@/lib/prisma";
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

      <p className="text-xs text-gray-400 mb-3">Drag &amp; drop an image onto any row to set it as the product thumbnail</p>

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
            {products.map((product) => (
              <ProductTableRow key={product.id} product={product} />
            ))}
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
