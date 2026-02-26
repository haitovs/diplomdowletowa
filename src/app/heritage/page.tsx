import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getLocaleFromCookie, t } from "@/lib/i18n";
import { cookies } from "next/headers";

export default async function HeritagePage() {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.get("locale")?.value);

  return (
    <div className="min-h-screen bg-desert-sand">
      <Header />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold uppercase tracking-wide mb-4">{t("heritage.hero_title", locale)}</h1>
          <p className="text-lg opacity-95 max-w-2xl">
            {t("heritage.hero_desc", locale)}
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* UNESCO Recognition */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">{t("heritage.unesco_title", locale)}</h2>
            <p className="mb-4">
              {t("heritage.unesco_p1", locale)}
            </p>
            <p>
              {t("heritage.unesco_p2", locale)}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-turkmen-gold shadow-soft">
            <img src="/images/products/product-camel-bag-1.jpg" alt="Turkmen Carpet Heritage" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>

        {/* Modern Textile Industry */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl p-6 border-2 border-turkmen-gold shadow-soft">
            <img src="/images/products/product-khorjun-bag-1.jpg" alt="Turkmen Textile Industry" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">{t("heritage.industry_title", locale)}</h2>
            <p className="mb-4">
              {t("heritage.industry_p1", locale)}
            </p>
            <p>
              {t("heritage.industry_p2", locale)}
            </p>
          </div>
        </section>

        {/* Education & Preservation */}
        <section className="bg-white/50 rounded-2xl p-8 border border-turkmen-green/10">
          <h2 className="text-3xl font-bold text-turkmen-green mb-4">{t("heritage.education_title", locale)}</h2>
          <p className="mb-4">
            {t("heritage.education_p1", locale)}
          </p>
          <p>
            {t("heritage.education_p2", locale)}
          </p>
        </section>

        {/* Silk Road Legacy */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">{t("heritage.silkroad_title", locale)}</h2>
            <p className="mb-4">
              {t("heritage.silkroad_p1", locale)}
            </p>
            <p>
              {t("heritage.silkroad_p2", locale)}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-turkmen-gold shadow-soft">
            <img src="/images/products/product-sunset-keteni-1.jpg" alt="Keteni Silk" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>

        {/* Sustainable Future */}
        <section>
          <h2 className="text-3xl font-bold text-turkmen-green mb-8">{t("heritage.sustainable_title", locale)}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-bold text-turkmen-green mb-3">{t("heritage.eco_dye_title", locale)}</h3>
              <p>
                {t("heritage.eco_dye_desc", locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-bold text-turkmen-green mb-3">{t("heritage.turkmen_cotton_title", locale)}</h3>
              <p>
                {t("heritage.turkmen_cotton_desc", locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-bold text-turkmen-green mb-3">{t("heritage.community_title", locale)}</h3>
              <p>
                {t("heritage.community_desc", locale)}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
