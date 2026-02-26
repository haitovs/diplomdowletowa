import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { type Locale, getLocaleFromCookie, t } from "@/lib/i18n";
import { cookies } from "next/headers";

const artisansExtendedCopy: Record<
  Locale,
  {
    introEyebrow: string;
    introTitle: string;
    introParagraphs: string[];
    pullQuote: string;
    fieldJournalTitle: string;
    fieldJournalLead: string;
    fieldJournalEntries: Array<{ label: string; text: string }>;
    workshopTitle: string;
    workshopLead: string;
    workshopMoments: Array<{ label: string; title: string; text: string }>;
    standardsTitle: string;
    standardsLead: string;
    standards: Array<{ title: string; text: string }>;
    transmissionTitle: string;
    transmissionParagraphs: string[];
  }
> = {
  en: {
    introEyebrow: "Editorial Overview",
    introTitle: "Craft Is a System, Not a Moment",
    introParagraphs: [
      "Public attention usually focuses on finished carpets and fabrics, but workshop reality is process-driven. Planning, sequencing, and quality control determine whether a piece will age well after years of real use.",
      "In Turkmen textile practice, mastery is measured by consistency under constraints: variable fiber batches, climate shifts, and tight production windows. Senior artisans manage these variables without sacrificing motif accuracy.",
      "This page documents the working logic behind the beauty. It follows how teams prepare, weave, verify, and teach so that traditional methods remain both culturally authentic and operationally reliable.",
    ],
    pullQuote:
      "The strongest workshops do not chase perfection in one piece; they build repeatable excellence across many pieces.",
    fieldJournalTitle: "Workshop Field Notes",
    fieldJournalLead:
      "These observations come from recurring patterns seen in high-performing artisan teams.",
    fieldJournalEntries: [
      {
        label: "Discipline",
        text:
          "Teams that begin each day with loom checks and dye review logs produce noticeably lower correction rates later in the week.",
      },
      {
        label: "Coordination",
        text:
          "When cutter, dyer, and weaver exchange notes in writing, pattern transitions become cleaner and finishing time shortens.",
      },
      {
        label: "Transmission",
        text:
          "Apprentices progress faster when they repeat one motif family long enough to internalize rhythm before moving to complex variation.",
      },
    ],
    workshopTitle: "Inside a Working Textile Workshop",
    workshopLead:
      "Behind every finished piece is a carefully sequenced workflow. The pace may look calm, but each stage requires concentration, timing, and technical memory built over years.",
    workshopMoments: [
      {
        label: "Stage 01",
        title: "Material Selection",
        text:
          "Teams sort wool, cotton, and silk by fiber length and consistency. Even small differences in fiber quality can change the final texture, knot density, and color absorption.",
      },
      {
        label: "Stage 02",
        title: "Natural Dye Preparation",
        text:
          "Dye masters prepare pigments in measured batches and test swatches before production weaving begins. This reduces color drift and keeps large orders visually consistent.",
      },
      {
        label: "Stage 03",
        title: "Loom Setup and Mapping",
        text:
          "Warp tension is calibrated, motif sequences are mapped, and benchmark rows are marked. Most delays in weaving quality happen at setup, so this step is deliberately slow and precise.",
      },
      {
        label: "Stage 04",
        title: "Final Finishing",
        text:
          "After weaving, textiles are trimmed, washed, rested, and inspected under daylight and warm light. Artisans review edge stability, color harmony, and pattern alignment before release.",
      },
    ],
    standardsTitle: "Craft Standards Used by Senior Artisans",
    standardsLead:
      "Quality is defined by repeatable benchmarks, not only by visual beauty. Workshop leaders check structural performance and long-term durability before an item enters sale inventory.",
    standards: [
      {
        title: "Structural Balance",
        text:
          "Edges, corners, and center fields are compared for symmetry. Minor imbalance is corrected before final washing to prevent future distortion during use.",
      },
      {
        title: "Pattern Integrity",
        text:
          "Motif transitions are checked line by line, especially in high-density sections. Any interruption in visual rhythm is reworked by the same artisan who built the segment.",
      },
      {
        title: "Color Stability",
        text:
          "Pieces are reviewed across multiple lighting conditions. This confirms that tone relationships remain stable in homes, galleries, and retail settings.",
      },
      {
        title: "Touch and Wear Testing",
        text:
          "Finished textiles are assessed for handle, surface resilience, and friction response. The goal is to preserve softness without compromising longevity.",
      },
    ],
    transmissionTitle: "How Knowledge Is Passed Forward",
    transmissionParagraphs: [
      "In many workshops, technical training and cultural memory are inseparable. Apprentices learn the sequence of production alongside oral context: naming conventions, motif origins, and social meaning.",
      "Senior artisans often assign the same motif family repeatedly until the apprentice can maintain rhythm without reference charts. This develops the internal counting and visual timing that define advanced weaving.",
      "The strongest teams treat preservation as practical work, not museum nostalgia. They document process notes, compare old and new batches, and teach methods that keep tradition usable in contemporary production.",
    ],
  },
  tk: {
    introEyebrow: "Mazmunly Gözden Geçiriş",
    introTitle: "Senet Bir Pursat Däl, Ulgamdyr",
    introParagraphs: [
      "Köp adam taýýar halylara we matalara seredýär, ýöne ussahananyň hakyky işi prosese daýanýar. Meýilleşdiriş, yzygiderlilik we hil gözegçiligi önümiň uzak ýyllar dowamynda nähili saklanjakdygyny kesgitleýär.",
      "Türkmen dokma tejribesinde ussatlyk kyn şertlerde durnukly netije bermek bilen ölçelýär: dürli süýüm partiýalary, howa üýtgemeleri we gysga önümçilik möhletleri. Tejribeli ussalar bu şertleri nagyş takyklygyny ýitirmän dolandyrýarlar.",
      "Bu sahypa diňe gözellige däl, onuň arkasyndaky iş logikasyna bagyşlanýar. Toparlaryň taýýarlyk, dokalyş, barlag we okuw tapgyrlary arkaly däbi nädip işjeň saklaýandygyny görkezýär.",
    ],
    pullQuote:
      "Iň gowy ussahanalar bir önümdäki ideal netijä däl, köp önümdäki gaýtalanyp bolýan ýokary hile bil baglaýar.",
    fieldJournalTitle: "Ussahana Bellikleri",
    fieldJournalLead:
      "Bu bellikler ýokary netijeli ussat toparlarda gaýtalanyp görünýän iş ýörelgelerinden çykarylýar.",
    fieldJournalEntries: [
      {
        label: "Düzgün",
        text:
          "Işi stanok barlagy we boýag ýazgylary bilen başlaýan toparlarda hepdäniň soňunda düzetme sany ep-esli pes bolýar.",
      },
      {
        label: "Utgaşyk",
        text:
          "Kesiji, boýagçy we dokmaçy ýazmaça maglumat alyşsa, nagyş geçişleri has arassa bolýar we soňky tamamlama wagty gysgalýar.",
      },
      {
        label: "Geçiriş",
        text:
          "Şägirtler çylşyrymly görnüşlere geçmezden öň bir nagyş maşgalasyny ýeterlik gaýtalasa, ösüş depgini has ýokarlanýar.",
      },
    ],
    workshopTitle: "Işleýän Dokma Ussahanasynyň Içi",
    workshopLead:
      "Her taýýar önümiň arkasynda yzygiderli guralan önümçilik tertibi bar. Görnüşde asuda ýaly görünse-de, her tapgyr köp üns, wagt sazlaşygy we ýyllar bilen toplanan tehniki tejribe talap edýär.",
    workshopMoments: [
      {
        label: "Tapgyr 01",
        title: "Çig Mal Saýlanyşy",
        text:
          "Toparlar ýüňi, pagtany we ýüpegi süýüm uzynlygyna hem durnuklylygyna görä saýlaýar. Süýümdäki kiçi tapawutlar hem soňky gurluşa, düwün dykyzlygyna we reňk siňmegine täsir edýär.",
      },
      {
        label: "Tapgyr 02",
        title: "Tebigy Boýag Taýýarlygy",
        text:
          "Boýag ussalary pigmentleri ölçegli partiýalar boýunça taýýarlap, esasy dokalyşdan öň synag böleklerini barlaýarlar. Bu usul reňk üýtgemesini azaldyp, uly sargytlarda birmeňzeşligi saklaýar.",
      },
      {
        label: "Tapgyr 03",
        title: "Stanoky Gurmak we Kartalaşdyrmak",
        text:
          "Esasy sapaklaryň dartgynlygy sazlanýar, nagyş yzygiderliligi düzülýär, gözegçilik setirleri bellenýär. Hil meselesiniň köpüsi hut şu başlangyçda çözülýändigi sebäpli bu tapgyr bilgeşleýin haýal we takyk alnyp barylýar.",
      },
      {
        label: "Tapgyr 04",
        title: "Soňky Tamamlama",
        text:
          "Dokalyşdan soň önümler kesilýär, ýuwulýar, dynçlandyrylýar we dürli ýagtylykda barlanýar. Ussalar gyralaryň durnuklylygyny, reňk sazlaşygyny we nagyş deňligini goýberilmezden öň synlaýar.",
      },
    ],
    standardsTitle: "Tejribeli Ussalaryň Hil Ölçegleri",
    standardsLead:
      "Hil diňe göze ýakymlylyk bilen däl, gaýtalanyp bilinýän ölçegler bilen kesgitlenýär. Ussahana ýolbaşçylary önüm satuwa goýberilmezden öň gurluş we uzak möhletli çydamlylygy barlaýar.",
    standards: [
      {
        title: "Gurluş Deňagramlylygy",
        text:
          "Gyralar, burçlar we merkezi meýdan simmetriýa boýunça deňeşdirilýär. Uly däl gyşarmalar soňky ýuwmadan öň düzedilýär, şeýdip ulanyşda şekil bozulmasynyň öňi alynýar.",
      },
      {
        title: "Nagyş Bitewiligi",
        text:
          "Aýratynam ýokary dykyzlykly böleklerde nagyş geçişleri setir-setir gözden geçirilýär. Görnüş sazynyň bozulmagy şol bölegi dokan ussa tarapyndan gaýtadan düzedilýär.",
      },
      {
        title: "Reňk Durnuklylygy",
        text:
          "Önümler birnäçe ýagtylyk şertinde barlanýar. Bu usul öýde, galerýada ýa-da dükanda reňk gatnaşyklarynyň üýtgemezligini tassyklaýar.",
      },
      {
        title: "El Deňi we Çydamlylyk Synagy",
        text:
          "Taýýar dokma ýüzüniň ýumşaklygy, sürtülmä garşylygy we gurluşy boýunça baha berilýär. Maksat ýumşaklygy saklap, uzak möhletli ulanyş güýjüni peseltmezlikdir.",
      },
    ],
    transmissionTitle: "Bilimiň Geljege Geçirilşi",
    transmissionParagraphs: [
      "Köp ussahanada tehniki taýýarlyk bilen medeni ýat bir-birinden aýrylmaýar. Şägirtler önümçilik tertibini öwrenmek bilen birlikde nagyşlaryň atlaryny, gelip çykyşyny we manysyny hem özleşdirýärler.",
      "Tejribeli ussalar köplenç şägirde bir nagyş maşgalasyny birnäçe gezek gaýtalap dokadýar. Bu usul hasaplama duýgusyny we wizual ritmi kartasyz saklamagy ösdürýär.",
      "Iň güýçli toparlar mirasy diňe sergi hökmünde däl, amaly iş hökmünde goraýar. Olar iş depderlerini ýöredýär, köne-täze partiýalary deňeşdirýär we häzirki önümçilige laýyk usullary dowam etdirýär.",
    ],
  },
  ru: {
    introEyebrow: "Редакционный Обзор",
    introTitle: "Ремесло — Это Система, А Не Разовый Результат",
    introParagraphs: [
      "Обычно внимание приковано к готовым коврам и тканям, но в мастерской решает процесс. Планирование, последовательность и контроль качества определяют, как изделие поведёт себя спустя годы эксплуатации.",
      "В туркменской текстильной практике мастерство проявляется в стабильности под ограничениями: разные партии сырья, смена климата и сжатые сроки производства. Старшие мастера удерживают точность орнамента даже в таких условиях.",
      "Эта страница показывает рабочую логику за визуальной красотой. Она объясняет, как команды готовят материалы, ткут, проверяют и обучают, чтобы традиционные методы оставались живыми и практичными.",
    ],
    pullQuote:
      "Сильная мастерская ценна не одной идеальной вещью, а способностью регулярно выпускать качественные вещи.",
    fieldJournalTitle: "Полевые Заметки Мастерской",
    fieldJournalLead:
      "Ниже — наблюдения, которые чаще всего встречаются в устойчиво эффективных ремесленных командах.",
    fieldJournalEntries: [
      {
        label: "Дисциплина",
        text:
          "Команды, начинающие день с проверки станка и журнала красителей, заметно реже делают поздние исправления.",
      },
      {
        label: "Координация",
        text:
          "Когда резчик, красильщик и ткач фиксируют договорённости письменно, переходы орнамента получаются чище, а финиш занимает меньше времени.",
      },
      {
        label: "Передача Навыков",
        text:
          "Ученики развиваются быстрее, если сначала достаточно долго повторяют одну группу мотивов, а потом переходят к вариативным схемам.",
      },
    ],
    workshopTitle: "Как Работает Текстильная Мастерская",
    workshopLead:
      "За каждым готовым изделием стоит строгая последовательность этапов. Внешне процесс кажется спокойным, но каждый шаг требует концентрации, точного ритма и многолетней практики.",
    workshopMoments: [
      {
        label: "Этап 01",
        title: "Отбор Материала",
        text:
          "Шерсть, хлопок и шёлк сортируют по длине и стабильности волокна. Даже небольшая разница в сырье влияет на фактуру, плотность узлов и поведение цвета.",
      },
      {
        label: "Этап 02",
        title: "Подготовка Натуральных Красителей",
        text:
          "Мастера готовят пигменты партиями и тестируют образцы до запуска основного ткачества. Это снижает колебания оттенков и сохраняет единый вид крупных заказов.",
      },
      {
        label: "Этап 03",
        title: "Настройка Станка и Разметка",
        text:
          "Выверяется натяжение основы, строится карта орнамента, отмечаются контрольные ряды. Большинство проблем качества предотвращается именно здесь, поэтому настройка выполняется медленно и точно.",
      },
      {
        label: "Этап 04",
        title: "Финишная Обработка",
        text:
          "После ткачества изделие подравнивают, промывают, стабилизируют и проверяют при разном свете. Перед выпуском оценивают кромки, цветовой баланс и точность рисунка.",
      },
    ],
    standardsTitle: "Стандарты Качества Старших Мастеров",
    standardsLead:
      "Качество определяется не только красотой, но и повторяемыми критериями. Руководители мастерских проверяют структуру и долговечность до того, как изделие попадает в продажу.",
    standards: [
      {
        title: "Структурный Баланс",
        text:
          "Края, углы и центральная часть сравниваются по симметрии. Небольшие отклонения корректируются до финальной промывки, чтобы избежать деформации при эксплуатации.",
      },
      {
        title: "Целостность Орнамента",
        text:
          "Переходы рисунка проверяются построчно, особенно в участках высокой плотности. Любой сбой ритма исправляет тот же мастер, который выполнял данный фрагмент.",
      },
      {
        title: "Стабильность Цвета",
        text:
          "Изделия оценивают при нескольких типах освещения. Это подтверждает, что цветовые отношения остаются стабильными в доме, галерее и магазине.",
      },
      {
        title: "Тактильная И Износная Оценка",
        text:
          "Проверяется мягкость поверхности, стойкость к трению и общее поведение материала. Задача — сохранить комфорт на ощупь без потери прочности.",
      },
    ],
    transmissionTitle: "Как Передаются Знания",
    transmissionParagraphs: [
      "Во многих мастерских техническое обучение неотделимо от культурной памяти. Ученик осваивает последовательность работы и одновременно язык орнаментов, названия мотивов и их символику.",
      "Старшие мастера часто повторяют с учеником одну группу мотивов до тех пор, пока он не удерживает ритм без схем. Так формируются внутренний счёт и визуальная дисциплина.",
      "Сильные команды относятся к наследию как к рабочей системе, а не музейному экспонату. Они ведут технологические записи, сравнивают партии и обучают методам, пригодным для современного производства.",
    ],
  },
};

