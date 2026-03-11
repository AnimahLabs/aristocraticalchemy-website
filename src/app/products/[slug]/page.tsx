import Link from "next/link";

const products: Record<string, { name: string; description: string; price: string; features: string[] }> = {
  "quiet-millionaire": {
    name: "The Quiet Millionaire System",
    description: "A comprehensive Notion template for building wealth with intention. Track net worth, set financial goals, and monitor progress with elegant dashboards.",
    price: "$47",
    features: ["Net worth tracker", "Goal setting framework", "Investment portfolio view", "Monthly review prompts"],
  },
  "pinterest-bundle": {
    name: "Pinterest Growth Bundle",
    description: "Everything you need to scale your Pinterest presence. Templates, strategic prompts, and a complete growth system.",
    price: "$29",
    features: ["Pin templates (Canva)", "Content calendar", "Keyword research guide", "Analytics dashboard"],
  },
  "prompt-master": {
    name: "AI Prompt Master Pack",
    description: "200+ curated prompts for content creation, brainstorming, and productivity. Built for creators who demand quality.",
    price: "$19",
    features: ["200+ prompts", "Content creation suite", "Brainstorming tools", "Copywriting templates"],
  },
};

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  // For now, use a default - in real app would use params.slug
  const slug = "quiet-millionaire";
  const product = products[slug] || products["quiet-millionaire"];

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
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-[#d4af37] text-sm mb-8 inline-block hover:underline">
            ← Back to Products
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="h-80 bg-[#141414] rounded-lg flex items-center justify-center border border-[#d4af37]/10">
              <span className="text-[#d4af37]/30 font-display text-6xl">◇</span>
            </div>
            
            {/* Product Info */}
            <div>
              <p className="text-[#d4af37] text-sm tracking-[0.2em] uppercase mb-4">Digital Product</p>
              <h1 className="font-display text-4xl text-[#f5f5dc] mb-4">{product.name}</h1>
              <p className="text-[#f5f5dc]/60 leading-relaxed mb-8">{product.description}</p>
              
              <div className="mb-8">
                <h3 className="text-[#f5f5dc] font-medium mb-4">What's Included</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="text-[#f5f5dc]/50 flex items-center gap-3">
                      <span className="text-[#d4af37]">○</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center gap-6">
                <span className="font-display text-3xl text-[#d4af37]">{product.price}</span>
                <button className="btn-gold px-8 py-3 rounded-sm tracking-wide">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
