"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// ─── Turkmen → English / Russian textile dictionary ──────────────

const dict: Record<string, { en: string; ru: string }> = {
  // Fibers & materials
  pagta: { en: "cotton", ru: "хлопок" },
  ýüpek: { en: "silk", ru: "шёлк" },
  ýüň: { en: "wool", ru: "шерсть" },
  "düýe ýüňi": { en: "camel hair", ru: "верблюжья шерсть" },
  keteni: { en: "keteni silk", ru: "кетени шёлк" },
  zygyr: { en: "linen", ru: "лён" },
  süýüm: { en: "fiber", ru: "волокно" },
  mata: { en: "fabric", ru: "ткань" },
  denim: { en: "denim", ru: "деним" },
  trikotaž: { en: "knitwear", ru: "трикотаж" },
  nah: { en: "cotton", ru: "хлопок" },
  "nah ýüplük": { en: "cotton yarn", ru: "хлопковая пряжа" },
  ýüplük: { en: "yarn", ru: "пряжа" },
  sapak: { en: "thread", ru: "нить" },
  "tut ýüpegi": { en: "mulberry silk", ru: "тутовый шёлк" },

  // Products
  haly: { en: "carpet", ru: "ковёр" },
  halyça: { en: "small carpet", ru: "коврик" },
  kilim: { en: "kilim", ru: "килим" },
  palas: { en: "flatweave rug", ru: "палас" },
  namazlyk: { en: "prayer rug", ru: "намазлык" },
  torba: { en: "storage bag", ru: "торба" },
  çuwal: { en: "large bag", ru: "чувал" },
  jorap: { en: "socks", ru: "носки" },
  "jorap önümleri": { en: "hosiery products", ru: "чулочно-носочные изделия" },
  jins: { en: "jeans", ru: "джинсы" },
  kurtka: { en: "jacket", ru: "куртка" },
  ýubka: { en: "skirt", ru: "юбка" },
  köýnek: { en: "dress", ru: "платье" },
  polotensa: { en: "towel", ru: "полотенце" },
  "polotensa toplumy": { en: "towel set", ru: "набор полотенец" },
  düşek: { en: "bedding", ru: "постельное бельё" },
  "düşek toplumy": { en: "bedding set", ru: "комплект постельного белья" },
  "ýassyk daşlygy": { en: "pillowcase", ru: "наволочка" },
  saçak: { en: "tablecloth", ru: "скатерть" },
  perde: { en: "curtain", ru: "штора" },
  geýim: { en: "clothing", ru: "одежда" },
  eşik: { en: "garment", ru: "одежда" },
  "sport eşigi": { en: "sportswear", ru: "спортивная одежда" },

  // Techniques
  "el bilen dokalan": { en: "handwoven", ru: "ручного ткачества" },
  "elde dokalan": { en: "handwoven", ru: "ручного ткачества" },
  "el dokma": { en: "hand weaving", ru: "ручное ткачество" },
  "elde dokama": { en: "hand weaving", ru: "ручное ткачество" },
  dokma: { en: "weaving", ru: "ткачество" },
  dokalan: { en: "woven", ru: "тканый" },
  "maşyn dokma": { en: "machine weaving", ru: "машинное ткачество" },
  keşde: { en: "embroidery", ru: "вышивка" },
  keşdeli: { en: "embroidered", ru: "вышитый" },
  "el keşde": { en: "hand embroidery", ru: "ручная вышивка" },
  "trikotaž dokma": { en: "knitting", ru: "вязание" },
  "düwünli dokma": { en: "knotted weaving", ru: "узелковое ткачество" },
  "el düwünli": { en: "hand-knotted", ru: "ручной узелковой вязки" },
  basma: { en: "printing", ru: "печать" },
  boýama: { en: "dyeing", ru: "окрашивание" },
  "tebigy boýag": { en: "natural dye", ru: "натуральный краситель" },
  egriji: { en: "spinning", ru: "прядение" },
  jakard: { en: "jacquard", ru: "жаккард" },
  atlas: { en: "satin weave", ru: "атласное плетение" },

  // Qualities & descriptors
  tebigy: { en: "natural", ru: "натуральный" },
  arassa: { en: "pure", ru: "чистый" },
  "ýokary hilli": { en: "high quality", ru: "высокого качества" },
  "ýokary hil": { en: "premium", ru: "премиум" },
  "elde ýasalan": { en: "handmade", ru: "ручной работы" },
  "elde tikin": { en: "hand-stitched", ru: "ручной строчки" },
  milli: { en: "national", ru: "национальный" },
  däp: { en: "traditional", ru: "традиционный" },
  "däp bolan": { en: "traditional", ru: "традиционный" },
  gadymy: { en: "ancient", ru: "древний" },
  döwrebap: { en: "modern", ru: "современный" },
  nagyşly: { en: "patterned", ru: "узорчатый" },
  göl: { en: "göl pattern", ru: "узор гёль" },
  nagyş: { en: "pattern", ru: "узор" },

  // Colors
  gyzyl: { en: "red", ru: "красный" },
  gyrmyzy: { en: "crimson", ru: "багряный" },
  gök: { en: "blue", ru: "синий" },
  ýaşyl: { en: "green", ru: "зелёный" },
  sary: { en: "yellow", ru: "жёлтый" },
  ak: { en: "white", ru: "белый" },
  gara: { en: "black", ru: "чёрный" },
  goňur: { en: "brown", ru: "коричневый" },

  // Categories
  halylary: { en: "carpets", ru: "ковры" },
  "dokma önümleri": { en: "textile products", ru: "текстильные изделия" },
  "öý dokma": { en: "home textiles", ru: "домашний текстиль" },
  "öý dokma önümleri": { en: "home textile products", ru: "домашний текстиль" },
  "senagat dokma": { en: "industrial textiles", ru: "промышленный текстиль" },

  // Badges
  täze: { en: "New", ru: "Новинка" },
  "iň köp satylýan": { en: "Bestseller", ru: "Бестселлер" },
  klassik: { en: "Classic", ru: "Классика" },
  miras: { en: "Heritage", ru: "Наследие" },
  eksport: { en: "Export", ru: "Экспорт" },
  meşhur: { en: "Popular", ru: "Популярный" },
  sport: { en: "Sport", ru: "Спорт" },
  rahat: { en: "Comfort", ru: "Комфорт" },

  // Units
  bölek: { en: "piece", ru: "штука" },
  metr: { en: "meter", ru: "метр" },
  bukja: { en: "bundle", ru: "связка" },
  piece: { en: "piece", ru: "штука" },
  "m²": { en: "m²", ru: "м²" },
  panel: { en: "panel", ru: "панель" },

  // Common compound words
  "pagta matasy": { en: "cotton fabric", ru: "хлопковая ткань" },
  "ýüpek matasy": { en: "silk fabric", ru: "шёлковая ткань" },
  "denim matasy": { en: "denim fabric", ru: "джинсовая ткань" },
  "jins önümleri": { en: "denim products", ru: "джинсовые изделия" },
  "trikotaž önümleri": { en: "knitwear products", ru: "трикотажные изделия" },
};

