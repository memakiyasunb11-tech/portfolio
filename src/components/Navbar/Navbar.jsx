/* ============================================================
   COMPONENT — Navbar
   Sticky glass navbar with scroll-spy, mobile menu, smooth scroll
   ============================================================ */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { useScrollSpy }  from '../../hooks/useScrollSpy';
import { useScrolled }   from '../../hooks/useScrolled';
import { navLinks }      from '../../data/social';
import { personal }      from '../../data/personal';
import './Navbar.css';

const sectionIds = navLinks.map((l) => l.href.replace('#', ''));

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled  = useScrolled(20);
  const activeId  = useScrollSpy(sectionIds, 80);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__inner container">
        {/* Logo */}
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          aria-label="Home"
        >
          <span className="navbar__logo-text">
            <span className="navbar__logo-accent">S</span>M
          </span>
          <span className="navbar__logo-dot" />
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {navLinks.map((link) => {
            const id       = link.href.replace('#', '');
            const isActive = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    className="navbar__link-indicator"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Resume */}
        <a
          href={personal.resumeUrl}
          className="navbar__resume-btn"
          target="_blank"
          rel="noopener noreferrer"
          download
          aria-label="Download resume"
        >
          <FiDownload size={14} />
          <span>Resume</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{    opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`navbar__mobile-link ${activeId === link.href.replace('#','') ? 'navbar__mobile-link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href={personal.resumeUrl}
              className="navbar__mobile-resume"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload size={14} /> Download Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
