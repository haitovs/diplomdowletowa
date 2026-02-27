import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { prisma } from "@/lib/prisma";
import { getLocaleFromCookie, t } from "@/lib/i18n";
import { localizedField } from "@/lib/localized";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { addToCompare } from "../../compare/actions";
import { addToCart } from "../actions";

// Generate metadata dynamically
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({ where: { slug } });

  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Heritage Textiles`,
    description: product.description.substring(0, 160),
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.get("locale")?.value);

  const { slug } = await params;

  // 1. Fetch main product
  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      store: true,
      category: true,
      images: true,
    },
  });

  if (!product) notFound();

  // 2. Fetch related products (same category, excluding current)
  const relatedProducts = await prisma.product.findMany({
    where: {
      categoryId: product.categoryId,
      id: { not: product.id },
      isActive: true,
    },
    take: 3,
    include: { store: true },
  });

  // Determine main image
  const mainImage = product.images.length > 0
    ? (product.images.find(img => img.isPrimary) || product.images[0]).path
    : null;

  return (
    <div className="min-h-screen bg-desert-sand">
      <Header />

      {/* Breadcrumbs */}
      <div className="bg-white/50 border-b border-turkmen-gold/20 py-3 px-6">
        <div className="max-w-6xl mx-auto text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-turkmen-green">{t("product.home", locale)}</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-turkmen-green">{t("product.shop", locale)}</Link>
          <span>/</span>
          <Link href={`/shop?category=${product.category.slug}`} className="hover:text-turkmen-green">{localizedField(product.category, "name", locale)}</Link>
          <span>/</span>
          <span className="text-turkmen-green font-medium">{localizedField(product, "name", locale)}</span>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column: Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] bg-white rounded-xl shadow-soft border border-turkmen-gold/10 flex items-center justify-center relative overflow-hidden group">
              {product.badge && (
                 <span className={`absolute top-4 left-4 z-10 pill ${
                  ['täze', 'new'].includes(product.badge.toLowerCase()) ? 'bg-emerald-500 text-white' :
                  ['iň köp satylýan', 'bestseller', 'meşhur', 'popular'].includes(product.badge.toLowerCase()) ? 'bg-amber-500 text-white' :
                  ['miras', 'heritage', 'klassik', 'classic'].includes(product.badge.toLowerCase()) ? 'bg-purple-500 text-white' :
                  ['eksport', 'export', 'ýokary hil', 'premium'].includes(product.badge.toLowerCase()) ? 'bg-blue-500 text-white' :
                  'pill-accent'
                }`}>
                  {t(`badge.${product.badge}`, locale) !== `badge.${product.badge}` ? t(`badge.${product.badge}`, locale) : product.badge}
                </span>
              )}

              {mainImage ? (
                <Image
                  src={mainImage}
                  alt={localizedField(product, "name", locale)}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <span className="text-8xl opacity-20">🧶</span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((img) => (
                  <div key={img.id} className="w-24 h-24 flex-shrink-0 bg-white rounded-lg border border-turkmen-gold/20 overflow-hidden cursor-pointer hover:border-turkmen-gold transition relative">
                    <Image src={img.path} alt={img.alt || localizedField(product, "name", locale)} fill className="object-cover" sizes="96px" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details */}
          <div>
            <div className="mb-2">
              <Link href={`/store/${product.store.slug}`} className="text-sm font-bold tracking-wide text-turkmen-gold uppercase hover:underline">
                {localizedField(product.store, "name", locale)}
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-turkmen-green mb-4 leading-tight">{localizedField(product, "name", locale)}</h1>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-bold text-gray-900">{product.price.toFixed(0)} TMT</span>
              <span className="text-gray-500">/ {t(`unit.${product.unit}`, locale) !== `unit.${product.unit}` ? t(`unit.${product.unit}`, locale) : product.unit}</span>
            </div>

            <div className="flex gap-4 mb-8">
              <form action={async () => {
                "use server";
                await addToCart(product.id);
              }} className="flex-1">
                <button className="btn btn-primary w-full py-4 text-lg shadow-lg shadow-turkmen-green/20">
                  {t("product.add_to_cart", locale)}
                </button>
              </form>
              <form action={async () => {
                "use server";
                await addToCompare(product.id);
              }}>
                <button className="btn btn-secondary py-4 px-6 border-2">
                  {t("product.compare", locale)}
                </button>
              </form>
            </div>

            <div className="prose prose-stone max-w-none mb-8 text-gray-600">
              <p>{localizedField(product, "description", locale)}</p>
            </div>

            <div className="bg-white rounded-xl border border-turkmen-gold/20 overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold text-gray-500 bg-gray-50 w-1/3">{t("product.type", locale)}</td>
                    <td className="py-3 px-4 text-gray-800">{localizedField(product.category, "name", locale)}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold text-gray-500 bg-gray-50">{t("product.fiber", locale)}</td>
                    <td className="py-3 px-4 text-gray-800">{localizedField(product, "fiber", locale)}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold text-gray-500 bg-gray-50">{t("product.technique", locale)}</td>
                    <td className="py-3 px-4 text-gray-800">{localizedField(product, "technique", locale)}</td>
                  </tr>
                  {product.dimensions && (
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-semibold text-gray-500 bg-gray-50">{t("product.dimensions", locale)}</td>
                      <td className="py-3 px-4 text-gray-800">{product.dimensions}</td>
                    </tr>
                  )}
                  <tr>
                    <td className="py-3 px-4 font-semibold text-gray-500 bg-gray-50">{t("product.availability", locale)}</td>
                    <td className="py-3 px-4">
                      {product.stock > 0 ? (
                        <span className="text-emerald-600 font-medium flex items-center gap-1">
                          ● {t("product.in_stock", locale)} ({product.stock})
                        </span>
                      ) : (
                        <span className="text-red-500 font-medium">{t("product.out_of_stock", locale)}</span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {product.delivery && (
              <div className="mt-6 flex items-start gap-3 p-4 bg-turkmen-green/5 rounded-lg text-sm text-turkmen-green">
                <span className="text-xl">🚚</span>
                <div>
                  <span className="font-bold block mb-1">{t("product.shipping_info", locale)}</span>
                  {product.delivery}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-turkmen-green mb-6 pb-2 border-b border-turkmen-gold/30">
              {t("product.related", locale)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((related) => (
                <article key={related.id} className="product-card flex flex-col group">
                   <Link href={`/shop/${related.slug}`} className="block">
                    <div className="aspect-[4/3] bg-turkmen-green/5 relative flex items-center justify-center overflow-hidden">
                       <span className="text-6xl opacity-30 transition group-hover:scale-110">🧶</span>
                    </div>
                  </Link>
                  <div className="p-4 flex flex-col flex-1">
                    <p className="text-sm text-gray-500 mb-1">{localizedField(related.store, "name", locale)}</p>
                    <Link href={`/shop/${related.slug}`} className="block">
                      <h3 className="font-bold text-lg text-turkmen-green mb-1 group-hover:text-turkmen-gold transition">{localizedField(related, "name", locale)}</h3>
                    </Link>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-1">{localizedField(related, "fiber", locale)}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-2xl font-bold text-turkmen-green">{Number(related.price).toFixed(0)} TMT</span>
                      <Link href={`/shop/${related.slug}`} className="text-turkmen-gold hover:underline text-sm font-semibold">
                        {t("product.view_details", locale)} →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
