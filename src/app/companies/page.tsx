import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getLocaleFromCookie, t } from "@/lib/i18n";
import Link from "next/link";
import { cookies } from "next/headers";

// ═══════════════════════════════════════════
// Full directory of Turkmen textile enterprises
// Organized by region with real company data
// ═══════════════════════════════════════════

interface Company {
  name: string;
  location: string;
  products: string;
  brand?: string;
  capacity?: string;
  slug?: string; // if has store page
}

interface Region {
  key: string;
  companies: Company[];
}

const regions: Region[] = [
  {
    key: "state_assoc",
    companies: [
      {
        name: "Türkmenhaly Döwlet Birleşigi",
        location: "Aşgabat (Baş edara), ähli welaýatlarda 8 kärhana we 100+ ussahana",
        products: "El halylary (Tekke, Ýomut, Ärsary, Salyr, Saryk gölleri), palas, kilim, namazlyk, torba, çuwal, sowgatlyk önümler",
        brand: "Türkmenhaly",
        capacity: "5000+ halyçy, ÝUNESKO ykrar edilen (2019)",
        slug: "turkmenhaly",
      },
    ],
  },
  {
    key: "ahal",
    companies: [
      {
        name: "Aşgabat Dokma Toplumy",
        location: "Aşgabat, 37 ga meýdan",
        products: "Pagta ýüplük, dokma matalar, polotensalar, düşek-ýorgan toplumlary, öý tekstili",
        brand: "Goza",
        capacity: "Ýylda 13 100 t ýüplük, 22,5 mln m² mata, 2800+ işgär",
        slug: "ashgabat-dokma",
      },
      {
        name: "Türkmenbaşy Dokma Toplumy",
        location: "Aşgabat, 21,5 ga meýdan",
        products: "Pagta ýüplük, matalar, erkek/zenan köýnekleri, taýýar eşikler",
        brand: "Nusaý",
        capacity: "Ýylda 9000 t ýüplük, 17 000 m² mata, 1,875 mln eşik",
        slug: "turkmenbashy-dokma",
      },
      {
        name: "Türkmenbaşy Jins Toplumy",
        location: "Aşgabat",
        products: "Jins balaklar, kurtkalar, ýubkalar, şortikler, jins matalary",
        brand: "Bedew Jeans",
        capacity: "Aýda 130 000+ önüm, ýylda 1,56 mln haryt",
        slug: "turkmenbashy-jins",
      },
      {
        name: "Ruhabat Dokma Toplumy",
        location: "Ruhabat, Aşgabat",
        products: "Pagta ýüplük, boýalan we boýalmadyk matalar, taýýar eşikler",
        capacity: "Ýylda 4000+ t ýüplük",
      },
      {
        name: "Gökdepe Dokma Toplumy",
        location: "Gökdepe, Ahal welaýaty",
        products: "Pagta ýüplük, trikotaž matalar, sport eşikleri, çaga eşikleri",
        brand: "Gala",
        capacity: "Ýylda 4900 t ýüplük, 4700 t trikotaž, 2700 eşik",
        slug: "gokdepe-dokma",
      },
      {
        name: "Kaka Dokma Toplumy",
        location: "Kaka, Ahal welaýaty",
        products: "Pagta ýüplük, matalar, erkek/zenan köýnekleri",
        brand: "Jeýtun",
        capacity: "Ýylda 3650 t ýüplük, 12 mln m² mata, 1,2 mln eşik. ISO 9001, OEKO-TEX",
        slug: "kaka-dokma",
      },
      {
        name: "Babadaýhan Dokma Toplumy",
        location: "Babadaýhan, Ahal welaýaty",
        products: "Klassik we sport eşikleri, ýorgan-düşek toplumlary, öý tekstili",
        brand: "Mäne",
        slug: "babadayhan-dokma",
      },
      {
        name: "Abadan Haly Kärhanasy",
        location: "Abadan, Ahal welaýaty",
        products: "El halylary (Tekke göli), haly önümleri",
        capacity: "Türkmenhaly birleşiginiň düzüminde",
      },
      {
        name: "Türkmen Jorap Dokma",
        location: "Abadan, Ahal welaýaty",
        products: "Erkek, zenan we çaga joraplary, taýtlar, trikotaž önümler",
        capacity: "Italiýa «Lonati», Türkiýe enjamlary",
        slug: "turkmen-jorap",
      },
      {
        name: "Aşgabat Tikin Fabrigi",
        location: "Aşgabat",
        products: "Taýýar eşikler, mekdep formasy, iş eşikleri",
      },
      {
        name: "Ahal Tikin Fabrigi",
        location: "Änew, Ahal welaýaty",
        products: "Mekdep we sport formalary, taýýar eşikler",
      },
      {
        name: "Gypjak Haly Kärhanasy",
        location: "Gypjak, Ahal welaýaty",
        products: "El halylary, sowgatlyk haly önümleri",
        capacity: "Türkmenhaly birleşiginiň düzüminde",
      },
    ],
  },
  {
    key: "mary",
    companies: [
      {
        name: "Baýramaly Dokma Toplumy",
        location: "Baýramaly, Mary welaýaty",
        products: "Pagta ýüplük, boýalan/boýalmadyk matalar, taýýar eşikler",
        brand: "Merw",
        slug: "bayramaly-dokma",
      },
      {
        name: "Mary Pagta Egirme Fabrigi",
        location: "Mary şäheri",
        products: "Pagta ýüplük, egirme önümleri",
        capacity: "Ýylda 5000+ t ýüplük",
      },
      {
        name: "Mary Keteni Ussahanasy",
        location: "Mary şäheri we Murgap jülgesi",
        products: "Keteni ýüpek matasy (gyrmyzy, ýaşyl, ak), gelin donlary, ýüpek ýaglyklar",
        capacity: "ÝUNESKO ykrar edilen ýüpekçilik däbi (2022)",
      },
      {
        name: "Mary Haly Kärhanasy",
        location: "Mary şäheri",
        products: "El halylary (Tekke we Salyr gölleri), namazlyklar",
        capacity: "Türkmenhaly birleşiginiň düzüminde",
      },
      {
        name: "Tagtabazar Haly Kärhanasy",
        location: "Tagtabazar, Mary welaýaty",
        products: "El halylary, kilimler, palas",
        capacity: "Türkmenhaly birleşiginiň düzüminde",
      },
      {
        name: "Mary Tikin Fabrigi",
        location: "Mary şäheri",
        products: "Taýýar eşikler, milli geýimler, mekdep formalary",
      },
      {
        name: "Murgap Pagta Arassalaýjy Zawod",
        location: "Murgap, Mary welaýaty",
        products: "Arassalanan pagta süýümi, pagta çigidi",
        capacity: "Dokma senagaty üçin çig mal üpjünçiligi",
      },
    ],
  },
  {
    key: "lebap",
    companies: [
      {
        name: "Halaç Pagta Egirme Fabrigi",
        location: "Halaç, Lebap welaýaty",
        products: "Pagta ýüplük (5 görnüş), eksport ýüplügi",
        capacity: "Russiýa, Türkiýe, Polşa eksport",
        slug: "halach-fabrik",
      },
      {
        name: "Türkmenabat Dokma Toplumy",
        location: "Türkmenabat, Lebap welaýaty",
        products: "Pagta ýüplük, matalar, taýýar eşikler",
      },
      {
        name: "Türkmenabat Tikin Fabrigi",
        location: "Türkmenabat",
        products: "Taýýar eşikler, iş geýimleri, formalar",
      },
      {
        name: "Halaç Haly Kärhanasy",
        location: "Halaç, Lebap welaýaty",
        products: "El halylary (Ärsary göli), palas, kilimler",
        capacity: "Türkmenhaly birleşiginiň düzüminde",
      },
      {
        name: "Kerki Haly Kärhanasy",
        location: "Kerki, Lebap welaýaty",
        products: "El halylary, torba, çuwal",
        capacity: "Türkmenhaly birleşiginiň düzüminde",
      },
      {
        name: "Seýdi Pagta Arassalaýjy Zawod",
        location: "Seýdi, Lebap welaýaty",
        products: "Arassalanan pagta süýümi",
        capacity: "Dokma senagaty üçin çig mal",
      },
    ],
  },
  {
    key: "dashoguz",
    companies: [
      {
        name: "Daşoguz «Serdar» Pagta Egirme Fabrigi",
        location: "Daşoguz şäheri",
        products: "Pagta ýüplük (galyň we inçe görnüşler), eksport ýüplügi",
        brand: "Ring",
        capacity: "Ýylda 16 600 t süýüm gaýtadan işlenýär, 14 500 t ýüplük. ISO 9001, ISO 14001",
        slug: "dashoguz-serdar",
      },
      {
        name: "Daşoguz Haly Kärhanasy",
        location: "Daşoguz şäheri",
        products: "El halylary (Ýomut göli), kilimler, palaslar",
        capacity: "Türkmenhaly birleşiginiň düzüminde, Ýomut görnüşinde ýöriteleşen",
      },
      {
        name: "Köneürgenç Haly Kärhanasy",
        location: "Köneürgenç, Daşoguz welaýaty",
        products: "El halylary, Ýomut görnüşli palas we kilimler",
        capacity: "Türkmenhaly birleşiginiň düzüminde",
      },
      {
        name: "Daşoguz Tikin Fabrigi",
        location: "Daşoguz şäheri",
        products: "Taýýar eşikler, pagta eşikler",
      },
      {
        name: "Gubadag Pagta Arassalaýjy Zawod",
        location: "Gubadag, Daşoguz welaýaty",
        products: "Arassalanan pagta süýümi",
        capacity: "Dokma senagaty üçin çig mal üpjünçiligi",
      },
    ],
  },
  {
    key: "balkan",
    companies: [
      {
        name: "Balkandokma",
        location: "Gyzylarbat (Serdar), Balkan welaýaty, 20 000 m²",
        products: "Ýokary hilli pagta ýüplük (inçe we galyň), eksport ýüplügi",
        capacity: "Italiýa «Savio» we «Marzoli» enjamlary. 2024-nji ýylda 4210 t ýüplük (135 mln manat)",
        slug: "balkandokma",
      },
      {
        name: "Türkmenbaşy Haly Kärhanasy",
        location: "Türkmenbaşy (Krasnovodsk), Balkan welaýaty",
        products: "El halylary, haly önümleri",
        capacity: "Türkmenhaly birleşiginiň düzüminde",
      },
      {
        name: "Bereket Pagta Arassalaýjy Zawod",
        location: "Bereket, Balkan welaýaty",
        products: "Arassalanan pagta süýümi",
        capacity: "Sebitiň dokma senagaty üçin çig mal",
      },
    ],
  },
];

