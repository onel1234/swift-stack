import type { Metadata } from 'next';
import { ServicePageTemplate, type ServicePageData } from '@/components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'UI/UX & Digital Product Design Services | Swift Stack Digital',
  description:
    'High-converting UI/UX design systems, kinetic prototyping, and WCAG 2.1 AA accessible product interfaces tailored for retention and growth.',
};

const PAGE_DATA: ServicePageData = {
  hero: {
    eyebrow: 'Digital Product & Brand Experience',
    titlePrefix: 'UI/UX & Product',
    titleItalic: 'Design',
    subtitle:
      'Intuitive, user-centric interfaces engineered with kinetic logic and modern corporate minimalism to maximize customer retention, brand authority, and revenue conversion.',
    primaryCtaLabel: 'Start a Design Project',
    secondaryCtaLabel: 'Explore Design Portfolio',
    secondaryCtaHref: '#design-work',
    metrics: [
      { val: '3.5x', lbl: 'Average Session Duration' },
      { val: '+180%', lbl: 'Inbound Lead Velocity' },
      { val: 'WCAG AA', lbl: 'Universal Accessibility' },
      { val: 'Figma to Code', lbl: 'Pixel-Perfect Handoff' },
    ],
    banner: {
      image: '/images/ui-ux-design.jpg',
      alt: 'Kinetic UI/UX Design System',
      eyebrow: 'Design Philosophy',
      title: 'Kinetic Logic & Modern Corporate Minimalism',
      badges: ['Figma System', 'Motion Logic', 'Conversion Focus'],
    },
  },
  workflow: {
    eyebrow: 'Human-Centered Systems',
    titlePrefix: 'Our Product Design',
    titleItalic: 'Blueprint',
    subtitle:
      'We merge psychological intuition with rigorous component architecture to craft digital experiences users love and trust implicitly.',
    steps: [
      {
        step: '01',
        title: 'Research & User Discovery',
        desc: 'Auditing user behavioral data, conducting competitor benchmark analyses, and establishing concrete user journey personas.',
        icon: 'search',
      },
      {
        step: '02',
        title: 'Information Architecture & Wireframes',
        desc: 'Mapping conversion funnels, low-fidelity structural wireframes, navigational hierarchy, and frictionless user checkout journeys.',
        icon: 'layoutGrid',
      },
      {
        step: '03',
        title: 'Kinetic High-Fidelity UI',
        desc: 'Applying bespoke typography, sophisticated color palettes, glassmorphic dimensional surfaces, and modern corporate minimalism.',
        icon: 'starOutline',
      },
      {
        step: '04',
        title: 'Interactive Motion Prototyping',
        desc: 'Crafting fluid scroll-driven animations, tactile button states, micro-interactions, and clickable client walkthrough prototypes.',
        icon: 'play',
      },
      {
        step: '05',
        title: 'Design System & Dev Handoff',
        desc: 'Comprehensive Figma token libraries, responsive auto-layout components, WCAG AA compliance checklists, and frontend implementation supervision.',
        icon: 'clipboard',
      },
    ],
  },
  advantages: {
    eyebrow: 'Intentional Aesthetics',
    titlePrefix: 'Value-Driven Design',
    titleItalic: 'Principles',
    subtitle:
      'Great design is an investment in revenue. We construct visual systems that simplify complexity and compel action.',
    items: [
      {
        title: 'Maximum User Retention',
        desc: 'Intuitive, frictionless experiences eliminate cognitive fatigue, dramatically boosting daily engagement and lowering customer churn.',
        icon: 'heart',
      },
      {
        title: 'Authoritative Brand Identity',
        desc: 'A distinct, high-end visual language that commands credibility, conveys technical prowess, and positions you as the premium choice in your sector.',
        icon: 'star',
      },
      {
        title: 'WCAG 2.1 AA Accessibility',
        desc: 'Rigorous color contrast ratios, screen-reader semantic trees, and keyboard navigable ergonomics ensuring universal compliance and usability.',
        icon: 'alertCircle',
      },
      {
        title: 'Conversion-Engineered Funnels',
        desc: 'Strategic microcopy, focal visual paths, and frictionless interactive touchpoints mathematically proven to turn traffic into paying clients.',
        icon: 'trendUpAlt',
      },
    ],
  },
  techStack: {
    eyebrow: 'Design System Arsenal',
    titlePrefix: 'Our Design',
    titleItalic: 'Toolkit',
    subtitle:
      'We structure every component with modern auto-layout tokens and kinetic principles for effortless developer implementation.',
    items: [
      'Figma Design Systems',
      'Kinetic Motion Design',
      'WCAG 2.1 AA Standards',
      'Design Tokens Architecture',
      'Interactive Component States',
      'Cross-Platform Wireframing',
      'Conversion Rate Optimization',
      'User Persona Mapping',
      'Micro-Interactions Modeling',
      'Responsive 12-Column Grids',
      'Usability Testing Protocols',
      'Pixel-Perfect Code Handoff',
    ],
  },
  featuredWork: {
    sectionId: 'design-work',
    eyebrow: 'Selected Design Works',
    titlePrefix: 'Design & UI',
    titleItalic: 'Portfolio',
    studies: [
      {
        client: 'Catalyst Digital',
        category: 'Strategy & Tech Consultancy',
        title: 'Bespoke Brand Identity & Kinetic Agency Experience',
        metrics: [
          { lbl: 'Session Duration', val: '3.5x' },
          { lbl: 'Inbound Leads', val: '+180%' },
          { lbl: 'Design System', val: '100% Tokens' },
        ],
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
        link: '/work/catalyst-digital',
      },
      {
        client: 'Chill Co. Apparel',
        category: 'Streetwear & Digital Retail',
        title: 'Editorial E-Commerce Experience Blending Heritage with Modern Streetwear',
        metrics: [
          { lbl: 'Mobile Checkouts', val: '+85%' },
          { lbl: 'Cart Abandonment', val: '-32%' },
          { lbl: 'UX Rating', val: '4.9 ★' },
        ],
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop',
        link: '/work/chill-co',
      },
    ],
  },
  faq: {
    eyebrow: 'Expert Answers',
    items: [
      {
        q: 'Do you deliver Figma designs or fully functional frontend code?',
        a: 'Both. We create complete production-ready Figma design systems with interactive component states, typography variables, and color tokens, and can seamlessly translate them into pixel-perfect React / Next.js code.',
      },
      {
        q: 'How many design revision rounds are included in a typical project?',
        a: 'We work closely with your stakeholders in continuous weekly iterations rather than presenting a rigid final reveal. Every sprint includes collaborative review sessions until you are 100% satisfied with the architecture and aesthetic.',
      },
      {
        q: 'Can you redesign our existing app while preserving our backend API?',
        a: 'Absolutely. We specialize in decoupling legacy frontends, engineering modern UX/UI layer refreshes, and reconnecting to your existing databases, microservices, and APIs with zero data loss or operational disruption.',
      },
      {
        q: 'How do you ensure the design actually converts users into customers?',
        a: 'Our designs are guided by cognitive psychology and behavioral data, not guesswork. We analyze heatmaps, streamline friction points in form submissions and checkouts, and emphasize clear focal points that drive measurable user action.',
      },
    ],
  },
  cta: {
    eyebrow: 'Elevate Your Interface',
    titlePrefix: 'Ready to engineer a world-class',
    titleItalic: 'user experience?',
    subtitle:
      'Let’s collaborate to design a high-converting digital product that stands out in your market and commands authority.',
    buttonLabel: 'Book Design Consultation',
  },
};

export default function UIUXDesignPage() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
