import { motion } from 'framer-motion';
import { UtensilsCrossed, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const FOOTER_LINKS = {
  Product: [
    { label: 'QR Ordering',        href: '#solution'  },
    { label: 'POS System',         href: '#solution'  },
    { label: 'Kitchen Display',    href: '#solution'  },
    { label: 'Analytics',          href: '#features'  },
    { label: 'WhatsApp Ordering',  href: '#features'  },
    { label: 'AI Assistant',       href: '#features'  },
  ],
  Company: [
    { label: 'About Us',   href: '#' },
    { label: 'Blog',       href: '#' },
    { label: 'Careers',    href: '#' },
    { label: 'Press',      href: '#' },
    { label: 'Partners',   href: '#' },
  ],
  Support: [
    { label: 'Help Centre',       href: '#' },
    { label: 'Documentation',     href: '#' },
    { label: 'API Reference',     href: '#' },
    { label: 'System Status',     href: '#' },
    { label: 'WhatsApp Support',  href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy',   href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Refund Policy',    href: '#' },
    { label: 'GDPR Compliance',  href: '#' },
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
    <footer className="relative border-t border-[#f5f0e8]/[0.04] overflow-hidden">
      {/* Subtle top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#b8922a]/12 to-transparent" />

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
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#8b2035] to-[#b8922a] flex items-center justify-center shadow-[0_0_14px_rgba(107,29,46,0.30)]">
                <UtensilsCrossed className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[#f5f0e8] font-bold text-xl tracking-tight">
                Di<span
                  style={{
                    background: 'linear-gradient(135deg, #a02840, #c9a84c)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >nera</span>
              </span>
            </motion.a>

            <p className="text-[#bd8c61] text-sm leading-relaxed mb-6 max-w-xs">
              India's premier restaurant operating system. QR ordering, POS, kitchen display, and real-time analytics — unified in one platform. Trusted by 2,400+ restaurants.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 mb-6">
              <a href="mailto:hello@dinera.in" className="flex items-center gap-2.5 text-[#bd8c61] hover:text-[#c9a84c] transition-colors text-sm group">
                <Mail className="w-4 h-4 text-[#3a2820] group-hover:text-[#c9a84c] transition-colors" />
                hello@dinera.in
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-2.5 text-[#bd8c61] hover:text-[#c9a84c] transition-colors text-sm group">
                <Phone className="w-4 h-4 text-[#3a2820] group-hover:text-[#c9a84c] transition-colors" />
                +91 99999 99999
              </a>
              <div className="flex items-start gap-2.5 text-[#bd8c61] text-sm">
                <MapPin className="w-4 h-4 text-[#3a2820] mt-0.5 shrink-0" />
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
                  className="w-9 h-9 rounded-lg glass border border-[#f5f0e8]/[0.06] flex items-center justify-center text-[#917966] hover:text-[#c9a84c] hover:border-[#b8922a]/22 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[#c0b0a0] font-semibold text-sm mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => scrollTo(href)}
                      className="text-[#917966] hover:text-[#d1bba8] text-sm transition-colors duration-200 text-left"
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
        <div className="py-5 border-t border-[#f5f0e8]/[0.03]">
          <p className="text-[#ffc992] text-xs text-center mb-2 uppercase tracking-wider">Serving Restaurants Across India</p>
          <div className="flex flex-wrap justify-center gap-2">
            {CITIES.map((city) => (
              <span key={city} className="px-3 py-1 rounded-full bg-[#f5f0e8]/[0.02] border border-[#f5f0e8]/[0.04] text-[#ffc992] text-[11px]">
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[#f5f0e8]/[0.03] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#ffc992] text-xs text-center sm:text-left">
            © 2025 Dinera Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-[#ffc992]">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              All systems operational
            </div>
            <span className="text-[#1e1c1a]">•</span>
            <span className="text-[#ffc992] text-xs">Crafted with care in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
