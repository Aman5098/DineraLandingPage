import { motion } from 'framer-motion';
import {
  AlertTriangle, FileX, Users, Flame, BarChart2, RefreshCw, Lock,
} from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const PROBLEMS = [
  {
    icon: FileX,
    title: 'Orders Lost in Communication',
    subtitle: 'Every verbal handoff is a potential failure',
    desc: 'A waiter mishears a modifier. The kitchen misreads handwriting. A dish arrives wrong. The customer is frustrated, the waiter is embarrassed, the chef is defensive — and the cycle repeats every single service.',
    color: 'text-[#b8705a]',
    bg: 'bg-[#6b2010]/8 border-[#8b2a18]/18',
    glow: 'hover:shadow-[0_0_28px_rgba(107,29,46,0.10)]',
  },
  {
    icon: AlertTriangle,
    title: 'Billing Errors Erode Trust',
    subtitle: 'Manual calculation invites mistakes',
    desc: 'Incorrect GST, inconsistent discounts, split-bill confusion. A customer is overcharged and makes a scene. Another is undercharged — a silent loss absorbed every night. Neither outcome is acceptable.',
    color: 'text-[#b8922a]',
    bg: 'bg-[#6b4a10]/8 border-[#8b6018]/18',
    glow: 'hover:shadow-[0_0_28px_rgba(184,146,42,0.08)]',
  },
  {
    icon: Users,
    title: 'Staff Operating Without Clarity',
    subtitle: 'No system means constant improvisation',
    desc: 'A new waiter doesn\'t know which table they own. The cashier can\'t confirm if a table has paid. The kitchen can\'t distinguish dine-in from takeaway. Everyone asks everyone else. Nothing flows.',
    color: 'text-[#a09080]',
    bg: 'bg-[#3a2820]/8 border-[#5a3828]/18',
    glow: 'hover:shadow-[0_0_28px_rgba(100,80,60,0.10)]',
  },
  {
    icon: Flame,
    title: 'Peak Hours Become a Crisis',
    subtitle: 'The busiest moments expose every weakness',
    desc: 'At Friday dinner service, the restaurant breaks down. The kitchen backs up, tables pile on, staff cut corners under pressure. The owner steps off the floor to firefight. Revenue is left on the table.',
    color: 'text-[#b8705a]',
    bg: 'bg-[#5a2018]/8 border-[#7a2820]/18',
    glow: 'hover:shadow-[0_0_28px_rgba(107,50,30,0.10)]',
  },
  {
    icon: BarChart2,
    title: 'No Visibility Into Daily Performance',
    subtitle: 'Decisions made on guesswork, not data',
    desc: 'At day\'s end, the owner asks: how much did we make? Nobody knows with certainty. The cashier\'s number, the kitchen\'s count, and actual cash tell three different stories. Patterns go undetected. Problems repeat.',
    color: 'text-[#b8922a]',
    bg: 'bg-[#6b4a10]/8 border-[#8b6018]/18',
    glow: 'hover:shadow-[0_0_28px_rgba(184,146,42,0.08)]',
  },
  {
    icon: RefreshCw,
    title: 'Menu Updates Cause Ongoing Errors',
    subtitle: 'A change told verbally is a change half-made',
    desc: 'Updating a price or marking an item unavailable requires informing every staff member individually. Someone always misses the brief. A sold-out dish gets ordered. A promotion outlives its expiry. Errors compound.',
    color: 'text-[#a09080]',
    bg: 'bg-[#3a2820]/8 border-[#5a3828]/18',
    glow: 'hover:shadow-[0_0_28px_rgba(100,80,60,0.10)]',
  },
  {
    icon: Lock,
    title: 'The Owner Cannot Step Away',
    subtitle: 'The restaurant runs on your presence, not a system',
    desc: 'The moment you leave, things slip. Staff take shortcuts. Voids appear without reason. Service slows. You are not running a business — you are the business. A day off, a second location, real growth: these feel impossible.',
    color: 'text-[#c9a84c]',
    bg: 'bg-[#6b4a10]/10 border-[#b8922a]/20',
    glow: 'hover:shadow-[0_0_28px_rgba(184,146,42,0.10)]',
  },
];

export default function LandingProblem() {
  return (
    <section id="problem" className="relative py-24 overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#8b2035]/20 to-transparent" />
        <div className="absolute top-1/2 -left-60 w-80 h-80 bg-[#6b1d2e]/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-60 w-80 h-80 bg-[#b8922a]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6b1d2e]/12 border border-[#8b2035]/22 text-[#b8705a] text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8705a] animate-pulse-soft" />
            The Operational Reality
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f5f0e8] tracking-tight mb-4"
          >
            Seven Problems Costing{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a02840, #c9a84c)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Your Restaurant Every Day
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-[#d1c1b2] text-lg max-w-2xl mx-auto"
          >
            These are not edge cases. They are the daily reality for 90% of independent restaurant owners across India.
          </motion.p>
        </div>

        {/* Problem cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROBLEMS.slice(0, 6).map(({ icon: Icon, title, subtitle, desc, color, bg, glow }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              whileHover={{ y: -4 }}
              className={`glass rounded-2xl border p-6 transition-all duration-300 cursor-default ${bg} ${glow}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${bg}`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
              </div>
              <h3 className={`font-bold text-base mb-1 ${color}`}>{title}</h3>
              <p className="text-[#c7a486] text-xs font-medium italic mb-2">{subtitle}</p>
              <p className="text-[#d1bba8] text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 7th problem — full width featured */}
        {(() => {
          const last = PROBLEMS[6];
          const Icon = last.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.5, ease }}
              className="mt-4 glass rounded-2xl border border-[#b8922a]/20 bg-gradient-to-r from-[#b8922a]/4 via-transparent to-[#6b1d2e]/4 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:shadow-[0_0_40px_rgba(184,146,42,0.07)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#b8922a]/8 border border-[#b8922a]/20 flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 text-[#c9a84c]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-lg text-[#c9a84c]">{last.title}</h3>
                </div>
                <p className="text-[#c7a486] text-sm italic mb-2">{last.subtitle}</p>
                <p className="text-[#d1bba8] leading-relaxed">{last.desc}</p>
              </div>
              <div className="shrink-0 px-6 py-3 rounded-xl bg-[#b8922a]/8 border border-[#b8922a]/25 text-[#c9a84c] text-sm font-semibold text-center">
                The Root<br />Problem
              </div>
            </motion.div>
          );
        })()}

        {/* Bottom CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="text-center mt-14"
        >
          <p className="text-[#c0b0a0] text-lg font-medium">
            If three or more of these describe your restaurant daily —
          </p>
          <p className="text-[#d1c1b2] mt-1">
            Dinera was built precisely for your operation.
          </p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-4 text-[#bd8c61] text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
