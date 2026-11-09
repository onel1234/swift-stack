export interface HomeFaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const HOME_FAQS: HomeFaqItem[] = [
  {
    id: '01',
    category: 'Pricing & Estimates',
    question: 'How much does a website or web application cost in Sri Lanka?',
    answer:
      'A focused business website in Sri Lanka typically ranges between LKR 50,000 and LKR 180,000 depending on page depth, design scope, and integrations, while e-commerce online stores and custom software/CRM platforms usually range from LKR 120,000 to LKR 250,000+ (with equivalent USD milestones for international clients). Use our free quotation estimator above for a tailored range.',
  },
  {
    id: '02',
    category: 'Timeline & Delivery',
    question: 'How long does a typical website or software project take to launch?',
    answer:
      'Business websites usually launch in 2 to 4 weeks, while bespoke e-commerce stores and custom web applications launch in 3 to 6 weeks. We work in transparent 1-week sprints with live staging links so your team sees real progress every week.',
  },
  {
    id: '03',
    category: 'Architecture & Speed',
    question: 'Why choose custom Next.js development over WordPress templates?',
    answer:
      'Heavy template websites often suffer from bloated scripts, plugin conflicts, and sluggish mobile loading on Sri Lankan 4G connections. Custom Next.js applications deliver sub-second page transitions, strong Core Web Vitals, tight security, and clean server-rendered HTML that Googlebot reliably indexes.',
  },
  {
    id: '04',
    category: 'SEO & Lead Generation',
    question: 'How do you help our website rank on Google and generate real enquiries?',
    answer:
      'Technical speed alone is not enough. We combine crawl-ready HTML, canonical/sitemap hygiene, structured JSON-LD schema, dedicated commercial service pages targeting real buyer keywords, helpful buyer guides, clear quotation flows, WhatsApp shortcuts, and GA4 conversion tracking.',
  },
  {
    id: '05',
    category: 'AI & Automation',
    question: 'What practical AI automation can you add to an existing business?',
    answer:
      'We build grounded, measurable automations rather than gimmicks: 24/7 WhatsApp and web lead qualification assistants trained strictly on your approved pricing and FAQs, automated PDF/invoice extraction, and CRM routing workflows that save teams dozens of manual hours.',
  },
  {
    id: '06',
    category: 'Location & Support',
    question: 'Do you work only in Colombo, or across Sri Lanka and internationally?',
    answer:
      'We operate from Kiribathgoda & Colombo, Sri Lanka, serving Sri Lankan businesses islandwide as well as international founders and agencies globally. Every build includes post-launch handover, training, and optional ongoing SLA maintenance.',
  },
];
