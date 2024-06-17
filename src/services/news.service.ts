"use server";

import {BaseService} from "@/services/base-service";
import {NewsSearch} from "@/types/news-search.type";


export const getTopHeadlines = async () => {
    return {
        status: "ok",
        code: 200,
        message: "ok",
        totalResults: 3,
        articles: [
            {
                source: {
                    id: "1",
                    name: "source"
                },
                author: "author",
                title: "title 1",
                description: "description",
                url: "url",
                urlToImage: "https://picsum.photos/id/2/400/400",
                publishedAt: "publishedAt",
                content: "content"
            },
            {
                source: {
                    id: "1",
                    name: "source"
                },
                author: "author",
                title: "title 2",
                description: "description",
                url: "url",
                urlToImage: "https://picsum.photos/id/2/400/400",
                publishedAt: "publishedAt",
                content: "content"
            },
            {
                source: {
                    id: "1",
                    name: "source"
                },
                author: "author",
                title: "title 3",
                description: "description",
                url: "url",
                urlToImage: "https://picsum.photos/id/2/400/400",
                publishedAt: "publishedAt",
                content: "content"
            }
        ]
    };
}

export const getSearchInTopHeadlinesByTitle = async (title: string) => {
    return await NewsService.getSearchInTopHeadlinesByTitle(title);
}


class NewsService extends BaseService {

    private static apiURL = "https://newsapi.org/v2";
    private static apiKey?: string = process.env.API_KEY;

    public static async getTopHeadlines(): Promise<NewsSearch> {
        let params = {
            "country": "us",
            "pageSize": 5,
            "apiKey": this.apiKey
        };
        let url = new URL(this.apiURL + "/top-headlines");

        return await this.get<NewsSearch>(url, params);
    }

    public static async getSearchInTopHeadlinesByTitle(title: string): Promise<NewsSearch> {
        let params = {
            "q": title,
            "searchIn": "title",
            "country": "us",
            "pageSize": 5,
            "apiKey": this.apiKey
        };
        let url = new URL(this.apiURL + "/top-headlines");

        return await this.get<NewsSearch>(url, params);
    }
}