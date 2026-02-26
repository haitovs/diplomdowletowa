import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getLocaleFromCookie, t } from "@/lib/i18n";
import { cookies } from "next/headers";

export default async function CollectionsPage() {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.get("locale")?.value);

  return (
    <div className="min-h-screen bg-desert-sand">
      <Header />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold uppercase tracking-wide mb-4">{t("collections.hero_title", locale)}</h1>
          <p className="text-lg opacity-95 max-w-2xl">
            {t("collections.hero_desc", locale)}
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Tekke Carpets */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">{t("collections.tekke_title", locale)}</h2>
            <p className="mb-4">
              {t("collections.tekke_p1", locale)}
            </p>
            <p>
              {t("collections.tekke_p2", locale)}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-turkmen-gold shadow-soft">
            <img src="/images/products/product-camel-trapping-1.jpg" alt="Tekke Carpets" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>

        {/* Yomut Carpets & Kilims */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl p-6 border-2 border-turkmen-gold shadow-soft">
            <img src="/images/products/product-yomut-gol-carpet-1.jpg" alt="Yomut Carpets" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">{t("collections.yomut_title", locale)}</h2>
            <p className="mb-4">
              {t("collections.yomut_p1", locale)}
            </p>
            <p>
              {t("collections.yomut_p2", locale)}
            </p>
          </div>
        </section>

        {/* Keteni Silk */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">{t("collections.keteni_title", locale)}</h2>
            <p className="mb-4">
              {t("collections.keteni_p1", locale)}
            </p>
            <p>
              {t("collections.keteni_p2", locale)}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-turkmen-gold shadow-soft">
            <img src="/images/products/product-keteni-robe-1.jpg" alt="Keteni Silk" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>

        {/* Industrial Textiles */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl p-6 border-2 border-turkmen-gold shadow-soft">
            <img src="/images/products/product-ersari-elephant-rug-1.jpg" alt="Industrial Textiles" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">{t("collections.industrial_title", locale)}</h2>
            <p className="mb-4">
              {t("collections.industrial_p1", locale)}
            </p>
            <p>
              {t("collections.industrial_p2", locale)}
            </p>
          </div>
        </section>

        {/* Home Textiles */}
        <section className="bg-white/50 rounded-2xl p-8 border border-turkmen-green/10">
          <h2 className="text-3xl font-bold text-turkmen-green mb-4">{t("collections.home_title", locale)}</h2>
          <p>
            {t("collections.home_p1", locale)}
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
