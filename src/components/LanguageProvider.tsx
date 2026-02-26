"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { type Locale, DEFAULT_LOCALE, t as translate, LOCALE_LABELS } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && saved in LOCALE_LABELS) {
      setLocaleState(saved);
      document.cookie = `locale=${saved};path=/;max-age=31536000`;
    } else {
      // Set default locale cookie for server components
      document.cookie = `locale=${DEFAULT_LOCALE};path=/;max-age=31536000`;
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
    document.cookie = `locale=${l};path=/;max-age=31536000`;
    document.documentElement.lang = l;
    router.refresh(); // Re-render server components with new locale
  }, [router]);

  const t = useCallback(
    (key: string) => translate(key, locale),
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
