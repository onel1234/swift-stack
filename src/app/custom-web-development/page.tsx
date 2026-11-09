import type { Metadata } from 'next';
import { ServicePageTemplate, type ServicePageData } from '@/components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Custom Web Development Services | Swift Stack Digital',
  description:
    'Enterprise-grade custom Next.js 16, React 19, and full-stack TypeScript web applications engineered for sub-second speed, security, and limitless scalability.',
};

const PAGE_DATA: ServicePageData = {
  hero: {
    eyebrow: 'Core Engineering Capability',
    titlePrefix: 'Custom Web',
    titleItalic: 'Development',
    subtitle:
      'We engineer scalable, secure, and lightning-fast web applications built with Next.js 16 to solve complex business challenges, streamline operations, and drive aggressive digital growth.',
    primaryCtaLabel: 'Start a Project',
    secondaryCtaLabel: 'Explore Case Studies',
    secondaryCtaHref: '#featured-work',
    metrics: [
      { val: '99.99%', lbl: 'Production SLA & Uptime' },
      { val: '< 1.0s', lbl: 'First Contentful Paint' },
      { val: '100%', lbl: 'Core Web Vitals Audit' },
      { val: 'Next.js 16', lbl: 'Modern Type-Safe Stack' },
    ],
    banner: {
      image: '/images/custom-web-apps.jpg',
      alt: 'Custom Web Development Architecture',
      eyebrow: 'Architecture Spotlight',
      title: 'Enterprise Next.js Platform Architecture',
      badges: ['Serverless Edge', 'TypeScript', 'Prisma ORM'],
    },
  },
  workflow: {
    eyebrow: 'Structured Agile Methodology',
    titlePrefix: 'Our Engineering',
    titleItalic: 'Workflow',
    subtitle:
      'From concept to global edge deployment, our proven five-stage process delivers continuous velocity with rigorous quality assurance at every sprint.',
    steps: [
      {
        step: '01',
        title: 'Discovery & Architecture',
        desc: 'Deep-dive technical scoping, requirement analysis, database schema modeling, and infrastructure roadmap planning.',
        icon: 'search',
      },
      {
        step: '02',
        title: 'UI/UX & Kinetic Prototyping',
        desc: 'Bespoke design systems, responsive wireframes, interactive high-fidelity prototypes, and kinetic motion design.',
        icon: 'layoutGrid',
      },
      {
        step: '03',
        title: 'Full-Stack Development',
        desc: 'Clean, type-safe Next.js implementation, microservices integration, serverless edge APIs, and database migrations.',
        icon: 'code',
      },
      {
        step: '04',
        title: 'Rigorous QA & Security',
        desc: 'End-to-end automated testing, penetration checks, cross-device audits, and strict 100/100 Core Web Vitals profiling.',
        icon: 'shieldCheck',
      },
      {
        step: '05',
        title: 'Global Edge Launch',
        desc: 'Zero-downtime CI/CD deployment, global CDN edge caching, DNS routing, and real-time telemetry monitoring.',
        icon: 'rocket',
      },
    ],
  },
  advantages: {
    eyebrow: 'Uncompromising Standards',
    titlePrefix: 'Core Architectural',
    titleItalic: 'Advantages',
    subtitle:
      'We don’t build disposable websites. We engineer durable digital assets built on modern specifications that resist obsolescence.',
    items: [
      {
        title: 'Infinite Scalability',
        desc: 'Serverless microservice architectures engineered to absorb viral traffic surges and millions of requests seamlessly without degradation.',
        icon: 'trendUp',
      },
      {
        title: 'Enterprise-Grade Security',
        desc: 'Multi-layer protection including zero-trust access, encrypted payload transmission, OWASP compliance, and proactive vulnerability audits.',
        icon: 'lock',
      },
      {
        title: 'Sub-Second Performance',
        desc: 'Optimized hydration, asset compression, edge caching, and semantic HTML that ensure 100/100 Google Lighthouse scores and rapid conversions.',
        icon: 'zap',
      },
      {
        title: 'Clean Maintainability',
        desc: 'Strictly typed TypeScript codebases, modular component design, and comprehensive documentation for effortless long-term feature expansion.',
        icon: 'settings',
      },
    ],
  },
  techStack: {
    eyebrow: 'Production Proven',
    titlePrefix: 'Our Modern Engineering',
    titleItalic: 'Stack',
    subtitle:
      'We choose bleeding-edge yet battle-tested open source frameworks that offer long-term stability and high developer velocity.',
    items: [
      'Next.js 16 (App Router)',
      'TypeScript',
      'React 19',
      'Tailwind CSS',
      'Node.js',
      'PostgreSQL',
      'Prisma ORM',
      'Supabase',
      'GraphQL & REST APIs',
      'Docker & Microservices',
      'AWS Lambda / Edge',
      'Vercel Serverless',
      'Stripe Billing',
      'Framer Motion',
    ],
  },
  featuredWork: {
    sectionId: 'featured-work',
    eyebrow: 'Proven Production Deployments',
    titlePrefix: 'Featured Web',
    titleItalic: 'Applications',
    studies: [
      {
        client: 'Catalyst Digital',
        category: 'Enterprise SaaS & Web App',
        title: 'Dynamic Motion-Rich Platform for Strategic Momentum',
        metrics: [
          { lbl: 'Session Duration', val: '3.5x' },
          { lbl: 'Operations Saved', val: '40 hrs/wk' },
          { lbl: 'Core Web Vitals', val: '100%' },
        ],
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
        link: '/work/catalyst-digital',
      },
      {
        client: 'Chill Co. Apparel',
        category: 'High-Performance E-Commerce',
        title: 'Drop-Driven Streetwear Platform with Real-Time Cart Architecture',
        metrics: [
          { lbl: 'Production Uptime', val: '99.99%' },
          { lbl: 'Mobile Checkouts', val: '+85%' },
          { lbl: 'Page Load Speed', val: '1.1s' },
        ],
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop',
        link: '/work/chill-co',
      },
    ],
  },
  faq: {
    eyebrow: 'Clear Answers',
    items: [
      {
        q: 'How long does a typical custom web application project take?',
        a: 'Most bespoke web applications and platforms launch in 3 to 6 weeks depending on feature scope. We operate in rapid 1-week iterative sprints with continuous staging access, so you test real working code every week with zero launch-day surprises.',
      },
      {
        q: 'Why do you engineer custom Next.js apps instead of using WordPress or Webflow?',
        a: 'Pre-built templates and bloated plugins carry severe speed penalties, security vulnerabilities, and vendor lock-in that directly damage conversions. A custom Next.js 16 codebase gives you sub-second speeds, absolute brand uniqueness, enterprise security, and the ability to scale to millions of users.',
      },
      {
        q: 'Can our custom web app integrate with our existing CRM, ERP, and payment systems?',
        a: 'Yes, seamlessly. We specialize in building robust API layers connecting to Stripe, Salesforce, HubSpot, Shopify, custom databases, and proprietary internal microservices.',
      },
      {
        q: 'What kind of support and maintenance do you offer after launch?',
        a: 'Every project comes with 30 days of complimentary post-launch hyper-care. Beyond launch, we provide ongoing SLA retainers covering proactive uptime monitoring, security patches, performance audits, and continuous feature sprints.',
      },
    ],
  },
  cta: {
    eyebrow: 'Start Your Build',
    titlePrefix: 'Ready to build something',
    titleItalic: 'extraordinary?',
    subtitle:
      'Let’s discuss how our engineering team can architect your next web platform for velocity, scale, and uncompromising quality.',
    buttonLabel: 'Contact Our Engineers',
  },
};

export default function CustomWebDevelopmentPage() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
