import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/**
 * CMS-managed content (per design-handoff/spec/pages.md): blog posts, events,
 * testimonials, client logos, pricing. Kept as typed collections so a headless CMS
 * can replace the loaders later without touching page code.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Regulation', 'Scope 3', 'LCA', 'Trade', 'Events', 'Basics']),
    readTime: z.string(), // e.g. "7 min"
    date: z.string().optional(), // [ADD date] until real posts exist
    author: z.string().optional(),
    excerpt: z.string().optional(),
    cover: z.string().optional(), // image path; falls back to a placeholder
    order: z.number().default(100), // display order until real dates exist
    featured: z.boolean().default(false),
    draftPlaceholder: z.boolean().default(true), // true = illustrative title from the design
  }),
});

const clients = defineCollection({
  loader: file('./src/content/data/clients.json'),
  schema: z.object({ name: z.string(), src: z.string(), height: z.number() }),
});

const testimonials = defineCollection({
  loader: file('./src/content/data/testimonials.json'),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    role: z.string(),
    featured: z.boolean().default(false),
    page: z.array(z.string()).default([]),
  }),
});

const events = defineCollection({
  loader: file('./src/content/data/events.json'),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    city: z.string(),
    duration: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    summary: z.string(),
    stats: z.array(z.object({ label: z.string(), value: z.string(), unit: z.string().optional(), accent: z.boolean().optional() })),
    tags: z.array(z.string()),
    upcoming: z.boolean().default(false),
  }),
});

/** Pricing is a single document. ALL price values are placeholders (open item). */
const pricing = defineCollection({
  loader: file('./src/content/data/pricing.json'),
  schema: z.object({
    plans: z.array(z.object({
      name: z.string(), description: z.string(), price: z.string(), custom: z.boolean().default(false),
      cta: z.string(), popular: z.boolean().default(false), features: z.array(z.string()),
    })),
    compare: z.array(z.object({ feature: z.string(), essentials: z.string(), growth: z.string(), enterprise: z.string() })),
    addons: z.array(z.object({ title: z.string(), description: z.string() })),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
  }),
});

export const collections = { blog, clients, testimonials, events, pricing };
