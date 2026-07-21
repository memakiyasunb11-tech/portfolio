import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { useTypewriter } from '../../hooks/useTypewriter';
import { personal } from '../../data/personal';
import Button from '../Button/Button';
import { FaWhatsapp, FaReact, FaAngular, FaGithub, FaDocker } from 'react-icons/fa';
import { SiCsharp, SiDotnet, SiMicrosoftsqlserver, SiVisualstudio, SiMicrosoftazure, SiJsonwebtokens } from 'react-icons/si';
import { VscDatabase } from 'react-icons/vsc';

const socialButtons = [
  { icon: <Github size={18} />, label: 'GitHub', href: personal.github, hoverClass: 'hover:text-white hover:bg-[#333]' },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: personal.linkedin, hoverClass: 'hover:text-white hover:bg-[#0077b5]' },
  { icon: <Mail size={18} />, label: 'Email', href: `mailto:${personal.email}`, hoverClass: 'hover:text-white hover:bg-accent' },
  { icon: <FaWhatsapp size={18} />, label: 'WhatsApp', href: personal.whatsapp, hoverClass: 'hover:text-white hover:bg-[#25D366]' },
];

const ORBIT_ICONS = [
  { Icon: SiCsharp, color: '#239120', label: 'C#' },
  { Icon: SiDotnet, color: '#512BD4', label: 'ASP.NET Core' },
  { Icon: FaReact, color: '#61DAFB', label: 'React' },
  { Icon: FaAngular, color: '#DD0031', label: 'Angular' },
  { Icon: FaGithub, color: '#FFFFFF', label: 'GitHub' },
  { Icon: SiMicrosoftsqlserver, color: '#CC2927', label: 'SQL Server' },
  { Icon: VscDatabase, color: '#4CAF50', label: 'Entity Framework' },
  { Icon: SiVisualstudio, color: '#5C2D91', label: 'Visual Studio' },
  { Icon: SiMicrosoftazure, color: '#0078D4', label: 'Azure' },
  { Icon: FaDocker, color: '#2496ED', label: 'Docker' },
  { Icon: SiJsonwebtokens, color: '#000000', label: 'JWT', bg: '#fff' },
];

const Hero: React.FC = () => {
  const { displayText } = useTypewriter(personal.roles, 80, 40, 2000);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 flex flex-col items-start gap-6 w-full lg:max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Availability Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            {personal.availability}
          </motion.div>

          <div className="space-y-4 w-full">
            <motion.h2 
              className="text-xl md:text-2xl font-heading text-secondary-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hello, I'm
            </motion.h2>
            
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {personal.firstName} <br/>
              <span className="text-gradient">
                {personal.lastName}
              </span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div 
              className="h-10 sm:h-12 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-white/90">
                {displayText}
                <span className="inline-block w-[3px] h-[1em] ml-1 bg-primary animate-pulse align-middle" />
              </h3>
            </motion.div>
          </div>

          <motion.p 
            className="text-base md:text-lg text-secondary-text max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {personal.bio}
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              iconRight={<ArrowRight size={18} />}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Projects
            </Button>
            <Button
              href="#contact"
              variant="outline"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div 
            className="flex items-center gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {socialButtons.map(({ icon, label, href, hoverClass }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-secondary-text transition-all duration-300 ${hoverClass} hover:-translate-y-1 hover:shadow-lg`}
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content: Rotating Orbit Profile */}
        <motion.div 
          className="flex-1 w-full flex justify-center items-center relative aspect-square max-w-[500px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Core Profile Image */}
          <div className="relative z-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-2 bg-gradient-to-br from-primary via-accent to-secondary shadow-[0_0_50px_rgba(99,102,241,0.3)] group">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-cards relative">
              {/* Fallback avatar if profile.jpg fails, since it was previously from public/ */}
              <div className="w-full h-full bg-cards flex items-center justify-center text-4xl font-bold text-white absolute inset-0 -z-10">SM</div>
              <img 
                src="/profile.jpg" 
                alt={personal.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
            
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.3)] pointer-events-none" />
          </div>

          {/* Rotating Orbits */}
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            {/* Outer Orbit */}
            <motion.div 
              className="absolute w-[100%] h-[100%] border border-white/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {ORBIT_ICONS.slice(0, 6).map((item, index) => {
                const angle = (index / 6) * 360;
                return (
                  <div 
                    key={item.label}
                    className="absolute w-12 h-12 -ml-6 -mt-6 rounded-xl glass-panel flex items-center justify-center shadow-lg transition-transform hover:scale-125 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] pointer-events-auto"
                    style={{
                      left: `calc(50% + 50% * Math.cos(${angle * (Math.PI / 180)}))`,
                      top: `calc(50% + 50% * Math.sin(${angle * (Math.PI / 180)}))`,
                      backgroundColor: item.bg || 'rgba(15, 23, 42, 0.6)'
                    }}
                    title={item.label}
                  >
                    <item.Icon size={24} color={item.color} />
                  </div>
                );
              })}
            </motion.div>

            {/* Inner Orbit */}
            <motion.div 
              className="absolute w-[70%] h-[70%] border border-white/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {ORBIT_ICONS.slice(6).map((item, index) => {
                const angle = (index / 5) * 360;
                return (
                  <div 
                    key={item.label}
                    className="absolute w-10 h-10 -ml-5 -mt-5 rounded-xl glass-panel flex items-center justify-center shadow-lg transition-transform hover:scale-125 pointer-events-auto"
                    style={{
                      left: `calc(50% + 50% * Math.cos(${angle * (Math.PI / 180)}))`,
                      top: `calc(50% + 50% * Math.sin(${angle * (Math.PI / 180)}))`,
                      backgroundColor: item.bg || 'rgba(15, 23, 42, 0.6)'
                    }}
                    title={item.label}
                  >
                    <item.Icon size={20} color={item.color} />
                  </div>
                );
              })}
            </motion.div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
