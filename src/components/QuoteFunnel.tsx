'use client';

import React, { useState } from 'react';
import {
  BUDGET_OPTIONS_LKR,
  BUDGET_OPTIONS_USD,
  getWhatsAppUrl,
  QUOTE_SERVICE_OPTIONS,
  type BudgetCurrency,
  type QuoteServiceOption,
} from '@/lib/site';
import { trackLeadSubmission, trackWhatsAppClick } from '@/lib/analytics';
import styles from './QuoteFunnel.module.css';

interface QuoteFunnelProps {
  defaultService?: QuoteServiceOption;
  sourcePage?: string;
  theme?: 'light' | 'dark';
  compact?: boolean;
  onSuccess?: () => void;
  submitLabel?: string;
}

export function QuoteFunnel({
  defaultService = 'Business website',
  sourcePage,
  theme = 'light',
  compact = false,
  onSuccess,
  submitLabel = 'Get My Free Project Estimate',
}: QuoteFunnelProps) {
  const [serviceOverride, setServiceOverride] = useState<{
    forDefault: QuoteServiceOption;
    value: QuoteServiceOption;
  } | null>(null);
  const serviceType =
    serviceOverride && serviceOverride.forDefault === defaultService
      ? serviceOverride.value
      : defaultService;
  const [currency, setCurrency] = useState<BudgetCurrency>('LKR');
  const [budgetRange, setBudgetRange] = useState<string>(BUDGET_OPTIONS_LKR[1]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const budgetOptions = currency === 'LKR' ? BUDGET_OPTIONS_LKR : BUDGET_OPTIONS_USD;

  const handleCurrencyChange = (nextCurrency: BudgetCurrency) => {
    setCurrency(nextCurrency);
    const nextList = nextCurrency === 'LKR' ? BUDGET_OPTIONS_LKR : BUDGET_OPTIONS_USD;
    setBudgetRange(nextList[1]);
  };

  const resolvedSource =
    sourcePage || (typeof window !== 'undefined' ? window.location.pathname : '/');

  const whatsAppPrefillMessage = `Hi Swift Stack Digital, I need a ${serviceType} (${budgetRange}). My name is ${fullName.trim() || '...'}${message.trim() ? `. Project details: ${message.trim()}` : ''}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMsg('Please enter your name, email address, and brief project details.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    const parts = fullName.trim().split(/\s+/);
    const firstName = parts[0];
    const lastName = parts.slice(1).join(' ');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: email.trim(),
          phone: phone.trim(),
          serviceType,
          budgetRange,
          currency,
          sourcePage: resolvedSource,
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to send request.');
      }

      trackLeadSubmission({
        serviceType,
        budgetRange,
        currency,
        sourcePage: resolvedSource,
      });

      setStatus('success');
      if (onSuccess) onSuccess();
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Could not send your enquiry right now. Please message us on WhatsApp instead.'
      );
    }
  };

  const isDark = theme === 'dark';

  if (status === 'success') {
    return (
      <div
        className={`${styles.qfSuccess} ${isDark ? styles.qfSuccessDark : ''}`}
        role="status"
        aria-live="polite"
      >
        <div className={styles.qfSuccessIcon} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className={styles.qfSuccessTitle}>Estimate Request Received</h3>
        <p className={styles.qfSuccessText}>
          Thank you, <strong>{fullName.split(' ')[0]}</strong>. We received your{' '}
          <strong>{serviceType}</strong> enquiry ({budgetRange}) and will reply within one business day with initial recommendations.
        </p>
        <div className={styles.qfSuccessActions}>
          <a
            href={getWhatsAppUrl(whatsAppPrefillMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('quote_funnel_success', serviceType)}
            className={styles.qfWaBtn}
          >
            Continue on WhatsApp ↗
          </a>
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setMessage('');
            }}
            className={styles.qfResetBtn}
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`${styles.qfRoot} ${isDark ? styles.qfDark : styles.qfLight} ${compact ? styles.qfCompact : ''}`}
    >
      {/* Step 1: Service Type */}
      <div className={styles.qfGroup}>
        <span className={styles.qfLabel}>1. What do you need?</span>
        <div className={styles.qfPillGrid} role="radiogroup" aria-label="Service needed">
          {QUOTE_SERVICE_OPTIONS.map((option) => {
            const active = serviceType === option;
            return (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() =>
                  setServiceOverride({ forDefault: defaultService, value: option })
                }
                className={`${styles.qfPill} ${active ? styles.qfPillActive : ''}`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Currency + Estimated Budget */}
      <div className={styles.qfGroup}>
        <div className={styles.qfBudgetHeader}>
          <span className={styles.qfLabel}>2. Estimated budget</span>
          <div className={styles.qfCurrencySwitch} role="group" aria-label="Currency selector">
            {(['LKR', 'USD'] as const).map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => handleCurrencyChange(curr)}
                aria-pressed={currency === curr}
                className={`${styles.qfCurrBtn} ${currency === curr ? styles.qfCurrBtnActive : ''}`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.qfBudgetGrid} role="radiogroup" aria-label="Estimated budget range">
          {budgetOptions.map((range) => {
            const active = budgetRange === range;
            return (
              <button
                key={range}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setBudgetRange(range)}
                className={`${styles.qfPill} ${active ? styles.qfPillActive : ''}`}
              >
                {range}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3: Contact Details */}
      <div className={styles.qfFieldsRow}>
        <div className={styles.qfField}>
          <label htmlFor={`qf-name-${compact ? 'c' : 'f'}`} className={styles.qfFieldLabel}>
            Full Name *
          </label>
          <input
            id={`qf-name-${compact ? 'c' : 'f'}`}
            type="text"
            autoComplete="name"
            required
            placeholder="Kasun Perera"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={styles.qfInput}
          />
        </div>

        <div className={styles.qfField}>
          <label htmlFor={`qf-email-${compact ? 'c' : 'f'}`} className={styles.qfFieldLabel}>
            Email Address *
          </label>
          <input
            id={`qf-email-${compact ? 'c' : 'f'}`}
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder="you@company.lk"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.qfInput}
          />
        </div>
      </div>

      <div className={styles.qfField}>
        <label htmlFor={`qf-phone-${compact ? 'c' : 'f'}`} className={styles.qfFieldLabel}>
          Phone / WhatsApp Number (optional — for faster callback)
        </label>
        <input
          id={`qf-phone-${compact ? 'c' : 'f'}`}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+94 7X XXX XXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={styles.qfInput}
        />
      </div>

      <div className={styles.qfField}>
        <label htmlFor={`qf-msg-${compact ? 'c' : 'f'}`} className={styles.qfFieldLabel}>
          Tell us about your project *
        </label>
        <textarea
          id={`qf-msg-${compact ? 'c' : 'f'}`}
          rows={compact ? 3 : 4}
          required
          placeholder="Describe what your business sells, target timeline, or link your current site if redesigning..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.qfInput}
        />
      </div>

      {status === 'error' && (
        <p className={styles.qfError} role="alert">
          {errorMsg}
        </p>
      )}

      <div className={styles.qfActions}>
        <button type="submit" disabled={status === 'sending'} className={styles.qfSubmitBtn}>
          {status === 'sending' ? 'Sending Request...' : submitLabel}
        </button>

        <a
          href={getWhatsAppUrl(whatsAppPrefillMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('quote_funnel_direct', serviceType)}
          className={styles.qfWhatsappLink}
        >
          <span>Or message us on WhatsApp</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </form>
  );
}
