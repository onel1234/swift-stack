export interface ProjectCaseStudy {
  id: string;
  client: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  industry: string;
  category: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  liveUrl: string;
  image: string;
  imageAlt: string;
  relatedServices: { label: string; href: string }[];
  publishedDate: string;
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'ceylon-naturalist',
    client: 'Ceylon Naturalist',
    title: 'Website & E-Commerce Digital Experience for Ceylon Naturalist',
    metaTitle: 'Ceylon Naturalist Case Study — Website & E-Commerce Experience',
    metaDescription:
      'How Swift Stack Digital built a fast, story-driven website and e-commerce experience for Ceylon Naturalist to serve local and international buyers.',
    industry: 'Nature, Wildlife & Ethical Retail',
    category: 'Website & Digital Experience',
    tagline: 'Scaling a Boutique Sri Lankan Nature Brand to Global Buyers',
    overview:
      'Ceylon Naturalist connects international nature enthusiasts and wellness customers with authentic Sri Lankan conservation storytelling and natural products. We engineered a cohesive web presence and conversion-focused purchasing flow tailored for mobile visitors worldwide.',
    challenge:
      'The brand had a fragmented digital presence with slow mobile page loads and an outdated browsing-to-checkout path that created friction for international customers trying to explore products and book experiences.',
    solution:
      'We designed and developed a fast, editorial-grade digital platform combining immersive Sri Lankan wildlife storytelling with streamlined product discovery, clear trust cues, and a responsive checkout flow built for global currencies and mobile networks.',
    deliverables: [
      'Custom responsive website & storefront architecture',
      'Editorial brand storytelling & product catalog UX',
      'Mobile-first checkout & international inquiry flow',
      'Technical SEO setup, structured metadata & speed tuning',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SEO Schema', 'Edge CDN'],
    metrics: [
      { label: 'Conversion Rate Lift', value: '+150%' },
      { label: 'Bounce Rate Drop', value: '-40%' },
      { label: 'Avg Order Value', value: '2.5x' },
    ],
    testimonial: {
      quote:
        "Working with Wathila and the Swift Stack team was a stellar experience from start to finish. They built our global platform with immense professionalism, aesthetic elegance, and deep technical precision.",
      author: 'Suneth Bashitha',
      role: 'Founder & Managing Director, Ceylon Naturalist',
    },
    liveUrl: 'https://ceylonnaturalist.com/',
    image: '/images/case-ceylon-naturalist.jpg',
    imageAlt: 'Ceylon Naturalist Sri Lankan nature and ethical retail digital experience preview',
    relatedServices: [
      { label: 'Web Development Services', href: '/web-development' },
      { label: 'E-Commerce Development', href: '/ecommerce-development' },
    ],
    publishedDate: '2026-07-15',
  },
  {
    id: 'chill-co',
    client: 'Chill Co.',
    title: 'E-Commerce Storefront with Loyalty & Affiliate Functionality for Chill Co.',
    metaTitle: 'Chill Co. Case Study — E-Commerce, Loyalty & Affiliate System',
    metaDescription:
      'Custom streetwear e-commerce storefront featuring interactive cart drawer, loyalty rewards, and affiliate tracking built by Swift Stack Digital.',
    industry: 'Fashion & Streetwear Retail',
    category: 'E-Commerce, Loyalty & Affiliate',
    tagline: 'High-Converting Drop Storefront with Loyalty & Affiliate Growth Loops',
    overview:
      'Chill Co. blends Sri Lankan heritage aesthetics with contemporary streetwear drops. We built an online store engineered to handle drop-day traffic spikes while turning buyers into repeat advocates through built-in loyalty and affiliate functionality.',
    challenge:
      'High drop traffic created checkout lag, stock race conditions inside cart drawers, and lost repeat revenue when loyal customers and creators lacked a seamless rewards or referral mechanism.',
    solution:
      'We built a fast, mobile-first storefront featuring an interactive slide-out CartDrawer with instant stock feedback, integrated customer loyalty rewards, and affiliate/referral attribution links backed by a low-latency checkout workflow.',
    deliverables: [
      'Custom drop-ready e-commerce storefront & interactive CartDrawer',
      'Customer loyalty points & repeat-buyer reward mechanics',
      'Creator / partner affiliate referral tracking workflows',
      'Mobile checkout UX optimization & real-time stock handling',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'React',
      'Loyalty & Affiliate Logic',
      'Responsive Checkout UI',
      'Vercel Edge',
    ],
    metrics: [
      { label: 'Drop-Day Uptime', value: '99.99%' },
      { label: 'Mobile Checkouts', value: '+85%' },
      { label: 'Page Load Speed', value: '1.1s' },
    ],
    testimonial: {
      quote:
        'Our high-traffic drop days used to cause inventory sync issues and checkout abandonment. Swift Stack completely revamped our frontend with instant cart reservation and zero lag.',
      author: 'Kavindu Senanayake',
      role: 'Head of Digital Commerce, Chill Co. Apparel',
    },
    liveUrl: 'https://chill-co.vercel.app/',
    image: '/images/case-chill-co.jpg',
    imageAlt: 'Chill Co. modern streetwear e-commerce storefront with loyalty and affiliate experience',
    relatedServices: [
      { label: 'E-Commerce Development', href: '/ecommerce-development' },
      { label: 'UI/UX & Product Design', href: '/ui-ux-design' },
    ],
    publishedDate: '2026-08-10',
  },
  {
    id: 'prana-fuel',
    client: 'Prana Fuel',
    title: 'High-Speed Wellness Launch Platform for Prana Fuel',
    metaTitle: 'Prana Fuel Case Study — Performance-First Product Launch Web App',
    metaDescription:
      'How Swift Stack Digital built a sub-second, conversion-focused wellness product launch application for Prana Fuel.',
    industry: 'Health, Nutrition & Fitness',
    category: 'Web Application & Speed',
    tagline: 'Igniting Digital Engagement with Sub-Second Mobile Performance',
    overview:
      'Prana Fuel launched an energetic wellness and functional nutrition brand targeting busy professionals. The goal was to make paid social traffic land on an ultra-responsive page that builds immediate product trust.',
    challenge:
      'Earlier landing pages suffered from heavy scripts, sluggish mobile painting, and static layouts that caused ad clicks to bounce before reading product benefits.',
    solution:
      'We re-engineered the frontend with lean bundle splitting, hardware-accelerated transitions, compressed visual assets, and clear conversion sections tailored for smartphone shoppers.',
    deliverables: [
      'High-speed product launch web application',
      'Kinetic scroll storytelling without main-thread lag',
      'Conversion section hierarchy & product comparison blocks',
      'Core Web Vitals asset & script optimization',
    ],
    techStack: ['Next.js', 'React', 'Framer Motion', 'Optimized Media', 'Netlify / Edge'],
    metrics: [
      { label: 'Page Load Time', value: '< 1.0s' },
      { label: 'User Engagement', value: '+210%' },
      { label: 'Paid Ad ROI', value: '4.8x' },
    ],
    testimonial: {
      quote:
        "Swift Stack didn't just build us a website; they built the engine for our brand growth. The kinetic energy, fluid motion design, and sub-second loading speeds immediately positioned us at the top of our category.",
      author: 'Rehan Ahamed',
      role: 'Founder & Product Lead, Prana Fuel',
    },
    liveUrl: 'https://prana-fuel-your-vitality.netlify.app/',
    image: '/images/case-prana-fuel.jpg',
    imageAlt: 'Prana Fuel high-performance wellness web application showcase',
    relatedServices: [
      { label: 'SEO & Core Web Vitals', href: '/seo-services' },
      { label: 'Web Development Services', href: '/web-development' },
    ],
    publishedDate: '2026-08-22',
  },
  {
    id: 'catalyst-digital',
    client: 'Catalyst Digital',
    title: 'B2B Agency Platform & Lead Qualification Automation for Catalyst Digital',
    metaTitle: 'Catalyst Digital Case Study — B2B Web Platform & Lead Automation',
    metaDescription:
      'Modern B2B web platform and automated lead qualification workflow engineered by Swift Stack Digital.',
    industry: 'B2B Technology & Consultancy',
    category: 'Custom Web & Workflow Automation',
    tagline: 'Authoritative B2B Web Platform Paired with Automated Lead Workflows',
    overview:
      'Catalyst Digital needed an authoritative B2B web experience and streamlined inbound lead capture capable of qualifying enquiries automatically rather than dumping unstructured emails onto the sales team.',
    challenge:
      'A generic legacy web presence failed to communicate engineering rigor, while manual enquiry triage consumed hours of operational time each week.',
    solution:
      'We crafted a sleek interactive platform with structured service positioning and integrated automated qualification flows that route structured prospect requirements straight into team workflows.',
    deliverables: [
      'Custom B2B web platform & interactive UI components',
      'Structured inbound lead qualification flow',
      'Automated CRM / notification routing integration',
      'Core Web Vitals & clean technical architecture',
    ],
    techStack: ['Next.js', 'TypeScript', 'React', 'AI / Workflow APIs', 'Vercel'],
    metrics: [
      { label: 'Session Duration', value: '3.5x' },
      { label: 'Inbound Leads', value: '+180%' },
      { label: 'Ops Hours Saved', value: '40 hrs/wk' },
    ],
    testimonial: {
      quote:
        'Their mastery of Next.js architecture and custom AI automation is second to none. They took our complex lead qualification workflows and automated them end-to-end.',
      author: 'Marcus Vance',
      role: 'Managing Director, Catalyst Enterprise Solutions',
    },
    liveUrl: 'https://catalyst-digital-alpha.vercel.app/',
    image: '/images/hero-workspace.jpg',
    imageAlt: 'Catalyst Digital B2B platform and automation workflow preview',
    relatedServices: [
      { label: 'Custom Software & CRM', href: '/custom-software' },
      { label: 'AI Automation Services', href: '/ai-automation' },
    ],
    publishedDate: '2026-09-05',
  },
];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return PROJECTS.find((p) => p.id === slug);
}
