import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, ArrowRight, Phone } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const PLANS = [
  {
    name: 'Starter',
    subtitle: 'For independent restaurants getting started',
    monthlyPrice: 1999,
    yearlyPrice: 1499,
    color: 'neutral',
    popular: false,
    features: [
      { text: 'QR Ordering (single menu)',        included: true  },
      { text: 'POS System',                        included: true  },
      { text: 'Basic Kitchen Display',             included: true  },
      { text: 'Up to 10 tables',                   included: true  },
      { text: 'WhatsApp Notifications',            included: true  },
      { text: 'Daily Revenue Report',              included: true  },
      { text: 'AI Menu Assistant',                 included: false },
      { text: 'WhatsApp Ordering',                 included: false },
      { text: 'Multi-location Management',         included: false },
      { text: 'Advanced Analytics',                included: false },
    ],
    cta: 'Begin Free Trial',
    ctaStyle: 'outline',
  },
  {
    name: 'Professional',
    subtitle: 'For established restaurants ready to scale',
    monthlyPrice: 3999,
    yearlyPrice: 2999,
    color: 'brand',
    popular: true,
    features: [
      { text: 'QR Ordering (unlimited menus)',       included: true  },
      { text: 'Full POS System',                     included: true  },
      { text: 'Advanced KDS with Priority Queue',    included: true  },
      { text: 'Unlimited Tables & Seats',            included: true  },
      { text: 'WhatsApp Notifications',              included: true  },
      { text: 'Real-Time Analytics Dashboard',       included: true  },
      { text: 'AI Menu Assistant',                   included: true  },
      { text: 'WhatsApp Ordering',                   included: true  },
      { text: 'Multi-location (up to 3)',            included: false },
      { text: 'Dedicated Account Manager',           included: false },
    ],
    cta: 'Begin Free Trial',
    ctaStyle: 'gradient',
  },
  {
    name: 'Enterprise',
    subtitle: 'For multi-location chains and large operations',
    monthlyPrice: null,
    yearlyPrice: null,
    color: 'gold',
    popular: false,
    features: [
      { text: 'Everything in Professional',        included: true },
      { text: 'Unlimited Locations',               included: true },
      { text: 'Custom AI Model Training',          included: true },
      { text: 'White-Label Option',                included: true },
      { text: 'Dedicated Account Manager',         included: true },
      { text: 'Custom System Integrations',        included: true },
      { text: 'SLA Guarantee',                     included: true },
      { text: 'On-Site Training & Onboarding',     included: true },
      { text: 'Priority 24/7 Support',             included: true },
      { text: 'Custom Reporting Suite',            included: true },
    ],
    cta: 'Speak with Sales',
    ctaStyle: 'gold',
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string }> = {
  neutral: { border: 'border-[#f5f0e8]/[0.07]',   bg: '',                          text: 'text-[#a09080]'  },
  brand:   { border: 'border-[#8b2035]/28',         bg: 'bg-[#6b1d2e]/4',           text: 'text-[#b8705a]'  },
  gold:    { border: 'border-[#b8922a]/22',         bg: 'bg-[#b8922a]/4',           text: 'text-[#c9a84c]'  },
};

export default function LandingPricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#6b1d2e]/18 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6b1d2e]/12 border border-[#8b2035]/20 text-[#b8705a] text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8705a] animate-pulse-soft" />
            Transparent Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f5f0e8] tracking-tight mb-4"
          >
            Straightforward Plans.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a02840 0%, #c9a84c 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              No Hidden Charges.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-[#7a6858] text-lg max-w-xl mx-auto mb-8"
          >
            Every plan includes a 14-day free trial. No credit card required to begin.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="inline-flex items-center gap-3 glass rounded-xl border border-[#f5f0e8]/[0.07] p-1"
          >
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                !yearly ? 'bg-[#f5f0e8]/[0.08] text-[#e8e0d6]' : 'text-[#4a3828] hover:text-[#8a7868]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                yearly ? 'bg-[#f5f0e8]/[0.08] text-[#e8e0d6]' : 'text-[#4a3828] hover:text-[#8a7868]'
              }`}
            >
              Annual
              <span className="px-2 py-0.5 rounded-full bg-emerald-600/15 text-emerald-500 text-[10px] font-bold border border-emerald-600/22">
                Save 25%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
          {PLANS.map(({ name, subtitle, monthlyPrice, yearlyPrice, color, popular, features, cta, ctaStyle }, i) => {
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
                  popular ? 'shadow-[0_0_50px_rgba(107,29,46,0.10)]' : ''
                } overflow-hidden`}
              >
                {/* Popular badge — top stripe */}
                {popular && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#7a1e30] via-[#b8922a] to-[#7a1e30]" />
                )}
                {popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r from-[#6b1d2e]/18 to-[#b8922a]/18 text-[#c9a84c] border border-[#b8922a]/25">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-7">
                  {/* Plan name */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`font-extrabold text-xl ${popular ? 'text-[#c9a84c]' : 'text-[#e8e0d6]'}`}>{name}</h3>
                    </div>
                    <p className="text-[#4a3828] text-sm">{subtitle}</p>
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
                            <span className="text-4xl font-extrabold text-[#f5f0e8]">₹{price?.toLocaleString('en-IN')}</span>
                            <span className="text-[#4a3828] text-sm mb-1.5">/month</span>
                          </div>
                          {yearly && (
                            <p className="text-emerald-600 text-xs mt-1 font-medium">
                              ✓ Billed annually — saving ₹{((monthlyPrice || 0) - (yearlyPrice || 0)).toLocaleString('en-IN')}/mo
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
                          <p className="text-3xl font-extrabold text-[#f5f0e8]">Custom</p>
                          <p className="text-[#4a3828] text-sm mt-1">Pricing based on your scale and requirements</p>
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
                        ? 'bg-gradient-to-r from-[#7a1e30] to-[#b8922a] text-[#f5f0e8] shadow-[0_0_20px_rgba(107,29,46,0.25)] hover:shadow-[0_0_34px_rgba(184,146,42,0.38)]'
                        : ctaStyle === 'gold'
                        ? 'bg-[#b8922a]/10 border border-[#b8922a]/30 text-[#c9a84c] hover:bg-[#b8922a]/18'
                        : 'bg-[#f5f0e8]/[0.04] border border-[#f5f0e8]/[0.08] text-[#c0b0a0] hover:bg-[#f5f0e8]/[0.07]'
                    }`}
                  >
                    {ctaStyle === 'gold' ? <Phone className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    {cta}
                  </motion.button>

                  {/* Features list */}
                  <div className="space-y-3">
                    {features.map(({ text, included }) => (
                      <div key={text} className={`flex items-center gap-3 text-sm ${included ? 'text-[#a09080]' : 'text-[#3a3028]'}`}>
                        {included
                          ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          : <X className="w-4 h-4 text-[#2a2520] shrink-0" />
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
            { q: 'Setup cost?',  a: 'None. Guided onboarding is included at no charge.'  },
            { q: 'Contracts?',   a: 'Month-to-month. Cancel at any time, no questions.'  },
            { q: 'Data security?', a: '100% encrypted. Bank-grade infrastructure.'       },
          ].map(({ q, a }) => (
            <div key={q} className="glass rounded-xl border border-[#f5f0e8]/[0.05] p-4">
              <p className="text-[#c0b0a0] font-semibold text-sm mb-1">{q}</p>
              <p className="text-[#4a3828] text-xs">{a}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
