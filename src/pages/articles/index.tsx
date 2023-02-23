import { IArticle } from "@/interface/article.interface";

import Image from "next/image"
import Link from "next/link";
import React from "react";

import styles from "./articles.module.css"


export async function getServerSideProps(ctx: { query: any; }) {
    let title = ctx.query.title;
    return {
        props: {
            articleTitle: title
        }
    }
}

interface ArticleProp {
    articleTitle: string
}
class ArticlePage extends React.Component<ArticleProp> {

    state = {
        article: ({} as IArticle)
    }

    fetchNews(title: string) {
        fetch('/api/news/article?title='+title).then((res) => {
            res.json().then(article => {
                this.setState({
                    article: article
                })
            })
        })
    }

    componentDidMount() {
        this.fetchNews(this.props.articleTitle);
    }

    render(): React.ReactNode {
        if (this.state.article && Object.values(this.state.article).length > 0) {
            return (
                <div className={styles.sliderContainer}>  
                    <div className={styles.sliderImage}>
                        <Image
                            src={this.state.article.urlToImage} 
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
                    <div className={styles.sliderBody}>
                        <h2>{this.state.article.title}</h2>
                        <h4>{this.state.article.description}</h4>
                        <p>{this.state.article.content}</p>
                        <br/>
                        <span>{this.state.article.author}</span>
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