import { motion } from 'framer-motion';
import { Zap, Twitter, Github, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Integrations', 'Changelog', 'Roadmap', 'Pricing', 'Status'],
  Developers: ['Documentation', 'API Reference', 'SDKs', 'CLI', 'Open Source', 'Community'],
  Company: ['About', 'Blog', 'Careers', 'Press Kit', 'Partners', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security', 'SOC 2'],
};

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/6 overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2.5 mb-5 group w-fit"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 opacity-90" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 blur-md opacity-50" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <Zap className="w-4 h-4 text-white" fill="white" />
                </div>
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                Nexus<span className="gradient-text-cyan">AI</span>
              </span>
            </motion.a>

            <p className="text-sm text-white/35 leading-relaxed mb-6 max-w-xs">
              The AI-powered SaaS platform for next-generation teams. Build, ship, and scale with intelligence.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 glass rounded-lg border border-white/8 flex items-center justify-center text-white/35 hover:text-white hover:border-white/20 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/35 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} NexusAI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/25">All systems operational</span>
            </div>
            <span className="text-xs text-white/15">v3.0.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
