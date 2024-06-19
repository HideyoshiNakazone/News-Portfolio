import {BaseService} from "@/services/base-service";
import {NewsSearch} from "@/types/news-search.type";


export class NewsService extends BaseService {

    private static apiURL = "https://newsapi.org/v2";
    private static apiKey?: string = process.env.API_KEY;

    private static MAX_RETRIES = 5;

    public static async getTopHeadlines(): Promise<NewsSearch> {
        let params = {
            "country": "us",
            "pageSize": 10,
            "page": 1,
            "apiKey": this.apiKey
        };
        let url = new URL(this.apiURL + "/top-headlines");

        let count = 0;
        try {
            const results = await NewsService.get<NewsSearch>(url, params);
            results.articles = results.articles?.filter(article => !!article.urlToImage);

            return results;
        } catch (e) {
            while (count <= NewsService.MAX_RETRIES) {
                try {
                    params.page += 1;
                    return await NewsService.get<NewsSearch>(url, params);
                } catch (e) {
                    console.log("Failed to fetch data, retrying... - " + count);
                    count++;
                }
            }
        }

        throw new Error("Failed to fetch data");
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

        return await NewsService.get<NewsSearch>(url, params);
    }
}


