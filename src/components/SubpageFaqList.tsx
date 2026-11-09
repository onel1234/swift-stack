'use client';

import React, { useState } from 'react';
import styles from './SubpageStyles.module.css';

interface FaqItem {
  q: string;
  a: string;
}

export function SubpageFaqList({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className={styles.faqList}>
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={item.q} className={styles.faqItem}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className={styles.faqTrigger}
            >
              <span className={styles.faqQuestion}>{item.q}</span>
              <span className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ''}`} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            <div className={`${styles.faqCollapse} ${isOpen ? styles.faqCollapseOpen : ''}`}>
              <div className={styles.faqCollapseInner}>
                <div className={styles.faqAnswer}>{item.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
