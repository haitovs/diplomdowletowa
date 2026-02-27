"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - 1924;

  return (
    <footer className="header-gradient text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-bold mb-4 text-turkmen-gold flex items-center gap-2">
            <span className="text-turkmen-gold">◆</span>
            Heritage Textiles
          </h4>
          <p className="opacity-90 text-sm leading-relaxed">
            {t("footer.brand_desc")}
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 text-turkmen-gold">{t("footer.shop_heading")}</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link href="/shop" className="hover:text-turkmen-gold transition">{t("footer.all_products")}</Link></li>
            <li><Link href="/collections" className="hover:text-turkmen-gold transition">{t("nav.collections")}</Link></li>
            <li><Link href="/artisans" className="hover:text-turkmen-gold transition">{t("nav.artisans")}</Link></li>
            <li><Link href="/heritage" className="hover:text-turkmen-gold transition">{t("nav.heritage")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 text-turkmen-gold">{t("footer.visit_heading")}</h4>
          <p className="opacity-90 text-sm">
            40 Garaşsyzlyk şaýoly<br />
            Aşgabat 744000, Türkmenistan
          </p>
          <p className="opacity-90 mt-3 text-sm">
            {t("footer.open_schedule")}<br />
            09:00 &ndash; 18:00
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 text-turkmen-gold">{t("footer.connect_heading")}</h4>
          <p className="opacity-90 text-sm">
            +993 (12) 45 67 89<br />
            hello@heritage-textiles.tm
          </p>
          <p className="opacity-90 mt-3 text-sm">@heritagetextiles</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-white/20 flex items-center justify-between opacity-80 text-sm">
        <p>&copy; {currentYear} Heritage Textiles &bull; {t("footer.celebrating")} {yearsActive} {t("footer.years_text")}</p>
        <Link href="/admin/login" className="text-white/50 hover:text-turkmen-gold transition text-xs">
          {t("admin.title")}
        </Link>
      </div>
    </footer>
  );
}
