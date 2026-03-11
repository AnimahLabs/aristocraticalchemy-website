import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-xl tracking-wide text-white">
            Aristocratic Alchemy
          </Link>
          <div className="flex gap-8 text-sm tracking-wider">
            <Link href="/products" className="text-white/70 hover:text-white transition-colors">
              Products
            </Link>
            <Link href="/articles" className="text-white/70 hover:text-white transition-colors">
              Articles
            </Link>
            <Link href="/philosophy" className="text-white/70 hover:text-white transition-colors">
              Philosophy
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient min-h-[85vh] flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
            Est. 2026
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-medium mb-8 leading-tight animate-fade-in-up animation-delay-100">
            <span className="text-white">Design Your </span>
            <span className="gold-gradient-text">Legacy</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
            We build digital products for those who value elegance in their systems. 
            Templates, tools, and workflows designed with intention.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-up animation-delay-300">
            <Link href="/products" className="btn-primary px-8 py-3 rounded-sm tracking-wide">
              Our Products
            </Link>
            <Link href="/philosophy" className="btn-primary px-8 py-3 rounded-sm tracking-wide">
              Our Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#d4af37] text-sm tracking-[0.2em] uppercase mb-6">Our Mission</p>
          <h2 className="font-display text-3xl md:text-4xl text-[#1a1a1a] mb-8">
            To inspire humanity to reach their own potential with style, control, and elegance.
          </h2>
          <p className="text-[#1a1a1a]/50 leading-relaxed">
            We believe in a world where individuals strive to become their best self in every regard — 
            business, self, spirit, and body. Our digital products are built to support that journey.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] text-sm tracking-[0.2em] uppercase mb-4">What We Create</p>
            <h2 className="font-display text-4xl text-[#1a1a1a]">Digital Products, Refined.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 rounded-lg animate-fade-in-up">
              <h3 className="font-display text-xl text-[#1a1a1a] mb-4">Templates</h3>
              <p className="text-[#1a1a1a]/60 text-sm">
                Notion, Excel, and system templates designed with intention. 
                Beautiful enough to use, powerful enough to work.
              </p>
            </div>
            <div className="card p-8 rounded-lg animate-fade-in-up animation-delay-100">
              <h3 className="font-display text-xl text-[#1a1a1a] mb-4">Workflows</h3>
              <p className="text-[#1a1a1a]/60 text-sm">
                AI-powered workflows that automate the mundane so you can focus on what matters.
              </p>
            </div>
            <div className="card p-8 rounded-lg animate-fade-in-up animation-delay-200">
              <h3 className="font-display text-xl text-[#1a1a1a] mb-4">Systems</h3>
              <p className="text-[#1a1a1a]/60 text-sm">
                Complete operating systems for business and life. 
                Built to scale, designed to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#1a1a1a] text-[#faf8f5]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg">Aristocratic Alchemy</p>
            <p className="text-[#faf8f5]/40 text-sm">Curated digital craft</p>
          </div>
          <div className="flex gap-8 text-sm text-[#faf8f5]/50">
            <Link href="/products" className="hover:text-[#d4af37] transition-colors">Products</Link>
            <Link href="/philosophy" className="hover:text-[#d4af37] transition-colors">Philosophy</Link>
          </div>
          <p className="text-[#faf8f5]/30 text-xs">© 2026 Aristocratic Alchemy</p>
        </div>
      </footer>
    </div>
  );
}
