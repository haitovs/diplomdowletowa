import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const metadata = {
  title: "Artisan Partners | Heritage Textiles",
  description: "Meet the cooperatives and families weaving our heritage.",
};

export default async function StoresPage() {
  const stores = await prisma.store.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" },
    include: {
      _count: {
        select: { products: true },
      },
    },
  });

  return (
    <div className="min-h-screen bg-desert-sand">
      <Header />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-bold uppercase tracking-wide mb-4">Our Artisan Partners</h1>
            <p className="text-lg opacity-95 max-w-2xl">
              From the Kopet Dag mountains to the Karakum Desert, we partner with family cooperatives dedicated to preserving Turkmen excellence.
            </p>
          </div>
          <div className="hidden lg:block w-80 h-72 bg-white/10 rounded-xl border-2 border-turkmen-gold/50 shadow-xl flex items-center justify-center">
            <span className="text-turkmen-gold text-6xl">🤝</span>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores.map((store) => (
            <Link key={store.id} href={`/store/${store.slug}`} className="group h-full">
              <article className="card h-full flex flex-col hover:-translate-y-1 transition duration-300 border-2 border-transparent hover:border-turkmen-gold/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-turkmen-green/10 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-serif text-turkmen-green font-bold">
                    {store.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={store.logo} alt="" className="w-full h-full object-cover rounded-full" />
                    ) : (
                      store.name.substring(0, 2).toUpperCase()
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-turkmen-green group-hover:text-turkmen-gold transition">{store.name}</h3>
                    <p className="text-sm text-turkmen-gold font-semibold uppercase tracking-wider">{store.specialty}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-3 flex-1">{store.description}</p>
                
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-gray-500">
                    📍 {store.origin}
                  </span>
                  <span className="bg-turkmen-green/10 text-turkmen-green px-3 py-1 rounded-full font-medium">
                    {store._count.products} Items
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
        
        {stores.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No active artisan partners found.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
