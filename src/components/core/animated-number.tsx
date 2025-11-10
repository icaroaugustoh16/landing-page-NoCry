'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, MotionValue } from 'framer-motion';

interface AnimatedNumberProps {
  value: number;
  className?: string;
  springOptions?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
  as?: React.ElementType;
  format?: (value: number) => string;
}

export function AnimatedNumber({
  value,
  className = '',
  springOptions = {
    stiffness: 100,
    damping: 20,
    mass: 0.8,
  },
  as: Component = 'span',
  format = (val) => Math.floor(val).toLocaleString(),
}: AnimatedNumberProps) {
  const spring = useSpring(0, springOptions);
  const display = useTransform(spring, format);

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <Component className={className}>
      <motion.span>{display}</motion.span>
    </Component>
  );
}
