import bcrypt from "bcryptjs";
import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("🌱 Seeding database...");

  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 10);
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

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: "carpets" },
      update: {},
      create: { name: "Carpets", slug: "carpets", description: "Traditional hand-knotted Turkmen carpets" },
    }),
    prisma.category.upsert({
      where: { slug: "silks" },
      update: {},
      create: { name: "Silk Textiles", slug: "silks", description: "Keteni and mulberry silk fabrics" },
    }),
    prisma.category.upsert({
      where: { slug: "kilims" },
      update: {},
      create: { name: "Kilims", slug: "kilims", description: "Flatweave rugs and shyrdak panels" },
    }),
    prisma.category.upsert({
      where: { slug: "accessories" },
      update: {},
      create: { name: "Accessories", slug: "accessories", description: "Scarves, stoles, and textile accessories" },
    }),
  ]);
  console.log("✅ Created", categories.length, "categories");

  // Create stores
  const stores = [
    {
      name: "Dowletowa Textiles Cooperative",
      slug: "dowletowa",
      origin: "Ashgabat",
      specialty: "Heritage carpets, silk keteni, and museum-grade replicas",
      description: "The flagship cooperative celebrating 101 years of Turkmen weaving excellence."
    },
    {
      name: "Ahal Silk Atelier",
      slug: "ahal-silk",
      origin: "Mary Oasis",
      specialty: "Mulberry silk scarves and luminous bridal fabrics",
      description: "Artisans specializing in silk production from the ancient oasis region."
    },
    {
      name: "Karakum Wool Syndicate",
      slug: "karakum",
      origin: "Balkan Region",
      specialty: "Hand-spun camelhair, felted shyrdak panels",
      description: "Working with nomadic families to preserve wool and camelhair traditions."
    },
    {
      name: "Lebap Embroidery Guild",
      slug: "lebap-guild",
      origin: "Türkmenabat",
      specialty: "Traditional Turkmen embroidery, suzani panels, and decorative textiles",
      description: "A women-led guild preserving the intricate chain-stitch and couching techniques of eastern Turkmenistan."
    },
    {
      name: "Mary Keteni Workshop",
      slug: "mary-keteni",
      origin: "Mary",
      specialty: "Keteni silk weaving, bridal fabrics, and ceremonial textiles",
      description: "A family workshop producing luminous keteni silk using techniques passed down for five generations."
    },
  ];

  for (const store of stores) {
    await prisma.store.upsert({
      where: { slug: store.slug },
      update: {},
      create: { ...store, createdById: admin.id },
    });
  }
  console.log("✅ Created", stores.length, "stores");

  // Get store IDs
  const dowletowa = await prisma.store.findUnique({ where: { slug: "dowletowa" } });
  const ahalSilk = await prisma.store.findUnique({ where: { slug: "ahal-silk" } });
  const karakum = await prisma.store.findUnique({ where: { slug: "karakum" } });
  const lebapGuild = await prisma.store.findUnique({ where: { slug: "lebap-guild" } });
  const maryKeteni = await prisma.store.findUnique({ where: { slug: "mary-keteni" } });
  const carpetCat = categories[0];
  const silkCat = categories[1];
  const kilimCat = categories[2];
  const accessoriesCat = categories[3];

  // Create products
  const products = [
    { name: "Keteni Bridal Robe", slug: "keteni-robe", price: 850, unit: "piece", fiber: "Mulberry silk satin", technique: "Hand-woven, luminous sheen", badge: "Limited", stock: 6, delivery: "Ready to ship", storeId: dowletowa!.id, categoryId: silkCat.id },
    { name: "Tekke Desert Runner", slug: "tekke-runner", price: 620, unit: "m²", fiber: "Hand-spun wool", technique: "Hand-knot, 120k knots/m²", badge: "New", stock: 8, delivery: "Ships in 5 days", storeId: dowletowa!.id, categoryId: carpetCat.id },
    { name: "Gersary Sand Kilim", slug: "gersary-kilim", price: 420, unit: "m²", fiber: "Camelhair + wool blend", technique: "Flatweave shyrdak", badge: "Bespoke", stock: 3, delivery: "Made to order", storeId: karakum!.id, categoryId: kilimCat.id },
    { name: "Indigo Silk Stole", slug: "indigo-stole", price: 180, unit: "piece", fiber: "Mulberry silk, indigo + walnut", technique: "Hand-dyed, hand-rolled hem", badge: "Bestseller", stock: 12, delivery: "Ready to ship", storeId: ahalSilk!.id, categoryId: accessoriesCat.id },
    { name: "Oasis Nomad Throw", slug: "oasis-throw", price: 260, unit: "piece", fiber: "Wool with camelhair edging", technique: "Loom-woven chevrons", badge: "Cozy", stock: 10, delivery: "Ships in 7 days", storeId: karakum!.id, categoryId: kilimCat.id },
    { name: "Sunrise Silk Panel", slug: "silk-panel", price: 540, unit: "panel", fiber: "Two-ply silk", technique: "Jacquard + hand embroidery", badge: "Gallery", stock: 5, delivery: "Ships in 3 days", storeId: ahalSilk!.id, categoryId: silkCat.id },
    { name: "Akar Yurt Accent Rug", slug: "akar-yurt", price: 380, unit: "m²", fiber: "Highland wool", technique: "Hand-knot, low pile", badge: "Accent", stock: 11, delivery: "Ships in 4 days", storeId: dowletowa!.id, categoryId: carpetCat.id },
    { name: "Desert Motif Kilim", slug: "desert-motif", price: 310, unit: "m²", fiber: "Wool + goat hair", technique: "Flatweave", badge: "New", stock: 5, delivery: "Made to order", storeId: karakum!.id, categoryId: kilimCat.id },
    { name: "Aurora Gradient Scarf", slug: "aurora-scarf", price: 210, unit: "piece", fiber: "Mulberry silk", technique: "Hand-dyed gradient", badge: "Colorplay", stock: 14, delivery: "Ships in 2 days", storeId: ahalSilk!.id, categoryId: accessoriesCat.id },
    { name: "Ruby Gallery Carpet", slug: "ruby-gallery", price: 1150, unit: "piece", fiber: "Wool with silk highlights", technique: "Hand-knot, 160k knots/m²", badge: "Gallery", stock: 2, delivery: "Ships in 10 days", storeId: dowletowa!.id, categoryId: carpetCat.id, isFeatured: true },

    // NEW PRODUCTS - Consolidated List
    { name: "Yomut Göl Carpet", slug: "yomut-gol", price: 950, unit: "piece", fiber: "High-altitude wool", technique: "Traditional Yomut knotting", badge: "Classic", stock: 4, delivery: "Ships in 7 days", storeId: dowletowa!.id, categoryId: carpetCat.id, isFeatured: true },
    { name: "Ersari Elephant Foot Rug", slug: "ersari-elephant", price: 780, unit: "piece", fiber: "Dark red wool", technique: "Coarse knot, deep pile", badge: "Heritage", stock: 3, delivery: "Ships in 5 days", storeId: karakum!.id, categoryId: carpetCat.id },
    { name: "Golden Oasis Silk Scarf", slug: "golden-oasis-scarf", price: 165, unit: "piece", fiber: "Wild silk", technique: "Natural dying", badge: "New", stock: 15, delivery: "Ready to ship", storeId: ahalSilk!.id, categoryId: accessoriesCat.id },
    { name: "Turkmen Embroidery Vest", slug: "embroidery-vest", price: 320, unit: "piece", fiber: "Cotton & Silk thread", technique: "Hand embroidery", badge: "Artisan", stock: 5, delivery: "Made to order", storeId: ahalSilk!.id, categoryId: accessoriesCat.id },
    { name: "Nomadic Camel Bag", slug: "camel-bag", price: 290, unit: "piece", fiber: "Wool & Goat hair", technique: "Flatweave & Pile mix", badge: "Vintage", stock: 1, delivery: "Ships tomorrow", storeId: karakum!.id, categoryId: kilimCat.id },
    { name: "Ceremonial Camel Trapping", slug: "camel-trapping", price: 1200, unit: "piece", fiber: "Fine wool & silk", technique: "Intricate knotting", badge: "Gallery", stock: 1, delivery: "Ships in 10 days", storeId: dowletowa!.id, categoryId: carpetCat.id, isFeatured: true },
    { name: "Khorjun Saddle Bag", slug: "khorjun-bag", price: 240, unit: "pair", fiber: "Wool", technique: "Double-sided flatweave", badge: "Authentic", stock: 6, delivery: "Ships in 3 days", storeId: karakum!.id, categoryId: kilimCat.id },
    { name: "Silk Ikat Pillow", slug: "silk-ikat-pillow", price: 95, unit: "piece", fiber: "Silk velvet", technique: "Ikat weaving", badge: "Bestseller", stock: 20, delivery: "Ready to ship", storeId: ahalSilk!.id, categoryId: accessoriesCat.id },
    { name: "Teke Chuval", slug: "teke-chuval", price: 550, unit: "piece", fiber: "Merino wool", technique: "Fine knotting", badge: "Storage", stock: 3, delivery: "Ships in 6 days", storeId: dowletowa!.id, categoryId: carpetCat.id },
    { name: "Bukhara Runner", slug: "bukhara-runner", price: 480, unit: "m²", fiber: "Wool", technique: "Tight knot", badge: "Classic", stock: 5, delivery: "Ships in 5 days", storeId: dowletowa!.id, categoryId: carpetCat.id },
    { name: "Caspian Blue Shawl", slug: "caspian-shawl", price: 140, unit: "piece", fiber: "Fine wool", technique: "Loose weave", badge: "Winter", stock: 10, delivery: "Ready to ship", storeId: karakum!.id, categoryId: accessoriesCat.id },
    { name: "Desert Sunset Keteni", slug: "sunset-keteni", price: 110, unit: "meter", fiber: "Raw silk", technique: "Loom woven", badge: "Fabric", stock: 50, delivery: "Ready to ship", storeId: ahalSilk!.id, categoryId: silkCat.id },

    // Products for Lebap Embroidery Guild
    { name: "Suzani Wall Panel", slug: "suzani-panel", price: 680, unit: "piece", fiber: "Cotton base, silk thread", technique: "Chain-stitch embroidery", badge: "Gallery", stock: 3, delivery: "Ships in 10 days", storeId: lebapGuild!.id, categoryId: kilimCat.id, isFeatured: true },
    { name: "Embroidered Prayer Rug", slug: "prayer-rug-embroidered", price: 450, unit: "piece", fiber: "Wool with silk embroidery", technique: "Hand-embroidered border", badge: "Sacred", stock: 4, delivery: "Ships in 7 days", storeId: lebapGuild!.id, categoryId: carpetCat.id },
    { name: "Lebap Telpek Band", slug: "telpek-band", price: 85, unit: "piece", fiber: "Cotton & metallic thread", technique: "Couching embroidery", badge: "Accessory", stock: 20, delivery: "Ready to ship", storeId: lebapGuild!.id, categoryId: accessoriesCat.id },

    // Products for Mary Keteni Workshop
    { name: "Crimson Bridal Keteni", slug: "crimson-keteni", price: 920, unit: "piece", fiber: "Finest mulberry silk", technique: "Traditional loom, natural dye", badge: "Bridal", stock: 2, delivery: "Made to order", storeId: maryKeteni!.id, categoryId: silkCat.id, isFeatured: true },
    { name: "Mary Festival Scarf", slug: "mary-festival-scarf", price: 175, unit: "piece", fiber: "Silk chiffon", technique: "Hand-dyed ikat", badge: "Festival", stock: 15, delivery: "Ready to ship", storeId: maryKeteni!.id, categoryId: accessoriesCat.id },
    { name: "Oasis Silk Table Runner", slug: "oasis-silk-runner", price: 340, unit: "piece", fiber: "Two-ply silk", technique: "Jacquard weaving", badge: "Home", stock: 7, delivery: "Ships in 5 days", storeId: maryKeteni!.id, categoryId: silkCat.id },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: { ...product, description: `${product.fiber}. ${product.technique}.`, isFeatured: product.isFeatured ?? false },
    });
  }
  console.log("✅ Created", products.length, "products");

  // Add product images
  const productImages = [
    // Keteni Bridal Robe
    { productSlug: "keteni-robe", path: "/images/products/product-keteni-robe-1.jpg", alt: "Keteni Bridal Robe", isPrimary: true },
    // Tekke Desert Runner
    { productSlug: "tekke-runner", path: "/images/products/product-tekke-desert-runner-1.jpg", alt: "Tekke Desert Runner", isPrimary: true },
    // Gersary Sand Kilim
    { productSlug: "gersary-kilim", path: "/images/products/product-gersary-kilim-1.jpg", alt: "Gersary Sand Kilim", isPrimary: true },
    // Indigo Silk Stole
    { productSlug: "indigo-stole", path: "/images/products/product-indigo-stole-1.jpg", alt: "Indigo Silk Stole", isPrimary: true },
    // Oasis Nomad Throw
    { productSlug: "oasis-throw", path: "/images/products/product-oasis-throw-1.jpg", alt: "Oasis Nomad Throw", isPrimary: true },
    // Sunrise Silk Panel
    { productSlug: "silk-panel", path: "/images/products/product-silk-panel-1.jpg", alt: "Sunrise Silk Panel", isPrimary: true },
    // Akar Yurt Accent Rug
    { productSlug: "akar-yurt", path: "/images/products/product-akar-yurt-rug-1.jpg", alt: "Akar Yurt Accent Rug", isPrimary: true },
    // Desert Motif Kilim
    { productSlug: "desert-motif", path: "/images/products/product-desert-motif-kilim-1.jpg", alt: "Desert Motif Kilim", isPrimary: true },
    // Aurora Gradient Scarf
    { productSlug: "aurora-scarf", path: "/images/products/product-aurora-gradient-scarf-1.jpg", alt: "Aurora Gradient Scarf", isPrimary: true },
    // Ruby Gallery Carpet
    { productSlug: "ruby-gallery", path: "/images/products/product-ruby-gallery-carpet-1.jpg", alt: "Ruby Gallery Carpet", isPrimary: true },

    // NEW IMAGES
    { productSlug: "yomut-gol", path: "/images/products/product-yomut-gol-carpet-1.jpg", alt: "Yomut Göl Carpet", isPrimary: true },
    { productSlug: "ersari-elephant", path: "/images/products/product-ersari-elephant-rug-1.jpg", alt: "Ersari Elephant Foot Rug", isPrimary: true },
    { productSlug: "golden-oasis-scarf", path: "/images/products/product-golden-oasis-scarf-1.jpg", alt: "Golden Oasis Silk Scarf", isPrimary: true },
    { productSlug: "embroidery-vest", path: "/images/products/product-embroidery-vest-1.jpg", alt: "Turkmen Embroidery Vest", isPrimary: true },
    { productSlug: "camel-bag", path: "/images/products/product-camel-bag-1.jpg", alt: "Nomadic Camel Bag", isPrimary: true },
    { productSlug: "camel-trapping", path: "/images/products/product-camel-trapping-1.jpg", alt: "Ceremonial Camel Trapping", isPrimary: true },
    { productSlug: "khorjun-bag", path: "/images/products/product-khorjun-bag-1.jpg", alt: "Khorjun Saddle Bag", isPrimary: true },
    { productSlug: "silk-ikat-pillow", path: "/images/products/product-silk-ikat-pillow-1.jpg", alt: "Silk Ikat Pillow", isPrimary: true },
    { productSlug: "teke-chuval", path: "/images/products/product-teke-chuval-1.jpg", alt: "Teke Chuval", isPrimary: true },
    { productSlug: "bukhara-runner", path: "/images/products/product-bukhara-runner-1.jpg", alt: "Bukhara Runner", isPrimary: true },
    { productSlug: "caspian-shawl", path: "/images/products/product-caspian-shawl-1.jpg", alt: "Caspian Blue Shawl", isPrimary: true },
    { productSlug: "sunset-keteni", path: "/images/products/product-sunset-keteni-1.jpg", alt: "Desert Sunset Keteni", isPrimary: true },

    // Lebap Embroidery Guild
    { productSlug: "suzani-panel", path: "/images/products/product-suzani-panel-1.jpg", alt: "Suzani Wall Panel", isPrimary: true },
    { productSlug: "prayer-rug-embroidered", path: "/images/products/product-prayer-rug-embroidered-1.jpg", alt: "Embroidered Prayer Rug", isPrimary: true },
    { productSlug: "telpek-band", path: "/images/products/product-telpek-band-1.jpg", alt: "Lebap Telpek Band", isPrimary: true },

    // Mary Keteni Workshop
    { productSlug: "crimson-keteni", path: "/images/products/product-crimson-keteni-1.jpg", alt: "Crimson Bridal Keteni", isPrimary: true },
    { productSlug: "mary-festival-scarf", path: "/images/products/product-mary-festival-scarf-1.jpg", alt: "Mary Festival Scarf", isPrimary: true },
    { productSlug: "oasis-silk-runner", path: "/images/products/product-oasis-silk-runner-1.jpg", alt: "Oasis Silk Table Runner", isPrimary: true },
  ];

  for (const img of productImages) {
    const product = await prisma.product.findUnique({ where: { slug: img.productSlug } });
    if (product) {
      await prisma.productImage.create({
        data: {
          productId: product.id,
          path: img.path,
          alt: img.alt,
          isPrimary: img.isPrimary,
        },
      });
    }
  }
  console.log("✅ Created", productImages.length, "product images");

  console.log("🎉 Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
