export const SITE_URL = 'https://www.swiftstack.digital';
export const SITE_NAME = 'Swift Stack Digital';
export const SITE_TAGLINE = 'Custom Websites · E-Commerce · Custom Software · SEO · AI Automation';
export const DEFAULT_SOCIAL_IMAGES = [
  {
    url: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: 'Swift Stack Digital — Web Development, E-Commerce, Custom Software & SEO Agency in Sri Lanka',
  },
];
export const SITE_EMAIL = 'contact@swiftstack.digital';
export const SITE_PHONE_DISPLAY = '+94 75 8441413';
export const SITE_PHONE_E164 = '+94758441413';
export const WHATSAPP_NUMBER = '94758441413';

export const SERVICE_AREA_NAMES = [
  'Kiribathgoda',
  'Colombo',
  'Sri Lanka',
  'Worldwide',
] as const;

export const SITE_LOCATION_LABEL = 'Kiribathgoda & Colombo, Sri Lanka • Serving Clients Worldwide';

export function getWhatsAppUrl(
  message = "Hi Swift Stack Digital, I'd like to get a free website or software consultation."
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface NavServiceItem {
  slug: string;
  href: string;
  label: string;
  shortLabel: string;
  description: string;
}

export const PRIMARY_SERVICES: NavServiceItem[] = [
  {
    slug: 'web-development',
    href: '/web-development',
    label: 'Web Development',
    shortLabel: 'Web Development',
    description:
      'Custom Next.js & React websites and business web platforms engineered for speed, SEO, and conversions.',
  },
  {
    slug: 'ecommerce-development',
    href: '/ecommerce-development',
    label: 'E-Commerce Development',
    shortLabel: 'E-Commerce',
    description:
      'High-converting online stores with PayHere/Stripe payments, loyalty systems, and mobile-first checkout.',
  },
  {
    slug: 'custom-software',
    href: '/custom-software',
    label: 'Custom Software & CRM',
    shortLabel: 'Custom Software',
    description:
      'Tailored CRMs, internal portals, SaaS platforms, and ERP/API integrations built around your operations.',
  },
  {
    slug: 'seo-services',
    href: '/seo-services',
    label: 'SEO & Core Web Vitals',
    shortLabel: 'SEO Services',
    description:
      'Technical SEO, Core Web Vitals speed tuning, keyword architecture, and conversion tracking that wins searches.',
  },
  {
    slug: 'ai-automation',
    href: '/ai-automation',
    label: 'AI Automation Services',
    shortLabel: 'AI Automation',
    description:
      'Practical AI chatbots, automated lead qualification, and smart workflow pipelines that save manual hours.',
  },
  {
    slug: 'ui-ux-design',
    href: '/ui-ux-design',
    label: 'UI/UX & Product Design',
    shortLabel: 'UI/UX Design',
    description:
      'Conversion-engineered Figma design systems and modern interfaces designed for clarity and trust.',
  },
];

export const QUOTE_SERVICE_OPTIONS = [
  'Business website',
  'E-commerce website',
  'Custom software / CRM',
  'AI automation',
  'SEO services',
  'UI/UX redesign',
] as const;

export type QuoteServiceOption = (typeof QUOTE_SERVICE_OPTIONS)[number];
export type BudgetCurrency = 'LKR' | 'USD';

export const BUDGET_OPTIONS_LKR = [
  'Below LKR 50,000',
  'LKR 50,000–100,000',
  'LKR 100,000–250,000',
  'Above LKR 250,000',
] as const;

export const BUDGET_OPTIONS_USD = [
  'Under $500',
  '$500–$1,500',
  '$1,500–$5,000',
  'Above $5,000',
] as const;
