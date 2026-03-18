import { motion } from 'framer-motion';
import {
  AlertTriangle, FileX, Users, Flame, BarChart2, RefreshCw, Lock,
} from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const PROBLEMS = [
  {
    icon: FileX,
    emoji: '😤',
    title: 'Orders Lost in Translation',
    hinglish: 'Waiter ne galat suna, kitchen ne galat banaya',
    desc: '"No onions" wala dish onions ke saath aata hai. Customer naraaz, waiter embarrassed, chef defensive. Roz hota hai yeh.',
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.12)]',
  },
  {
    icon: AlertTriangle,
    emoji: '💸',
    title: 'Billing Errors Har Roz',
    hinglish: 'Manual calculation = guaranteed mistakes',
    desc: 'GST galat, discount inconsistent, split bill ka confusion. Customer overcharge hota hai — ya aap undercharge karte ho. Dono nuksaan.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]',
  },
  {
    icon: Users,
    emoji: '😰',
    title: 'Staff Ko Kuch Nahi Pata',
    hinglish: 'Kaun sa order pending? Kaunsa table pay kar chuka?',
    desc: 'Naya waiter confused, cashier ko nahi pata table ne pay kiya ya nahi, kitchen nahi jaanta dine-in hai ya takeaway. Sab ek dusre se puchh rahe hain.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.12)]',
  },
  {
    icon: Flame,
    emoji: '🔥',
    title: 'Peak Hours = Controlled Chaos',
    hinglish: 'Friday 8 baje — har cheez toot jaati hai',
    desc: 'Kitchen backed up, customers impatient, waiter rush mein galti karta hai. Owner khud floor pe aa jaata hai sirf survive karne ke liye.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10 border-rose-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(244,63,94,0.12)]',
  },
  {
    icon: BarChart2,
    emoji: '😔',
    title: 'Koi Visibility Nahi',
    hinglish: '"Aaj kitna hua?" — kisi ko nahi pata',
    desc: 'Din ke end mein cashier ka number, kitchen ka count aur actual cash — teeno alag. Decisions gut feeling se hote hain, data se nahi.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]',
  },
  {
    icon: RefreshCw,
    emoji: '😠',
    title: 'Menu Update Nightmare',
    hinglish: 'Price badhana hai? Har waiter ko alag bolna padega',
    desc: 'Out-of-stock item customer order karta hai. Wrong price charge hoti hai. Promotion end ho gayi lekin menu mein abhi bhi chal rahi hai.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10 border-indigo-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]',
  },
  {
    icon: Lock,
    emoji: '😩',
    title: 'Owner Trap Mein Hai',
    hinglish: 'Aap nahi to restaurant nahi',
    desc: 'Moment aap nikalte ho — sab dhila pad jaata hai. Sunday off? Doosri location? Yeh sab sapne hain. Pehle yeh system solve karo.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(0,245,255,0.12)]',
  },
];

export default function LandingProblem() {
  return (
    <section id="problem" className="relative py-24 overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
        <div className="absolute top-1/2 -left-60 w-80 h-80 bg-red-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-60 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            Ye Sab Pehchaan Rahe Ho?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Yeh Problems Aapko{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f87171, #fb923c)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Roz Thodti Hain
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Aap akele nahi ho. India ke 90% restaurant owners yahi face karte hain. Roz. Har service mein.
          </motion.p>
        </div>

        {/* Problem cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROBLEMS.slice(0, 6).map(({ icon: Icon, emoji, title, hinglish, desc, color, bg, glow }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              whileHover={{ y: -4 }}
              className={`glass rounded-2xl border p-6 transition-all duration-300 cursor-default ${bg} ${glow}`}
            >
              <div className="flex items-start gap-4 mb-3">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${bg}`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <span className="text-2xl">{emoji}</span>
              </div>
              <h3 className={`font-bold text-base mb-1 ${color}`}>{title}</h3>
              <p className="text-slate-500 text-xs font-medium italic mb-2">{hinglish}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
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
              className="mt-4 glass rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:shadow-[0_0_40px_rgba(0,245,255,0.08)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 text-cyan-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-lg text-cyan-400">{last.title}</h3>
                  <span className="text-2xl">{last.emoji}</span>
                </div>
                <p className="text-slate-500 text-sm italic mb-2">{last.hinglish}</p>
                <p className="text-slate-400 leading-relaxed">{last.desc}</p>
              </div>
              <div className="shrink-0 px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold text-center">
                Sabse Badi<br />Problem Yeh Hai
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
          <p className="text-slate-300 text-lg font-medium">
            Agar aapne <span className="text-red-400 font-bold">3 ya zyada problems</span> pehchaani hain...
          </p>
          <p className="text-slate-500 mt-1">
            ...to RestroOS exactly aapke liye bana hai. Neeche dekho kaise.
          </p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-4 text-slate-600 text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
