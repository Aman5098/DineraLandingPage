import { motion } from 'framer-motion';
import { QrCode, ChefHat, CreditCard, BarChart3, ArrowDown } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const STEPS = [
  {
    step: '01',
    icon: QrCode,
    title: 'Customer QR Scan Karta Hai',
    hinglish: 'Table pe QR code hai — bas scan karo',
    desc: 'Customer apne phone se table ka QR scan karta hai. Instantly digital menu open hota hai — bina app download, bina login. Customer apni marzi se order select karta hai, special instructions add karta hai.',
    color: 'cyan',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    outcome: 'Order placed in 60 seconds',
  },
  {
    step: '02',
    icon: ChefHat,
    title: 'Kitchen Screen Pe Seedha KOT',
    hinglish: 'Waiter nahi, paper nahi — directly kitchen mein',
    desc: 'Order submit hote hi kitchen display screen pe turant appear hota hai. Table number, items, quantity, special instructions — sab clearly dikhta hai. Chef confirm karta hai aur preparation shuru.',
    color: 'amber',
    image: 'https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=500&h=300&fit=crop',
    outcome: 'Zero miscommunication',
  },
  {
    step: '03',
    icon: CreditCard,
    title: 'Automatic Bill Ready',
    hinglish: 'Jaise hi last item serve hua, bill generate',
    desc: 'POS automatically complete order ka bill generate karta hai. Tax, discounts, service charge — sab auto-calculated. Customer UPI, card, ya cash se pay karta hai. Receipt instant print ya WhatsApp pe.',
    color: 'emerald',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=500&h=300&fit=crop',
    outcome: 'Checkout in under 2 minutes',
  },
  {
    step: '04',
    icon: BarChart3,
    title: 'Owner Dashboard Pe Sab Live',
    hinglish: 'Ghar pe baithe, phone pe dekho',
    desc: 'Ek bhi order close hote hi dashboard update hota hai. Revenue, top dishes, table turnover, staff performance — sab real-time. Owner chahe restaurant mein ho ya ghar pe, poori picture clear hai.',
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    outcome: 'Full control, anywhere',
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string; badge: string; step: string; connector: string }> = {
  cyan:    { text: 'text-cyan-400',    border: 'border-cyan-500/30',    bg: 'bg-cyan-500/10',    badge: 'bg-cyan-500/20 text-cyan-300',    step: 'text-cyan-500/40',    connector: 'from-cyan-500/30'    },
  amber:   { text: 'text-amber-400',   border: 'border-amber-500/30',   bg: 'bg-amber-500/10',   badge: 'bg-amber-500/20 text-amber-300',   step: 'text-amber-500/40',   connector: 'from-amber-500/30'   },
  emerald: { text: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', badge: 'bg-emerald-500/20 text-emerald-300', step: 'text-emerald-500/40', connector: 'from-emerald-500/30' },
  purple:  { text: 'text-purple-400',  border: 'border-purple-500/30',  bg: 'bg-purple-500/10',  badge: 'bg-purple-500/20 text-purple-300',  step: 'text-purple-500/40',  connector: 'from-purple-500/30'  },
};

export default function LandingHowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-50" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Kaise Kaam Karta Hai
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Scan to{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #00f5ff 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Served
            </span>{' '}
            — 4 Simple Steps
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Customer QR scan karta hai — 4 automatic steps mein order kitchen se table tak pahunch jaata hai. Koi manual step nahi.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {STEPS.map(({ step, icon: Icon, title, hinglish, desc, color, image, outcome }, i) => {
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
                      <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-[#030712]/80 via-[#030712]/30 to-transparent`} />
                      {/* Step number overlay */}
                      <div className={`absolute top-4 ${isEven ? 'right-4' : 'left-4'}`}>
                        <span className={`text-6xl font-black opacity-30 ${c.text}`}>{step}</span>
                      </div>
                      {/* Outcome badge */}
                      <div className={`absolute bottom-4 ${isEven ? 'left-4' : 'right-4'}`}>
                        <span className={`px-3 py-1.5 rounded-xl text-xs font-bold ${c.badge} backdrop-blur-sm border ${c.border}`}>
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
                          <span className={`text-xs font-bold uppercase tracking-widest ${c.text} opacity-60`}>Step {step}</span>
                          <h3 className={`text-xl font-bold text-white`}>{title}</h3>
                        </div>
                      </div>

                      <p className={`text-sm font-semibold italic mb-3 ${c.text}`}>"{hinglish}"</p>
                      <p className="text-slate-400 leading-relaxed">{desc}</p>
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
                      <ArrowDown className="w-5 h-5 text-slate-600" />
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
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass border border-white/10 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 text-center">
            <span className="text-2xl">⚡</span>
            <div>
              <p className="text-white font-bold">Scan se served tak — sirf 8-12 minutes.</p>
              <p className="text-slate-500 text-sm">Average industry time: 22 minutes. RestroOS ke saath: 8 minutes.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
