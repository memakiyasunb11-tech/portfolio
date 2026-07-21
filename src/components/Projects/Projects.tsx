import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { projects, projectFilters, type Project } from '../../data/projects';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import { cn } from '../../utils/cn';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const gallery = project.imageGallery || (project.image ? [{ src: project.image, label: project.name }] : null);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all"
    >
      {/* Image Gallery */}
      <div className="relative w-full aspect-video bg-cards overflow-hidden">
        {gallery ? (
          <>
            <img
              src={gallery[imgIdx].src}
              alt={gallery[imgIdx].label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
              }}
            />
            {project.featured && (
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold shadow-lg backdrop-blur-md">
                ⭐ Featured
              </div>
            )}
            {gallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      i === imgIdx ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
                    )}
                    aria-label={`View image ${i + 1}`}
                  />
                ))}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-white/5">
            <ImageIcon size={48} className="text-white/20 mb-2" />
            <span className="text-white/40 font-medium">{project.name}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow relative">
        <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-secondary-text font-medium text-sm mt-1">{project.tagline}</p>
          </div>
          <span className="text-xs font-semibold px-2 py-1 rounded bg-white/10 text-white/70">
            {project.year}
          </span>
        </div>

        <p className="text-secondary-text/90 text-sm my-4 line-clamp-3">
          {project.description}
        </p>

        {/* Features */}
        {project.features && (
          <ul className="mb-6 space-y-1.5 flex-grow">
            {project.features.slice(0, 3).map(feature => (
              <li key={feature} className="text-xs text-secondary-text flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                <span className="truncate">{feature}</span>
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-xs text-secondary-text/50 italic pl-3">
                + {project.features.length - 3} more features
              </li>
            )}
          </ul>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 4).map(tech => (
            <span key={tech} className="text-[11px] px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[11px] px-2 py-1 rounded bg-white/5 text-white/50 border border-white/10">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
          {project.github ? (
            <Button
              variant="outline"
              size="sm"
              href={project.github}
              icon={<Github size={16} />}
              external
              className="flex-1"
            >
              Code
            </Button>
          ) : (
            <div className="flex-1 px-4 py-2 text-center text-sm text-secondary-text bg-white/5 rounded-full border border-white/10">
              🔒 Private
            </div>
          )}
          {project.live && (
            <Button
              variant="primary"
              size="sm"
              href={project.live}
              icon={<ExternalLink size={16} />}
              external
              className="flex-1"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-24 relative bg-black/20">
      <div className="w-full">
        <SectionTitle
          title="Featured Projects"
          accent="Projects"
          subtitle="Real-world applications built with .NET, React, and modern web technologies."
        />

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
          {projectFilters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === filter 
                  ? "text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]" 
                  : "text-secondary-text hover:text-white hover:bg-white/5"
              )}
            >
              {activeFilter === filter && (
                <motion.div
                  layoutId="active-filter"
                  className="absolute inset-0 bg-primary/20 border border-primary/50 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-secondary-text">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
