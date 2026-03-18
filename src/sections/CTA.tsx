import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal, Github } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/8 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-pink-500/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Terminal badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full border border-white/10 mb-10 font-mono"
        >
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-white/50">
            $ <span className="text-cyan-400">npx create-nexus-app</span>
            <span className="animate-pulse text-cyan-400">█</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.92] mb-6"
        >
          <span className="text-white">Ready to build</span>
          <br />
          <span className="gradient-text-multi animate-gradient bg-[length:200%_200%]">
            something great?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xl text-white/40 max-w-xl mx-auto mb-12"
        >
          Join 50,000+ builders who chose NexusAI. Ship your first AI-powered feature in under 10 minutes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-2.5 px-10 py-4 rounded-xl font-bold text-base text-black bg-gradient-to-r from-cyan-400 to-cyan-300 shadow-[0_0_40px_rgba(0,245,255,0.45)] hover:shadow-[0_0_60px_rgba(0,245,255,0.7)] transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            Start for Free — No Card
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-4 rounded-xl font-medium text-sm text-white/70 glass border border-white/12 hover:border-white/25 hover:text-white transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            Star on GitHub
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/8 text-white/40">
              12.4k ★
            </span>
          </motion.a>
        </motion.div>

        {/* Feature bullets */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/30"
        >
          {[
            '✓ Free forever plan',
            '✓ No credit card',
            '✓ Open-source SDK',
            '✓ 14-day Pro trial',
            '✓ Cancel anytime',
          ].map((item) => (
            <span key={item} className="whitespace-nowrap">{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
