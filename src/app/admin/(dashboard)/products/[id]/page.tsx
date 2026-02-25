import { ImageUpload } from "@/components/admin/ImageUpload";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  const [product, stores, categories] = await Promise.all([
    prisma.product.findUnique({
      where: { id },
      include: {
        store: true,
        category: true,
        images: true,
      },
    }),
    prisma.store.findMany({ where: { isActive: true } }),
    prisma.category.findMany(),
  ]);

  if (!product) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <Link href="/admin/products" className="btn btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  async function updateProduct(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = parseFloat(formData.get("price") as string);
    const unit = formData.get("unit") as string;
    const fiber = formData.get("fiber") as string;
    const technique = formData.get("technique") as string;
    const dimensions = formData.get("dimensions") as string;
    const stock = parseInt(formData.get("stock") as string);
    const storeId = formData.get("storeId") as string;
    const categoryId = formData.get("categoryId") as string;
    const badge = formData.get("badge") as string;
    const isActive = formData.get("isActive") === "on";
    const isFeatured = formData.get("isFeatured") === "on";

    await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        price,
        unit,
        fiber,
        technique,
        dimensions: dimensions || null,
        stock,
        storeId,
        categoryId,
        badge: badge || null,
        isActive,
        isFeatured,
      },
    });

    revalidatePath("/admin/products");
    redirect("/admin/products");
  }

  async function deleteProduct() {
    "use server";
    await prisma.product.delete({ where: { id } });
    revalidatePath("/admin/products");
    redirect("/admin/products");
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/products"
          className="text-turkmen-green hover:text-turkmen-gold mb-4 inline-block transition"
        >
          ← Back to Products
        </Link>
        <h1 className="text-3xl font-bold text-turkmen-green">Edit Product: {product.name}</h1>
        <p className="text-gray-600">Manage product details and inventory</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-soft p-8">
            <form action={updateProduct} className="space-y-6">
              {/* Basic Info */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  defaultValue={product.name}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  defaultValue={product.description}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none resize-none"
                />
              </div>

              {/* Price & Stock */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                    Price ($) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    id="price"
                    name="price"
                    required
                    defaultValue={product.price}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mb-2">
                    Unit *
                  </label>
                  <select
                    id="unit"
                    name="unit"
                    required
                    defaultValue={product.unit}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                  >
                    <option value="piece">Piece</option>
                    <option value="m²">m²</option>
                    <option value="panel">Panel</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-2">
                    Stock *
                  </label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    required
                    defaultValue={product.stock}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Material & Technique */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fiber" className="block text-sm font-medium text-gray-700 mb-2">
                    Fiber/Material *
                  </label>
                  <input
                    type="text"
                    id="fiber"
                    name="fiber"
                    required
                    defaultValue={product.fiber}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                    placeholder="e.g., Mulberry silk"
                  />
                </div>

                <div>
                  <label htmlFor="technique" className="block text-sm font-medium text-gray-700 mb-2">
                    Technique *
                  </label>
                  <input
                    type="text"
                    id="technique"
                    name="technique"
                    required
                    defaultValue={product.technique}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                    placeholder="e.g., Hand-knotted"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700 mb-2">
                  Dimensions
                </label>
                <input
                  type="text"
                  id="dimensions"
                  name="dimensions"
                  defaultValue={product.dimensions || ""}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                  placeholder="e.g., 2m x 1.5m"
                />
              </div>

              {/* Category & Store */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="storeId" className="block text-sm font-medium text-gray-700 mb-2">
                    Store/Artisan *
                  </label>
                  <select
                    id="storeId"
                    name="storeId"
                    required
                    defaultValue={product.storeId}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                  >
                    {stores.map((store) => (
                      <option key={store.id} value={store.id}>
                        {store.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    id="categoryId"
                    name="categoryId"
                    required
                    defaultValue={product.categoryId}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="badge" className="block text-sm font-medium text-gray-700 mb-2">
                  Badge (Optional)
                </label>
                <select
                  id="badge"
                  name="badge"
                  defaultValue={product.badge || ""}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                >
                  <option value="">None</option>
                  <option value="New">New</option>
                  <option value="Bestseller">Bestseller</option>
                  <option value="Limited">Limited Edition</option>
                  <option value="Gallery">Gallery</option>
                </select>
              </div>

              {/* Toggles */}
              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="isActive"
                    name="isActive"
                    defaultChecked={product.isActive}
                    className="w-5 h-5 text-turkmen-green focus:ring-turkmen-green border-gray-300 rounded"
                  />
                  <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                    Product is active and visible on website
                  </label>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="isFeatured"
                    name="isFeatured"
                    defaultChecked={product.isFeatured}
                    className="w-5 h-5 text-turkmen-green focus:ring-turkmen-green border-gray-300 rounded"
                  />
                  <label htmlFor="isFeatured" className="text-sm font-medium text-gray-700">
                    Feature on homepage
                  </label>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t">
                <button type="submit" className="btn btn-primary">
                  Update Product
                </button>
                <Link href="/admin/products" className="btn btn-ghost">
                  Cancel
                </Link>
              </div>
            </form>
          </div>

          {/* Image Upload Section */}
          <div className="bg-white rounded-xl shadow-soft p-8 mt-6">
            <ImageUpload productId={id} existingImages={product.images} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h3 className="font-bold text-gray-900 mb-4">Product Info</h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-gray-500">Store</dt>
                <dd className="font-medium">{product.store.name}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Category</dt>
                <dd className="font-medium">{product.category.name}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Created</dt>
                <dd className="font-medium">
                  {new Date(product.createdAt).toLocaleDateString()}
                </dd>
              </div>
              <div>
                <dt className="text-gray-500">Status</dt>
                <dd>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      product.isActive
                        ? "bg-green-100 text-green-700 border border-green-200"
                        : "bg-gray-100 text-gray-700 border border-gray-200"
                    }`}
                  >
                    {product.isActive ? "Active" : "Inactive"}
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          {/* Delete Danger Zone */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-red-900 mb-2">Danger Zone</h3>
            <p className="text-sm text-red-700 mb-4">
              Deleting this product is permanent and cannot be undone.
            </p>
            <form action={deleteProduct}>
              <button
                type="submit"
                className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium"
              >
                Delete Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
