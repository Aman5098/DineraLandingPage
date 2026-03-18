import { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';

const testimonials = [
  {
    name: 'Aria Chen',
    role: 'CTO at Vercel Labs',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face',
    text: 'NexusAI cut our deployment pipeline by 80%. The AI agent builder is genuinely magical — we automated 3 months of manual work in a single afternoon.',
    stars: 5,
    accent: 'cyan',
  },
  {
    name: 'Marcus Webb',
    role: 'Head of Engineering, Stripe',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
    text: 'The analytics dashboard replaced three separate tools we were paying for. Real-time insights with sub-100ms query times — the engineering quality is exceptional.',
    stars: 5,
    accent: 'purple',
  },
  {
    name: 'Sofia Martinez',
    role: 'Product Lead, Linear',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face',
    text: "Security compliance used to take weeks. NexusAI's zero-trust setup had us SOC 2 ready in days. Our enterprise clients finally stopped asking for security audits.",
    stars: 5,
    accent: 'green',
  },
  {
    name: 'James Liu',
    role: 'Founder, Raycast',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face',
    text: "Switched from 4 different AI providers to NexusAI. The multi-model support is incredible — we can A/B test GPT vs Claude vs Gemini with literally one line of config.",
    stars: 5,
    accent: 'pink',
  },
  {
    name: 'Priya Kapoor',
    role: 'VP Engineering, Notion',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face',
    text: 'The developer experience is leagues ahead of anything else. SDK quality, documentation, error messages — it feels like it was designed by engineers, for engineers.',
    stars: 5,
    accent: 'cyan',
  },
  {
    name: 'Tyler Rhodes',
    role: 'Staff Engineer, Figma',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    text: 'Vector search at this scale, this price? We benchmarked everything on the market. NexusAI is 3x faster than Pinecone and a fraction of the cost. No contest.',
    stars: 5,
    accent: 'purple',
  },
];

const accentMap = {
  cyan: {
    border: 'border-cyan-500/20',
    quote: 'text-cyan-500/30',
    star: 'text-cyan-400',
  },
  purple: {
    border: 'border-purple-500/20',
    quote: 'text-purple-500/30',
    star: 'text-purple-400',
  },
  green: {
    border: 'border-green-500/20',
    quote: 'text-green-500/30',
    star: 'text-green-400',
  },
  pink: {
    border: 'border-pink-500/20',
    quote: 'text-pink-500/30',
    star: 'text-pink-400',
  },
};

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  const accent = accentMap[t.accent as keyof typeof accentMap];
  return (
    <div
      className={`flex-shrink-0 w-80 glass rounded-2xl p-6 border ${accent.border} mx-3 relative overflow-hidden`}
    >
      <Quote className={`absolute top-4 right-4 w-10 h-10 ${accent.quote}`} />
      <div className="flex items-center gap-3 mb-4">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-11 h-11 rounded-full object-cover border-2 border-white/10"
        />
        <div>
          <p className="text-sm font-semibold text-white">{t.name}</p>
          <p className="text-xs text-white/40">{t.role}</p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {[...Array(t.stars)].map((_, i) => (
          <Star key={i} className={`w-3.5 h-3.5 ${accent.star} fill-current`} />
        ))}
      </div>
      <p className="text-sm text-white/60 leading-relaxed">"{t.text}"</p>
    </div>
  );
}

function InfiniteStrip({ items, speed, dir }: { items: typeof testimonials; speed: number; dir: 1 | -1 }) {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWidth = 340; // card + margin
  const totalWidth = cardWidth * items.length;

  useAnimationFrame((_, delta) => {
    const px = dir * speed * (delta / 1000);
    let current = x.get() + px;
    if (dir === -1 && current < -totalWidth) current += totalWidth;
    if (dir === 1 && current > 0) current -= totalWidth;
    x.set(current);
  });

  return (
    <div className="overflow-hidden w-full" ref={containerRef}>
      <motion.div
        className="flex"
        style={{ x }}
      >
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </motion.div>
    </div>
  );
}

const logos = [
  { name: 'Vercel', src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=40&fit=crop' },
  { name: 'Stripe', src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=120&h=40&fit=crop' },
  { name: 'Linear', src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=120&h=40&fit=crop' },
  { name: 'Notion', src: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=120&h=40&fit=crop' },
  { name: 'Figma', src: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=120&h=40&fit=crop' },
  { name: 'Raycast', src: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=120&h=40&fit=crop' },
];

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <div className="flex justify-center mb-4">
          <SectionLabel color="green">Social Proof</SectionLabel>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4"
        >
          Trusted by{' '}
          <span className="gradient-text-cyan">world-class teams</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-white/40 max-w-xl mx-auto"
        >
          Join 50,000+ engineers and product teams who use NexusAI to ship faster.
        </motion.p>
      </div>

      {/* Logo strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-8 flex-wrap px-6 mb-14"
      >
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="glass px-6 py-3 rounded-xl text-white/25 font-bold text-sm tracking-widest uppercase hover:text-white/50 transition-colors border border-white/5"
          >
            {logo.name}
          </div>
        ))}
      </motion.div>

      {/* Infinite strips */}
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
          <InfiniteStrip items={testimonials} speed={40} dir={-1} />
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
          <InfiniteStrip items={[...testimonials].reverse()} speed={35} dir={1} />
        </div>
      </div>
    </section>
  );
}
