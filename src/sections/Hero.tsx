import { useEffect, useRef, useState, ReactNode } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type Transition,
} from 'framer-motion';
import {
  ChefHat,
  BarChart3,
  ShoppingBag,
  Users,
  ArrowRight,
  Play,
  CheckCircle2,
  TrendingUp,
  Clock,
  Star,
  Zap,
  Bell,
  type LucideIcon,
} from 'lucide-react';

/* ─── Easing helper ──────────────────────────────────────────────────────── */
// Cast bezier arrays to the type framer-motion expects
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ─── Animation variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease } as Transition,
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease } as Transition,
  },
};

/* ─── Static data ────────────────────────────────────────────────────────── */
const BULLETS: { icon: LucideIcon; label: string }[] = [
  { icon: BarChart3,   label: 'Real-time sales & revenue analytics'      },
  { icon: ShoppingBag, label: 'Orders, delivery & inventory in one place' },
  { icon: Users,       label: 'Staff scheduling & performance tracking'   },
  { icon: ChefHat,     label: 'Kitchen display & menu management'         },
];

const ORDERS = [
  { id: '#4821', item: 'Truffle Pasta × 2',  status: 'Preparing', time: '2 min', color: 'text-amber-400'   },
  { id: '#4820', item: 'Wagyu Burger × 1',   status: 'Ready',     time: '0 min', color: 'text-emerald-400' },
  { id: '#4819', item: 'Tiramisu × 3',       status: 'Delivered', time: '8 min', color: 'text-cyan-400'    },
  { id: '#4818', item: 'Salmon Tartare × 2', status: 'Preparing', time: '4 min', color: 'text-amber-400'   },
];

const STATS: { label: string; value: string; delta: string; up: boolean; icon: LucideIcon }[] = [
  { label: 'Revenue Today', value: '$12,840', delta: '+18.4%', up: true,  icon: TrendingUp  },
  { label: 'Active Orders', value: '34',      delta: '+5',     up: true,  icon: ShoppingBag },
  { label: 'Avg Wait Time', value: '9 min',   delta: '-2 min', up: false, icon: Clock       },
  { label: 'Rating',        value: '4.9 ★',   delta: '+0.2',   up: true,  icon: Star        },
];

const TOASTS = [
  { msg: 'New order from Table 7',  sub: 'Wagyu Burger × 2'           },
  { msg: 'Peak hour alert 🔥',      sub: 'Revenue up 32% vs last week' },
  { msg: 'Low stock: Truffle Oil',  sub: 'Reorder recommended'        },
  { msg: 'Staff clocked in: Marco', sub: 'Shift started at 18:00'     },
];

const AVATARS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&auto=format',
];

const BRANDS   = ['Nobu Group', 'Gordon Ramsay', 'Shake Shack', 'Sweetgreen', 'Momofuku', 'Tartine'];
const BAR_DATA = [55, 72, 61, 88, 74, 95, 83, 100, 78, 91, 69, 84];
const X_LABELS = ['8am', '', '10', '', '12', '', '2pm', '', '4', '', '6', '8'];

const TRUST: { icon: LucideIcon; label: string }[] = [
  { icon: CheckCircle2, label: 'No credit card required' },
  { icon: CheckCircle2, label: '14-day free trial'       },
  { icon: CheckCircle2, label: 'Cancel anytime'          },
];

