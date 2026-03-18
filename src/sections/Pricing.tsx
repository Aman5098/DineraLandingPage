import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Building2, Rocket } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';

const plans = [
  {
    id: 'starter',
    icon: Rocket,
    name: 'Starter',
    tagline: 'Perfect for side projects',
    monthlyPrice: 0,
    yearlyPrice: 0,
    accent: 'cyan',
    borderClass: 'border-white/8',
    headerClass: 'from-slate-900 to-slate-800',
    features: [
      '5,000 AI credits / month',
      '3 active workflows',
      '1 AI agent',
      'Community support',
      'Public API access',
      '1GB vector storage',
    ],
    cta: 'Get Started Free',
    ctaClass: 'border border-white/15 text-white/70 hover:bg-white/5 hover:text-white',
  },
  {
    id: 'pro',
    icon: Zap,
    name: 'Pro',
    tagline: 'For growing teams',
    monthlyPrice: 49,
    yearlyPrice: 39,
    accent: 'cyan',
    popular: true,
    borderClass: 'border-cyan-500/40',
    headerClass: 'from-cyan-950 to-slate-900',
    features: [
      '100,000 AI credits / month',
      'Unlimited workflows',
      '10 AI agents',
      'Priority support (4h SLA)',
      'All API features + webhooks',
      '50GB vector storage',
      'Multi-model switching',
      'Real-time analytics',
      'Custom domain',
    ],
    cta: 'Start Free Trial',
    ctaClass: 'bg-cyan-500 text-black font-bold hover:bg-cyan-400 shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:shadow-[0_0_50px_rgba(0,245,255,0.6)]',
  },
  {
    id: 'enterprise',
    icon: Building2,
    name: 'Enterprise',
    tagline: 'For mission-critical scale',
    monthlyPrice: 199,
    yearlyPrice: 159,
    accent: 'purple',
    borderClass: 'border-purple-500/30',
    headerClass: 'from-purple-950 to-slate-900',
    features: [
      'Unlimited AI credits',
      'Unlimited everything',
      'Unlimited AI agents',
      'Dedicated support (1h SLA)',
      'White-label API',
      '1TB+ vector storage',
      'Private LLM deployment',
      'Advanced analytics + BI',
      'Custom contracts + SLA',
      'SSO / SAML / LDAP',
      'Audit logs & compliance',
    ],
    cta: 'Talk to Sales',
    ctaClass: 'border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400',
  },
];

const accentColors = {
  cyan: { dot: 'text-cyan-400', check: 'text-cyan-400', badge: 'bg-cyan-500 text-black' },
  purple: { dot: 'text-purple-400', check: 'text-purple-400', badge: 'bg-purple-500 text-white' },
};

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/4 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <SectionLabel color="cyan">Pricing</SectionLabel>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4"
          >
            Simple, transparent{' '}
            <span className="gradient-text-purple">pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/40 max-w-lg mx-auto mb-8"
          >
            No hidden fees. No per-seat surprises. Pay for what you use.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center glass rounded-full p-1 border border-white/10"
          >
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !yearly ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                yearly ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'
              }`}
            >
              Yearly
              <span className="text-xs px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold">
                −20%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const colors = accentColors[plan.accent as keyof typeof accentColors];
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className={`relative glass rounded-2xl overflow-hidden border ${plan.borderClass} ${
                  plan.popular ? 'lg:scale-[1.03] lg:-translate-y-1' : ''
                } transition-all duration-300`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 px-5 py-1.5 text-xs font-bold rounded-b-2xl ${colors.badge} shadow-[0_0_20px_rgba(0,245,255,0.5)]`}>
                    ✦ MOST POPULAR
                  </div>
                )}

                {/* Header */}
                <div className={`bg-gradient-to-b ${plan.headerClass} p-6 ${plan.popular ? 'pt-10' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10`}>
                      <plan.icon className={`w-5 h-5 ${colors.dot}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{plan.name}</h3>
                      <p className="text-xs text-white/40">{plan.tagline}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-white/40 text-lg font-light">$</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={price}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="text-5xl font-black text-white tracking-tight"
                      >
                        {price}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-white/40 text-sm mb-2">/mo</span>
                  </div>
                  {yearly && plan.yearlyPrice > 0 && (
                    <p className="text-xs text-white/30 mb-1">
                      Billed ${plan.yearlyPrice * 12}/year
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="p-6 space-y-3 mb-4">
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <Check className={`w-4 h-4 flex-shrink-0 ${colors.check}`} />
                      <span className="text-sm text-white/65">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${plan.ctaClass}`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-white/25 mt-10"
        >
          All plans include a 14-day free trial. No credit card required.{' '}
          <a href="#" className="text-cyan-400/60 hover:text-cyan-400 underline transition-colors">
            Compare all features →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
