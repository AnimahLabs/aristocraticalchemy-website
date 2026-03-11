import Link from "next/link";

export default function Products() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-xl tracking-wide text-white">
            Aristocratic Alchemy
          </Link>
          <div className="flex gap-8 text-sm tracking-wider">
            <Link href="/products" className="text-white font-medium">
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

      {/* Hero */}
      <section className="hero-gradient-secondary pt-32 pb-16 px-6 min-h-[50vh] flex items-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#d4af37] text-sm tracking-[0.2em] uppercase mb-4">Our Products</p>
          <h1 className="font-display text-5xl text-white mb-6">Curated Digital Tools</h1>
          <p className="text-white/70 text-lg max-w-xl">
            Templates, workflows, and systems designed for those who value elegance in their work.
          </p>
        </div>
      </section>

      {/* Digital Playbook */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Graphic */}
            <div className="aspect-square bg-[#f0ede8] rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-44 bg-[#1a1a1a] mx-auto mb-6 rounded shadow-xl flex items-center justify-center">
                  <span className="text-[#d4af37] font-display text-2xl">QB</span>
                </div>
                <p className="text-[#1a1a1a]/40 text-sm tracking-widest uppercase">The Digital Playbook</p>
              </div>
            </div>
            
            {/* Details */}
            <div>
              <p className="text-[#d4af37] text-sm tracking-[0.2em] uppercase mb-4">Featured Product</p>
              <h2 className="font-display text-4xl text-[#1a1a1a] mb-6">The Digital Playbook</h2>
              <p className="text-[#1a1a1a]/70 mb-6 leading-relaxed">
                A comprehensive system for building your digital business. Includes templates, 
                workflows, and frameworks designed to help you create, launch, and scale 
                with intention and elegance.
              </p>
              <ul className="text-[#1a1a1a]/60 mb-8 space-y-2">
                <li>✓ Complete Notion template system</li>
                <li>✓ Email marketing workflows</li>
                <li>✓ Content creation frameworks</li>
                <li>✓ Launch blueprints</li>
              </ul>
              <a 
                href="https://alchemystic30.gumroad.com/l/opevne"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block px-8 py-3 rounded-sm tracking-wide"
              >
                Get on Gumroad — $27
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#d4af37] text-sm tracking-[0.2em] uppercase mb-8 text-center">Coming Soon</p>
          <h2 className="font-display text-3xl text-[#1a1a1a] text-center mb-12">What's Next</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#d4af37] text-2xl">⚡</span>
              </div>
              <h3 className="font-display text-xl text-[#1a1a1a] mb-2">AI Workflow Mastery</h3>
              <p className="text-[#1a1a1a]/50 text-sm">
                Complete AI-powered workflow templates for content, sales, and operations.
              </p>
            </div>
            
            <div className="card p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#d4af37] text-2xl">📊</span>
              </div>
              <h3 className="font-display text-xl text-[#1a1a1a] mb-2">Wealth Dashboard</h3>
              <p className="text-[#1a1a1a]/50 text-sm">
                A sophisticated net worth and financial tracking system for the modern investor.
              </p>
            </div>
            
            <div className="card p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#d4af37] text-2xl">🎯</span>
              </div>
              <h3 className="font-display text-xl text-[#1a1a1a] mb-2">Goal Architecture</h3>
              <p className="text-[#1a1a1a]/50 text-sm">
                A complete system for setting, tracking, and achieving goals in business and life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-[#faf8f5]">
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
