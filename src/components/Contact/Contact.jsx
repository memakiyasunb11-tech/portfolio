/* ============================================================
   COMPONENT — Contact
   Contact form + info cards + social links
   ============================================================ */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail, FiPhone, FiMapPin, FiSend,
  FiGithub, FiLinkedin,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { personal }   from '../../data/personal';
import SectionTitle   from '../SectionTitle/SectionTitle';
import Button         from '../Button/Button';
import { slideLeftVariant, slideRightVariant, viewportConfig } from '../../utils/motion';
import './Contact.css';

const contactInfo = [
  { icon: <FiMail   size={20} />, label: 'Email',    value: personal.email,    href: `mailto:${personal.email}`,    color: '#22d3ee' },
  { icon: <FiPhone  size={20} />, label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone}`,       color: '#34d399' },
  { icon: <FiMapPin size={20} />, label: 'Location', value: personal.location, href: null,                         color: '#a78bfa' },
];

const socialLinks = [
  { icon: <FiGithub   size={22} />, label: 'GitHub',   href: personal.github,              color: '#6366f1' },
  { icon: <FiLinkedin size={22} />, label: 'LinkedIn', href: personal.linkedin,            color: '#0077b5' },
  { icon: <FiMail     size={22} />, label: 'Email',    href: `mailto:${personal.email}`,  color: '#22d3ee' },
  { icon: <FaWhatsapp size={22} />, label: 'WhatsApp', href: personal.whatsapp,            color: '#25d366' },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

function Contact() {
  const [form,    setForm]    = useState(INITIAL_FORM);
  const [status,  setStatus]  = useState('idle'); // idle | sending | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    /* Simulate API call — replace with your preferred email service */
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    setForm(INITIAL_FORM);
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          title="Get In Touch"
          accent="Touch"
          subtitle="Open to full-time roles, freelance work, and interesting collaborations."
        />

        <div className="contact-grid">
          {/* ── Left: Info ─────────────────────────────────── */}
          <motion.div
            className="contact-info"
            variants={slideLeftVariant}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            <p className="contact-info__bio">
              I'm currently open to roles as a <strong>.NET / Backend Developer</strong>{' '}
              and enjoy working with teams that value clean code, learning, and
              collaboration. Feel free to reach out about full-time roles, freelance
              work, or interesting side projects.
            </p>

            {/* Contact cards */}
            <div className="contact-cards">
              {contactInfo.map(({ icon, label, value, href, color }) => (
                <motion.div
                  key={label}
                  className="contact-card glass"
                  whileHover={{ y: -3, scale: 1.02 }}
                  style={{ '--contact-color': color }}
                >
                  <span className="contact-card__icon" style={{ color }}>{icon}</span>
                  <div>
                    <p className="contact-card__label">{label}</p>
                    {href
                      ? <a href={href} className="contact-card__value">{value}</a>
                      : <p className="contact-card__value">{value}</p>
                    }
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="contact-socials">
              <p className="contact-socials__label">Connect with me</p>
              <div className="contact-socials__row">
                {socialLinks.map(({ icon, label, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="contact-social-btn"
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ '--social-color': color }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ────────────────────────────────── */}
          <motion.div
            className="contact-form-wrap"
            variants={slideRightVariant}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            <form
              className="contact-form glass"
              onSubmit={handleSubmit}
              noValidate
            >
              <h3 className="contact-form__title">Send a Message</h3>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="cf-name">Your Name</label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Sunil Memakiya"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cf-email">Email Address</label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="cf-subject">Subject</label>
                <input
                  id="cf-subject"
                  name="subject"
                  type="text"
                  className="form-input"
                  placeholder="Job opportunity / Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Tell me about the opportunity..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === 'success' && (
                <div className="form-success">
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={<FiSend />}
                disabled={status === 'sending'}
                style={{ width: '100%' }}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
