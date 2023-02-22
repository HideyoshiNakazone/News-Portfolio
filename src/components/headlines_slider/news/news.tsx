import { IArticle } from "@/interface/article.interface";
import React from "react";


interface NewsProp {
    article: IArticle;
}

class News extends React.Component<NewsProp> {

    render(): React.ReactNode {
        return (
            <>  
                <h2>{this.props.article.title}</h2>
                <p>{this.props.article.description}</p>
            </>
        )
    }
}

export default News;