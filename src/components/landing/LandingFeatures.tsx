import { motion } from 'framer-motion';
import {
  QrCode, Monitor, ChefHat, RefreshCw, LayoutGrid,
  MessageCircle, Bot, BarChart3, Bell, Smartphone,
  Shield, Zap,
} from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const FEATURES = [
  {
    icon: QrCode,
    title: 'QR-Based Ordering',
    desc: 'Guests scan the table QR code and order from a live digital menu — no app, no login, no friction. Menu updates reflect instantly across all devices.',
    color: 'wine',
    highlights: ['Live menu synchronisation', 'Custom modifiers & instructions', 'Real-time item availability'],
  },
  {
    icon: Monitor,
    title: 'Integrated POS',
    desc: 'Billing, order management, discounts, and tax — consolidated on a single screen. Fast checkout with zero calculation errors across all payment modes.',
    color: 'gold',
    highlights: ['Automatic tax computation', 'Split billing in one tap', 'UPI, card, and cash support'],
  },
  {
    icon: ChefHat,
    title: 'Kitchen Display System',
    desc: 'Every order appears on the kitchen screen the moment it is placed. Queue management, priority marking, and status updates visible to the entire kitchen team.',
    color: 'warm',
    highlights: ['Live KOT on screen', 'Preparation priority queue', 'Order timer and status tracking'],
  },
  {
    icon: RefreshCw,
    title: 'Real-Time Synchronisation',
    desc: 'The POS, kitchen display, waiter interface, and owner dashboard remain permanently in sync. A change anywhere is reflected everywhere — instantly.',
    color: 'neutral',
    highlights: ['Sub-second sync latency', 'Offline mode with auto-recovery', 'Conflict-free data handling'],
  },
  {
    icon: LayoutGrid,
    title: 'Table & Seat Management',
    desc: 'An interactive floor map displays table status in real time — occupied, reserved, or available. Seat-level ordering ensures precise billing for every guest.',
    color: 'warm',
    highlights: ['Interactive live floor map', 'Seat-level order tracking', 'Table merging and splitting'],
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Revenue, bestselling dishes, peak service windows, and staff performance — all in one view. Replace assumptions with evidence and make decisions that compound.',
    color: 'gold',
    highlights: ['Daily profit & loss report', 'Bestseller and slow-mover analysis', 'Hourly revenue trend view'],
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Ordering',
    desc: 'Guests place takeaway and delivery orders via WhatsApp — through an app they already use daily. No barrier. No download. Significantly more orders captured.',
    color: 'neutral',
    highlights: ['Zero friction for the guest', 'Automatic order confirmation', 'Integrated delivery tracking'],
  },
  {
    icon: Bot,
    title: 'AI Menu Assistant',
    desc: 'An AI assistant answers guest questions, recommends dishes based on preferences, flags allergens, and suggests combinations. Upselling becomes systematic, not incidental.',
    color: 'gold',
    highlights: ['Personalised recommendations', 'Allergen-aware responses', 'Available 24 hours a day'],
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    desc: 'Role-based alerts for order readiness, table waiting time, and payment status — delivered in real time. Nothing is missed. Nothing falls through the gap.',
    color: 'wine',
    highlights: ['Role-based alert routing', 'Audio and visual notifications', 'Configurable escalation rules'],
  },
  {
    icon: Smartphone,
    title: 'Works on Any Device',
    desc: 'No proprietary hardware required. Dinera runs on any phone, tablet, or laptop. Your existing devices become a complete restaurant management system today.',
    color: 'neutral',
    highlights: ['Compatible with any device', 'No hardware investment needed', 'Offline-capable architecture'],
  },
  {
    icon: Shield,
    title: 'Role-Based Access Control',
    desc: 'Owners, managers, cashiers, and waiting staff each have precisely scoped access. Sensitive financial data remains protected. Accountability is built into the system.',
    color: 'warm',
    highlights: ['Fully customisable roles', 'Complete activity audit log', 'Secure, encrypted login'],
  },
  {
    icon: Zap,
    title: 'Operational in 30 Minutes',
    desc: 'Upload your menu, configure your tables, add your team — and go live. No IT expertise required. A guided onboarding call is included with every plan at no cost.',
    color: 'gold',
    highlights: ['No technical expertise needed', 'Step-by-step guided setup', 'Free onboarding call included'],
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string; dot: string; glow: string }> = {
  wine:    { text: 'text-[#b8705a]', border: 'border-[#8b2035]/15',  bg: 'bg-[#6b1d2e]/8',  dot: 'bg-[#b8705a]', glow: 'group-hover:shadow-[0_0_24px_rgba(107,29,46,0.08)]'  },
  gold:    { text: 'text-[#c9a84c]', border: 'border-[#b8922a]/15',  bg: 'bg-[#b8922a]/8',  dot: 'bg-[#c9a84c]', glow: 'group-hover:shadow-[0_0_24px_rgba(184,146,42,0.08)]' },
  warm:    { text: 'text-[#a09080]', border: 'border-[#5a3828]/15',  bg: 'bg-[#3a2820]/8',  dot: 'bg-[#a09080]', glow: 'group-hover:shadow-[0_0_24px_rgba(90,56,40,0.08)]'   },
  neutral: { text: 'text-[#8a7868]', border: 'border-[#3a3530]/15',  bg: 'bg-[#2a2520]/8',  dot: 'bg-[#8a7868]', glow: 'group-hover:shadow-[0_0_24px_rgba(50,45,40,0.08)]'   },
};

export default function LandingFeatures() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#6b1d2e]/15 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#6b1d2e]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#b8922a]/4 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6b1d2e]/12 border border-[#8b2035]/20 text-[#b8705a] text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8705a] animate-pulse-soft" />
            Platform Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f5f0e8] tracking-tight mb-4"
          >
            Everything Your Restaurant Needs.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a02840 0%, #c9a84c 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Nothing Superfluous.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-[#7a6858] text-lg max-w-2xl mx-auto"
          >
            Twelve capabilities, designed to work in concert — like a perfectly coordinated kitchen brigade.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {FEATURES.map(({ icon: Icon, title, desc, color, highlights }, i) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.07, ease }}
                whileHover={{ y: -4 }}
                className={`group glass rounded-2xl border ${c.border} p-5 transition-all duration-300 ${c.glow} cursor-default`}
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${c.text}`} />
                </div>

                {/* Title */}
                <h3 className="text-[#e8e0d6] font-bold text-sm mb-2">{title}</h3>

                {/* Desc */}
                <p className="text-[#6a5848] text-xs leading-relaxed mb-4">{desc}</p>

                {/* Highlights */}
                <div className="space-y-1.5 border-t border-[#f5f0e8]/[0.04] pt-4">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-[#5a4838]">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot} opacity-60`} />
                      {h}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mt-14 text-center"
        >
          <p className="text-[#5a4838] text-sm">
            All capabilities are included in every subscription tier.{' '}
            <span className="text-[#c9a84c] font-semibold">No hidden fees. No feature paywalls.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
