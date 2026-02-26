import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { type Locale, getLocaleFromCookie, t } from "@/lib/i18n";
import { cookies } from "next/headers";

const heritageExtendedCopy: Record<
  Locale,
  {
    editorialEyebrow: string;
    editorialTitle: string;
    editorialParagraphs: string[];
    pullQuote: string;
    readingNotesTitle: string;
    readingNotes: Array<{ label: string; text: string }>;
    timelineTitle: string;
    timelineLead: string;
    timelineEvents: Array<{ period: string; title: string; text: string }>;
    symbolismTitle: string;
    symbolismParagraphs: string[];
    continuityTitle: string;
    continuityCards: Array<{ title: string; text: string }>;
  }
> = {
  en: {
    editorialEyebrow: "Heritage Essay",
    editorialTitle: "Tradition as a Working Infrastructure",
    editorialParagraphs: [
      "Heritage survives when it remains useful. In the Turkmen textile context, continuity depends not only on memory, but on active systems: education, production, verification, and market relevance.",
      "This is why the same culture can host both ceremonial weaving and export-oriented manufacturing without contradiction. One preserves symbolic depth, the other sustains economic motion; together they stabilize the full ecosystem.",
      "Reading heritage through process rather than nostalgia reveals a practical truth: living traditions endure because they adapt structure while protecting core visual language.",
    ],
    pullQuote:
      "Cultural heritage remains strongest when it is practiced, evaluated, and taught in real production conditions.",
    readingNotesTitle: "Interpretive Notes",
    readingNotes: [
      {
        label: "Context",
        text:
          "A motif should be interpreted together with its placement, color relationship, and object function, not as an isolated symbol.",
      },
      {
        label: "Scale",
        text:
          "Large-format pieces and domestic pieces can share pattern families while serving completely different social roles.",
      },
      {
        label: "Continuity",
        text:
          "Preservation is most credible when archives, workshop training, and commercial output reinforce one another.",
      },
    ],
    timelineTitle: "Chronology of a Living Tradition",
    timelineLead:
      "Turkmen textile culture did not emerge in one era. It formed through continuous adaptation, where tools changed gradually but symbolic grammar remained recognizable across centuries.",
    timelineEvents: [
      {
        period: "Pre-Modern Foundations",
        title: "Nomadic Utility to Identity Marker",
        text:
          "Early woven forms served shelter, transport, and ritual functions. Over time, repeated motif systems evolved from practical coding into visual identity for clans and communities.",
      },
      {
        period: "Silk Road Exchange",
        title: "Technique Expansion Through Trade",
        text:
          "Trade routes introduced new dye knowledge, fiber preparation methods, and pattern influences. Local workshops integrated these inputs while preserving regional composition logic.",
      },
      {
        period: "Industrial Transition",
        title: "Workshop + Factory Coexistence",
        text:
          "Modern mills expanded textile output, yet hand traditions remained central for cultural-grade pieces. The result is a dual system: industrial scale with artisanal depth.",
      },
      {
        period: "Contemporary Preservation",
        title: "Documentation, Teaching, and Digital Catalogs",
        text:
          "Current preservation practices include master-apprentice transmission, institutional archives, and digital product records. This allows heritage techniques to remain active in real commerce.",
      },
    ],
    symbolismTitle: "The Symbolic Language of Turkmen Ornament",
    symbolismParagraphs: [
      "In Turkmen weaving, ornament operates like a visual sentence. Border rhythm, medallion spacing, and recurring geometric signs establish hierarchy and narrative flow within a single textile field.",
      "Motifs are not fixed labels with one meaning for all contexts. The same element may signal protection, celebration, or status depending on placement, color pairing, and whether the piece is domestic, ceremonial, or transport-related.",
      "This layered visual logic is one reason traditional pieces remain relevant in contemporary design. They provide both surface beauty and encoded structure, allowing modern spaces to carry historical depth without literal imitation.",
    ],
    continuityTitle: "Why the Heritage Remains Active Today",
    continuityCards: [
      {
        title: "Economic Continuity",
        text:
          "Textile work still supports livelihoods across regions. Active production keeps craft knowledge in daily use rather than preserving it only as museum heritage.",
      },
      {
        title: "Educational Continuity",
        text:
          "Workshops and academic programs reinforce each other. Practical weaving skills are increasingly paired with conservation science and documentation practice.",
      },
      {
        title: "Design Continuity",
        text:
          "Contemporary makers reinterpret historical motif systems for modern interiors, apparel, and export collections while maintaining recognizable Turkmen visual structure.",
      },
    ],
  },
  tk: {
    editorialEyebrow: "Miras Makalasy",
    editorialTitle: "Däp Işleýän Ulgam Hökmünde",
    editorialParagraphs: [
      "Miras diňe ulanylanda ýaşaýar. Türkmen dokma şertinde dowamlylyk diňe ýatlamaga däl, eýsem işjeň ulgamlara bagly: bilim, önümçilik, barlag we bazar bilen baglanyşyk.",
      "Şonuň üçin şol bir medeni giňişlikde dabaraly el dokmasy hem, eksport ugurly önümçilik hem gapma-garşy däl. Biri nyşanlaýyn manyy gorasa, beýlekisi ykdysady hereketi üpjün edýär; ikisi bilelikde ulgam durnuklylygyny döredýär.",
      "Mirasa diňe nostalgiýa däl, proses nukdaýnazaryndan garamak möhüm hakykaty görkezýär: janly däpler gurluş taýdan täzelenip, esasy vizual dili gorananda ýaşap galýar.",
    ],
    pullQuote:
      "Medeni miras iň güýçli görnüşde hakyky önümçilikde ulanylanda, barlananda we öwredilende saklanýar.",
    readingNotesTitle: "Düşündiriş Bellikleri",
    readingNotes: [
      {
        label: "Kontekst",
        text:
          "Nagyş aýratynlykda däl, onuň ýerleşişi, reňk gatnaşygy we önümiň wezipesi bilen bilelikde düşündirilmelidir.",
      },
      {
        label: "Ölçek",
        text:
          "Uly formatdaky eserler bilen öý üçin önümler bir nagyş maşgalasyny paýlaşyp bilse-de, jemgyýetçilik roly düýpli tapawutlanyp biler.",
      },
      {
        label: "Dowamlylyk",
        text:
          "Gorap saklamak arhiw, ussahana okuwy we bazar önümçiligi biri-birini güýçlendiren ýagdaýynda has ynamly bolýar.",
      },
    ],
    timelineTitle: "Janly Däbiň Wagtyň Ugry",
    timelineLead:
      "Türkmen dokma medeniýeti bir döwürde birden döremedi. Ol yzygiderli uýgunlaşma arkaly kemala geldi: gural-göterimler kem-kemden täzelense-de, nyşanlaýyn dil asyrlar dowamynda tanalýan görnüşde saklandy.",
    timelineEvents: [
      {
        period: "Gadymy Binýatlar",
        title: "Çarwa Zerurlygyndan Milli Nyşana",
        text:
          "Ilkinji dokma görnüşleri ýaşaýyş jaýy, göteriş we dessur maksatlaryna hyzmat edýärdi. Wagtyň geçmegi bilen gaýtalanýan nagyş ulgamlary amaly alamatdan jemgyýetçilik-kabile şahsyýetine öwrüldi.",
      },
      {
        period: "Ýüpek Ýoly Alyş-Çalyşy",
        title: "Söwda Arkaly Tehniki Giňeliş",
        text:
          "Söwda ýollary täze boýag maglumatlaryny, süýüm taýýarlama usullaryny we nagyş täsirlerini getirdi. Ýerli ussahanalar olary özleşdirip, sebit kompozisiýa ýörelgesini saklap galdy.",
      },
      {
        period: "Senagat Geçişi",
        title: "Ussahana bilen Fabrigiň Bilelikdäki Döwri",
        text:
          "Häzirki zaman kärhanalary dokma önümçiliginiň göwrümini artdyrdy, ýöne medeni gymmatly önümlerde el zähmeti esasy ornuny saklady. Netijede iki derejeli ulgam emele geldi: senagat göwrümi we ussatlyk çuňlugy.",
      },
      {
        period: "Häzirki Dönem Goragy",
        title: "Resminamalaşdyrma, Okuw we Sanly Kataloglar",
        text:
          "Bugünkü gorap saklaýyş işi usta-şägirt okuwyny, institusional arhiwleri we sanly önüm ýazgylaryny öz içine alýar. Bu ýagdaý miras usullarynyň bazar durmuşynda hem işjeň bolmagyna mümkinçilik berýär.",
      },
    ],
    symbolismTitle: "Türkmen Nagyşynyň Nyşanlaýyn Dili",
    symbolismParagraphs: [
      "Türkmen dokma sungatynda nagyş wizual sözlem ýaly işleýär. Gyralaryň ritmi, medalyonlaryň aralygy we gaýtalanýan geometrik nyşanlar bir önümiň içinde many tertibini döredýär.",
      "Nagyşlaryň manysy ähli ýerde birmeňzeş däldir. Bir element ýerleşişine, reňk birleşigine we önümiň gündelikmi, dabaralymy ýa-da göteriş maksatlymydygyna görä dürli many berip biler.",
      "Şol köp gatlakly logika sebäpli däp bolan eserler häzirki dizaýnda hem möhüm bolmagynda galýar. Olar diňe bezeg däl, gurluşly taryhy many hem getirýär.",
    ],
    continuityTitle: "Miras Näme Üçin Häzirki Wagtda Hem Janly",
    continuityCards: [
      {
        title: "Ykdysady Dowamlylyk",
        text:
          "Dokma işi sebitlerde henizem müňlerçe adamyň durmuşyna goldaw berýär. Işjeň önümçilik hünär biliminiň diňe muzeý derejesinde däl, gündelik işde hem ýaşamagyny üpjün edýär.",
      },
      {
        title: "Bilim Dowamlylygy",
        text:
          "Ussahana taýýarlygy bilen akademik programmalaryň arasyndaky baglanyşyk güýçlenýär. Amaly dokma endikleri konserwasiýa ylmy we resminamalaşdyrma bilen utgaşdyrylýar.",
      },
      {
        title: "Dizaýn Dowamlylygy",
        text:
          "Häzirki döredijiler taryhy nagyş ulgamlaryny häzirki içerki bezeg, geýim we eksport kolleksiýalary üçin gaýtadan düşündirýärler, şol bir wagtda türkmen vizual gurluşyny saklaýarlar.",
      },
    ],
  },
  ru: {
    editorialEyebrow: "Очерк о Наследии",
    editorialTitle: "Традиция как Рабочая Инфраструктура",
    editorialParagraphs: [
      "Наследие живёт тогда, когда остаётся функциональным. В туркменском текстиле непрерывность держится не только на памяти, но и на действующих системах: обучении, производстве, проверке качества и рыночной востребованности.",
      "Именно поэтому в одной культурной среде могут устойчиво сосуществовать церемониальное ручное ткачество и экспортно-ориентированное производство. Первое сохраняет символическую глубину, второе поддерживает экономическую динамику.",
      "Если смотреть на наследие через процессы, а не только через ностальгию, становится очевидно: живые традиции выживают, когда обновляют организацию труда и сохраняют базовый визуальный язык.",
    ],
    pullQuote:
      "Наследие особенно устойчиво тогда, когда его практикуют, проверяют и передают в условиях реального производства.",
    readingNotesTitle: "Пояснительные Наблюдения",
    readingNotes: [
      {
        label: "Контекст",
        text:
          "Мотив корректно читать вместе с местом в композиции, цветовой парой и функцией предмета, а не как отдельный знак.",
      },
      {
        label: "Масштаб",
        text:
          "Крупноформатные и бытовые изделия могут использовать схожие мотивные семьи, но выполнять разные социальные задачи.",
      },
      {
        label: "Непрерывность",
        text:
          "Сохранение наиболее убедительно там, где архивы, обучение в мастерских и рыночный выпуск работают как единая система.",
      },
    ],
    timelineTitle: "Хронология Живой Традиции",
    timelineLead:
      "Туркменская текстильная культура не возникла в один момент. Она формировалась через постоянную адаптацию: инструменты менялись постепенно, а символический язык оставался узнаваемым столетиями.",
    timelineEvents: [
      {
        period: "Досовременный Период",
        title: "От Утилитарной Функции к Знаку Идентичности",
        text:
          "Ранние тканые формы обслуживали быт, транспорт и ритуалы. Со временем повторяющиеся системы мотивов превратились из практических обозначений в визуальную идентичность общин и родов.",
      },
      {
        period: "Обмен Шёлкового Пути",
        title: "Расширение Техник Через Торговлю",
        text:
          "Торговые маршруты приносили новые знания о красителях, подготовке волокна и композиции узора. Местные мастерские интегрировали эти влияния, сохраняя региональную логику построения орнамента.",
      },
      {
        period: "Индустриальный Переход",
        title: "Сосуществование Мастерской и Фабрики",
        text:
          "Современные предприятия увеличили объёмы выпуска, но ручные традиции остались ключевыми для культурно значимых изделий. Так возникла двойная система: промышленный масштаб и ремесленная глубина.",
      },
      {
        period: "Современное Сохранение",
        title: "Документация, Обучение и Цифровые Каталоги",
        text:
          "Сегодня сохранение включает передачу уста-шагирт, институциональные архивы и цифровые карточки изделий. Это позволяет наследным техникам оставаться частью реального рынка.",
      },
    ],
    symbolismTitle: "Символический Язык Туркменского Орнамента",
    symbolismParagraphs: [
      "В туркменском ткачестве орнамент работает как визуальное высказывание. Ритм бордюра, расстояние между медальонами и повторяемые геометрические элементы формируют внутреннюю структуру произведения.",
      "У мотива редко бывает одно универсальное значение. Один и тот же знак может обозначать защиту, торжество или статус в зависимости от расположения, цветовой пары и функции изделия.",
      "Именно эта многослойность делает традиционный текстиль актуальным для современного дизайна. Он даёт не только декоративность, но и структурированную историческую глубину.",
    ],
    continuityTitle: "Почему Наследие Остаётся Актуальным",
    continuityCards: [
      {
        title: "Экономическая Непрерывность",
        text:
          "Текстильное производство продолжает поддерживать занятость в регионах. Живой рынок сохраняет ремесленные знания в практике, а не только в музейной среде.",
      },
      {
        title: "Образовательная Непрерывность",
        text:
          "Мастерские и учебные программы усиливают друг друга. Практическое ткачество всё чаще дополняется консервационными методами и системной документацией.",
      },
      {
        title: "Дизайнерская Непрерывность",
        text:
          "Современные авторы переосмысляют исторические мотивные системы для интерьеров, одежды и экспортных линий, сохраняя узнаваемую туркменскую визуальную основу.",
      },
    ],
  },
};

