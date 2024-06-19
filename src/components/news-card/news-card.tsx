import {NewsArticle} from "@/types/news-article.type";
import Link from "next/link";
import Image from "next/image";


type NewsCardProps = {
    article: NewsArticle;
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


const NewsCard = (props: NewsCardProps) => {
    let article = props.article


    return (
        <div className="flex max-w-[80%] mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex md:min-h-[400px] md:min-w-[80vw]">
                <div className="md:shrink-0">
                    {generateArticleImage(article)}
                </div>
                <div className="p-8 flex-col justify-around">
                    <h2 className="font-bold text-large mb-4">{article.title}</h2>
                    <p className="font-medium text-medium mb-2">{article.description}</p>
                    <span className="font-light text-small">{article.author}</span>
                    <div className="flex justify-center mt-14">
                        <button
                            className="bg-black hover:bg-zinc-950 text-white font-bold py-2 px-4 border border-white-700 rounded"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        >
                            <Link
                                href={{
                                    pathname: '/article',
                                    query: {
                                        title: article.title
                                    }
                                }}
                            >
                                Read More
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard;