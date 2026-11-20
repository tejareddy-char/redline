import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const entries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/entries' }),
  schema: z.object({
    title: z.string(),
    situation: z.string(),
    category: z.enum(['clients', 'pricing', 'feedback', 'handoff', 'career']),
    tone: z.enum(['firm', 'friendly', 'neutral']).default('neutral'),
    script: z.string(),
    author: z.string().default('community'),
  }),
});

export const collections = { entries };
