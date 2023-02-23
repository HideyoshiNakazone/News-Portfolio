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
                this.setState({
                    search: search
                });
            })
        })
    }

    componentDidMount() {
        this.fetchTopHeadlines();
    }
    
    render(): React.ReactNode {
        if (this.state.search) {
            return (
                <>
                    <h1>Hideyoshi News</h1>
                    <HeadlinesSlider search={(this.state.search)}/>
                </>
            )
        }
        return null;
    }
}

export default HomePage;