import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone, Shield, Clock, CheckCircle2 } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function LandingFinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Refined ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#6b1d2e]/8 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#b8922a]/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#8b2035]/22 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#b8922a]/12 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#6b1d2e]/12 border border-[#8b2035]/20 text-[#b8705a] text-xs font-semibold uppercase tracking-widest mb-8"
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          Begin Today — No Commitment Required
        </motion.div>

        {/* Big headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#f5f0e8] tracking-tight leading-[1.1] mb-6"
        >
          Your Restaurant{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #a02840 0%, #c9a84c 55%, #d4b97a 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Deserves Better
          </span>{' '}
          Than This.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="text-[#d1c1b2] text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Every day without a proper system costs you orders, revenue, and owner peace of mind. That changes the moment Dinera goes live.
        </motion.p>

        {/* Restaurant image banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="relative rounded-3xl overflow-hidden mb-12 h-56 sm:h-72"
        >
          <img
            src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&h=600&fit=crop"
            alt="Thriving restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#110e0d] via-[#110e0d]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#110e0d]/50 via-transparent to-[#110e0d]/50" />

          {/* Overlay content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-[#f5f0e8] font-bold text-2xl sm:text-3xl mb-2 drop-shadow-lg">
                "We went from surviving service to running it."
              </p>
              <p className="text-[#d1bba8] text-sm">— Rajesh Sharma, Spice Garden New Delhi · Dinera customer since 2023</p>
            </div>
          </div>

          {/* Live stats floating */}
          <div className="absolute top-4 right-4 glass-strong rounded-xl border border-[#b8922a]/20 px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[#e8e0d6] font-semibold text-sm">247 restaurants live right now</p>
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
            className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg bg-gradient-to-r from-[#7a1e30] to-[#b8922a] text-[#f5f0e8] shadow-[0_0_32px_rgba(107,29,46,0.32)] hover:shadow-[0_0_56px_rgba(184,146,42,0.48)] transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            <Calendar className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Start Your 14-Day Free Trial</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-base glass border border-emerald-700/22 text-emerald-600 hover:bg-emerald-500/6 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Speak with Our Team
          </motion.button>
        </motion.div>

        {/* Trust micro-copy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35, ease }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#bd8c61]"
        >
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-700" />
            No credit card needed
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-700" />
            Operational in 30 minutes
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            Cancel anytime — no penalties
          </span>
        </motion.div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45, ease }}
          className="mt-12 text-[#917966] text-sm italic"
        >
          "Your restaurant runs exactly as you intend — whether you are present or not." · This is now possible. 🍽️
        </motion.p>
      </div>
    </section>
  );
}
