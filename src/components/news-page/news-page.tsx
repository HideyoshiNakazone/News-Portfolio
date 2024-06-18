'use client';

import {NewsArticle} from "@/types/news-article.type";
import styles from "@/components/news-card/news-card.module.css";
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
            <div className={styles.sliderImage}>
                <Image
                    src={article.urlToImage}
                    unoptimized={true}
                    alt="Article Image"
                    style={{objectFit:"cover"}}
                    priority={true}
                    sizes="
                        (max-width: 400px),
                        (max-width: 400px)
                    "
                    fill={true}

                />
            </div>
        )
    }

    return (
        <div className={styles.emptySliderImage}></div>
    )
}


const NewsPage = (props: NewsPageProps) => {
    const { data } = useQuery({
        queryKey: ['news', props.articleTitle],
        queryFn: async () => getFirstArticleFromSearchByTitle(
            props.articleTitle
        )
    })

    if (data === undefined) {
        throw new Error("No article found");
    }

    return (
        <div className={styles.sliderContainer}>
            {generateArticleImage(data)}
            <div className={styles.sliderBody}>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <span>{data.author}</span>
                <br/>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                >
                    <Link
                        href={{
                            pathname: '/',
                            query: {
                                title: data.title
                            }
                        }}
                    >
                        Return
                    </Link>
                </button>
            </div>
        </div>
    );
}


export default NewsPage;
;