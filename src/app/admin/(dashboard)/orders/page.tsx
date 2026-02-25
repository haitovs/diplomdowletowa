import { prisma } from "@/lib/prisma";

export default async function OrdersPage() {
  const orders = await prisma.order.findMany({
    include: { items: { include: { product: true } } },
    orderBy: { createdAt: "desc" },
  });

  const statusColors: Record<string, string> = {
    PENDING: "bg-yellow-100 text-yellow-600",
    CONFIRMED: "bg-blue-100 text-blue-600",
    PROCESSING: "bg-purple-100 text-purple-600",
    SHIPPED: "bg-indigo-100 text-indigo-600",
    DELIVERED: "bg-green-100 text-green-600",
    CANCELLED: "bg-red-100 text-red-600",
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-turkmen-green">Orders</h1>
        <p className="text-gray-600">Manage customer orders</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Order</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Customer</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Items</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Total</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{order.orderNumber}</td>
                <td className="px-6 py-4">
                  <p className="font-medium">{order.customerName}</p>
                  <p className="text-sm text-gray-500">{order.customerEmail}</p>
                </td>
                <td className="px-6 py-4">{order.items.length} items</td>
                <td className="px-6 py-4 font-medium">${Number(order.total).toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>No orders yet. Orders will appear here once customers start shopping.</p>
          </div>
        )}
      </div>
    </div>
  );
}
