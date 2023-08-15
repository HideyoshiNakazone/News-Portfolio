import {Header} from "./header/header";

import HeadlinesSlider from "@/components/headlines_slider/headlines_slider";
import { ISearch } from "@/interface/search.interface";
import { NewsService } from "@/service/newsService";

import React from "react";


class HomePage extends React.Component {

    state = {
        search: ({} as ISearch)
    }

    newsService = new NewsService();

    fetchTopHeadlines() {
        fetch('/api/news/headlines').then(res => {
            res.json().then(search => {
                if (search && search.status === "ok") {
                    this.setState({
                        search: search
                    });
                }
            })
        })
    }

    componentDidMount() {
        this.fetchTopHeadlines();
    }

    is_valid_search(): boolean {
        return !!this.state.search &&
            !!this.state.search.articles &&
            this.state.search.articles.length > 0;
    }
    
    render(): React.ReactNode {
        if (!this.is_valid_search()) {
            return (
                <></>
            )
        }
        return (
            <>
                <Header></Header>
                <HeadlinesSlider search={(this.state.search)}/>
            </>
        )
    }
}

export default HomePage;