export default async function CompaniesPage() {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.get("locale")?.value);

  const totalCompanies = regions.reduce((sum, r) => sum + r.companies.length, 0);

  const regionLabels: Record<string, string> = {
    state_assoc: t("companies.state_assoc", locale),
    ahal: t("companies.ahal", locale),
    mary: t("companies.mary", locale),
    lebap: t("companies.lebap", locale),
    dashoguz: t("companies.dashoguz", locale),
    balkan: t("companies.balkan", locale),
  };

  return (
    <div className="min-h-screen bg-desert-sand">
      <Header />

      {/* Hero */}
      <section className="hero-gradient text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold uppercase tracking-wide mb-3">
            {t("companies.hero_title", locale)}
          </h1>
          <p className="opacity-90 max-w-3xl mb-4">
            {t("companies.hero_desc", locale)}
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="bg-turkmen-gold text-turkmen-green px-4 py-1.5 rounded-full text-sm font-bold">
              {totalCompanies} {t("companies.total_count", locale)}
            </span>
            <Link href="/shop" className="btn btn-primary text-sm">
              {t("compare.back_to_shop", locale)}
            </Link>
          </div>
        </div>
      </section>

      {/* Region Quick Nav */}
      <div className="bg-white/50 border-b border-turkmen-gold/20 py-3 px-6 sticky top-[72px] z-40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 text-sm">
          {regions.map((region) => (
            <a
              key={region.key}
              href={`#region-${region.key}`}
              className="px-3 py-1 rounded-full border border-turkmen-gold/30 text-turkmen-green hover:bg-turkmen-green hover:text-white transition font-medium"
            >
              {regionLabels[region.key]} ({region.companies.length})
            </a>
          ))}
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        {regions.map((region) => (
          <section key={region.key} id={`region-${region.key}`}>
            <h2 className="text-2xl font-bold text-turkmen-green mb-6 pb-2 border-b border-turkmen-gold/30 flex items-center gap-3">
              <span className="w-2 h-8 bg-turkmen-gold rounded-full"></span>
              {regionLabels[region.key]}
            </h2>

            <div className="grid gap-4">
              {region.companies.map((company, idx) => (
                <article
                  key={idx}
                  className="bg-white rounded-xl border border-turkmen-gold/10 p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Company Logo Placeholder */}
                    <div className="w-16 h-16 bg-turkmen-green/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-turkmen-gold/20">
                      <span className="text-lg font-bold text-turkmen-green">
                        {company.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        {company.slug ? (
                          <Link
                            href={`/store/${company.slug}`}
                            className="text-xl font-bold text-turkmen-green hover:text-turkmen-gold transition"
                          >
                            {company.name}
                          </Link>
                        ) : (
                          <h3 className="text-xl font-bold text-turkmen-green">
                            {company.name}
                          </h3>
                        )}
                        {company.brand && (
                          <span className="px-2 py-0.5 bg-turkmen-gold/10 text-turkmen-green text-xs font-bold rounded-full border border-turkmen-gold/20">
                            {t("companies.brand_label", locale)}: {company.brand}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-gray-500 mb-2">{company.location}</p>

                      <div className="space-y-1">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-turkmen-green">{t("companies.products_label", locale)}:</span>{" "}
                          {company.products}
                        </p>
                        {company.capacity && (
                          <p className="text-sm text-gray-500">
                            <span className="font-semibold text-gray-600">{t("companies.capacity_label", locale)}:</span>{" "}
                            {company.capacity}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Link to store if exists */}
                    {company.slug && (
                      <Link
                        href={`/store/${company.slug}`}
                        className="btn btn-primary text-sm py-2 px-4 flex-shrink-0"
                      >
                        {t("product.view_details", locale)}
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
