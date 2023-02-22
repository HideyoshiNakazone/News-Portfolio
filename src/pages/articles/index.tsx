import { IArticle } from "@/interface/article.interface";
import { NewsService } from "@/service/newsService";

import { stringify } from "querystring";
import Image from "next/image"
import Link from "next/link";
import React from "react";

import styles from "./articles.module.css"



export async function getServerSideProps(ctx: any) {
    const title: string = ctx.query.title

    let articles = (await (new NewsService())
                .getSearchInTopHeadlinesByTitle(title)).articles

    if (articles && articles.length > 0) {
        return {
            props: {
                article: articles[0]
            }
        }
    }

    return {
        props: {
            article: null
        }
    }
}

interface ArticleProp {
    article?: IArticle;
}
class ArticlePage extends React.Component<ArticleProp> {

    private article?: IArticle = this.props.article

    render(): React.ReactNode {
        if (this.article) {
            return (
                <div className={styles.sliderContainer}>  
                    <div className={styles.sliderImage}>
                        <Image
                            src={this.article.urlToImage} 
                            alt="Article Image"
                            style={{objectFit:"cover"}}
                            fill={true}
                        />
                    </div>
                    <div className={styles.sliderBody}>
                        <h2>{this.article.title}</h2>
                        <h4>{this.article.description}</h4>
                        <p>{this.article.content}</p>
                        <br/>
                        <span>{this.article.author}</span>
                        <br/>
                        <button
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
            );
        }
        return null;
    }
}

export default ArticlePage;