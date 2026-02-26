"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  cartCount?: number;
}

export default function Header({ cartCount }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  const navLinks = [
    { name: t("nav.shopping"), href: "/shop" },
    { name: t("nav.collections"), href: "/collections" },
    { name: t("nav.artisans"), href: "/artisans" },
    { name: t("nav.heritage"), href: "/heritage" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <header className="header-gradient text-white sticky top-0 z-50 shadow-soft">
      {/* Top Bar */}
      <div className="bg-black/20 text-center py-2 text-sm border-b border-white/20 px-4">
        <span className="before:content-['✦'] before:text-turkmen-gold before:mr-2 inline-block">
          {t("header.top_banner")}
        </span>
        <span className="mx-4 hidden md:inline">&bull;</span>
        <span className="hidden md:inline">{t("hero.since")} &middot; Ashgabat, Turkmenistan</span>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="text-xl font-semibold tracking-wide flex items-center gap-2 flex-shrink-0 hover:text-turkmen-gold transition">
            <span className="text-turkmen-gold text-2xl">◆</span>
            Heritage Textiles
          </Link>

          {/* Center Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-sm uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link py-1 transition relative group ${
                  isActive(link.href) ? 'text-turkmen-gold' : 'hover:text-turkmen-gold'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-turkmen-gold transform origin-left transition-transform duration-300 ${isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 text-sm font-medium">
            {/* Language Switcher */}
            <LanguageSwitcher />

            <Link
              href="/compare"
              className={`flex items-center gap-2 py-1.5 px-3 rounded-full transition border border-transparent hover:border-turkmen-gold/30 hover:bg-white/5 ${
                isActive('/compare') ? 'text-turkmen-gold' : 'text-white/80 hover:text-white'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span className="hidden sm:inline">{t("nav.compare")}</span>
            </Link>

            <Link
              href="/cart"
              className={`flex items-center gap-2 py-1.5 px-3 rounded-full transition border border-transparent hover:border-turkmen-gold/30 hover:bg-white/5 ${
                isActive('/cart') ? 'text-turkmen-gold' : 'text-white/80 hover:text-white'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <span className="hidden sm:inline">{t("nav.cart")}</span>
              {cartCount !== undefined && cartCount > 0 && (
                <span className="bg-turkmen-gold text-turkmen-green px-2 py-0.5 rounded-full text-xs font-bold min-w-[1.5rem] text-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <nav className="lg:hidden pt-4 pb-2 border-t border-white/20 mt-3 mobile-menu-enter">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2.5 px-4 rounded-lg text-sm uppercase tracking-wider transition ${
                    isActive(link.href)
                      ? 'text-turkmen-gold bg-white/10 font-semibold'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
