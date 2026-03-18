import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Zap, ArrowRight, Phone } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const PLANS = [
  {
    name: 'Starter',
    hinglish: 'Chote restaurant ke liye',
    monthlyPrice: 1999,
    yearlyPrice: 1499,
    color: 'slate',
    popular: false,
    features: [
      { text: 'QR Ordering (1 menu)', included: true },
      { text: 'POS System', included: true },
      { text: 'Basic KDS Screen', included: true },
      { text: 'Up to 10 tables', included: true },
      { text: 'WhatsApp Notifications', included: true },
      { text: 'Daily Revenue Report', included: true },
      { text: 'AI Chatbot', included: false },
      { text: 'WhatsApp Ordering', included: false },
      { text: 'Multi-location', included: false },
      { text: 'Advanced Analytics', included: false },
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'outline',
  },
  {
    name: 'Pro',
    hinglish: 'Zyaadatar restaurants ke liye',
    monthlyPrice: 3999,
    yearlyPrice: 2999,
    color: 'cyan',
    popular: true,
    features: [
      { text: 'QR Ordering (unlimited menus)', included: true },
      { text: 'Full POS System', included: true },
      { text: 'Advanced KDS + Priority Queue', included: true },
      { text: 'Unlimited Tables & Seats', included: true },
      { text: 'WhatsApp Notifications', included: true },
      { text: 'Real-time Analytics Dashboard', included: true },
      { text: 'AI Menu Chatbot', included: true },
      { text: 'WhatsApp Ordering', included: true },
      { text: 'Multi-location (up to 3)', included: false },
      { text: 'Dedicated Account Manager', included: false },
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'gradient',
  },
  {
    name: 'Enterprise',
    hinglish: 'Multi-location chains ke liye',
    monthlyPrice: null,
    yearlyPrice: null,
    color: 'purple',
    popular: false,
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Unlimited Locations', included: true },
      { text: 'Custom AI Training', included: true },
      { text: 'White-label Option', included: true },
      { text: 'Dedicated Account Manager', included: true },
      { text: 'Custom Integrations', included: true },
      { text: 'SLA Guarantee', included: true },
      { text: 'On-site Training', included: true },
      { text: 'Priority 24/7 Support', included: true },
      { text: 'Custom Reporting', included: true },
    ],
    cta: 'Talk to Sales',
    ctaStyle: 'purple',
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  slate:  { border: 'border-white/10',         bg: '',                           text: 'text-slate-300',   badge: ''                                  },
  cyan:   { border: 'border-cyan-500/40',       bg: 'bg-cyan-500/5',              text: 'text-cyan-400',    badge: 'bg-cyan-500/20 text-cyan-300'       },
  purple: { border: 'border-purple-500/30',     bg: 'bg-purple-500/5',            text: 'text-purple-400',  badge: 'bg-purple-500/20 text-purple-300'   },
};

export default function LandingPricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Simple Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Aapke Budget Mein.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #00f5ff 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Koi Hidden Charge Nahi.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-slate-400 text-lg max-w-xl mx-auto mb-8"
          >
            Monthly ya yearly — dono mein 14-day free trial. No credit card required.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="inline-flex items-center gap-3 glass rounded-xl border border-white/10 p-1"
          >
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                !yearly ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                yearly ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              Yearly
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                Save 25%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
          {PLANS.map(({ name, hinglish, monthlyPrice, yearlyPrice, color, popular, features, cta, ctaStyle }, i) => {
            const c = colorMap[color];
            const price = yearly ? yearlyPrice : monthlyPrice;

            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className={`relative glass rounded-3xl border ${c.border} ${c.bg} ${
                  popular ? 'shadow-[0_0_60px_rgba(0,245,255,0.1)]' : ''
                } overflow-hidden`}
              >
                {/* Popular badge */}
                {popular && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
                )}
                {popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}

                <div className="p-7">
                  {/* Plan name */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      {popular && <Zap className="w-4 h-4 text-cyan-400" />}
                      <h3 className={`font-extrabold text-xl ${popular ? 'text-cyan-400' : 'text-white'}`}>{name}</h3>
                    </div>
                    <p className="text-slate-500 text-sm">{hinglish}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <AnimatePresence mode="wait">
                      {price !== null ? (
                        <motion.div
                          key={`${name}-${yearly}`}
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-end gap-2">
                            <span className="text-4xl font-extrabold text-white">₹{price?.toLocaleString('en-IN')}</span>
                            <span className="text-slate-500 text-sm mb-1.5">/month</span>
                          </div>
                          {yearly && (
                            <p className="text-emerald-400 text-xs mt-1 font-medium">
                              ✓ Billed yearly — ₹{((monthlyPrice || 0) - (yearlyPrice || 0)).toLocaleString('en-IN')}/mo bachao
                            </p>
                          )}
                        </motion.div>
                      ) : (
                        <motion.div
                          key="custom"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-3xl font-extrabold text-white">Custom</p>
                          <p className="text-slate-500 text-sm mt-1">Volume ke hisaab se pricing</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm mb-8 transition-all duration-300 ${
                      ctaStyle === 'gradient'
                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#030712] shadow-[0_0_24px_rgba(0,245,255,0.3)] hover:shadow-[0_0_40px_rgba(0,245,255,0.5)]'
                        : ctaStyle === 'purple'
                        ? 'bg-purple-500/20 border border-purple-500/40 text-purple-300 hover:bg-purple-500/30'
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    {ctaStyle === 'purple' ? <Phone className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    {cta}
                  </motion.button>

                  {/* Features list */}
                  <div className="space-y-3">
                    {features.map(({ text, included }) => (
                      <div key={text} className={`flex items-center gap-3 text-sm ${included ? 'text-slate-300' : 'text-slate-600'}`}>
                        {included
                          ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          : <X className="w-4 h-4 text-slate-700 shrink-0" />
                        }
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom FAQ strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center"
        >
          {[
            { q: 'Setup cost?', a: 'Zero. Free onboarding included.' },
            { q: 'Contract?', a: 'Month-to-month. Cancel anytime.' },
            { q: 'Data secure?', a: '100% encrypted. Bank-grade security.' },
          ].map(({ q, a }) => (
            <div key={q} className="glass rounded-xl border border-white/[0.06] p-4">
              <p className="text-white font-semibold text-sm mb-1">{q}</p>
              <p className="text-slate-500 text-xs">{a}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
