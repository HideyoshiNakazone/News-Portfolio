import { IArticle } from "@/interface/article.interface";

import Image from "next/image"
import Link from "next/link";
import { stringify } from "querystring";
import React from "react";

import styles from "./news.module.css"


interface NewsProp {
    article: IArticle;
}

class News extends React.Component<NewsProp> {

    redirectToArticle() {

    }

    render(): React.ReactNode {
        let article = this.props.article

        return (
            <div className={styles.sliderContainer}>  
                <div className={styles.sliderImage}>
                    <Image
                        src={article.urlToImage} 
                        alt="Article Image"
                        style={{objectFit:"cover"}}
                        fill={true}
                    />
                </div>
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
                                query: stringify({
                                    title: article.title
                                })
                            }}
                        >
                            Read More
                        </Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default News;