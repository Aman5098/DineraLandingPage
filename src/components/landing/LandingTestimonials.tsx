import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const TESTIMONIALS = [
  {
    name: 'Rajesh Sharma',
    role: 'Owner, Spice Garden',
    location: 'Connaught Place, Delhi',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    quote: 'Pehle Friday evenings se darta tha. Ab enjoy karta hoon. Orders kabhi miss nahi hote, billing 30 seconds mein, kitchen ek system mein chal rahi hai. Best investment jo maine kabhi ki restaurant ke liye.',
    highlight: 'Orders kabhi miss nahi hote',
    metric: '+42% revenue',
    metricLabel: 'in 3 months',
    color: 'red',
  },
  {
    name: 'Priya Nair',
    role: 'Co-owner, Coconut Grove',
    location: 'Bandra, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    quote: 'Mujhe lagta tha yeh sab complex hoga. 30 minutes mein setup ho gaya. Waiters ne bhi quickly adopt kiya. Ab main ghar se bhi dekh sakti hoon ki restaurant mein kya ho raha hai. Mind-blowing.',
    highlight: '30 minutes mein setup',
    metric: '100%',
    metricLabel: 'staff adoption rate',
    color: 'amber',
  },
  {
    name: 'Arjun Mehta',
    role: 'Owner, The Punjabi Dhaba (3 branches)',
    location: 'Pune',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    quote: 'Teen branches manage karna pehle nightmare tha. Ab ek phone pe teeno ka live data dekhta hoon. Staff accountability badh gayi, discounts kam ho gaye, aur pehle hi month mein 38% revenue upar.',
    highlight: 'Teen branches ek screen pe',
    metric: '38%',
    metricLabel: 'revenue in month 1',
    color: 'emerald',
  },
  {
    name: 'Sunita Reddy',
    role: 'Owner, Maa ki Rasoi',
    location: 'Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    quote: 'QR ordering se mere customers bohot khush hain. Specially young crowd jo khud order karna chahta hai. Average bill value 20% badh gayi kyunki AI sahi combos suggest karta hai.',
    highlight: 'Average bill 20% badha',
    metric: '+20%',
    metricLabel: 'avg. order value',
    color: 'gold',
  },
  {
    name: 'Kiran Patel',
    role: 'Founder, Cloud Kitchen Network (6 brands)',
    location: 'Ahmedabad',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    quote: 'Ek kitchen se 6 brands run karta hoon. Pehle total chaos tha. Ab har brand ka order alag screen pe, priority clear, dispatch accurate. WhatsApp ordering ne toh game change kar diya.',
    highlight: '6 brands, 1 kitchen — zero chaos',
    metric: '6x',
    metricLabel: 'brands, 1 dashboard',
    color: 'rose',
  },
  {
    name: 'Mohit Gupta',
    role: 'Manager, Hotel Grand Maharaja',
    location: 'Jaipur',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    quote: 'Hotel mein 200+ covers daily hain. Petpooja se migrate karna scary laga — 2 ghante mein ho gaya. Support team ne puri help ki. Ab kitchen-to-table time 40% reduce ho gaya.',
    highlight: 'Migration 2 ghante mein',
    metric: '40%',
    metricLabel: 'faster kitchen-to-table',
    color: 'orange',
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string; metric: string }> = {
  red:     { text: 'text-red-400',     border: 'border-red-500/20',     bg: 'bg-red-500/10',     metric: 'text-red-300'     },
  amber:   { text: 'text-amber-400',   border: 'border-amber-500/20',   bg: 'bg-amber-500/10',   metric: 'text-amber-300'   },
  emerald: { text: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/10', metric: 'text-emerald-300' },
  gold:    { text: 'text-yellow-400',  border: 'border-yellow-500/20',  bg: 'bg-yellow-500/10',  metric: 'text-yellow-300'  },
  rose:    { text: 'text-rose-400',    border: 'border-rose-500/20',    bg: 'bg-rose-500/10',    metric: 'text-rose-300'    },
  orange:  { text: 'text-orange-400',  border: 'border-orange-500/20',  bg: 'bg-orange-500/10',  metric: 'text-orange-300'  },
};

export default function LandingTestimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-amber-600/20 to-transparent" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-amber-700/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-red-800/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Real Restaurants. Real Results.
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            2,400+ Owners Ko{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f5a623 0%, #ff2d2d 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Yaqeen Ho Gaya
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Yeh log pehle aap jaise tha — skeptical, busy, aur frustrated. Ab unhe pata hai Dinera kya kar sakta hai.
          </motion.p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map(({ name, role, location, avatar, rating, quote, highlight, metric, metricLabel, color }, i) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease }}
                whileHover={{ y: -5 }}
                className={`glass rounded-2xl border ${c.border} p-6 transition-all duration-300 flex flex-col`}
              >
                {/* Quote icon */}
                <div className={`w-8 h-8 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                  <Quote className={`w-4 h-4 ${c.text}`} />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array(rating).fill(0).map((_, si) => (
                    <Star key={si} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-4">
                  "{quote}"
                </p>

                {/* Highlight pill */}
                <div className={`px-3 py-1.5 rounded-lg ${c.bg} border ${c.border} mb-5`}>
                  <p className={`text-xs font-semibold ${c.text}`}>💡 {highlight}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-white/[0.05] pt-4">
                  <div className="flex items-center gap-3">
                    <img src={avatar} alt={name} className="w-9 h-9 rounded-full object-cover border-2 border-white/10" />
                    <div>
                      <p className="text-white font-semibold text-sm">{name}</p>
                      <p className="text-slate-500 text-[11px]">{role}</p>
                      <p className="text-slate-600 text-[10px]">📍 {location}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className={`text-lg font-extrabold ${c.metric}`}>{metric}</p>
                    <p className="text-slate-600 text-[10px] uppercase tracking-wider">{metricLabel}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Google rating bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg font-bold text-white">G</div>
            <div>
              <div className="flex items-center gap-1.5">
                {Array(5).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                <span className="text-white font-bold ml-1">4.9</span>
              </div>
              <p className="text-slate-500 text-xs">Based on 847 Google Reviews</p>
            </div>
          </div>
          <div className="w-px h-8 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 font-bold text-sm">PH</div>
            <div>
              <div className="flex items-center gap-1.5">
                {Array(5).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                <span className="text-white font-bold ml-1">4.8</span>
              </div>
              <p className="text-slate-500 text-xs">Product of the Month — Product Hunt</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