export default async function HeritagePage() {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.get("locale")?.value);
  const copy = heritageExtendedCopy[locale];

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

        {/* Timeline */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">{copy.timelineTitle}</h2>
            <p className="text-gray-700 leading-relaxed">{copy.timelineLead}</p>
          </div>
          <div className="space-y-4">
            {copy.timelineEvents.map((event) => (
              <article key={event.title} className="bg-white rounded-xl p-6 border border-turkmen-green/10 shadow-soft">
                <p className="text-xs uppercase tracking-widest text-turkmen-gold font-bold mb-2">{event.period}</p>
                <h3 className="text-xl font-bold text-turkmen-green mb-2">{event.title}</h3>
                <p className="text-gray-700 leading-relaxed">{event.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Symbolism */}
        <section className="bg-white/50 rounded-2xl p-8 border border-turkmen-green/10">
          <h2 className="text-3xl font-bold text-turkmen-green mb-4">{copy.symbolismTitle}</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {copy.symbolismParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Reading Notes */}
        <section className="bg-white/70 rounded-2xl p-8 border border-turkmen-green/10">
          <h2 className="text-3xl font-bold text-turkmen-green mb-6">{copy.readingNotesTitle}</h2>
          <div className="space-y-5">
            {copy.readingNotes.map((note) => (
              <article key={note.label} className="border-l-4 border-turkmen-gold pl-5">
                <p className="text-sm uppercase tracking-widest text-turkmen-green font-bold mb-1">{note.label}</p>
                <p className="text-gray-700 leading-relaxed">{note.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Continuity */}
        <section>
          <h2 className="text-3xl font-bold text-turkmen-green mb-8">{copy.continuityTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {copy.continuityCards.map((card) => (
              <article key={card.title} className="card">
                <h3 className="text-lg font-bold text-turkmen-green mb-3">{card.title}</h3>
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
