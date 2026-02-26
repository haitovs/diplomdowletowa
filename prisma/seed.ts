import bcrypt from "bcryptjs";
import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("🌱 Seeding database...");

  // Create admin user
  const hashedPassword = await bcrypt.hash("admin", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@dowletowa.tm" },
    update: {},
    create: {
      email: "admin@dowletowa.tm",
      password: hashedPassword,
      name: "Administrator",
      role: "SUPER_ADMIN",
    },
  });
  console.log("✅ Created admin user:", admin.email);

  // ═══════════════════════════════════════════
  // CATEGORIES (8)
  // ═══════════════════════════════════════════
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: "carpets" },
      update: {},
      create: { name: "Carpets", slug: "carpets", description: "Hand-knotted Turkmen carpets (haly)" },
    }),
    prisma.category.upsert({
      where: { slug: "silks" },
      update: {},
      create: { name: "Silk Textiles", slug: "silks", description: "Keteni and mulberry silk fabrics" },
    }),
    prisma.category.upsert({
      where: { slug: "kilims" },
      update: {},
      create: { name: "Kilims", slug: "kilims", description: "Flatweave rugs, palas, and shyrdak panels" },
    }),
    prisma.category.upsert({
      where: { slug: "accessories" },
      update: {},
      create: { name: "Accessories", slug: "accessories", description: "Scarves, stoles, bags, and textile accessories" },
    }),
    prisma.category.upsert({
      where: { slug: "denim" },
      update: {},
      create: { name: "Denim Products", slug: "denim", description: "Jeans, jackets, and denim clothing" },
    }),
    prisma.category.upsert({
      where: { slug: "cotton" },
      update: {},
      create: { name: "Cotton Products", slug: "cotton", description: "Cotton fabrics, yarn, and textiles" },
    }),
    prisma.category.upsert({
      where: { slug: "clothing" },
      update: {},
      create: { name: "Clothing", slug: "clothing", description: "Traditional and modern clothing" },
    }),
    prisma.category.upsert({
      where: { slug: "home-textiles" },
      update: {},
      create: { name: "Home Textiles", slug: "home-textiles", description: "Towels, bedding, and table textiles" },
    }),
  ]);
  console.log("✅ Created", categories.length, "categories");

  const [carpetCat, silkCat, kilimCat, accessoriesCat, denimCat, cottonCat, clothingCat, homeCat] = categories;

  // ═══════════════════════════════════════════
  // STORES (12 real Turkmen companies)
  // ═══════════════════════════════════════════
  const storesData = [
    {
      name: "Türkmenhaly",
      slug: "turkmenhaly",
      origin: "Ashgabat",
      specialty: "Handmade Turkmen carpets, palas, and souvenirs",
      description: "State association for handmade Turkmen carpets, founded in 1924. Coordinates carpet production across all five provinces with workshops in every region of Turkmenistan.",
    },
    {
      name: "Türkmenbaşy Dokma Toplumy",
      slug: "turkmenbashy-dokma",
      origin: "Ashgabat",
      specialty: "Cotton fabrics, jacquard textiles, and finished clothing",
      description: "One of the largest textile complexes in Turkmenistan, producing cotton fabrics, jacquard textiles, and finished garments for domestic and export markets.",
    },
    {
      name: "Türkmenbaşy Jins Toplumy",
      slug: "turkmenbashy-jins",
      origin: "Ashgabat",
      specialty: "Denim clothing — jeans, jackets, skirts, and shorts",
      description: "Turkmenistan's leading denim manufacturer, producing a full range of jeans, jackets, and denim accessories from domestically grown cotton.",
    },
    {
      name: "Aşgabat Dokma Toplumy",
      slug: "ashgabat-dokma",
      origin: "Ashgabat",
      specialty: "Cotton fabrics and finished textile products",
      description: "Major textile complex in the capital producing cotton fabrics, knitted goods, and ready-to-wear clothing.",
    },
    {
      name: "Ruhabat Dokma Toplumy",
      slug: "ruhabat-dokma",
      origin: "Ashgabat",
      specialty: "Cotton yarn, dyed and undyed fabrics",
      description: "Textile complex specializing in cotton yarn production and fabric dyeing, supplying raw materials to other Turkmen garment manufacturers.",
    },
    {
      name: "Babadaýhan Dokma Toplumy",
      slug: "babadayhan-dokma",
      origin: "Babadaýhan, Ahal",
      specialty: "Cotton textiles and yarn",
      description: "Regional textile complex in the Ahal province processing locally grown cotton into yarn and fabrics.",
    },
    {
      name: "Kaka Dokma Toplumy",
      slug: "kaka-dokma",
      origin: "Kaka, Ahal",
      specialty: "Cotton textiles",
      description: "Textile complex in Kaka district producing cotton yarn and fabrics from Ahal province cotton.",
    },
    {
      name: "Daşoguz Pagta Egirme Fabrigi \"Serdar\"",
      slug: "dashoguz-serdar",
      origin: "Daşoguz",
      specialty: "Cotton yarn production",
      description: "Cotton spinning factory in Daşoguz province, producing various grades of cotton yarn for domestic textile mills and export.",
    },
    {
      name: "Halaç Pagta Egirme Fabrigi",
      slug: "halach-fabrik",
      origin: "Halaç, Lebap",
      specialty: "Cotton yarn and export products",
      description: "Cotton spinning facility in Lebap province, known for producing export-quality yarn from fine Turkmen cotton.",
    },
    {
      name: "Balkandokma",
      slug: "balkandokma",
      origin: "Gyzylarbat, Balkan",
      specialty: "Cotton yarn (Italian technology)",
      description: "Modern yarn production facility in Balkan province, equipped with Italian spinning technology for premium cotton yarn production.",
    },
    {
      name: "Türkmen Jorap Dokma",
      slug: "turkmen-jorap",
      origin: "Ashgabat",
      specialty: "Socks, hosiery, and knitwear",
      description: "Hosiery manufacturer producing socks and knitwear with both modern designs and traditional Turkmen patterns.",
    },
    {
      name: "Mary Keteni Ussahanasy",
      slug: "mary-keteni",
      origin: "Mary",
      specialty: "Traditional keteni silk production",
      description: "Workshop preserving the traditional art of keteni silk weaving in the Mary province, producing luminous silk fabrics for bridal wear and national celebrations.",
    },
  ];

  for (const store of storesData) {
    await prisma.store.upsert({
      where: { slug: store.slug },
      update: {},
      create: { ...store, createdById: admin.id },
    });
  }
  console.log("✅ Created", storesData.length, "stores");

  // Get store references
  const turkmenhaly = await prisma.store.findUnique({ where: { slug: "turkmenhaly" } });
  const tbDokma = await prisma.store.findUnique({ where: { slug: "turkmenbashy-dokma" } });
  const tbJins = await prisma.store.findUnique({ where: { slug: "turkmenbashy-jins" } });
  const ashDokma = await prisma.store.findUnique({ where: { slug: "ashgabat-dokma" } });
  const ruhabat = await prisma.store.findUnique({ where: { slug: "ruhabat-dokma" } });
  const babadayhan = await prisma.store.findUnique({ where: { slug: "babadayhan-dokma" } });
  const kaka = await prisma.store.findUnique({ where: { slug: "kaka-dokma" } });
  const dashoguz = await prisma.store.findUnique({ where: { slug: "dashoguz-serdar" } });
  const halach = await prisma.store.findUnique({ where: { slug: "halach-fabrik" } });
  const balkan = await prisma.store.findUnique({ where: { slug: "balkandokma" } });
  const jorap = await prisma.store.findUnique({ where: { slug: "turkmen-jorap" } });
  const maryKeteni = await prisma.store.findUnique({ where: { slug: "mary-keteni" } });

  // ═══════════════════════════════════════════
  // PRODUCTS (72)
  // ═══════════════════════════════════════════

  // Image pools by product type (reusing 22 existing images)
  const IMG = {
    carpet1: "/images/products/product-tekke-desert-runner-1.jpg",
    carpet2: "/images/products/product-ruby-gallery-carpet-1.jpg",
    carpet3: "/images/products/product-akar-yurt-rug-1.jpg",
    carpet4: "/images/products/product-yomut-gol-carpet-1.jpg",
    carpet5: "/images/products/product-ersari-elephant-rug-1.jpg",
    carpet6: "/images/products/product-bukhara-runner-1.jpg",
    trapping: "/images/products/product-camel-trapping-1.jpg",
    chuval: "/images/products/product-teke-chuval-1.jpg",
    kilim1: "/images/products/product-gersary-kilim-1.jpg",
    kilim2: "/images/products/product-desert-motif-kilim-1.jpg",
    throw: "/images/products/product-oasis-throw-1.jpg",
    silk1: "/images/products/product-keteni-robe-1.jpg",
    silk2: "/images/products/product-silk-panel-1.jpg",
    silk3: "/images/products/product-sunset-keteni-1.jpg",
    scarf1: "/images/products/product-indigo-stole-1.jpg",
    scarf2: "/images/products/product-aurora-gradient-scarf-1.jpg",
    scarf3: "/images/products/product-golden-oasis-scarf-1.jpg",
    shawl: "/images/products/product-caspian-shawl-1.jpg",
    bag1: "/images/products/product-camel-bag-1.jpg",
    bag2: "/images/products/product-khorjun-bag-1.jpg",
    clothing: "/images/products/product-embroidery-vest-1.jpg",
    pillow: "/images/products/product-silk-ikat-pillow-1.jpg",
  };

  const products = [
    // ─── Türkmenhaly (12 products — Carpets) ─────────
    { name: "Tekke Haly 2×3m", slug: "tekke-haly-2x3", price: 850, unit: "piece", fiber: "Hand-spun wool, natural dyes", technique: "Hand-knotted, 160k knots/m²", badge: "Classic", stock: 6, delivery: "Ships in 7 days", storeId: turkmenhaly!.id, categoryId: carpetCat.id, isFeatured: true, img: IMG.carpet1 },
    { name: "Tekke Haly 3×4m", slug: "tekke-haly-3x4", price: 1700, unit: "piece", fiber: "Hand-spun wool, madder red dye", technique: "Hand-knotted, 200k knots/m²", badge: "Gallery", stock: 3, delivery: "Ships in 14 days", storeId: turkmenhaly!.id, categoryId: carpetCat.id, isFeatured: true, img: IMG.carpet2 },
    { name: "Tekke Runner (Ýolly)", slug: "tekke-runner", price: 450, unit: "piece", fiber: "Hand-spun wool", technique: "Hand-knotted, 140k knots/m²", badge: "New", stock: 8, delivery: "Ships in 5 days", storeId: turkmenhaly!.id, categoryId: carpetCat.id, img: IMG.carpet6 },
    { name: "Yomut Haly 2×3m", slug: "yomut-haly-2x3", price: 650, unit: "piece", fiber: "Highland wool, natural dyes", technique: "Hand-knotted, kepse göl pattern", badge: "Heritage", stock: 5, delivery: "Ships in 7 days", storeId: turkmenhaly!.id, categoryId: carpetCat.id, img: IMG.carpet4 },
    { name: "Yomut Haly 3×4m", slug: "yomut-haly-3x4", price: 900, unit: "piece", fiber: "Highland wool, indigo and madder", technique: "Hand-knotted, 120k knots/m²", badge: "Classic", stock: 4, delivery: "Ships in 10 days", storeId: turkmenhaly!.id, categoryId: carpetCat.id, img: IMG.carpet3 },
    { name: "Ersari Haly 2×3m", slug: "ersari-haly-2x3", price: 700, unit: "piece", fiber: "Dark-dyed wool", technique: "Hand-knotted, Ersari göl pattern", badge: "Heritage", stock: 4, delivery: "Ships in 7 days", storeId: turkmenhaly!.id, categoryId: carpetCat.id, img: IMG.carpet5 },
    { name: "Salor Haly (Collector)", slug: "salor-haly", price: 2500, unit: "piece", fiber: "Fine hand-spun wool, silk highlights", technique: "Hand-knotted, 250k+ knots/m²", badge: "Gallery", stock: 2, delivery: "Made to order", storeId: turkmenhaly!.id, categoryId: carpetCat.id, isFeatured: true, img: IMG.trapping },
    { name: "Ýüpek Haly (Silk Carpet)", slug: "yupek-haly", price: 3200, unit: "piece", fiber: "Pure mulberry silk", technique: "Hand-knotted, silk on silk", badge: "Luxury", stock: 1, delivery: "Made to order", storeId: turkmenhaly!.id, categoryId: carpetCat.id, isFeatured: true, img: IMG.carpet2 },
    { name: "Palas (Flatweave)", slug: "palas-flatweave", price: 300, unit: "piece", fiber: "Wool, natural dyes", technique: "Flatweave, geometric pattern", badge: "Affordable", stock: 12, delivery: "Ships in 3 days", storeId: turkmenhaly!.id, categoryId: kilimCat.id, img: IMG.kilim1 },
    { name: "Torba (Carpet Bag)", slug: "torba-bag", price: 250, unit: "piece", fiber: "Hand-spun wool", technique: "Hand-knotted, Tekke göl", badge: "Authentic", stock: 8, delivery: "Ships in 5 days", storeId: turkmenhaly!.id, categoryId: carpetCat.id, img: IMG.bag1 },
    { name: "Çuwal (Storage Bag)", slug: "chuwal-bag", price: 350, unit: "piece", fiber: "Wool with cotton backing", technique: "Hand-knotted pile face", badge: "Heritage", stock: 5, delivery: "Ships in 5 days", storeId: turkmenhaly!.id, categoryId: carpetCat.id, img: IMG.chuval },
    { name: "Namazlyk (Prayer Rug)", slug: "namazlyk", price: 400, unit: "piece", fiber: "Fine wool, silk border", technique: "Hand-knotted, mihrab design", badge: "Sacred", stock: 7, delivery: "Ships in 5 days", storeId: turkmenhaly!.id, categoryId: carpetCat.id, img: IMG.kilim2 },

    // ─── Türkmenbaşy Dokma Toplumy (8 products — Fabrics/Clothing) ───
    { name: "Jacquard Fabric", slug: "jacquard-fabric", price: 25, unit: "meter", fiber: "100% Turkmen cotton", technique: "Jacquard loom weaving", badge: "Premium", stock: 200, delivery: "Ready to ship", storeId: tbDokma!.id, categoryId: cottonCat.id, img: IMG.silk2 },
    { name: "Cotton Dress Fabric", slug: "cotton-dress-fabric", price: 12, unit: "meter", fiber: "100% cotton, plain weave", technique: "Power loom, pre-shrunk", badge: null, stock: 500, delivery: "Ready to ship", storeId: tbDokma!.id, categoryId: cottonCat.id, img: IMG.silk3 },
    { name: "Men's Cotton Shirt", slug: "mens-cotton-shirt", price: 35, unit: "piece", fiber: "100% Turkmen cotton", technique: "Machine-sewn, quality finish", badge: "New", stock: 100, delivery: "Ready to ship", storeId: tbDokma!.id, categoryId: clothingCat.id, img: IMG.clothing },
    { name: "Women's Cotton Dress", slug: "womens-cotton-dress", price: 55, unit: "piece", fiber: "Cotton with jacquard pattern", technique: "Machine-sewn", badge: "Popular", stock: 80, delivery: "Ready to ship", storeId: tbDokma!.id, categoryId: clothingCat.id, img: IMG.silk1 },
    { name: "Towel Set (4 pieces)", slug: "towel-set-4", price: 28, unit: "set", fiber: "100% cotton terry", technique: "Dobby loom, hemmed edges", badge: null, stock: 150, delivery: "Ready to ship", storeId: tbDokma!.id, categoryId: homeCat.id, img: IMG.throw },
    { name: "Bedding Set (Double)", slug: "bedding-set-double", price: 65, unit: "set", fiber: "Cotton sateen, 200 thread count", technique: "Machine-woven sateen", badge: "Comfort", stock: 60, delivery: "Ready to ship", storeId: tbDokma!.id, categoryId: homeCat.id, img: IMG.pillow },
    { name: "Cotton Tablecloth", slug: "cotton-tablecloth", price: 18, unit: "piece", fiber: "Cotton with decorative border", technique: "Jacquard border pattern", badge: null, stock: 120, delivery: "Ready to ship", storeId: tbDokma!.id, categoryId: homeCat.id, img: IMG.kilim1 },
    { name: "Cotton Fabric (Plain)", slug: "cotton-fabric-plain", price: 8, unit: "meter", fiber: "100% cotton, bleached", technique: "Power loom weaving", badge: null, stock: 1000, delivery: "Ready to ship", storeId: tbDokma!.id, categoryId: cottonCat.id, img: IMG.silk3 },

    // ─── Türkmenbaşy Jins Toplumy (8 products — Denim) ───
    { name: "Men's Classic Jeans", slug: "mens-jeans", price: 40, unit: "piece", fiber: "Cotton denim, 12 oz", technique: "Selvedge denim, riveted", badge: "Bestseller", stock: 200, delivery: "Ready to ship", storeId: tbJins!.id, categoryId: denimCat.id, img: IMG.clothing },
    { name: "Women's Slim Jeans", slug: "womens-jeans", price: 38, unit: "piece", fiber: "Cotton denim with elastane", technique: "Stretch denim, fitted cut", badge: "Popular", stock: 180, delivery: "Ready to ship", storeId: tbJins!.id, categoryId: denimCat.id, img: IMG.clothing },
    { name: "Denim Jacket", slug: "denim-jacket", price: 55, unit: "piece", fiber: "Heavy cotton denim, 14 oz", technique: "Classic trucker cut", badge: "New", stock: 90, delivery: "Ready to ship", storeId: tbJins!.id, categoryId: denimCat.id, img: IMG.clothing },
    { name: "Kids Jeans", slug: "kids-jeans", price: 22, unit: "piece", fiber: "Soft cotton denim", technique: "Reinforced knees", badge: null, stock: 150, delivery: "Ready to ship", storeId: tbJins!.id, categoryId: denimCat.id, img: IMG.clothing },
    { name: "Denim Shorts", slug: "denim-shorts", price: 25, unit: "piece", fiber: "Cotton denim, 10 oz", technique: "Pre-washed, cuffed hem", badge: null, stock: 120, delivery: "Ready to ship", storeId: tbJins!.id, categoryId: denimCat.id, img: IMG.clothing },
    { name: "Denim Shirt", slug: "denim-shirt", price: 32, unit: "piece", fiber: "Light cotton chambray", technique: "Western-style stitching", badge: null, stock: 100, delivery: "Ready to ship", storeId: tbJins!.id, categoryId: denimCat.id, img: IMG.clothing },
    { name: "Denim Skirt", slug: "denim-skirt", price: 30, unit: "piece", fiber: "Cotton denim with elastane", technique: "A-line cut", badge: "New", stock: 80, delivery: "Ready to ship", storeId: tbJins!.id, categoryId: denimCat.id, img: IMG.clothing },
    { name: "Denim Overalls", slug: "denim-overalls", price: 48, unit: "piece", fiber: "Heavy cotton denim", technique: "Adjustable straps, tool pockets", badge: null, stock: 50, delivery: "Ready to ship", storeId: tbJins!.id, categoryId: denimCat.id, img: IMG.clothing },

    // ─── Mary Keteni Ussahanasy (8 products — Silk) ───
    { name: "Gyrmyzy Keteni (Red Bridal)", slug: "gyrmyzy-keteni", price: 280, unit: "piece", fiber: "Mulberry silk, madder-dyed crimson", technique: "Traditional satin-weave loom", badge: "Bridal", stock: 10, delivery: "Ships in 5 days", storeId: maryKeteni!.id, categoryId: silkCat.id, isFeatured: true, img: IMG.silk1 },
    { name: "Ýaşyl Keteni (Green)", slug: "yashyl-keteni", price: 220, unit: "piece", fiber: "Mulberry silk, natural green dye", technique: "Traditional satin-weave loom", badge: "Festival", stock: 12, delivery: "Ships in 5 days", storeId: maryKeteni!.id, categoryId: silkCat.id, img: IMG.silk2 },
    { name: "Keteni Scarf", slug: "keteni-scarf", price: 75, unit: "piece", fiber: "Pure mulberry silk", technique: "Hand-woven, fringed edges", badge: "Gift", stock: 30, delivery: "Ready to ship", storeId: maryKeteni!.id, categoryId: accessoriesCat.id, img: IMG.scarf2 },
    { name: "Bridal Robe (Gelin Dony)", slug: "gelin-dony", price: 500, unit: "piece", fiber: "Keteni silk with gold thread", technique: "Traditional cut, hand-finished", badge: "Bridal", stock: 5, delivery: "Made to order", storeId: maryKeteni!.id, categoryId: silkCat.id, isFeatured: true, img: IMG.silk1 },
    { name: "Silk Table Runner", slug: "silk-table-runner", price: 120, unit: "piece", fiber: "Two-ply mulberry silk", technique: "Jacquard pattern weaving", badge: "Home", stock: 20, delivery: "Ships in 3 days", storeId: maryKeteni!.id, categoryId: homeCat.id, img: IMG.silk2 },
    { name: "Ak Keteni (White)", slug: "ak-keteni", price: 200, unit: "piece", fiber: "Unbleached mulberry silk", technique: "Satin-weave, natural luster", badge: "Elegant", stock: 15, delivery: "Ships in 5 days", storeId: maryKeteni!.id, categoryId: silkCat.id, img: IMG.silk3 },
    { name: "Keteni Handbag", slug: "keteni-handbag", price: 90, unit: "piece", fiber: "Keteni silk with cotton lining", technique: "Hand-sewn, traditional pattern", badge: "Gift", stock: 25, delivery: "Ready to ship", storeId: maryKeteni!.id, categoryId: accessoriesCat.id, img: IMG.bag2 },
    { name: "Keteni Pillow Cover", slug: "keteni-pillow-cover", price: 45, unit: "piece", fiber: "Keteni silk face, cotton back", technique: "Envelope closure, hand-finished", badge: null, stock: 40, delivery: "Ready to ship", storeId: maryKeteni!.id, categoryId: homeCat.id, img: IMG.pillow },

    // ─── Aşgabat Dokma Toplumy (6 products — Cotton) ───
    { name: "Cotton Fabric (Ashgabat)", slug: "ashgabat-cotton-fabric", price: 10, unit: "meter", fiber: "100% Turkmen cotton", technique: "Power loom weaving", badge: null, stock: 800, delivery: "Ready to ship", storeId: ashDokma!.id, categoryId: cottonCat.id, img: IMG.silk3 },
    { name: "Men's T-Shirt", slug: "mens-tshirt", price: 15, unit: "piece", fiber: "Cotton jersey knit", technique: "Cut and sew, overlock finish", badge: null, stock: 300, delivery: "Ready to ship", storeId: ashDokma!.id, categoryId: clothingCat.id, img: IMG.clothing },
    { name: "Women's Blouse", slug: "womens-blouse", price: 20, unit: "piece", fiber: "Cotton poplin", technique: "Machine-sewn, pearl buttons", badge: "New", stock: 100, delivery: "Ready to ship", storeId: ashDokma!.id, categoryId: clothingCat.id, img: IMG.clothing },
    { name: "Cotton Towel", slug: "cotton-towel", price: 8, unit: "piece", fiber: "100% cotton terry", technique: "Loop pile weaving", badge: null, stock: 500, delivery: "Ready to ship", storeId: ashDokma!.id, categoryId: homeCat.id, img: IMG.throw },
    { name: "Workwear Set", slug: "workwear-set", price: 30, unit: "set", fiber: "Heavy-duty cotton twill", technique: "Reinforced seams", badge: null, stock: 80, delivery: "Ready to ship", storeId: ashDokma!.id, categoryId: clothingCat.id, img: IMG.clothing },
    { name: "Cotton Blanket", slug: "cotton-blanket", price: 35, unit: "piece", fiber: "Cotton waffle weave", technique: "Thermal weave pattern", badge: "Comfort", stock: 60, delivery: "Ready to ship", storeId: ashDokma!.id, categoryId: homeCat.id, img: IMG.kilim1 },

    // ─── Ruhabat Dokma Toplumy (5 products — Yarn & Fabrics) ───
    { name: "Cotton Yarn (1 kg)", slug: "ruhabat-yarn-1kg", price: 12, unit: "kg", fiber: "100% Turkmen cotton, ring-spun", technique: "Ring spinning, Ne 30/1", badge: null, stock: 500, delivery: "Ready to ship", storeId: ruhabat!.id, categoryId: cottonCat.id, img: IMG.shawl },
    { name: "Dyed Cotton Fabric", slug: "ruhabat-dyed-fabric", price: 14, unit: "meter", fiber: "Cotton, reactive-dyed", technique: "Dyed and finished", badge: null, stock: 600, delivery: "Ready to ship", storeId: ruhabat!.id, categoryId: cottonCat.id, img: IMG.silk2 },
    { name: "Undyed Cotton Fabric", slug: "ruhabat-undyed-fabric", price: 9, unit: "meter", fiber: "100% cotton, greige", technique: "Power loom, unfinished", badge: null, stock: 800, delivery: "Ready to ship", storeId: ruhabat!.id, categoryId: cottonCat.id, img: IMG.silk3 },
    { name: "Heavy Cotton Canvas", slug: "ruhabat-canvas", price: 16, unit: "meter", fiber: "Cotton canvas, 10 oz", technique: "Tight plain weave", badge: null, stock: 300, delivery: "Ready to ship", storeId: ruhabat!.id, categoryId: cottonCat.id, img: IMG.throw },
    { name: "Yarn Bundle (5 kg)", slug: "ruhabat-yarn-5kg", price: 50, unit: "bundle", fiber: "100% Turkmen cotton yarn", technique: "Ring-spun, various counts", badge: "Value", stock: 200, delivery: "Ready to ship", storeId: ruhabat!.id, categoryId: cottonCat.id, img: IMG.shawl },

    // ─── Babadaýhan Dokma Toplumy (4 products) ───
    { name: "Cotton Textile (Babadaýhan)", slug: "babadayhan-fabric", price: 11, unit: "meter", fiber: "Ahal province cotton", technique: "Power loom weaving", badge: null, stock: 400, delivery: "Ready to ship", storeId: babadayhan!.id, categoryId: cottonCat.id, img: IMG.silk3 },
    { name: "Cotton Yarn (Babadaýhan)", slug: "babadayhan-yarn", price: 10, unit: "kg", fiber: "100% cotton, combed", technique: "Open-end spinning", badge: null, stock: 600, delivery: "Ready to ship", storeId: babadayhan!.id, categoryId: cottonCat.id, img: IMG.shawl },
    { name: "Hand Towel Set", slug: "babadayhan-towel-set", price: 15, unit: "set", fiber: "Cotton terry, 3 pieces", technique: "Loop pile weaving", badge: null, stock: 200, delivery: "Ready to ship", storeId: babadayhan!.id, categoryId: homeCat.id, img: IMG.throw },
    { name: "Bath Towel (Large)", slug: "babadayhan-bath-towel", price: 12, unit: "piece", fiber: "100% cotton terry, 500 GSM", technique: "Double-loop pile", badge: null, stock: 300, delivery: "Ready to ship", storeId: babadayhan!.id, categoryId: homeCat.id, img: IMG.throw },

    // ─── Kaka Dokma Toplumy (4 products) ───
    { name: "Cotton Fabric (Kaka)", slug: "kaka-fabric", price: 10, unit: "meter", fiber: "100% Ahal cotton", technique: "Power loom weaving", badge: null, stock: 500, delivery: "Ready to ship", storeId: kaka!.id, categoryId: cottonCat.id, img: IMG.silk3 },
    { name: "Bedding Fabric", slug: "kaka-bedding-fabric", price: 14, unit: "meter", fiber: "Cotton percale", technique: "Tight weave, 180 TC", badge: null, stock: 300, delivery: "Ready to ship", storeId: kaka!.id, categoryId: cottonCat.id, img: IMG.pillow },
    { name: "Cotton Yarn (Kaka)", slug: "kaka-yarn", price: 11, unit: "kg", fiber: "100% cotton, ring-spun", technique: "Ring spinning, Ne 20/1", badge: null, stock: 400, delivery: "Ready to ship", storeId: kaka!.id, categoryId: cottonCat.id, img: IMG.shawl },
    { name: "Children's Clothing Fabric", slug: "kaka-childrens-fabric", price: 9, unit: "meter", fiber: "Soft cotton, pre-shrunk", technique: "Brushed cotton finish", badge: null, stock: 250, delivery: "Ready to ship", storeId: kaka!.id, categoryId: cottonCat.id, img: IMG.silk3 },

    // ─── Daşoguz "Serdar" (4 products — Yarn) ───
    { name: "Thick Cotton Yarn (Serdar)", slug: "serdar-thick-yarn", price: 13, unit: "kg", fiber: "100% Daşoguz cotton", technique: "Open-end spinning, Ne 12/1", badge: null, stock: 600, delivery: "Ready to ship", storeId: dashoguz!.id, categoryId: cottonCat.id, img: IMG.shawl },
    { name: "Fine Cotton Yarn (Serdar)", slug: "serdar-fine-yarn", price: 15, unit: "kg", fiber: "100% combed cotton", technique: "Ring spinning, Ne 40/1", badge: "Premium", stock: 400, delivery: "Ready to ship", storeId: dashoguz!.id, categoryId: cottonCat.id, img: IMG.shawl },
    { name: "Export Yarn (Serdar)", slug: "serdar-export-yarn", price: 18, unit: "kg", fiber: "Export-grade combed cotton", technique: "Compact spinning", badge: "Export", stock: 300, delivery: "Ships in 3 days", storeId: dashoguz!.id, categoryId: cottonCat.id, img: IMG.shawl },
    { name: "Dyed Yarn (Serdar)", slug: "serdar-dyed-yarn", price: 16, unit: "kg", fiber: "Reactive-dyed cotton yarn", technique: "Ring-spun, vat-dyed", badge: null, stock: 350, delivery: "Ready to ship", storeId: dashoguz!.id, categoryId: cottonCat.id, img: IMG.scarf2 },

    // ─── Halaç Pagta Egirme Fabrigi (4 products — Yarn) ───
    { name: "Cotton Yarn (Halaç)", slug: "halach-yarn", price: 12, unit: "kg", fiber: "100% Lebap cotton", technique: "Ring spinning", badge: null, stock: 500, delivery: "Ready to ship", storeId: halach!.id, categoryId: cottonCat.id, img: IMG.shawl },
    { name: "Export Cotton Yarn (Halaç)", slug: "halach-export-yarn", price: 17, unit: "kg", fiber: "Fine combed cotton", technique: "Compact spinning, export grade", badge: "Export", stock: 300, delivery: "Ships in 3 days", storeId: halach!.id, categoryId: cottonCat.id, img: IMG.shawl },
    { name: "Thick Yarn (Halaç)", slug: "halach-thick-yarn", price: 14, unit: "kg", fiber: "100% cotton, carded", technique: "Open-end spinning, Ne 10/1", badge: null, stock: 400, delivery: "Ready to ship", storeId: halach!.id, categoryId: cottonCat.id, img: IMG.shawl },
    { name: "Weaving Yarn (Halaç)", slug: "halach-weaving-yarn", price: 13, unit: "kg", fiber: "100% cotton, plied", technique: "Twisted, 2-ply yarn", badge: null, stock: 350, delivery: "Ready to ship", storeId: halach!.id, categoryId: cottonCat.id, img: IMG.shawl },

    // ─── Balkandokma (4 products — Italian tech yarn) ───
    { name: "Premium Yarn (Balkandokma)", slug: "balkan-premium-yarn", price: 20, unit: "kg", fiber: "100% Balkan cotton", technique: "Italian spinning technology", badge: "Premium", stock: 400, delivery: "Ready to ship", storeId: balkan!.id, categoryId: cottonCat.id, img: IMG.shawl },
    { name: "Fine Yarn (Balkandokma)", slug: "balkan-fine-yarn", price: 22, unit: "kg", fiber: "Combed cotton, extra fine", technique: "Italian compact spinning, Ne 50/1", badge: "Premium", stock: 300, delivery: "Ready to ship", storeId: balkan!.id, categoryId: cottonCat.id, img: IMG.scarf2 },
    { name: "Export Yarn (Balkandokma)", slug: "balkan-export-yarn", price: 25, unit: "kg", fiber: "Premium export-grade cotton", technique: "Italian tech, quality certified", badge: "Export", stock: 250, delivery: "Ships in 3 days", storeId: balkan!.id, categoryId: cottonCat.id, img: IMG.shawl },
    { name: "Specialty Yarn (Balkandokma)", slug: "balkan-specialty-yarn", price: 28, unit: "kg", fiber: "Mercerized cotton blend", technique: "Italian finishing technology", badge: "Specialty", stock: 150, delivery: "Ships in 5 days", storeId: balkan!.id, categoryId: cottonCat.id, img: IMG.shawl },

    // ─── Türkmen Jorap Dokma (5 products — Hosiery) ───
    { name: "Men's Socks (5-Pack)", slug: "mens-socks-5", price: 12, unit: "pack", fiber: "Cotton blend, reinforced heel", technique: "Circular knitting", badge: null, stock: 300, delivery: "Ready to ship", storeId: jorap!.id, categoryId: clothingCat.id, img: IMG.clothing },
    { name: "Women's Socks (5-Pack)", slug: "womens-socks-5", price: 12, unit: "pack", fiber: "Cotton blend, assorted colors", technique: "Circular knitting", badge: null, stock: 300, delivery: "Ready to ship", storeId: jorap!.id, categoryId: clothingCat.id, img: IMG.clothing },
    { name: "Kids Socks (5-Pack)", slug: "kids-socks-5", price: 8, unit: "pack", fiber: "Soft cotton blend", technique: "Seamless toe knitting", badge: null, stock: 400, delivery: "Ready to ship", storeId: jorap!.id, categoryId: clothingCat.id, img: IMG.clothing },
    { name: "Sport Socks (3-Pack)", slug: "sport-socks-3", price: 15, unit: "pack", fiber: "Cotton-polyester blend, cushioned", technique: "Terry loop knitting", badge: "Sport", stock: 200, delivery: "Ready to ship", storeId: jorap!.id, categoryId: clothingCat.id, img: IMG.clothing },
    { name: "National Pattern Socks", slug: "national-pattern-socks", price: 18, unit: "pair", fiber: "Merino wool blend", technique: "Jacquard knitting, Turkmen motifs", badge: "Gift", stock: 100, delivery: "Ready to ship", storeId: jorap!.id, categoryId: accessoriesCat.id, img: IMG.scarf3 },
  ];

  for (const product of products) {
    const { img, ...productData } = product;
    await prisma.product.upsert({
      where: { slug: productData.slug },
      update: {},
      create: {
        ...productData,
        description: `${productData.fiber}. ${productData.technique}.`,
        isFeatured: productData.isFeatured ?? false,
        badge: productData.badge ?? null,
      },
    });
  }
  console.log("✅ Created", products.length, "products");

  // ═══════════════════════════════════════════
  // PRODUCT IMAGES
  // ═══════════════════════════════════════════
  for (const product of products) {
    const dbProduct = await prisma.product.findUnique({ where: { slug: product.slug } });
    if (dbProduct) {
      await prisma.productImage.create({
        data: {
          productId: dbProduct.id,
          path: product.img,
          alt: product.name,
          isPrimary: true,
        },
      });
    }
  }
  console.log("✅ Created", products.length, "product images");

  console.log("🎉 Seeding complete!");
  console.log(`   📦 ${storesData.length} stores`);
  console.log(`   📁 ${categories.length} categories`);
  console.log(`   🏷️  ${products.length} products`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
