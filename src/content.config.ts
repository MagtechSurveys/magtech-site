import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    services: z.array(z.string()),
    area: z.string(),
    year: z.number(),
    summary: z.string(),
  }),
});

export const collections = { caseStudies };
