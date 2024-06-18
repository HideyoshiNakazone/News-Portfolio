'use client';

import {NewsArticle} from "@/types/news-article.type";
import Link from "next/link";
import Image from "next/image";
import {useQuery} from "@tanstack/react-query";
import {getFirstArticleFromSearchByTitle} from "@/services/news-service-helper";

type NewsPageProps = {
    articleTitle: string;
}


const generateArticleImage = (article: NewsArticle) => {
    if (!!article.urlToImage) {
        return (
            <Image
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={article.urlToImage}
                alt="Article Image"
                unoptimized={true}
                width={400}
                height={400}
            />
        )
    }

    return (
        <div className="h-48 w-full object-cover md:h-full md:w-48"></div>
    )
}


const NewsPage = (props: NewsPageProps) => {
    const {data} = useQuery({
        queryKey: ['news', props.articleTitle],
        queryFn: async () => getFirstArticleFromSearchByTitle(
            props.articleTitle
        )
    })

    if (data === undefined) {
        throw new Error("No article found");
    }

    return (
        <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:shrink-0">
                    {generateArticleImage(data)}
                </div>
                <div className="p-8 flex-col justify-around">
                    <h2 className="font-bold text-large mb-4">{data.title}</h2>
                    <p className="font-medium text-medium mb-2">{data.description}</p>
                    <span className="font-light text-small">{data.author}</span>
                    <div className="flex justify-center mt-14">
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        >
                            <Link
                                href={{
                                    pathname: '/'
                                }}
                            >
                                Return
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default NewsPage;
;