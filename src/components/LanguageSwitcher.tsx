"use client";

import { useLanguage } from "./LanguageProvider";
import { LOCALE_LABELS, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm
          text-white/80 hover:text-white border border-transparent
          hover:border-turkmen-gold/30 hover:bg-white/5 transition"
        aria-label={t("common.language")}
      >
        <span className="text-base">{LOCALE_LABELS[locale].slice(0, 2)}</span>
        <span className="hidden sm:inline text-xs uppercase tracking-wide">
          {locale}
        </span>
        <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className="absolute right-0 top-full mt-1 bg-turkmen-green/95 backdrop-blur-md
        rounded-lg shadow-xl border border-white/10 overflow-hidden opacity-0 invisible
        group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[140px] z-50"
      >
        {(Object.entries(LOCALE_LABELS) as [Locale, string][]).map(([code, label]) => (
          <button
            key={code}
            onClick={() => setLocale(code)}
            className={`w-full text-left px-4 py-2.5 text-sm transition
              ${locale === code
                ? "bg-turkmen-gold/20 text-turkmen-gold font-semibold"
                : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
