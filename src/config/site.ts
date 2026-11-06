/**
 * Site-wide config. Anything marked ADD is an open item (see docs/OPEN-ITEMS.md):
 * the design shipped with placeholders and they must be supplied by ZERO, not invented.
 */
export const site = {
  name: 'ZERO',
  tagline: 'Sustainability Simplified',
  description: 'Carbon accounting, ESG reporting and product LCA in one platform.',
  contact: {
    email: '[ADD email]',
    phone: '[ADD phone]',
    address: '[ADD address]',
    responseDays: '[ADD X]',
  },
  social: {
    linkedin: '#', // TODO: add real URL
  },
  founder: { linkedin: '#', github: '#', email: '#' }, // TODO: add real URLs
  // Forms have no backend yet. Set PUBLIC_FORM_ENDPOINT (see .env.example) to POST submissions.
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined,
};

export const nav = [
  { label: 'Platform', href: '/platform' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Free tools', href: '/free-tools' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
] as const;
