import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useScrolled } from '../../hooks/useScrolled';
import { navLinks } from '../../data/social';
import { personal } from '../../data/personal';
import { cn } from '../../utils/cn';

const sectionIds = navLinks.map((l) => l.href.replace('#', ''));

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(20);
  const activeId = useScrollSpy(sectionIds, 80);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-3 bg-background/70 backdrop-blur-md border-b border-white/10 shadow-lg' : 'py-5 bg-transparent'
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <img src="/logo.png" alt="Logo" className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all" />
          <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">
            Sunil<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md" aria-label="Main navigation">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  isActive ? 'text-white' : 'text-secondary-text hover:text-white'
                )}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full bg-primary/20 border border-primary/30 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Resume & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/50 transition-all font-medium text-sm group"
            aria-label="Download resume"
          >
            <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
            <span>Resume</span>
          </a>

          <button
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-cards border-b border-white/10"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link, i) => {
                const isActive = activeId === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                      isActive ? 'bg-primary/20 text-primary' : 'text-secondary-text hover:bg-white/5 hover:text-white'
                    )}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <a
                href={personal.resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-lg bg-primary text-white font-medium"
              >
                <Download size={18} /> Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
