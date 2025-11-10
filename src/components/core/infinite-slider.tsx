'use client';

import React, { useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface InfiniteSliderProps {
  children: ReactNode;
  gap?: number;
  speed?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
}

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 50,
  direction = 'horizontal',
  reverse = false,
  className = '',
}: InfiniteSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const childrenArray = React.Children.toArray(children);
  // Triplicar para garantir loop suave com qualquer número de elementos
  const duplicatedChildren = [...childrenArray, ...childrenArray, ...childrenArray];

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        ref={sliderRef}
        className={`flex ${direction === 'horizontal' ? 'flex-row' : 'flex-col'}`}
        style={{ gap: `${gap}px` }}
        animate={{
          x: direction === 'horizontal' ? (reverse ? [0, '33.333%'] : ['0%', '-33.333%']) : 0,
          y: direction === 'vertical' ? (reverse ? [0, '33.333%'] : ['0%', '-33.333%']) : 0,
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedChildren.map((child, index) => (
          <div key={index} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
