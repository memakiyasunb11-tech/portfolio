/* ============================================================
   HOOK — useScrolled
   Tracks if user has scrolled past a threshold (for navbar)
   ============================================================ */

import { useState, useEffect } from 'react';

/**
 * @param {number} threshold — px scrolled before returning true
 */
export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
