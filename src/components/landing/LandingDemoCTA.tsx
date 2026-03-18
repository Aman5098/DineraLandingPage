import { motion } from 'framer-motion';
import { Calendar, Phone, Play, ArrowRight, CheckCircle2, Clock, Users, Star } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const WHAT_YOU_GET = [
  'Live demo of QR ordering + KDS + POS',
  'Your restaurant ka custom setup plan',
  'Pricing jo aapke budget mein fit ho',
  'Free 14-day trial — no card required',
];

const TRUST_STATS = [
  { icon: Users, value: '2,400+', label: 'Restaurants' },
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/8 rounded-full blur-[140px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="glass-strong rounded-3xl border border-cyan-500/20 overflow-hidden"
        >
          {/* Top gradient strip */}
          <div className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

          <div className="p-8 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-6"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Free Demo — No Commitment
                </motion.div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                  Dekho Kaise Kaam Karta Hai{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #00f5ff 0%, #a855f7 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Apne Restaurant Mein
                  </span>
                </h2>

                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  30 minute ki live demo mein aap dekhoge ki RestroOS aapke specific restaurant ke liye kaise kaam karega.
                  <span className="text-slate-200 font-medium"> Koi sales pressure nahi. Sirf real answers.</span>
                </p>

                {/* What you get */}
                <div className="space-y-3 mb-8">
                  {WHAT_YOU_GET.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Trust stats */}
                <div className="flex items-center gap-6">
                  {TRUST_STATS.map(({ icon: Icon, value, label }) => (
                    <div key={label} className="text-center">
                      <Icon className="w-4 h-4 text-slate-500 mx-auto mb-1" />
                      <p className="text-white font-bold text-sm">{value}</p>
                      <p className="text-slate-600 text-[10px] uppercase tracking-wider">{label}</p>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm">Live demo — aapke real menu ke saath</p>
                  </div>
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-base bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#030712] shadow-[0_0_30px_rgba(0,245,255,0.35)] hover:shadow-[0_0_50px_rgba(0,245,255,0.55)] transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  Free Demo Schedule Karo
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => scrollTo('#pricing')}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold glass border border-white/10 text-white hover:border-white/20 transition-all"
                  >
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                    Pricing Dekho
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold glass border border-green-500/30 text-green-400 hover:bg-green-500/10 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp Karo
                  </motion.button>
                </div>

                <p className="text-center text-slate-600 text-xs">
                  🔒 Your data is safe. No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
