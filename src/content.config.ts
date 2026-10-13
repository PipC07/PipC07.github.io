
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writingSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().default(false),
});

const essays = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/essays",
  }),
  schema: writingSchema,
});

const fiction = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/fiction",
  }),
  schema: writingSchema,
});

const notes = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/notes",
  }),
  schema: writingSchema,
});

export const collections = { essays, fiction, notes };
