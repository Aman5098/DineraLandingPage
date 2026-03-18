import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone, Zap, Shield, Clock } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function LandingFinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Big glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-red-800/10 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-700/8 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-amber-600/20 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-widest mb-8"
        >
          <Zap className="w-3.5 h-3.5" />
          Abhi Shuru Karo — Kal Tak Intezaar Kyun?
        </motion.div>

        {/* Big headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
        >
          Aapka Restaurant{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #ff2d2d 0%, #f5a623 55%, #ff0055 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Deserve Karta Hai
          </span>{' '}
          Isse.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="text-slate-400 text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Har din jo aap bina Dinera ke chalate ho — woh din mein kuch orders lost, kuch billing errors, kuch customer frustration. Ab aur nahi.
        </motion.p>

        {/* Restaurant image banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="relative rounded-3xl overflow-hidden mb-12 h-56 sm:h-72"
        >
          <img
            src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&h=600&fit=crop"
            alt="Busy restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0303] via-[#0a0303]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0303]/60 via-transparent to-[#0a0303]/60" />

          {/* Overlay content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-white font-bold text-2xl sm:text-3xl mb-2 drop-shadow-lg">
                "Pehle survive karte the. Ab thrive karte hain."
              </p>
              <p className="text-slate-300 text-sm">— Rajesh Sharma, Spice Garden Delhi (Dinera user since 2023)</p>
            </div>
          </div>

          {/* Live stats floating */}
          <div className="absolute top-4 right-4 glass-strong rounded-xl border border-amber-500/30 px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-white font-semibold text-sm">247 restaurants live right now</p>
            </div>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-[0_0_40px_rgba(255,45,45,0.40)] hover:shadow-[0_0_70px_rgba(245,166,35,0.65)] transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            <Calendar className="w-5 h-5 relative z-10" />
            <span className="relative z-10">14-Day Free Trial Shuru Karo</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-base glass border border-green-500/30 text-green-400 hover:bg-green-500/10 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            WhatsApp Pe Baat Karo
          </motion.button>
        </motion.div>

        {/* Trust micro-copy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35, ease }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500"
        >
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-500" />
            No credit card needed
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-500" />
            Setup in 30 minutes
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-500" />
            Cancel anytime — no questions
          </span>
        </motion.div>

        {/* Final Hinglish line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45, ease }}
          className="mt-12 text-slate-600 text-sm italic"
        >
          "Restaurant tab bhi chalta hai jab aap wahan nahi hote." — yeh ab possible hai. 🍽️
        </motion.p>
      </div>
    </section>
  );
}
