import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getLocaleFromCookie, t } from "@/lib/i18n";
import { cookies } from "next/headers";

export default async function ArtisansPage() {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.get("locale")?.value);

  return (
    <div className="min-h-screen bg-desert-sand">
      <Header />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold uppercase tracking-wide mb-4">{t("artisans.hero_title", locale)}</h1>
          <p className="text-lg opacity-95 max-w-2xl">
            {t("artisans.hero_desc", locale)}
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Master Weavers */}
        <section>
          <h2 className="text-3xl font-bold text-turkmen-green mb-8">{t("artisans.master_weavers", locale)}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-turkmen-green mb-3">{t("artisans.weaver1_name", locale)}</h3>
              <p>
                {t("artisans.weaver1_desc", locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-turkmen-green mb-3">{t("artisans.weaver2_name", locale)}</h3>
              <p>
                {t("artisans.weaver2_desc", locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-turkmen-green mb-3">{t("artisans.weaver3_name", locale)}</h3>
              <p>
                {t("artisans.weaver3_desc", locale)}
              </p>
            </div>
          </div>
        </section>

        {/* Apprenticeship */}
        <section className="bg-white/50 rounded-2xl p-8 border border-turkmen-green/10">
          <h2 className="text-3xl font-bold text-turkmen-green mb-4">{t("artisans.apprenticeship_title", locale)}</h2>
          <p className="mb-4">
            {t("artisans.apprenticeship_p1", locale)}
          </p>
          <p>
            {t("artisans.apprenticeship_p2", locale)}
          </p>
        </section>

        {/* Innovation & Technology */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">{t("artisans.innovation_title", locale)}</h2>
            <p className="mb-4">
              {t("artisans.innovation_p1", locale)}
            </p>
            <p>
              {t("artisans.innovation_p2", locale)}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-turkmen-gold shadow-soft">
            <img src="/images/products/product-silk-panel-1.jpg" alt="Modern Textile Technology" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>

        {/* Regional Craft Centers */}
        <section>
          <h2 className="text-3xl font-bold text-turkmen-green mb-4">{t("artisans.community_weaving_title", locale)}</h2>
          <p className="mb-4">
            {t("artisans.community_weaving_p1", locale)}
          </p>
          <p>
            {t("artisans.community_weaving_p2", locale)}
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
