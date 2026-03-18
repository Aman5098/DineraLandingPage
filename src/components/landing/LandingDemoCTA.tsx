import { motion } from 'framer-motion';
import { Calendar, Phone, Play, ArrowRight, CheckCircle2, Clock, Users, Star } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const WHAT_YOU_GET = [
  'Live walkthrough of QR ordering, KDS, and POS in action',
  'A custom setup plan tailored to your specific operation',
  'Transparent pricing aligned with your scale and budget',
  'A 14-day free trial — no card, no commitment required',
];

const TRUST_STATS = [
  { icon: Users, value: '2,400+', label: 'Restaurants'   },
  { icon: Star,  value: '4.9/5',  label: 'Google Rating' },
  { icon: Clock, value: '30 min', label: 'Demo Duration' },
];

export default function LandingDemoCTA() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="demo" className="relative py-24 overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6b1d2e]/6 rounded-full blur-[160px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#8b2035]/18 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="glass-strong rounded-3xl border border-[#8b2035]/18 overflow-hidden"
        >
          {/* Top refined strip */}
          <div className="h-px bg-gradient-to-r from-[#7a1e30] via-[#b8922a] to-[#7a1e30]" />

          <div className="p-8 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6b1d2e]/12 border border-[#8b2035]/20 text-[#b8705a] text-xs font-semibold uppercase tracking-widest mb-6"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8705a] animate-pulse-soft" />
                  Complimentary Demo — No Obligation
                </motion.div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f5f0e8] tracking-tight mb-4 leading-tight">
                  See Exactly How Dinera{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #a02840 0%, #c9a84c 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Transforms Your Operation
                  </span>
                </h2>

                <p className="text-[#d1c1b2] text-lg leading-relaxed mb-8">
                  A focused 30-minute live demonstration, built around your restaurant's specific structure and challenges.
                  <span className="text-[#c0b0a0] font-medium"> No sales pressure. Only honest answers.</span>
                </p>

                {/* What you get */}
                <div className="space-y-3 mb-8">
                  {WHAT_YOU_GET.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-[#a09080]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Trust stats */}
                <div className="flex items-center gap-6">
                  {TRUST_STATS.map(({ icon: Icon, value, label }) => (
                    <div key={label} className="text-center">
                      <Icon className="w-4 h-4 text-[#bd8c61] mx-auto mb-1" />
                      <p className="text-[#e8e0d6] font-bold text-sm">{value}</p>
                      <p className="text-[#917966] text-[10px] uppercase tracking-wider">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — CTA card */}
              <div className="space-y-4">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden h-48">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
                    alt="Restaurant demo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#110e0d]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[#f5f0e8] font-semibold text-sm">Live demo built around your actual menu and floor plan</p>
                  </div>
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-all">
                      <Play className="w-6 h-6 text-[#f5f0e8] fill-[#f5f0e8]" />
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-base bg-gradient-to-r from-[#7a1e30] to-[#b8922a] text-[#f5f0e8] shadow-[0_0_24px_rgba(107,29,46,0.28)] hover:shadow-[0_0_40px_rgba(184,146,42,0.40)] transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Your Free Demo
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => scrollTo('#pricing')}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold glass border border-[#f5f0e8]/[0.07] text-[#a09080] hover:border-[#b8922a]/22 transition-all"
                  >
                    <ArrowRight className="w-4 h-4 text-[#b8922a]" />
                    View Pricing
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold glass border border-emerald-700/25 text-emerald-600 hover:bg-emerald-500/6 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp Us
                  </motion.button>
                </div>

                <p className="text-center text-[#917966] text-xs">
                  🔒 Your information is never shared. No unsolicited communication. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
