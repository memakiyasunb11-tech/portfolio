/* ============================================================
   COMPONENT — SectionTitle
   Reusable section header with animated underline
   ============================================================ */

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant, viewportConfig } from '../../utils/motion';
import './SectionTitle.css';

/**
 * @param {string}  title      — Main heading text
 * @param {string}  subtitle   — Sub-description below title
 * @param {string}  accent     — Highlighted word in title (wraps in <span>)
 * @param {string}  align      — 'center' | 'left'
 */
function SectionTitle({ title, subtitle, accent, align = 'center' }) {
  /* Highlight accent word in title */
  const renderTitle = () => {
    if (!accent) return title;
    const parts = title.split(accent);
    return (
      <>
        {parts[0]}
        <span className="section-title__accent">{accent}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      className={`section-title section-title--${align}`}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
    >
      <p className="section-title__eyebrow">
        <span className="section-title__dot" /> Portfolio
      </p>
      <h2 className="section-title__heading">{renderTitle()}</h2>
      {subtitle && (
        <p className="section-title__sub">{subtitle}</p>
      )}
      <div className="section-title__line">
        <span className="section-title__line-inner" />
      </div>
    </motion.div>
  );
}

export default SectionTitle;
