import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - 1924;

  return (
    <footer className="header-gradient text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-bold mb-4 text-turkmen-gold flex items-center gap-2">
            <span className="text-turkmen-gold">◆</span>
            Dowletowa Textiles
          </h4>
          <p className="opacity-90 text-sm leading-relaxed">
            Harmonizing Turkmen heritage with contemporary artistry through ethical craftsmanship.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 text-turkmen-gold">Shop</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link href="/shop" className="hover:text-turkmen-gold transition">All Products</Link></li>
            <li><Link href="/collections" className="hover:text-turkmen-gold transition">Collections</Link></li>
            <li><Link href="/artisans" className="hover:text-turkmen-gold transition">Artisans</Link></li>
            <li><Link href="/heritage" className="hover:text-turkmen-gold transition">Heritage</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 text-turkmen-gold">Visit</h4>
          <p className="opacity-90 text-sm">
            40 Garaşsyzlyk şaýoly<br />
            Ashgabat 744000, Turkmenistan
          </p>
          <p className="opacity-90 mt-3 text-sm">
            Open Monday &ndash; Saturday<br />
            09:00 &ndash; 18:00 TMT
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 text-turkmen-gold">Connect</h4>
          <p className="opacity-90 text-sm">
            +993 (12) 45 67 89<br />
            hello@dowletowa-textiles.tm
          </p>
          <p className="opacity-90 mt-3 text-sm">@dowletowatextiles</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-white/20 flex items-center justify-between opacity-80 text-sm">
        <p>&copy; {currentYear} Dowletowa Textiles Cooperative &bull; Celebrating {yearsActive} years of weaving excellence</p>
        <Link href="/admin/login" className="text-white/50 hover:text-turkmen-gold transition text-xs">
          Admin Panel
        </Link>
      </div>
    </footer>
  );
}
