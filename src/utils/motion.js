/* ============================================================
   UTILS — Framer Motion Variants
   Reusable animation variants for Framer Motion
   ============================================================ */

/* ── Fade Up (sections, cards) ───────────────────────────── */
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/* ── Fade In (simple opacity) ────────────────────────────── */
export const fadeInVariant = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5 } },
};

/* ── Slide from Left ─────────────────────────────────────── */
export const slideLeftVariant = {
  hidden: { opacity: 0, x: -60 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/* ── Slide from Right ────────────────────────────────────── */
export const slideRightVariant = {
  hidden: { opacity: 0, x: 60 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/* ── Scale In ────────────────────────────────────────────── */
export const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
};

/* ── Stagger Container ───────────────────────────────────── */
export const staggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren:   delay,
    },
  },
});

/* ── Card Hover ──────────────────────────────────────────── */
export const cardHover = {
  rest:  { scale: 1,    y: 0,   transition: { duration: 0.3, ease: 'easeOut' } },
  hover: { scale: 1.02, y: -6,  transition: { duration: 0.3, ease: 'easeOut' } },
};

/* ── Viewport config (used with whileInView) ─────────────── */
export const viewportConfig = { once: true, margin: '-80px' };
