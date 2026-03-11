import Link from "next/link";

export default function Articles() {
  const articles = [
    {
      slug: "the-slow-road",
      title: "The Slow Road",
      excerpt: "Building wealth like the old money generation. Patience, discipline, and intentionality.",
      date: "March 10, 2026",
      category: "Philosophy"
    },
    {
      slug: "why-aesthetics-matter",
      title: "Why Aesthetics Matter",
      excerpt: "In a world of noise, visual silence is a competitive advantage.",
      date: "March 8, 2026",
      category: "Design"
    },
    {
      slug: "systems-over-goals",
      title: "Systems Over Goals",
      excerpt: "Why the focus on systems changes everything in business and life.",
      date: "March 5, 2026",
      category: "Strategy"
    }
  ];

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
            <Link href="/articles" className="text-white font-medium">
              Articles
            </Link>
            <Link href="/philosophy" className="text-white/70 hover:text-white transition-colors">
              Philosophy
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient-secondary pt-32 pb-16 px-6 min-h-[40vh] flex items-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#d4af37] text-sm tracking-[0.2em] uppercase mb-4">Journal</p>
          <h1 className="font-display text-5xl text-white mb-6">Articles</h1>
          <p className="text-white/70 text-lg max-w-xl">
            Thoughts on wealth, design, systems, and the art of living intentionally.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link 
                key={article.slug} 
                href={`/articles/${article.slug}`}
                className="card p-8 rounded-lg block group"
              >
                <p className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-3">
                  {article.category}
                </p>
                <h2 className="font-display text-2xl text-[#1a1a1a] mb-4 group-hover:text-[#d4af37] transition-colors">
                  {article.title}
                </h2>
                <p className="text-[#1a1a1a]/60 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <p className="text-[#1a1a1a]/40 text-sm">{article.date}</p>
              </Link>
            ))}
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
