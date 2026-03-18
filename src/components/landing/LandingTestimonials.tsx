import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const TESTIMONIALS = [
  {
    name: 'Rajesh Sharma',
    role: 'Owner, Spice Garden',
    location: 'Connaught Place, New Delhi',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    quote: 'Friday evenings used to fill me with dread. Now I look forward to them. Orders are never missed, billing completes in thirty seconds, and the kitchen runs on a clear system. It is the best investment I have made in fifteen years of running this restaurant.',
    highlight: 'Zero missed orders since launch',
    metric: '+42%',
    metricLabel: 'revenue in 3 months',
    color: 'wine',
  },
  {
    name: 'Priya Nair',
    role: 'Co-owner, Coconut Grove',
    location: 'Bandra, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    quote: 'I was convinced this would be complicated. It was not. Thirty minutes to go live. Staff adopted it without any resistance — the interface is that intuitive. I can now see exactly what is happening on the floor from my phone, wherever I am.',
    highlight: 'Fully live in under 30 minutes',
    metric: '100%',
    metricLabel: 'staff adoption rate',
    color: 'gold',
  },
  {
    name: 'Arjun Mehta',
    role: 'Owner, The Punjabi Dhaba (3 branches)',
    location: 'Pune',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    quote: 'Managing three branches was becoming unmanageable. Dinera put all three on a single dashboard. Staff accountability improved immediately. Unexplained discounts dropped significantly. Revenue was up 38% in the first month — I had not changed anything except the system.',
    highlight: 'Three branches on one dashboard',
    metric: '38%',
    metricLabel: 'revenue growth in month 1',
    color: 'neutral',
  },
  {
    name: 'Sunita Reddy',
    role: 'Owner, Maa ki Rasoi',
    location: 'Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    quote: 'The QR ordering has genuinely delighted our guests, particularly younger diners who prefer to order at their own pace. The AI assistant recommends combinations intelligently — our average bill value has increased by 20% without any pressure selling from staff.',
    highlight: 'Average bill value up 20%',
    metric: '+20%',
    metricLabel: 'average order value',
    color: 'warm',
  },
  {
    name: 'Kiran Patel',
    role: 'Founder, Cloud Kitchen Network (6 brands)',
    location: 'Ahmedabad',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    quote: 'Running six brands from one kitchen was chaotic before Dinera. Now each brand has its own display screen. Priorities are clear. Dispatch is accurate. WhatsApp ordering has opened an entirely new revenue channel I had not planned for.',
    highlight: 'Six brands, one kitchen, zero chaos',
    metric: '6×',
    metricLabel: 'brands on one dashboard',
    color: 'gold',
  },
  {
    name: 'Mohit Gupta',
    role: 'Operations Manager, Hotel Grand Maharaja',
    location: 'Jaipur',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    quote: 'We serve over 200 covers daily. Migrating from our previous system seemed daunting — it took two hours. The support team remained available throughout. Kitchen-to-table time has since decreased by 40%, which our guests notice and comment on.',
    highlight: 'Full migration completed in 2 hours',
    metric: '40%',
    metricLabel: 'faster kitchen-to-table time',
    color: 'wine',
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string; metric: string }> = {
  wine:    { text: 'text-[#b8705a]', border: 'border-[#8b2035]/15',  bg: 'bg-[#6b1d2e]/8',  metric: 'text-[#c07868]' },
  gold:    { text: 'text-[#c9a84c]', border: 'border-[#b8922a]/15',  bg: 'bg-[#b8922a]/8',  metric: 'text-[#d4b97a]' },
  neutral: { text: 'text-[#d1bba8]', border: 'border-[#3a3530]/15',  bg: 'bg-[#ffc992]/8',  metric: 'text-[#9a8878]' },
  warm:    { text: 'text-[#a09080]', border: 'border-[#5a3828]/15',  bg: 'bg-[#3a2820]/8',  metric: 'text-[#b0a090]' },
};

export default function LandingTestimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#b8922a]/15 to-transparent" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#b8922a]/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-[#6b1d2e]/4 rounded-full blur-[120px]" />
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
            From Restaurant Owners
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f5f0e8] tracking-tight mb-4"
          >
            2,400 Owners Who{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #c9a84c 0%, #a02840 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Made the Change
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-[#d1c1b2] text-lg max-w-2xl mx-auto"
          >
            They were sceptical, busy, and frustrated — exactly as you may be now. Their results speak for themselves.
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
                    <Star key={si} className="w-3.5 h-3.5 text-[#b8922a] fill-[#b8922a]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#d1bba8] text-sm leading-relaxed flex-1 mb-4">
                  "{quote}"
                </p>

                {/* Highlight pill */}
                <div className={`px-3 py-1.5 rounded-lg ${c.bg} border ${c.border} mb-5`}>
                  <p className={`text-xs font-semibold ${c.text}`}>— {highlight}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-[#f5f0e8]/[0.04] pt-4">
                  <div className="flex items-center gap-3">
                    <img src={avatar} alt={name} className="w-9 h-9 rounded-full object-cover border-2 border-[#f5f0e8]/[0.06]" />
                    <div>
                      <p className="text-[#e8e0d6] font-semibold text-sm">{name}</p>
                      <p className="text-[#bd8c61] text-[11px]">{role}</p>
                      <p className="text-[#3a2820] text-[10px]">📍 {location}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className={`text-lg font-extrabold ${c.metric}`}>{metric}</p>
                    <p className="text-[#917966] text-[10px] uppercase tracking-wider">{metricLabel}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Rating bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f5f0e8]/[0.03] border border-[#f5f0e8]/[0.06] flex items-center justify-center text-sm font-bold text-[#e8e0d6]">G</div>
            <div>
              <div className="flex items-center gap-1.5">
                {Array(5).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 text-[#b8922a] fill-[#b8922a]" />)}
                <span className="text-[#e8e0d6] font-bold ml-1">4.9</span>
              </div>
              <p className="text-[#bd8c61] text-xs">Based on 847 verified Google Reviews</p>
            </div>
          </div>
          <div className="w-px h-8 bg-[#f5f0e8]/[0.06] hidden sm:block" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f5f0e8]/[0.03] border border-[#f5f0e8]/[0.06] flex items-center justify-center text-[#c9a84c] font-bold text-sm">PH</div>
            <div>
              <div className="flex items-center gap-1.5">
                {Array(5).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 text-[#b8922a] fill-[#b8922a]" />)}
                <span className="text-[#e8e0d6] font-bold ml-1">4.8</span>
              </div>
              <p className="text-[#bd8c61] text-xs">Product of the Month — Product Hunt</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
