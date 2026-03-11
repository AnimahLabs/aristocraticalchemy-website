import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#d4af37]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-xl tracking-wide text-[#d4af37]">
            Product Studio
          </Link>
          <div className="flex gap-8 text-sm tracking-wider">
            <Link href="/" className="text-[#f5f5dc]/70 hover:text-[#d4af37] transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-[#f5f5dc]/70 hover:text-[#d4af37] transition-colors">
              About
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-6">Our Story</p>
          <h1 className="font-display text-5xl text-[#f5f5dc] mb-12">Built for Those Who Notice</h1>
          
          <div className="prose prose-invert prose-lg">
            <p className="text-[#f5f5dc]/70 leading-relaxed mb-8">
              We started with a simple observation: most digital tools feel utilitarian at best, 
              cluttered at worst. They get the job done, but they don't inspire. They function, 
              but they don't resonate.
            </p>
            
            <p className="text-[#f5f5dc]/70 leading-relaxed mb-8">
              Product Studio exists to change that. We believe the tools you use shape the 
              work you create. When your systems are elegant, your thinking becomes elegant. 
              When your templates are beautiful, you actually want to use them.
            </p>
            
            <p className="text-[#f5f5dc]/70 leading-relaxed mb-8">
              Every template we create is built with quiet attention to detail—the kind of 
              thoughtfulness that doesn't announce itself but quietly elevates everything 
              around it. We call this approach "old money aesthetics": the confidence of 
              quality that doesn't need to shout.
            </p>
            
            <p className="text-[#f5f5dc]/70 leading-relaxed mb-12">
              We're Jonathan and Ame, building tools for creators who value intention 
              as much as execution. Welcome to Product Studio.
            </p>
          </div>
          
          <div className="border-t border-[#d4af37]/10 pt-12">
            <Link href="/" className="text-[#d4af37] border-b border-[#d4af37]/30 pb-1 hover:border-[#d4af37] transition-colors">
              ← Browse our collection
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#d4af37]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-[#d4af37] text-lg">Product Studio</p>
            <p className="text-[#f5f5dc]/40 text-sm">Curated digital craft</p>
          </div>
          <p className="text-[#f5f5dc]/30 text-xs">© 2026 Product Studio</p>
        </div>
      </footer>
    </div>
  );
}
