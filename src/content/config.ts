import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  portfolio,
};
