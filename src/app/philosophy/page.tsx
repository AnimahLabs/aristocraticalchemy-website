import Link from "next/link";

export default function Philosophy() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-xl tracking-wide text-[#1a1a1a]">
            Aristocratic Alchemy
          </Link>
          <div className="flex gap-8 text-sm tracking-wider">
            <Link href="/products" className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors">
              Products
            </Link>
            <Link href="/philosophy" className="text-[#1a1a1a] font-medium">
              Philosophy
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero with large graphic */}
      <section className="pt-0">
        <div className="h-[50vh] bg-gradient-to-b from-[#faf8f5] to-[#e8e4dc] flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4">Our Philosophy</p>
            <h1 className="font-display text-5xl md:text-6xl text-[#1a1a1a]">
              Design Your Legacy
            </h1>
          </div>
        </div>
      </section>

      {/* Main Philosophy */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[#1a1a1a] mb-8">
            To inspire humanity to reach their own potential with style, control, and elegance.
          </h2>
          <p className="text-[#1a1a1a]/60 leading-relaxed text-lg">
            We believe in a world where individuals strive to become their best self in every regard — 
            business, self, spirit, and body. We build the digital tools that support that journey.
          </p>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center p-8">
              <div className="w-16 h-16 border-2 border-[#1a1a1a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#1a1a1a] text-2xl font-display">B</span>
              </div>
              <h3 className="font-display text-xl text-[#1a1a1a] mb-2">Business</h3>
              <p className="text-[#1a1a1a]/50">
                Build systems that scale. Create value that compounds. 
                Run your business with the same elegance you'd expect from a fine institution.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 border-2 border-[#1a1a1a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#1a1a1a] text-2xl font-display">S</span>
              </div>
              <h3 className="font-display text-xl text-[#1a1a1a] mb-2">Self</h3>
              <p className="text-[#1a1a1a]/50">
                Continuous improvement requires intention. 
                Our tools help you track, measure, and optimize your personal growth.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 border-2 border-[#1a1a1a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#1a1a1a] text-2xl font-display">⚜</span>
              </div>
              <h3 className="font-display text-xl text-[#1a1a1a] mb-2">Spirit</h3>
              <p className="text-[#1a1a1a]/50">
                True wealth is not just monetary. 
                Cultivate wisdom, purpose, and meaning in everything you do.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 border-2 border-[#1a1a1a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#1a1a1a] text-2xl font-display">Ω</span>
              </div>
              <h3 className="font-display text-xl text-[#1a1a1a] mb-2">Body</h3>
              <p className="text-[#1a1a1a]/50">
                The vessel matters. 
                Optimize your physical reality to support your ambitions and aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-[#faf8f5]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl mb-6">Begin Your Journey</h2>
          <p className="text-[#faf8f5]/60 mb-8">
            Explore our curated digital products designed to support your evolution 
            across business, self, spirit, and body.
          </p>
          <Link 
            href="/products"
            className="inline-block bg-[#faf8f5] text-[#1a1a1a] px-8 py-3 rounded-sm tracking-wide font-medium hover:bg-[#d4af37] transition-colors"
          >
            View Products
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#1a1a1a] text-[#faf8f5]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg">Aristocratic Alchemy</p>
            <p className="text-[#faf8f5]/40 text-sm">Curated digital craft</p>
          </div>
          <p className="text-[#faf8f5]/30 text-xs">© 2026 Aristocratic Alchemy</p>
        </div>
      </footer>
    </div>
  );
}
