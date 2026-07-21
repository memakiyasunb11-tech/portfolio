import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { navLinks } from '../../data/social';
import { personal } from '../../data/personal';

const socials = [
  { icon: <Github size={20} />, href: personal.github, label: 'GitHub', hoverClass: 'hover:text-white hover:bg-[#333]' },
  { icon: <Linkedin size={20} />, href: personal.linkedin, label: 'LinkedIn', hoverClass: 'hover:text-white hover:bg-[#0077b5]' },
  { icon: <Mail size={20} />, href: `mailto:${personal.email}`, label: 'Email', hoverClass: 'hover:text-white hover:bg-accent' },
  { icon: <FaWhatsapp size={20} />, href: personal.whatsapp, label: 'WhatsApp', hoverClass: 'hover:text-white hover:bg-[#25D366]' },
];

const Footer: React.FC = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-background border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/10 blur-[100px] rounded-[100%] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">

          {/* Logo */}
          <div
            className="flex flex-col items-center md:items-start cursor-pointer group"
            onClick={scrollTop}
          >
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="w-10 h-10 md:w-14 md:h-14 object-contain drop-shadow-[0_0_15px_rgba(99,102,241,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all" />
              <span className="font-heading font-bold text-2xl tracking-tight text-white group-hover:text-primary transition-colors">
                Sunil<span className="text-primary group-hover:text-accent transition-colors">.</span>
              </span>
            </div>
            <span className="text-sm font-medium text-secondary-text mt-1">.NET Backend Developer</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-secondary-text hover:text-white transition-colors px-2 py-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon, href, label, hoverClass }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-secondary-text transition-all duration-300 ${hoverClass}`}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-sm text-secondary-text">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} Sunil Memakiya. Built with
            <Heart size={14} className="text-pink-500 fill-pink-500 animate-pulse mx-1" />
            using React, Vite & Tailwind.
          </p>

          <button
            onClick={scrollTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
