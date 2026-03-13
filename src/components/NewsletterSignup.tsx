"use client";

import { useEffect } from 'react';

export default function NewsletterSignup() {
  useEffect(() => {
    // Load Kit form script
    const script = document.createElement('script');
    script.src = 'https://aristocratic-alchemy.kit.com/685c321026/index.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="font-display text-2xl mb-4">Join the Inner Circle</h3>
        <p className="text-white/60 mb-8">
          Get exclusive insights on wealth, systems, and building something that lasts.
        </p>
        
        {/* Kit Form Container */}
        <div className="kit-form-container" data-uid="685c321026"></div>
        
        <p className="text-white/30 text-xs mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