export default async function ArtisansPage() {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.get("locale")?.value);
  const copy = artisansExtendedCopy[locale];

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
        {/* Editorial Intro */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-turkmen-gold/20 shadow-soft">
          <p className="text-xs uppercase tracking-[0.2em] text-turkmen-gold font-bold mb-3">{copy.introEyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-turkmen-green mb-6">{copy.introTitle}</h2>
          <div className="grid lg:grid-cols-[1.4fr,1fr] gap-8 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {copy.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="rounded-2xl bg-turkmen-green text-white p-6 border border-turkmen-gold/40 shadow-lg">
              <p className="text-lg leading-relaxed font-semibold">“{copy.pullQuote}”</p>
            </blockquote>
          </div>
        </section>

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

        {/* Workshop Flow */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">{copy.workshopTitle}</h2>
            <p className="text-gray-700 leading-relaxed">{copy.workshopLead}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {copy.workshopMoments.map((moment) => (
              <article key={moment.title} className="bg-white rounded-xl p-6 border border-turkmen-green/10 shadow-soft">
                <p className="text-xs uppercase tracking-widest text-turkmen-gold font-bold mb-2">{moment.label}</p>
                <h3 className="text-xl font-bold text-turkmen-green mb-3">{moment.title}</h3>
                <p className="text-gray-700 leading-relaxed">{moment.text}</p>
              </article>
            ))}
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

        {/* Field Journal */}
        <section className="bg-white/70 rounded-2xl p-8 border border-turkmen-green/10">
          <h2 className="text-3xl font-bold text-turkmen-green mb-3">{copy.fieldJournalTitle}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">{copy.fieldJournalLead}</p>
          <div className="space-y-5">
            {copy.fieldJournalEntries.map((entry) => (
              <article key={entry.label} className="border-l-4 border-turkmen-gold pl-5">
                <p className="text-sm uppercase tracking-widest text-turkmen-green font-bold mb-1">{entry.label}</p>
                <p className="text-gray-700 leading-relaxed">{entry.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Standards */}
        <section className="bg-white rounded-2xl p-8 border border-turkmen-gold/20 shadow-soft">
          <h2 className="text-3xl font-bold text-turkmen-green mb-4">{copy.standardsTitle}</h2>
          <p className="text-gray-700 leading-relaxed mb-8">{copy.standardsLead}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {copy.standards.map((item) => (
              <article key={item.title} className="rounded-xl border border-turkmen-green/10 p-5 bg-desert-sand/30">
                <h3 className="text-lg font-bold text-turkmen-green mb-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Transmission */}
        <section className="bg-white/50 rounded-2xl p-8 border border-turkmen-green/10">
          <h2 className="text-3xl font-bold text-turkmen-green mb-4">{copy.transmissionTitle}</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {copy.transmissionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
