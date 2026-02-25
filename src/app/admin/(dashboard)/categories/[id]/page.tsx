import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function EditCategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const category = await prisma.category.findUnique({
    where: { id },
    include: {
      _count: {
        select: { products: true },
      },
    },
  });

  if (!category) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
        <Link href="/admin/categories" className="btn btn-primary">
          Back to Categories
        </Link>
      </div>
    );
  }

  async function updateCategory(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const slug = name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

    await prisma.category.update({
      where: { id },
      data: {
        name,
        slug,
        description: description || null,
      },
    });

    revalidatePath("/admin/categories");
    redirect("/admin/categories");
  }

  async function deleteCategory() {
    "use server";
    await prisma.category.delete({ where: { id } });
    revalidatePath("/admin/categories");
    redirect("/admin/categories");
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/categories"
          className="text-turkmen-green hover:text-turkmen-gold mb-4 inline-block transition"
        >
          ← Back to Categories
        </Link>
        <h1 className="text-3xl font-bold text-turkmen-green">Edit Category: {category.name}</h1>
        <p className="text-gray-600">Manage category details</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-soft p-8">
            <form action={updateCategory} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Category Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  defaultValue={category.name}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                  placeholder="e.g., Carpets"
                />
                <p className="text-xs text-gray-500 mt-1">Slug will be auto-generated from name</p>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  defaultValue={category.description || ""}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none resize-none"
                  placeholder="Short description of this category..."
                />
              </div>

              <div className="flex gap-4 pt-4 border-t">
                <button type="submit" className="btn btn-primary">
                  Update Category
                </button>
                <Link href="/admin/categories" className="btn btn-ghost">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h3 className="font-bold text-gray-900 mb-4">Category Info</h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-gray-500">Slug</dt>
                <dd className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">{category.slug}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Products</dt>
                <dd className="font-medium text-turkmen-green">{category._count.products} products</dd>
              </div>
              <div>
                <dt className="text-gray-500">Created</dt>
                <dd className="font-medium">
                  {new Date(category.createdAt).toLocaleDateString()}
                </dd>
              </div>
            </dl>
          </div>

          {/* Delete Danger Zone */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-red-900 mb-2">Danger Zone</h3>
            <p className="text-sm text-red-700 mb-4">
              Deleting this category will affect {category._count.products} products. This action cannot be undone.
            </p>
            <form action={deleteCategory}>
              <button
                type="submit"
                className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium"
              >
                Delete Category
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
