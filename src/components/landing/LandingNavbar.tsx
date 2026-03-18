import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UtensilsCrossed, Menu, X, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Challenges',   href: '#problem'      },
  { label: 'Solutions',    href: '#solution'     },
  { label: 'Features',     href: '#features'     },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing',      href: '#pricing'      },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function LandingNavbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,  opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#110e0d]/92 backdrop-blur-xl border-b border-[#f5f0e8]/[0.05] shadow-[0_4px_40px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">

            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8b2035] to-[#b8922a] flex items-center justify-center shadow-[0_0_14px_rgba(107,29,46,0.40)] group-hover:shadow-[0_0_22px_rgba(184,146,42,0.45)] transition-all duration-300">
                <UtensilsCrossed className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[#f5f0e8] font-bold text-lg tracking-tight">
                Di<span
                  style={{
                    background: 'linear-gradient(135deg, #a02840 0%, #c9a84c 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >nera</span>
              </span>
            </motion.a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-3.5 py-2 text-sm text-[#a09080] hover:text-[#e8e0d6] transition-colors duration-200 rounded-lg hover:bg-white/[0.04] font-medium"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="px-4 py-2 text-sm text-[#a09080] hover:text-[#e8e0d6] transition-colors font-medium">
                Sign In
              </button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#demo')}
                className="px-5 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#7a1e30] to-[#b8922a] text-[#f5f0e8] shadow-[0_0_18px_rgba(107,29,46,0.30)] hover:shadow-[0_0_28px_rgba(184,146,42,0.40)] transition-all duration-300"
              >
                Request Demo
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-[#a09080] hover:text-[#e8e0d6] hover:bg-white/[0.04] transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#110e0d]/96 backdrop-blur-xl border-b border-[#f5f0e8]/[0.05] lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm text-[#c0b0a0] hover:text-[#e8e0d6] hover:bg-white/[0.04] rounded-xl transition-all text-left font-medium"
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 text-[#5a4838]" />
                </button>
              ))}
              <div className="mt-3 pt-3 border-t border-[#f5f0e8]/[0.05]">
                <button
                  onClick={() => scrollTo('#demo')}
                  className="w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#7a1e30] to-[#b8922a] text-[#f5f0e8] shadow-[0_0_18px_rgba(107,29,46,0.25)]"
                >
                  Request a Free Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
