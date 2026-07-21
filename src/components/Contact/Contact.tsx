import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { personal } from '../../data/personal';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import { cn } from '../../utils/cn';

const contactInfo = [
  { icon: <Mail size={20} />, label: 'Email', value: personal.email, href: `mailto:${personal.email}`, color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/20' },
  { icon: <Phone size={20} />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}`, color: 'text-success', bg: 'bg-success/10', border: 'border-success/20' },
  { icon: <MapPin size={20} />, label: 'Location', value: personal.location, href: null, color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
];

const socialLinks = [
  { icon: <Github size={22} />, label: 'GitHub', href: personal.github, hoverClass: 'hover:text-white hover:bg-[#333]' },
  { icon: <Linkedin size={22} />, label: 'LinkedIn', href: personal.linkedin, hoverClass: 'hover:text-white hover:bg-[#0077b5]' },
  { icon: <Mail size={22} />, label: 'Email', href: `mailto:${personal.email}`, hoverClass: 'hover:text-white hover:bg-accent' },
  { icon: <FaWhatsapp size={22} />, label: 'WhatsApp', href: personal.whatsapp, hoverClass: 'hover:text-white hover:bg-[#25D366]' },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

const Contact: React.FC = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    setForm(INITIAL_FORM);
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="w-full">
        <SectionTitle
          title="Get In Touch"
          accent="Touch"
          subtitle="Open to full-time roles, freelance work, and interesting collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-16">
          
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <p className="text-lg text-secondary-text leading-relaxed">
              I'm currently open to roles as a <strong className="text-white font-medium">.NET / Backend Developer</strong>{' '}
              and enjoy working with teams that value clean code, learning, and
              collaboration. Feel free to reach out about full-time roles, freelance
              work, or interesting side projects.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon, label, value, href, color, bg, border }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass-panel border border-white/5 hover:border-white/20 transition-all"
                >
                  <div className={cn("p-3 rounded-lg border", bg, color, border)}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary-text">{label}</p>
                    {href ? (
                      <a href={href} className="text-white font-medium hover:text-primary transition-colors text-lg">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white font-medium text-lg">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium text-secondary-text uppercase tracking-widest mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map(({ icon, label, href, hoverClass }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-secondary-text transition-all duration-300",
                      hoverClass
                    )}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden"
              noValidate
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Send a Message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary-text" htmlFor="cf-name">Your Name</label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary-text" htmlFor="cf-email">Email Address</label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium text-secondary-text" htmlFor="cf-subject">Subject</label>
                <input
                  id="cf-subject"
                  name="subject"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Job opportunity / Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-sm font-medium text-secondary-text" htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell me about the opportunity..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg bg-success/10 border border-success/30 text-success text-sm flex items-center gap-2"
                >
                  ✅ Message sent! I'll get back to you soon.
                </motion.div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={<Send size={18} />}
                disabled={status === 'sending'}
                className="w-full"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
