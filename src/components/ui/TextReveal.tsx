'use client';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

type RevealProps = {
  text: string | string[];
  type: 'words' | 'lines';
  isReady?: boolean; // triggers reveal
  baseDelay?: number;
  stagger?: number;
  duration?: number;
  ease?: any;
  yOffset?: string;
  as?: any;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export function TextReveal({
  text, type, isReady = true, baseDelay = 0, stagger = 0.1, duration = 0.9,
  ease = [0.19, 1, 0.22, 1], // easeOutExpo approx
  yOffset = '115%', as: Component = 'div', id, className, style
}: RevealProps) {
  const items = useMemo(() => Array.isArray(text) ? text : text.split(' '), [text]);

  return (
    <Component id={id} className={className} style={{ display: 'flex', flexWrap: 'wrap', ...style }}>
      {items.map((item, i) => (
        <span key={i} style={{ overflow: 'hidden', paddingBottom: type === 'lines' ? '0.14em' : '0.12em', display: 'inline-flex', marginRight: type === 'words' && i < items.length - 1 ? '0.25em' : 0 }}>
          <motion.span
            initial={{ y: yOffset, opacity: 0 }}
            animate={isReady ? { y: '0%', opacity: 1 } : { y: yOffset, opacity: 0 }}
            transition={{ delay: baseDelay + i * stagger, duration, ease }}
            style={{ display: 'inline-block', whiteSpace: type === 'lines' ? 'nowrap' : 'normal' }}
          >
            {item}{type === 'words' && i < items.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
