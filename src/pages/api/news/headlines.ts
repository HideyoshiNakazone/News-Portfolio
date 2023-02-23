import { NextApiRequest, NextApiResponse } from "next"

import { NewsService } from "@/service/newsService"


let newsService = new NewsService()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let search = await newsService.getTopHeadlines()
    res.status(200).json(search)
}