import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import { addToCompare } from "../../compare/actions";
import { addToCart } from "../../shop/actions";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const store = await prisma.store.findUnique({ where: { slug } });
  
  if (!store) return { title: "Artisan Not Found" };
  
  return {
    title: `${store.name} | Dowletowa Textiles`,
    description: store.description?.substring(0, 160) || `Handcrafted textiles from ${store.name}`,
  };
}

export default async function StoreDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch store with products
  const store = await prisma.store.findUnique({
    where: { slug },
    include: {
      products: {
        where: { isActive: true },
        include: { store: true },
        orderBy: { createdAt: "desc" },
      },
      _count: {
        select: { products: true },
      },
    },
  });

  if (!store || !store.isActive) notFound();

  return (
    <div className="min-h-screen bg-desert-sand">
      <Header />

      {/* Hero Section */}
      <section className="bg-turkmen-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-6xl mx-auto px-6 py-16 relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Logo/Avatar */}
          <div className="w-32 h-32 bg-white/10 rounded-full border-2 border-turkmen-gold flex items-center justify-center flex-shrink-0 shadow-lg backdrop-blur-sm">
            {store.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={store.logo} alt={store.name} className="w-full h-full object-cover rounded-full" />
            ) : (
              <span className="text-4xl text-turkmen-gold font-serif font-bold">
                {store.name.substring(0, 2).toUpperCase()}
              </span>
            )}
          </div>
          
          <div className="text-center md:text-left flex-1">
            <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold font-serif tracking-wide">{store.name}</h1>
              <span className="px-3 py-1 bg-turkmen-gold text-turkmen-green text-xs font-bold uppercase tracking-wider rounded-full">
                {store.specialty}
              </span>
            </div>
            
            <p className="text-turkmen-gold/90 mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="text-lg">📍</span> {store.origin}
            </p>
            
            <p className="text-white/80 max-w-2xl text-lg leading-relaxed mb-6">
              {store.description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
               <a href={`mailto:hello@dowletowa.tm?subject=Inquiry for ${store.name}`} className="btn btn-secondary py-2 px-6 text-sm">
                Contact Artisan
               </a>
               <div className="px-4 py-2 border border-white/20 rounded-lg text-sm bg-white/5">
                 {store._count.products} Products Available
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-turkmen-green">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-turkmen-green">Shop</Link>
          <span>/</span>
          <span className="text-turkmen-green font-medium">Artisans</span>
          <span>/</span>
          <span className="text-gray-800">{store.name}</span>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-turkmen-green mb-8 pb-2 border-b border-turkmen-gold/30">
          Collection from {store.name}
        </h2>

        {store.products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {store.products.map((product) => (
              <article key={product.id} className="product-card flex flex-col group">
                <Link href={`/shop/${product.slug}`}>
                  <div className="aspect-[4/3] bg-turkmen-green/5 relative flex items-center justify-center overflow-hidden">
                    {product.badge && (
                      <span className="absolute top-3 left-3 z-10 pill pill-accent">
                        {product.badge}
                      </span>
                    )}
                    <span className="text-6xl opacity-30 transition group-hover:scale-110">🧶</span>
                  </div>
                </Link>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-lg text-turkmen-green mb-1 group-hover:text-turkmen-gold transition">
                    <Link href={`/shop/${product.slug}`}>{product.name}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{product.fiber}</p>
                  
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-turkmen-green">${Number(product.price).toFixed(0)}</span>
                      <span className="text-sm text-gray-400">/{product.unit}</span>
                    </div>
                    <div className="flex gap-2">
                      <form action={async () => {
                        "use server";
                        await addToCart(product.id);
                      }} className="flex-1">
                        <button className="btn btn-primary w-full py-2 text-sm">Add to Cart</button>
                      </form>
                      <form action={async () => {
                        "use server";
                        await addToCompare(product.id);
                      }}>
                        <button className="btn btn-ghost py-2 px-3 text-sm">Compare</button>
                      </form>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
            <span className="text-4xl mb-4 block opacity-50">🧶</span>
            <p className="text-xl text-gray-500 mb-2">No products currently listed</p>
            <p className="text-gray-400">This artisan is crafting new pieces. Check back soon.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
