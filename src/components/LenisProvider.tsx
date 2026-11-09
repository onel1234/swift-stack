'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';

// Global singleton for easy access to start/stop from anywhere without Context wiring
export let globalLenis: Lenis | null = null;

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({ smoothWheel: true });
    globalLenis = lenis;

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      globalLenis = null;
    };
  }, []);

  return <>{children}</>;
}

// Utility to toggle scroll lock
export function toggleScrollLock(locked: boolean) {
  if (locked) {
    globalLenis?.stop();
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
  } else {
    globalLenis?.start();
    document.documentElement.style.removeProperty('overflow');
    document.documentElement.style.removeProperty('height');
  }
}
