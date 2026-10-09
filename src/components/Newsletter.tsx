import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setErrorMessage('');
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-[#FF6B35] text-white p-8 sm:p-14 text-center overflow-hidden shadow-2xl shadow-[#FF6B35]/25">
          {/* Subtle geometric circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-black/10 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-xs text-xs font-bold uppercase tracking-wider text-white">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Weekly Secret Menu & Discounts</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Hungry for Exclusive Perks?
            </h2>

            <p className="text-sm sm:text-base text-orange-100 max-w-xl mx-auto leading-relaxed">
              Subscribe to get secret weekend deals, chef specials, and a flat Rs. 150 voucher straight to your inbox.
            </p>

            {status === 'success' ? (
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 border border-white/30 text-white flex items-center justify-center gap-3 animate-in zoom-in-95">
                <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                <div className="text-left">
                  <p className="font-bold text-sm">You are on the secret menu list!</p>
                  <p className="text-xs text-orange-100">
                    We just sent your Rs. 150 discount code to <span className="font-bold underline">{email}</span>.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-2">
                <div className="p-1.5 bg-white rounded-2xl sm:rounded-full shadow-lg flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <div className="flex items-center gap-2.5 px-3 py-2 sm:py-1 flex-1">
                    <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Enter your email address..."
                      className="w-full text-xs sm:text-sm text-[#1F2937] placeholder:text-stone-400 bg-transparent focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl sm:rounded-full bg-[#1F2937] hover:bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {status === 'error' && (
                  <p className="text-xs font-semibold text-white bg-black/30 py-1 px-3 rounded-full inline-block">
                    {errorMessage}
                  </p>
                )}
              </form>
            )}

            <p className="text-[11px] text-orange-200">
              No spam, ever. Unsubscribe at any time with one click.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
