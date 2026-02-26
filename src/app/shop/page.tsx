import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { prisma } from "@/lib/prisma";
import { getLocaleFromCookie, t } from "@/lib/i18n";
import Image from "next/image";
import { cookies } from "next/headers";
import { addToCompare } from "../compare/actions";
import { addToCart } from "./actions";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; store?: string; search?: string; sort?: string }>;
}) {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.get("locale")?.value);

  const params = await searchParams;
  const { category, store, search, sort } = params;

  // Build query
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = { isActive: true };
  if (category) where.category = { slug: category };
  if (store) where.store = { slug: store };
  if (search) {
    where.OR = [
      { name: { contains: search } },
      { fiber: { contains: search } },
      { technique: { contains: search } },
    ];
  }

  // Sort options
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let orderBy: any = { createdAt: "desc" };
  if (sort === "price-asc") orderBy = { price: "asc" };
  if (sort === "price-desc") orderBy = { price: "desc" };
  if (sort === "name") orderBy = { name: "asc" };

  const [products, categories, stores] = await Promise.all([
    prisma.product.findMany({
      where,
      orderBy,
      include: {
        store: { select: { name: true, slug: true } },
        category: { select: { name: true, slug: true } },
        images: { where: { isPrimary: true }, take: 1 },
      },
    }),
    prisma.category.findMany({ orderBy: { name: "asc" } }),
    prisma.store.findMany({ where: { isActive: true }, orderBy: { name: "asc" } }),
  ]);

  return (
    <div className="min-h-screen bg-desert-sand">
      <Header />

      {/* Hero */}
      <section className="hero-gradient text-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold uppercase tracking-wide mb-2">{t("shop.title", locale)}</h1>
          <p className="opacity-90">{t("shop.subtitle", locale)}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="card mb-8">
          <form className="flex flex-wrap gap-4 items-end">
            <label className="flex flex-col gap-1.5 font-semibold text-turkmen-green text-sm">
              {t("shop.filter_category", locale)}
              <select name="category" defaultValue={category || ""} className="input-field py-2">
                <option value="">{t("shop.all_categories", locale)}</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.slug}>{cat.name}</option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1.5 font-semibold text-turkmen-green text-sm">
              {t("shop.filter_store", locale)}
              <select name="store" defaultValue={store || ""} className="input-field py-2">
                <option value="">{t("shop.all_stores", locale)}</option>
                {stores.map((s) => (
                  <option key={s.id} value={s.slug}>{s.name}</option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1.5 font-semibold text-turkmen-green text-sm">
              {t("shop.sort_by", locale)}
              <select name="sort" defaultValue={sort || ""} className="input-field py-2">
                <option value="">{t("shop.sort_featured", locale)}</option>
                <option value="price-asc">{t("shop.sort_price_asc", locale)}</option>
                <option value="price-desc">{t("shop.sort_price_desc", locale)}</option>
                <option value="name">{t("shop.sort_name", locale)}</option>
              </select>
            </label>

            <label className="flex flex-col gap-1.5 font-semibold text-turkmen-green text-sm flex-1 min-w-[200px]">
              {t("common.search", locale)}
              <input
                type="search"
                name="search"
                defaultValue={search || ""}
                placeholder={t("shop.search_placeholder", locale)}
                className="input-field py-2"
              />
            </label>

            <button type="submit" className="btn btn-primary h-[42px]">
              {t("shop.filter_btn", locale)}
            </button>
          </form>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article key={product.id} className="product-card flex flex-col group overflow-hidden">
              <div className="aspect-[4/3] bg-turkmen-green/5 relative overflow-hidden flex items-center justify-center">
                {product.images[0] ? (
                  <Image
                    src={product.images[0].path}
                    alt={product.images[0].alt || product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <span className="text-6xl opacity-30">🧶</span>
                )}

                {product.badge && (
                  <span className={`absolute top-3 left-3 pill z-10 ${product.badge.toLowerCase() === 'new' ? 'bg-emerald-500 text-white' :
                    product.badge.toLowerCase() === 'bestseller' ? 'bg-amber-500 text-white' :
                      product.badge.toLowerCase() === 'limited' ? 'bg-rose-500 text-white' :
                        product.badge.toLowerCase() === 'gallery' ? 'bg-purple-500 text-white' :
                          'pill-accent'
                    }`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-sm text-gray-500 mb-1">{product.store.name}</p>
                <h3 className="font-bold text-lg text-turkmen-green mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.fiber}</p>
                <div className="mt-auto space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-turkmen-green">${Number(product.price).toFixed(0)}</span>
                      <span className="text-sm text-gray-500 ml-1">/{product.unit}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <form action={async () => {
                      "use server";
                      await addToCart(product.id);
                    }} className="flex-1">
                      <button type="submit" className="btn btn-primary text-sm py-2 px-3 w-full">
                        {t("product.add_to_cart", locale)}
                      </button>
                    </form>
                    <form action={async () => {
                      "use server";
                      await addToCompare(product.id);
                    }}>
                      <button type="submit" className="btn btn-ghost text-sm py-2 px-3">
                        {t("product.compare", locale)}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 mb-2">{t("shop.no_products", locale)}</p>
            <p className="text-gray-400">{t("shop.adjust_filters", locale)}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
