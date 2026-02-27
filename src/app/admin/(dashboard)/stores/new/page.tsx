import { createStore } from "@/app/admin/actions";
import { ArrowLeftIcon } from "@/components/admin/icons";
import { SubmitButton } from "@/components/admin/SubmitButton";
import Link from "next/link";

export default function NewStorePage() {
  return (
    <div>
      <div className="mb-8">
        <Link href="/admin/stores" className="inline-flex items-center gap-1.5 text-turkmen-green hover:text-turkmen-gold mb-4 transition">
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Stores
        </Link>
        <h1 className="text-3xl font-bold text-turkmen-green">Add New Store</h1>
        <p className="text-gray-600">Create a new partner company</p>
      </div>

      <div className="bg-white rounded-xl shadow-soft p-8 max-w-2xl">
        <form action={createStore} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Store Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
              placeholder="e.g., Karakum Weavers Cooperative"
            />
          </div>

          <div>
            <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-2">
              Origin *
            </label>
            <input
              type="text"
              id="origin"
              name="origin"
              required
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turkmen-green focus:border-transparent outline-none"
              placeholder="What they are known for"
            />
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
              placeholder="Detailed description of the store..."
            />
          </div>

          <div className="flex gap-4">
            <SubmitButton label="Create Store" pendingLabel="Creating..." />
            <Link
              href="/admin/stores"
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
