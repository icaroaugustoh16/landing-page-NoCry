'use client';

import React, { useMemo } from 'react';
import { motion, Variants } from 'framer-motion';

type AnimationPreset = 'fade' | 'slide' | 'scale' | 'blur-sm' | 'blur-slide';

interface TextEffectProps {
  children: string;
  per?: 'word' | 'char' | 'line';
  as?: keyof React.JSX.IntrinsicElements;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  preset?: AnimationPreset;
  delay?: number;
  trigger?: boolean;
  segmentWrapperClassName?: string;
}

const presetVariants: Record<AnimationPreset, { container: Variants; item: Variants }> = {
  fade: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
      },
    },
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  slide: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
      },
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
  scale: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
      },
    },
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  'blur-sm': {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
      },
    },
    item: {
      hidden: { opacity: 0, filter: 'blur(4px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
    },
  },
  'blur-slide': {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: 0.1 },
      },
    },
    item: {
      hidden: { opacity: 0, y: 10, filter: 'blur(8px)' },
      visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
    },
  },
};

export function TextEffect({
  children,
  per = 'word',
  as: Component = 'p',
  variants,
  className = '',
  preset = 'blur-slide',
  delay = 0,
  trigger = true,
  segmentWrapperClassName = '',
}: TextEffectProps) {
  const selectedVariants = variants || presetVariants[preset];

  const segments = useMemo(() => {
    if (per === 'char') {
      return children.split('');
    }
    if (per === 'word') {
      return children.split(' ');
    }
    return [children];
  }, [children, per]);

  return (
    <motion.div
      variants={selectedVariants.container}
      initial="hidden"
      animate={trigger ? 'visible' : 'hidden'}
      className={className}
      style={{ display: 'inline-block' }}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={`${segment}-${index}`}
          variants={selectedVariants.item}
          className={segmentWrapperClassName}
          style={{ display: 'inline-block', whiteSpace: per === 'word' ? 'nowrap' : 'normal' }}
          transition={{
            duration: 0.3,
            delay: delay + index * 0.03,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          {segment}
          {per === 'word' && index < segments.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.div>
  );
}
