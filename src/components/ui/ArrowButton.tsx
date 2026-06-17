'use client';
import { motion } from 'framer-motion';

type Variant = 'solid' | 'outline';
type Direction = 'prev' | 'next';

export function ArrowButton({ variant = 'solid', direction = 'next', onClick }: {
  variant?: Variant;
  direction?: Direction;
  onClick?: () => void;
}) {
  const getStyles = () => {
    switch(variant) {
      case 'outline': return { bg: 'transparent', text: 'var(--ink)', hoverBg: 'var(--ink)', hoverText: '#ffffff', hoverBorder: 'var(--ink)', border: '1px solid var(--hairline)' };
      case 'solid': default: return { bg: 'var(--ink)', text: '#ffffff', hoverBg: 'var(--brand-deep)', hoverText: '#ffffff', hoverBorder: 'var(--brand-deep)', border: '1px solid var(--ink)' };
    }
  };
  const s = getStyles();

  return (
    <motion.button
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{
        display: 'grid',
        placeItems: 'center',
        width: '3.5rem', /* size-14 approx */
        height: '3.5rem',
        borderRadius: 'var(--radius-pill)',
        background: s.bg,
        color: s.text,
        border: s.border,
        transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease'
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = s.hoverBg;
        (e.currentTarget as HTMLElement).style.borderColor = s.hoverBorder;
        if (s.hoverText) (e.currentTarget as HTMLElement).style.color = s.hoverText;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = s.bg;
        (e.currentTarget as HTMLElement).style.borderColor = s.border.split(' ')[2];
        if (s.hoverText) (e.currentTarget as HTMLElement).style.color = s.text;
      }}
    >
      <motion.svg 
        variants={{ rest: { scale: 1, rotate: direction === 'prev' ? 180 : 0 }, hover: { scale: 1.15, rotate: direction === 'prev' ? 180 : 0 } }}
        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        style={{ width: '1.25rem', height: '1.25rem' }}
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </motion.svg>
    </motion.button>
  );
}
