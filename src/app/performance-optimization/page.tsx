import type { Metadata } from 'next';
import { ServicePageTemplate, type ServicePageData } from '@/components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Web Performance Optimization & Core Web Vitals | Swift Stack Digital',
  description:
    'Eliminate bottlenecks and achieve 100/100 Google Lighthouse & Core Web Vitals scores. Sub-second LCP, edge caching, and higher conversion ROI.',
};

const PAGE_DATA: ServicePageData = {
  hero: {
    eyebrow: 'Speed & Search Excellence',
    titlePrefix: 'Performance',
    titleItalic: 'Optimization',
    subtitle:
      'Transform sluggish websites into lightning-fast, high-converting revenue engines. We audit, re-architect, and tune every line of code for sub-second speeds and 100/100 Core Web Vitals.',
    primaryCtaLabel: 'Audit My Site',
    secondaryCtaLabel: 'View Performance Gains',
    secondaryCtaHref: '#performance-work',
    metrics: [
      { val: '-70%', lbl: 'Bounce Rate Reduction' },
      { val: '< 800ms', lbl: 'Global LCP Time' },
      { val: '100/100', lbl: 'Google Lighthouse Score' },
      { val: '+210%', lbl: 'Client User Engagement' },
    ],
    banner: {
      image: '/images/performance-optimization.jpg',
      alt: 'Performance Optimization Dashboard',
      eyebrow: 'Speed Telemetry',
      title: 'Sub-Second Edge Delivery & Core Web Vitals',
      badges: ['Lighthouse 100', 'Edge SSR', 'Zero Script Bloat'],
    },
  },
  workflow: {
    eyebrow: 'Precision Engineering',
    titlePrefix: 'Our Optimization',
    titleItalic: 'Methodology',
    subtitle:
      'We employ rigorous diagnostic profiling and edge architectural tuning to strip away bottlenecks without sacrificing rich brand aesthetics.',
    steps: [
      {
        step: '01',
        title: 'Comprehensive Speed Audit',
        desc: 'Deep-dive runtime telemetry, Lighthouse profiling, JavaScript main-thread blocking analysis, and database query latency tracing.',
        icon: 'fileText',
      },
      {
        step: '02',
        title: 'Core Web Vitals Roadmap',
        desc: 'Formulating targeted architectural fixes for Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).',
        icon: 'layers',
      },
      {
        step: '03',
        title: 'Code & Asset Refactoring',
        desc: 'Automating AVIF/WebP responsive images, dynamic bundle-splitting, tree-shaking dead dependencies, and server-side streaming hydration.',
        icon: 'code',
      },
      {
        step: '04',
        title: 'Edge Caching & CDN Deployment',
        desc: 'Global edge replication, Brotli/Gzip compression, stale-while-revalidate caching, and sub-millisecond DNS routing.',
        icon: 'globe',
      },
      {
        step: '05',
        title: 'Continuous Telemetry & SLA',
        desc: 'Real User Monitoring (RUM) dashboards, automated regression alerts, and scheduled monthly performance maintenance audits.',
        icon: 'activity',
      },
    ],
  },
  advantages: {
    eyebrow: 'Direct ROI Drivers',
    titlePrefix: 'Measurable Business',
    titleItalic: 'Impact',
    subtitle:
      'Speed isn’t just vanity—it directly dictates whether your visitors convert, search engines rank you, or your ad spend yields profit.',
    items: [
      {
        title: 'Google SEO Dominance',
        desc: 'Google algorithmically rewards websites with flawless Core Web Vitals with higher search ranking positions and superior organic discoverability.',
        icon: 'search',
      },
      {
        title: 'Crushed Bounce Rates',
        desc: 'Over 50% of mobile users abandon a website taking longer than 2.5 seconds to load. We drop load times below 1 second to keep every visitor browsing.',
        icon: 'chevronsRight',
      },
      {
        title: 'Explosive Conversions',
        desc: 'Every 100ms improvement in page speed directly lifts checkout conversion by up to 8.4%. Faster load speeds mean immediate, measurable ROI.',
        icon: 'trendUpAlt',
      },
      {
        title: '60% Cloud Cost Savings',
        desc: 'Streamlined codebases and edge caching cut database connections and CPU cycles, drastically reducing your monthly cloud hosting bills.',
        icon: 'server',
      },
    ],
  },
  techStack: {
    eyebrow: 'Speed Architecture',
    titlePrefix: 'Optimization',
    titleItalic: 'Technologies',
    subtitle:
      'We combine server-side rendering, compression algorithms, and edge intelligence to shave precious milliseconds off every request.',
    items: [
      '100/100 Core Web Vitals',
      'Next.js Edge SSR',
      'AVIF & WebP Next-Gen Images',
      'Brotli Compression',
      'Dynamic Code Splitting',
      'Tree Shaking Bloat Removal',
      'HTTP/3 Protocol',
      'Cloudflare Global Edge',
      'Redis Latency Caching',
      'Critical CSS Inlining',
      'JSON-LD Structured Schema',
      'Real User Monitoring (RUM)',
    ],
  },
  featuredWork: {
    sectionId: 'performance-work',
    eyebrow: 'Real World Case Studies',
    titlePrefix: 'Featured Speed',
    titleItalic: 'Transformations',
    studies: [
      {
        client: 'Prana Fuel',
        category: 'Health & Fitness Tech',
        title: 'Dynamic Web Application with Sub-Second Speed Tuning',
        metrics: [
          { lbl: 'Page Load Time', val: '< 1.0s' },
          { lbl: 'User Engagement', val: '+210%' },
          { lbl: 'Paid Ad ROI', val: '4.8x' },
        ],
        image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
        link: '/work/prana-fuel',
      },
      {
        client: 'Ceylon Naturalist',
        category: 'Global E-Commerce',
        title: 'Scaling Boutique Nature Brand with Frictionless Checkout Flow',
        metrics: [
          { lbl: 'Conversion Rate', val: '+150%' },
          { lbl: 'Bounce Rate', val: '-40%' },
          { lbl: 'Avg Order Value', val: '2.5x' },
        ],
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop',
        link: '/work/ceylon-naturalist',
      },
    ],
  },
  faq: {
    eyebrow: 'Expert Guidance',
    items: [
      {
        q: 'What are Core Web Vitals and why do they impact our business?',
        a: 'Core Web Vitals are Google’s official metrics evaluating real-world user experience: Largest Contentful Paint (loading speed), Interaction to Next Paint (responsiveness), and Cumulative Layout Shift (visual stability). Failing these metrics directly degrades your Google rankings and increases ad cost-per-click.',
      },
      {
        q: 'Can you optimize our existing website without rebuilding it from scratch?',
        a: 'Yes. We often perform in-depth code-level surgical optimizations on existing websites—remediating render-blocking scripts, refactoring database queries, introducing edge CDNs, and compressing media assets without disrupting ongoing operations.',
      },
      {
        q: 'How fast can we expect our website to become?',
        a: 'Our target is consistently under 1.0 second First Contentful Paint globally and a 95–100 Google Lighthouse score. We test across throttled mobile networks to guarantee real-world responsiveness.',
      },
      {
        q: 'How does performance optimization affect our paid advertising ROI?',
        a: 'Google Ads and Meta Ads assign higher Quality Scores and lower CPC bids to destinations that load instantly. By dropping load times from 4s to under 1s, clients typically see their cost-per-acquisition plummet by 30% to 50%.',
      },
    ],
  },
  cta: {
    eyebrow: 'Speed Up Your Brand',
    titlePrefix: 'Ready to unlock sub-second',
    titleItalic: 'speed & conversions?',
    subtitle:
      'Let our technical optimization team audit your website and deliver a concrete blueprint for 100/100 Core Web Vitals.',
    buttonLabel: 'Request Speed Audit',
  },
};

export default function PerformanceOptimizationPage() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
