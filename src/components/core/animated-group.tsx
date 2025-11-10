'use client';

import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

type AnimationPreset = 'fade' | 'slide' | 'scale' | 'blur-sm' | 'blur-slide';

interface AnimatedGroupProps {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: AnimationPreset;
  as?: React.ElementType;
  asChild?: React.ElementType;
}

const presetVariants: Record<AnimationPreset, { container: Variants; item: Variants }> = {
  fade: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5 } },
    },
  },
  slide: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
  },
  scale: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    },
  },
  'blur-sm': {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
    item: {
      hidden: { opacity: 0, filter: 'blur(4px)' },
      visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5 } },
    },
  },
  'blur-slide': {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.1,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
      visible: { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)', 
        transition: { 
          duration: 0.4,
          ease: [0.21, 0.47, 0.32, 0.98],
        } 
      },
    },
  },
};

export function AnimatedGroup({
  children,
  className = '',
  variants,
  preset = 'blur-slide',
  as: Container = 'div',
  asChild: ChildComponent = 'div',
}: AnimatedGroupProps) {
  const selectedVariants = variants || presetVariants[preset];

  return (
    <motion.div
      variants={selectedVariants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={selectedVariants.item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
