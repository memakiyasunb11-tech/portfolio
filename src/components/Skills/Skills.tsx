import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories, type SkillItem } from '../../data/skills';
import SectionTitle from '../SectionTitle/SectionTitle';
import { cn } from '../../utils/cn';

// Import icons
import { FaReact, FaAngular, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaDocker } from 'react-icons/fa';
import { SiDotnet, SiJsonwebtokens, SiPostgresql, SiMongodb, SiTypescript, SiJavascript, SiTailwindcss, SiPostman } from 'react-icons/si';
import { VscDatabase } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import { Code2, Database, LayoutTemplate, Settings, Cloud, Terminal } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'ASP.NET Core': SiDotnet,
  'C#': Code2,
  'Web API': TbApi,
  'Entity Framework Core': VscDatabase,
  'ADO.NET': VscDatabase,
  'LINQ': Code2,
  'MVC Pattern': Code2,
  'CQRS': Code2,
  'SQL Server': Database,
  'Stored Procedures': Database,
  'Query Optimization': Database,
  'Indexing & Execution Plans': Database,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'React': FaReact,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Angular': FaAngular,
  'HTML5': FaHtml5,
  'CSS3 / SCSS': FaCss3Alt,
  'Bootstrap': FaBootstrap,
  'AG Grid': LayoutTemplate,
  'Tailwind CSS': SiTailwindcss,
  'Git & GitHub': FaGithub,
  'Visual Studio': Terminal,
  'VS Code': Code2,
  'Postman': SiPostman,
  'Azure': Cloud,
  'Docker': FaDocker,
  'Agile / Scrum': Settings,
  'JWT': SiJsonwebtokens,
};

const categoryIconMap: Record<string, React.ReactNode> = {
  'backend': <Settings size={24} />,
  'database': <Database size={24} />,
  'frontend': <LayoutTemplate size={24} />,
  'tools': <Code2 size={24} />,
};

const SkillBar: React.FC<{ skill: SkillItem; index: number }> = ({ skill, index }) => {
  const IconComponent = iconMap[skill.name] || Code2;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="flex items-center gap-2 text-white font-medium">
          <span className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
            <IconComponent className="w-4 h-4 text-secondary-text group-hover:text-primary transition-colors" />
          </span>
          {skill.name}
        </span>
        <span className="text-sm text-secondary-text font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 shadow-inner">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" style={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }} />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((c) => c.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Technical Skills"
          accent="Skills"
          subtitle="Technologies and tools I use to build robust backend systems and full-stack applications."
        />

        <div className="flex flex-col lg:flex-row gap-8 mt-16">
          
          {/* Category Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {skillCategories.map((cat, index) => {
              const isActive = activeTab === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveTab(cat.id)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left border relative overflow-hidden group",
                    isActive 
                      ? "bg-primary/10 border-primary/40 shadow-[0_0_20px_rgba(99,102,241,0.15)]" 
                      : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20"
                  )}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="active-cat-bg"
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent -z-10" 
                    />
                  )}
                  
                  <div className={cn(
                    "p-3 rounded-lg transition-colors",
                    isActive ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-white/5 text-secondary-text group-hover:text-white group-hover:bg-white/10"
                  )}>
                    {categoryIconMap[cat.id]}
                  </div>
                  
                  <div>
                    <h3 className={cn("font-heading font-semibold text-lg transition-colors", isActive ? "text-white" : "text-secondary-text group-hover:text-white")}>
                      {cat.label}
                    </h3>
                    <p className="text-sm text-secondary-text/80">{cat.skills.length} Technologies</p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Skills Panel */}
          <div className="lg:w-2/3 glass-panel rounded-2xl p-6 md:p-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-12"
              >
                {activeCategory.skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* All skills badge cloud */}
        <div className="mt-20">
          <h4 className="text-center text-sm font-semibold tracking-widest text-secondary-text uppercase mb-8">All Technologies</h4>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {skillCategories.flatMap(c => c.skills).map((skill, i) => {
              const IconComponent = iconMap[skill.name] || Code2;
              return (
                <motion.div
                  key={`${skill.name}-${i}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 15) * 0.05 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all cursor-default group"
                >
                  <IconComponent className="text-secondary-text group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-white/90 group-hover:text-white">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