/**
 * Translate a Turkmen text string word-by-word using the built-in dictionary.
 * Tries longest-match-first so multi-word entries like "düýe ýüňi" are matched.
 */
function translateText(
  text: string,
  lang: "en" | "ru",
): string {
  if (!text) return "";
  const lower = text.toLowerCase().trim();

  // 1. Try exact full-string match first
  if (dict[lower]) return dict[lower][lang];

  // 2. Greedy longest-match tokenisation
  const words = lower.split(/\s+/);
  const result: string[] = [];
  let i = 0;
  while (i < words.length) {
    let matched = false;
    // try matching 4, 3, 2 words at a time
    for (let len = Math.min(4, words.length - i); len > 0; len--) {
      const phrase = words.slice(i, i + len).join(" ");
      if (dict[phrase]) {
        result.push(dict[phrase][lang]);
        i += len;
        matched = true;
        break;
      }
    }
    if (!matched) {
      result.push(words[i]); // keep untranslated word as-is
      i++;
    }
  }
  return result.join(" ");
}

/**
 * Capitalise first letter of a string.
 */
function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ─── Server actions ─────────────────────────────────────────────

export async function translateAllProducts(): Promise<{
  products: number;
  categories: number;
  stores: number;
}> {
  // Products
  const products = await prisma.product.findMany();
  let pCount = 0;
  for (const p of products) {
    const data: Record<string, string> = {};
    if (!p.nameEn) data.nameEn = cap(translateText(p.name, "en"));
    if (!p.nameRu) data.nameRu = cap(translateText(p.name, "ru"));
    if (!p.descriptionEn) data.descriptionEn = cap(translateText(p.description, "en"));
    if (!p.descriptionRu) data.descriptionRu = cap(translateText(p.description, "ru"));
    if (!p.fiberEn) data.fiberEn = cap(translateText(p.fiber, "en"));
    if (!p.fiberRu) data.fiberRu = cap(translateText(p.fiber, "ru"));
    if (!p.techniqueEn) data.techniqueEn = cap(translateText(p.technique, "en"));
    if (!p.techniqueRu) data.techniqueRu = cap(translateText(p.technique, "ru"));
    if (Object.keys(data).length > 0) {
      await prisma.product.update({ where: { id: p.id }, data });
      pCount++;
    }
  }

  // Categories
  const categories = await prisma.category.findMany();
  let cCount = 0;
  for (const c of categories) {
    const data: Record<string, string> = {};
    if (!c.nameEn) data.nameEn = cap(translateText(c.name, "en"));
    if (!c.nameRu) data.nameRu = cap(translateText(c.name, "ru"));
    if (Object.keys(data).length > 0) {
      await prisma.category.update({ where: { id: c.id }, data });
      cCount++;
    }
  }

  // Stores
  const stores = await prisma.store.findMany();
  let sCount = 0;
  for (const s of stores) {
    const data: Record<string, string> = {};
    if (!s.nameEn) data.nameEn = cap(translateText(s.name, "en"));
    if (!s.nameRu) data.nameRu = cap(translateText(s.name, "ru"));
    if (!s.specialtyEn) data.specialtyEn = cap(translateText(s.specialty, "en"));
    if (!s.specialtyRu) data.specialtyRu = cap(translateText(s.specialty, "ru"));
    if (Object.keys(data).length > 0) {
      await prisma.store.update({ where: { id: s.id }, data });
      sCount++;
    }
  }

  revalidatePath("/admin/products");
  revalidatePath("/admin/categories");
  revalidatePath("/admin/stores");
  revalidatePath("/");
  revalidatePath("/shop");

  return { products: pCount, categories: cCount, stores: sCount };
}

export async function translateProduct(id: string): Promise<void> {
  const p = await prisma.product.findUnique({ where: { id } });
  if (!p) return;

  const data: Record<string, string> = {};
  data.nameEn = cap(translateText(p.name, "en"));
  data.nameRu = cap(translateText(p.name, "ru"));
  data.descriptionEn = cap(translateText(p.description, "en"));
  data.descriptionRu = cap(translateText(p.description, "ru"));
  data.fiberEn = cap(translateText(p.fiber, "en"));
  data.fiberRu = cap(translateText(p.fiber, "ru"));
  data.techniqueEn = cap(translateText(p.technique, "en"));
  data.techniqueRu = cap(translateText(p.technique, "ru"));

  await prisma.product.update({ where: { id }, data });

  revalidatePath(`/admin/products/${id}`);
  revalidatePath("/shop");
  revalidatePath("/");
}
