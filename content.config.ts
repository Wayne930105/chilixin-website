import { defineCollection, z } from '@nuxt/content'

export const collections = {
  services: defineCollection({
    type: 'page',
    source: 'services/*.md',
    schema: z.object({
      title: z.string(),
      titleEn: z.string().optional(),
      order: z.number().default(99),
      shortDescription: z.string(),
      coverImage: z.string().optional(),
      icon: z.string().optional(),
      industries: z.array(z.string()).optional(),
      featured: z.boolean().default(false),
    }),
  }),

  projects: defineCollection({
    type: 'page',
    source: 'projects/*.md',
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      clientIndustry: z.string().optional(),
      year: z.number().optional(),
      serviceType: z.string().optional(),
      duration: z.string().optional(),
      coverImage: z.string().optional(),
      gallery: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      featured: z.boolean().default(false),
    }),
  }),
}
