import React from 'react';

export function Eyebrow({ children, tone = 'dark' }: { children: React.ReactNode, tone?: 'dark' | 'light' }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.75rem',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.22em',
      color: tone === 'dark' ? 'var(--ink-soft)' : 'color-mix(in srgb, white 70%, transparent)'
    }}>
      <span style={{
        width: '0.375rem',
        height: '0.375rem',
        borderRadius: 'var(--radius-pill)',
        background: tone === 'dark' ? 'var(--brand)' : 'var(--brand-light)'
      }} />
      {children}
    </span>
  );
}
