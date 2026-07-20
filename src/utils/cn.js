/* ============================================================
   UTILS — cn (class name helper)
   ============================================================ */

/**
 * Merges class names conditionally (like clsx / classnames)
 * Usage: cn('base', isActive && 'active', { 'hidden': !show })
 */
export function cn(...args) {
  return args
    .flat()
    .filter(Boolean)
    .map((arg) => {
      if (typeof arg === 'string') return arg;
      if (typeof arg === 'object') {
        return Object.entries(arg)
          .filter(([, v]) => Boolean(v))
          .map(([k]) => k)
          .join(' ');
      }
      return '';
    })
    .join(' ')
    .trim();
}
