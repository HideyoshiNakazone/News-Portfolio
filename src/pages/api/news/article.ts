import { NextApiRequest, NextApiResponse } from "next"

import { NewsService } from "@/service/newsService"


let newsService = new NewsService()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    let title = (req.query.title as string)

    if (title && title != "") {
        let search = await newsService.getSearchInTopHeadlinesByTitle(title)
        let articles = search.articles;
    
        if (articles && articles.length > 0) {
            res.status(200).json(articles[0])
        } else {
            res.status(200).json({})
        }
    } else {
        res.status(400).json({})
    }
}