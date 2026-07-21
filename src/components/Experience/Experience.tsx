import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { experiences, type Experience as ExperienceType } from '../../data/experience';
import SectionTitle from '../SectionTitle/SectionTitle';
import { cn } from '../../utils/cn';

interface ExperienceCardProps {
  exp: ExperienceType;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      className="relative pl-8 md:pl-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline Dot (Desktop: Center, Mobile: Left) */}
      <div className="md:hidden absolute left-0 top-8 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(99,102,241,0.8)] border-4 border-background z-10" />
      
      <div className={cn(
        "md:w-1/2 flex flex-col relative",
        index % 2 === 0 ? "md:items-end md:pr-12 lg:pr-16 md:ml-0" : "md:items-start md:pl-12 lg:pl-16 md:ml-auto"
      )}>
        
        {/* Desktop Timeline Dot & Line Connector */}
        <div className={cn(
          "hidden md:block absolute top-8 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(99,102,241,0.8)] border-4 border-background z-10",
          index % 2 === 0 ? "-right-2 translate-x-1/2" : "-left-2 -translate-x-1/2"
        )} />
        <div className={cn(
          "hidden md:block absolute top-10 w-8 h-[2px] bg-white/10",
          index % 2 === 0 ? "right-0" : "left-0"
        )} />

        <div 
          className={cn(
            "w-full glass-panel rounded-2xl p-6 md:p-8 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] relative overflow-hidden group",
            exp.current ? "border-primary/50 shadow-[0_0_15px_rgba(99,102,241,0.1)]" : "border-white/5"
          )}
        >
          {/* Accent border top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white">{exp.role}</h3>
                {exp.current && (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
                    Current
                  </span>
                )}
              </div>
              <p className="flex items-center gap-2 text-lg text-secondary-text font-medium mb-3">
                <Briefcase size={18} className="text-primary" />
                {exp.company}
                <span className="text-sm px-2 py-0.5 rounded-md bg-white/10 text-white/80">{exp.type}</span>
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-text/80">
                <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {exp.period}</span>
                <span className="text-accent bg-accent/10 px-2 py-0.5 rounded text-xs font-semibold">{exp.duration}</span>
              </div>
            </div>
            
            <button
              onClick={() => setExpanded(!expanded)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-secondary-text hover:text-white transition-colors flex-shrink-0"
              aria-label={expanded ? 'Collapse' : 'Expand'}
            >
              {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {exp.technologies.slice(0, 5).map(tech => (
              <span key={tech} className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/70 border border-white/10">
                {tech}
              </span>
            ))}
            {exp.technologies.length > 5 && (
              <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/50">+{exp.technologies.length - 5}</span>
            )}
          </div>

          {/* Expandable Details */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-white/10 mt-4 space-y-6">
                  
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-secondary-text text-sm md:text-base leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-accent tracking-wide uppercase mb-3 flex items-center gap-2">
                        <span className="text-lg">🏆</span> Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-secondary-text text-sm md:text-base leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* All tech */}
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-3">Tech Stack Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="w-full">
        <SectionTitle
          title="Work Experience"
          accent="Experience"
          subtitle="My professional journey building .NET applications and APIs."
        />

        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Central Timeline Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full" />
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-[7px] top-8 bottom-0 w-[2px] bg-white/10 rounded-full" />

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
