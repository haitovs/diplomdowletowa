/**
 * i18n dictionary for Heritage Textiles (Dowletowa v2)
 * Supports: English (en), Turkish (tk), Russian (ru)
 */

export type Locale = "en" | "tk" | "ru";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "🇬🇧 English",
  tk: "🇹🇲 Türkmen",
  ru: "🇷🇺 Русский",
};

export const DEFAULT_LOCALE: Locale = "en";

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
    tk: "Miras Tekstil Türkmenistanyň ussatlarynyň ýaşaýan mirasyny belleýär. Çölüň ruhyny özünde jemleýän halylary, ýüpekleri we sungaty açyň.",
    ru: "Heritage Textiles прославляет живое наследие туркменских мастеров-ткачей. Откройте для себя ковры, шёлк и искусство, воплощающие дух пустыни.",
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
  "home.latest": {
    en: "Latest Arrivals",
    tk: "Iň Soňky Gelenler",
    ru: "Новые Поступления",
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

  // ─── Shop Page ──────────────────────────
  "shop.title": {
    en: "All Products",
    tk: "Ähli Harytlar",
    ru: "Все Товары",
  },
  "shop.filter_category": {
    en: "Filter by Category",
    tk: "Kategoriýa boýunça süzgüç",
    ru: "Фильтр по категории",
  },
  "shop.filter_store": {
    en: "Filter by Store",
    tk: "Dükan boýunça süzgüç",
    ru: "Фильтр по магазину",
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

  // ─── Footer ─────────────────────────────
  "footer.brand_desc": {
    en: "Authentic Turkmen textiles, crafted by hand since 1924.",
    tk: "1924-nji ýyldan bäri el bilen ýasalan hakyky türkmen matasy.",
    ru: "Подлинные туркменские ткани ручной работы с 1924 года.",
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

  // ─── Artisans ───────────────────────────
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

  // ─── Heritage ───────────────────────────
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

  // ─── Contact ────────────────────────────
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
