import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "./shop/actions";
import { addToCompare } from "./compare/actions";

export default async function Home() {
  const [featuredProducts, latestArrivals] = await Promise.all([
    prisma.product.findMany({
      where: { isFeatured: true, isActive: true },
      take: 3,
      include: {
        images: true,
        store: true,
        category: true,
      },
    }),
    prisma.product.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
      take: 4,
      include: {
        images: true,
        store: true,
        category: true,
      },
    }),
  ]);

  return (
    <div className="min-h-screen bg-desert-sand">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-32 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-main.jpg"
            alt="Turkmen Textiles"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-turkmen-green/90 via-turkmen-green/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto flex items-center gap-12 relative z-10">
          <div className="flex-1 max-w-2xl animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-turkmen-gold/20 text-turkmen-gold border border-turkmen-gold/30 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
              SINCE 1924
            </span>
            <h1 className="text-6xl font-bold uppercase tracking-tight leading-none mb-6 font-serif">
              Woven With <span className="text-turkmen-gold">Soul</span>
            </h1>
            <p className="text-xl max-w-xl mb-10 opacity-90 leading-relaxed font-light">
              Dowletowa Textiles celebrates the living heritage of Turkmenistan&apos;s master weavers.
              Discover carpets, silks, and art that embody the spirit of the desert.
            </p>
            <div className="flex gap-4">
              <Link href="/shop" className="btn btn-primary text-lg px-8 py-4 shadow-xl shadow-turkmen-green/20">
                Start Shopping
              </Link>
              <Link href="/shop?category=silks" className="btn btn-secondary text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white hover:text-turkmen-green backdrop-blur-md">
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-turkmen-green mb-4 font-serif">Curated Masterpieces</h2>
            <div className="h-1 w-24 bg-turkmen-gold mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Hand-selected for their exceptional craftsmanship and rarity. These pieces represent the pinnacle of our cooperative&apos;s work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <article key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 mb-6 shadow-md transition-shadow group-hover:shadow-xl">
                  {product.badge && (
                    <span className="absolute top-4 left-4 z-20 bg-turkmen-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  <Link href={`/shop/${product.slug}`} className="block relative w-full h-full">
                    {product.images[0] ? (
                      <Image
                        src={product.images[0].path}
                        alt={product.images[0].alt || product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-6xl opacity-20">🧶</div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </Link>

                  {/* Quick Add Button */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <form action={async () => {
                      "use server";
                      await addToCart(product.id);
                    }}>
                      <button className="w-full btn bg-white text-turkmen-green hover:bg-turkmen-green hover:text-white border-none shadow-lg py-3 font-semibold">
                        Add to Cart
                      </button>
                    </form>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-semibold text-turkmen-gold uppercase tracking-wider">{product.category.name}</p>
                    <p className="text-lg font-bold text-gray-900">${product.price}</p>
                  </div>
                  <Link href={`/shop/${product.slug}`}>
                    <h3 className="text-2xl font-serif text-turkmen-green hover:underline decoration-turkmen-gold underline-offset-4 mb-2">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-gray-500 line-clamp-2 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Arrivals */}
      <section className="py-20 px-6 bg-desert-sand/30 border-t border-turkmen-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-turkmen-green mb-2 font-serif">Latest Arrivals</h2>
              <p className="text-gray-600">Fresh from the looms of Mary and Ashgabat.</p>
            </div>
            <Link href="/shop" className="text-turkmen-gold hover:text-turkmen-green font-semibold flex items-center gap-2 group transition-colors">
              View All
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestArrivals.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-turkmen-gold/5">
                <div className="aspect-square bg-gray-50 relative overflow-hidden">
                  <Link href={`/shop/${product.slug}`} className="block relative w-full h-full">
                    {product.images[0] ? (
                      <Image
                        src={product.images[0].path}
                        alt={product.images[0].alt || product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl opacity-20">🧶</div>
                    )}
                  </Link>
                  {product.badge && (
                    <span className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur text-xs font-bold text-turkmen-green rounded shadow-sm">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <Link href={`/store/${product.store?.slug || 'dowletowa'}`} className="text-xs text-turkmen-gold font-bold uppercase mb-1 block">
                    {product.store?.name}
                  </Link>
                  <Link href={`/shop/${product.slug}`}>
                    <h3 className="font-bold text-turkmen-green mb-2 truncate group-hover:text-turkmen-gold transition-colors">{product.name}</h3>
                  </Link>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-gray-900">${product.price}</span>
                    <form action={async () => {
                      "use server";
                      await addToCompare(product.id);
                    }}>
                      <button className="text-gray-400 hover:text-turkmen-green p-1 transition-colors" title="Compare">
                        <span className="sr-only">Compare</span>
                        ➕
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <article className="p-8 bg-white/50 rounded-2xl border border-turkmen-gold/20 hover:bg-white transition-colors">
            <span className="text-4xl mb-4 block">🕌</span>
            <h3 className="text-xl font-bold text-turkmen-green mb-3">Authentic Origins</h3>
            <p className="text-gray-600 leading-relaxed">
              Each textile originates from villages renowned for their unique guls and knotting traditions.
            </p>
          </article>
          <article className="p-8 bg-white/50 rounded-2xl border border-turkmen-gold/20 hover:bg-white transition-colors">
            <span className="text-4xl mb-4 block">🐪</span>
            <h3 className="text-xl font-bold text-turkmen-green mb-3">Sustainable Fibers</h3>
            <p className="text-gray-600 leading-relaxed">
              Hand-spun wool, camelhair, and mulberry silk dyed with natural pigments.
            </p>
          </article>
          <article className="p-8 bg-white/50 rounded-2xl border border-turkmen-gold/20 hover:bg-white transition-colors">
            <span className="text-4xl mb-4 block">🤝</span>
            <h3 className="text-xl font-bold text-turkmen-green mb-3">Living Heritage</h3>
            <p className="text-gray-600 leading-relaxed">
              Investing in apprenticeships that ensure timeless crafts adapt to modern tastes.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
