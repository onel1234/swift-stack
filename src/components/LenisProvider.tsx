'use client';

import { ReactNode, useEffect, useState } from 'react';
import Lenis from 'lenis';

// Global singleton for easy access to start/stop from anywhere without Context wiring
export let globalLenis: Lenis | null = null;

export function LenisProvider({ children }: { children: ReactNode }) {
  const [lenisStarted, setLenisStarted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({ smoothWheel: true });
    globalLenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    setLenisStarted(true);

    return () => {
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
    document.documentElement.style.position = 'relative';
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
  } else {
    globalLenis?.start();
    document.documentElement.style.removeProperty('position');
    document.documentElement.style.removeProperty('overflow');
    document.documentElement.style.removeProperty('height');
  }
}
