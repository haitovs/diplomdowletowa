import { DeleteButton } from "@/components/admin/DeleteButton";
import { ArrowLeftIcon } from "@/components/admin/icons";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function EditStorePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const store = await prisma.store.findUnique({
    where: { id },
    include: {
      _count: {
        select: { products: true },
      },
    },
  });

  if (!store) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Store Not Found</h1>
        <Link href="/admin/stores" className="btn btn-primary">
          Back to Stores
        </Link>
      </div>
    );
  }

  async function updateStore(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const origin = formData.get("origin") as string;
    const specialty = formData.get("specialty") as string;
    const description = formData.get("description") as string;
    const isActive = formData.get("isActive") === "on";

    await prisma.store.update({
      where: { id },
      data: {
        name,
        origin,
        specialty,
        description: description || null,
        isActive,
      },
    });

    revalidatePath("/admin/stores");
    redirect("/admin/stores");
  }

  async function deleteStore() {
    "use server";
    await prisma.store.delete({ where: { id } });
    revalidatePath("/admin/stores");
    redirect("/admin/stores");
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/stores"
          className="inline-flex items-center gap-1.5 text-turkmen-green hover:text-turkmen-gold mb-4 transition"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Stores
        </Link>
        <h1 className="text-3xl font-bold text-turkmen-green">Edit Store: {store.name}</h1>
        <p className="text-gray-600">Manage partner company details</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-soft p-8">
            <form action={updateStore} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Store Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  defaultValue={store.name}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                  placeholder="e.g., Karakum Weavers Cooperative"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-2">
                    Origin *
                  </label>
                  <input
                    type="text"
                    id="origin"
                    name="origin"
                    required
                    defaultValue={store.origin}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                    placeholder="City or region"
                  />
                </div>

                <div>
                  <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
                    Specialty *
                  </label>
                  <input
                    type="text"
                    id="specialty"
                    name="specialty"
                    required
                    defaultValue={store.specialty}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                    placeholder="What they are known for"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  defaultValue={store.description || ""}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none resize-none"
                  placeholder="Detailed description of the store..."
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isActive"
                  name="isActive"
                  defaultChecked={store.isActive}
                  className="w-5 h-5 text-turkmen-green focus:ring-turkmen-green border-gray-300 rounded"
                />
                <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                  Store is active and visible on website
                </label>
              </div>

              <div className="flex gap-4 pt-4 border-t">
                <SubmitButton label="Update Store" pendingLabel="Updating..." />
                <Link href="/admin/stores" className="btn btn-ghost">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h3 className="font-bold text-gray-900 mb-4">Store Info</h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-gray-500">Products</dt>
                <dd className="font-medium text-turkmen-green">{store._count.products} products</dd>
              </div>
              <div>
                <dt className="text-gray-500">Created</dt>
                <dd className="font-medium">
                  {new Date(store.createdAt).toLocaleDateString()}
                </dd>
              </div>
              <div>
                <dt className="text-gray-500">Status</dt>
                <dd>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      store.isActive
                        ? "bg-green-100 text-green-700 border border-green-200"
                        : "bg-gray-100 text-gray-700 border border-gray-200"
                    }`}
                  >
                    {store.isActive ? "Active" : "Inactive"}
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          {/* Delete Danger Zone */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-red-900 mb-2">Danger Zone</h3>
            <p className="text-sm text-red-700 mb-4">
              Deleting this store will also remove all {store._count.products} associated products. This action cannot be undone.
            </p>
            <DeleteButton
              action={deleteStore}
              entityName="Store"
              description={`This will permanently delete the store and all ${store._count.products} associated products.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
