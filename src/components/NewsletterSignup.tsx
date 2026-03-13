"use client";

export default function NewsletterSignup() {
  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="font-display text-2xl mb-4">Join the Inner Circle</h3>
        <p className="text-white/60 mb-8">
          Get exclusive insights on wealth, systems, and building something that lasts.
        </p>
        
        <form 
          action="https://app.kit.com/forms/1386445/d4832bb9e1fa8c6029a86b7382594015"
          method="post"
          target="_blank"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            name="email_address"
            placeholder="Your email"
            required
            className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/40 focus:outline-none focus:border-[#d4af37]"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#d4af37] text-black font-medium rounded-sm hover:bg-[#c4a027] transition-colors"
          >
            Join
          </button>
        </form>
        
        <p className="text-white/30 text-xs mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
