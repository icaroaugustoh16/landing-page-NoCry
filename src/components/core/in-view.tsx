'use client';

import React, { useRef, ReactNode } from 'react';
import { motion, Variant, useInView as useFramerInView } from 'framer-motion';

interface InViewProps {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: any;
  viewportOptions?: {
    once?: boolean;
    amount?: number | 'some' | 'all';
  };
  className?: string;
}

const defaultVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' } as Variant,
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' } as Variant,
};

export function InView({
  children,
  variants = defaultVariants,
  transition = {
    duration: 0.5,
    ease: [0.21, 0.47, 0.32, 0.98],
  },
  viewportOptions = {
    once: true,
    amount: 0.3,
  },
  className = '',
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, viewportOptions);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants as any}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
