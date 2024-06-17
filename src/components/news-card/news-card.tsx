import styles from "./news-card.module.css";
import {NewsArticle} from "@/types/news-article.type";
import Link from "next/link";
import Image from "next/image";


type NewsCardProps = {
    article: NewsArticle;
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


const NewsCard = (props: NewsCardProps) => {
    let article = props.article


    return (
        <div className={styles.sliderContainer}>
            {generateArticleImage(article)}
            <div className={styles.sliderBody}>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <span>{article.author}</span>
                <br/>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                >
                    <Link
                        href={{
                            pathname: '/articles',
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
    )
}

export default NewsCard;