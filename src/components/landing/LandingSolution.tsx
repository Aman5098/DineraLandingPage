import { motion } from 'framer-motion';
import { QrCode, Monitor, ChefHat, RefreshCw, LayoutGrid, MessageCircle, Bot, CheckCircle2, ArrowRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const SOLUTIONS = [
  {
    problem: 'Orders lost through verbal communication',
    solution: 'QR Ordering + Kitchen Display',
    icon: QrCode,
    color: 'wine',
    benefitTitle: 'Every order reaches the kitchen exactly as placed.',
    benefit: 'Guests scan the table QR code and order directly from their phone. The order appears instantly on the kitchen display — verbatim, with every modifier. No waiter transcription. No shouting across the pass. Zero ambiguity.',
    tag: 'Most Impactful',
  },
  {
    problem: 'Slow checkout and billing errors',
    solution: 'Intelligent POS System',
    icon: Monitor,
    color: 'gold',
    benefitTitle: 'A complete, accurate bill in under 30 seconds.',
    benefit: 'Tax is calculated automatically. Discounts are predefined and consistent. Split billing requires a single tap. The guest pays and leaves — with no wait, no dispute, no arithmetic.',
    tag: null,
  },
  {
    problem: 'Kitchen unaware of order priority',
    solution: 'Kitchen Display System',
    icon: ChefHat,
    color: 'warm',
    benefitTitle: 'The kitchen manages itself with complete clarity.',
    benefit: 'Every order appears on the KDS screen with table number, items, quantities, and special instructions clearly displayed. Chefs confirm preparation and mark completion. The front-of-house knows the status in real time.',
    tag: null,
  },
  {
    problem: 'Staff disconnected from each other',
    solution: 'Real-Time Sync Across All Stations',
    icon: RefreshCw,
    color: 'neutral',
    benefitTitle: 'Every person in your restaurant sees the same picture.',
    benefit: 'The POS, kitchen display, waiter interface, and owner dashboard are permanently synchronised. A change at one station reflects everywhere within milliseconds. No one asks, no one guesses. Everyone acts.',
    tag: null,
  },
  {
    problem: 'No live visibility of tables and seating',
    solution: 'Table & Seat Management',
    icon: LayoutGrid,
    color: 'warm',
    benefitTitle: 'Your floor plan, live — from any device.',
    benefit: 'An interactive floor map shows which tables are occupied, reserved, or available at any moment. Seat-level ordering means billing is precise down to the individual guest, regardless of group size.',
    tag: null,
  },
  {
    problem: 'Friction in the ordering experience',
    solution: 'WhatsApp Ordering',
    icon: MessageCircle,
    color: 'neutral',
    benefitTitle: 'Orders placed through an app everyone already uses.',
    benefit: 'Guests order via WhatsApp — no download, no account creation. For takeaway and delivery, this removes every barrier between appetite and order. It is the most frictionless ordering experience available.',
    tag: 'Optional',
  },
  {
    problem: 'Guests unsure what to order',
    solution: 'AI Menu Assistant',
    icon: Bot,
    color: 'gold',
    benefitTitle: 'A personal menu guide available at every table, around the clock.',
    benefit: 'The AI assistant answers questions about dishes, suggests pairings, highlights allergens, and recommends combinations. Upselling happens naturally. Average order values increase. Guest confidence grows.',
    tag: 'AI Powered',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string; glow: string; tagBg: string }> = {
  wine:    { bg: 'bg-[#6b1d2e]/6',  border: 'border-[#8b2035]/18',  text: 'text-[#b8705a]',  iconBg: 'bg-[#6b1d2e]/10',  glow: 'hover:shadow-[0_0_28px_rgba(107,29,46,0.08)]',       tagBg: 'bg-[#6b1d2e]/15 text-[#b8705a] border-[#8b2035]/20'  },
  gold:    { bg: 'bg-[#6b4a10]/6',  border: 'border-[#b8922a]/18',  text: 'text-[#c9a84c]',  iconBg: 'bg-[#b8922a]/10',  glow: 'hover:shadow-[0_0_28px_rgba(184,146,42,0.08)]',      tagBg: 'bg-[#b8922a]/12 text-[#c9a84c] border-[#b8922a]/20'  },
  warm:    { bg: 'bg-[#3a2820]/6',  border: 'border-[#5a3828]/18',  text: 'text-[#a09080]',  iconBg: 'bg-[#3a2820]/12',  glow: 'hover:shadow-[0_0_28px_rgba(90,56,40,0.08)]',        tagBg: 'bg-[#3a2820]/15 text-[#a09080] border-[#5a3828]/20'  },
  neutral: { bg: 'bg-[#1e1c1a]/6',  border: 'border-[#3a3530]/18',  text: 'text-[#8a7868]',  iconBg: 'bg-[#2a2520]/12',  glow: 'hover:shadow-[0_0_28px_rgba(50,45,40,0.08)]',        tagBg: 'bg-[#2a2520]/15 text-[#8a7868] border-[#3a3530]/20'  },
};

export default function LandingSolution() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solution" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#b8922a]/18 to-transparent" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-[#6b1d2e]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-[#b8922a]/4 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6b4a10]/12 border border-[#b8922a]/20 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse-soft" />
            The Dinera Solution
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f5f0e8] tracking-tight mb-4"
          >
            A Precise Answer{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a02840 0%, #c9a84c 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              to Every Problem
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-[#7a6858] text-lg max-w-2xl mx-auto"
          >
            Dinera was designed around the specific operational failures that cost independent restaurants revenue, reputation, and owner sanity every single day.
          </motion.p>
        </div>

        {/* Problem → Solution map */}
        <div className="space-y-4">
          {SOLUTIONS.map(({ problem, solution, icon: Icon, color, benefitTitle, benefit, tag }, i) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={solution}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease }}
                whileHover={{ scale: 1.005 }}
                className={`glass rounded-2xl border ${c.border} ${c.bg} ${c.glow} p-6 transition-all duration-300`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl border ${c.border} ${c.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-6 h-6 ${c.text}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-lg bg-[#6b1d2e]/10 border border-[#8b2035]/15 text-[#8a5848] text-xs font-medium line-through decoration-[#8b2035]/40">
                        ✗ {problem}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#4a3828] shrink-0" />
                      <span className={`px-3 py-1 rounded-lg border ${c.border} ${c.iconBg} ${c.text} text-xs font-semibold`}>
                        ✓ {solution}
                      </span>
                      {tag && (
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${c.tagBg}`}>
                          {tag}
                        </span>
                      )}
                    </div>

                    <h3 className={`font-bold text-base mb-1.5 ${c.text}`}>{benefitTitle}</h3>
                    <p className="text-[#7a6858] text-sm leading-relaxed">{benefit}</p>
                  </div>

                  {/* Check badge */}
                  <div className="hidden sm:flex shrink-0">
                    <CheckCircle2 className={`w-6 h-6 ${c.text} opacity-60`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mt-14 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 rounded-2xl glass border border-[#f5f0e8]/[0.06] bg-gradient-to-r from-[#6b1d2e]/4 to-[#b8922a]/4">
            <p className="text-[#e8e0d6] font-semibold text-lg">
              One platform. Every operational challenge resolved.
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('#demo')}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#7a1e30] to-[#b8922a] text-[#f5f0e8] shadow-[0_0_18px_rgba(107,29,46,0.25)] hover:shadow-[0_0_28px_rgba(184,146,42,0.40)] transition-all duration-300 whitespace-nowrap"
            >
              See It Live
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
