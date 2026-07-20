/* ============================================================
   COMPONENT — Hero
   Full-screen hero with typing animation, profile image,
   floating tech icons, stats, and social links
   ============================================================ */

import React from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useTypewriter }   from '../../hooks/useTypewriter';
import { personal }        from '../../data/personal';
import { staggerContainer, fadeUpVariant, slideRightVariant } from '../../utils/motion';
import Button from '../Button/Button';
import './Hero.css';

/* Floating tech icons data */
const TECH_ICONS = [
  { label: 'C#',      style: { top: '12%', left: '8%'  }, delay: 0.0 },
  { label: '.NET',    style: { top: '25%', left: '4%'  }, delay: 0.2 },
  { label: 'React',   style: { top: '65%', left: '5%'  }, delay: 0.4 },
  { label: 'SQL',     style: { top: '80%', left: '12%' }, delay: 0.6 },
  { label: 'API',     style: { top: '15%', right: '8%' }, delay: 0.1 },
  { label: 'EF Core', style: { top: '35%', right: '4%' }, delay: 0.3 },
  { label: 'Angular', style: { top: '60%', right: '5%' }, delay: 0.5 },
  { label: 'Git',     style: { top: '78%', right: '10%'}, delay: 0.7 },
];

const socialButtons = [
  { icon: <FiGithub   size={18} />, label: 'GitHub',   href: personal.github,   color: 'github'   },
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', href: personal.linkedin, color: 'linkedin' },
  { icon: <FiMail     size={18} />, label: 'Email',    href: `mailto:${personal.email}`, color: 'email' },
  { icon: <FaWhatsapp size={18} />, label: 'WhatsApp', href: personal.whatsapp, color: 'whatsapp' },
];

function Hero() {
  const { displayText } = useTypewriter(personal.roles, 90, 50, 1800);

  return (
    <section id="home" className="hero section">
      {/* Floating tech labels */}
      {TECH_ICONS.map(({ label, style, delay }) => (
        <motion.div
          key={label}
          className="hero__float-icon"
          style={style}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1, duration: 0.5 }}
        >
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3 + delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            {label}
          </motion.span>
        </motion.div>
      ))}

      <div className="container">
        <motion.div
          className="hero__grid"
          variants={staggerContainer(0.12, 0.3)}
          initial="hidden"
          animate="show"
        >
          {/* ── Left Content ───────────────────────────────── */}
          <div className="hero__content">
            {/* Availability badge */}
            <motion.div className="hero__badge" variants={fadeUpVariant}>
              <span className="hero__badge-dot" />
              {personal.availability}
            </motion.div>

            {/* Greeting */}
            <motion.p className="hero__greeting" variants={fadeUpVariant}>
              Hello, I'm 👋
            </motion.p>

            {/* Name */}
            <motion.h1 className="hero__name" variants={fadeUpVariant}>
              {personal.firstName}{' '}
              <span className="hero__name-accent">{personal.lastName}</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div className="hero__role" variants={fadeUpVariant}>
              <span className="hero__role-text">{displayText}</span>
              <span className="hero__cursor" aria-hidden="true" />
            </motion.div>

            {/* Bio */}
            <motion.p className="hero__bio" variants={fadeUpVariant}>
              {personal.tagline}. Passionate about clean code, database
              optimization, and building scalable REST APIs with ASP.NET Core.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="hero__actions" variants={fadeUpVariant}>
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                iconRight={<FiArrowRight />}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href={personal.resumeUrl}
                icon={<FiDownload />}
                external
                download
              >
                Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div className="hero__socials" variants={fadeUpVariant}>
              {socialButtons.map(({ icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  className={`hero__social hero__social--${color}`}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                  <span>{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Profile + Stats ─────────────────────── */}
          <motion.div className="hero__visual" variants={slideRightVariant}>
            {/* Profile image */}
            <div className="hero__profile-wrap">
              <motion.div
                className="hero__profile-ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.img
                src={process.env.PUBLIC_URL + '/profile.jpg'}
                alt="Sunil Memakiya"
                className="hero__profile-img"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="hero__profile-glow" />
            </div>

            {/* Stats card */}
            <motion.div
              className="hero__stats-card glass"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {personal.stats.map(({ label, value }) => (
                <div key={label} className="hero__stat">
                  <span className="hero__stat-value">{value}</span>
                  <span className="hero__stat-label">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-hint"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

export default Hero;
