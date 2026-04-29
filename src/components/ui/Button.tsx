import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  return (
    <button className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ButtonLink({ variant = 'primary', href, children, className = '', ...props }: ButtonLinkProps) {
  return (
    <a href={href} className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </a>
  );
}
