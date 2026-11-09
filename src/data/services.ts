import type { QuoteServiceOption } from '@/lib/site';

export type WorkflowIconKey =
  | 'search'
  | 'layoutGrid'
  | 'code'
  | 'shieldCheck'
  | 'rocket'
  | 'fileText'
  | 'layers'
  | 'globe'
  | 'activity'
  | 'starOutline'
  | 'play'
  | 'clipboard';

export type AdvantageIconKey =
  | 'trendUp'
  | 'lock'
  | 'zap'
  | 'settings'
  | 'search'
  | 'chevronsRight'
  | 'trendUpAlt'
  | 'server'
  | 'heart'
  | 'star'
  | 'alertCircle';

export interface ServicePageData {
  slug: string;
  breadcrumbLabel: string;
  metaTitle: string;
  metaDescription: string;
  serviceSchemaName: string;
  serviceType: string;
  quoteServiceDefault: QuoteServiceOption;
  hero: {
    eyebrow: string;
    titlePrefix: string;
    titleItalic: string;
    subtitle: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    metrics: { val: string; lbl: string }[];
    banner: {
      image: string;
      alt: string;
      eyebrow: string;
      title: string;
      badges: string[];
    };
  };
  workflow: {
    eyebrow: string;
    titlePrefix: string;
    titleItalic: string;
    subtitle: string;
    steps: {
      step: string;
      title: string;
      desc: string;
      icon: WorkflowIconKey;
    }[];
  };
  advantages: {
    eyebrow: string;
    titlePrefix: string;
    titleItalic: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      icon: AdvantageIconKey;
    }[];
  };
  techStack: {
    eyebrow: string;
    titlePrefix: string;
    titleItalic: string;
    subtitle: string;
    items: string[];
  };
  featuredWork: {
    sectionId: string;
    eyebrow: string;
    titlePrefix: string;
    titleItalic: string;
    studies: {
      client: string;
      category: string;
      title: string;
      metrics: { lbl: string; val: string }[];
      image: string;
      link: string;
    }[];
  };
  relatedGuides: {
    title: string;
    description: string;
    href: string;
    tag: string;
  }[];
  faq: {
    eyebrow: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  cta: {
    eyebrow: string;
    titlePrefix: string;
    titleItalic: string;
    subtitle: string;
    buttonLabel: string;
  };
}

