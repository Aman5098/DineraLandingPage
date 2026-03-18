import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UtensilsCrossed, Menu, X, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Problems',     href: '#problem'      },
  { label: 'Solution',     href: '#solution'     },
  { label: 'Features',     href: '#features'     },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing',      href: '#pricing'      },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function LandingNavbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

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
            ? 'bg-[#0a0303]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_40px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center shadow-[0_0_16px_rgba(255,45,45,0.45)] group-hover:shadow-[0_0_26px_rgba(245,166,35,0.6)] transition-all duration-300">
                <UtensilsCrossed className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Di<span
                  style={{
                    background: 'linear-gradient(135deg, #ff2d2d 0%, #f5a623 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >nera</span>
              </span>
            </motion.a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-3.5 py-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors font-medium">
                Login
              </button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#demo')}
                className="px-5 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-[0_0_20px_rgba(255,45,45,0.35)] hover:shadow-[0_0_32px_rgba(245,166,35,0.55)] transition-all duration-300"
              >
                Free Demo
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#0a0303]/95 backdrop-blur-xl border-b border-white/[0.06] lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all text-left font-medium"
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </button>
              ))}
              <div className="mt-3 pt-3 border-t border-white/[0.06]">
                <button
                  onClick={() => scrollTo('#demo')}
                  className="w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-[0_0_20px_rgba(255,45,45,0.3)]"
                >
                  Free Demo Book Karo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
