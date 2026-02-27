import { EmptyState } from "@/components/admin/EmptyState";
import {
  CategoryIcon,
  OrderIcon,
  PlusIcon,
  ProductIcon,
  RevenueIcon,
  StoreIcon,
} from "@/components/admin/icons";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminDashboard() {
  const [storeCount, productCount, orderCount, categoryCount, revenueAgg] = await Promise.all([
    prisma.store.count(),
    prisma.product.count(),
    prisma.order.count(),
    prisma.category.count(),
    prisma.order.aggregate({ _sum: { total: true } }),
  ]);

  const revenue = Number(revenueAgg._sum.total ?? 0);

  const recentOrders = await prisma.order.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: { items: true },
  });

  const stats = [
    { label: "Stores", value: storeCount, icon: StoreIcon, href: "/admin/stores", color: "bg-emerald-100 text-emerald-600" },
    { label: "Products", value: productCount, icon: ProductIcon, href: "/admin/products", color: "bg-blue-100 text-blue-600" },
    { label: "Categories", value: categoryCount, icon: CategoryIcon, href: "/admin/categories", color: "bg-amber-100 text-amber-600" },
    { label: "Orders", value: orderCount, icon: OrderIcon, href: "/admin/orders", color: "bg-purple-100 text-purple-600" },
    { label: "Revenue", value: `${revenue.toFixed(0)} TMT`, icon: RevenueIcon, href: "/admin/orders", color: "bg-turkmen-gold/20 text-turkmen-green" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-turkmen-green">Dashboard</h1>
        <p className="text-gray-600">Welcome to Heritage Textiles Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="bg-white p-6 rounded-xl border-l-4 border-turkmen-gold shadow-soft hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</p>
                  <p className="text-2xl font-bold text-turkmen-green mt-2">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </Link>
          );
        })}
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
              <PlusIcon className="w-4 h-4" />
              <span>Add New Store</span>
            </Link>
            <Link
              href="/admin/products/new"
              className="btn btn-secondary w-full text-left flex items-center gap-2"
            >
              <PlusIcon className="w-4 h-4" />
              <span>Add New Product</span>
            </Link>
            <Link
              href="/admin/categories/new"
              className="btn btn-secondary w-full text-left flex items-center gap-2"
            >
              <PlusIcon className="w-4 h-4" />
              <span>Add New Category</span>
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-soft border-t-4 border-turkmen-green">
          <h2 className="text-xl font-bold text-turkmen-green mb-4">Recent Orders</h2>
          {recentOrders.length === 0 ? (
            <EmptyState
              icon={<OrderIcon className="w-8 h-8" />}
              title="No orders yet"
              description="Orders will appear here once customers start shopping."
            />
          ) : (
            <ul className="space-y-3">
              {recentOrders.map((order) => (
                <li key={order.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-medium text-gray-900">{order.orderNumber}</p>
                    <p className="text-sm text-gray-500">{order.customerName}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-turkmen-green">{Number(order.total).toFixed(2)} TMT</p>
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
