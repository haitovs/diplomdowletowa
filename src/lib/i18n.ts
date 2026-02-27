/**
 * i18n dictionary for Heritage Textiles (Dowletowa v2)
 * Supports: English (en), Turkmen (tk), Russian (ru)
 *
 * NOTE: tk and ru translations for NEW keys are English placeholders.
 * Replace them with proper Turkmen / Russian translations.
 */

export type Locale = "en" | "tk" | "ru";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  tk: "Türkmen",
  ru: "Русский",
};

export const DEFAULT_LOCALE: Locale = "tk";

type TranslationDict = Record<string, Record<Locale, string>>;

const translations: TranslationDict = {
  // ─── Navigation ─────────────────────────
  "nav.shopping": {
    en: "Shopping",
    tk: "Dükan",
    ru: "Магазин",
  },
  "nav.collections": {
    en: "Collections",
    tk: "Kolleksiýalar",
    ru: "Коллекции",
  },
  "nav.artisans": {
    en: "Artisans",
    tk: "Ussalar",
    ru: "Мастера",
  },
  "nav.heritage": {
    en: "Heritage",
    tk: "Miras",
    ru: "Наследие",
  },
  "nav.contact": {
    en: "Contact",
    tk: "Habarlaşmak",
    ru: "Контакты",
  },
  "nav.companies": {
    en: "Companies",
    tk: "Kärhanalar",
    ru: "Предприятия",
  },
  "nav.compare": {
    en: "Compare",
    tk: "Deňeşdir",
    ru: "Сравнить",
  },
  "nav.cart": {
    en: "Cart",
    tk: "Araba",
    ru: "Корзина",
  },

  // ─── Hero Section ───────────────────────
  "hero.since": {
    en: "SINCE 1924",
    tk: "1924-NJI ÝYLDAN BÄRI",
    ru: "С 1924 ГОДА",
  },
  "hero.title_1": {
    en: "Woven With",
    tk: "Ruh Bilen",
    ru: "Сотканные С",
  },
  "hero.title_2": {
    en: "Soul",
    tk: "Dokalan",
    ru: "Душой",
  },
  "hero.subtitle": {
    en: "Heritage Textiles celebrates the living heritage of Turkmenistan's master weavers. Discover carpets, silks, and art that embody the spirit of the desert.",
    tk: "Heritage Textiles türkmen ussat dokmaçylarynyň janly mirasyny dabaralandyrýar. Çölüň ruhuny şöhlelendirýän halylary, ýüpekleri we sungat eserlerini açyň.",
    ru: "Heritage Textiles прославляет живое наследие туркменских мастеров ткачества. Откройте ковры, шёлк и искусство, передающие дух пустыни.",
  },
  "hero.shop_now": {
    en: "Start Shopping",
    tk: "Söwda Et",
    ru: "Купить",
  },
  "hero.view_collection": {
    en: "View Collection",
    tk: "Kolleksiýany Gör",
    ru: "Коллекция",
  },

  // ─── Homepage Sections ──────────────────
  "home.featured": {
    en: "Curated Masterpieces",
    tk: "Saýlanan Şah Eserler",
    ru: "Избранные Шедевры",
  },
  "home.featured_desc": {
    en: "Hand-selected for their exceptional craftsmanship and rarity. These pieces represent the pinnacle of Turkmen textile art.",
    tk: "Aýratyn ussatlygy we seýrekligi üçin elde saýlandy. Bu eserler türkmen dokma sungatynyň iň ýokary derejesini görkezýär.",
    ru: "Отобраны вручную за исключительное мастерство и редкость. Эти изделия представляют вершину туркменского текстильного искусства.",
  },
  "home.latest": {
    en: "Latest Arrivals",
    tk: "Iň Soňky Gelenler",
    ru: "Новые Поступления",
  },
  "home.latest_subtitle": {
    en: "Fresh from the looms and workshops of Turkmenistan.",
    tk: "Türkmenistanyň dokma stanoklaryndan we ussahanalaryndan täze gelen önümler.",
    ru: "Свежие поступления прямо с ткацких станков и из мастерских Туркменистана.",
  },
  "home.add_to_cart": {
    en: "Add to Cart",
    tk: "Araba Goş",
    ru: "В Корзину",
  },
  "home.view_all": {
    en: "View All Products",
    tk: "Ähli Harytlary Gör",
    ru: "Все Товары",
  },
  "home.our_stores": {
    en: "Our Artisan Partners",
    tk: "Biziň Ussat Hyzmatdaşlarymyz",
    ru: "Наши Партнёры-Мастера",
  },
  "home.explore_heritage": {
    en: "Explore the Heritage",
    tk: "Mirasy Öwreniň",
    ru: "Исследуйте Наследие",
  },
  "home.highlight_origins_title": {
    en: "Authentic Origins",
    tk: "Hakyky Gözbaşlar",
    ru: "Подлинное Происхождение",
  },
  "home.highlight_origins_desc": {
    en: "Each textile originates from regions renowned for their unique göl patterns and centuries-old knotting traditions.",
    tk: "Her dokma önümi özboluşly göl nagyşlary we asyrlarboýy düwünleme däpleri bilen tanalýan sebitlerden gelip çykýar.",
    ru: "Каждое изделие происходит из регионов, известных уникальными узорами göl и многовековыми традициями узелкового ткачества.",
  },
  "home.highlight_fibers_title": {
    en: "Natural Fibers",
    tk: "Tebigy Süýümler",
    ru: "Натуральные Волокна",
  },
  "home.highlight_fibers_desc": {
    en: "Turkmen cotton, hand-spun wool, camelhair, and mulberry silk — natural materials dyed with traditional pigments.",
    tk: "Türkmen pagtasy, elde egrilen ýüň, düýe ýüňi we tut ýüpegi — däp bolan boýaglar bilen reňklenen tebigy çig mallar.",
    ru: "Туркменский хлопок, ручная пряжа из шерсти, верблюжья шерсть и тутовый шёлк — натуральные материалы, окрашенные традиционными пигментами.",
  },
  "home.highlight_heritage_title": {
    en: "Living Heritage",
    tk: "Janly Miras",
    ru: "Живое Наследие",
  },
  "home.highlight_heritage_desc": {
    en: "UNESCO-recognized carpet weaving (2019) and sericulture (2022) traditions preserved by master artisans across Turkmenistan.",
    tk: "UNESCO tarapyndan ykrar edilen halyçylyk (2019) we ýüpekçilik (2022) däplerini Türkmenistanyň dürli sebitlerindäki ussatlar ýaşadýar.",
    ru: "Традиции ковроткачества (2019) и шелководства (2022), признанные ЮНЕСКО, сохраняются мастерами по всему Туркменистану.",
  },

  // ─── Shop Page ──────────────────────────
  "shop.title": {
    en: "Shop Turkmen Textiles",
    tk: "Türkmen Dokma Önümleri",
    ru: "Туркменский Текстиль",
  },
  "shop.subtitle": {
    en: "Browse carpets, silk, denim, cotton products and more from leading Turkmen manufacturers",
    tk: "Türkmenistanyň öňdebaryjy öndürijilerinden halylary, ýüpek, denim, pagta önümlerini we başga-da köp zady görüň",
    ru: "Просматривайте ковры, шёлк, деним, хлопковые изделия и многое другое от ведущих туркменских производителей",
  },
  "shop.filter_category": {
    en: "Category",
    tk: "Kategoriýa",
    ru: "Категория",
  },
  "shop.filter_store": {
    en: "Manufacturer",
    tk: "Öndüriji",
    ru: "Производитель",
  },
  "shop.sort_by": {
    en: "Sort by",
    tk: "Tertiple",
    ru: "Сортировать",
  },
  "shop.no_products": {
    en: "No products found",
    tk: "Haryt tapylmady",
    ru: "Товары не найдены",
  },
  "shop.all_categories": {
    en: "All Categories",
    tk: "Ähli Kategoriýalar",
    ru: "Все Категории",
  },
  "shop.all_stores": {
    en: "All Manufacturers",
    tk: "Ähli Öndürijiler",
    ru: "Все Производители",
  },
  "shop.sort_featured": {
    en: "Featured",
    tk: "Saýlananlar",
    ru: "Рекомендуемые",
  },
  "shop.sort_price_asc": {
    en: "Price: Low to High",
    tk: "Baha: Arzandan Gymmada",
    ru: "Цена: По Возрастанию",
  },
  "shop.sort_price_desc": {
    en: "Price: High to Low",
    tk: "Baha: Gymmatdan Arzana",
    ru: "Цена: По Убыванию",
  },
  "shop.sort_name": {
    en: "Name",
    tk: "Ady",
    ru: "Название",
  },
  "shop.search_placeholder": {
    en: "Search textiles...",
    tk: "Dokma önümlerini gözläň...",
    ru: "Искать текстиль...",
  },
  "shop.filter_btn": {
    en: "Filter",
    tk: "Süzgüçle",
    ru: "Фильтр",
  },
  "shop.adjust_filters": {
    en: "Try adjusting your filters or search",
    tk: "Süzgüçleriňizi ýa-da gözlegi üýtgedip görüň",
    ru: "Попробуйте изменить фильтры или поисковый запрос",
  },
  "shop.prev": {
    en: "Prev",
    tk: "Yza",
    ru: "Назад",
  },
  "shop.next": {
    en: "Next",
    tk: "Öňe",
    ru: "Вперёд",
  },
  "shop.showing": {
    en: "Showing",
    tk: "Görkezilýär",
    ru: "Показано",
  },
  "shop.of": {
    en: "of",
    tk: "/",
    ru: "из",
  },
  "shop.products_count": {
    en: "products",
    tk: "haryt",
    ru: "товаров",
  },

  // ─── Product ────────────────────────────
  "product.add_to_cart": {
    en: "Add to Cart",
    tk: "Araba Goş",
    ru: "В Корзину",
  },
  "product.compare": {
    en: "Compare",
    tk: "Deňeşdir",
    ru: "Сравнить",
  },
  "product.fiber": {
    en: "Fiber",
    tk: "Süýüm",
    ru: "Волокно",
  },
  "product.technique": {
    en: "Technique",
    tk: "Tehnika",
    ru: "Техника",
  },
  "product.delivery": {
    en: "Delivery",
    tk: "Eltip Bermek",
    ru: "Доставка",
  },
  "product.in_stock": {
    en: "In Stock",
    tk: "Bardy",
    ru: "В Наличии",
  },
  "product.out_of_stock": {
    en: "Out of Stock",
    tk: "Gutmady",
    ru: "Нет В Наличии",
  },
  "product.home": {
    en: "Home",
    tk: "Baş Sahypa",
    ru: "Главная",
  },
  "product.shop": {
    en: "Shop",
    tk: "Dükan",
    ru: "Магазин",
  },
  "product.type": {
    en: "Type",
    tk: "Görnüşi",
    ru: "Тип",
  },
  "product.dimensions": {
    en: "Dimensions",
    tk: "Ölçegler",
    ru: "Размеры",
  },
  "product.availability": {
    en: "Availability",
    tk: "Elýeterlilik",
    ru: "Наличие",
  },
  "product.shipping_info": {
    en: "Shipping Information",
    tk: "Eltip Bermek Maglumaty",
    ru: "Информация О Доставке",
  },
  "product.related": {
    en: "You Might Also Like",
    tk: "Bulary Hem Halap Bilersiňiz",
    ru: "Вам Также Может Понравиться",
  },
  "product.view_details": {
    en: "View Details",
    tk: "Jikme-Jik Gör",
    ru: "Подробнее",
  },

  // ─── Cart & Checkout ────────────────────
  "cart.title": {
    en: "Your Cart",
    tk: "Arabaňyz",
    ru: "Ваша Корзина",
  },
  "cart.empty": {
    en: "Your cart is empty",
    tk: "Arabaňyz boş",
    ru: "Ваша корзина пуста",
  },
  "cart.checkout": {
    en: "Proceed to Checkout",
    tk: "Töleg Et",
    ru: "Оформить Заказ",
  },
  "cart.total": {
    en: "Total",
    tk: "Jemi",
    ru: "Итого",
  },
  "cart.your_selection": {
    en: "Your Selection",
    tk: "Saýlanlaryňyz",
    ru: "Ваш Выбор",
  },
  "cart.shopping_cart": {
    en: "Shopping Cart",
    tk: "Söwda Arabasy",
    ru: "Корзина Покупок",
  },
  "cart.review_text": {
    en: "Review your handpicked textiles before completing your order",
    tk: "Sargydy tamamlamazdan ozal saýlan dokma önümleriňizi barlaň",
    ru: "Перед оформлением заказа проверьте выбранные текстильные изделия",
  },
  "cart.discover_text": {
    en: "Discover our curated collection of Turkmen textiles",
    tk: "Biziň saýlanan türkmen dokma kolleksiýamyzy açyň",
    ru: "Откройте нашу отобранную коллекцию туркменского текстиля",
  },
  "cart.browse_collection": {
    en: "Browse Collection",
    tk: "Kolleksiýany Gör",
    ru: "Смотреть Коллекцию",
  },
  "cart.order_summary": {
    en: "Order Summary",
    tk: "Sargyt Jemlemesi",
    ru: "Сводка Заказа",
  },
  "cart.items_count": {
    en: "Items",
    tk: "Harytlar",
    ru: "Товары",
  },
  "cart.shipping": {
    en: "Shipping",
    tk: "Eltip Bermek",
    ru: "Доставка",
  },
  "cart.shipping_calc": {
    en: "Calculated at checkout",
    tk: "Tölegde hasaplanar",
    ru: "Рассчитывается при оформлении",
  },
  "cart.full_name": {
    en: "Full Name",
    tk: "Doly Ady",
    ru: "Полное Имя",
  },
  "cart.email": {
    en: "Email Address",
    tk: "E-poçta Salgysy",
    ru: "Адрес Электронной Почты",
  },
  "cart.phone": {
    en: "Phone Number",
    tk: "Telefon Belgisi",
    ru: "Номер Телефона",
  },
  "cart.address": {
    en: "Delivery Address",
    tk: "Eltip Beriş Salgysy",
    ru: "Адрес Доставки",
  },
  "cart.special_instructions": {
    en: "Special Instructions",
    tk: "Goşmaça Görkezmeler",
    ru: "Особые Пожелания",
  },
  "cart.complete_order": {
    en: "Complete Order",
    tk: "Sargydy Tamamla",
    ru: "Завершить Заказ",
  },
  "cart.demo_notice": {
    en: "This is a demonstration. No payment will be processed.",
    tk: "Bu görkezme görnüşidir. Hakyky töleg amala aşyrylmaýar.",
    ru: "Это демонстрационный режим. Реальная оплата не производится.",
  },
  "cart.qty": {
    en: "Qty:",
    tk: "Mukdar:",
    ru: "Кол-во:",
  },
  "cart.remove": {
    en: "Remove from cart",
    tk: "Arabadan Aýyr",
    ru: "Удалить Из Корзины",
  },
  "cart.name_placeholder": {
    en: "Enter your full name",
    tk: "Doly adyňyzy giriziň",
    ru: "Введите ваше полное имя",
  },
  "cart.email_placeholder": {
    en: "your@email.com",
    tk: "siz@email.com",
    ru: "vash@email.com",
  },
  "cart.phone_placeholder": {
    en: "+993 XX XXX XXX",
    tk: "+993 XX XX XX XX",
    ru: "+993 XX XX XX XX",
  },
  "cart.address_placeholder": {
    en: "Street address, city, region...",
    tk: "Köçe, şäher, welaýat...",
    ru: "Улица, город, регион...",
  },
  "cart.notes_placeholder": {
    en: "Any special requests or notes...",
    tk: "Islendik goşmaça haýyş ýa-da bellik...",
    ru: "Любые особые пожелания или примечания...",
  },

  // ─── Compare ────────────────────────────
  "compare.price_check": {
    en: "Price & Material Check",
    tk: "Baha we Material Deňeşdirmesi",
    ru: "Проверка Цены И Материала",
  },
  "compare.title": {
    en: "Compare Saved Textiles",
    tk: "Saklanan Dokmalary Deňeşdir",
    ru: "Сравнение Сохранённых Товаров",
  },
  "compare.description": {
    en: "Items you marked on the shopping page appear here. Keep up to three products, remove any you no longer want, and return to the shop to add more.",
    tk: "Söwda sahypasynda bellän harytlaryňyz şu ýerde görünýär. 3 haryda çenli saklap, gerekmeýänlerini aýyryp, goşmaça haryt üçin dükana dolanyp bilersiňiz.",
    ru: "Здесь отображаются товары, отмеченные на странице магазина. Сохраняйте до 3 товаров, удаляйте лишние и возвращайтесь в магазин, чтобы добавить ещё.",
  },
  "compare.back_to_shop": {
    en: "Back to Shopping",
    tk: "Dükana Dolan",
    ru: "Вернуться В Магазин",
  },
  "compare.clear_list": {
    en: "Clear List",
    tk: "Sanawy Arassala",
    ru: "Очистить Список",
  },
  "compare.up_to_3": {
    en: "Up to 3 Items",
    tk: "3 Haryda Çenli",
    ru: "До 3 Товаров",
  },
  "compare.side_by_side": {
    en: "Side-by-side Overview",
    tk: "Gapdal-Gapdala Deňeşdirme",
    ru: "Сравнение Рядом",
  },
  "compare.side_by_side_desc": {
    en: "We highlight the best price automatically. Details stay minimal so you can make quick choices.",
    tk: "Iň amatly baha awtomatiki görkezilýär. Jikme-jiklikler ykjam saklanýar, şonuň üçin tiz karar berip bilersiňiz.",
    ru: "Лучшая цена выделяется автоматически. Детали остаются краткими, чтобы вы могли быстро принять решение.",
  },
  "compare.no_items": {
    en: "No items saved. Go back to the shop and press \"Compare\".",
    tk: "Hiç zat saklanmady. Dükana dolanyp, \"Deňeşdir\" düwmesini basyň.",
    ru: "Список пуст. Вернитесь в магазин и нажмите \"Сравнить\".",
  },
  "compare.start_shopping": {
    en: "Start Shopping",
    tk: "Söwda Başla",
    ru: "Начать Покупки",
  },
  "compare.remove": {
    en: "Remove",
    tk: "Aýyr",
    ru: "Удалить",
  },
  "compare.col_product": {
    en: "Product",
    tk: "Haryt",
    ru: "Товар",
  },
  "compare.col_price": {
    en: "Price",
    tk: "Baha",
    ru: "Цена",
  },

  // ─── Heritage Page ──────────────────────
  "heritage.hero_title": {
    en: "Turkmen Textile Heritage",
    tk: "Türkmen Dokma Mirasy",
    ru: "Туркменское Текстильное Наследие",
  },
  "heritage.hero_desc": {
    en: "Turkmenistan's textile traditions span over two millennia — from hand-knotted carpets recognized by UNESCO to the luminous keteni silk of the Silk Road. Today, over 70 enterprises carry this legacy forward.",
    tk: "Türkmenistanyň dokma däpleri iki müň ýyldan hem köp döwri öz içine alýar — UNESCO tarapyndan ykrar edilen el halylaryndan başlap, Ýüpek ýolunyň lowurdap duran keteni ýüpegine çenli. Häzirki wagtda bu mirasy 70-den gowrak kärhana dowam etdirýär.",
    ru: "Текстильные традиции Туркменистана насчитывают более двух тысячелетий — от узелковых ковров, признанных ЮНЕСКО, до сияющего кетени Шёлкового пути. Сегодня это наследие продолжают более 70 предприятий.",
  },
  "heritage.unesco_title": {
    en: "UNESCO Recognition",
    tk: "UNESCO-nyň Ykrar Edişi",
    ru: "Признание ЮНЕСКО",
  },
  "heritage.unesco_p1": {
    en: "In 2019, the art of Turkmen carpet weaving was inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity, recognizing the centuries-old tradition of hand-knotting that defines Turkmen identity. Each tribal group — Tekke, Yomut, Ersari, Salor, and Saryk — developed distinctive göl (medallion) patterns that serve as heraldic emblems.",
    tk: "2019-njy ýylda türkmen halyçylyk sungaty UNESCO-nyň Adamzadyň maddy däl medeni mirasynyň wekilli sanawyna girizildi. Bu karar türkmen milli kimligini kesgitleýän asyrlarboýy el bilen düwünleme däbiniň ähmiýetini ykrar etdi. Tekke, Ýomut, Ärsary, Salyr we Saryk ýaly taýpa toparlarynyň her biri gerb nyşany hökmünde kabul edilýän özboluşly göl nagyşlaryny ösdürdi.",
    ru: "В 2019 году искусство туркменского ковроткачества было включено в Репрезентативный список нематериального культурного наследия человечества ЮНЕСКО. Это признало многовековую традицию ручного узелкового ткачества, формирующую туркменскую идентичность. Каждая племенная группа — теке, йомут, эрсары, салыр и сарык — сформировала собственные узоры göl, ставшие своего рода геральдическими символами.",
  },
  "heritage.unesco_p2": {
    en: "In 2022, traditional Turkmen sericulture and silk production were also inscribed, acknowledging the ancient art of rearing silkworms and weaving keteni — a lustrous fabric central to bridal traditions and national celebrations. These recognitions place Turkmen textiles alongside the world's most treasured craft traditions.",
    tk: "2022-nji ýylda türkmeniň däp bolan ýüpekçiligi we ýüpek önümçiligi hem bu sanawa goşuldy. Bu ykrar ýüpek gurçugyny ösdürip ýetişdirmekden başlap keteni dokamaga çenli gadymy usullaryň gymmatyny görkezýär. Şeýle kararlar türkmen dokma mirasyny dünýäniň iň gadyrly senet däpleri bilen bir hatara çykarýar.",
    ru: "В 2022 году в список также были включены традиционные туркменские шелководство и производство шёлка. Это признало древнее мастерство разведения шелкопряда и ткачества кетени — блестящей ткани, важной для свадебных традиций и национальных праздников. Такое признание ставит туркменский текстиль в один ряд с наиболее ценными ремесленными традициями мира.",
  },
  "heritage.industry_title": {
    en: "Modern Textile Industry",
    tk: "Häzirki Zaman Dokma Senagaty",
    ru: "Современная Текстильная Промышленность",
  },
  "heritage.industry_p1": {
    en: "Turkmenistan's textile sector is one of the largest in Central Asia. The state association Türkmenhaly, founded in 1924, coordinates handmade carpet production across all five provinces. Major industrial complexes — Türkmenbaşy Dokma Toplumy, Aşgabat Dokma Toplumy, Ruhabat, Babadaýhan, and Kaka — process domestically grown cotton into yarn, fabrics, and finished garments.",
    tk: "Türkmenistanyň dokma pudagy Merkezi Aziýadaky iň iri pudaklaryň biridir. 1924-nji ýylda döredilen döwlet birleşigi Türkmenhaly ýurduň bäş welaýatynda elde haly öndürilişini utgaşdyrýar. Türkmenbaşy, Aşgabat, Ruhabat, Babadaýhan we Kaka ýaly iri toplumlar ýerli pagtany ýüpege, mata we taýýar eşige öwürýär.",
    ru: "Текстильный сектор Туркменистана — один из крупнейших в Центральной Азии. Государственное объединение Türkmenhaly, основанное в 1924 году, координирует производство ручных ковров во всех пяти велаятах. Крупные комплексы — Türkmenbaşy Dokma Toplumy, Aşgabat Dokma Toplumy, Ruhabat, Babadaýhan и Kaka — перерабатывают местный хлопок в пряжу, ткани и готовую одежду.",
  },
  "heritage.industry_p2": {
    en: "The denim sector, led by Türkmenbaşy Jins Toplumy, produces jeans, jackets, and accessories for domestic and export markets. Balkandokma in Gyzylarbat uses Italian technology for premium yarn production. Together, over 70 textile enterprises employ tens of thousands of workers and contribute significantly to the national economy.",
    tk: "Türkmenbaşy Jins Toplumynyň ýolbaşçylygyndaky denim pudagy içerki we eksport bazarlary üçin jins, kurtka we esbaplar öndürýär. Gyzylarbatdaky Balkandokma ýokary hilli ýüplük üçin italýan tehnologiýasyny ulanýar. Bilelikde 70-den gowrak dokma kärhanasy on müňlerçe adamy iş bilen üpjün edýär we milli ykdysadyýete uly goşant goşýar.",
    ru: "Деним-направление во главе с Türkmenbaşy Jins Toplumy выпускает джинсы, куртки и аксессуары для внутреннего и экспортного рынков. Balkandokma в Гызыларбате использует итальянские технологии для производства пряжи премиум-класса. В совокупности более 70 текстильных предприятий обеспечивают работой десятки тысяч людей и вносят значительный вклад в национальную экономику.",
  },
  "heritage.education_title": {
    en: "Education & Preservation",
    tk: "Bilim we Gorap Saklamak",
    ru: "Образование И Сохранение",
  },
  "heritage.education_p1": {
    en: "The usta-şägirt (master-apprentice) tradition remains the backbone of Turkmen craft education. Young weavers learn alongside experienced masters, absorbing not only technique but the songs, proverbs, and rituals that accompany the craft. This oral transmission ensures that knowledge passes intact from generation to generation.",
    tk: "Usta-şägirt däbi türkmen senetçilik biliminiň esasy bolup galýar. Ýaş dokmaçylar tejribeli ussalar bilen işleýär, diňe tehnikany däl-de, bu hünär bilen baglanyşykly aýdymlary, nakyllary we däp-dessurlary hem öwrenýärler. Şeýle dilden-dile geçýän okuw maglumatlaryň nesilden-nesle bozulman geçirilmegine mümkinçilik berýär.",
    ru: "Традиция уста-шагирт (мастер-ученик) остаётся основой туркменского ремесленного образования. Молодые ткачи учатся рядом с опытными мастерами, осваивая не только технику, но и песни, пословицы и ритуалы, сопровождающие ремесло. Такая устная передача знаний обеспечивает их сохранность из поколения в поколение.",
  },
  "heritage.education_p2": {
    en: "Universities in Ashgabat and Mary offer textile arts and conservation programs. The National Carpet Museum in Ashgabat houses over 2,000 historic carpets, some dating to the 17th century, serving as both archive and inspiration for contemporary weavers.",
    tk: "Aşgabat we Mary şäherlerindäki ýokary okuw jaýlarynda dokma sungaty we konserwasiýa programmalary bar. Aşgabatdaky Milli Haly muzeýinde 2000-den gowrak taryhy haly saklanýar, olaryň käbiri XVII asyra degişlidir. Bu muzeý hem arhiw, hem häzirki zaman dokmaçylary üçin ylham çeşmesidir.",
    ru: "Университеты Ашхабада и Мары предлагают программы по текстильному искусству и сохранению наследия. В Национальном музее ковра в Ашхабаде хранится более 2000 исторических ковров, часть из которых датируется XVII веком. Музей служит одновременно архивом и источником вдохновения для современных ткачей.",
  },
  "heritage.silkroad_title": {
    en: "Silk Road Legacy",
    tk: "Ýüpek Ýolunyň Mirasy",
    ru: "Наследие Шёлкового Пути",
  },
  "heritage.silkroad_p1": {
    en: "Ancient Merv, located in present-day Mary Province, was one of the largest cities in the world during the 12th century and a vital node on the Silk Road. Caravans carrying silk, spices, and dyes passed through Turkmen lands for centuries, enriching local craft traditions with Persian, Chinese, and Indian influences.",
    tk: "Häzirki Mary welaýatynda ýerleşýän gadymy Merw XII asyrda dünýäniň iň uly şäherleriniň biri bolup, Ýüpek ýolunyň möhüm merkezleriniň hatarynda durupdyr. Ýüpek, ysly önümler we boýaglar alyp geçýän kerwenler asyrlarboýy türkmen topraklaryndan geçip, ýerli senetçilik däplerini pars, hytaý we hindi täsirleri bilen baýlaşdyrypdyr.",
    ru: "Древний Мерв, расположенный на территории нынешнего Марыйского велаята, в XII веке был одним из крупнейших городов мира и важным узлом Шёлкового пути. Караваны с шёлком, пряностями и красителями веками проходили через туркменские земли, обогащая местные ремесленные традиции персидскими, китайскими и индийскими влияниями.",
  },
  "heritage.silkroad_p2": {
    en: "Sericulture — the rearing of silkworms and reeling of raw silk — has been practiced in the Mary oasis for over a thousand years. The keteni fabric woven from this silk is unique to Turkmen culture: its distinctive sheen comes from a satin-weave technique that allows silk threads to float on the surface, catching light with every movement.",
    tk: "Ýüpekçilik — ýüpek gurçugyny ösdürip ýetişdirmek we çig ýüpegi egrip çykarmak — Mary oazisinde müň ýyldan gowrak wagt bäri dowam edýär. Şol ýüpekden dokalýan keteni matasy türkmen medeniýetine mahsusdyr: onuň aýratyn lowurdysy ýüpek sapaklarynyň ýüzde erkin ýerleşmegine mümkinçilik berýän atlas dokalyş usulyndan döreýär.",
    ru: "Шелководство — разведение шелкопряда и размотка сырого шёлка — практикуется в Марыйском оазисе более тысячи лет. Ткань кетени, сотканная из этого шёлка, уникальна для туркменской культуры: её характерный блеск возникает благодаря атласному переплетению, при котором шёлковые нити выходят на поверхность и ловят свет при каждом движении.",
  },
  "heritage.sustainable_title": {
    en: "Sustainable Future",
    tk: "Durnukly Geljek",
    ru: "Устойчивое Будущее",
  },
  "heritage.eco_dye_title": {
    en: "Natural Dyes",
    tk: "Tebigy Boýaglar",
    ru: "Натуральные Красители",
  },
  "heritage.eco_dye_desc": {
    en: "Traditional Turkmen dyes use madder root for red, pomegranate rind for yellow, indigo for blue, and walnut husks for brown — techniques unchanged for centuries.",
    tk: "Däp bolan türkmen boýaglarynda gyzyl üçin marena köki, sary üçin nar gabyklygy, gök üçin indigo we goňur üçin hoz gabyklygy ulanylýar — bu usullar asyrlar boýy üýtgemän saklanýar.",
    ru: "В традиционных туркменских красителях для красного используют корень марены, для жёлтого — кожуру граната, для синего — индиго, для коричневого — скорлупу грецкого ореха. Эти методы почти не изменились за века.",
  },
  "heritage.turkmen_cotton_title": {
    en: "Turkmen Cotton",
    tk: "Türkmen Pagtasy",
    ru: "Туркменский Хлопок",
  },
  "heritage.turkmen_cotton_desc": {
    en: "Turkmenistan is one of the world's top cotton producers. Domestically grown cotton feeds the country's textile mills, creating a fully integrated supply chain from field to finished product.",
    tk: "Türkmenistan dünýäde pagta öndürijileriniň öňdäki hatarynda durýar. Ýurduň içinde ösdürilýän pagta ýerli dokma kärhanalaryny çig mal bilen üpjün edip, meýdandan taýýar önüme çenli doly birleşdirilen zynjyry döredýär.",
    ru: "Туркменистан входит в число ведущих мировых производителей хлопка. Хлопок, выращенный внутри страны, снабжает текстильные фабрики и формирует полностью интегрированную цепочку от поля до готового изделия.",
  },
  "heritage.community_title": {
    en: "Community Impact",
    tk: "Jemgyýetçilik Täsiri",
    ru: "Влияние На Сообщество",
  },
  "heritage.community_desc": {
    en: "Textile production provides livelihoods for thousands of families across all provinces, especially in rural areas where carpet weaving remains a primary source of income for women.",
    tk: "Dokma önümçiligi ähli welaýatlarda müňlerçe maşgalanyň durmuşyna goldaw berýär, aýratyn-da oba ýerlerinde halyçylyk aýallar üçin esasy girdeji çeşmeleriniň biri bolup galýar.",
    ru: "Текстильное производство обеспечивает доход тысячам семей во всех велаятах, особенно в сельской местности, где ковроткачество остаётся одним из главных источников заработка для женщин.",
  },

  // ─── Artisans Page ──────────────────────
  "artisans.hero_title": {
    en: "Meet the Hands Behind the Heritage",
    tk: "Mirasy Döredýän Ussalar Bilen Tanyşyň",
    ru: "Познакомьтесь С Мастерами Наследия",
  },
  "artisans.hero_desc": {
    en: "From the carpet workshops of Mary to the silk looms of the Murgab valley, Turkmen artisans preserve techniques passed down through generations. Their skill transforms raw wool, cotton, and silk into works of art.",
    tk: "Marynyň haly ussahanalaryndan başlap Murgap jülgesiniň ýüpek dokma stanoklaryna çenli türkmen ussalary nesilden-nesle geçen usullary gorap saklaýar. Olar çig ýüňi, pagtany we ýüpegi hakyky sungat eserine öwürýär.",
    ru: "От ковровых мастерских Мары до шелковых станков долины Мургаба туркменские мастера сохраняют техники, передающиеся из поколения в поколение. Их умение превращает сырьё — шерсть, хлопок и шёлк — в произведения искусства.",
  },
  "artisans.master_weavers": {
    en: "Master Weavers",
    tk: "Ussat Dokmaçylar",
    ru: "Мастера-Ткачи",
  },
  "artisans.weaver1_name": {
    en: "Ogulgerek Ataýewa",
    tk: "Ogulgerek Ataýewa",
    ru: "Огулгерек Атаева",
  },
  "artisans.weaver1_desc": {
    en: "A master carpet weaver from the Mary region, Ogulgerek learned the Tekke göl patterns from her grandmother at age eight. With over 40 years of experience, she can reproduce all five major tribal göl patterns from memory and has trained dozens of young weavers in the usta-şägirt tradition.",
    tk: "Mary sebitinden bolan ussat halyçy Ogulgerek Tekke göl nagyşlaryny sekiz ýaşynda enesinden öwrenipdir. 40 ýyldan gowrak tejribesi bilen ol bäş esasy taýpa göl nagyşynyň hemmesini ýatdan dokap bilýär we usta-şägirt däbinde onlarça ýaş dokmaçyny taýýarlapdyr.",
    ru: "Огулгерек, мастерица ковроткачества из Марыйского региона, в восемь лет выучила узоры Tekke göl у своей бабушки. Имея более 40 лет опыта, она воспроизводит по памяти все пять основных племенных узоров göl и обучила десятки молодых ткачей в традиции уста-шагирт.",
  },
  "artisans.weaver2_name": {
    en: "Merdan Ödäýew",
    tk: "Merdan Ödäýew",
    ru: "Мердан Одаев",
  },
  "artisans.weaver2_desc": {
    en: "Based in Daşoguz, Merdan specializes in Yomut-style carpets and large-format kilims. A textile engineer by training, he combines traditional patterns with modern ergonomic loom designs that reduce physical strain on weavers while maintaining the authenticity of hand-knotted construction.",
    tk: "Daşoguzda işleýän Merdan Ýomut görnüşindäki halylar we uly göwrümli kilimler boýunça ýöriteleşendir. Hünäri boýunça dokma inženeri bolan Merdan adaty nagyşlary häzirki zaman ergonomik stanok dizaýny bilen birleşdirip, dokmaçylaryň fiziki ýüküni azaldýar we elde düwünlenen gurluşyň hakykylygyny saklaýar.",
    ru: "Мердан из Дашогуза специализируется на коврах йомутского типа и крупноформатных килимах. По образованию он инженер-текстильщик и сочетает традиционные орнаменты с современными эргономичными конструкциями станков, снижая физическую нагрузку на ткачей и сохраняя подлинность ручного узелкового исполнения.",
  },
  "artisans.weaver3_name": {
    en: "Aýnabat Nazarowa",
    tk: "Aýnabat Nazarowa",
    ru: "Айнабат Назарова",
  },
  "artisans.weaver3_desc": {
    en: "A guardian of the keteni silk tradition in Mary, Aýnabat oversees silk production from cocoon to finished fabric. She manages natural dye preparation using pomegranate, madder, and walnut, maintaining handwritten records of every dye batch to ensure color consistency across generations.",
    tk: "Maryda keteni ýüpek däbini gorap saklaýan Aýnabat ýüpek önümçiliginiň gurçukdan taýýar mata çenli ähli tapgyryna gözegçilik edýär. Ol nar, marena we hoz bilen tebigy boýag taýýarlygyny dolandyrýar hem-de reňkiň durnukly bolmagy üçin her tapgyry el bilen ýazyp hasaba alýar.",
    ru: "Айнабат, хранительница традиции кетени в Марыйском регионе, контролирует весь процесс производства шёлка — от кокона до готовой ткани. Она руководит подготовкой натуральных красителей из граната, марены и ореха и ведёт рукописные записи по каждой партии, чтобы сохранять стабильность цвета между поколениями.",
  },
  "artisans.apprenticeship_title": {
    en: "The Usta-Şägirt Tradition",
    tk: "Usta-Şägirt Däp-dessury",
    ru: "Традиция Уста-Шагирт",
  },
  "artisans.apprenticeship_p1": {
    en: "The usta-şägirt (master-apprentice) system is the traditional method of craft education in Turkmenistan. Apprentices spend years alongside a master, learning not only technical skills but the cultural context of each pattern — which songs accompany the warping of the loom, which prayers are woven into a namazlyk, which motifs bring blessings to a new bride.",
    tk: "Usta-şägirt ulgamy Türkmenistanda senetçilik biliminiň däp bolan usulydyr. Şägirtler ýyllarboýy ussanyň ýanynda bolup, diňe tehniki başarnyklary däl, her nagyşyň medeni mazmunyny hem öwrenýärler — stanogy gurmakda aýdylýan aýdymlar, namazlyga dokalýan doga görnüşleri, ýaş gelne ak pata berýän nyşanlar.",
    ru: "Система уста-шагирт (мастер-ученик) является традиционным способом ремесленного обучения в Туркменистане. Ученики годами работают рядом с мастером, осваивая не только технику, но и культурный смысл каждого узора: какие песни сопровождают подготовку станка, какие молитвы вплетаются в намазлык, какие мотивы считаются благословением для невесты.",
  },
  "artisans.apprenticeship_p2": {
    en: "Today, Türkmenhaly workshops across all five provinces continue this tradition. Young women and men learn fiber preparation, natural dyeing, loom construction, and the symbolic language of Turkmen ornament. The program combines hands-on workshop training with formal education in textile history and conservation.",
    tk: "Häzirki wagtda Türkmenhalynyň bäş welaýatdaky ussahanalary bu däbi dowam etdirýär. Ýaş gyzlar we oglanlar süýüm taýýarlamagy, tebigy boýamagy, stanok gurmagy we türkmen nagyşlarynyň nyşanlaýyn dilini öwrenýärler. Maksatnama amaly ussahana taýýarlygyny dokma taryhy we konserwasiýa boýunça nazary bilim bilen birleşdirýär.",
    ru: "Сегодня мастерские Türkmenhaly во всех пяти велаятах продолжают эту традицию. Девушки и юноши изучают подготовку волокна, натуральное окрашивание, устройство станка и символический язык туркменского орнамента. Программа сочетает практическое обучение в мастерской с формальным изучением истории текстиля и его сохранения.",
  },
  "artisans.innovation_title": {
    en: "Modern Textile Technology",
    tk: "Häzirki Zaman Dokma Tehnologiýasy",
    ru: "Современные Текстильные Технологии",
  },
  "artisans.innovation_p1": {
    en: "Turkmenistan's modern textile complexes blend tradition with cutting-edge technology. Factories like Türkmenbaşy Dokma Toplumy use automated spinning and jacquard looms alongside quality-control labs, producing fabrics that meet international export standards while incorporating traditional Turkmen patterns.",
    tk: "Türkmenistanyň häzirki zaman dokma toplumlary däp bilen täze tehnologiýany birleşdirýär. Türkmenbaşy Dokma Toplumy ýaly kärhanalar awtomat egriji we jakard stanoklaryny hil gözegçilik barlaghanalary bilen bilelikde ulanyp, halkara standartlara laýyk we şol bir wagtda türkmen milli nagyşlaryny özünde saklaýan matalary öndürýär.",
    ru: "Современные текстильные комплексы Туркменистана объединяют традицию и передовые технологии. Предприятия вроде Türkmenbaşy Dokma Toplumy используют автоматизированное прядение и жаккардовые станки вместе с лабораториями контроля качества, выпуская ткани, соответствующие международным экспортным стандартам и сохраняющие традиционный туркменский орнамент.",
  },
  "artisans.innovation_p2": {
    en: "Balkandokma's yarn production facility in Gyzylarbat employs Italian spinning technology, producing high-quality cotton yarn for both domestic use and export. This fusion of Turkmen raw materials with modern processing creates products that compete on the global market.",
    tk: "Gyzylarbatdaky Balkandokma kärhanasynyň ýüplük önümçilik bölümi italýan egriji tehnologiýasyny ulanýar we içerki bazar hem eksport üçin ýokary hilli pagta ýüplügini öndürýär. Türkmen çig maly bilen häzirki zaman gaýtadan işlemegiň utgaşmasy dünýä bazarynda bäsdeşlige ukyply önümleri döredýär.",
    ru: "Прядильное производство Balkandokma в Гызыларбате использует итальянские технологии и выпускает высококачественную хлопковую пряжу как для внутреннего рынка, так и на экспорт. Сочетание туркменского сырья и современной переработки позволяет создавать продукцию, конкурентоспособную на мировом рынке.",
  },
  "artisans.community_weaving_title": {
    en: "Regional Craft Centers",
    tk: "Sebitleýin Senet Merkezleri",
    ru: "Региональные Ремесленные Центры",
  },
  "artisans.community_weaving_p1": {
    en: "Carpet weaving centers operate in every province of Turkmenistan: from the Tekke heartland in Ahal and Mary to the Yomut workshops of Balkan and Daşoguz and the Ersari studios of Lebap. Each region produces carpets with distinctive characteristics shaped by tribal heritage and local materials.",
    tk: "Türkmenistanyň ähli welaýatlarynda halyçylyk merkezleri işleýär: Ahal we Marydaky Tekke ojaklaryndan başlap Balkan we Daşoguzdaky Ýomut ussahanalaryna hem-de Lebapdaky Ärsary merkezlerine çenli. Her sebit ýerli çig mal we taýpa mirasy esasynda tapawutly aýratynlyklara eýe halylary öndürýär.",
    ru: "Центры ковроткачества работают во всех велаятах Туркменистана: от теккинских центров Ахала и Мары до йомутских мастерских Балкана и Дашогуза и эрсаринских студий Лебапа. Каждый регион создаёт ковры со своими отличительными чертами, сформированными племенным наследием и местными материалами.",
  },
  "artisans.community_weaving_p2": {
    en: "The Mary Keteni Ussahanasy (Mary Keteni Workshop) preserves the silk-weaving tradition of the Murgab valley, producing keteni fabric for bridal dresses and national celebrations. Visitors can observe the full process — from silk cocoon reeling to loom weaving — by appointment.",
    tk: "Mary Keteni Ussahanasy Murgap jülgesiniň ýüpek dokma däbini gorap, gelin geýimleri we milli baýramçylyklar üçin keteni matalary öndürýär. Myhmanlar öňünden ýazylmak arkaly ýüpek gurçugyndan başlap stanokda dokalyşa çenli doly prosesi görüp bilerler.",
    ru: "Mary Keteni Ussahanasy сохраняет традицию шелкоткачества долины Мургаба и производит ткань кетени для свадебных нарядов и национальных праздников. По предварительной записи посетители могут увидеть весь процесс — от размотки коконов до ткачества на станке.",
  },

  // ─── Collections Page ───────────────────
  "collections.hero_title": {
    en: "Turkmen Textile Collections",
    tk: "Türkmen Dokma Kolleksiýalary",
    ru: "Коллекции Туркменского Текстиля",
  },
  "collections.hero_desc": {
    en: "From the iconic Tekke carpets to luminous keteni silk and modern industrial textiles — explore the full range of Turkmenistan's textile heritage and industry.",
    tk: "Nyşanlaýyn Tekke halylaryndan başlap lowurdap duran keteni ýüpegine we häzirki zaman senagat dokma önümlerine çenli Türkmenistanyň dokma mirasynyň we senagatynyň doly dünýäsini öwreniň.",
    ru: "От знаковых ковров теке до сияющего кетени и современного промышленного текстиля — изучите полный спектр текстильного наследия и индустрии Туркменистана.",
  },
  "collections.tekke_title": {
    en: "Tekke Carpets",
    tk: "Tekke Halylary",
    ru: "Ковры Теке",
  },
  "collections.tekke_p1": {
    en: "Tekke carpets are the most internationally recognized of all Turkmen carpet types. Woven primarily by the Tekke tribe in the Ahal and Mary provinces, they feature rows of octagonal göl medallions on a rich crimson field. The deep red color comes from madder root, a natural dye cultivated in the region for centuries.",
    tk: "Tekke halylary türkmen haly görnüşleriniň arasynda halkara derejesinde iň meşhurydyr. Olar esasan Ahal we Maryda Tekke taýpasy tarapyndan dokalyp, goýy gyrmyzy meýdanda sekizburç göl medalyonlarynyň hatarlary bilen tapawutlanýar. Çuň gyzyl reňk sebitde asyrlarboýy ösdürilip gelinýän marena kökünden alynýar.",
    ru: "Ковры теке — наиболее узнаваемый в мире тип туркменских ковров. Их в основном ткут представители племени теке в Ахале и Марыйском велаяте; для них характерны ряды восьмиугольных медальонов göl на насыщенном багряном фоне. Глубокий красный цвет получают из корня марены — натурального красителя, выращиваемого в регионе веками.",
  },
  "collections.tekke_p2": {
    en: "The Tekke göl has become so iconic that it appears on the national flag of Turkmenistan. Knot densities typically range from 120,000 to 300,000 knots per square meter, with the finest pieces taking months or even years to complete. Traditional sizes include the main carpet (haly), runner (ýolly), prayer rug (namazlyk), and storage bags (torba, çuwal).",
    tk: "Tekke göl şeýle meşhur nagyşa öwrüldi welin, ol Türkmenistanyň döwlet baýdagynda hem ýerleşdirildi. Düwün dykyzlygy adatça bir inedördül metrde 120,000-den 300,000-e çenli bolýar, iň nepis nusgalary bolsa birnäçe aýdan birnäçe ýyla çenli wagtda taýýarlanýar. Däp bolan görnüşlere esasy haly (haly), ýollyk (ýolly), namazlyk we torba-çuwal ýaly saklaýyş haltalary girýär.",
    ru: "Узор Tekke göl стал настолько знаковым, что изображён на государственном флаге Туркменистана. Плотность узлов обычно составляет от 120 000 до 300 000 на квадратный метр, а создание лучших образцов занимает месяцы и даже годы. Традиционные форматы включают главный ковёр (haly), дорожку (ýolly), молитвенный коврик (namazlyk) и сумки для хранения (torba, çuwal).",
  },
  "collections.yomut_title": {
    en: "Yomut Carpets & Kilims",
    tk: "Ýomut Halylary we Kilimleri",
    ru: "Ковры И Килимы Йомут",
  },
  "collections.yomut_p1": {
    en: "The Yomut tribe, historically based along the Caspian coast and in Daşoguz province, produce carpets distinguished by their kepse göl — a diamond-shaped medallion quite different from the Tekke octagon. Yomut carpets tend to use a broader color palette, including deep blues, greens, and ivory alongside the traditional red.",
    tk: "Taryhy taýdan Hazar kenarynda we Daşoguz welaýatynda ýaşan Ýomut taýpasy Tekke sekizburç nagşyndan düýpgöter tapawutlanýan kepse göl — romb görnüşli medalyon bilen tanalýan halylary öndürýär. Ýomut halylarynda adaty gyzyl bilen birlikde goýy gök, ýaşyl we ak-sary öwüşginler hem giň ulanylýar.",
    ru: "Племя йомут, исторически проживавшее на побережье Каспия и в Дашогузском велаяте, производит ковры с характерным kepse göl — ромбовидным медальоном, заметно отличающимся от теккинского восьмиугольника. Для ковров йомут типична более широкая палитра: помимо традиционного красного используются глубокие синие, зелёные и светлые оттенки.",
  },
  "collections.yomut_p2": {
    en: "Yomut weavers are also renowned for their flatweave kilims and palas, lightweight textiles that were essential for nomadic life. These pieces feature bold geometric patterns representing natural elements — migrating birds, flowing water, and the undulating Karakum dunes.",
    tk: "Ýomut dokmaçylary göwnejaý ýeňil tekiz dokma kilimleri we palaslary bilen hem tanalýar; bu önümler çarwa durmuşynda möhüm bolupdyr. Bu eserlerde göçýän guşlar, akýan suwlar we Garagumyň tolkunly gum depeleri ýaly tebigy nyşanlary beýan edýän batyrgaý geometrik nagyşlar bar.",
    ru: "Йомутские ткачи также известны плоскими килимами и паласами — лёгкими изделиями, необходимыми в кочевой жизни. Для этих работ характерны выразительные геометрические мотивы, отражающие природные образы: перелётных птиц, текущую воду и волнистые дюны Каракумов.",
  },
  "collections.keteni_title": {
    en: "Keteni Silk",
    tk: "Keteni Ýüpegi",
    ru: "Шёлк Кетени",
  },
  "collections.keteni_p1": {
    en: "Keteni is a traditional Turkmen silk fabric with an extraordinary luminous sheen, produced primarily in the Mary province. The fabric is woven from locally reeled mulberry silk using a satin-weave technique that creates long thread floats on the surface, giving keteni its characteristic play of light.",
    tk: "Keteni esasan Mary welaýatynda öndürilýän we ajaýyp lowurdysy bilen tapawutlanýan däp bolan türkmen ýüpek matasydyr. Mata ýerli tut ýüpeginden atlas dokalyş usuly bilen dokalýar; bu usul sapaklaryň ýüzde uzyn ýerleşmegine ýol açyp, ketenä özboluşly ýagty oýny berýär.",
    ru: "Кетени — традиционная туркменская шёлковая ткань с выраженным сиянием, в основном производимая в Марыйском велаяте. Её ткут из местного тутового шёлка атласным переплетением, при котором на поверхности образуются длинные перекрытия нитей, создающие характерную игру света.",
  },
  "collections.keteni_p2": {
    en: "Red keteni (gyrmyzy keteni) is the most prized variety, traditionally worn by brides during wedding celebrations. Green, white, and yellow variants are used for national holidays and ceremonial occasions. The 2022 UNESCO inscription of Turkmen sericulture recognized the entire chain — from mulberry cultivation and silkworm rearing to reeling, dyeing, and weaving.",
    tk: "Gyrmyzy keteni iň gymmatly görnüş bolup, däp boýunça toý dabaralarynda gelinler tarapyndan geýilýär. Ýaşyl, ak we sary görnüşleri milli baýramçylyklar we dabara günleri üçin ulanylýar. UNESCO-nyň 2022-nji ýyldaky ykrary tut agaçlaryny ösdürmekden, ýüpek gurçugyny ýetişdirmekden başlap egriji, boýag we dokalyş tapgyrlarynyň hemmesini öz içine aldy.",
    ru: "Красный кетени (gyrmyzy keteni) считается самым ценным и традиционно используется в свадебной одежде невест. Зелёные, белые и жёлтые варианты носят на национальных праздниках и церемониях. Включение туркменского шелководства в список ЮНЕСКО в 2022 году охватило всю цепочку — от выращивания шелковицы и разведения шелкопряда до размотки, окрашивания и ткачества.",
  },
  "collections.industrial_title": {
    en: "Industrial Textiles",
    tk: "Senagat Dokma Önümleri",
    ru: "Промышленный Текстиль",
  },
  "collections.industrial_p1": {
    en: "Turkmenistan's modern textile industry processes the country's abundant cotton harvest into a wide range of products. Major complexes produce cotton yarn, woven and knitted fabrics, denim, towels, bedding, and ready-to-wear clothing. The Türkmenbaşy Jins Toplumy specializes in denim, offering jeans, jackets, and skirts for domestic and international markets.",
    tk: "Türkmenistanyň häzirki zaman dokma senagaty ýurduň bol pagta hasylyny dürli görnüşli önümlere öwürýär. Iri toplumlar pagta ýüplügini, dokma we trikotaž matalary, denim, polotensa, düşek toplumlaryny hem-de taýýar geýimleri öndürýär. Türkmenbaşy Jins Toplumy denim boýunça ýöriteleşip, içerki we halkara bazar üçin jins, kurtka we yubka hödürleýär.",
    ru: "Современная текстильная промышленность Туркменистана перерабатывает богатый урожай хлопка в широкий спектр продукции. Крупные комплексы выпускают хлопковую пряжу, тканые и трикотажные ткани, деним, полотенца, постельные наборы и готовую одежду. Türkmenbaşy Jins Toplumy специализируется на дениме, предлагая джинсы, куртки и юбки для внутреннего и международного рынков.",
  },
  "collections.industrial_p2": {
    en: "Cotton yarn producers — Ruhabat, Babadaýhan, Kaka, Daşoguz Serdar, Halaç, and Balkandokma — supply both domestic factories and export markets. Türkmen Jorap Dokma in Ashgabat produces hosiery and socks with both modern and traditional Turkmen patterns.",
    tk: "Ruhabat, Babadaýhan, Kaka, Daşoguz Serdar, Halaç we Balkandokma ýaly pagta ýüplük öndürijiler içerki kärhanalary hem-de eksport bazarlaryny üpjün edýär. Aşgabatdaky Türkmen Jorap Dokma häzirki zaman we milli türkmen nagyşlaryny birleşdirýän jorap önümlerini öndürýär.",
    ru: "Производители хлопковой пряжи — Ruhabat, Babadaýhan, Kaka, Daşoguz Serdar, Halaç и Balkandokma — снабжают как внутренние предприятия, так и экспортные рынки. Türkmen Jorap Dokma в Ашхабаде выпускает чулочно-носочные изделия с современными и традиционными туркменскими орнаментами.",
  },
  "collections.home_title": {
    en: "Home Textiles",
    tk: "Öý Dokma Önümleri",
    ru: "Домашний Текстиль",
  },
  "collections.home_p1": {
    en: "From plush towel sets and cotton bedding to embroidered tablecloths and decorative pillow covers, Turkmen home textiles combine practicality with traditional design sensibility. Many products feature subtle incorporations of national ornament patterns, bringing cultural heritage into everyday domestic life.",
    tk: "Ýumşak polotensa toplumlaryndan we pagta düşeklerinden başlap keşdeli saçaklara we bezegli ýassyk gaplaryna çenli türkmen öý dokma önümleri amatlylygy adaty dizaýn bilen utgaşdyrýar. Köp önümlerde milli nagyşlar inçe görnüşde ulanylyp, medeni miras gündelik öý durmuşyna girizilýär.",
    ru: "От мягких наборов полотенец и хлопкового постельного белья до вышитых скатертей и декоративных наволочек — туркменский домашний текстиль сочетает практичность с традиционной эстетикой. Во многих изделиях деликатно используются национальные орнаменты, перенося культурное наследие в повседневный быт.",
  },

  // ─── Contact Page ───────────────────────
  "contact.hero_title": {
    en: "Contact Us",
    tk: "Biz Bilen Habarlaşyň",
    ru: "Свяжитесь С Нами",
  },
  "contact.hero_desc": {
    en: "Visit our showroom in Ashgabat, schedule a consultation, or inquire about products and collections. We are happy to help.",
    tk: "Aşgabatdaky şourumymyza geliň, maslahatlaşyk belläň ýa-da harytlar we kolleksiýalar boýunça sorag beriň. Size kömek etmekden hoşal bolarys.",
    ru: "Посетите наш шоурум в Ашхабаде, запишитесь на консультацию или задайте вопросы о товарах и коллекциях. Мы с радостью поможем.",
  },
  "contact.title": {
    en: "Contact Us",
    tk: "Biz Bilen Habarlaşyň",
    ru: "Связаться С Нами",
  },
  "contact.subtitle": {
    en: "Have a question? We'd love to hear from you.",
    tk: "Soragyňyz barmy? Sizden eşitmekden hoşal bolarys.",
    ru: "Есть вопрос? Мы будем рады вас услышать.",
  },
  "contact.showroom_title": {
    en: "Showroom & Hours",
    tk: "Şourum we Iş Wagtlary",
    ru: "Шоурум И Часы Работы",
  },
  "contact.address_label": {
    en: "Address:",
    tk: "Salgysy:",
    ru: "Адрес:",
  },
  "contact.open_label": {
    en: "Open:",
    tk: "Açyk:",
    ru: "Открыто:",
  },
  "contact.open_hours": {
    en: "Monday – Saturday, 09:00 – 18:00",
    tk: "Duşenbe – Şenbe, 09:00 – 18:00",
    ru: "Понедельник – Суббота, 09:00 – 18:00",
  },
  "contact.closed_label": {
    en: "Closed:",
    tk: "Ýapyk:",
    ru: "Закрыто:",
  },
  "contact.closed_days": {
    en: "Sundays & national holidays",
    tk: "Ýekşenbe we milli baýramlar",
    ru: "Воскресенье и национальные праздники",
  },
  "contact.phone_label": {
    en: "Phone:",
    tk: "Telefon:",
    ru: "Телефон:",
  },
  "contact.email_label": {
    en: "Email:",
    tk: "E-poçta:",
    ru: "Эл. почта:",
  },
  "contact.international_title": {
    en: "International Clients",
    tk: "Halkara Müşderiler",
    ru: "Международные Клиенты",
  },
  "contact.international_desc": {
    en: "We offer consultations for collectors, designers, and businesses worldwide. Product samples can be shipped internationally with certification of origin and detailed specifications.",
    tk: "Bütin dünýä boýunça kolleksionerler, dizaýnerler we kompaniýalar üçin maslahat hyzmatyny hödürleýäris. Haryt nusgalary gelip çykyş şahadatnamasy we jikme-jik spesifikasiýalar bilen halkara iberilip bilner.",
    ru: "Мы предоставляем консультации коллекционерам, дизайнерам и компаниям по всему миру. Образцы продукции могут быть отправлены за рубеж с сертификатом происхождения и подробными спецификациями.",
  },
  "contact.wholesale_title": {
    en: "Wholesale & Export",
    tk: "Lomaý Söwda we Eksport",
    ru: "Опт И Экспорт",
  },
  "contact.wholesale_desc": {
    en: "For bulk orders of cotton yarn, fabrics, denim products, or handmade carpets, contact our export department. We work with distributors and retailers across Central Asia, Europe, and beyond.",
    tk: "Pagta ýüplügi, mata, denim önümleri ýa-da elde dokalan halylar boýunça köp mukdardaky sargytlar üçin eksport bölümimiz bilen habarlaşyň. Biz Merkezi Aziýa, Ýewropa we başga sebitlerdäki distribýutorlar hem satyjylar bilen işleýäris.",
    ru: "Для оптовых заказов хлопковой пряжи, тканей, изделий из денима или ручных ковров свяжитесь с нашим экспортным отделом. Мы работаем с дистрибьюторами и розничными сетями в Центральной Азии, Европе и других регионах.",
  },
  "contact.arrange_title": {
    en: "Send a Message",
    tk: "Habar Iberiň",
    ru: "Отправить Сообщение",
  },
  "contact.thank_you": {
    en: "Thank you!",
    tk: "Sag Boluň!",
    ru: "Спасибо!",
  },
  "contact.thank_you_msg": {
    en: "Your message has been received. We'll be in touch soon.",
    tk: "Habaryňyz kabul edildi. Tiz wagtda siz bilen habarlaşarys.",
    ru: "Ваше сообщение получено. Мы скоро свяжемся с вами.",
  },
  "contact.name_label": {
    en: "Full Name",
    tk: "Doly Ady",
    ru: "Полное Имя",
  },
  "contact.name_placeholder": {
    en: "Your name",
    tk: "Adyňyz",
    ru: "Ваше имя",
  },
  "contact.email_field_label": {
    en: "Email Address",
    tk: "E-poçta Salgysy",
    ru: "Адрес Электронной Почты",
  },
  "contact.interest_label": {
    en: "Primary Interest",
    tk: "Esasy Gyzyklanma",
    ru: "Основной Интерес",
  },
  "contact.select_option": {
    en: "Select an option",
    tk: "Bir wariant saýlaň",
    ru: "Выберите вариант",
  },
  "contact.option_collection": {
    en: "Product Inquiry",
    tk: "Haryt Boýunça Sorag",
    ru: "Запрос По Продукции",
  },
  "contact.option_design": {
    en: "Wholesale / Export",
    tk: "Lomaý / Eksport",
    ru: "Опт / Экспорт",
  },
  "contact.option_museum": {
    en: "Carpet Collection",
    tk: "Haly Kolleksiýasy",
    ru: "Коллекция Ковров",
  },
  "contact.option_education": {
    en: "Educational Visit",
    tk: "Okuw Sapary",
    ru: "Образовательный Визит",
  },
  "contact.option_press": {
    en: "Press & Media",
    tk: "Metbugat we Media",
    ru: "Пресса И Медиа",
  },
  "contact.message_label": {
    en: "Message",
    tk: "Habar",
    ru: "Сообщение",
  },
  "contact.message_placeholder": {
    en: "Tell us about your inquiry",
    tk: "Soragyňyzy gysgaça ýazyň",
    ru: "Расскажите о вашем запросе",
  },
  "contact.submit": {
    en: "Submit Request",
    tk: "Ýüz Tutmany Iber",
    ru: "Отправить Запрос",
  },

  // ─── Footer ─────────────────────────────
  "footer.brand_desc": {
    en: "Authentic Turkmen textiles — carpets, silk, cotton, and denim from leading manufacturers.",
    tk: "Nusgalyk türkmen dokma önümleri — öňdebaryjy öndürijilerden haly, ýüpek, pagta we denim.",
    ru: "Подлинный туркменский текстиль — ковры, шёлк, хлопок и деним от ведущих производителей.",
  },
  "footer.quick_links": {
    en: "Quick Links",
    tk: "Çalt Baglanyşyklar",
    ru: "Быстрые Ссылки",
  },
  "footer.categories": {
    en: "Categories",
    tk: "Kategoriýalar",
    ru: "Категории",
  },
  "footer.rights": {
    en: "All rights reserved.",
    tk: "Ähli hukuklar goralan.",
    ru: "Все права защищены.",
  },
  "footer.shop_heading": {
    en: "Shop",
    tk: "Dükan",
    ru: "Магазин",
  },
  "footer.all_products": {
    en: "All Products",
    tk: "Ähli Harytlar",
    ru: "Все Товары",
  },
  "footer.visit_heading": {
    en: "Visit",
    tk: "Baryň",
    ru: "Посетите",
  },
  "footer.connect_heading": {
    en: "Connect",
    tk: "Aragatnaşyk",
    ru: "Связь",
  },
  "footer.open_schedule": {
    en: "Open Monday – Saturday",
    tk: "Duşenbe – Şenbe Açyk",
    ru: "Открыто: Пн – Сб",
  },
  "footer.celebrating": {
    en: "Celebrating",
    tk: "Dabaralaýarys",
    ru: "Отмечаем",
  },
  "footer.years_text": {
    en: "years of textile excellence",
    tk: "dokma ussatlygynyň ýyllary",
    ru: "лет текстильного мастерства",
  },

  // ─── Header ─────────────────────────────
  "header.top_banner": {
    en: "Authentic Turkmen textiles from the heart of Central Asia",
    tk: "Türkmen topragynyň ýüreginden dokalan nusgalyk ýörelgeler",
    ru: "Подлинный туркменский текстиль из самого сердца Центральной Азии",
  },

  // ─── Artisans (existing) ────────────────
  "artisans.title": {
    en: "Our Artisan Partners",
    tk: "Biziň Ussat Hyzmatdaşlarymyz",
    ru: "Наши Мастера-Партнёры",
  },
  "artisans.subtitle": {
    en: "Meet the cooperatives and workshops preserving Turkmen textile traditions.",
    tk: "Türkmen matasynyň däp-dessurlaryny gorap saklaýan kooperatiwler we ussahanalar bilen tanyşyň.",
    ru: "Познакомьтесь с кооперативами и мастерскими, сохраняющими туркменские текстильные традиции.",
  },

  // ─── Heritage (existing) ────────────────
  "heritage.title": {
    en: "Turkmen Heritage",
    tk: "Türkmen Mirasy",
    ru: "Туркменское Наследие",
  },
  "heritage.subtitle": {
    en: "A journey through the symbols, patterns and stories woven into every thread.",
    tk: "Her bir sapyga dokalan nyşanlar, nagyşlar we rowaýatlar arkaly syýahat.",
    ru: "Путешествие сквозь символы, узоры и истории, вплетённые в каждую нить.",
  },

  // ─── Store Detail Page ─────────────────
  "store.contact_artisan": {
    en: "Contact Manufacturer",
    tk: "Öndüriji Bilen Habarlaşyň",
    ru: "Связаться С Производителем",
  },
  "store.products_available": {
    en: "Products Available",
    tk: "Haryt Bar",
    ru: "Товаров В Наличии",
  },
  "store.breadcrumb_home": {
    en: "Home",
    tk: "Baş Sahypa",
    ru: "Главная",
  },
  "store.breadcrumb_shop": {
    en: "Shop",
    tk: "Dükan",
    ru: "Магазин",
  },
  "store.breadcrumb_manufacturers": {
    en: "Manufacturers",
    tk: "Öndürijiler",
    ru: "Производители",
  },
  "store.collection_from": {
    en: "Collection from",
    tk: "Kolleksiýa:",
    ru: "Коллекция от",
  },
  "store.add_to_cart": {
    en: "Add to Cart",
    tk: "Araba Goş",
    ru: "В Корзину",
  },
  "store.compare": {
    en: "Compare",
    tk: "Deňeşdir",
    ru: "Сравнить",
  },
  "store.no_products": {
    en: "No products currently listed",
    tk: "Häzirki wagtda haryt ýok",
    ru: "Товары пока не добавлены",
  },
  "store.check_back": {
    en: "This manufacturer is preparing new products. Check back soon.",
    tk: "Bu öndüriji täze harytlary taýýarlaýar. Soňrak gelip görüň.",
    ru: "Производитель готовит новые товары. Загляните позже.",
  },

  // ─── Companies Page ───────────────────
  "companies.hero_title": {
    en: "Turkmen Textile Enterprises",
    tk: "Türkmenistanyň Dokma Kärhanalary",
    ru: "Текстильные Предприятия Туркменистана",
  },
  "companies.hero_desc": {
    en: "A comprehensive directory of textile manufacturers, carpet workshops, and production facilities across all regions of Turkmenistan.",
    tk: "Türkmenistanyň ähli sebitlerindäki dokma öndürijileriň, haly ussahanalarynyň we önümçilik kärhanalarynyň doly sanawy.",
    ru: "Полный справочник текстильных производителей, ковровых мастерских и производственных предприятий во всех регионах Туркменистана.",
  },
  "companies.region": {
    en: "Region",
    tk: "Sebit",
    ru: "Регион",
  },
  "companies.products_label": {
    en: "Products",
    tk: "Önümler",
    ru: "Продукция",
  },
  "companies.brand_label": {
    en: "Brand",
    tk: "Brend",
    ru: "Бренд",
  },
  "companies.capacity_label": {
    en: "Capacity",
    tk: "Kuwwatlylyk",
    ru: "Мощность",
  },
  "companies.total_count": {
    en: "enterprises listed",
    tk: "kärhana sanawda",
    ru: "предприятий в каталоге",
  },
  "companies.ahal": {
    en: "Ahal Province & Ashgabat",
    tk: "Ahal Welaýaty we Aşgabat",
    ru: "Ахалский Велаят И Ашхабад",
  },
  "companies.mary": {
    en: "Mary Province",
    tk: "Mary Welaýaty",
    ru: "Марыйский Велаят",
  },
  "companies.lebap": {
    en: "Lebap Province",
    tk: "Lebap Welaýaty",
    ru: "Лебапский Велаят",
  },
  "companies.dashoguz": {
    en: "Daşoguz Province",
    tk: "Daşoguz Welaýaty",
    ru: "Дашогузский Велаят",
  },
  "companies.balkan": {
    en: "Balkan Province",
    tk: "Balkan Welaýaty",
    ru: "Балканский Велаят",
  },
  "companies.state_assoc": {
    en: "National Associations",
    tk: "Milli Birleşikler",
    ru: "Национальные Объединения",
  },

  // ─── Header location ─────────────────
  "header.location": {
    en: "Ashgabat, Turkmenistan",
    tk: "Aşgabat, Türkmenistan",
    ru: "Ашхабад, Туркменистан",
  },

  // ─── Admin ──────────────────────────────
  "admin.title": {
    en: "Admin Panel",
    tk: "Dolandyryjy Paneli",
    ru: "Панель Администратора",
  },
  "admin.login": {
    en: "Admin Login",
    tk: "Dolandyryjy Girişi",
    ru: "Вход Администратора",
  },

  // ─── Units ─────────────────────────────
  "unit.piece": {
    en: "piece",
    tk: "bölek",
    ru: "шт.",
  },
  "unit.m²": {
    en: "m²",
    tk: "m²",
    ru: "м²",
  },
  "unit.panel": {
    en: "panel",
    tk: "panel",
    ru: "панель",
  },
  "unit.metr": {
    en: "meter",
    tk: "metr",
    ru: "метр",
  },
  "unit.bukja": {
    en: "bundle",
    tk: "bukja",
    ru: "связка",
  },

  // ─── Badges ───────────────────────────────
  "badge.Täze": {
    en: "New",
    tk: "Täze",
    ru: "Новинка",
  },
  "badge.Iň köp satylýan": {
    en: "Bestseller",
    tk: "Iň köp satylýan",
    ru: "Бестселлер",
  },
  "badge.Klassik": {
    en: "Classic",
    tk: "Klassik",
    ru: "Классика",
  },
  "badge.Miras": {
    en: "Heritage",
    tk: "Miras",
    ru: "Наследие",
  },
  "badge.Ýokary hil": {
    en: "Premium",
    tk: "Ýokary hil",
    ru: "Премиум",
  },
  "badge.Eksport": {
    en: "Export",
    tk: "Eksport",
    ru: "Экспорт",
  },
  "badge.Meşhur": {
    en: "Popular",
    tk: "Meşhur",
    ru: "Популярный",
  },
  "badge.Sport": {
    en: "Sport",
    tk: "Sport",
    ru: "Спорт",
  },
  "badge.Rahat": {
    en: "Comfort",
    tk: "Rahat",
    ru: "Комфорт",
  },

  // ─── Common ─────────────────────────────
  "common.language": {
    en: "Language",
    tk: "Dil",
    ru: "Язык",
  },
  "common.search": {
    en: "Search",
    tk: "Gözle",
    ru: "Поиск",
  },
  "common.loading": {
    en: "Loading...",
    tk: "Ýüklenýär...",
    ru: "Загрузка...",
  },
  "common.view_all": {
    en: "View All",
    tk: "Hemmesini Gör",
    ru: "Смотреть Все",
  },
};

/**
 * Get a translation string for the given key and locale.
 */
export function t(key: string, locale: Locale = DEFAULT_LOCALE): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[locale] || entry.en || key;
}

/**
 * Get the current locale from a cookie value string.
 */
export function getLocaleFromCookie(cookieValue?: string): Locale {
  if (cookieValue && cookieValue in LOCALE_LABELS) {
    return cookieValue as Locale;
  }
  return DEFAULT_LOCALE;
}
