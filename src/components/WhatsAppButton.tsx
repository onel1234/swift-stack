'use client';

import React from 'react';
import { getWhatsAppUrl } from '@/lib/site';
import { trackWhatsAppClick } from '@/lib/analytics';
import styles from './WhatsAppButton.module.css';

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Swift Stack Digital on WhatsApp"
      onClick={() => trackWhatsAppClick('floating_widget')}
      className={styles.floatingWaBtn}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
      <span className={styles.floatingWaText}>WhatsApp</span>
    </a>
  );
}
