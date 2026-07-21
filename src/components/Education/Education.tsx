import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin, GraduationCap, Medal } from 'lucide-react';
import { education, certifications } from '../../data/education';
import SectionTitle from '../SectionTitle/SectionTitle';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education & Certifications"
          accent="Education"
          subtitle="My academic background and continuous learning journey."
        />

        {/* Education Timeline */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 border border-white/5 hover:border-white/20 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] relative overflow-hidden">
                  
                  {/* Accent Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent opacity-70 group-hover:opacity-100 transition-opacity" />

                  {/* Icon Area */}
                  <div className="hidden md:flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 shrink-0 self-start group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                    <GraduationCap size={40} className="text-secondary-text group-hover:text-primary transition-colors" />
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors flex items-center gap-3">
                          <span className="md:hidden p-2 rounded-lg bg-primary/10 text-primary">
                            <GraduationCap size={20} />
                          </span>
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-accent font-medium mt-1">{edu.field}</p>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-lg border border-success/20 shrink-0 w-fit">
                        <span className="text-sm font-semibold">Grade:</span>
                        <span className="text-lg font-bold">{edu.cgpa}</span>
                      </div>
                    </div>

                    <div className="mb-6 space-y-1">
                      <p className="text-lg text-white/90 font-medium">{edu.institution}</p>
                      {edu.university && (
                        <p className="text-secondary-text">{edu.university}</p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-secondary-text/80 mb-6">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5"><Calendar size={14} className="text-primary" /> {edu.period}</span>
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5"><MapPin size={14} className="text-accent" /> {edu.location}</span>
                    </div>

                    {edu.highlights && (
                      <div className="pt-4 border-t border-white/10">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {edu.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-secondary-text">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span className="leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-24">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Award size={28} />
            </div>
            <h3 className="text-3xl font-heading font-bold text-white text-center">Certifications & Courses</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all flex flex-col items-center text-center gap-4 group hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:scale-110 transition-all">
                  {cert.icon}
                </div>
                
                <div className="flex-grow flex flex-col justify-center">
                  <h4 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-accent transition-colors">{cert.name}</h4>
                  <p className="text-secondary-text text-sm font-medium">{cert.issuer}</p>
                </div>
                
                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-secondary-text group-hover:text-white transition-colors mt-auto">
                  {cert.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
