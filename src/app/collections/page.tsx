import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { type Locale, getLocaleFromCookie, t } from "@/lib/i18n";
import { cookies } from "next/headers";

const collectionsExtendedCopy: Record<
  Locale,
  {
    editorialEyebrow: string;
    editorialTitle: string;
    editorialParagraphs: string[];
    pullQuote: string;
    glossaryTitle: string;
    glossaryItems: Array<{ term: string; definition: string }>;
    guideTitle: string;
    guideLead: string;
    guideItems: Array<{ title: string; text: string }>;
    careTitle: string;
    careParagraphs: string[];
    planningTitle: string;
    planningLead: string;
    planningCards: Array<{ title: string; text: string }>;
  }
> = {
  en: {
    editorialEyebrow: "Collection Essay",
    editorialTitle: "From Archive Logic to Contemporary Selection",
    editorialParagraphs: [
      "A strong textile collection is curated with both history and room behavior in mind. Visual impact is important, but context, maintenance profile, and long-term fit are equally decisive.",
      "Traditional categories like Tekke, Yomut, and Keteni describe more than style. They encode production methods, material systems, and social use, which is why two visually similar pieces may perform very differently in practice.",
      "Use this page as a reading guide before purchase decisions. It helps align aesthetic preference with practical conditions such as light, traffic, and expected product lifecycle.",
    ],
    pullQuote:
      "The best collection decisions happen when taste is supported by technical understanding.",
    glossaryTitle: "Collector Glossary",
    glossaryItems: [
      {
        term: "Göl",
        definition:
          "A central medallion motif used in many Turkmen carpet traditions, often tied to tribal identity and repeat structure.",
      },
      {
        term: "Pile vs Flatweave",
        definition:
          "Pile textiles use raised knots and usually feel denser; flatweaves are lighter and more flexible for broader utility.",
      },
      {
        term: "Knot Density",
        definition:
          "The number of knots per area. Higher density generally increases detail and labor time, but not always practical durability.",
      },
    ],
    guideTitle: "How to Read a Textile Collection",
    guideLead:
      "Collections are more than categories. Each group reflects a different balance of material, labor intensity, and intended use. A good choice starts with understanding that balance.",
    guideItems: [
      {
        title: "Pattern Density",
        text:
          "Dense knot fields usually indicate longer production time and finer visual detail. They are ideal for statement pieces where close viewing matters.",
      },
      {
        title: "Fiber Behavior",
        text:
          "Wool gives resilience, silk gives luminosity, and cotton gives structural clarity. Mixed compositions often offer a practical middle ground.",
      },
      {
        title: "Functional Context",
        text:
          "Some pieces are designed for daily traffic, others for ceremonial display. Matching purpose to use case prevents premature wear.",
      },
      {
        title: "Maintenance Profile",
        text:
          "Before buying, consider cleaning frequency, light exposure, and humidity in the intended room. Longevity depends as much on environment as on craftsmanship.",
      },
    ],
    careTitle: "Care, Preservation, and Long-Term Value",
    careParagraphs: [
      "Traditional textiles are durable, but durability is not automatic. Rotation schedules, correct storage, and controlled cleaning intervals significantly extend the life of both pile and flatweave pieces.",
      "Direct sun can flatten tonal contrast over time, especially in naturally dyed reds and blues. If a textile is displayed in high daylight, rotate orientation seasonally to distribute light exposure evenly.",
      "For storage, avoid sealed plastic and use breathable wrapping materials. Air circulation helps preserve fiber flexibility and reduces the risk of trapped moisture during seasonal temperature shifts.",
    ],
    planningTitle: "Collection Planning for Different Spaces",
    planningLead:
      "Collectors, designers, and families usually buy for different reasons. Planning by room behavior, not only visual style, leads to stronger results.",
    planningCards: [
      {
        title: "Residential Living Spaces",
        text:
          "Prioritize tactile comfort and forgiving texture. Mid-density wool compositions are often best for frequent use and everyday maintenance.",
      },
      {
        title: "Boutique Hospitality",
        text:
          "Select pieces that preserve character under repeated guest turnover. Favor stable dye sets and motifs that remain legible at multiple viewing distances.",
      },
      {
        title: "Gallery or Collector Display",
        text:
          "Use lower-contact placement and detailed provenance notes. Works with historical motif continuity and advanced knot precision often suit archival display.",
      },
    ],
  },
  tk: {
    editorialEyebrow: "Kolleksiýa Makalasy",
    editorialTitle: "Arhiw Mantygyndan Häzirki Saýlawa",
    editorialParagraphs: [
      "Güýçli dokma kolleksiýasy diňe taryhy gymmat bilen däl, otagyň ulanyş şertleri bilen hem sazlaşykly ýygnalýar. Görnüş ähmiýetli bolsa-da, seretmek tertibi we uzak möhletli laýyklyk hem şonça möhüm.",
      "Tekke, Ýomut, Keteni ýaly adaty toparlar diňe stil tapawudyny däl, önümçilik usullaryny, material ulgamyny we jemgyýetçilik ulanyş maksadyny hem görkezýär. Şonuň üçin iki meňzeş görünýän önüm amalda dürli netije berip biler.",
      "Bu sahypany satyn alma kararyndan öň gollanma hökmünde ulanyň. Ol estetiki islegi ýagtylyk, gatnaw we önümiň ulanyş ömri ýaly amaly şertler bilen deňleşdirmäge kömek edýär.",
    ],
    pullQuote:
      "Iň dogry kolleksiýa saýlawy tagam bilen tehniki düşünje birleşende ýüze çykýar.",
    glossaryTitle: "Kolleksioner Sözlügi",
    glossaryItems: [
      {
        term: "Göl",
        definition:
          "Türkmen haly däplerinde giň ulanylýan merkezi medalyon nagşy; köplenç taýpa şahsyýeti we gaýtalama gurluşy bilen baglanyşýar.",
      },
      {
        term: "Pile we Tekiz Dokma",
        definition:
          "Pile dokmada ýüzde ýokary düwün gatlagy bolýar; tekiz dokma has ýeňil we köpugurly ulanyş üçin amatly bolýar.",
      },
      {
        term: "Düwün Dykyzlygy",
        definition:
          "Belli bir meýdandaky düwün sany. Dykyzlygyň artmagy adatça jikme-jikligi we zähmet möhletini artdyrýar, ýöne hemişe birmeňzeş ulanyş çydamlylygyny aňlatmaýar.",
      },
    ],
    guideTitle: "Dokma Kolleksiýasyny Nädip Düşünmeli",
    guideLead:
      "Kolleksiýa diňe kategoriýa däl. Her topar çig malyň, zähmet dykyzlygynyň we ulanyş maksadynyň dürli deňagramlygyny görkezýär. Dogry saýlaw şol deňagramlyga düşünmekden başlanýar.",
    guideItems: [
      {
        title: "Nagyş Dykyzlygy",
        text:
          "Dykyz düwün meýdanlary adatça has uzyn önümçilik möhletini we inçe vizual jikme-jiklikleri görkezýär. Ýakyndan synlanylýan merkezi eserler üçin amatlydyr.",
      },
      {
        title: "Süýüm Häsiýeti",
        text:
          "Ýüň çydamlylygy berýär, ýüpek lowurdaýan görnüş berýär, pagta gurluş arassalygyny berýär. Garyşyk düzümler köplenç amaly taýdan iň deňagramly çözgütdir.",
      },
      {
        title: "Ulanyş Maksady",
        text:
          "Käbir önümler gündelik gatnaw üçin, beýlekileri bolsa dabaraly görkeziliş üçin niýetlenendir. Maksat bilen ulanyşy gabat getirmek ir könelmäniň öňüni alýar.",
      },
      {
        title: "Seretmek Rejimi",
        text:
          "Satyn almazdan öň arassalama ýygylygyny, ýagtylyk derejesini we otagdaky çyglylygy göz öňünde tutuň. Uzak ömür diňe ussatlyga däl, gurşawa hem baglydyr.",
      },
    ],
    careTitle: "Seretmek, Gorap Saklamak we Uzak Möhletli Gymmat",
    careParagraphs: [
      "Däp bolan dokma önümleri çydamlydyr, emma bu öz-özünden üpjün edilmeýär. Aýlamak tertibi, dogry saklaýyş we ölçegli arassalama aralyklary pile hem tekiz dokma önümleriniň ömrüni ep-esli uzaldýar.",
      "Göni gün şöhlesi wagtyň geçmegi bilen, aýratyn-da tebigy boýagly gyzyl we gök reňklerde öwüşgin kontrastyny gowşadyp biler. Önüm güýçli ýagtylykda goýulýan bolsa, onuň ugruny möwsümleýin üýtgetmek peýdalydyr.",
      "Saklanylanda doly ýapyk plastikden gaça duruň we dem alýan gaplama ulanyň. Howa çalşygy süýümiň çeýeligini saklaýar we temperatura üýtgemelerinde çyg ýygnamagynyň töwekgelçiligini azaldýar.",
    ],
    planningTitle: "Dürli Meýdanlar Üçin Kolleksiýa Meýilleşdirmesi",
    planningLead:
      "Kolleksionerler, dizaýnerler we maşgalalar köplenç dürli maksat bilen satyn alýarlar. Diňe stil boýunça däl, otagyň ulanyş häsiýeti boýunça saýlamak has durnukly netije berýär.",
    planningCards: [
      {
        title: "Öý Ýaşaýyş Meýdanlary",
        text:
          "El degişine ýakymlylyk we bagyşlaýan gurluş ileri tutulmalydyr. Orta dykyzlykly ýüň düzümli önümler gündelik ulanyşda köplenç iň amatly çözgütdir.",
      },
      {
        title: "Butik Myhmanhana Taslamalary",
        text:
          "Myhman dolanyşygy köp bolsa-da häsiýetini saklaýan eserleri saýlaň. Durnukly boýag toplumy we dürli aralykdan düşnükli görünýän nagyşlar netijelidir.",
      },
      {
        title: "Galereýa ýa-da Kolleksioner Görkezişi",
        text:
          "Az degişmeli ýerleşdiriş we jikme-jik gelip çykyş maglumatlaryny ulanyň. Taryhy nagyş dowamlylygy we ýokary düwün takyklygy bolan eserler arhiw görkezişine laýyk gelýär.",
      },
    ],
  },
  ru: {
    editorialEyebrow: "Коллекционный Очерк",
    editorialTitle: "От Архивной Логики к Современному Выбору",
    editorialParagraphs: [
      "Сильная текстильная коллекция строится не только на исторической ценности, но и на реальном сценарии использования пространства. Визуальный эффект важен, но не менее важны уход и долгосрочная совместимость.",
      "Традиционные категории вроде Tekke, Yomut и Keteni описывают не только стиль. Они отражают технологию производства, материал и социальную функцию, поэтому внешне похожие изделия могут вести себя в интерьере по-разному.",
      "Используйте эту страницу как ориентир перед покупкой. Она помогает связать эстетический выбор с практикой: светом, нагрузкой и ожидаемым жизненным циклом изделия.",
    ],
    pullQuote:
      "Лучшие решения по коллекции принимаются там, где вкус подкреплён техническим пониманием.",
    glossaryTitle: "Мини-Глоссарий Коллекционера",
    glossaryItems: [
      {
        term: "Göl",
        definition:
          "Центральный медальонный мотив в туркменских ковровых традициях, часто связанный с племенной идентичностью и структурой повторения.",
      },
      {
        term: "Ворсовое и Плоское Ткачество",
        definition:
          "Ворсовые изделия имеют поднятую узелковую поверхность и более плотный характер; плоские ткани легче и гибче в использовании.",
      },
      {
        term: "Плотность Узла",
        definition:
          "Количество узлов на единицу площади. Рост плотности обычно повышает детализацию и трудоёмкость, но не всегда автоматически означает лучшую износостойкость.",
      },
    ],
    guideTitle: "Как Читать Текстильную Коллекцию",
    guideLead:
      "Коллекция — это не просто набор категорий. Каждая группа отражает собственный баланс материала, трудоёмкости и назначения. Удачный выбор начинается с понимания этого баланса.",
    guideItems: [
      {
        title: "Плотность Орнамента",
        text:
          "Плотные узелковые поля обычно означают более длительное производство и высокую детализацию. Такие изделия хорошо работают как акцентные экспонаты.",
      },
      {
        title: "Поведение Волокна",
        text:
          "Шерсть даёт упругость, шёлк — светимость, хлопок — структурную чёткость. Смешанные составы часто обеспечивают практичный компромисс.",
      },
      {
        title: "Функциональный Контекст",
        text:
          "Одни вещи рассчитаны на ежедневную нагрузку, другие — на церемониальную подачу. Соответствие назначения и реального использования снижает риск быстрого износа.",
      },
      {
        title: "Профиль Ухода",
        text:
          "До покупки важно оценить частоту чистки, уровень освещения и влажность помещения. Срок службы зависит не только от мастерства, но и от среды.",
      },
    ],
    careTitle: "Уход, Сохранение и Долгосрочная Ценность",
    careParagraphs: [
      "Традиционный текстиль долговечен, но долговечность требует правильного режима эксплуатации. Регулярная ротация, корректное хранение и разумные интервалы чистки значительно продлевают срок службы изделий.",
      "Прямой солнечный свет со временем снижает контраст оттенков, особенно в натурально окрашенных красных и синих тонах. При экспозиции в ярком свете полезно сезонно менять ориентацию изделия.",
      "Для хранения лучше избегать герметичного пластика и использовать дышащие материалы. Циркуляция воздуха помогает сохранить гибкость волокна и снижает риск накопления влаги.",
    ],
    planningTitle: "Планирование Коллекции Под Разные Пространства",
    planningLead:
      "Коллекционеры, дизайнеры и семьи покупают текстиль с разными целями. Планирование по сценарию использования, а не только по стилю, даёт более устойчивый результат.",
    planningCards: [
      {
        title: "Жилые Пространства",
        text:
          "Ставьте акцент на тактильном комфорте и практичной фактуре. Для регулярного использования часто оптимальны шерстяные изделия средней плотности.",
      },
      {
        title: "Бутик-Гостеприимство",
        text:
          "Выбирайте изделия, сохраняющие выразительность при высокой сменяемости гостей. Предпочтительны стабильные красители и мотивы, читаемые на разных дистанциях.",
      },
      {
        title: "Галерейная И Коллекционная Экспозиция",
        text:
          "Используйте зоны с минимальным контактом и фиксируйте подробную информацию о происхождении. Для архивной подачи подходят изделия с исторической преемственностью мотивов и высокой точностью узла.",
      },
    ],
  },
};

