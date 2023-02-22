import { IArticle } from "./article.interface";

export interface ISearch {
    status: "ok"|"error";
    code?: string;
    message?: string;
    totalResults?: number;
    articles?: Array<IArticle>
};