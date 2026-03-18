import { motion } from 'framer-motion';
import { Zap, HeartHandshake, Globe, TrendingUp, Award, Phone } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const REASONS = [
  {
    icon: Zap,
    title: 'Setup 30 Min Mein',
    desc: 'Koi IT expert nahi chahiye. Menu upload karo, tables set karo, staff add karo — aaj se hi live ho jao. We handle everything.',
    color: 'amber',
    stat: '30 min',
    statLabel: 'avg. onboarding',
  },
  {
    icon: HeartHandshake,
    title: 'India-First Support',
    desc: 'WhatsApp pe Hindi/Hinglish support. Koi ticket system nahi, koi robot nahi. Real log, real time mein. 7 days a week.',
    color: 'red',
    stat: '<2 hr',
    statLabel: 'response time',
  },
  {
    icon: Globe,
    title: 'Indian Market Ke Liye Banaya',
    desc: 'UPI, GST, FSSAI — sab in-built. Indian restaurant workflows ke hisaab se design kiya gaya. Foreign software se compare mat karo.',
    color: 'emerald',
    stat: '100%',
    statLabel: 'GST compliant',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Badhta Hai',
    desc: 'Average order value 15-25% badhti hai AI recommendations se. Table turnover fast hoti hai. Billing errors se hone wala loss band hota hai.',
    color: 'gold',
    stat: '+38%',
    statLabel: 'avg. revenue increase',
  },
  {
    icon: Award,
    title: 'No Lock-in Contract',
    desc: 'Monthly subscription. Kabhi bhi cancel karo. No questions asked. Lekin ek baar use karne ke baad — wapas jaana nahi chahoge.',
    color: 'rose',
    stat: '0',
    statLabel: 'lock-in period',
  },
  {
    icon: Phone,
    title: 'Works on Any Device',
    desc: 'Naya hardware mat kharido. Existing phones, tablets, laptops pe kaam karta hai. Kitchen mein old Android tablet bhi chalega.',
    color: 'orange',
    stat: 'Any',
    statLabel: 'device supported',
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string; statText: string }> = {
  amber:   { text: 'text-amber-400',   border: 'border-amber-500/20',   bg: 'bg-amber-500/10',   statText: 'text-amber-300'   },
  red:     { text: 'text-red-400',     border: 'border-red-500/20',     bg: 'bg-red-500/10',     statText: 'text-red-300'     },
  emerald: { text: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/10', statText: 'text-emerald-300' },
  gold:    { text: 'text-yellow-400',  border: 'border-yellow-500/20',  bg: 'bg-yellow-500/10',  statText: 'text-yellow-300'  },
  rose:    { text: 'text-rose-400',    border: 'border-rose-500/20',    bg: 'bg-rose-500/10',    statText: 'text-rose-300'    },
  orange:  { text: 'text-orange-400',  border: 'border-orange-500/20',  bg: 'bg-orange-500/10',  statText: 'text-orange-300'  },
};

const COMPETITORS = [
  { name: 'Petpooja',  qr: true,  kds: false, ai: false, whatsapp: false, hindiSupport: false, price: '₹₹₹',  isUs: false },
  { name: 'Posist',    qr: true,  kds: true,  ai: false, whatsapp: false, hindiSupport: false, price: '₹₹₹₹', isUs: false },
  { name: 'UrbanPiper',qr: false, kds: false, ai: false, whatsapp: true,  hindiSupport: false, price: '₹₹₹',  isUs: false },
  { name: 'Dinera',    qr: true,  kds: true,  ai: true,  whatsapp: true,  hindiSupport: true,  price: '₹₹',   isUs: true  },
];

const CHECK_COLS = [
  { key: 'qr',           label: 'QR Ordering'    },
  { key: 'kds',          label: 'KDS Screen'     },
  { key: 'ai',           label: 'AI Chatbot'     },
  { key: 'whatsapp',     label: 'WhatsApp Orders' },
  { key: 'hindiSupport', label: 'Hindi Support'  },
  { key: 'price',        label: 'Price'          },
];

export default function LandingWhyUs() {
  return (
    <section id="why-us" className="relative py-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-amber-600/20 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-30" />
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
            Kyun Dinera?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Baaki Software Se{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f5a623 0%, #ff2d2d 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Alag Kyun Hain?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Sirf features nahi — real reasons jo restaurant owners ko Dinera choose karne pe majboor karte hain.
          </motion.p>
        </div>

        {/* Why cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {REASONS.map(({ icon: Icon, title, desc, color, stat, statLabel }, i) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                whileHover={{ y: -5 }}
                className={`glass rounded-2xl border ${c.border} p-6 transition-all duration-300 group`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-extrabold ${c.statText}`}>{stat}</p>
                    <p className="text-slate-600 text-[10px] uppercase tracking-wider">{statLabel}</p>
                  </div>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <h3 className="text-center text-white font-bold text-xl mb-8">
            <span className="text-slate-400">Competitors vs </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #ff2d2d, #f5a623)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Dinera
            </span>
          </h3>

          <div className="glass rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left px-6 py-4 text-slate-500 text-xs uppercase tracking-wider font-semibold">Platform</th>
                    {CHECK_COLS.map(({ label }) => (
                      <th key={label} className="text-center px-4 py-4 text-slate-500 text-xs uppercase tracking-wider font-semibold">{label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPETITORS.map((comp, i) => (
                    <motion.tr
                      key={comp.name}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, ease }}
                      className={`border-b border-white/[0.04] transition-all duration-200 ${
                        comp.isUs
                          ? 'bg-gradient-to-r from-red-600/8 to-amber-600/8 border-amber-500/20'
                          : 'hover:bg-white/[0.02]'
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`font-bold text-sm ${comp.isUs ? 'text-amber-400' : 'text-slate-300'}`}>
                            {comp.name}
                          </span>
                          {comp.isUs && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-red-500/20 to-amber-500/20 text-amber-300 border border-amber-500/30">
                              YOU
                            </span>
                          )}
                        </div>
                      </td>
                      {CHECK_COLS.map(({ key }) => {
                        const val = comp[key as keyof typeof comp];
                        if (key === 'price') {
                          return (
                            <td key={key} className="text-center px-4 py-4">
                              <span className={`font-bold text-sm ${comp.isUs ? 'text-emerald-400' : 'text-slate-500'}`}>{val as string}</span>
                            </td>
                          );
                        }
                        return (
                          <td key={key} className="text-center px-4 py-4">
                            {val ? (
                              <span className={`text-lg ${comp.isUs ? 'text-emerald-400' : 'text-slate-400'}`}>✓</span>
                            ) : (
                              <span className="text-slate-700 text-lg">✗</span>
                            )}
                          </td>
                        );
                      })}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
