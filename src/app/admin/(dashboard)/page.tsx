import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminDashboard() {
  // Fetch stats
  const [storeCount, productCount, orderCount, categoryCount] = await Promise.all([
    prisma.store.count(),
    prisma.product.count(),
    prisma.order.count(),
    prisma.category.count(),
  ]);

  const recentOrders = await prisma.order.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: { items: true },
  });

  const stats = [
    { label: "Stores", value: storeCount, icon: "🏪", href: "/admin/stores" },
    { label: "Products", value: productCount, icon: "🧶", href: "/admin/products" },
    { label: "Categories", value: categoryCount, icon: "📁", href: "/admin/categories" },
    { label: "Orders", value: orderCount, icon: "📦", href: "/admin/orders" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-turkmen-green">Dashboard</h1>
        <p className="text-gray-600">Welcome to Heritage Textiles Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white p-6 rounded-xl border-l-4 border-turkmen-gold shadow-soft hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-bold text-turkmen-green mt-2">{stat.value}</p>
              </div>
              <span className="text-5xl opacity-20 group-hover:opacity-30 transition-opacity">{stat.icon}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-soft border-t-4 border-turkmen-gold">
          <h2 className="text-xl font-bold text-turkmen-green mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/admin/stores/new"
              className="btn btn-secondary w-full text-left flex items-center gap-2"
            >
              <span>➕</span>
              <span>Add New Store</span>
            </Link>
            <Link
              href="/admin/products/new"
              className="btn btn-secondary w-full text-left flex items-center gap-2"
            >
              <span>➕</span>
              <span>Add New Product</span>
            </Link>
            <Link
              href="/admin/categories/new"
              className="btn btn-secondary w-full text-left flex items-center gap-2"
            >
              <span>➕</span>
              <span>Add New Category</span>
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-soft border-t-4 border-turkmen-green">
          <h2 className="text-xl font-bold text-turkmen-green mb-4">Recent Orders</h2>
          {recentOrders.length === 0 ? (
            <p className="text-gray-500">No orders yet</p>
          ) : (
            <ul className="space-y-3">
              {recentOrders.map((order) => (
                <li key={order.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-medium text-gray-900">{order.orderNumber}</p>
                    <p className="text-sm text-gray-500">{order.customerName}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-turkmen-green">${Number(order.total).toFixed(2)}</p>
                    <p className={`text-xs px-2 py-1 rounded ${
                      order.status === "DELIVERED" ? "bg-green-100 text-green-600" :
                      order.status === "PENDING" ? "bg-yellow-100 text-yellow-600" :
                      "bg-gray-100 text-gray-600"
                    }`}>
                      {order.status}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