export const SERVICES_BY_SLUG: Record<string, ServicePageData> = {
  'web-development': {
    slug: 'web-development',
    breadcrumbLabel: 'Web Development',
    metaTitle: 'Website Development Services Sri Lanka | Custom Next.js & React',
    metaDescription:
      'Commercial website development services in Sri Lanka and Colombo. Swift Stack Digital builds fast Next.js, React, and business websites designed to rank on Google and convert enquiries.',
    serviceSchemaName: 'Website Development Services Sri Lanka',
    serviceType: 'Web Development & Business Website Design',
    quoteServiceDefault: 'Business website',
    hero: {
      eyebrow: 'Sri Lanka & Global Web Engineering',
      titlePrefix: 'Website Development',
      titleItalic: 'Sri Lanka',
      subtitle:
        'We build fast, mobile-first Next.js and React websites for ambitious businesses in Colombo, across Sri Lanka, and worldwide—engineered to rank on Google and turn visitors into enquiries.',
      primaryCtaLabel: 'Get a Free Website Quote',
      secondaryCtaLabel: 'Explore Case Studies',
      secondaryCtaHref: '#featured-work',
      metrics: [
        { val: '2–5 Wks', lbl: 'Typical Launch Window' },
        { val: '< 1.0s', lbl: 'Target First Paint' },
        { val: 'SEO-First', lbl: 'SSR & Clean Schema' },
        { val: 'Next.js 16', lbl: 'Modern React Stack' },
      ],
      banner: {
        image: '/images/custom-web-apps.jpg',
        alt: 'Custom website development architecture for Sri Lankan and international businesses',
        eyebrow: 'Commercial Web Architecture',
        title: 'Fast, Crawl-Ready Business & SaaS Websites',
        badges: ['Mobile-First', 'Technical SEO', 'Conversion Funnel'],
      },
    },
    workflow: {
      eyebrow: 'Structured Agile Delivery',
      titlePrefix: 'How We Build Your',
      titleItalic: 'Website',
      subtitle:
        'From commercial keyword positioning in Colombo and Sri Lanka to launch and tracking setup, every stage focuses on measurable business enquiries.',
      steps: [
        {
          step: '01',
          title: 'Business & Keyword Scope',
          desc: 'Aligning site pages with how your ideal Sri Lankan and international customers actually search and compare vendors.',
          icon: 'search',
        },
        {
          step: '02',
          title: 'Conversion UX & Wireframes',
          desc: 'Designing clear value propositions, WhatsApp and quote pathways, trust proof, and responsive mobile layouts.',
          icon: 'layoutGrid',
        },
        {
          step: '03',
          title: 'Next.js & React Engineering',
          desc: 'Clean, server-rendered TypeScript architecture that avoids heavy WordPress plugin bloat and loads rapidly on mobile 4G.',
          icon: 'code',
        },
        {
          step: '04',
          title: 'Technical SEO & QA',
          desc: 'On-page heading hierarchy, canonical URLs, JSON-LD structured data, metadata, accessibility, and cross-device verification.',
          icon: 'shieldCheck',
        },
        {
          step: '05',
          title: 'Launch & Lead Tracking',
          desc: 'Production deployment, Google Search Console sitemap submission, GA4 form/WhatsApp conversion tracking, and support.',
          icon: 'rocket',
        },
      ],
    },
    advantages: {
      eyebrow: 'Built for Growth',
      titlePrefix: 'Why Businesses Choose',
      titleItalic: 'Swift Stack',
      subtitle:
        'Templates look generic and slow down quickly. Our custom websites combine strong commercial messaging with engineered Core Web Vitals.',
      items: [
        {
          title: 'Built to Generate Enquiries',
          desc: 'Every page includes clear positioning, real case study evidence, structured quotation flows, and one-tap WhatsApp/phone contact.',
          icon: 'trendUp',
        },
        {
          title: 'Zero Plugin Bloat or Hack Risks',
          desc: 'Modern static and serverless Next.js architectures eliminate vulnerable WordPress plugin chains and unpredictable slowdowns.',
          icon: 'lock',
        },
        {
          title: 'Mobile Speed Across Sri Lanka',
          desc: 'Compressed responsive imagery, self-hosted fonts, and lean JavaScript keep pages snappy even over slower mobile data connections.',
          icon: 'zap',
        },
        {
          title: 'Maintainable TypeScript Code',
          desc: 'Modular components and clean content schemas allow new service pages, case studies, and blog articles to scale effortlessly.',
          icon: 'settings',
        },
      ],
    },
    techStack: {
      eyebrow: 'Modern Web Stack',
      titlePrefix: 'Reliable Production',
      titleItalic: 'Technologies',
      subtitle:
        'Battle-tested React and Next.js tooling chosen for fast indexing, security, and smooth future expansion.',
      items: [
        'Next.js 16 (App Router)',
        'React 19',
        'TypeScript',
        'Server-Side Rendering (SSR)',
        'Technical SEO & JSON-LD',
        'Node.js APIs',
        'PostgreSQL / Supabase',
        'PayHere & Stripe Ready',
        'WhatsApp & CRM Lead Routing',
        'Google Analytics 4',
        'Vercel Edge Network',
        'Cloudflare DNS & SSL',
      ],
    },
    featuredWork: {
      sectionId: 'featured-work',
      eyebrow: 'Proven Client Builds',
      titlePrefix: 'Selected Web',
      titleItalic: 'Projects',
      studies: [
        {
          client: 'Ceylon Naturalist',
          category: 'Website & Digital Experience',
          title: 'Editorial Storytelling & Conversion Experience for a Sri Lankan Brand',
          metrics: [
            { lbl: 'Conversion Lift', val: '+150%' },
            { lbl: 'Bounce Rate', val: '-40%' },
            { lbl: 'Avg Order Value', val: '2.5x' },
          ],
          image: '/images/case-ceylon-naturalist.jpg',
          link: '/work/ceylon-naturalist',
        },
        {
          client: 'Catalyst Digital',
          category: 'B2B Agency & Lead Flow',
          title: 'High-Speed B2B Website with Automated Lead Qualification',
          metrics: [
            { lbl: 'Session Time', val: '3.5x' },
            { lbl: 'Ops Saved', val: '40 hrs/wk' },
            { lbl: 'Inbound Leads', val: '+180%' },
          ],
          image: '/images/hero-workspace.jpg',
          link: '/work/catalyst-digital',
        },
      ],
    },
    relatedGuides: [
      {
        tag: 'Pricing Guide',
        title: 'How Much Does a Website Cost in Sri Lanka in 2026?',
        description: 'Breakdown of business website, e-commerce, and custom web application budgets in LKR.',
        href: '/blog/website-cost-in-sri-lanka-2026',
      },
      {
        tag: 'Comparison',
        title: 'WordPress vs Custom Website: Which Is Better for Your Business?',
        description: 'Speed, security, SEO, and long-term maintenance trade-offs explained clearly.',
        href: '/blog/wordpress-vs-custom-website-sri-lanka',
      },
    ],
    faq: {
      eyebrow: 'Website Development FAQ',
      items: [
        {
          q: 'How much does business website development cost in Sri Lanka?',
          a: 'A focused business website in Sri Lanka typically ranges from LKR 50,000–150,000 depending on page count, bespoke design, and integrations, while larger custom web platforms and e-commerce builds scale above LKR 150,000–250,000+. Use our quotation funnel to get a tailored estimate.',
        },
        {
          q: 'How long does it take to build and launch a custom website?',
          a: 'Most business websites take 2 to 4 weeks from kickoff and copy sign-off, while custom platforms and e-commerce builds take 4 to 6 weeks with weekly staging previews.',
        },
        {
          q: 'Why do you recommend React and Next.js instead of template WordPress sites?',
          a: 'Custom Next.js websites deliver faster mobile Core Web Vitals, server-rendered HTML for reliable Google crawling, tighter security without vulnerable plugins, and flexible integration with WhatsApp, CRMs, and payment gateways.',
        },
        {
          q: 'Do you work with businesses outside Colombo?',
          a: 'Yes. From our base in Kiribathgoda & Colombo, we build websites for businesses across Sri Lanka as well as international startups and companies across the UAE, UK, and globally.',
        },
      ],
    },
    cta: {
      eyebrow: 'Start Your Website',
      titlePrefix: 'Need a high-converting website',
      titleItalic: 'for your business?',
      subtitle:
        'Tell us what you are building and get a free consultation plus an honest timeline and LKR/USD project estimate.',
      buttonLabel: 'Get a Free Consultation',
    },
  },

  'ecommerce-development': {
    slug: 'ecommerce-development',
    breadcrumbLabel: 'E-Commerce Development',
    metaTitle: 'E-Commerce Website Development Sri Lanka | Fast Online Stores',
    metaDescription:
      'Custom e-commerce website development in Sri Lanka. PayHere, Stripe, Genie/KOKO-ready checkouts, loyalty & affiliate systems, and high-converting mobile storefronts.',
    serviceSchemaName: 'E-Commerce Website Development Sri Lanka',
    serviceType: 'E-Commerce Storefront & Checkout Engineering',
    quoteServiceDefault: 'E-commerce website',
    hero: {
      eyebrow: 'High-Converting Online Stores',
      titlePrefix: 'E-Commerce Development',
      titleItalic: 'Sri Lanka',
      subtitle:
        'Turn social media followers and Google searchers into paying customers with fast mobile storefronts, local Sri Lankan & global payments, loyalty rewards, and frictionless checkout.',
      primaryCtaLabel: 'Estimate My Online Store',
      secondaryCtaLabel: 'See Store Case Studies',
      secondaryCtaHref: '#featured-work',
      metrics: [
        { val: '+85%', lbl: 'Mobile Checkout Lift' },
        { val: '99.99%', lbl: 'Drop-Day Uptime' },
        { val: 'LKR / USD', lbl: 'Multi-Currency Ready' },
        { val: 'Loyalty +', lbl: 'Affiliate Systems' },
      ],
      banner: {
        image: '/images/hero-workspace.jpg',
        alt: 'E-commerce online store architecture and mobile checkout experience in Sri Lanka',
        eyebrow: 'Built to Sell on Mobile',
        title: 'Storefronts with Real-Time Cart, Loyalty & Affiliate Growth',
        badges: ['PayHere & Stripe', 'Slide-Out Cart', 'WhatsApp Order Fallback'],
      },
    },
    workflow: {
      eyebrow: 'E-Commerce Launch Roadmap',
      titlePrefix: 'How We Launch Your',
      titleItalic: 'Online Store',
      subtitle:
        'From catalog structure and Sri Lankan courier/payment integration to mobile speed and Google product discoverability.',
      steps: [
        {
          step: '01',
          title: 'Catalog & Margin Architecture',
          desc: 'Structuring product categories, variants (size/color), stock alerts, and bundle pricing for maximum average order value.',
          icon: 'search',
        },
        {
          step: '02',
          title: 'Mobile Storefront & Cart UX',
          desc: 'Fast image galleries, size/spec clarity, instant slide-out CartDrawer, and streamlined one-page checkout built for thumbs.',
          icon: 'layoutGrid',
        },
        {
          step: '03',
          title: 'Payments, Delivery & Loyalty',
          desc: 'Integrating PayHere, Stripe, COD workflows, courier rate rules, discount codes, loyalty points, or creator affiliate links.',
          icon: 'code',
        },
        {
          step: '04',
          title: 'SEO & Speed Testing',
          desc: 'Category & product page SEO metadata, schema readiness, drop-traffic stress checks, and mobile checkout testing.',
          icon: 'shieldCheck',
        },
        {
          step: '05',
          title: 'Analytics & Growth Loop',
          desc: 'GA4 e-commerce funnel events (view item, add to cart, purchase), WhatsApp support triggers, and post-launch optimization.',
          icon: 'rocket',
        },
      ],
    },
    advantages: {
      eyebrow: 'Beyond Generic Themes',
      titlePrefix: 'Engineered for Higher',
      titleItalic: 'Conversion',
      subtitle:
        'Slow checkouts kill Instagram and Google ad ROI. We design storefronts that load fast and build buyer trust at every step.',
      items: [
        {
          title: 'Sri Lanka + Global Payments',
          desc: 'Support Visa/Mastercard via PayHere or WebXPay alongside Stripe multi-currency checkout, bank transfer, and Cash on Delivery.',
          icon: 'trendUp',
        },
        {
          title: 'Built-In Loyalty & Affiliates',
          desc: 'Increase repeat orders with points systems, referral links, and creator/affiliate attribution tailored directly to your brand.',
          icon: 'heart',
        },
        {
          title: 'Drop-Day Scalability',
          desc: 'Real-time cart stock handling and edge caching keep your online store fast even when seasonal sales or influencer campaigns hit.',
          icon: 'zap',
        },
        {
          title: 'Search-Ready Category Pages',
          desc: 'Clean URLs, descriptive product titles, fast image optimization, and structured metadata help shoppers find you organically.',
          icon: 'search',
        },
      ],
    },
    techStack: {
      eyebrow: 'Storefront Capabilities',
      titlePrefix: 'E-Commerce',
      titleItalic: 'Integrations',
      subtitle:
        'Flexible headless Next.js commerce, WooCommerce/Shopify custom builds, and tailored loyalty backends.',
      items: [
        'Next.js Commerce',
        'Shopify / Headless Shopify',
        'PayHere Gateway (LKR)',
        'Stripe Multi-Currency',
        'Loyalty Points Engine',
        'Affiliate Referral Links',
        'COD & Courier Integration',
        'Real-Time Inventory Sync',
        'Order Notification Automation',
        'WhatsApp Order Assistant',
        'GA4 Purchase Tracking',
        'WebP/AVIF Product Galleries',
      ],
    },
    featuredWork: {
      sectionId: 'featured-work',
      eyebrow: 'Live Commerce Deployments',
      titlePrefix: 'E-Commerce',
      titleItalic: 'Case Studies',
      studies: [
        {
          client: 'Chill Co.',
          category: 'E-Commerce, Loyalty & Affiliate',
          title: 'Streetwear E-Commerce Storefront with CartDrawer, Loyalty & Affiliate System',
          metrics: [
            { lbl: 'Drop-Day Uptime', val: '99.99%' },
            { lbl: 'Mobile Checkouts', val: '+85%' },
            { lbl: 'Page Speed', val: '1.1s' },
          ],
          image: '/images/case-chill-co.jpg',
          link: '/work/chill-co',
        },
        {
          client: 'Ceylon Naturalist',
          category: 'E-Commerce & Storytelling',
          title: 'Global Sri Lankan Brand Experience & Multi-Currency Storefront',
          metrics: [
            { lbl: 'Conversion Lift', val: '+150%' },
            { lbl: 'Bounce Rate', val: '-40%' },
            { lbl: 'Avg Order Value', val: '2.5x' },
          ],
          image: '/images/case-ceylon-naturalist.jpg',
          link: '/work/ceylon-naturalist',
        },
      ],
    },
    relatedGuides: [
      {
        tag: 'Store Launch Guide',
        title: 'How to Start an Online Store in Sri Lanka',
        description: 'Step-by-step guide covering payment gateways, courier partners, and platform selection.',
        href: '/blog/how-to-start-an-online-store-sri-lanka',
      },
      {
        tag: 'Pricing Guide',
        title: 'How Much Does an E-Commerce Website Cost in Sri Lanka?',
        description: 'Realistic investment ranges for starter stores vs custom Next.js loyalty storefronts.',
        href: '/blog/ecommerce-website-cost-sri-lanka',
      },
    ],
    faq: {
      eyebrow: 'E-Commerce FAQ',
      items: [
        {
          q: 'Which Sri Lankan payment gateways can you integrate?',
          a: 'We regularly integrate PayHere, WebXPay, Genie, and Stripe for international Visa/Mastercard/Apple Pay transactions alongside Bank Deposit and Cash-on-Delivery verification flows.',
        },
        {
          q: 'Can you add custom loyalty points and affiliate referral features?',
          a: 'Yes. Just like our storefront build for Chill Co., we can implement customer loyalty points, VIP discount tiers, and trackable creator/affiliate referral links directly inside your store.',
        },
        {
          q: 'Should we choose Shopify/WooCommerce or a custom Next.js e-commerce build?',
          a: 'If you have a straightforward catalog and standard checkout, Shopify or cleanly tuned WooCommerce works well. If you need sub-second mobile speed, bespoke cart/loyalty UX, or custom software logic, custom Next.js wins.',
        },
        {
          q: 'Will we be able to manage products and orders ourselves?',
          a: 'Yes. Every online store includes an intuitive admin dashboard for updating stock, prices, promos, order statuses, and exporting sales reports without touching code.',
        },
      ],
    },
    cta: {
      eyebrow: 'Launch Your Online Store',
      titlePrefix: 'Ready to sell online',
      titleItalic: 'without friction?',
      subtitle:
        'Share your product count, payment preferences, and goals—we will recommend the right platform and estimate.',
      buttonLabel: 'Get an E-Commerce Quote',
    },
  },

  'custom-software': {
    slug: 'custom-software',
    breadcrumbLabel: 'Custom Software & CRM',
    metaTitle: 'Custom Software & CRM Development Sri Lanka | Tailored Apps',
    metaDescription:
      'Custom software development and bespoke CRM systems in Sri Lanka. Internal portals, SaaS products, inventory/booking workflows, and API integrations built around your operations.',
    serviceSchemaName: 'Custom Software Development Sri Lanka',
    serviceType: 'Custom Software, CRM & Web Application Engineering',
    quoteServiceDefault: 'Custom software / CRM',
    hero: {
      eyebrow: 'Bespoke Systems & Portals',
      titlePrefix: 'Custom Software',
      titleItalic: 'Development',
      subtitle:
        'Stop forcing your business into rigid spreadsheets or expensive per-seat SaaS subscriptions. We engineer tailored CRMs, client portals, booking platforms, and internal web software built around your exact workflow.',
      primaryCtaLabel: 'Scope My Software Project',
      secondaryCtaLabel: 'Explore Software Approach',
      secondaryCtaHref: '#featured-work',
      metrics: [
        { val: '100% Owned', lbl: 'Zero Per-Seat Lock-In' },
        { val: '40+ hrs', lbl: 'Weekly Ops Time Saved' },
        { val: 'Role-Based', lbl: 'Secure Access Control' },
        { val: 'API-First', lbl: 'ERP & Payment Bridges' },
      ],
      banner: {
        image: '/images/team-collaboration.jpg',
        alt: 'Custom CRM and business software engineering team',
        eyebrow: 'Tailored Operational Software',
        title: 'Custom CRMs, Client Portals & SaaS Platforms',
        badges: ['PostgreSQL / Prisma', 'Role Permissions', 'Automated Reporting'],
      },
    },
    workflow: {
      eyebrow: 'Low-Risk Software Delivery',
      titlePrefix: 'From Idea to Reliable',
      titleItalic: 'Production',
      subtitle:
        'We break complex operational software into clear milestones so you see working modules early and avoid budget blowouts.',
      steps: [
        {
          step: '01',
          title: 'Process Mapping & Architecture',
          desc: 'Shadowing your manual workflows, spreadsheets, or bottlenecks to design a clean relational database and permission model.',
          icon: 'search',
        },
        {
          step: '02',
          title: 'Clickable UI Prototyping',
          desc: 'Validating dashboard screens, staff views, and approval steps with your team before writing heavy backend logic.',
          icon: 'layoutGrid',
        },
        {
          step: '03',
          title: 'Full-Stack Core Modules',
          desc: 'Building type-safe APIs, authentication, automated notifications, billing hooks, and role-based audit trails in weekly sprints.',
          icon: 'code',
        },
        {
          step: '04',
          title: 'Security & Data Migration',
          desc: 'Encrypted payload validation, OWASP security hygiene, automated testing, and clean import of legacy Excel/CSV records.',
          icon: 'shieldCheck',
        },
        {
          step: '05',
          title: 'Deployment & Team Onboarding',
          desc: 'Cloud deployment with backups, staff walkthrough training, technical documentation, and ongoing SLA support.',
          icon: 'rocket',
        },
      ],
    },
    advantages: {
      eyebrow: 'Operational Leverage',
      titlePrefix: 'Why Build Custom',
      titleItalic: 'Software',
      subtitle:
        'When off-the-shelf tools force staff to copy-paste between five apps, custom software pays for itself in saved payroll hours and fewer errors.',
      items: [
        {
          title: 'Built Around Your Rules',
          desc: 'Custom commissions, multi-branch approvals, Sri Lankan tax/VAT invoicing rules, or unique scheduling logic handled natively.',
          icon: 'settings',
        },
        {
          title: 'No Growing Per-User Fees',
          desc: 'Onboard 5 or 500 team members without paying USD per-seat SaaS markups every month as your company scales.',
          icon: 'trendUp',
        },
        {
          title: 'Unified Single Source of Truth',
          desc: 'Connect leads, quotations, invoices, inventory, WhatsApp notifications, and executive dashboards in one clean interface.',
          icon: 'server',
        },
        {
          title: 'Enterprise Security & Backups',
          desc: 'Scoped role permissions, audit logs, HTTPS encryption, and automated daily cloud database backups protect sensitive company data.',
          icon: 'lock',
        },
      ],
    },
    techStack: {
      eyebrow: 'Engineering Stack',
      titlePrefix: 'Full-Stack Software',
      titleItalic: 'Architecture',
      subtitle:
        'We choose modern open-source technologies your team owns completely with clear deployment portability.',
      items: [
        'TypeScript / Node.js',
        'Next.js Full-Stack',
        'PostgreSQL',
        'Prisma ORM',
        'Supabase / Auth',
        'REST & GraphQL APIs',
        'Automated PDF Invoicing',
        'WhatsApp & Email Webhooks',
        'Multi-Tenant SaaS Auth',
        'Role-Based Access Control',
        'AWS / Docker / Vercel',
        'Automated Daily Backups',
      ],
    },
    featuredWork: {
      sectionId: 'featured-work',
      eyebrow: 'Systems in Action',
      titlePrefix: 'Software &',
      titleItalic: 'Platforms',
      studies: [
        {
          client: 'Catalyst Digital',
          category: 'B2B Platform & Lead Workflows',
          title: 'End-to-End Automated Lead Qualification & CRM Routing Engine',
          metrics: [
            { lbl: 'Manual Hours Saved', val: '40 hrs/wk' },
            { lbl: 'Inbound Leads', val: '+180%' },
            { lbl: 'Web Vitals', val: '100%' },
          ],
          image: '/images/hero-workspace.jpg',
          link: '/work/catalyst-digital',
        },
        {
          client: 'Chill Co.',
          category: 'Custom Storefront + Loyalty Engine',
          title: 'Real-Time Stock Reservation & Affiliate Tracking Architecture',
          metrics: [
            { lbl: 'Uptime', val: '99.99%' },
            { lbl: 'Mobile Checkouts', val: '+85%' },
            { lbl: 'Response Time', val: '1.1s' },
          ],
          image: '/images/case-chill-co.jpg',
          link: '/work/chill-co',
        },
      ],
    },
    relatedGuides: [
      {
        tag: 'Software Decision Guide',
        title: 'Custom Software vs Ready-Made Software: How to Decide',
        description: 'When spreadsheets and off-the-shelf SaaS cost more than building your own system.',
        href: '/blog/custom-software-vs-ready-made-software',
      },
      {
        tag: 'Efficiency Guide',
        title: 'How to Automate Your Business Using AI',
        description: 'Combining custom CRM workflows with practical AI document and support automation.',
        href: '/blog/how-to-automate-your-business-with-ai',
      },
    ],
    faq: {
      eyebrow: 'Custom Software FAQ',
      items: [
        {
          q: 'When should a business build a custom CRM instead of buying HubSpot or Zoho?',
          a: 'Off-the-shelf CRMs are great when your sales process fits standard stages. Build custom when you need industry-specific quoting calculators, branch/inventory logic, custom customer portals, or want to stop paying rising per-user USD SaaS fees.',
        },
        {
          q: 'Do we own the source code and data when Swift Stack Digital builds our software?',
          a: 'Yes. Upon final payment, you receive full ownership of your custom repository, database schema, and business data with zero proprietary agency lock-in.',
        },
        {
          q: 'Can you connect new custom software to our existing accounting or POS tools?',
          a: 'Yes. As long as your current tool exposes APIs, webhooks, or structured exports, we build reliable sync bridges to keep finance, inventory, and reporting aligned.',
        },
        {
          q: 'What does an MVP or initial internal portal typically cost?',
          a: 'Focused internal portals and lightweight custom CRMs typically start around LKR 150,000–250,000+, depending on modules and integrations. We scope an MVP milestone plan first so you launch quickly without overbuilding.',
        },
      ],
    },
    cta: {
      eyebrow: 'Build Your System',
      titlePrefix: 'Have a workflow spreadsheets',
      titleItalic: 'can no longer handle?',
      subtitle:
        'Walk us through your operational bottleneck—we will design a clear MVP architecture and honest budget estimate.',
      buttonLabel: 'Book Software Consultation',
    },
  },

  'seo-services': {
    slug: 'seo-services',
    breadcrumbLabel: 'SEO & Core Web Vitals',
    metaTitle: 'SEO Services Sri Lanka & Core Web Vitals Optimization',
    metaDescription:
      'Data-driven SEO services in Sri Lanka plus technical Core Web Vitals optimization. Fix indexing issues, rank for commercial Sri Lankan buyer searches, and turn traffic into enquiries.',
    serviceSchemaName: 'SEO Services Sri Lanka',
    serviceType: 'Technical SEO, Search Strategy & Web Performance Optimization',
    quoteServiceDefault: 'SEO services',
    hero: {
      eyebrow: 'Search Visibility & Speed Engineering',
      titlePrefix: 'SEO Services',
      titleItalic: 'Sri Lanka',
      subtitle:
        'Get your business found by buyers actively searching for your products and services on Google—backed by technical SEO fixes, high-intent service content, and Core Web Vitals optimization.',
      primaryCtaLabel: 'Request Free SEO Audit',
      secondaryCtaLabel: 'See Speed & Growth Proof',
      secondaryCtaHref: '#featured-work',
      metrics: [
        { val: '100/100', lbl: 'Technical SEO Cleanliness' },
        { val: '< 1.0s', lbl: 'Core Web Vitals Target' },
        { val: 'Commercial', lbl: 'Buyer-Intent Keywords' },
        { val: 'GA4 + GSC', lbl: 'Enquiry Attribution' },
      ],
      banner: {
        image: '/images/performance-optimization.jpg',
        alt: 'Technical SEO audit and Google Core Web Vitals speed optimization metrics',
        eyebrow: 'Technical + Commercial SEO',
        title: 'From Zero Search Impressions to Qualified Enquiries',
        badges: ['Search Console Recovery', 'Mobile Core Web Vitals', 'Schema Markup'],
      },
    },
    workflow: {
      eyebrow: 'How We Recover & Grow Rankings',
      titlePrefix: 'Our 5-Stage',
      titleItalic: 'SEO System',
      subtitle:
        'Vanity scores don’t pay the bills. We combine crawl diagnostics, buyer keyword pages, and conversion tracking so SEO brings real leads.',
      steps: [
        {
          step: '01',
          title: 'Search Console & Crawl Audit',
          desc: 'Identifying canonical mismatches, missing sitemaps, client-side rendering blocks, duplicate titles, and Core Web Vitals bottlenecks.',
          icon: 'fileText',
        },
        {
          step: '02',
          title: 'Commercial Keyword Architecture',
          desc: 'Mapping high-intent Sri Lankan & niche commercial search terms onto dedicated service landing pages instead of stuffing one homepage.',
          icon: 'layers',
        },
        {
          step: '03',
          title: 'Speed & On-Page Engineering',
          desc: 'Eliminating LCP splash delays, oversized images, and render-blocking resources while implementing structured H1s and JSON-LD schema.',
          icon: 'code',
        },
        {
          step: '04',
          title: 'Buyer Content & Internal Links',
          desc: 'Publishing people-first cost, comparison, and how-to articles that answer customer questions before they choose a vendor.',
          icon: 'globe',
        },
        {
          step: '05',
          title: 'Conversion Tracking & Iteration',
          desc: 'Measuring GSC clicks, impressions, phone/WhatsApp taps, and form submissions to refine pages driving actual revenue.',
          icon: 'activity',
        },
      ],
    },
    advantages: {
      eyebrow: 'Developer-Grade SEO',
      titlePrefix: 'Real Code Fixes,',
      titleItalic: 'Not Generic Plugins',
      subtitle:
        'Many agencies only run automated reports. Because we are full-stack engineers, we fix technical bottlenecks directly in code.',
      items: [
        {
          title: 'Targeted Buyer Traffic',
          desc: 'We prioritize high-intent local and commercial keywords rather than broad vanity terms with zero buying likelihood.',
          icon: 'search',
        },
        {
          title: 'Mobile Core Web Vitals',
          desc: 'Sub-second LCP, crisp responsive imagery, and low script weight lower bounce rates on mobile 4G networks across Sri Lanka.',
          icon: 'chevronsRight',
        },
        {
          title: 'Verified Structured Data',
          desc: 'Clean Organization, Service, BreadcrumbList, FAQPage, and Article JSON-LD helps Google understand every page accurately.',
          icon: 'server',
        },
        {
          title: 'Conversion-Focused Landing Pages',
          desc: 'Every ranking page feeds directly into clear consultation CTAs, WhatsApp messaging, and project quote funnels.',
          icon: 'trendUpAlt',
        },
      ],
    },
    techStack: {
      eyebrow: 'SEO & Speed Toolkit',
      titlePrefix: 'Auditing & Optimization',
      titleItalic: 'Capabilities',
      subtitle:
        'Combining Google first-party search data with modern rendering and edge delivery.',
      items: [
        'Google Search Console Audits',
        'GA4 Lead & Event Tracking',
        'Next.js SSR / Static Indexing',
        'Canonical & 308 Redirect Hygiene',
        'XML Sitemap Automation',
        'Core Web Vitals (LCP / INP / CLS)',
        'JSON-LD Schema Architecture',
        'Commercial Keyword Mapping',
        'Internal Link Hubs',
        'AVIF / WebP Image Pipelines',
        'PageSpeed Mobile Tuning',
        'Rich Results Validation',
      ],
    },
    featuredWork: {
      sectionId: 'featured-work',
      eyebrow: 'Performance & Search Results',
      titlePrefix: 'Speed & Visibility',
      titleItalic: 'Case Studies',
      studies: [
        {
          client: 'Prana Fuel',
          category: 'Speed & Launch Performance',
          title: 'Sub-Second Product Web App Driving Stronger Ad & Search Engagement',
          metrics: [
            { lbl: 'Load Time', val: '< 1.0s' },
            { lbl: 'Engagement', val: '+210%' },
            { lbl: 'Paid Ad ROI', val: '4.8x' },
          ],
          image: '/images/case-prana-fuel.jpg',
          link: '/work/prana-fuel',
        },
        {
          client: 'Ceylon Naturalist',
          category: 'Storefront Conversion & Speed',
          title: 'Reducing Mobile Bounce Rates and Increasing Organic Checkout Value',
          metrics: [
            { lbl: 'Conversion Lift', val: '+150%' },
            { lbl: 'Bounce Drop', val: '-40%' },
            { lbl: 'Order Value', val: '2.5x' },
          ],
          image: '/images/case-ceylon-naturalist.jpg',
          link: '/work/ceylon-naturalist',
        },
      ],
    },
    relatedGuides: [
      {
        tag: 'Digital Growth',
        title: 'Why Your Business Needs a Professional Website (Beyond Social Media)',
        description: 'Why Google search capture creates compounding inbound leads compared to social posts alone.',
        href: '/blog/why-your-business-needs-a-professional-website',
      },
      {
        tag: 'Tech Stack & SEO',
        title: 'WordPress vs Custom Website: Which Is Better for SEO & Speed?',
        description: 'How clean server rendering and Core Web Vitals shape search visibility in 2026.',
        href: '/blog/wordpress-vs-custom-website-sri-lanka',
      },
    ],
    faq: {
      eyebrow: 'SEO & Performance FAQ',
      items: [
        {
          q: 'How long does SEO take to show real results in Sri Lanka?',
          a: 'Technical fixes (canonicals, sitemaps, indexing errors, Core Web Vitals) show in Search Console within weeks. Meaningful organic ranking and lead growth from new commercial pages and buyer content typically compounds over 3 to 6 months.',
        },
        {
          q: 'Can you optimize Core Web Vitals and PageSpeed on our existing site?',
          a: 'Yes. We audit JavaScript bundles, render-blocking fonts/CSS, oversized images, splash loaders, and server caching to fix mobile LCP, INP, and CLS without needing an unnecessary ground-up rebuild when the core stack is solid.',
        },
        {
          q: 'Why wasn’t our site showing up on Google before?',
          a: 'Common culprits include www vs non-www canonical confusion, client-only SPAs hiding text from initial HTML, overly broad keywords without dedicated service pages, missing Search Console sitemaps, and very few authoritative external links.',
        },
        {
          q: 'Do you track enquiries and WhatsApp clicks so we can see ROI?',
          a: 'Yes. We configure GA4 lead events (`generate_lead`, WhatsApp/phone clicks) alongside Google Search Console query tracking so you measure enquiries—not just raw pageviews.',
        },
      ],
    },
    cta: {
      eyebrow: 'Fix Your Visibility',
      titlePrefix: 'Not showing up when Sri Lankan',
      titleItalic: 'buyers search Google?',
      subtitle:
        'Send us your website URL for a practical technical SEO, speed, and conversion audit with zero fluff.',
      buttonLabel: 'Request Free SEO Audit',
    },
  },

  'ai-automation': {
    slug: 'ai-automation',
    breadcrumbLabel: 'AI Automation Services',
    metaTitle: 'AI Automation Services Sri Lanka | Business Workflows & Agents',
    metaDescription:
      'Practical AI automation services in Sri Lanka. Custom WhatsApp & web support agents, automated lead qualification, document parsing, and CRM workflow pipelines.',
    serviceSchemaName: 'AI Automation Services Sri Lanka',
    serviceType: 'Business Workflow Automation & Custom AI Agents',
    quoteServiceDefault: 'AI automation',
    hero: {
      eyebrow: 'Practical Business Automation',
      titlePrefix: 'AI Automation',
      titleItalic: 'Services',
      subtitle:
        'Cut through the AI hype with workflows that actually save hours every week—custom customer support assistants, instant WhatsApp/web lead qualification, and automated CRM & invoice pipelines.',
      primaryCtaLabel: 'Automate a Workflow',
      secondaryCtaLabel: 'Explore Use Cases',
      secondaryCtaHref: '#featured-work',
      metrics: [
        { val: '24/7', lbl: 'Lead Response Speed' },
        { val: '40+ hrs', lbl: 'Manual Admin Saved' },
        { val: 'WhatsApp', lbl: 'Web & CRM Connected' },
        { val: 'Grounded', lbl: 'Zero Hallucination Rules' },
      ],
      banner: {
        image: '/hero-software.png',
        alt: 'Practical AI automation workflows and CRM assistant architecture',
        eyebrow: 'ROI-Focused AI Systems',
        title: 'Automated Lead Triage, Support Agents & Back-Office Ops',
        badges: ['WhatsApp / Web Agents', 'RAG Knowledge Base', 'Webhook Pipelines'],
      },
    },
    workflow: {
      eyebrow: 'Safe & Measurable AI',
      titlePrefix: 'How We Deploy',
      titleItalic: 'AI Workflows',
      subtitle:
        'We start with high-frequency repetitive bottlenecks and enforce guardrails so AI assists staff reliably without inventing prices or policies.',
      steps: [
        {
          step: '01',
          title: 'Bottleneck & ROI Audit',
          desc: 'Identifying where teams lose time copying leads, answering repetitive WhatsApp FAQs, or summarizing PDFs/invoices.',
          icon: 'search',
        },
        {
          step: '02',
          title: 'Knowledge & Guardrail Design',
          desc: 'Structuring approved pricing sheets, FAQs, and escalation rules so the assistant knows when to hand off to a human.',
          icon: 'layoutGrid',
        },
        {
          step: '03',
          title: 'API & Webhook Engineering',
          desc: 'Connecting LLMs directly to your website chat, email inbox, Google Sheets, Notion, or custom CRM safely.',
          icon: 'code',
        },
        {
          step: '04',
          title: 'Accuracy & Safety Testing',
          desc: 'Running real-world test transcripts to verify tone, factual grounding, PII protection, and graceful fallbacks.',
          icon: 'shieldCheck',
        },
        {
          step: '05',
          title: 'Monitoring & Tuning',
          desc: 'Tracking conversation completion rates, response latency, and human handoffs so workflows improve continuously.',
          icon: 'rocket',
        },
      ],
    },
    advantages: {
      eyebrow: 'Real Operational Impact',
      titlePrefix: 'Built for SMEs &',
      titleItalic: 'Growing Teams',
      subtitle:
        'You don’t need a massive enterprise budget to automate repetitive customer triage and back-office admin.',
      items: [
        {
          title: 'Instant Lead Qualification',
          desc: 'Capture service needs, budget range, and timeline automatically instead of letting hot inquiries go cold overnight.',
          icon: 'zap',
        },
        {
          title: 'Trained on Your Real Docs',
          desc: 'Retrieval-augmented workflows pull directly from your approved product catalogs, SLAs, and booking policies.',
          icon: 'lock',
        },
        {
          title: 'Zero Manual Copy-Pasting',
          desc: 'Automatically log summarized leads, create follow-up reminders, and route notifications to the right team member.',
          icon: 'settings',
        },
        {
          title: 'Human-in-the-Loop Safety',
          desc: 'Sensitive quotations, complaints, or edge cases escalate immediately to your staff with a clean summary.',
          icon: 'trendUp',
        },
      ],
    },
    techStack: {
      eyebrow: 'Automation Stack',
      titlePrefix: 'AI & Integration',
      titleItalic: 'Tooling',
      subtitle:
        'Combining dependable LLM APIs with deterministic TypeScript workflows and webhooks.',
      items: [
        'OpenAI & Gemini APIs',
        'RAG Knowledge Search',
        'WhatsApp Business Cloud API',
        'Custom Web Lead Chatbots',
        'n8n / Node.js Orchestration',
        'Email & PDF Extraction',
        'HubSpot / Custom CRM Sync',
        'Google Workspace Automation',
        'Structured JSON Outputs',
        'Human Handoff Routing',
      ],
    },
    featuredWork: {
      sectionId: 'featured-work',
      eyebrow: 'Automation in Production',
      titlePrefix: 'Workflow',
      titleItalic: 'Outcomes',
      studies: [
        {
          client: 'Catalyst Digital',
          category: 'Lead Qualification Automation',
          title: 'Automated B2B Lead Scoring, Enrichment & Follow-Up Pipeline',
          metrics: [
            { lbl: 'Time Saved', val: '40 hrs/wk' },
            { lbl: 'Inbound Leads', val: '+180%' },
            { lbl: 'First Reply', val: '< 2 min' },
          ],
          image: '/images/hero-workspace.jpg',
          link: '/work/catalyst-digital',
        },
        {
          client: 'Chill Co.',
          category: 'Automated Store Operations',
          title: 'Low-Friction Order Flows & Stock Alert Automation for Drop Retail',
          metrics: [
            { lbl: 'Drop Uptime', val: '99.99%' },
            { lbl: 'Mobile Checkouts', val: '+85%' },
            { lbl: 'Page Speed', val: '1.1s' },
          ],
          image: '/images/case-chill-co.jpg',
          link: '/work/chill-co',
        },
      ],
    },
    relatedGuides: [
      {
        tag: 'AI Playbook',
        title: 'How to Automate Your Business Using AI',
        description: 'High-ROI automation examples for Sri Lankan service businesses and e-commerce teams.',
        href: '/blog/how-to-automate-your-business-with-ai',
      },
      {
        tag: 'Systems Guide',
        title: 'Custom Software vs Ready-Made Software: How to Decide',
        description: 'Understanding when custom workflow pipelines beat disconnected SaaS subscriptions.',
        href: '/blog/custom-software-vs-ready-made-software',
      },
    ],
    faq: {
      eyebrow: 'AI Automation FAQ',
      items: [
        {
          q: 'What are the highest-ROI ways a Sri Lankan business can start with AI?',
          a: 'The quickest wins are automating first-response customer FAQs and quote pre-qualification on your website or WhatsApp, summarizing inbound inquiries into structured CRM cards, and extracting invoice or order PDFs into spreadsheets.',
        },
        {
          q: 'How do you stop an AI chatbot from making up fake prices or promises?',
          a: 'We separate deterministic business data (exact prices, stock counts, booking slots) from language generation using strict structured outputs, retrieval from approved docs only, and mandatory human escalation for custom quotes.',
        },
        {
          q: 'Can you integrate automation with WhatsApp and our existing Gmail/CRM?',
          a: 'Yes. We wire Official WhatsApp Business API webhooks, Gmail/SMTP alerts, Google Sheets, Slack, or custom PostgreSQL dashboards together reliably.',
        },
        {
          q: 'Are there ongoing API usage costs?',
          a: 'Yes, LLM tokens carry modest pay-per-use API costs (often only a few dollars per month for SME chat volumes), and you pay those directly on your own API account with zero hidden agency markup.',
        },
      ],
    },
    cta: {
      eyebrow: 'Save Weekly Hours',
      titlePrefix: 'Ready to automate repetitive',
      titleItalic: 'admin & lead triage?',
      subtitle:
        'Describe one manual workflow slowing down your team—we will map a practical automation prototype and cost.',
      buttonLabel: 'Discuss AI Automation',
    },
  },

  'ui-ux-design': {
    slug: 'ui-ux-design',
    breadcrumbLabel: 'UI/UX Design',
    metaTitle: 'UI/UX & Website Design Sri Lanka | Conversion-Focused Systems',
    metaDescription:
      'Modern UI/UX and website design in Sri Lanka. Clear messaging, trustworthy brand presentation, Figma design systems, and WCAG-accessible interfaces built to convert.',
    serviceSchemaName: 'UI/UX & Website Design Sri Lanka',
    serviceType: 'UI/UX Design & Digital Product Interface Design',
    quoteServiceDefault: 'UI/UX redesign',
    hero: {
      eyebrow: 'Clarity & Conversion Design',
      titlePrefix: 'Website & UI/UX',
      titleItalic: 'Design',
      subtitle:
        'Transform confusing or dated interfaces into clear, credible digital experiences engineered to earn visitor trust in the first 5 seconds and guide users smoothly to enquiry.',
      primaryCtaLabel: 'Start a Design Project',
      secondaryCtaLabel: 'Explore Design Portfolio',
      secondaryCtaHref: '#design-work',
      metrics: [
        { val: '3.5x', lbl: 'Average Session Duration' },
        { val: '+180%', lbl: 'Inbound Lead Velocity' },
        { val: 'WCAG AA', lbl: 'Accessible Contrast' },
        { val: 'Figma -> Code', lbl: 'Clean Dev Handoff' },
      ],
      banner: {
        image: '/images/ui-ux-design.jpg',
        alt: 'UI/UX design system and high-converting responsive web design',
        eyebrow: 'Design Philosophy',
        title: 'Clear Hierarchy, Fast Comprehension & Frictionless Funnels',
        badges: ['Figma System', 'Mobile First', 'Conversion Copy'],
      },
    },
    workflow: {
      eyebrow: 'Human-Centered Process',
      titlePrefix: 'Our Product Design',
      titleItalic: 'Blueprint',
      subtitle:
        'Good design answers three visitor questions immediately: what do you do, why trust you, and how do they get started.',
      steps: [
        {
          step: '01',
          title: 'UX Audit & Buyer Discovery',
          desc: 'Reviewing where visitors currently drop off, clarifying buyer objections, and benchmarking market competitors.',
          icon: 'search',
        },
        {
          step: '02',
          title: 'Funnel Wireframes & Messaging',
          desc: 'Structuring above-the-fold clarity, clear offers, quotation flows, and mobile navigation before visual polish.',
          icon: 'layoutGrid',
        },
        {
          step: '03',
          title: 'High-Fidelity Visual System',
          desc: 'Applying balanced typography, refined surface hierarchy, and brand personality tuned for desktop and smartphone viewports.',
          icon: 'starOutline',
        },
        {
          step: '04',
          title: 'Interactive Prototypes',
          desc: 'Walkthrough prototypes for multi-step forms, cart drawers, dashboards, and mobile interactions before engineering begins.',
          icon: 'play',
        },
        {
          step: '05',
          title: 'Design System & Handoff',
          desc: 'Reusable Figma tokens, accessible states, and either clean handoff or direct React/Next.js implementation by our engineers.',
          icon: 'clipboard',
        },
      ],
    },
    advantages: {
      eyebrow: 'Design That Converts',
      titlePrefix: 'Clarity Beats',
      titleItalic: 'Visual Clutter',
      subtitle:
        'Great design is an investment in revenue—making complex technical offers easy to understand and effortless to act on.',
      items: [
        {
          title: '5-Second Clarity',
          desc: 'Visitors immediately see who you help, what problem you solve, and the quickest path to request a quotation.',
          icon: 'heart',
        },
        {
          title: 'Higher Credibility & Trust',
          desc: 'Cohesive typography, real case studies, and clean spacing signal an established agency buyers feel safe hiring.',
          icon: 'star',
        },
        {
          title: 'WCAG 2.1 AA Ergonomics',
          desc: 'Readable font sizes, verified color contrast, keyboard focus rings, and thumb-friendly 44px+ touch targets on mobile.',
          icon: 'alertCircle',
        },
        {
          title: 'Frictionless Lead Funnels',
          desc: 'Guided project selectors and mobile WhatsApp entry points eliminate long, intimidating contact forms.',
          icon: 'trendUpAlt',
        },
      ],
    },
    techStack: {
      eyebrow: 'Design System Toolkit',
      titlePrefix: 'Our Design',
      titleItalic: 'Capabilities',
      subtitle:
        'Every interface is designed alongside frontend engineers so pixels translate faithfully without bloated CSS.',
      items: [
        'Figma Component Libraries',
        'Design Tokens & Grid Systems',
        'Conversion Rate UX Audits',
        'Mobile-First Prototyping',
        'WCAG 2.1 AA Accessibility',
        'E-Commerce Cart & Checkout UX',
        'SaaS Dashboard Flows',
        'Interactive Micro-States',
        'Messaging Hierarchy',
        'Next.js Production Handoff',
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
          category: 'B2B Brand & Interface',
          title: 'Bespoke Visual Language & Lead-Focused B2B Experience',
          metrics: [
            { lbl: 'Session Duration', val: '3.5x' },
            { lbl: 'Inbound Leads', val: '+180%' },
            { lbl: 'Web Vitals', val: '100%' },
          ],
          image: '/images/hero-workspace.jpg',
          link: '/work/catalyst-digital',
        },
        {
          client: 'Chill Co.',
          category: 'Mobile Commerce UX',
          title: 'Editorial Apparel Experience & Frictionless CartDrawer UI',
          metrics: [
            { lbl: 'Mobile Checkouts', val: '+85%' },
            { lbl: 'Uptime', val: '99.99%' },
            { lbl: 'Load Speed', val: '1.1s' },
          ],
          image: '/images/case-chill-co.jpg',
          link: '/work/chill-co',
        },
      ],
    },
    relatedGuides: [
      {
        tag: 'Business Impact',
        title: 'Why Your Business Needs a Professional Website',
        description: 'How professional design signals reliability and lifts visitor-to-lead conversion.',
        href: '/blog/why-your-business-needs-a-professional-website',
      },
      {
        tag: 'Investment Guide',
        title: 'How Much Does a Website Cost in Sri Lanka in 2026?',
        description: 'Comparing template customizations vs custom UI/UX and engineered web builds.',
        href: '/blog/website-cost-in-sri-lanka-2026',
      },
    ],
    faq: {
      eyebrow: 'Design FAQ',
      items: [
        {
          q: 'Do you deliver Figma files only or also build the website/app?',
          a: 'Both! We can deliver complete Figma design systems for your internal dev team, or design and build the entire responsive application in Next.js/React end-to-end.',
        },
        {
          q: 'Can you redesign our outdated website without losing existing Google links?',
          a: 'Yes. We audit existing URLs, preserve ranking content, and configure permanent 308/301 redirects for any changed slugs so your redesign lifts conversion without breaking SEO.',
        },
        {
          q: 'How do you make sure the design converts mobile visitors too?',
          a: 'Most Sri Lankan business traffic visits on smartphones. We design mobile layouts first—verifying readable text without zoom, clean thumb targets, and fast hero loading.',
        },
        {
          q: 'How many revision rounds are included?',
          a: 'We share interactive Figma checkpoints in iterative weekly sprints so feedback is incorporated continuously before final handoff or engineering.',
        },
      ],
    },
    cta: {
      eyebrow: 'Upgrade Your Brand UX',
      titlePrefix: 'Ready for a website visitors',
      titleItalic: 'instantly trust?',
      subtitle:
        'Share your current website or product idea—we will audit clarity blockers and propose a clean redesign plan.',
      buttonLabel: 'Book Design Consultation',
    },
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICES_BY_SLUG);
