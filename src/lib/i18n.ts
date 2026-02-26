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
    tk: "Heritage Textiles celebrates the living heritage of Turkmenistan's master weavers. Discover carpets, silks, and art that embody the spirit of the desert.",
    ru: "Heritage Textiles celebrates the living heritage of Turkmenistan's master weavers. Discover carpets, silks, and art that embody the spirit of the desert.",
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
    tk: "Hand-selected for their exceptional craftsmanship and rarity. These pieces represent the pinnacle of Turkmen textile art.",
    ru: "Hand-selected for their exceptional craftsmanship and rarity. These pieces represent the pinnacle of Turkmen textile art.",
  },
  "home.latest": {
    en: "Latest Arrivals",
    tk: "Iň Soňky Gelenler",
    ru: "Новые Поступления",
  },
  "home.latest_subtitle": {
    en: "Fresh from the looms and workshops of Turkmenistan.",
    tk: "Fresh from the looms and workshops of Turkmenistan.",
    ru: "Fresh from the looms and workshops of Turkmenistan.",
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
    tk: "Authentic Origins",
    ru: "Authentic Origins",
  },
  "home.highlight_origins_desc": {
    en: "Each textile originates from regions renowned for their unique göl patterns and centuries-old knotting traditions.",
    tk: "Each textile originates from regions renowned for their unique göl patterns and centuries-old knotting traditions.",
    ru: "Each textile originates from regions renowned for their unique göl patterns and centuries-old knotting traditions.",
  },
  "home.highlight_fibers_title": {
    en: "Natural Fibers",
    tk: "Natural Fibers",
    ru: "Natural Fibers",
  },
  "home.highlight_fibers_desc": {
    en: "Turkmen cotton, hand-spun wool, camelhair, and mulberry silk — natural materials dyed with traditional pigments.",
    tk: "Turkmen cotton, hand-spun wool, camelhair, and mulberry silk — natural materials dyed with traditional pigments.",
    ru: "Turkmen cotton, hand-spun wool, camelhair, and mulberry silk — natural materials dyed with traditional pigments.",
  },
  "home.highlight_heritage_title": {
    en: "Living Heritage",
    tk: "Living Heritage",
    ru: "Living Heritage",
  },
  "home.highlight_heritage_desc": {
    en: "UNESCO-recognized carpet weaving (2019) and sericulture (2022) traditions preserved by master artisans across Turkmenistan.",
    tk: "UNESCO-recognized carpet weaving (2019) and sericulture (2022) traditions preserved by master artisans across Turkmenistan.",
    ru: "UNESCO-recognized carpet weaving (2019) and sericulture (2022) traditions preserved by master artisans across Turkmenistan.",
  },

  // ─── Shop Page ──────────────────────────
  "shop.title": {
    en: "Shop Turkmen Textiles",
    tk: "Türkmen Dokma Önümleri",
    ru: "Туркменский Текстиль",
  },
  "shop.subtitle": {
    en: "Browse carpets, silk, denim, cotton products and more from leading Turkmen manufacturers",
    tk: "Browse carpets, silk, denim, cotton products and more from leading Turkmen manufacturers",
    ru: "Browse carpets, silk, denim, cotton products and more from leading Turkmen manufacturers",
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
    tk: "All Categories",
    ru: "All Categories",
  },
  "shop.all_stores": {
    en: "All Manufacturers",
    tk: "All Manufacturers",
    ru: "All Manufacturers",
  },
  "shop.sort_featured": {
    en: "Featured",
    tk: "Featured",
    ru: "Featured",
  },
  "shop.sort_price_asc": {
    en: "Price: Low to High",
    tk: "Price: Low to High",
    ru: "Price: Low to High",
  },
  "shop.sort_price_desc": {
    en: "Price: High to Low",
    tk: "Price: High to Low",
    ru: "Price: High to Low",
  },
  "shop.sort_name": {
    en: "Name",
    tk: "Name",
    ru: "Name",
  },
  "shop.search_placeholder": {
    en: "Search textiles...",
    tk: "Search textiles...",
    ru: "Search textiles...",
  },
  "shop.filter_btn": {
    en: "Filter",
    tk: "Filter",
    ru: "Filter",
  },
  "shop.adjust_filters": {
    en: "Try adjusting your filters or search",
    tk: "Try adjusting your filters or search",
    ru: "Try adjusting your filters or search",
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
    tk: "Out of Stock",
    ru: "Out of Stock",
  },
  "product.home": {
    en: "Home",
    tk: "Home",
    ru: "Home",
  },
  "product.shop": {
    en: "Shop",
    tk: "Shop",
    ru: "Shop",
  },
  "product.type": {
    en: "Type",
    tk: "Type",
    ru: "Type",
  },
  "product.dimensions": {
    en: "Dimensions",
    tk: "Dimensions",
    ru: "Dimensions",
  },
  "product.availability": {
    en: "Availability",
    tk: "Availability",
    ru: "Availability",
  },
  "product.shipping_info": {
    en: "Shipping Information",
    tk: "Shipping Information",
    ru: "Shipping Information",
  },
  "product.related": {
    en: "You Might Also Like",
    tk: "You Might Also Like",
    ru: "You Might Also Like",
  },
  "product.view_details": {
    en: "View Details",
    tk: "View Details",
    ru: "View Details",
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
    tk: "Your Selection",
    ru: "Your Selection",
  },
  "cart.shopping_cart": {
    en: "Shopping Cart",
    tk: "Shopping Cart",
    ru: "Shopping Cart",
  },
  "cart.review_text": {
    en: "Review your handpicked textiles before completing your order",
    tk: "Review your handpicked textiles before completing your order",
    ru: "Review your handpicked textiles before completing your order",
  },
  "cart.discover_text": {
    en: "Discover our curated collection of Turkmen textiles",
    tk: "Discover our curated collection of Turkmen textiles",
    ru: "Discover our curated collection of Turkmen textiles",
  },
  "cart.browse_collection": {
    en: "Browse Collection",
    tk: "Browse Collection",
    ru: "Browse Collection",
  },
  "cart.order_summary": {
    en: "Order Summary",
    tk: "Order Summary",
    ru: "Order Summary",
  },
  "cart.items_count": {
    en: "Items",
    tk: "Items",
    ru: "Items",
  },
  "cart.shipping": {
    en: "Shipping",
    tk: "Shipping",
    ru: "Shipping",
  },
  "cart.shipping_calc": {
    en: "Calculated at checkout",
    tk: "Calculated at checkout",
    ru: "Calculated at checkout",
  },
  "cart.full_name": {
    en: "Full Name",
    tk: "Full Name",
    ru: "Full Name",
  },
  "cart.email": {
    en: "Email Address",
    tk: "Email Address",
    ru: "Email Address",
  },
  "cart.phone": {
    en: "Phone Number",
    tk: "Phone Number",
    ru: "Phone Number",
  },
  "cart.address": {
    en: "Delivery Address",
    tk: "Delivery Address",
    ru: "Delivery Address",
  },
  "cart.special_instructions": {
    en: "Special Instructions",
    tk: "Special Instructions",
    ru: "Special Instructions",
  },
  "cart.complete_order": {
    en: "Complete Order",
    tk: "Complete Order",
    ru: "Complete Order",
  },
  "cart.demo_notice": {
    en: "This is a demonstration. No payment will be processed.",
    tk: "This is a demonstration. No payment will be processed.",
    ru: "This is a demonstration. No payment will be processed.",
  },
  "cart.qty": {
    en: "Qty:",
    tk: "Qty:",
    ru: "Qty:",
  },
  "cart.remove": {
    en: "Remove from cart",
    tk: "Remove from cart",
    ru: "Remove from cart",
  },
  "cart.name_placeholder": {
    en: "Enter your full name",
    tk: "Enter your full name",
    ru: "Enter your full name",
  },
  "cart.email_placeholder": {
    en: "your@email.com",
    tk: "your@email.com",
    ru: "your@email.com",
  },
  "cart.phone_placeholder": {
    en: "+993 XX XXX XXX",
    tk: "+993 XX XXX XXX",
    ru: "+993 XX XXX XXX",
  },
  "cart.address_placeholder": {
    en: "Street address, city, region...",
    tk: "Street address, city, region...",
    ru: "Street address, city, region...",
  },
  "cart.notes_placeholder": {
    en: "Any special requests or notes...",
    tk: "Any special requests or notes...",
    ru: "Any special requests or notes...",
  },

  // ─── Compare ────────────────────────────
  "compare.price_check": {
    en: "Price & Material Check",
    tk: "Price & Material Check",
    ru: "Price & Material Check",
  },
  "compare.title": {
    en: "Compare Saved Textiles",
    tk: "Compare Saved Textiles",
    ru: "Compare Saved Textiles",
  },
  "compare.description": {
    en: "Items you marked on the shopping page appear here. Keep up to three products, remove any you no longer want, and return to the shop to add more.",
    tk: "Items you marked on the shopping page appear here. Keep up to three products, remove any you no longer want, and return to the shop to add more.",
    ru: "Items you marked on the shopping page appear here. Keep up to three products, remove any you no longer want, and return to the shop to add more.",
  },
  "compare.back_to_shop": {
    en: "Back to Shopping",
    tk: "Back to Shopping",
    ru: "Back to Shopping",
  },
  "compare.clear_list": {
    en: "Clear List",
    tk: "Clear List",
    ru: "Clear List",
  },
  "compare.up_to_3": {
    en: "Up to 3 Items",
    tk: "Up to 3 Items",
    ru: "Up to 3 Items",
  },
  "compare.side_by_side": {
    en: "Side-by-side Overview",
    tk: "Side-by-side Overview",
    ru: "Side-by-side Overview",
  },
  "compare.side_by_side_desc": {
    en: "We highlight the best price automatically. Details stay minimal so you can make quick choices.",
    tk: "We highlight the best price automatically. Details stay minimal so you can make quick choices.",
    ru: "We highlight the best price automatically. Details stay minimal so you can make quick choices.",
  },
  "compare.no_items": {
    en: "No items saved. Go back to the shop and press \"Compare\".",
    tk: "No items saved. Go back to the shop and press \"Compare\".",
    ru: "No items saved. Go back to the shop and press \"Compare\".",
  },
  "compare.start_shopping": {
    en: "Start Shopping",
    tk: "Start Shopping",
    ru: "Start Shopping",
  },
  "compare.remove": {
    en: "Remove",
    tk: "Remove",
    ru: "Remove",
  },
  "compare.col_product": {
    en: "Product",
    tk: "Product",
    ru: "Product",
  },
  "compare.col_price": {
    en: "Price",
    tk: "Price",
    ru: "Price",
  },

  // ─── Heritage Page ──────────────────────
  "heritage.hero_title": {
    en: "Turkmen Textile Heritage",
    tk: "Turkmen Textile Heritage",
    ru: "Turkmen Textile Heritage",
  },
  "heritage.hero_desc": {
    en: "Turkmenistan's textile traditions span over two millennia — from hand-knotted carpets recognized by UNESCO to the luminous keteni silk of the Silk Road. Today, over 70 enterprises carry this legacy forward.",
    tk: "Turkmenistan's textile traditions span over two millennia — from hand-knotted carpets recognized by UNESCO to the luminous keteni silk of the Silk Road. Today, over 70 enterprises carry this legacy forward.",
    ru: "Turkmenistan's textile traditions span over two millennia — from hand-knotted carpets recognized by UNESCO to the luminous keteni silk of the Silk Road. Today, over 70 enterprises carry this legacy forward.",
  },
  "heritage.unesco_title": {
    en: "UNESCO Recognition",
    tk: "UNESCO Recognition",
    ru: "UNESCO Recognition",
  },
  "heritage.unesco_p1": {
    en: "In 2019, the art of Turkmen carpet weaving was inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity, recognizing the centuries-old tradition of hand-knotting that defines Turkmen identity. Each tribal group — Tekke, Yomut, Ersari, Salor, and Saryk — developed distinctive göl (medallion) patterns that serve as heraldic emblems.",
    tk: "In 2019, the art of Turkmen carpet weaving was inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity, recognizing the centuries-old tradition of hand-knotting that defines Turkmen identity. Each tribal group — Tekke, Yomut, Ersari, Salor, and Saryk — developed distinctive göl (medallion) patterns that serve as heraldic emblems.",
    ru: "In 2019, the art of Turkmen carpet weaving was inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity, recognizing the centuries-old tradition of hand-knotting that defines Turkmen identity. Each tribal group — Tekke, Yomut, Ersari, Salor, and Saryk — developed distinctive göl (medallion) patterns that serve as heraldic emblems.",
  },
  "heritage.unesco_p2": {
    en: "In 2022, traditional Turkmen sericulture and silk production were also inscribed, acknowledging the ancient art of rearing silkworms and weaving keteni — a lustrous fabric central to bridal traditions and national celebrations. These recognitions place Turkmen textiles alongside the world's most treasured craft traditions.",
    tk: "In 2022, traditional Turkmen sericulture and silk production were also inscribed, acknowledging the ancient art of rearing silkworms and weaving keteni — a lustrous fabric central to bridal traditions and national celebrations. These recognitions place Turkmen textiles alongside the world's most treasured craft traditions.",
    ru: "In 2022, traditional Turkmen sericulture and silk production were also inscribed, acknowledging the ancient art of rearing silkworms and weaving keteni — a lustrous fabric central to bridal traditions and national celebrations. These recognitions place Turkmen textiles alongside the world's most treasured craft traditions.",
  },
  "heritage.industry_title": {
    en: "Modern Textile Industry",
    tk: "Modern Textile Industry",
    ru: "Modern Textile Industry",
  },
  "heritage.industry_p1": {
    en: "Turkmenistan's textile sector is one of the largest in Central Asia. The state association Türkmenhaly, founded in 1924, coordinates handmade carpet production across all five provinces. Major industrial complexes — Türkmenbaşy Dokma Toplumy, Aşgabat Dokma Toplumy, Ruhabat, Babadaýhan, and Kaka — process domestically grown cotton into yarn, fabrics, and finished garments.",
    tk: "Turkmenistan's textile sector is one of the largest in Central Asia. The state association Türkmenhaly, founded in 1924, coordinates handmade carpet production across all five provinces. Major industrial complexes — Türkmenbaşy Dokma Toplumy, Aşgabat Dokma Toplumy, Ruhabat, Babadaýhan, and Kaka — process domestically grown cotton into yarn, fabrics, and finished garments.",
    ru: "Turkmenistan's textile sector is one of the largest in Central Asia. The state association Türkmenhaly, founded in 1924, coordinates handmade carpet production across all five provinces. Major industrial complexes — Türkmenbaşy Dokma Toplumy, Aşgabat Dokma Toplumy, Ruhabat, Babadaýhan, and Kaka — process domestically grown cotton into yarn, fabrics, and finished garments.",
  },
  "heritage.industry_p2": {
    en: "The denim sector, led by Türkmenbaşy Jins Toplumy, produces jeans, jackets, and accessories for domestic and export markets. Balkandokma in Gyzylarbat uses Italian technology for premium yarn production. Together, over 70 textile enterprises employ tens of thousands of workers and contribute significantly to the national economy.",
    tk: "The denim sector, led by Türkmenbaşy Jins Toplumy, produces jeans, jackets, and accessories for domestic and export markets. Balkandokma in Gyzylarbat uses Italian technology for premium yarn production. Together, over 70 textile enterprises employ tens of thousands of workers and contribute significantly to the national economy.",
    ru: "The denim sector, led by Türkmenbaşy Jins Toplumy, produces jeans, jackets, and accessories for domestic and export markets. Balkandokma in Gyzylarbat uses Italian technology for premium yarn production. Together, over 70 textile enterprises employ tens of thousands of workers and contribute significantly to the national economy.",
  },
  "heritage.education_title": {
    en: "Education & Preservation",
    tk: "Education & Preservation",
    ru: "Education & Preservation",
  },
  "heritage.education_p1": {
    en: "The usta-şägirt (master-apprentice) tradition remains the backbone of Turkmen craft education. Young weavers learn alongside experienced masters, absorbing not only technique but the songs, proverbs, and rituals that accompany the craft. This oral transmission ensures that knowledge passes intact from generation to generation.",
    tk: "The usta-şägirt (master-apprentice) tradition remains the backbone of Turkmen craft education. Young weavers learn alongside experienced masters, absorbing not only technique but the songs, proverbs, and rituals that accompany the craft. This oral transmission ensures that knowledge passes intact from generation to generation.",
    ru: "The usta-şägirt (master-apprentice) tradition remains the backbone of Turkmen craft education. Young weavers learn alongside experienced masters, absorbing not only technique but the songs, proverbs, and rituals that accompany the craft. This oral transmission ensures that knowledge passes intact from generation to generation.",
  },
  "heritage.education_p2": {
    en: "Universities in Ashgabat and Mary offer textile arts and conservation programs. The National Carpet Museum in Ashgabat houses over 2,000 historic carpets, some dating to the 17th century, serving as both archive and inspiration for contemporary weavers.",
    tk: "Universities in Ashgabat and Mary offer textile arts and conservation programs. The National Carpet Museum in Ashgabat houses over 2,000 historic carpets, some dating to the 17th century, serving as both archive and inspiration for contemporary weavers.",
    ru: "Universities in Ashgabat and Mary offer textile arts and conservation programs. The National Carpet Museum in Ashgabat houses over 2,000 historic carpets, some dating to the 17th century, serving as both archive and inspiration for contemporary weavers.",
  },
  "heritage.silkroad_title": {
    en: "Silk Road Legacy",
    tk: "Silk Road Legacy",
    ru: "Silk Road Legacy",
  },
  "heritage.silkroad_p1": {
    en: "Ancient Merv, located in present-day Mary Province, was one of the largest cities in the world during the 12th century and a vital node on the Silk Road. Caravans carrying silk, spices, and dyes passed through Turkmen lands for centuries, enriching local craft traditions with Persian, Chinese, and Indian influences.",
    tk: "Ancient Merv, located in present-day Mary Province, was one of the largest cities in the world during the 12th century and a vital node on the Silk Road. Caravans carrying silk, spices, and dyes passed through Turkmen lands for centuries, enriching local craft traditions with Persian, Chinese, and Indian influences.",
    ru: "Ancient Merv, located in present-day Mary Province, was one of the largest cities in the world during the 12th century and a vital node on the Silk Road. Caravans carrying silk, spices, and dyes passed through Turkmen lands for centuries, enriching local craft traditions with Persian, Chinese, and Indian influences.",
  },
  "heritage.silkroad_p2": {
    en: "Sericulture — the rearing of silkworms and reeling of raw silk — has been practiced in the Mary oasis for over a thousand years. The keteni fabric woven from this silk is unique to Turkmen culture: its distinctive sheen comes from a satin-weave technique that allows silk threads to float on the surface, catching light with every movement.",
    tk: "Sericulture — the rearing of silkworms and reeling of raw silk — has been practiced in the Mary oasis for over a thousand years. The keteni fabric woven from this silk is unique to Turkmen culture: its distinctive sheen comes from a satin-weave technique that allows silk threads to float on the surface, catching light with every movement.",
    ru: "Sericulture — the rearing of silkworms and reeling of raw silk — has been practiced in the Mary oasis for over a thousand years. The keteni fabric woven from this silk is unique to Turkmen culture: its distinctive sheen comes from a satin-weave technique that allows silk threads to float on the surface, catching light with every movement.",
  },
  "heritage.sustainable_title": {
    en: "Sustainable Future",
    tk: "Sustainable Future",
    ru: "Sustainable Future",
  },
  "heritage.eco_dye_title": {
    en: "Natural Dyes",
    tk: "Natural Dyes",
    ru: "Natural Dyes",
  },
  "heritage.eco_dye_desc": {
    en: "Traditional Turkmen dyes use madder root for red, pomegranate rind for yellow, indigo for blue, and walnut husks for brown — techniques unchanged for centuries.",
    tk: "Traditional Turkmen dyes use madder root for red, pomegranate rind for yellow, indigo for blue, and walnut husks for brown — techniques unchanged for centuries.",
    ru: "Traditional Turkmen dyes use madder root for red, pomegranate rind for yellow, indigo for blue, and walnut husks for brown — techniques unchanged for centuries.",
  },
  "heritage.turkmen_cotton_title": {
    en: "Turkmen Cotton",
    tk: "Turkmen Cotton",
    ru: "Turkmen Cotton",
  },
  "heritage.turkmen_cotton_desc": {
    en: "Turkmenistan is one of the world's top cotton producers. Domestically grown cotton feeds the country's textile mills, creating a fully integrated supply chain from field to finished product.",
    tk: "Turkmenistan is one of the world's top cotton producers. Domestically grown cotton feeds the country's textile mills, creating a fully integrated supply chain from field to finished product.",
    ru: "Turkmenistan is one of the world's top cotton producers. Domestically grown cotton feeds the country's textile mills, creating a fully integrated supply chain from field to finished product.",
  },
  "heritage.community_title": {
    en: "Community Impact",
    tk: "Community Impact",
    ru: "Community Impact",
  },
  "heritage.community_desc": {
    en: "Textile production provides livelihoods for thousands of families across all provinces, especially in rural areas where carpet weaving remains a primary source of income for women.",
    tk: "Textile production provides livelihoods for thousands of families across all provinces, especially in rural areas where carpet weaving remains a primary source of income for women.",
    ru: "Textile production provides livelihoods for thousands of families across all provinces, especially in rural areas where carpet weaving remains a primary source of income for women.",
  },

  // ─── Artisans Page ──────────────────────
  "artisans.hero_title": {
    en: "Meet the Hands Behind the Heritage",
    tk: "Meet the Hands Behind the Heritage",
    ru: "Meet the Hands Behind the Heritage",
  },
  "artisans.hero_desc": {
    en: "From the carpet workshops of Mary to the silk looms of the Murgab valley, Turkmen artisans preserve techniques passed down through generations. Their skill transforms raw wool, cotton, and silk into works of art.",
    tk: "From the carpet workshops of Mary to the silk looms of the Murgab valley, Turkmen artisans preserve techniques passed down through generations. Their skill transforms raw wool, cotton, and silk into works of art.",
    ru: "From the carpet workshops of Mary to the silk looms of the Murgab valley, Turkmen artisans preserve techniques passed down through generations. Their skill transforms raw wool, cotton, and silk into works of art.",
  },
  "artisans.master_weavers": {
    en: "Master Weavers",
    tk: "Master Weavers",
    ru: "Master Weavers",
  },
  "artisans.weaver1_name": {
    en: "Ogulgerek Ataýewa",
    tk: "Ogulgerek Ataýewa",
    ru: "Ogulgerek Ataýewa",
  },
  "artisans.weaver1_desc": {
    en: "A master carpet weaver from the Mary region, Ogulgerek learned the Tekke göl patterns from her grandmother at age eight. With over 40 years of experience, she can reproduce all five major tribal göl patterns from memory and has trained dozens of young weavers in the usta-şägirt tradition.",
    tk: "A master carpet weaver from the Mary region, Ogulgerek learned the Tekke göl patterns from her grandmother at age eight. With over 40 years of experience, she can reproduce all five major tribal göl patterns from memory and has trained dozens of young weavers in the usta-şägirt tradition.",
    ru: "A master carpet weaver from the Mary region, Ogulgerek learned the Tekke göl patterns from her grandmother at age eight. With over 40 years of experience, she can reproduce all five major tribal göl patterns from memory and has trained dozens of young weavers in the usta-şägirt tradition.",
  },
  "artisans.weaver2_name": {
    en: "Merdan Ödäýew",
    tk: "Merdan Ödäýew",
    ru: "Merdan Ödäýew",
  },
  "artisans.weaver2_desc": {
    en: "Based in Daşoguz, Merdan specializes in Yomut-style carpets and large-format kilims. A textile engineer by training, he combines traditional patterns with modern ergonomic loom designs that reduce physical strain on weavers while maintaining the authenticity of hand-knotted construction.",
    tk: "Based in Daşoguz, Merdan specializes in Yomut-style carpets and large-format kilims. A textile engineer by training, he combines traditional patterns with modern ergonomic loom designs that reduce physical strain on weavers while maintaining the authenticity of hand-knotted construction.",
    ru: "Based in Daşoguz, Merdan specializes in Yomut-style carpets and large-format kilims. A textile engineer by training, he combines traditional patterns with modern ergonomic loom designs that reduce physical strain on weavers while maintaining the authenticity of hand-knotted construction.",
  },
  "artisans.weaver3_name": {
    en: "Aýnabat Nazarowa",
    tk: "Aýnabat Nazarowa",
    ru: "Aýnabat Nazarowa",
  },
  "artisans.weaver3_desc": {
    en: "A guardian of the keteni silk tradition in Mary, Aýnabat oversees silk production from cocoon to finished fabric. She manages natural dye preparation using pomegranate, madder, and walnut, maintaining handwritten records of every dye batch to ensure color consistency across generations.",
    tk: "A guardian of the keteni silk tradition in Mary, Aýnabat oversees silk production from cocoon to finished fabric. She manages natural dye preparation using pomegranate, madder, and walnut, maintaining handwritten records of every dye batch to ensure color consistency across generations.",
    ru: "A guardian of the keteni silk tradition in Mary, Aýnabat oversees silk production from cocoon to finished fabric. She manages natural dye preparation using pomegranate, madder, and walnut, maintaining handwritten records of every dye batch to ensure color consistency across generations.",
  },
  "artisans.apprenticeship_title": {
    en: "The Usta-Şägirt Tradition",
    tk: "The Usta-Şägirt Tradition",
    ru: "The Usta-Şägirt Tradition",
  },
  "artisans.apprenticeship_p1": {
    en: "The usta-şägirt (master-apprentice) system is the traditional method of craft education in Turkmenistan. Apprentices spend years alongside a master, learning not only technical skills but the cultural context of each pattern — which songs accompany the warping of the loom, which prayers are woven into a namazlyk, which motifs bring blessings to a new bride.",
    tk: "The usta-şägirt (master-apprentice) system is the traditional method of craft education in Turkmenistan. Apprentices spend years alongside a master, learning not only technical skills but the cultural context of each pattern — which songs accompany the warping of the loom, which prayers are woven into a namazlyk, which motifs bring blessings to a new bride.",
    ru: "The usta-şägirt (master-apprentice) system is the traditional method of craft education in Turkmenistan. Apprentices spend years alongside a master, learning not only technical skills but the cultural context of each pattern — which songs accompany the warping of the loom, which prayers are woven into a namazlyk, which motifs bring blessings to a new bride.",
  },
  "artisans.apprenticeship_p2": {
    en: "Today, Türkmenhaly workshops across all five provinces continue this tradition. Young women and men learn fiber preparation, natural dyeing, loom construction, and the symbolic language of Turkmen ornament. The program combines hands-on workshop training with formal education in textile history and conservation.",
    tk: "Today, Türkmenhaly workshops across all five provinces continue this tradition. Young women and men learn fiber preparation, natural dyeing, loom construction, and the symbolic language of Turkmen ornament. The program combines hands-on workshop training with formal education in textile history and conservation.",
    ru: "Today, Türkmenhaly workshops across all five provinces continue this tradition. Young women and men learn fiber preparation, natural dyeing, loom construction, and the symbolic language of Turkmen ornament. The program combines hands-on workshop training with formal education in textile history and conservation.",
  },
  "artisans.innovation_title": {
    en: "Modern Textile Technology",
    tk: "Modern Textile Technology",
    ru: "Modern Textile Technology",
  },
  "artisans.innovation_p1": {
    en: "Turkmenistan's modern textile complexes blend tradition with cutting-edge technology. Factories like Türkmenbaşy Dokma Toplumy use automated spinning and jacquard looms alongside quality-control labs, producing fabrics that meet international export standards while incorporating traditional Turkmen patterns.",
    tk: "Turkmenistan's modern textile complexes blend tradition with cutting-edge technology. Factories like Türkmenbaşy Dokma Toplumy use automated spinning and jacquard looms alongside quality-control labs, producing fabrics that meet international export standards while incorporating traditional Turkmen patterns.",
    ru: "Turkmenistan's modern textile complexes blend tradition with cutting-edge technology. Factories like Türkmenbaşy Dokma Toplumy use automated spinning and jacquard looms alongside quality-control labs, producing fabrics that meet international export standards while incorporating traditional Turkmen patterns.",
  },
  "artisans.innovation_p2": {
    en: "Balkandokma's yarn production facility in Gyzylarbat employs Italian spinning technology, producing high-quality cotton yarn for both domestic use and export. This fusion of Turkmen raw materials with modern processing creates products that compete on the global market.",
    tk: "Balkandokma's yarn production facility in Gyzylarbat employs Italian spinning technology, producing high-quality cotton yarn for both domestic use and export. This fusion of Turkmen raw materials with modern processing creates products that compete on the global market.",
    ru: "Balkandokma's yarn production facility in Gyzylarbat employs Italian spinning technology, producing high-quality cotton yarn for both domestic use and export. This fusion of Turkmen raw materials with modern processing creates products that compete on the global market.",
  },
  "artisans.community_weaving_title": {
    en: "Regional Craft Centers",
    tk: "Regional Craft Centers",
    ru: "Regional Craft Centers",
  },
  "artisans.community_weaving_p1": {
    en: "Carpet weaving centers operate in every province of Turkmenistan: from the Tekke heartland in Ahal and Mary to the Yomut workshops of Balkan and Daşoguz and the Ersari studios of Lebap. Each region produces carpets with distinctive characteristics shaped by tribal heritage and local materials.",
    tk: "Carpet weaving centers operate in every province of Turkmenistan: from the Tekke heartland in Ahal and Mary to the Yomut workshops of Balkan and Daşoguz and the Ersari studios of Lebap. Each region produces carpets with distinctive characteristics shaped by tribal heritage and local materials.",
    ru: "Carpet weaving centers operate in every province of Turkmenistan: from the Tekke heartland in Ahal and Mary to the Yomut workshops of Balkan and Daşoguz and the Ersari studios of Lebap. Each region produces carpets with distinctive characteristics shaped by tribal heritage and local materials.",
  },
  "artisans.community_weaving_p2": {
    en: "The Mary Keteni Ussahanasy (Mary Keteni Workshop) preserves the silk-weaving tradition of the Murgab valley, producing keteni fabric for bridal dresses and national celebrations. Visitors can observe the full process — from silk cocoon reeling to loom weaving — by appointment.",
    tk: "The Mary Keteni Ussahanasy (Mary Keteni Workshop) preserves the silk-weaving tradition of the Murgab valley, producing keteni fabric for bridal dresses and national celebrations. Visitors can observe the full process — from silk cocoon reeling to loom weaving — by appointment.",
    ru: "The Mary Keteni Ussahanasy (Mary Keteni Workshop) preserves the silk-weaving tradition of the Murgab valley, producing keteni fabric for bridal dresses and national celebrations. Visitors can observe the full process — from silk cocoon reeling to loom weaving — by appointment.",
  },

  // ─── Collections Page ───────────────────
  "collections.hero_title": {
    en: "Turkmen Textile Collections",
    tk: "Turkmen Textile Collections",
    ru: "Turkmen Textile Collections",
  },
  "collections.hero_desc": {
    en: "From the iconic Tekke carpets to luminous keteni silk and modern industrial textiles — explore the full range of Turkmenistan's textile heritage and industry.",
    tk: "From the iconic Tekke carpets to luminous keteni silk and modern industrial textiles — explore the full range of Turkmenistan's textile heritage and industry.",
    ru: "From the iconic Tekke carpets to luminous keteni silk and modern industrial textiles — explore the full range of Turkmenistan's textile heritage and industry.",
  },
  "collections.tekke_title": {
    en: "Tekke Carpets",
    tk: "Tekke Carpets",
    ru: "Tekke Carpets",
  },
  "collections.tekke_p1": {
    en: "Tekke carpets are the most internationally recognized of all Turkmen carpet types. Woven primarily by the Tekke tribe in the Ahal and Mary provinces, they feature rows of octagonal göl medallions on a rich crimson field. The deep red color comes from madder root, a natural dye cultivated in the region for centuries.",
    tk: "Tekke carpets are the most internationally recognized of all Turkmen carpet types. Woven primarily by the Tekke tribe in the Ahal and Mary provinces, they feature rows of octagonal göl medallions on a rich crimson field. The deep red color comes from madder root, a natural dye cultivated in the region for centuries.",
    ru: "Tekke carpets are the most internationally recognized of all Turkmen carpet types. Woven primarily by the Tekke tribe in the Ahal and Mary provinces, they feature rows of octagonal göl medallions on a rich crimson field. The deep red color comes from madder root, a natural dye cultivated in the region for centuries.",
  },
  "collections.tekke_p2": {
    en: "The Tekke göl has become so iconic that it appears on the national flag of Turkmenistan. Knot densities typically range from 120,000 to 300,000 knots per square meter, with the finest pieces taking months or even years to complete. Traditional sizes include the main carpet (haly), runner (ýolly), prayer rug (namazlyk), and storage bags (torba, çuwal).",
    tk: "The Tekke göl has become so iconic that it appears on the national flag of Turkmenistan. Knot densities typically range from 120,000 to 300,000 knots per square meter, with the finest pieces taking months or even years to complete. Traditional sizes include the main carpet (haly), runner (ýolly), prayer rug (namazlyk), and storage bags (torba, çuwal).",
    ru: "The Tekke göl has become so iconic that it appears on the national flag of Turkmenistan. Knot densities typically range from 120,000 to 300,000 knots per square meter, with the finest pieces taking months or even years to complete. Traditional sizes include the main carpet (haly), runner (ýolly), prayer rug (namazlyk), and storage bags (torba, çuwal).",
  },
  "collections.yomut_title": {
    en: "Yomut Carpets & Kilims",
    tk: "Yomut Carpets & Kilims",
    ru: "Yomut Carpets & Kilims",
  },
  "collections.yomut_p1": {
    en: "The Yomut tribe, historically based along the Caspian coast and in Daşoguz province, produce carpets distinguished by their kepse göl — a diamond-shaped medallion quite different from the Tekke octagon. Yomut carpets tend to use a broader color palette, including deep blues, greens, and ivory alongside the traditional red.",
    tk: "The Yomut tribe, historically based along the Caspian coast and in Daşoguz province, produce carpets distinguished by their kepse göl — a diamond-shaped medallion quite different from the Tekke octagon. Yomut carpets tend to use a broader color palette, including deep blues, greens, and ivory alongside the traditional red.",
    ru: "The Yomut tribe, historically based along the Caspian coast and in Daşoguz province, produce carpets distinguished by their kepse göl — a diamond-shaped medallion quite different from the Tekke octagon. Yomut carpets tend to use a broader color palette, including deep blues, greens, and ivory alongside the traditional red.",
  },
  "collections.yomut_p2": {
    en: "Yomut weavers are also renowned for their flatweave kilims and palas, lightweight textiles that were essential for nomadic life. These pieces feature bold geometric patterns representing natural elements — migrating birds, flowing water, and the undulating Karakum dunes.",
    tk: "Yomut weavers are also renowned for their flatweave kilims and palas, lightweight textiles that were essential for nomadic life. These pieces feature bold geometric patterns representing natural elements — migrating birds, flowing water, and the undulating Karakum dunes.",
    ru: "Yomut weavers are also renowned for their flatweave kilims and palas, lightweight textiles that were essential for nomadic life. These pieces feature bold geometric patterns representing natural elements — migrating birds, flowing water, and the undulating Karakum dunes.",
  },
  "collections.keteni_title": {
    en: "Keteni Silk",
    tk: "Keteni Silk",
    ru: "Keteni Silk",
  },
  "collections.keteni_p1": {
    en: "Keteni is a traditional Turkmen silk fabric with an extraordinary luminous sheen, produced primarily in the Mary province. The fabric is woven from locally reeled mulberry silk using a satin-weave technique that creates long thread floats on the surface, giving keteni its characteristic play of light.",
    tk: "Keteni is a traditional Turkmen silk fabric with an extraordinary luminous sheen, produced primarily in the Mary province. The fabric is woven from locally reeled mulberry silk using a satin-weave technique that creates long thread floats on the surface, giving keteni its characteristic play of light.",
    ru: "Keteni is a traditional Turkmen silk fabric with an extraordinary luminous sheen, produced primarily in the Mary province. The fabric is woven from locally reeled mulberry silk using a satin-weave technique that creates long thread floats on the surface, giving keteni its characteristic play of light.",
  },
  "collections.keteni_p2": {
    en: "Red keteni (gyrmyzy keteni) is the most prized variety, traditionally worn by brides during wedding celebrations. Green, white, and yellow variants are used for national holidays and ceremonial occasions. The 2022 UNESCO inscription of Turkmen sericulture recognized the entire chain — from mulberry cultivation and silkworm rearing to reeling, dyeing, and weaving.",
    tk: "Red keteni (gyrmyzy keteni) is the most prized variety, traditionally worn by brides during wedding celebrations. Green, white, and yellow variants are used for national holidays and ceremonial occasions. The 2022 UNESCO inscription of Turkmen sericulture recognized the entire chain — from mulberry cultivation and silkworm rearing to reeling, dyeing, and weaving.",
    ru: "Red keteni (gyrmyzy keteni) is the most prized variety, traditionally worn by brides during wedding celebrations. Green, white, and yellow variants are used for national holidays and ceremonial occasions. The 2022 UNESCO inscription of Turkmen sericulture recognized the entire chain — from mulberry cultivation and silkworm rearing to reeling, dyeing, and weaving.",
  },
  "collections.industrial_title": {
    en: "Industrial Textiles",
    tk: "Industrial Textiles",
    ru: "Industrial Textiles",
  },
  "collections.industrial_p1": {
    en: "Turkmenistan's modern textile industry processes the country's abundant cotton harvest into a wide range of products. Major complexes produce cotton yarn, woven and knitted fabrics, denim, towels, bedding, and ready-to-wear clothing. The Türkmenbaşy Jins Toplumy specializes in denim, offering jeans, jackets, and skirts for domestic and international markets.",
    tk: "Turkmenistan's modern textile industry processes the country's abundant cotton harvest into a wide range of products. Major complexes produce cotton yarn, woven and knitted fabrics, denim, towels, bedding, and ready-to-wear clothing. The Türkmenbaşy Jins Toplumy specializes in denim, offering jeans, jackets, and skirts for domestic and international markets.",
    ru: "Turkmenistan's modern textile industry processes the country's abundant cotton harvest into a wide range of products. Major complexes produce cotton yarn, woven and knitted fabrics, denim, towels, bedding, and ready-to-wear clothing. The Türkmenbaşy Jins Toplumy specializes in denim, offering jeans, jackets, and skirts for domestic and international markets.",
  },
  "collections.industrial_p2": {
    en: "Cotton yarn producers — Ruhabat, Babadaýhan, Kaka, Daşoguz Serdar, Halaç, and Balkandokma — supply both domestic factories and export markets. Türkmen Jorap Dokma in Ashgabat produces hosiery and socks with both modern and traditional Turkmen patterns.",
    tk: "Cotton yarn producers — Ruhabat, Babadaýhan, Kaka, Daşoguz Serdar, Halaç, and Balkandokma — supply both domestic factories and export markets. Türkmen Jorap Dokma in Ashgabat produces hosiery and socks with both modern and traditional Turkmen patterns.",
    ru: "Cotton yarn producers — Ruhabat, Babadaýhan, Kaka, Daşoguz Serdar, Halaç, and Balkandokma — supply both domestic factories and export markets. Türkmen Jorap Dokma in Ashgabat produces hosiery and socks with both modern and traditional Turkmen patterns.",
  },
  "collections.home_title": {
    en: "Home Textiles",
    tk: "Home Textiles",
    ru: "Home Textiles",
  },
  "collections.home_p1": {
    en: "From plush towel sets and cotton bedding to embroidered tablecloths and decorative pillow covers, Turkmen home textiles combine practicality with traditional design sensibility. Many products feature subtle incorporations of national ornament patterns, bringing cultural heritage into everyday domestic life.",
    tk: "From plush towel sets and cotton bedding to embroidered tablecloths and decorative pillow covers, Turkmen home textiles combine practicality with traditional design sensibility. Many products feature subtle incorporations of national ornament patterns, bringing cultural heritage into everyday domestic life.",
    ru: "From plush towel sets and cotton bedding to embroidered tablecloths and decorative pillow covers, Turkmen home textiles combine practicality with traditional design sensibility. Many products feature subtle incorporations of national ornament patterns, bringing cultural heritage into everyday domestic life.",
  },

  // ─── Contact Page ───────────────────────
  "contact.hero_title": {
    en: "Contact Us",
    tk: "Contact Us",
    ru: "Contact Us",
  },
  "contact.hero_desc": {
    en: "Visit our showroom in Ashgabat, schedule a consultation, or inquire about products and collections. We are happy to help.",
    tk: "Visit our showroom in Ashgabat, schedule a consultation, or inquire about products and collections. We are happy to help.",
    ru: "Visit our showroom in Ashgabat, schedule a consultation, or inquire about products and collections. We are happy to help.",
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
    tk: "Showroom & Hours",
    ru: "Showroom & Hours",
  },
  "contact.address_label": {
    en: "Address:",
    tk: "Address:",
    ru: "Address:",
  },
  "contact.open_label": {
    en: "Open:",
    tk: "Open:",
    ru: "Open:",
  },
  "contact.open_hours": {
    en: "Monday – Saturday, 09:00 – 18:00",
    tk: "Monday – Saturday, 09:00 – 18:00",
    ru: "Monday – Saturday, 09:00 – 18:00",
  },
  "contact.closed_label": {
    en: "Closed:",
    tk: "Closed:",
    ru: "Closed:",
  },
  "contact.closed_days": {
    en: "Sundays & national holidays",
    tk: "Sundays & national holidays",
    ru: "Sundays & national holidays",
  },
  "contact.phone_label": {
    en: "Phone:",
    tk: "Phone:",
    ru: "Phone:",
  },
  "contact.email_label": {
    en: "Email:",
    tk: "Email:",
    ru: "Email:",
  },
  "contact.international_title": {
    en: "International Clients",
    tk: "International Clients",
    ru: "International Clients",
  },
  "contact.international_desc": {
    en: "We offer consultations for collectors, designers, and businesses worldwide. Product samples can be shipped internationally with certification of origin and detailed specifications.",
    tk: "We offer consultations for collectors, designers, and businesses worldwide. Product samples can be shipped internationally with certification of origin and detailed specifications.",
    ru: "We offer consultations for collectors, designers, and businesses worldwide. Product samples can be shipped internationally with certification of origin and detailed specifications.",
  },
  "contact.wholesale_title": {
    en: "Wholesale & Export",
    tk: "Wholesale & Export",
    ru: "Wholesale & Export",
  },
  "contact.wholesale_desc": {
    en: "For bulk orders of cotton yarn, fabrics, denim products, or handmade carpets, contact our export department. We work with distributors and retailers across Central Asia, Europe, and beyond.",
    tk: "For bulk orders of cotton yarn, fabrics, denim products, or handmade carpets, contact our export department. We work with distributors and retailers across Central Asia, Europe, and beyond.",
    ru: "For bulk orders of cotton yarn, fabrics, denim products, or handmade carpets, contact our export department. We work with distributors and retailers across Central Asia, Europe, and beyond.",
  },
  "contact.arrange_title": {
    en: "Send a Message",
    tk: "Send a Message",
    ru: "Send a Message",
  },
  "contact.thank_you": {
    en: "Thank you!",
    tk: "Thank you!",
    ru: "Thank you!",
  },
  "contact.thank_you_msg": {
    en: "Your message has been received. We'll be in touch soon.",
    tk: "Your message has been received. We'll be in touch soon.",
    ru: "Your message has been received. We'll be in touch soon.",
  },
  "contact.name_label": {
    en: "Full Name",
    tk: "Full Name",
    ru: "Full Name",
  },
  "contact.name_placeholder": {
    en: "Your name",
    tk: "Your name",
    ru: "Your name",
  },
  "contact.email_field_label": {
    en: "Email Address",
    tk: "Email Address",
    ru: "Email Address",
  },
  "contact.interest_label": {
    en: "Primary Interest",
    tk: "Primary Interest",
    ru: "Primary Interest",
  },
  "contact.select_option": {
    en: "Select an option",
    tk: "Select an option",
    ru: "Select an option",
  },
  "contact.option_collection": {
    en: "Product Inquiry",
    tk: "Product Inquiry",
    ru: "Product Inquiry",
  },
  "contact.option_design": {
    en: "Wholesale / Export",
    tk: "Wholesale / Export",
    ru: "Wholesale / Export",
  },
  "contact.option_museum": {
    en: "Carpet Collection",
    tk: "Carpet Collection",
    ru: "Carpet Collection",
  },
  "contact.option_education": {
    en: "Educational Visit",
    tk: "Educational Visit",
    ru: "Educational Visit",
  },
  "contact.option_press": {
    en: "Press & Media",
    tk: "Press & Media",
    ru: "Press & Media",
  },
  "contact.message_label": {
    en: "Message",
    tk: "Message",
    ru: "Message",
  },
  "contact.message_placeholder": {
    en: "Tell us about your inquiry",
    tk: "Tell us about your inquiry",
    ru: "Tell us about your inquiry",
  },
  "contact.submit": {
    en: "Submit Request",
    tk: "Submit Request",
    ru: "Submit Request",
  },

  // ─── Footer ─────────────────────────────
  "footer.brand_desc": {
    en: "Authentic Turkmen textiles — carpets, silk, cotton, and denim from leading manufacturers.",
    tk: "Authentic Turkmen textiles — carpets, silk, cotton, and denim from leading manufacturers.",
    ru: "Authentic Turkmen textiles — carpets, silk, cotton, and denim from leading manufacturers.",
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
    tk: "Shop",
    ru: "Shop",
  },
  "footer.all_products": {
    en: "All Products",
    tk: "All Products",
    ru: "All Products",
  },
  "footer.visit_heading": {
    en: "Visit",
    tk: "Visit",
    ru: "Visit",
  },
  "footer.connect_heading": {
    en: "Connect",
    tk: "Connect",
    ru: "Connect",
  },
  "footer.open_schedule": {
    en: "Open Monday – Saturday",
    tk: "Open Monday – Saturday",
    ru: "Open Monday – Saturday",
  },
  "footer.celebrating": {
    en: "Celebrating",
    tk: "Celebrating",
    ru: "Celebrating",
  },
  "footer.years_text": {
    en: "years of textile excellence",
    tk: "years of textile excellence",
    ru: "years of textile excellence",
  },

  // ─── Header ─────────────────────────────
  "header.top_banner": {
    en: "Authentic Turkmen textiles from the heart of Central Asia",
    tk: "Türkmen topragynyň ýüreginden dokalan nusgalyk ýörelgeler",
    ru: "Authentic Turkmen textiles from the heart of Central Asia",
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
  "common.view_all": {
    en: "View All",
    tk: "View All",
    ru: "View All",
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
