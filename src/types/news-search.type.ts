import {z} from "zod";
import {NewsArticle} from "@/types/news-article.type";

export const NewsSearch = z.object({
    status: z.union([z.literal('ok'), z.literal('error')]),
    code: z.optional(z.number()),
    message: z.optional(z.string()),
    totalResults: z.optional(z.number()),
    articles: z.optional(z.array(NewsArticle))
})

export type NewsSearch = z.infer<typeof NewsSearch>