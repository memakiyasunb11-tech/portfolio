import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant, viewportConfig } from '../../utils/motion';
import { cn } from '../../utils/cn';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  accent?: string;
  align?: 'center' | 'left';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, accent, align = 'center' }) => {
  const renderTitle = () => {
    if (!accent) return title;
    const parts = title.split(accent);
    return (
      <>
        {parts[0]}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{accent}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      className={cn(
        "flex flex-col gap-3 mb-12",
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      )}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig as any}
    >
      <div className="flex items-center gap-2 text-primary font-medium tracking-wider uppercase text-sm">
        <span className="w-2 h-2 rounded-full bg-primary" />
        Portfolio
      </div>
      
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
        {renderTitle()}
      </h2>
      
      {subtitle && (
        <p className="text-secondary-text max-w-2xl text-lg">
          {subtitle}
        </p>
      )}
      
      <div className="h-1 w-20 bg-white/10 rounded-full mt-2 overflow-hidden relative">
        <motion.div 
          className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-primary to-accent rounded-full"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </motion.div>
  );
};

export default SectionTitle;
