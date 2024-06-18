import {z} from "zod";


export const Source = z.object({
    id: z.optional(z.string()),
    name: z.string()
})
export type Source = z.infer<typeof Source>

export const NewsArticle = z.object({
    source: Source,
    author: z.string(),
    title: z.string(),
    description: z.string(),
    url: z.string(),
    urlToImage: z.string(),
    publishedAt: z.string(),
    content: z.optional(z.string()),
})
export type NewsArticle = z.infer<typeof NewsArticle>