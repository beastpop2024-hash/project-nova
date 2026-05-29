'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  onClick,
  hover = true,
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      className={clsx(
        'rounded-2xl bg-white/10 backdrop-blur-md border border-white/20',
        'shadow-xl transition-all duration-300',
        hover && 'hover:bg-white/15 hover:border-white/30 cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
