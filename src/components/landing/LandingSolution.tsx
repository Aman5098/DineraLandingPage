import { motion } from 'framer-motion';
import { QrCode, Monitor, ChefHat, RefreshCw, LayoutGrid, MessageCircle, Bot, CheckCircle2, ArrowRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const SOLUTIONS = [
  {
    problem: 'Orders lost in kitchen',
    solution: 'QR Ordering + KDS',
    icon: QrCode,
    color: 'cyan',
    benefitTitle: 'Zero wrong orders. Ever.',
    benefit: 'Customer khud scan karke order karta hai — directly kitchen screen pe jaata hai. Koi waiter nahi, koi paper nahi, koi shouting nahi.',
    tag: 'Most Popular',
  },
  {
    problem: 'Billing errors & slow checkout',
    solution: 'Smart POS System',
    icon: Monitor,
    color: 'purple',
    benefitTitle: 'Bill 30 second mein ready.',
    benefit: 'Tax auto-calculate, discount predefined, split bill ek click mein. Customer wait nahi karta, table jaldi khali hoti hai.',
    tag: null,
  },
  {
    problem: 'Kitchen doesn\'t know order priority',
    solution: 'Kitchen Display System',
    icon: ChefHat,
    color: 'amber',
    benefitTitle: 'Kitchen apne aap manage ho jaati hai.',
    benefit: 'Har order queue mein clearly dikhta hai — table number, items, special instructions. Chef sirf banata hai, confusion nahi karta.',
    tag: null,
  },
  {
    problem: 'Staff never knows what\'s happening',
    solution: 'Real-Time Sync',
    icon: RefreshCw,
    color: 'emerald',
    benefitTitle: 'Sab ko sab pata hai. Real-time.',
    benefit: 'Waiter, cashier, kitchen — teeno ek hi system pe. Koi ek dusre se nahi puchha. Owner ko referee nahi banna padta.',
    tag: null,
  },
  {
    problem: 'No visibility on tables & seats',
    solution: 'Table & Seat Management',
    icon: LayoutGrid,
    color: 'pink',
    benefitTitle: 'Kaun sa table kahan hai — live.',
    benefit: 'Floor plan pe real-time dikhta hai kaunsa table occupied, reserved, ya available. Seat-level tracking se zero confusion.',
    tag: null,
  },
  {
    problem: 'Customers want to order from phone',
    solution: 'WhatsApp Ordering',
    icon: MessageCircle,
    color: 'green',
    benefitTitle: 'WhatsApp se order. No app download.',
    benefit: 'Customer apne WhatsApp se order kare — jaise dost ko message karte hain. Zero friction. More orders from more people.',
    tag: 'Optional',
  },
  {
    problem: 'Customers confused about menu',
    solution: 'AI Menu Chatbot',
    icon: Bot,
    color: 'violet',
    benefitTitle: 'Personal food guide — 24/7.',
    benefit: '"Spicy nahi chahiye, kya recommend karoge?" — AI turant jawab deta hai. Upselling automatic. Average order value zyada.',
    tag: 'AI Powered',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string; glow: string; tagBg: string }> = {
  cyan:    { bg: 'bg-cyan-500/5',    border: 'border-cyan-500/20',    text: 'text-cyan-400',    iconBg: 'bg-cyan-500/10',    glow: 'hover:shadow-[0_0_30px_rgba(0,245,255,0.1)]',      tagBg: 'bg-cyan-500/20 text-cyan-300'    },
  purple:  { bg: 'bg-purple-500/5',  border: 'border-purple-500/20',  text: 'text-purple-400',  iconBg: 'bg-purple-500/10',  glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]',     tagBg: 'bg-purple-500/20 text-purple-300' },
  amber:   { bg: 'bg-amber-500/5',   border: 'border-amber-500/20',   text: 'text-amber-400',   iconBg: 'bg-amber-500/10',   glow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]',    tagBg: 'bg-amber-500/20 text-amber-300'  },
  emerald: { bg: 'bg-emerald-500/5', border: 'border-emerald-500/20', text: 'text-emerald-400', iconBg: 'bg-emerald-500/10', glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]',    tagBg: 'bg-emerald-500/20 text-emerald-300' },
  pink:    { bg: 'bg-pink-500/5',    border: 'border-pink-500/20',    text: 'text-pink-400',    iconBg: 'bg-pink-500/10',    glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]',    tagBg: 'bg-pink-500/20 text-pink-300'    },
  green:   { bg: 'bg-green-500/5',   border: 'border-green-500/20',   text: 'text-green-400',   iconBg: 'bg-green-500/10',   glow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]',     tagBg: 'bg-green-500/20 text-green-300'  },
  violet:  { bg: 'bg-violet-500/5',  border: 'border-violet-500/20',  text: 'text-violet-400',  iconBg: 'bg-violet-500/10',  glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]',    tagBg: 'bg-violet-500/20 text-violet-300' },
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Yeh Raha Solution
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Har Problem Ka{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00f5ff 0%, #a855f7 60%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Direct Answer
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            RestroOS ne har ek pain point ke liye ek specific solution banaya hai. Technology nahi — <span className="text-white font-medium">real restaurant problems ke real answers.</span>
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
                whileHover={{ scale: 1.01 }}
                className={`glass rounded-2xl border ${c.border} ${c.bg} ${c.glow} p-6 transition-all duration-300`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl border ${c.border} ${c.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-6 h-6 ${c.text}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Problem → Solution arrow */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium line-through decoration-red-500/50">
                        ✗ {problem}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      <span className={`px-3 py-1 rounded-lg border ${c.border} ${c.iconBg} ${c.text} text-xs font-semibold`}>
                        ✓ {solution}
                      </span>
                      {tag && (
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${c.tagBg}`}>
                          {tag}
                        </span>
                      )}
                    </div>

                    <h3 className={`font-bold text-base mb-1.5 ${c.text}`}>{benefitTitle}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{benefit}</p>
                  </div>

                  {/* Check badge */}
                  <div className="hidden sm:flex shrink-0">
                    <CheckCircle2 className={`w-6 h-6 ${c.text}`} />
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 rounded-2xl glass border border-white/10 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
            <p className="text-white font-semibold text-lg">
              🎯 Ek dashboard. Saari problems solve.
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('#demo')}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#030712] shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all duration-300 whitespace-nowrap"
            >
              Demo Dekho
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
