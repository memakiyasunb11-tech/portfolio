/* ============================================================
   COMPONENT — Button
   Reusable button with variants: primary, secondary, ghost, outline
   ============================================================ */

import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

/**
 * @param {'primary'|'secondary'|'ghost'|'outline'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {React.ReactNode} icon   — Optional left icon
 * @param {React.ReactNode} iconRight — Optional right icon
 * @param {string}  href   — If provided, renders as <a>
 * @param {boolean} external — Opens in new tab
 */
function Button({
  children,
  variant   = 'primary',
  size      = 'md',
  icon,
  iconRight,
  href,
  external  = false,
  className = '',
  disabled  = false,
  onClick,
  type      = 'button',
  ...props
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    disabled && 'btn--disabled',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {icon      && <span className="btn__icon btn__icon--left">{icon}</span>}
      <span className="btn__label">{children}</span>
      {iconRight && <span className="btn__icon btn__icon--right">{iconRight}</span>}
    </>
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03, y: -2 },
    whileTap:   disabled ? {} : { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
}

export default Button;
