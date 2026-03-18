import { motion } from 'framer-motion';
import { UtensilsCrossed, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const FOOTER_LINKS = {
  Product: [
    { label: 'QR Ordering',        href: '#solution' },
    { label: 'POS System',         href: '#solution' },
    { label: 'Kitchen Display',    href: '#solution' },
    { label: 'Analytics',          href: '#features' },
    { label: 'WhatsApp Ordering',  href: '#features' },
    { label: 'AI Chatbot',         href: '#features' },
  ],
  Company: [
    { label: 'About Us',           href: '#' },
    { label: 'Blog',               href: '#' },
    { label: 'Careers',            href: '#' },
    { label: 'Press',              href: '#' },
    { label: 'Partners',           href: '#' },
  ],
  Support: [
    { label: 'Help Center',        href: '#' },
    { label: 'Documentation',      href: '#' },
    { label: 'API Reference',      href: '#' },
    { label: 'System Status',      href: '#' },
    { label: 'WhatsApp Support',   href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy',     href: '#' },
    { label: 'Terms of Service',   href: '#' },
    { label: 'Refund Policy',      href: '#' },
    { label: 'GDPR Compliance',    href: '#' },
  ],
};

const SOCIALS = [
  { icon: Twitter,   href: '#', label: 'Twitter'   },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin,  href: '#', label: 'LinkedIn'  },
  { icon: Youtube,   href: '#', label: 'YouTube'   },
];

const CITIES = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai', 'Ahmedabad', 'Jaipur', 'Kolkata', 'Lucknow'];

export default function LandingFooter() {
  const scrollTo = (href: string) => {
    if (href === '#') return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2.5 mb-5 group w-fit"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-[0_0_16px_rgba(0,245,255,0.35)]">
                <UtensilsCrossed className="w-4.5 h-4.5 text-[#030712]" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Restro<span
                  style={{
                    background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >OS</span>
              </span>
            </motion.a>

            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              India ka #1 restaurant management platform. QR ordering, POS, KDS — sab ek jagah. 2,400+ restaurants ka bharosa.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 mb-6">
              <a href="mailto:hello@restroos.in" className="flex items-center gap-2.5 text-slate-500 hover:text-cyan-400 transition-colors text-sm group">
                <Mail className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                hello@restroos.in
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-2.5 text-slate-500 hover:text-cyan-400 transition-colors text-sm group">
                <Phone className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                +91 99999 99999
              </a>
              <div className="flex items-start gap-2.5 text-slate-500 text-sm">
                <MapPin className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" />
                Connaught Place, New Delhi — 110001
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => scrollTo(href)}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200 text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cities we serve */}
        <div className="py-5 border-t border-white/[0.04]">
          <p className="text-slate-600 text-xs text-center mb-2 uppercase tracking-wider">Available across India</p>
          <div className="flex flex-wrap justify-center gap-2">
            {CITIES.map((city) => (
              <span key={city} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-slate-600 text-[11px]">
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs text-center sm:text-left">
            © 2025 RestroOS Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All systems operational
            </div>
            <span className="text-slate-700">•</span>
            <span className="text-slate-600 text-xs">Made with ❤️ in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
