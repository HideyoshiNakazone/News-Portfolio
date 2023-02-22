import { ISearch } from "@/interface/search.interface";
import { BaseService } from "./baseService";


export class NewsService extends BaseService {

    apiUrl = "https://newsapi.org/v2";
    apiKey?: string = process.env.API_KEY;

    public async getTopHeadlines(): Promise<ISearch> {
        let params = {
            "country": "us",
            "pageSize": 5,
            "apiKey": this.apiKey
        };
        let url = new URL(this.apiUrl + "/top-headlines");

        return await this.get<ISearch>(url, params);
    }

};