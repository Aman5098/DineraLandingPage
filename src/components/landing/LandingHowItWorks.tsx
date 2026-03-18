import { motion } from 'framer-motion';
import { QrCode, ChefHat, CreditCard, BarChart3, ArrowDown } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const STEPS = [
  {
    step: '01',
    icon: QrCode,
    title: 'Guest Scans and Orders',
    subtitle: 'The table becomes a self-sufficient ordering station',
    desc: 'The guest scans the QR code on their table. An elegantly designed digital menu opens instantly — no app download, no account required. They browse, select, add instructions, and confirm their order in under a minute.',
    color: 'wine',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    outcome: 'Order placed in under 60 seconds',
  },
  {
    step: '02',
    icon: ChefHat,
    title: 'Kitchen Receives Instantly',
    subtitle: 'The order appears on the KDS the moment it is confirmed',
    desc: 'No waiter relay. No paper ticket. No shouting. The kitchen display shows the table number, every item, every quantity, and every special instruction — clearly and immediately. The chef acknowledges and begins.',
    color: 'gold',
    image: 'https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=500&h=300&fit=crop',
    outcome: 'Zero miscommunication guaranteed',
  },
  {
    step: '03',
    icon: CreditCard,
    title: 'Billing Generates Automatically',
    subtitle: 'A complete, accurate bill — ready before the guest asks',
    desc: 'The POS compiles the complete order and calculates tax, applicable discounts, and service charges automatically. The guest pays via UPI, card, or cash. A digital receipt is sent instantly via WhatsApp or printed on demand.',
    color: 'warm',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=500&h=300&fit=crop',
    outcome: 'Checkout completed in under 2 minutes',
  },
  {
    step: '04',
    icon: BarChart3,
    title: 'Owner Sees Everything, Live',
    subtitle: 'Complete operational visibility from anywhere in the world',
    desc: 'The owner\'s dashboard updates with every order closed. Revenue, bestselling dishes, table turnover, peak hours, and staff performance are all visible in real time. Whether present or remote, you are always fully informed.',
    color: 'gold',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    outcome: 'Full visibility, from any device',
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string; badge: string }> = {
  wine:    { text: 'text-[#b8705a]',  border: 'border-[#8b2035]/22',   bg: 'bg-[#6b1d2e]/10',  badge: 'bg-[#6b1d2e]/15 text-[#b8705a] border-[#8b2035]/22'    },
  gold:    { text: 'text-[#c9a84c]',  border: 'border-[#b8922a]/22',   bg: 'bg-[#b8922a]/10',  badge: 'bg-[#b8922a]/12 text-[#c9a84c] border-[#b8922a]/22'    },
  warm:    { text: 'text-[#a09080]',  border: 'border-[#5a3828]/22',   bg: 'bg-[#3a2820]/10',  badge: 'bg-[#3a2820]/15 text-[#a09080] border-[#5a3828]/22'    },
};

export default function LandingHowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-40" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#b8922a]/18 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6b4a10]/12 border border-[#b8922a]/20 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse-soft" />
            The Complete Flow
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f5f0e8] tracking-tight mb-4"
          >
            From Scan to{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #c9a84c 0%, #a02840 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Served
            </span>
            {' '}— Four Seamless Steps
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-[#d1c1b2] text-lg max-w-2xl mx-auto"
          >
            A guest scans the QR code. Four automatic steps later, their order has travelled from table to kitchen to tray — without a single manual handoff.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {STEPS.map(({ step, icon: Icon, title, subtitle, desc, color, image, outcome }, i) => {
            const c = colorMap[color];
            const isEven = i % 2 === 0;
            return (
              <div key={step}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: 0.1, ease }}
                  className={`glass rounded-3xl border ${c.border} overflow-hidden`}
                >
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch`}>

                    {/* Image side */}
                    <div className="lg:w-2/5 relative h-48 lg:h-auto overflow-hidden">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-[#110e0d]/80 via-[#110e0d]/30 to-transparent`} />
                      {/* Step number overlay */}
                      <div className={`absolute top-4 ${isEven ? 'right-4' : 'left-4'}`}>
                        <span className={`text-6xl font-black opacity-20 ${c.text}`}>{step}</span>
                      </div>
                      {/* Outcome badge */}
                      <div className={`absolute bottom-4 ${isEven ? 'left-4' : 'right-4'}`}>
                        <span className={`px-3 py-1.5 rounded-xl text-xs font-bold ${c.badge} backdrop-blur-sm border`}>
                          ✓ {outcome}
                        </span>
                      </div>
                    </div>

                    {/* Content side */}
                    <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center shrink-0`}>
                          <Icon className={`w-6 h-6 ${c.text}`} />
                        </div>
                        <div>
                          <span className={`text-xs font-bold uppercase tracking-widest ${c.text} opacity-55`}>Step {step}</span>
                          <h3 className="text-xl font-bold text-[#f5f0e8]">{title}</h3>
                        </div>
                      </div>

                      <p className={`text-sm font-semibold italic mb-3 ${c.text}`}>"{subtitle}"</p>
                      <p className="text-[#d1c1b2] leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Connector arrow */}
                {i < STEPS.length - 1 && (
                  <div className="flex justify-center py-3">
                    <motion.div
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowDown className="w-5 h-5 text-[#917966]" />
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Timeline pill at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mt-14 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass border border-[#b8922a]/18 bg-gradient-to-r from-[#6b1d2e]/4 to-[#b8922a]/4 text-center">
            <span className="text-2xl">⏱</span>
            <div>
              <p className="text-[#e8e0d6] font-bold">From scan to served — averaging 8 to 12 minutes.</p>
              <p className="text-[#c7a486] text-sm">Industry average: 22 minutes. The difference is felt by every guest, every service.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
