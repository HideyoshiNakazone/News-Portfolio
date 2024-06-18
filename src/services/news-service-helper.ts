"use server";

import {NewsService} from "@/services/news.service";

export const getTopHeadlines = async () => {
    return await NewsService.getTopHeadlines();
}

export const getSearchInTopHeadlinesByTitle = async (title: string) => {
    return await NewsService.getSearchInTopHeadlinesByTitle(title);
}

export const getFirstArticleFromSearchByTitle = async (title: string) => {
    const newsSearch = await NewsService.getSearchInTopHeadlinesByTitle(title);

    if (!newsSearch.articles || newsSearch.articles.length === 0) {
        throw new Error("No articles found");
    }

    return newsSearch.articles[0];
}