/* ============================================================
   COMPONENT — Experience
   Animated vertical timeline with company cards
   ============================================================ */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { experiences }   from '../../data/experience';
import SectionTitle      from '../SectionTitle/SectionTitle';
import { staggerContainer, fadeUpVariant, slideLeftVariant, viewportConfig } from '../../utils/motion';
import './Experience.css';

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.article
      className={`exp-card glass shimmer-border ${exp.current ? 'exp-card--current' : ''}`}
      variants={fadeUpVariant}
      style={{ '--card-color': exp.color }}
    >
      {/* Timeline dot */}
      <div className="exp-card__dot">
        <span className="exp-card__dot-inner" />
      </div>

      {/* Card Header */}
      <div className="exp-card__header">
        <div className="exp-card__info">
          <div className="exp-card__role-wrap">
            <h3 className="exp-card__role">{exp.role}</h3>
            {exp.current && (
              <span className="exp-card__badge">Current</span>
            )}
          </div>
          <p className="exp-card__company">
            <FiBriefcase size={14} />
            {exp.company}
            <span className="exp-card__type">{exp.type}</span>
          </p>
          <div className="exp-card__meta">
            <span><FiMapPin size={12} /> {exp.location}</span>
            <span><FiCalendar size={12} /> {exp.period}</span>
            <span className="exp-card__duration">{exp.duration}</span>
          </div>
        </div>

        <button
          className="exp-card__toggle"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-label={expanded ? 'Collapse details' : 'Expand details'}
        >
          {expanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>

      {/* Tech Tags */}
      <div className="exp-card__tech">
        {exp.technologies.map((t) => (
          <span key={t} className="exp-tag">{t}</span>
        ))}
      </div>

      {/* Expandable Details */}
      <motion.div
        className="exp-card__details"
        initial={false}
        animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
      >
        <div className="exp-card__details-inner">
          <h4 className="exp-card__section-label">Responsibilities</h4>
          <ul className="exp-card__list">
            {exp.highlights.map((h) => (
              <li key={h} className="exp-card__list-item">
                <span className="exp-card__list-dot" />
                {h}
              </li>
            ))}
          </ul>

          {exp.achievements?.length > 0 && (
            <>
              <h4 className="exp-card__section-label exp-card__section-label--achievements">
                🏆 Key Achievements
              </h4>
              <ul className="exp-card__list">
                {exp.achievements.map((a) => (
                  <li key={a} className="exp-card__list-item exp-card__list-item--achievement">
                    <span className="exp-card__list-dot exp-card__list-dot--achievement" />
                    {a}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </motion.div>
    </motion.article>
  );
}

function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <SectionTitle
          title="Work Experience"
          accent="Experience"
          subtitle="My professional journey building .NET applications and APIs."
        />

        <motion.div
          className="exp-timeline"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          {/* Vertical line */}
          <div className="exp-timeline__line" aria-hidden="true" />

          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
