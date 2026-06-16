'use client';
import { motion } from 'framer-motion';

type Variant = 'light' | 'solid' | 'outline';

export function PillButton({ children, variant = 'solid', onClick, type = 'button', disabled = false }: {
  children: React.ReactNode;
  variant?: Variant;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}) {
  const getStyles = () => {
    switch(variant) {
      case 'light': return { bg: '#ffffff', text: 'var(--brand-deep)', hoverBg: 'var(--brand-light)', hoverText: '#ffffff', border: 'none' };
      case 'outline': return { bg: 'transparent', text: 'var(--ink)', hoverBg: 'var(--ink)', hoverText: '#ffffff', border: '1px solid currentColor' };
      case 'solid': default: return { bg: 'var(--ink)', text: '#ffffff', hoverBg: 'var(--brand-deep)', hoverText: '#ffffff', border: 'none' };
    }
  };
  const s = getStyles();

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        borderRadius: 'var(--radius-pill)',
        padding: '0.875rem 1.75rem',
        fontSize: '0.875rem',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.05em', // wide
        background: s.bg,
        color: s.text,
        border: s.border,
        opacity: disabled ? 0.6 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
        transition: 'background 0.2s, color 0.2s'
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = s.hoverBg;
        (e.currentTarget as HTMLElement).style.color = s.hoverText;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = s.bg;
        (e.currentTarget as HTMLElement).style.color = s.text;
      }}
    >
      {children}
      <motion.svg 
        variants={{ rest: { x: 0 }, hover: { x: 5 } }}
        transition={{ type: 'spring', stiffness: 320, damping: 20 }}
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        style={{ width: '1rem', height: '1rem' }}
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </motion.svg>
    </motion.button>
  );
}
