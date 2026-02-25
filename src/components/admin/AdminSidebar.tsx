"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AdminSidebarProps {
  user: {
    name?: string | null;
    email?: string | null;
    role: string;
  };
}

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/stores", label: "Stores", icon: "🏪" },
  { href: "/admin/products", label: "Products", icon: "🧶" },
  { href: "/admin/categories", label: "Categories", icon: "📁" },
  { href: "/admin/orders", label: "Orders", icon: "📦" },
];

export default function AdminSidebar({ user }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-turkmen-green text-white min-h-screen flex flex-col shadow-xl">
      <div className="p-6 border-b border-turkmen-green/20">
        <Link href="/admin" className="flex items-center gap-3">
          <span className="text-3xl text-turkmen-gold">◆</span>
          <div>
            <h2 className="text-lg font-bold">Heritage</h2>
            <p className="text-xs text-white/60">Admin Panel</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== "/admin" && pathname.startsWith(item.href));
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? "bg-turkmen-gold/20 border-l-4 border-turkmen-gold text-white font-semibold"
                      : "text-white/80 hover:bg-turkmen-green/80 hover:text-white border-l-4 border-transparent"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-turkmen-green/20">
        <div className="mb-4 px-4">
          <p className="text-sm text-white/90">{user.email}</p>
          <p className="text-xs text-white/60">{user.role}</p>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="w-full px-4 py-2 text-left text-white/80 hover:bg-turkmen-green/80 rounded-lg transition"
        >
          🚪 Sign Out
        </button>
      </div>

      <div className="p-4 border-t border-turkmen-green/20">
        <Link
          href="/"
          className="block px-4 py-2 text-white/80 hover:bg-turkmen-green/80 rounded-lg transition"
        >
          ← Back to Store
        </Link>
      </div>
    </aside>
  );
}
