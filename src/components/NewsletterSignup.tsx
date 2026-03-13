"use client";

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="font-display text-2xl mb-4">Join the Inner Circle</h3>
        <p className="text-white/60 mb-8">
          Get exclusive insights on wealth, systems, and building something that lasts.
        </p>
        
        {status === 'success' ? (
          <p className="text-[#d4af37]">Welcome to the circle. Check your inbox.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/40 focus:outline-none focus:border-[#d4af37]"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 bg-[#d4af37] text-black font-medium rounded-sm hover:bg-[#c4a027] transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Joining...' : 'Join'}
            </button>
          </form>
        )}
        
        {status === 'error' && (
          <p className="text-red-400 mt-4">Something went wrong. Try again.</p>
        )}
      </div>
    </section>
  );
}