export default async function CollectionsPage() {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.get("locale")?.value);
  const copy = collectionsExtendedCopy[locale];

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
        {/* Editorial Intro */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-turkmen-gold/20 shadow-soft">
          <p className="text-xs uppercase tracking-[0.2em] text-turkmen-gold font-bold mb-3">{copy.editorialEyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-turkmen-green mb-6">{copy.editorialTitle}</h2>
          <div className="grid lg:grid-cols-[1.4fr,1fr] gap-8 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {copy.editorialParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="rounded-2xl bg-turkmen-green text-white p-6 border border-turkmen-gold/40 shadow-lg">
              <p className="text-lg leading-relaxed font-semibold">“{copy.pullQuote}”</p>
            </blockquote>
          </div>
        </section>

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

        {/* Guide */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">{copy.guideTitle}</h2>
            <p className="text-gray-700 leading-relaxed">{copy.guideLead}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {copy.guideItems.map((item) => (
              <article key={item.title} className="bg-white rounded-xl p-6 border border-turkmen-green/10 shadow-soft">
                <h3 className="text-xl font-bold text-turkmen-green mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Glossary */}
        <section className="bg-white/70 rounded-2xl p-8 border border-turkmen-green/10">
          <h2 className="text-3xl font-bold text-turkmen-green mb-6">{copy.glossaryTitle}</h2>
          <div className="space-y-5">
            {copy.glossaryItems.map((item) => (
              <article key={item.term} className="border-l-4 border-turkmen-gold pl-5">
                <h3 className="text-lg font-bold text-turkmen-green mb-1">{item.term}</h3>
                <p className="text-gray-700 leading-relaxed">{item.definition}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Care */}
        <section className="bg-white rounded-2xl p-8 border border-turkmen-gold/20 shadow-soft">
          <h2 className="text-3xl font-bold text-turkmen-green mb-4">{copy.careTitle}</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {copy.careParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Planning */}
        <section>
          <h2 className="text-3xl font-bold text-turkmen-green mb-4">{copy.planningTitle}</h2>
          <p className="text-gray-700 leading-relaxed mb-8">{copy.planningLead}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {copy.planningCards.map((card) => (
              <article key={card.title} className="card">
                <h3 className="text-xl font-bold text-turkmen-green mb-3">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
