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
          <thead className="bg-gray-50">
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
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/stores/${store.id}`}
                      className="text-turkmen-gold hover:text-turkmen-green transition"
                    >
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
          <div className="text-center py-12 text-gray-500">
            <p>No stores yet. Create your first store to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}
