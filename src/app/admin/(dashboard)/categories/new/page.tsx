import { ArrowLeftIcon } from "@/components/admin/icons";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function NewCategoryPage() {
  async function createCategory(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const slug = name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

    await prisma.category.create({
      data: {
        name,
        slug,
        description: description || null,
      },
    });

    revalidatePath("/admin/categories");
    redirect("/admin/categories");
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/categories"
          className="inline-flex items-center gap-1.5 text-turkmen-green hover:text-turkmen-gold mb-4 transition"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Categories
        </Link>
        <h1 className="text-3xl font-bold text-turkmen-green">Add New Category</h1>
        <p className="text-gray-600">Create a new product category</p>
      </div>

      <div className="bg-white rounded-xl shadow-soft p-8 max-w-2xl">
        <form action={createCategory} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Category Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none resize-none"
              placeholder="Short description of this category..."
            />
          </div>

          <div className="flex gap-4">
            <SubmitButton label="Create Category" pendingLabel="Creating..." />
            <Link href="/admin/categories" className="btn btn-ghost">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
