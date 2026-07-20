/* ============================================================
   COMPONENT — Projects
   Filterable project cards with image gallery, shimmer borders,
   hover tilt effect, GitHub & demo links
   ============================================================ */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiImage } from 'react-icons/fi';
import { projects, projectFilters } from '../../data/projects';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button       from '../Button/Button';
import { staggerContainer, fadeUpVariant, scaleInVariant, viewportConfig } from '../../utils/motion';
import './Projects.css';

/* ── Project Card ──────────────────────────────────────────── */
function ProjectCard({ project }) {
  const [imgIdx, setImgIdx] = useState(0);
  const gallery = project.imageGallery || (project.image ? [{ src: project.image, label: project.name }] : null);

  return (
    <motion.article
      className={`proj-card glass shimmer-border ${project.featured ? 'proj-card--featured' : ''}`}
      variants={scaleInVariant}
      layout
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      style={{ '--proj-color': project.color }}
    >
      {/* Image */}
      {gallery ? (
        <div className="proj-card__img-wrap">
          <img
            src={process.env.PUBLIC_URL + gallery[imgIdx].src}
            alt={gallery[imgIdx].label}
            className="proj-card__img"
            loading="lazy"
          />
          {gallery.length > 1 && (
            <div className="proj-card__gallery-dots">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  className={`proj-card__dot ${imgIdx === i ? 'proj-card__dot--active' : ''}`}
                  onClick={() => setImgIdx(i)}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          )}
          {project.featured && (
            <span className="proj-card__featured-badge">⭐ Featured</span>
          )}
          <div className="proj-card__img-overlay" />
        </div>
      ) : (
        <div className="proj-card__placeholder">
          <FiImage size={32} opacity={0.3} />
          <span style={{ '--proj-color': project.color }} className="proj-card__placeholder-label">
            {project.name}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="proj-card__body">
        {/* Header */}
        <div className="proj-card__header">
          <div>
            <h3 className="proj-card__name">{project.name}</h3>
            <p className="proj-card__tagline">{project.tagline}</p>
          </div>
          <span className="proj-card__year">{project.year}</span>
        </div>

        {/* Description */}
        <p className="proj-card__desc">{project.description}</p>

        {/* Features */}
        {project.features && (
          <ul className="proj-card__features">
            {project.features.slice(0, 4).map((f) => (
              <li key={f} className="proj-card__feature">
                <span className="proj-card__feature-dot" />
                {f}
              </li>
            ))}
          </ul>
        )}

        {/* Stats */}
        {project.stats && (
          <div className="proj-card__stats">
            {project.stats.map((s) => (
              <span key={s} className="proj-card__stat">{s}</span>
            ))}
          </div>
        )}

        {/* Tech */}
        <div className="proj-card__tech">
          {project.tech.map((t) => (
            <span key={t} className="proj-card__tag">{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="proj-card__actions">
          {project.github && (
            <Button
              variant="outline"
              size="sm"
              href={project.github}
              icon={<FiGithub />}
              external
            >
              Source Code
            </Button>
          )}
          {project.live && (
            <Button
              variant="secondary"
              size="sm"
              href={project.live}
              icon={<FiExternalLink />}
              external
            >
              Live Demo
            </Button>
          )}
          {!project.github && !project.live && (
            <span className="proj-card__private">🔒 Private Project</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ── Projects Section ──────────────────────────────────────── */
function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          title="My Projects"
          accent="Projects"
          subtitle="Real-world applications built with .NET, React, and modern web technologies."
        />

        {/* Filters */}
        <motion.div
          className="proj-filters"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          {projectFilters.map((f) => (
            <motion.button
              key={f}
              className={`proj-filter ${activeFilter === f ? 'proj-filter--active' : ''}`}
              onClick={() => setActiveFilter(f)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {f}
              {activeFilter === f && (
                <motion.span className="proj-filter__indicator" layoutId="filter-indicator" />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="proj-grid"
          layout
          variants={staggerContainer(0.10)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="proj-empty">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
