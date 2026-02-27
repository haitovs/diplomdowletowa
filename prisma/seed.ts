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
      create: { name: "Halylar", slug: "carpets", description: "Türkmen el halylary" },
    }),
    prisma.category.upsert({
      where: { slug: "silks" },
      update: {},
      create: { name: "Ýüpek önümleri", slug: "silks", description: "Keteni we ýüpek matalar" },
    }),
    prisma.category.upsert({
      where: { slug: "kilims" },
      update: {},
      create: { name: "Kilimler", slug: "kilims", description: "Palas we düz dokalan önümler" },
    }),
    prisma.category.upsert({
      where: { slug: "accessories" },
      update: {},
      create: { name: "Esbaplar", slug: "accessories", description: "Ýaglyklar, torbalar we beýleki esbaplar" },
    }),
    prisma.category.upsert({
      where: { slug: "denim" },
      update: {},
      create: { name: "Jins önümleri", slug: "denim", description: "Jins balaklar, kurtka we eşikler" },
    }),
    prisma.category.upsert({
      where: { slug: "cotton" },
      update: {},
      create: { name: "Pagta önümleri", slug: "cotton", description: "Pagta matalary, ýüplük we dokma önümleri" },
    }),
    prisma.category.upsert({
      where: { slug: "clothing" },
      update: {},
      create: { name: "Eşikler", slug: "clothing", description: "Adaty we häzirki zaman eşikleri" },
    }),
    prisma.category.upsert({
      where: { slug: "home-textiles" },
      update: {},
      create: { name: "Öý tekstili", slug: "home-textiles", description: "Polotensalar, ýorgan-düşek we saçak önümleri" },
    }),
  ]);
  console.log("✅ Created", categories.length, "categories");

  const [carpetCat, silkCat, kilimCat, accessoriesCat, denimCat, cottonCat, clothingCat, homeCat] = categories;

  // ═══════════════════════════════════════════
  // STORES (12 real Turkmen companies with real data)
  // ═══════════════════════════════════════════
  const storesData = [
    {
      name: "Türkmenhaly",
      slug: "turkmenhaly",
      origin: "Aşgabat",
      specialty: "El halylary, palas we sowgatlyk önümler",
      description: "1924-nji ýylda döredilen döwlet birleşigi. Ähli 5 welaýatda 8 kärhanasy we 100-den gowrak ussahanasy bolup, 5000-den gowrak halyçyny birleşdirýär. ÝUNESKO tarapyndan ykrar edilen türkmen haly sungatyny goraýar.",
    },
    {
      name: "Aşgabat Dokma Toplumy",
      slug: "ashgabat-dokma",
      origin: "Aşgabat",
      specialty: "Pagta ýüplük, mata, polotensa we öý tekstili",
      description: "2007-nji ýylda gurlan, 37 gektarlyk meýdanda ýerleşýän iri dokma toplumy. Ýylda 13,100 tonna ýüplük we 22,5 million inedördül metr mata öndürýär. «Goza» brendini çykarýar. 2800-den gowrak işgäri bar.",
    },
    {
      name: "Türkmenbaşy Dokma Toplumy",
      slug: "turkmenbashy-dokma",
      origin: "Aşgabat",
      specialty: "Pagta ýüplük, matalar we taýýar eşikler",
      description: "21,5 gektarlyk meýdanda ýerleşýän iri dokma toplumy. Ýylda 9000 tonna ýüplük, 17,000 inedördül metr mata we 1,875 million eşik öndürýär. «Nusaý» brendini çykarýar. ABŞ, Ispaniýa, Türkiýe, Russiýa we beýleki ýurtlara eksport edýär.",
    },
    {
      name: "Türkmenbaşy Jins Toplumy",
      slug: "turkmenbashy-jins",
      origin: "Aşgabat",
      specialty: "Jins matalar, balaklar, köýnekler we kurtkalar",
      description: "1996-njy ýylda döredilen Türkmenistanyň öňdebaryjy jins öndürijisi. Aýda 130,000-den gowrak önüm, ýylda 1,56 million haryt öndürýär. «Bedew Jeans» brendini çykarýar. LC Waikiki, Colins we Tvoe bilen hyzmatdaşlyk edýär.",
    },
    {
      name: "Gökdepe Dokma Toplumy",
      slug: "gokdepe-dokma",
      origin: "Gökdepe, Ahal",
      specialty: "Pagta ýüplük, trikotaž matalar we taýýar eşikler",
      description: "1995-nji ýylda döredilen, Ahal welaýatyndaky iri dokma toplumy. Ýylda 4900 tonna ýüplük, 4700 tonna trikotaž mata we 2700 sany eşik öndürýär. «Gala» brendini çykarýar.",
    },
    {
      name: "Kaka Dokma Toplumy",
      slug: "kaka-dokma",
      origin: "Kaka, Ahal",
      specialty: "Pagta ýüplük, matalar we taýýar eşikler",
      description: "Şweýsariýa tehnologiýasy bilen enjamlaşdyrylan dokma toplumy. Ýylda 3650 tonna ýüplük, 12 million inedördül metr mata we 1,2 million eşik öndürýär. «Jeýtun» brendini çykarýar. ISO 9001, OEKO-TEX sertifikatly.",
    },
    {
      name: "Babadaýhan Dokma Toplumy",
      slug: "babadayhan-dokma",
      origin: "Babadaýhan, Ahal",
      specialty: "Eşikler we ýorgan-düşek toplumlary",
      description: "Ahal welaýatyndaky dokma toplumy. Klassik we sport görnüşli eşikleri, ýorgan-düşek toplumlaryny öndürýär. «Mäne» brendini çykarýar. Halkara standartlaryna laýyk ekologiýa taýdan arassa önümler.",
    },
    {
      name: "Balkandokma",
      slug: "balkandokma",
      origin: "Gyzylarbat, Balkan",
      specialty: "Pagta ýüplük (Italiýa tehnologiýasy)",
      description: "20,000 inedördül metrlik meýdanda ýerleşýän häzirki zaman ýüplük öndüriji. Italiýanyň «Savio» we «Marzoli» enjamlary bilen enjamlaşdyrylan. 2024-nji ýylda 4210 tonna ýüplük öndürdi (135 million manat).",
    },
    {
      name: "Daşoguz «Serdar» Pagta Egirme Fabrigi",
      slug: "dashoguz-serdar",
      origin: "Daşoguz",
      specialty: "Pagta ýüplük önümçiligi",
      description: "Ýylda 16,600 tonnadan gowrak pagta süýümini gaýtadan işleýän, 14,500 tonna ýüplük öndürýän fabrik. «Ring» brendini çykarýar. ISO 9001, ISO 14001 sertifikatly. Russiýa, Türkiýe, BAE we Gazagystana eksport edýär.",
    },
    {
      name: "Halaç Pagta Egirme Fabrigi",
      slug: "halach-fabrik",
      origin: "Halaç, Lebap",
      specialty: "Pagta ýüplük we eksport önümleri",
      description: "1993-nji ýylda gurluşygyna başlanan, 2005-nji ýylda doly güýjüne çykan pagta egirme fabrigi. 5 görnüşli ýüplük öndürýär. Russiýa, Türkiýe we Polşa eksport edýär.",
    },
    {
      name: "Türkmen Jorap Dokma",
      slug: "turkmen-jorap",
      origin: "Abadan, Ahal",
      specialty: "Joraplar, taýtlar we trikotaž önümler",
      description: "Italiýanyň we Türkiýäniň trikotaž enjamlary bilen enjamlaşdyrylan jorap we trikotaž öndürijisi. Erkekler, zenanlar we çagalar üçin jorap öndürýär. Çig mal: pagta, zygyr, likra.",
    },
    {
      name: "Baýramaly Dokma Toplumy",
      slug: "bayramaly-dokma",
      origin: "Baýramaly, Mary",
      specialty: "Pagta ýüplük, matalar we eşikler",
      description: "2002-nji ýylda döredilen Mary welaýatyndaky iri dokma toplumy. Pagta ýüplük, çig we boýalan pagta matalaryny, taýýar pagta önümlerini we eşikleri öndürýär. «Merw» brendini çykarýar.",
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
  const ashDokma = await prisma.store.findUnique({ where: { slug: "ashgabat-dokma" } });
  const tbDokma = await prisma.store.findUnique({ where: { slug: "turkmenbashy-dokma" } });
  const tbJins = await prisma.store.findUnique({ where: { slug: "turkmenbashy-jins" } });
  const gokdepe = await prisma.store.findUnique({ where: { slug: "gokdepe-dokma" } });
  const kaka = await prisma.store.findUnique({ where: { slug: "kaka-dokma" } });
  const babadayhan = await prisma.store.findUnique({ where: { slug: "babadayhan-dokma" } });
  const balkan = await prisma.store.findUnique({ where: { slug: "balkandokma" } });
  const dashoguz = await prisma.store.findUnique({ where: { slug: "dashoguz-serdar" } });
  const halach = await prisma.store.findUnique({ where: { slug: "halach-fabrik" } });
  const jorap = await prisma.store.findUnique({ where: { slug: "turkmen-jorap" } });
  const bayramaly = await prisma.store.findUnique({ where: { slug: "bayramaly-dokma" } });

  // ═══════════════════════════════════════════
  // PRODUCTS (36 — 3 per company, prices in TMT)
  // 1 USD ≈ 3.5 TMT
  // ═══════════════════════════════════════════

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
    // ─── Türkmenhaly (3 products) ─────────
    { name: "Tekke Haly 2×3m", slug: "tekke-haly-2x3", price: 1680, unit: "sany", fiber: "El ýüplük, tebigy boýag", technique: "El dokalgan, 160 müň düwün/m²", badge: "Klassik", stock: 6, delivery: "7 günde iberilýär", storeId: turkmenhaly!.id, categoryId: carpetCat.id, isFeatured: true, img: IMG.carpet1 },
    { name: "Yomut Haly 2×3m", slug: "yomut-haly-2x3", price: 1470, unit: "sany", fiber: "Dag ýüňi, tebigy boýag", technique: "El dokalgan, kepse göl nagşy", badge: "Miras", stock: 5, delivery: "7 günde iberilýär", storeId: turkmenhaly!.id, categoryId: carpetCat.id, isFeatured: true, img: IMG.carpet4 },
    { name: "Namazlyk", slug: "namazlyk", price: 980, unit: "sany", fiber: "Ýüň, ýüpek gyra", technique: "El dokalgan, mährap nagşy", badge: "Miras", stock: 7, delivery: "5 günde iberilýär", storeId: turkmenhaly!.id, categoryId: carpetCat.id, img: IMG.kilim2 },

    // ─── Aşgabat Dokma Toplumy / «Goza» (3 products) ───
    { name: "Pagta ýüplük (1 kg)", slug: "adt-yupluk-1kg", price: 8, unit: "kg", fiber: "100% türkmen pagtasy", technique: "Halka egirme, Ne 30/1", badge: null, stock: 500, delivery: "Ibermäge taýýar", storeId: ashDokma!.id, categoryId: cottonCat.id, img: IMG.scarf1 },
    { name: "Polotensa toplumy (4 sany)", slug: "adt-polotensa-4", price: 42, unit: "toplum", fiber: "100% pagta mahmal, 500 GSM", technique: "Ilmekli dokma", badge: null, stock: 150, delivery: "Ibermäge taýýar", storeId: ashDokma!.id, categoryId: homeCat.id, img: IMG.throw },
    { name: "Düşek-ýorgan toplumy", slug: "adt-dusek-yorgan", price: 85, unit: "toplum", fiber: "Pagta satin, 200 sap sany", technique: "Maşyn dokalan satin", badge: "Rahat", stock: 60, delivery: "Ibermäge taýýar", storeId: ashDokma!.id, categoryId: homeCat.id, img: IMG.pillow },

    // ─── Türkmenbaşy Dokma Toplumy / «Nusaý» (3 products) ───
    { name: "Žakkard mata", slug: "nusay-jakkard", price: 25, unit: "metr", fiber: "100% türkmen pagtasy", technique: "Žakkard dokma", badge: "Ýokary hil", stock: 200, delivery: "Ibermäge taýýar", storeId: tbDokma!.id, categoryId: cottonCat.id, img: IMG.silk2 },
    { name: "Erkek pagta köýnek", slug: "nusay-erkek-koynek", price: 50, unit: "sany", fiber: "100% türkmen pagtasy", technique: "Maşyn tikilen", badge: "Täze", stock: 100, delivery: "Ibermäge taýýar", storeId: tbDokma!.id, categoryId: clothingCat.id, img: IMG.clothing },
    { name: "Zenan pagta köýnegi", slug: "nusay-zenan-koynek", price: 75, unit: "sany", fiber: "Žakkard nagşly pagta", technique: "Maşyn tikilen", badge: "Meşhur", stock: 80, delivery: "Ibermäge taýýar", storeId: tbDokma!.id, categoryId: clothingCat.id, img: IMG.silk1 },

    // ─── Türkmenbaşy Jins Toplumy / «Bedew Jeans» (3 products) ───
    { name: "Erkek jins balak", slug: "bedew-erkek-jins", price: 75, unit: "sany", fiber: "Pagta jins, 12 oz", technique: "Selweji jins, perçinli", badge: "Iň köp satylýan", stock: 200, delivery: "Ibermäge taýýar", storeId: tbJins!.id, categoryId: denimCat.id, isFeatured: true, img: IMG.clothing },
    { name: "Zenan jins balak", slug: "bedew-zenan-jins", price: 75, unit: "sany", fiber: "Pagta jins, 2% likra", technique: "Elastik jins, dar biçüw", badge: "Meşhur", stock: 180, delivery: "Ibermäge taýýar", storeId: tbJins!.id, categoryId: denimCat.id, img: IMG.scarf1 },
    { name: "Jins kurtka", slug: "bedew-jins-kurtka", price: 90, unit: "sany", fiber: "Agyr pagta jins, 14 oz", technique: "Klassik traker biçüwi", badge: "Täze", stock: 90, delivery: "Ibermäge taýýar", storeId: tbJins!.id, categoryId: denimCat.id, img: IMG.bag1 },

    // ─── Gökdepe Dokma Toplumy / «Gala» (3 products) ───
    { name: "Erkek sport kostýumy", slug: "gala-sport-kostyum", price: 120, unit: "sany", fiber: "Pagta trikotaž", technique: "Trikotaž dokma we tikmek", badge: "Sport", stock: 100, delivery: "Ibermäge taýýar", storeId: gokdepe!.id, categoryId: clothingCat.id, img: IMG.scarf3 },
    { name: "Çaga ýyly içki eşik", slug: "gala-caga-esik", price: 45, unit: "sany", fiber: "Ýumşak pagta trikotaž", technique: "Trikotaž dokma", badge: null, stock: 200, delivery: "Ibermäge taýýar", storeId: gokdepe!.id, categoryId: clothingCat.id, img: IMG.carpet6 },
    { name: "Ýelek", slug: "gala-yelek", price: 85, unit: "sany", fiber: "Pagta trikotaž, sintepon", technique: "Maşyn tikilen", badge: "Täze", stock: 80, delivery: "Ibermäge taýýar", storeId: gokdepe!.id, categoryId: clothingCat.id, img: IMG.bag2 },

    // ─── Kaka Dokma Toplumy / «Jeýtun» (3 products) ───
    { name: "Erkek köýnek", slug: "jeytun-erkek-koynek", price: 55, unit: "sany", fiber: "100% pagta", technique: "Maşyn tikilen, ISO 9001", badge: null, stock: 150, delivery: "Ibermäge taýýar", storeId: kaka!.id, categoryId: clothingCat.id, img: IMG.kilim1 },
    { name: "Pagta mata (Kaka)", slug: "jeytun-pagta-mata", price: 10, unit: "metr", fiber: "100% Ahal pagtasy", technique: "Güýçli dokma stanogy", badge: null, stock: 500, delivery: "Ibermäge taýýar", storeId: kaka!.id, categoryId: cottonCat.id, img: IMG.silk3 },
    { name: "Pagta ýüplük (Kaka)", slug: "jeytun-yupluk", price: 9, unit: "kg", fiber: "100% pagta, halka egrilen", technique: "Halka egirme, Ne 20/1", badge: null, stock: 400, delivery: "Ibermäge taýýar", storeId: kaka!.id, categoryId: cottonCat.id, img: IMG.scarf2 },

    // ─── Babadaýhan Dokma Toplumy / «Mäne» (3 products) ───
    { name: "Klassik kostýum", slug: "mane-klassik-kostyum", price: 180, unit: "sany", fiber: "Pagta galyň mata", technique: "Maşyn tikilen", badge: "Klassik", stock: 50, delivery: "5 günde iberilýär", storeId: babadayhan!.id, categoryId: clothingCat.id, img: IMG.carpet3 },
    { name: "Düşek-ýorgan toplumy (Mäne)", slug: "mane-dusek", price: 70, unit: "toplum", fiber: "Pagta satin", technique: "Maşyn dokalan", badge: "Rahat", stock: 100, delivery: "Ibermäge taýýar", storeId: babadayhan!.id, categoryId: homeCat.id, img: IMG.pillow },
    { name: "Sport eşik toplumy", slug: "mane-sport-esik", price: 95, unit: "toplum", fiber: "Pagta trikotaž", technique: "Trikotaž dokma", badge: "Sport", stock: 80, delivery: "Ibermäge taýýar", storeId: babadayhan!.id, categoryId: clothingCat.id, img: IMG.carpet5 },

    // ─── Balkandokma (3 products) ───
    { name: "Ýokary hilli ýüplük", slug: "balkan-yokary-yupluk", price: 12, unit: "kg", fiber: "100% Balkan pagtasy", technique: "Italiýa «Savio» egirme", badge: "Ýokary hil", stock: 400, delivery: "Ibermäge taýýar", storeId: balkan!.id, categoryId: cottonCat.id, img: IMG.carpet2 },
    { name: "Inçe ýüplük", slug: "balkan-ince-yupluk", price: 15, unit: "kg", fiber: "Daralan pagta, ýokary inçelik", technique: "Italiýa «Marzoli» egirme, Ne 50/1", badge: "Ýokary hil", stock: 300, delivery: "Ibermäge taýýar", storeId: balkan!.id, categoryId: cottonCat.id, img: IMG.silk2 },
    { name: "Eksport ýüplük", slug: "balkan-eksport-yupluk", price: 14, unit: "kg", fiber: "Eksport derejeli daralan pagta", technique: "Italiýa tehnologiýasy, sertifikatly", badge: "Eksport", stock: 250, delivery: "3 günde iberilýär", storeId: balkan!.id, categoryId: cottonCat.id, img: IMG.chuval },

    // ─── Daşoguz «Serdar» / «Ring» (3 products) ───
    { name: "Galyň ýüplük (Ring)", slug: "ring-galyn-yupluk", price: 7.5, unit: "kg", fiber: "100% Daşoguz pagtasy", technique: "Açyk uçly egirme, Ne 12/1", badge: null, stock: 600, delivery: "Ibermäge taýýar", storeId: dashoguz!.id, categoryId: cottonCat.id, img: IMG.trapping },
    { name: "Inçe ýüplük (Ring)", slug: "ring-ince-yupluk", price: 12, unit: "kg", fiber: "100% daralan pagta", technique: "Halka egirme, Ne 40/1", badge: "Ýokary hil", stock: 400, delivery: "Ibermäge taýýar", storeId: dashoguz!.id, categoryId: cottonCat.id, img: IMG.scarf2 },
    { name: "Eksport ýüplük (Serdar)", slug: "ring-eksport-yupluk", price: 14, unit: "kg", fiber: "Eksport derejeli pagta", technique: "Kompakt egirme", badge: "Eksport", stock: 300, delivery: "3 günde iberilýär", storeId: dashoguz!.id, categoryId: cottonCat.id, img: IMG.carpet5 },

    // ─── Halaç Pagta Egirme Fabrigi (3 products) ───
    { name: "Pagta ýüplük (Halaç)", slug: "halach-pagta-yupluk", price: 8.5, unit: "kg", fiber: "100% Lebap pagtasy", technique: "Halka egirme", badge: null, stock: 500, delivery: "Ibermäge taýýar", storeId: halach!.id, categoryId: cottonCat.id, img: IMG.carpet1 },
    { name: "Eksport ýüplük (Halaç)", slug: "halach-eksport-yupluk", price: 13, unit: "kg", fiber: "Inçe daralan pagta", technique: "Kompakt egirme, eksport hili", badge: "Eksport", stock: 300, delivery: "3 günde iberilýär", storeId: halach!.id, categoryId: cottonCat.id, img: IMG.bag2 },
    { name: "Galyň ýüplük (Halaç)", slug: "halach-galyn-yupluk", price: 7, unit: "kg", fiber: "100% pagta, kard edilen", technique: "Açyk uçly egirme, Ne 10/1", badge: null, stock: 400, delivery: "Ibermäge taýýar", storeId: halach!.id, categoryId: cottonCat.id, img: IMG.kilim2 },

    // ─── Türkmen Jorap Dokma (3 products) ───
    { name: "Erkek joraplary (5 jübüt)", slug: "jorap-erkek-5", price: 14, unit: "bukja", fiber: "80% pagta, 16% poliamid, 4% elastan", technique: "Italiýa «Lonati» enjamy", badge: null, stock: 300, delivery: "Ibermäge taýýar", storeId: jorap!.id, categoryId: clothingCat.id, img: IMG.kilim1 },
    { name: "Zenan joraplary (5 jübüt)", slug: "jorap-zenan-5", price: 14, unit: "bukja", fiber: "80% pagta, 16% poliamid, 4% elastan", technique: "Italiýa «Lonati» enjamy", badge: null, stock: 300, delivery: "Ibermäge taýýar", storeId: jorap!.id, categoryId: clothingCat.id, img: IMG.scarf2 },
    { name: "Çaga joraplary (5 jübüt)", slug: "jorap-caga-5", price: 10, unit: "bukja", fiber: "Ýumşak pagta garyndysy", technique: "Tikişsiz barnak dokma", badge: null, stock: 400, delivery: "Ibermäge taýýar", storeId: jorap!.id, categoryId: clothingCat.id, img: IMG.carpet6 },

    // ─── Baýramaly Dokma Toplumy / «Merw» (3 products) ───
    { name: "Pagta ýüplük (Merw)", slug: "merw-pagta-yupluk", price: 8, unit: "kg", fiber: "100% Mary pagtasy", technique: "Halka egirme", badge: null, stock: 500, delivery: "Ibermäge taýýar", storeId: bayramaly!.id, categoryId: cottonCat.id, img: IMG.shawl },
    { name: "Boýalan pagta mata", slug: "merw-boyalan-mata", price: 16, unit: "metr", fiber: "Pagta, reaktiw boýag", technique: "Boýalan we gutarnykly işlenen", badge: null, stock: 600, delivery: "Ibermäge taýýar", storeId: bayramaly!.id, categoryId: cottonCat.id, img: IMG.silk3 },
    { name: "Erkek köýnek (Merw)", slug: "merw-erkek-koynek", price: 48, unit: "sany", fiber: "100% pagta", technique: "Maşyn tikilen", badge: "Täze", stock: 120, delivery: "Ibermäge taýýar", storeId: bayramaly!.id, categoryId: clothingCat.id, img: IMG.scarf3 },
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