/* ════════════════════════════════════════════════════════════════════════════
   3-D Tilt wrapper
═══════════════════════════════════════════════════════════════════════════ */
function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx  = useMotionValue(0);
  const my  = useMotionValue(0);
  const sx  = useSpring(mx, { stiffness: 150, damping: 22 });
  const sy  = useSpring(my, { stiffness: 150, damping: 22 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(sx, [-0.5, 0.5], ['-10deg', '10deg']);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mx.set((e.clientX - left) / width  - 0.5);
    my.set((e.clientY - top)  / height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   Animated counter
═══════════════════════════════════════════════════════════════════════════ */
function Counter({ to }: { to: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let cur = 0;
    const num  = parseFloat(to.replace(/[^0-9.]/g, ''));
    const step = Math.max(1, Math.ceil(num / 60));
    const id   = setInterval(() => {
      cur += step;
      if (cur >= num) { setVal(num); clearInterval(id); }
      else setVal(cur);
    }, 16);
    return () => clearInterval(id);
  }, [to]);
  const isInt = Number.isInteger(parseFloat(to.replace(/[^0-9.]/g, '')));
  return <>{isInt ? Math.floor(val) : val.toFixed(1)}</>;
}

/* ════════════════════════════════════════════════════════════════════════════
   Dashboard card  (right column)
═══════════════════════════════════════════════════════════════════════════ */
function DashboardCard() {
  const [toastIdx,  setToastIdx]  = useState(0);
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setShowToast(false);
      setTimeout(() => {
        setToastIdx((i) => (i + 1) % TOASTS.length);
        setShowToast(true);
      }, 600);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <TiltCard className="relative w-full max-w-[580px] mx-auto">
      {/* Ambient glow behind card */}
      <div className="absolute -inset-6 rounded-3xl bg-cyan-500/10   blur-3xl   pointer-events-none" />
      <div className="absolute -inset-6 rounded-3xl bg-violet-500/[.08] blur-[80px] pointer-events-none" />

      {/* ── Card shell ── */}
      <div
        className="relative rounded-2xl overflow-hidden border border-white/10"
        style={{
          background: 'linear-gradient(145deg, rgba(15,23,42,0.95) 0%, rgba(9,15,31,0.98) 100%)',
          boxShadow:  '0 0 0 1px rgba(0,245,255,0.07), 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(0,245,255,0.06)',
        }}
      >
        {/* Chrome bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-slate-400 font-mono">dashboard.nexusai.io</span>
          </div>
          <div className="flex items-center gap-2">
            <Bell className="w-3.5 h-3.5 text-slate-500" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500" />
          </div>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">

          {/* Restaurant image */}
          <div className="relative h-36 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&auto=format&fit=crop&q=80"
              alt="Restaurant interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

            <div className="absolute bottom-3 left-4">
              <p className="text-[11px] text-slate-400 uppercase tracking-widest font-medium">The Grand Table · NYC</p>
              <p className="text-white font-semibold text-sm mt-0.5">Friday Evening Service</p>
            </div>
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
              <span className="text-[10px] font-semibold text-rose-300 uppercase tracking-wider">Live</span>
            </div>
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm">
              <Users className="w-3 h-3 text-cyan-400" />
              <span className="text-[10px] font-medium text-white">68 / 80 seats</span>
            </div>
          </div>

          {/* Stat chips */}
          <div className="grid grid-cols-4 gap-2">
            {STATS.map(({ label, value, delta, up, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="rounded-xl p-2.5 border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-slate-500 mb-1.5" />
                <p className="text-[11px] text-slate-500 leading-none mb-1">{label}</p>
                <p className="text-xs font-bold text-white leading-none">{value}</p>
                <p className={`text-[10px] font-medium mt-1 ${up ? 'text-emerald-400' : 'text-rose-400'}`}>{delta}</p>
              </motion.div>
            ))}
          </div>

          {/* Revenue sparkline */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[11px] text-slate-500 uppercase tracking-wider font-medium">Revenue — Last 12h</p>
                <p className="text-lg font-bold text-white mt-0.5">
                  $<Counter to="12840" />
                  <span className="text-xs font-normal text-emerald-400 ml-1.5">↑ 18.4%</span>
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <Zap className="w-3 h-3 text-cyan-400" />
                <span className="text-[10px] text-cyan-300 font-medium">Peak now</span>
              </div>
            </div>

            {/* Bar chart */}
            <div className="flex items-end gap-1 h-14">
              {BAR_DATA.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    background: i === 9 ? 'linear-gradient(to top, #00f5ff, #0080ff)' : 'rgba(255,255,255,0.08)',
                    boxShadow:  i === 9 ? '0 0 8px rgba(0,245,255,0.4)' : 'none',
                    originY: 1,
                  }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: h / 100 }}
                  transition={{ delay: 0.6 + i * 0.05, duration: 0.6, ease } as Transition}
                />
              ))}
            </div>

            {/* x-axis */}
            <div className="flex justify-between mt-1.5">
              {X_LABELS.map((t, i) => (
                <span key={i} className="text-[9px] text-slate-600 flex-1 text-center">{t}</span>
              ))}
            </div>
          </div>

          {/* Live orders */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/[0.05]">
              <p className="text-[11px] font-semibold text-white uppercase tracking-wider">Live Orders</p>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-slate-400">34 active</span>
              </div>
            </div>
            <div className="divide-y divide-white/[0.04]">
              {ORDERS.map(({ id, item, status, time, color }, i) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.08 }}
                  className="flex items-center justify-between px-3.5 py-2 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-mono text-slate-500">{id}</span>
                    <span className="text-[11px] text-slate-300">{item}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] text-slate-500">{time}</span>
                    <span className={`text-[10px] font-semibold ${color}`}>{status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating notification toast ── */}
      <AnimatePresence mode="wait">
        {showToast && (
          <motion.div
            key={toastIdx}
            initial={{ opacity: 0, y: 16,  scale: 0.92 }}
            animate={{ opacity: 1, y: 0,   scale: 1    }}
            exit={{   opacity: 0, y: -10,  scale: 0.95 }}
            transition={{ duration: 0.42, ease } as Transition}
            className="absolute -top-4 -right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 backdrop-blur-xl shadow-2xl"
            style={{ background: 'rgba(15,23,42,0.92)', minWidth: 220 }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/[.15] border border-cyan-500/25 flex items-center justify-center">
              <Bell className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white leading-tight">{TOASTS[toastIdx].msg}</p>
              <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">{TOASTS[toastIdx].sub}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating KPI pill ── */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute -left-6 bottom-20 z-20 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-emerald-500/20 backdrop-blur-xl"
        style={{ background: 'rgba(15,23,42,0.92)', boxShadow: '0 0 20px rgba(0,255,136,0.08)' }}
      >
        <div className="w-7 h-7 rounded-lg bg-emerald-500/[.15] flex items-center justify-center">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
        </div>
        <div>
          <p className="text-[10px] text-slate-400 leading-none">Monthly Revenue</p>
          <p className="text-sm font-bold text-white leading-none mt-0.5">$348,210</p>
          <p className="text-[10px] text-emerald-400 leading-none mt-0.5">↑ 24% vs last month</p>
        </div>
      </motion.div>
    </TiltCard>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   Hero Section
═══════════════════════════════════════════════════════════════════════════ */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030712]">

      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div
        className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.055) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-y-1/2 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,128,255,0.04) 0%, transparent 70%)' }}
      />
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">

          {/* ══ LEFT COLUMN ══ */}
          <div className="flex flex-col gap-7">

            {/* Launch badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex self-start items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/25 bg-cyan-500/[.08]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-xs font-semibold text-cyan-300 tracking-wide uppercase">
                Restaurant OS · Launching 2025
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              <h1 className="text-4xl sm:text-5xl xl:text-[3.6rem] font-extrabold leading-[1.08] tracking-tight text-white">
                Run Your Entire{' '}
                <span className="relative inline-block">
                  <span
                    className="relative z-10"
                    style={{
                      background:           'linear-gradient(135deg, #00f5ff 0%, #6366f1 50%, #a855f7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor:  'transparent',
                      backgroundClip:       'text',
                    }}
                  >
                    Restaurant
                  </span>
                  {/* Animated underline */}
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #00f5ff, #a855f7)' }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9, duration: 0.7, ease } as Transition}
                  />
                </span>{' '}
                <br className="hidden sm:block" />
                From One Dashboard
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              NexusAI unifies your orders, kitchen, staff, inventory, and analytics
              into a single intelligent platform — so you can focus on food, not
              firefighting.
            </motion.p>

            {/* Feature bullets */}
            <motion.ul
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="grid sm:grid-cols-2 gap-3"
            >
              {BULLETS.map(({ icon: Icon, label }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 + i * 0.1, duration: 0.5, ease } as Transition}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border border-cyan-500/20 bg-cyan-500/[.08] group-hover:bg-cyan-500/[.15] group-hover:border-cyan-500/35 transition-all duration-300">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-sm text-slate-300 leading-snug pt-1.5">{label}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              {/* Primary */}
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #00c8ff 0%, #6366f1 60%, #a855f7 100%)',
                  boxShadow:  '0 0 24px rgba(0,200,255,0.28), 0 4px 20px rgba(0,0,0,0.4)',
                }}
              >
                {/* Shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative">Start Free Trial</span>
                <ArrowRight className="relative w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>

              {/* Secondary */}
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-sm transition-all duration-300"
              >
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/10 group-hover:bg-cyan-500/[.15] transition-colors">
                  <Play className="w-3 h-3 text-white fill-white group-hover:text-cyan-300 group-hover:fill-cyan-300 transition-colors ml-0.5" />
                </span>
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex items-center gap-5 pt-1"
            >
              <div className="flex -space-x-2.5">
                {AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Customer"
                    className="w-8 h-8 rounded-full border-2 border-[#030712] object-cover"
                  />
                ))}
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-400">
                  <span className="text-white font-semibold">2,400+</span> restaurants trust NexusAI
                </p>
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={6}
              className="flex flex-wrap items-center gap-3"
            >
              {TRUST.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs text-slate-500">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ══ RIGHT COLUMN ══ */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center lg:justify-end"
          >
            <DashboardCard />
          </motion.div>
        </div>

        {/* Trusted-by bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="mt-20 pt-8 border-t border-white/[0.05]"
        >
          <p className="text-center text-xs text-slate-600 uppercase tracking-widest font-medium mb-6">
            Trusted by top restaurant groups worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="text-sm font-semibold text-slate-600 hover:text-slate-400 transition-colors cursor-default tracking-wide"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
