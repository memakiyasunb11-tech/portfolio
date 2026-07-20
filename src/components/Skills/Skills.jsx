/* ============================================================
   COMPONENT — Skills
   Categorized skills with animated progress bars and badges
   ============================================================ */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import SectionTitle from '../SectionTitle/SectionTitle';
import { staggerContainer, fadeUpVariant, viewportConfig } from '../../utils/motion';
import './Skills.css';

function SkillBar({ name, level, icon, index }) {
  return (
    <motion.div
      className="skill-item"
      variants={fadeUpVariant}
      custom={index}
    >
      <div className="skill-item__header">
        <span className="skill-item__name">
          {icon && <span className="skill-item__icon">{icon}</span>}
          {name}
        </span>
        <span className="skill-item__level">{level}%</span>
      </div>
      <div className="skill-item__bar-bg">
        <motion.div
          className="skill-item__bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </motion.div>
  );
}

function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find((c) => c.id === activeTab);

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionTitle
          title="Technical Skills"
          accent="Skills"
          subtitle="Technologies and tools I use to build backend systems and full-stack applications."
        />

        {/* Category Tabs */}
        <motion.div
          className="skills-tabs"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.id}
              className={`skills-tab ${activeTab === cat.id ? 'skills-tab--active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
              style={{ '--cat-color': cat.color }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="skills-tab__icon">{cat.icon}</span>
              <span>{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Panel */}
        <motion.div
          key={activeTab}
          className="skills-panel glass"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="skills-panel__header">
            <span className="skills-panel__icon">{activeCategory.icon}</span>
            <div>
              <h3 className="skills-panel__title">{activeCategory.label}</h3>
              <p className="skills-panel__count">{activeCategory.skills.length} technologies</p>
            </div>
          </div>

          <motion.div
            className="skills-list"
            variants={staggerContainer(0.07)}
            initial="hidden"
            animate="show"
          >
            {activeCategory.skills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} index={i} />
            ))}
          </motion.div>
        </motion.div>

        {/* All skills badge cloud */}
        <motion.div
          className="skills-cloud"
          variants={staggerContainer(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <p className="skills-cloud__label">All Technologies</p>
          <div className="skills-cloud__wrap">
            {skillCategories.flatMap((c) => c.skills).map((skill, i) => (
              <motion.span
                key={skill.name + i}
                className="skills-badge"
                variants={fadeUpVariant}
                whileHover={{ scale: 1.08, y: -3 }}
              >
                {skill.icon} {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
