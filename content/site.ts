export const locales = ['en', 'de', 'ru'] as const;
export type Locale = typeof locales[number];
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

// All owner-editable settings live here; translated copy lives in locales/*.json.
export const site = {
  name: 'Ruslan Reshetniak',
  initials: 'RR',
  email: 'reshetnyakrm@gmail.com',
  origin: process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'https://your-domain.example'),
  defaultLocale: 'en' as Locale,
  indexable: process.env.NEXT_PUBLIC_SITE_INDEXABLE === 'true', // Keep false until the legal pages are completed and public launch is approved.
  photo: { src: '', alt: 'Ruslan Reshetniak' }, // Local file in public/, e.g. /portrait.webp
  social: { linkedin: '', github: '', portfolio: '' },
  services: [
    { id: 'consulting', icon: 'compass', enabled: true },
    { id: 'quality', icon: 'shield', enabled: true },
    { id: 'automation', icon: 'workflow', enabled: true },
    { id: 'development', icon: 'code', enabled: true },
    { id: 'ai', icon: 'sparkles', enabled: true },
    { id: 'sap', icon: 'layers', enabled: true },
  ],
  skills: [
    { id: 'engineering', tags: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML & CSS'] },
    { id: 'quality', tags: ['Playwright', 'API Testing', 'Postman', 'Selenium', 'E2E'] },
    { id: 'delivery', tags: ['GitLab CI/CD', 'GitHub', 'Jenkins', 'Docker'] },
    { id: 'enterprise', tags: ['SAP Fiori / UI5', 'OData', 'SAP Gateway', 'SAP BTP / CAP¹'] },
    { id: 'ai', tags: ['AI-assisted testing', 'TypeScript', 'Python'] },
    { id: 'tools', tags: ['VS Code', 'Jira', 'Zephyr', 'Git'] },
  ],
  experience: [
    { id: 'engineering', period: '2023 — 2026' },
    { id: 'consulting', period: '2022 — 2023' },
    { id: 'foundation', period: '2017 — 2022' },
  ],
  projects: { enabled: false, items: [] as Array<{ id: string; tags: string[]; url?: string }> },
  legal: {
    // Deliberately empty: supply real details and obtain a content review before public launch.
    address: '',
    registration: '',
    vatId: '',
    privacyContact: '',
    hostingDetails: '',
  },
};
