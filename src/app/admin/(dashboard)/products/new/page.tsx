import { createProduct } from "@/app/admin/actions";
import { ArrowLeftIcon } from "@/components/admin/icons";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

const badgeOptions = [
  "Täze",
  "Iň köp satylýan",
  "Klassik",
  "Miras",
  "Ýokary hil",
  "Eksport",
  "Meşhur",
  "Sport",
  "Rahat",
];

export default async function NewProductPage() {
  const stores = await prisma.store.findMany({ orderBy: { name: "asc" } });
  const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });

  return (
    <div>
      <div className="mb-8">
        <Link href="/admin/products" className="inline-flex items-center gap-1.5 text-turkmen-green hover:text-turkmen-gold mb-4 transition">
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Products
        </Link>
        <h1 className="text-3xl font-bold text-turkmen-green">Add New Product</h1>
        <p className="text-gray-600">Add a new textile to a store</p>
      </div>

      <div className="bg-white rounded-xl shadow-soft p-8 max-w-3xl">
        <form action={createProduct} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Product Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                placeholder="e.g., Tekke Desert Runner"
              />
            </div>

            <div>
              <label htmlFor="storeId" className="block text-sm font-medium text-gray-700 mb-2">
                Store *
              </label>
              <select
                id="storeId"
                name="storeId"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
              >
                <option value="">Select store...</option>
                {stores.map((store) => (
                  <option key={store.id} value={store.id}>{store.name}</option>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
              >
                <option value="">Select category...</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                Price (TMT) *
              </label>
              <input
                type="number"
                id="price"
                name="price"
                min="1"
                step="0.01"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                placeholder="250.00"
              />
            </div>

            <div>
              <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mb-2">
                Unit
              </label>
              <select
                id="unit"
                name="unit"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
              >
                <option value="piece">Piece</option>
                <option value="m²">m²</option>
                <option value="panel">Panel</option>
              </select>
            </div>

            <div>
              <label htmlFor="fiber" className="block text-sm font-medium text-gray-700 mb-2">
                Fiber / Material *
              </label>
              <input
                type="text"
                id="fiber"
                name="fiber"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                placeholder="Silk, wool, or camelhair"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                placeholder="Hand-knot, flatweave, jacquard"
              />
            </div>

            <div>
              <label htmlFor="badge" className="block text-sm font-medium text-gray-700 mb-2">
                Badge
              </label>
              <select
                id="badge"
                name="badge"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
              >
                <option value="">None</option>
                {badgeOptions.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-2">
                Stock
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                min="0"
                defaultValue="1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label htmlFor="delivery" className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Info
              </label>
              <input
                type="text"
                id="delivery"
                name="delivery"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
                placeholder="Ready to ship, Ships in 5 days"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none resize-none"
                placeholder="Detailed description..."
              />
            </div>

            {/* Translations */}
            <div className="col-span-2 pt-4 border-t">
              <h3 className="text-lg font-bold text-turkmen-green mb-4">Translations (EN / RU)</h3>
            </div>
            <div>
              <label htmlFor="nameEn" className="block text-sm font-medium text-gray-700 mb-2">Name (EN)</label>
              <input type="text" id="nameEn" name="nameEn" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none" placeholder="English name" />
            </div>
            <div>
              <label htmlFor="nameRu" className="block text-sm font-medium text-gray-700 mb-2">Name (RU)</label>
              <input type="text" id="nameRu" name="nameRu" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none" placeholder="Русское название" />
            </div>
            <div>
              <label htmlFor="descriptionEn" className="block text-sm font-medium text-gray-700 mb-2">Description (EN)</label>
              <textarea id="descriptionEn" name="descriptionEn" rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none resize-none" placeholder="English description" />
            </div>
            <div>
              <label htmlFor="descriptionRu" className="block text-sm font-medium text-gray-700 mb-2">Description (RU)</label>
              <textarea id="descriptionRu" name="descriptionRu" rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none resize-none" placeholder="Описание на русском" />
            </div>
            <div>
              <label htmlFor="fiberEn" className="block text-sm font-medium text-gray-700 mb-2">Fiber (EN)</label>
              <input type="text" id="fiberEn" name="fiberEn" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none" placeholder="e.g., Cotton" />
            </div>
            <div>
              <label htmlFor="fiberRu" className="block text-sm font-medium text-gray-700 mb-2">Fiber (RU)</label>
              <input type="text" id="fiberRu" name="fiberRu" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none" placeholder="напр., Хлопок" />
            </div>
            <div>
              <label htmlFor="techniqueEn" className="block text-sm font-medium text-gray-700 mb-2">Technique (EN)</label>
              <input type="text" id="techniqueEn" name="techniqueEn" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none" placeholder="e.g., Hand-knotted" />
            </div>
            <div>
              <label htmlFor="techniqueRu" className="block text-sm font-medium text-gray-700 mb-2">Technique (RU)</label>
              <input type="text" id="techniqueRu" name="techniqueRu" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none" placeholder="напр., Ручное ткачество" />
            </div>

            <div className="col-span-2">
              <label className="flex items-center gap-3">
                <input type="checkbox" name="isFeatured" className="w-5 h-5 rounded" />
                <span className="text-sm text-gray-700">Featured product (show on homepage)</span>
              </label>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <SubmitButton label="Create Product" pendingLabel="Creating..." />
            <Link
              href="/admin/products"
              className="btn btn-ghost"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
