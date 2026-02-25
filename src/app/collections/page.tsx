import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-desert-sand">
      <Header />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold uppercase tracking-wide mb-4">Collections of Turkmen Splendor</h1>
          <p className="text-lg opacity-95 max-w-2xl">
            From enduring Tekke carpets to luminous silk keteni, each collection narrates centuries of Turkmen artistry while evolving for the homes and wardrobes of today.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Tekke Crimson Carpets */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">Tekke Crimson Carpets</h2>
            <p className="mb-4">
              The story of our Tekke Crimson Carpets begins in the 17th century when Tekke tribes settled near the Murgab River.  Matriarch weavers guarded octagonal göl motifs that symbolized protection, prosperity, and unity.
            </p>
            <p className="mb-4">
              Today, Dowletowa Textiles preserves these historic motifs while integrating contemporary scale and palette. Our current Tekke collection features hand-spun wool dyed in gradually layered crimson, saffron, and sage.
            </p>
            <p>
              Exclusive ceremonial commissions weave turquoise guard bands and gilded cloud borders that reference Tekke legends about guardianship and safe passage.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-turkmen-gold shadow-soft">
            <img src="/images/products/product-camel-trapping-1.jpg" alt="Tekke Crimson Carpets" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>

        {/* Yomut Desert Kilims */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl p-6 border-2 border-turkmen-gold shadow-soft">
            <img src="/images/products/product-yomut-gol-carpet-1.jpg" alt="Yomut Desert Kilims" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">Yomut Desert Kilims</h2>
            <p className="mb-4">
              Yomut nomads once crisscrossed the Kara-Bogaz-Gol shores, weaving flatweave kilims lightweight enough to fold onto camel caravans. Their motifs echo migrating bird patterns, undulating dunes, and the rippling of the Caspian Sea.
            </p>
            <p className="mb-4">
              Our modern Yomut Desert Kilims reinterpret these ancestral maps through sustainable materials. Artisans blend hand-carded sheep wool with locally cultivated hemp for additional durability.
            </p>
            <p>
              Limited editions explore gradient storytelling: ombré dunes shift from ember to moonlit silver, while embroidery accents trace the migration paths of falcons.
            </p>
          </div>
        </section>

        {/* Silk Keteni Reveries */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">Silk Keteni Reveries</h2>
            <p className="mb-4">
              Silk keteni originated along the Silk Road crossroads of Merv, where Turkmen artisans traded raw cocoons for Persian satin weaving techniques. The fabric&apos;s luminous sheen came from expertly balanced satin floats and perfectly spun mulberry silk.
            </p>
            <p className="mb-4">
              We collaborate with local sericulturists who rear silkworms on organic mulberry orchards near Mary. The silk is reeled by hand, twisted into singles, and woven on traditional wooden looms modified with ergonomic treadles.
            </p>
            <p>
              Each bolt receives a luminous finishing glaze using pomegranate rind and rosewater, producing a subtle shimmer that responds to candlelight during evening celebrations.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-turkmen-gold shadow-soft">
            <img src="/images/silk-road.jpg" alt="Silk Keteni Reveries" className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>

        {/* Felted Shyrdak Landscapes */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl p-6 border-2 border-turkmen-gold shadow-soft">
            <img src="/images/products/product-ersari-elephant-rug-1.jpg" alt="Felted Shyrdak Landscapes" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-turkmen-green mb-4">Felted Shyrdak Landscapes</h2>
            <p className="mb-4">
              Felted shyrdaks trace their roots to the nomadic yurts of the Goklen and Ersari tribes, where layered wool mats insulated families from desert chills. Patterns drew inspiration from the landscape: stylized horns, flowing water bands, and tightly coiled spirals.
            </p>
            <p className="mb-4">
              The present-day Shyrdak Landscapes collection transforms this functional heritage into modern art. Our felters use wool from Karakum-adapted sheep, carded and beaten by hand before being rolled beneath reeds and saturated with hot water.
            </p>
            <p>
              Commissioned pieces may incorporate pressed desert flora, memorializing weddings, pilgrimages, or ancestral encounters with sacred springs.
            </p>
          </div>
        </section>

        {/* Contemporary Desert Horizon */}
        <section className="bg-white/50 rounded-2xl p-8 border border-turkmen-green/10">
          <h2 className="text-3xl font-bold text-turkmen-green mb-4">Contemporary Desert Horizon Series</h2>
          <p className="mb-4">
            The Desert Horizon Series emerged from our centenary dialogue with global designers seeking textiles that speak boldly in modern architecture. We began by cataloging centuries-old motifs, then deconstructing them into geometric fragments that echo Turkmen identity.
          </p>
          <p className="mb-4">
            Current pieces include large-format rugs woven with tonal gradations reminiscent of shifting dunes at sunrise, textile panels stitched with luminous silk cording, and sculptural throws that juxtapose felted wool with sheer silk organza.
          </p>
          <p>
            Smart tags embedded into each item store information about fiber origins, dye batches, artisan teams, and suggested care practices.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
