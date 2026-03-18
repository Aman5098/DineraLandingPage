import { motion } from 'framer-motion';
import {
  ArrowRight, Play, QrCode, Monitor, ChefHat, BarChart3,
  CheckCircle2, Star, TrendingUp, Zap,
} from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const STATS = [
  { value: '2,400+', label: 'Restaurants' },
  { value: '98%',    label: 'Uptime'       },
  { value: '4.9★',   label: 'Rating'       },
  { value: '40%',    label: 'Faster Orders' },
];

const BULLETS = [
  { icon: QrCode,    text: 'QR se khud order kare customer' },
  { icon: ChefHat,   text: 'Kitchen screen pe seedha KOT'  },
  { icon: Monitor,   text: 'POS + billing ek jagah'        },
  { icon: BarChart3, text: 'Real-time sales dashboard'     },
];

const ORDERS = [
  { table: 'T-04', item: 'Butter Chicken + Naan ×2', status: 'Preparing', color: 'text-amber-400',   dot: 'bg-amber-400'   },
  { table: 'T-07', item: 'Paneer Tikka ×1',          status: 'Ready',     color: 'text-emerald-400', dot: 'bg-emerald-400' },
  { table: 'T-02', item: 'Dal Makhani + Rice ×3',    status: 'Delivered', color: 'text-red-400',     dot: 'bg-red-400'     },
  { table: 'T-09', item: 'Biryani ×2',               status: 'New',       color: 'text-amber-500',   dot: 'bg-amber-500'   },
];

export default function LandingHero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden grid-bg">
      {/* Background orbs — red/gold palette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-700/12 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-amber-600/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/8 rounded-full blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-6">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-widest w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              🚀 India's #1 Restaurant OS — Ab Chaos Khatam
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight"
            >
              Poora Restaurant{' '}
              <span className="relative inline-block">
                <span
                  className="relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, #ff2d2d 0%, #f5a623 55%, #ff0055 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Ek Dashboard
                </span>
              </span>{' '}
              Se Chalao.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="text-slate-400 text-lg leading-relaxed max-w-lg"
            >
              QR ordering, kitchen display, POS billing aur real-time sync — sab ek jagah.{' '}
              <span className="text-slate-200 font-medium">Waiter confusion khatam. Orders never lost. Owner tension-free.</span>
            </motion.p>

            {/* Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {BULLETS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  {text}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#demo')}
                className="group relative flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-red-600 via-red-500 to-amber-500 text-white shadow-[0_0_28px_rgba(255,45,45,0.40)] hover:shadow-[0_0_44px_rgba(245,166,35,0.60)] transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                <Zap className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Free Demo Book Karo</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#how-it-works')}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm glass border border-white/10 text-white hover:border-amber-500/30 transition-all duration-300"
              >
                <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                Kaise Kaam Karta Hai?
              </motion.button>
            </motion.div>

            {/* Trust */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55, ease }}
              className="flex flex-wrap items-center gap-4 text-xs text-slate-500"
            >
              {['No credit card required', '14-day free trial', 'Cancel anytime'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Social proof avatars */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65, ease }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=40&h=40&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=40&h=40&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=40&h=40&fit=crop&crop=face',
                ].map((src, i) => (
                  <img key={i} src={src} alt="user" className="w-8 h-8 rounded-full border-2 border-[#0a0303] object-cover" />
                ))}
              </div>
              <div>
                <div className="flex text-amber-400 text-xs">
                  {Array(5).fill(0).map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400" />)}
                </div>
                <p className="text-slate-400 text-xs mt-0.5">2,400+ restaurants trust us</p>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT — Dashboard Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="relative"
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-700/25 via-amber-600/15 to-red-900/10 rounded-3xl blur-3xl scale-110" />

            <div className="relative glass-strong rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Chrome bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 mx-3 bg-white/5 border border-white/[0.06] rounded-md px-3 py-1 text-xs text-slate-500">
                  app.dinera.in/dashboard
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-4 space-y-4">
                {/* Restaurant image */}
                <div className="relative rounded-xl overflow-hidden h-36">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop"
                    alt="Restaurant"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0303]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="text-white font-bold text-sm">Spice Garden</p>
                    <p className="text-slate-300 text-xs">Connaught Place, Delhi</p>
                  </div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                      Open
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 border border-amber-500/40 text-amber-400">
                      12 Tables Live
                    </span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: 'Revenue', value: '₹42,800', icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
                    { label: 'Orders',  value: '187',     icon: BarChart3,  color: 'text-amber-400',   bg: 'bg-amber-500/10 border-amber-500/20'    },
                    { label: 'Tables',  value: '12/16',   icon: Monitor,    color: 'text-red-400',     bg: 'bg-red-500/10 border-red-500/20'        },
                    { label: 'Rating',  value: '4.9★',    icon: Star,       color: 'text-amber-400',   bg: 'bg-amber-500/10 border-amber-500/20'    },
                  ].map(({ label, value, icon: Icon, color, bg }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                      className={`rounded-xl border p-2.5 ${bg}`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${color} mb-1`} />
                      <p className={`text-sm font-bold ${color}`}>{value}</p>
                      <p className="text-slate-500 text-[10px]">{label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Live orders */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Live Orders</p>
                    <span className="text-[10px] text-amber-400 font-medium">Auto-sync</span>
                  </div>
                  <div className="space-y-1.5">
                    {ORDERS.map(({ table, item, status, color, dot }, i) => (
                      <motion.div
                        key={table}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.1, duration: 0.35 }}
                        className="flex items-center justify-between bg-white/[0.03] border border-white/[0.05] rounded-lg px-3 py-2"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-bold text-slate-300 w-7">{table}</span>
                          <span className="text-xs text-slate-400">{item}</span>
                        </div>
                        <span className={`flex items-center gap-1.5 text-[10px] font-semibold ${color}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${dot} animate-pulse`} />
                          {status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating KPI pill */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-6 glass-strong border border-amber-500/30 rounded-2xl px-4 py-2.5 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-amber-400 font-bold text-sm">+38% Revenue</p>
                  <p className="text-slate-500 text-[10px]">vs last month</p>
                </div>
              </div>
            </motion.div>

            {/* Floating notification */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5, ease }}
              className="absolute -top-4 -right-4 glass-strong border border-red-500/30 rounded-2xl px-3 py-2 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <span className="text-base">🔔</span>
                <div>
                  <p className="text-white font-semibold text-xs">New Order — T-12</p>
                  <p className="text-slate-500 text-[10px]">Chicken Biryani ×2</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.08, ease }}
              className="glass rounded-2xl border border-white/[0.07] px-6 py-5 text-center group hover:border-amber-500/20 transition-all duration-300"
            >
              <p
                className="text-3xl font-extrabold mb-1"
                style={{
                  background: 'linear-gradient(135deg, #ff2d2d 0%, #f5a623 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {value}
              </p>
              <p className="text-slate-500 text-sm font-medium">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
