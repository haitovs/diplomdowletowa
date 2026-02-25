import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ArtisansPage() {
  return (
    <div className="min-h-screen bg-desert-sand">
      <Header />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold uppercase tracking-wide mb-4">Meet the Hands Behind the Heritage</h1>
          <p className="text-lg opacity-95 max-w-2xl">
            Heritage Textiles thrives thanks to the devotion of Turkmen women and men who spin, dye, weave, felt, and embroider with unmatched skill.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Master Weavers */}
        <section>
          <h2 className="text-3xl font-bold text-turkmen-green mb-8">Master Weavers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-turkmen-green mb-3">Ogulbahar Saparova</h3>
              <p>
                Descended from Tekke weavers in Mary, Ogulbahar memorized 48 göl variations before age 15. She leads our archival reconstruction team, mentoring apprentices on knot tension and meditative breathing techniques.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-turkmen-green mb-3">Batyr Hudaybergenov</h3>
              <p>
                Batyr specializes in large-format Ersari rugs. Trained as an engineer, he innovated adjustable loom frames that reduce strain on artisans. His geometric interpretations marry mathematical precision with sacred symbolism.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-turkmen-green mb-3">Hüwdiya Masharipova</h3>
              <p>
                A guardian of bridal keteni rituals, Hüwdiya oversees silk reeling and natural dye labs. She documents each dye batch in handwritten ledgers and conducts workshops reconnecting young designers with ancestral color philosophies.
              </p>
            </div>
          </div>
        </section>

        {/* Apprenticeship */}
        <section className="bg-white/50 rounded-2xl p-8 border border-turkmen-green/10">
          <h2 className="text-3xl font-bold text-turkmen-green mb-4">Apprenticeship Pathways</h2>
          <p className="mb-4">
            Our apprenticeship program follows the Turkmen principle of "usta-şägirt"—a bond between master and learner grounded in respect. Each apprentice rotates through fiber preparation, natural dyeing, loom setup, and finishing ceremonies.
          </p>
          <p className="mb-4">
            Heritage Textiles provides scholarships for rural youth, accommodation in Ashgabat&apos;s artisan quarters, and health programs that ensure ergonomic weaving practices.
          </p>
          <p>
            Monthly mentorship circles pair apprentices with alumni working abroad, opening pathways for cross-cultural dialogue while reinforcing commitment to Turkmen aesthetics.
          </p>
        </section>

        {/* Innovation Labs */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">Innovation & Technology Labs</h2>
            <p className="mb-4">
              Our innovation labs bridge ancestral wisdom with contemporary tools. Artisans map motifs using tablet-enabled looms, translating hand-drawn diagrams into programmable instructions that preserve rhythm and spacing.
            </p>
            <p>
              Material scientists explore camelhair composites, silk-linen blends, and recycled fiber infusions that reduce waste while maintaining luxurious drape.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-turkmen-gold shadow-soft">
            <img src="/images/process-1.jpg" alt="Innovation Labs" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>

        {/* Community Weaving Houses */}
        <section>
          <h2 className="text-3xl font-bold text-turkmen-green mb-4">Community Weaving Houses</h2>
          <p className="mb-4">
            We operate weaving houses in Ashgabat, Anau, and Bayramaly. Each space blends traditional architecture with modern amenities like climate control for fiber preservation. Communal kitchens serve herbal tea and çorek bread.
          </p>
          <p>
            Every weaving house hosts "Aýdogdy Evenings," monthly gatherings where artisans share songs, poetry, and design sketches. Visitors can reserve appointments to observe the creation of a rug from warp  stretching to final clipping.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
