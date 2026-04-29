import React from 'react';
import { ButtonLink } from '../ui/Button';

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--inverse-surface)', color: 'var(--on-tertiary)', padding: 'var(--spacing-section-padding) 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-stack-lg)', alignItems: 'center', textAlign: 'center' }}>
        <h2 className="headline-md" style={{ color: 'var(--on-primary)' }}>Ready to elevate your digital presence?</h2>
        <p className="body-lg" style={{ color: 'var(--on-primary-container)', maxWidth: '600px' }}>
          Reach out to our engineering team and let's architect the future of your web experience.
        </p>
        <ButtonLink href="#contact" variant="primary" className="btn-primary">Start a Project</ButtonLink>


      </div>
    </footer>
  );
}
