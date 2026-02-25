import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { clearCompare, getCompare, removeFromCompare } from "./actions";

export default async function ComparePage() {
  const items = await getCompare();
  const products = items.map(item => item.product);

  return (
    <div className="min-h-screen bg-desert-sand">
      <Header />

      {/* Hero */}
      <section className="hero-gradient text-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-turkmen-gold mb-2">Price & Material Check</p>
          <h1 className="text-4xl font-bold uppercase tracking-wide mb-4">Compare Saved Textiles</h1>
          <p className="opacity-90 max-w-3xl mb-6">
            Items you marked on the shopping page appear here. Keep up to three products, remove any you no longer want, and return to the shop to add more.
          </p>
          <div className="flex gap-4">
            <Link href="/shop" className="btn btn-primary">
              Back to Shopping
            </Link>
            {products.length > 0 && (
              <form action={clearCompare}>
                <button type="submit" className="btn btn-secondary">
                  Clear List
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="card mb-8">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-wide text-turkmen-green font-bold">Up to 3 Items</p>
            <h2 className="text-2xl font-bold text-turkmen-green">Side-by-side Overview</h2>
            <p className="text-gray-600 mt-2">We highlight the best price automatically. Details stay minimal so you can make quick choices.</p>
          </div>

          {/* Product Cards */}
          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No items saved. Go back to the shop and press "Compare".</p>
              <Link href="/shop" className="btn btn-primary">
                Start Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {products.map((product, index) => {
                  const item = items[index];
                  return (
                    <article key={product.id} className="product-card border-2 border-turkmen-red/30">
                      <div className="aspect-[4/3] bg-turkmen-green/5 relative flex items-center justify-center">
                        <span className="text-6xl opacity-30">🧶</span>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-500 mb-1">{product.store.name}</p>
                        <h3 className="font-bold text-lg text-turkmen-green mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{product.fiber}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-turkmen-green">${Number(product.price).toFixed(0)}</span>
                          <form action={async () => {
                            "use server";
                            await removeFromCompare(item.id);
                          }}>
                            <button type="submit" className="text-red-500 text-sm hover:underline">
                              Remove
                            </button>
                          </form>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-turkmen-gold/20">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-turkmen-green">Product</th>
                      <th className="px-4 py-3 text-left font-bold text-turkmen-green">Price</th>
                      <th className="px-4 py-3 text-left font-bold text-turkmen-green">Fiber</th>
                      <th className="px-4 py-3 text-left font-bold text-turkmen-green">Technique</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => {
                      const bestPrice = Math.min(...products.map(p => Number(p.price)));
                      const isBest = Number(product.price) === bestPrice;
                      return (
                        <tr key={product.id} className={`border-t ${isBest ? 'bg-turkmen-green/10 border-turkmen-green/30' : ''}`}>
                          <td className="px-4 py-3">{product.name}</td>
                          <td className="px-4 py-3 font-bold text-turkmen-green">${Number(product.price).toFixed(0)}</td>
                          <td className="px-4 py-3 text-gray-600">{product.fiber}</td>
                          <td className="px-4 py-3 text-gray-600">{product.technique}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
