import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const receitas = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/receitas" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        category: z.enum(['Aves', 'Peixes', 'Suínos', 'Bovinos', 'Vegetal', 'Doces']),
        time: z.string(),
        portions: z.string()
    })
});

export const collections = { receitas };
