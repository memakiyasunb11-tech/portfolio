/* ============================================================
   COMPONENT — Footer
   ============================================================ */

import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { navLinks }  from '../../data/social';
import { personal }  from '../../data/personal';
import './Footer.css';

const socials = [
  { icon: <FiGithub size={18} />,   href: personal.github,              label: 'GitHub'   },
  { icon: <FiLinkedin size={18} />, href: personal.linkedin,            label: 'LinkedIn' },
  { icon: <FiMail size={18} />,     href: `mailto:${personal.email}`,  label: 'Email'    },
  { icon: <FaWhatsapp size={18} />, href: personal.whatsapp,            label: 'WhatsApp' },
];

function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__top-line" aria-hidden="true" />
      <div className="container">
        <div className="footer__inner">
          {/* Logo */}
          <div className="footer__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="footer__logo-text">
              <span className="footer__logo-accent">S</span>M
            </span>
            <span className="footer__logo-tagline">.NET Developer</span>
          </div>

          {/* Nav links */}
          <nav className="footer__nav" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer__nav-link"
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
          <div className="footer__socials">
            {socials.map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="footer__social"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Sunil Memakiya. Built with{' '}
            <FiHeart size={12} style={{ display: 'inline', color: '#f472b6' }} />{' '}
            using React & Framer Motion.
          </p>
          <button className="footer__back-top" onClick={scrollTop} aria-label="Back to top">
            <FiArrowUp size={14} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
