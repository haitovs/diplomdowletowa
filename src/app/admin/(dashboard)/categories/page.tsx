import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    include: { _count: { select: { products: true } } },
    orderBy: { name: "asc" },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-turkmen-green">Categories</h1>
          <p className="text-gray-600">Organize textiles by type</p>
        </div>
        <Link
          href="/admin/categories/new"
          className="btn btn-primary"
        >
          + Add Category
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white p-6 rounded-xl shadow-soft border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold text-turkmen-green">{cat.name}</h3>
              <Link
                href={`/admin/categories/${cat.id}`}
                className="text-sm text-turkmen-gold hover:text-turkmen-green transition"
              >
                Edit
              </Link>
            </div>
            <p className="text-gray-500 text-sm mb-4">{cat.description || "No description"}</p>
            <span className="bg-turkmen-green/10 text-turkmen-green px-3 py-1 rounded-full text-sm font-medium border border-turkmen-green/20">
              {cat._count.products} products
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
