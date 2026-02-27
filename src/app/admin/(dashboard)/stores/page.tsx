import { EmptyState } from "@/components/admin/EmptyState";
import { EditIcon, StoreIcon } from "@/components/admin/icons";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function StoresPage() {
  const stores = await prisma.store.findMany({
    include: {
      _count: { select: { products: true } },
      createdBy: { select: { name: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-turkmen-green">Stores</h1>
          <p className="text-gray-600">Manage partner companies and their textiles</p>
        </div>
        <Link
          href="/admin/stores/new"
          className="btn btn-primary"
        >
          + Add Store
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-turkmen-green/5">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Store</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Origin</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Specialty</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Products</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {stores.map((store) => (
              <tr key={store.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-900">{store.name}</p>
                    <p className="text-sm text-gray-500">/{store.slug}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{store.origin}</td>
                <td className="px-6 py-4 text-gray-600 max-w-xs truncate">{store.specialty}</td>
                <td className="px-6 py-4">
                  <span className="bg-turkmen-green/10 text-turkmen-green px-3 py-1 rounded-full text-sm border border-turkmen-green/20">
                    {store._count.products} products
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    store.isActive
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {store.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <Link
                      href={`/admin/stores/${store.id}`}
                      className="inline-flex items-center gap-1.5 text-turkmen-gold hover:text-turkmen-green transition"
                    >
                      <EditIcon className="w-4 h-4" />
                      Edit
                    </Link>
                    <Link
                      href={`/admin/stores/${store.id}/products`}
                      className="text-turkmen-green hover:text-turkmen-gold transition"
                    >
                      Products
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {stores.length === 0 && (
          <EmptyState
            icon={<StoreIcon className="w-8 h-8" />}
            title="No stores yet"
            description="Create your first store to get started."
            actionLabel="Add Store"
            actionHref="/admin/stores/new"
          />
        )}
      </div>
    </div>
  );
}
