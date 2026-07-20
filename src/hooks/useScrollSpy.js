/* ============================================================
   HOOK — useScrollSpy
   Tracks which section is currently in view for nav highlighting
   ============================================================ */

import { useState, useEffect } from 'react';

/**
 * @param {string[]} sectionIds — Array of section element IDs
 * @param {number}   offset     — Pixel offset from top (navbar height)
 * @returns {string} activeId   — Currently active section ID
 */
export function useScrollSpy(sectionIds = [], offset = 80) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
