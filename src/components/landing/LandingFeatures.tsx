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
    title: 'QR Based Ordering',
    desc: 'Customer table pe QR scan kare aur seedha order kare. Koi app download nahi, koi login nahi. Digital menu real-time update hota hai.',
    color: 'cyan',
    highlights: ['Instant digital menu', 'Special instructions', 'Real-time item availability'],
  },
  {
    icon: Monitor,
    title: 'Smart POS System',
    desc: 'Billing, order management, discount, tax — sab ek screen pe. Fast checkout, zero errors. Multiple payment modes supported.',
    color: 'purple',
    highlights: ['Auto tax calculation', 'Split bill support', 'UPI / Card / Cash'],
  },
  {
    icon: ChefHat,
    title: 'Kitchen Display System',
    desc: 'Har order kitchen screen pe seedha dikhta hai. Queue management, priority marking, ready status — chef ko sab clear milta hai.',
    color: 'amber',
    highlights: ['Real-time KOT', 'Priority queue', 'Preparation timer'],
  },
  {
    icon: RefreshCw,
    title: 'Real-Time Sync',
    desc: 'POS, KDS, waiter app aur owner dashboard — sab ek saath connected. Ek jagah change karo, sab jagah reflect hota hai.',
    color: 'emerald',
    highlights: ['Sub-second sync', 'Offline mode support', 'Auto conflict resolve'],
  },
  {
    icon: LayoutGrid,
    title: 'Table & Seat Management',
    desc: 'Floor plan pe live dekho — kaun sa table occupied, reserved, ya available. Seat-level tracking se precise billing.',
    color: 'pink',
    highlights: ['Interactive floor map', 'Seat-level ordering', 'Merge / split tables'],
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Revenue, top dishes, peak hours, staff performance — sab data ek jagah. Gut feeling chhodo, numbers se decide karo.',
    color: 'indigo',
    highlights: ['Daily P&L report', 'Bestseller analysis', 'Hourly revenue trend'],
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Ordering',
    desc: 'Customer WhatsApp pe order de — bina app download kiye. Takeaway aur delivery orders ke liye perfect.',
    color: 'green',
    highlights: ['No app required', 'Auto order confirmation', 'Delivery tracking'],
  },
  {
    icon: Bot,
    title: 'AI Menu Chatbot',
    desc: 'Customer kuch pooche — AI turant jawab deta hai. Dish recommendations, allergen info, combos suggest kare. Upselling automatic.',
    color: 'violet',
    highlights: ['Smart recommendations', 'Allergen aware', '24/7 available'],
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    desc: 'Order ready, table waiting, payment pending — sab alerts real-time milte hain. Koi cheez miss nahi hoti.',
    color: 'rose',
    highlights: ['Role-based alerts', 'Sound + visual', 'Escalation rules'],
  },
  {
    icon: Smartphone,
    title: 'Mobile First Design',
    desc: 'Waiter ka phone, kitchen tablet, owner ka iPad — sab pe perfectly kaam karta hai. Koi special hardware nahi chahiye.',
    color: 'cyan',
    highlights: ['Works on any device', 'No special hardware', 'Offline capable'],
  },
  {
    icon: Shield,
    title: 'Role Based Access',
    desc: 'Owner, manager, cashier, waiter — har role ke liye alag permissions. Sensitive data sirf authorized log dekh sakte hain.',
    color: 'slate',
    highlights: ['Custom roles', 'Activity audit log', 'Secure login'],
  },
  {
    icon: Zap,
    title: 'Setup in 30 Minutes',
    desc: 'Menu upload, table setup, staff onboard — sab 30 minutes mein. Koi IT expertise nahi chahiye. Live ho jao aaj hi.',
    color: 'amber',
    highlights: ['Zero IT needed', 'Guided onboarding', 'Free training call'],
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string; glow: string }> = {
  cyan:    { text: 'text-cyan-400',    border: 'border-cyan-500/20',    bg: 'bg-cyan-500/10',    glow: 'group-hover:shadow-[0_0_30px_rgba(0,245,255,0.08)]'      },
  purple:  { text: 'text-purple-400',  border: 'border-purple-500/20',  bg: 'bg-purple-500/10',  glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.08)]'    },
  amber:   { text: 'text-amber-400',   border: 'border-amber-500/20',   bg: 'bg-amber-500/10',   glow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.08)]'   },
  emerald: { text: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/10', glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]'   },
  pink:    { text: 'text-pink-400',    border: 'border-pink-500/20',    bg: 'bg-pink-500/10',    glow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.08)]'   },
  indigo:  { text: 'text-indigo-400',  border: 'border-indigo-500/20',  bg: 'bg-indigo-500/10',  glow: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]'  },
  green:   { text: 'text-green-400',   border: 'border-green-500/20',   bg: 'bg-green-500/10',   glow: 'group-hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]'    },
  violet:  { text: 'text-violet-400',  border: 'border-violet-500/20',  bg: 'bg-violet-500/10',  glow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.08)]'  },
  rose:    { text: 'text-rose-400',    border: 'border-rose-500/20',    bg: 'bg-rose-500/10',    glow: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.08)]'    },
  slate:   { text: 'text-slate-300',   border: 'border-slate-500/20',   bg: 'bg-slate-500/10',   glow: 'group-hover:shadow-[0_0_30px_rgba(100,116,139,0.08)]' },
};

export default function LandingFeatures() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-[140px]" />
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
            Features
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Sab Kuch Ek Jagah.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00f5ff 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Zero Compromise.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            12 powerful features jo ek saath kaam karte hain — like a perfectly trained kitchen team.
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
                <h3 className="text-white font-bold text-sm mb-2">{title}</h3>

                {/* Desc */}
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{desc}</p>

                {/* Highlights */}
                <div className="space-y-1.5 border-t border-white/[0.05] pt-4">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-slate-500">
                      <div className={`w-1 h-1 rounded-full ${c.bg} border ${c.border} shrink-0`} style={{ backgroundColor: 'currentColor' }}>
                        <div className={`w-1 h-1 rounded-full ${c.text.replace('text-', 'bg-')}`} />
                      </div>
                      <span className={`w-1 h-1 rounded-full shrink-0 ${c.text.replace('text-', 'bg-')} opacity-70`} />
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
          <p className="text-slate-500 text-sm">
            Sab features ek hi subscription mein included hain.{' '}
            <span className="text-cyan-400 font-semibold">Koi hidden charges nahi.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
