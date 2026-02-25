import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HeritagePage() {
  return (
    <div className="min-h-screen bg-desert-sand">
      <Header />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold uppercase tracking-wide mb-4">Safeguarding Cultural Heritage</h1>
          <p className="text-lg opacity-95 max-w-2xl">
            Turkmen textiles embody collective memory—songs, prayers, and symbols woven into daily life. We protect this intangible heritage through education, documentation, and global dialogue.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* UNESCO Partnership */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">Intangible Heritage Stewardship</h2>
            <p className="mb-4">
              Dowletowa Textiles partners with the National Commission for UNESCO to document weaving practices recognized as Intangible Cultural Heritage of Humanity. We record oral histories in Turkmen and translate them into English, Russian, and Japanese.
            </p>
            <p>
              We curate traveling exhibitions that pair historic textiles with augmented reality experiences, enabling visitors to visualize the weaving process step-by-step. Digital archives store high-resolution imagery, dye analysis, and interviews with makers.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-turkmen-gold shadow-soft">
            <img src="/images/products/product-camel-bag-1.jpg" alt="UNESCO Heritage Documentation" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>

        {/* Economic Empowerment */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl p-6 border-2 border-turkmen-gold shadow-soft">
            <img src="/images/products/product-khorjun-bag-1.jpg" alt="Economic Empowerment" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">Economic Empowerment</h2>
            <p className="mb-4">
              Heritage preservation is intertwined with economic vitality. Our cooperative guarantees transparent pricing for artisans, providing financial literacy workshops and microgrants that fund loom maintenance, dye gardens, and apprenticeships.
            </p>
            <p>
              Through memoranda with cultural ministries and trade partners, we coordinate export routes that honor ethical sourcing and cultural attribution. Every international sale contributes to a heritage fund supporting libraries and healthcare.
            </p>
          </div>
        </section>

        {/* Education Programs */}
        <section className="bg-white/50 rounded-2xl p-8 border border-turkmen-green/10">
          <h2 className="text-3xl font-bold text-turkmen-green mb-4">Education Programs</h2>
          <p className="mb-4">
            Our Heritage School for Youth invites students aged 12–19 to engage with weaving, felting, and embroidery. Curriculum modules integrate history, ecology, and entrepreneurship: pupils trace the Silk Road, map dye plant habitats, and create business plans.
          </p>
          <p className="mb-4">
            We collaborate with universities in Ashgabat and Mary to offer credit-bearing courses in textile conservation, curatorial practice, and cultural diplomacy. Scholarships prioritize rural candidates and young women seeking creative careers.
          </p>
          <p>
            Weekend mentorships connect students with elders who share lullabies, proverbs, and weaving rituals around communal hearths.
          </p>
        </section>

        {/* Sustainable Future */}
        <section>
          <h2 className="text-3xl font-bold text-turkmen-green mb-8">Sustainable Future</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-bold text-turkmen-green mb-3">Eco Dye Garden</h3>
              <p>
                Ashgabat&apos;s dye garden cultivates madder, indigo, and safflower with organic composting and drip irrigation.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-bold text-turkmen-green mb-3">Weaver Health</h3>
              <p>
                Ergonomic loom design and wellness clinics support the long-term health of artisans across provinces.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-bold text-turkmen-green mb-3">Community Reinvestment</h3>
              <p>
                Portions of every sale fund school libraries, cultural festivals, and emergency relief for weaving families.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
