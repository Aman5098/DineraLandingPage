import { motion } from 'framer-motion';
import { Zap, HeartHandshake, Globe, TrendingUp, Award, Phone } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const REASONS = [
  {
    icon: Zap,
    title: 'Operational Within 30 Minutes',
    desc: 'No IT consultant required. Upload your menu, configure your floor plan, add your staff — and open for service. Our onboarding team walks you through every step at no additional cost.',
    color: 'gold',
    stat: '30 min',
    statLabel: 'average onboarding time',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Human Support',
    desc: 'No ticketing systems. No automated queues. When something needs attention, a real person responds — in your language, in your time zone, within two hours. Seven days a week.',
    color: 'wine',
    stat: '< 2 hr',
    statLabel: 'average response time',
  },
  {
    icon: Globe,
    title: 'Built for the Indian Market',
    desc: 'UPI, GST compliance, FSSAI-ready — built in from day one, not bolted on as an afterthought. Designed around how Indian restaurants actually operate, not how foreign software assumes they do.',
    color: 'neutral',
    stat: '100%',
    statLabel: 'GST compliant',
  },
  {
    icon: TrendingUp,
    title: 'Measurable Revenue Impact',
    desc: 'AI-driven recommendations lift average order values by 15–25%. Faster table turnover increases covers per shift. Billing accuracy eliminates silent revenue leakage. The return is tangible and trackable.',
    color: 'gold',
    stat: '+38%',
    statLabel: 'average revenue increase',
  },
  {
    icon: Award,
    title: 'No Long-Term Commitment',
    desc: 'Month-to-month subscription. Cancel at any moment, for any reason, with no penalty. We retain customers through genuine value — not contractual obligation.',
    color: 'warm',
    stat: 'Zero',
    statLabel: 'lock-in period',
  },
  {
    icon: Phone,
    title: 'Runs on Your Existing Hardware',
    desc: 'No proprietary terminals to purchase. No specialist installation to arrange. Dinera runs on any smartphone, tablet, or laptop currently in your restaurant. Start today.',
    color: 'neutral',
    stat: 'Any',
    statLabel: 'device supported',
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string; statText: string }> = {
  gold:    { text: 'text-[#c9a84c]', border: 'border-[#b8922a]/18',  bg: 'bg-[#b8922a]/8',  statText: 'text-[#d4b97a]' },
  wine:    { text: 'text-[#b8705a]', border: 'border-[#8b2035]/18',  bg: 'bg-[#6b1d2e]/8',  statText: 'text-[#c07868]' },
  neutral: { text: 'text-[#d1bba8]', border: 'border-[#3a3530]/18',  bg: 'bg-[#ffc992]/8',  statText: 'text-[#9a8878]' },
  warm:    { text: 'text-[#a09080]', border: 'border-[#5a3828]/18',  bg: 'bg-[#3a2820]/8',  statText: 'text-[#b0a090]' },
};

const COMPETITORS = [
  { name: 'Petpooja',   qr: true,  kds: false, ai: false, whatsapp: false, localSupport: false, price: '₹₹₹',  isUs: false },
  { name: 'Posist',     qr: true,  kds: true,  ai: false, whatsapp: false, localSupport: false, price: '₹₹₹₹', isUs: false },
  { name: 'UrbanPiper', qr: false, kds: false, ai: false, whatsapp: true,  localSupport: false, price: '₹₹₹',  isUs: false },
  { name: 'Dinera',     qr: true,  kds: true,  ai: true,  whatsapp: true,  localSupport: true,  price: '₹₹',   isUs: true  },
];

const CHECK_COLS = [
  { key: 'qr',           label: 'QR Ordering'     },
  { key: 'kds',          label: 'KDS Screen'      },
  { key: 'ai',           label: 'AI Assistant'    },
  { key: 'whatsapp',     label: 'WhatsApp Orders' },
  { key: 'localSupport', label: 'Local Support'   },
  { key: 'price',        label: 'Pricing Tier'    },
];

export default function LandingWhyUs() {
  return (
    <section id="why-us" className="relative py-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#b8922a]/15 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-25" />
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
            Why Dinera
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f5f0e8] tracking-tight mb-4"
          >
            Substantively Different{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #c9a84c 0%, #a02840 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              From the Alternatives
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-[#d1c1b2] text-lg max-w-2xl mx-auto"
          >
            Not feature-count. The genuine reasons restaurant owners choose Dinera and do not look back.
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
                    <p className="text-[#917966] text-[10px] uppercase tracking-wider">{statLabel}</p>
                  </div>
                </div>
                <h3 className="text-[#e8e0d6] font-bold text-base mb-2">{title}</h3>
                <p className="text-[#c7a486] text-sm leading-relaxed">{desc}</p>
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
          <h3 className="text-center text-[#e8e0d6] font-bold text-xl mb-8">
            <span className="text-[#c7a486]">The Competition vs. </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #a02840, #c9a84c)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Dinera
            </span>
          </h3>

          <div className="glass rounded-2xl border border-[#f5f0e8]/[0.06] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-[#f5f0e8]/[0.05]">
                    <th className="text-left px-6 py-4 text-[#bd8c61] text-xs uppercase tracking-wider font-semibold">Platform</th>
                    {CHECK_COLS.map(({ label }) => (
                      <th key={label} className="text-center px-4 py-4 text-[#bd8c61] text-xs uppercase tracking-wider font-semibold">{label}</th>
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
                      className={`border-b border-[#f5f0e8]/[0.03] transition-all duration-200 ${
                        comp.isUs
                          ? 'bg-gradient-to-r from-[#6b1d2e]/6 to-[#b8922a]/6 border-[#b8922a]/15'
                          : 'hover:bg-white/[0.015]'
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`font-bold text-sm ${comp.isUs ? 'text-[#c9a84c]' : 'text-[#c7a486]'}`}>
                            {comp.name}
                          </span>
                          {comp.isUs && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-[#6b1d2e]/20 to-[#b8922a]/20 text-[#c9a84c] border border-[#b8922a]/25">
                              You
                            </span>
                          )}
                        </div>
                      </td>
                      {CHECK_COLS.map(({ key }) => {
                        const val = comp[key as keyof typeof comp];
                        if (key === 'price') {
                          return (
                            <td key={key} className="text-center px-4 py-4">
                              <span className={`font-bold text-sm ${comp.isUs ? 'text-emerald-500' : 'text-[#917966]'}`}>{val as string}</span>
                            </td>
                          );
                        }
                        return (
                          <td key={key} className="text-center px-4 py-4">
                            {val ? (
                              <span className={`text-lg ${comp.isUs ? 'text-emerald-500' : 'text-[#c7a486]'}`}>✓</span>
                            ) : (
                              <span className="text-[#ffc992] text-lg">✗</span>
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
