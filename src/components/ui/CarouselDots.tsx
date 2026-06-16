export function CarouselDots({ count, activeIndex, tone = 'dark', onChange }: {
  count: number;
  activeIndex: number;
  tone?: 'dark' | 'light';
  onChange?: (index: number) => void;
}) {
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === activeIndex;
        const activeColor = tone === 'dark' ? 'var(--ink)' : '#ffffff';
        const idleColor = tone === 'dark' ? 'var(--ghost)' : 'color-mix(in srgb, white 40%, transparent)';
        
        return (
          <button 
            key={i} 
            onClick={() => onChange?.(i)}
            aria-current={isActive}
            style={{ padding: '0.375rem' }}
          >
            <div style={{
              height: '0.375rem',
              width: isActive ? '1.25rem' : '0.375rem',
              borderRadius: 'var(--radius-pill)',
              background: isActive ? activeColor : idleColor,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }} />
          </button>
        );
      })}
    </div>
  );
}
