/* ============================================================
   COMPONENT — Education
   Timeline cards for degree + certifications
   ============================================================ */

import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';
import { education, certifications } from '../../data/education';
import SectionTitle from '../SectionTitle/SectionTitle';
import { staggerContainer, fadeUpVariant, viewportConfig } from '../../utils/motion';
import './Education.css';

function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <SectionTitle
          title="Education"
          accent="Education"
          subtitle="My academic background and professional certifications."
        />

        {/* Degree cards */}
        <motion.div
          className="edu-grid"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          {education.map((edu) => (
            <motion.article
              key={edu.id}
              className="edu-card glass shimmer-border"
              variants={fadeUpVariant}
              whileHover={{ y: -5 }}
              style={{ '--edu-color': edu.color }}
            >
              <div className="edu-card__icon">{edu.icon}</div>
              <div className="edu-card__body">
                <div className="edu-card__header">
                  <div>
                    <h3 className="edu-card__degree">{edu.degree}</h3>
                    <p className="edu-card__field">{edu.field}</p>
                  </div>
                  <span className="edu-card__cgpa">{edu.cgpa}</span>
                </div>
                <p className="edu-card__institution">{edu.institution}</p>
                <p className="edu-card__uni">{edu.university}</p>

                <div className="edu-card__meta">
                  <span><FiCalendar size={13} /> {edu.period}</span>
                  <span><FiMapPin   size={13} /> {edu.location}</span>
                </div>

                <span className="edu-card__grade">{edu.grade}</span>

                {edu.highlights && (
                  <ul className="edu-card__highlights">
                    {edu.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Certifications */}
        <div className="cert-section">
          <h3 className="cert-section__title">
            <FiAward size={18} /> Certifications & Courses
          </h3>
          <motion.div
            className="cert-grid"
            variants={staggerContainer(0.10)}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                className="cert-card glass"
                variants={fadeUpVariant}
                whileHover={{ y: -4, scale: 1.02 }}
                style={{ '--cert-color': cert.color }}
              >
                <span className="cert-card__icon">{cert.icon}</span>
                <div className="cert-card__body">
                  <p className="cert-card__name">{cert.name}</p>
                  <p className="cert-card__issuer">{cert.issuer}</p>
                </div>
                <span className="cert-card__year">{cert.year}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Education;
