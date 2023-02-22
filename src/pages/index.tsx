import HeadlinesSlider from "@/components/headlines_slider/headlines_slider";
import { ISearch } from "@/interface/search.interface";
import { NewsService } from "@/service/newsService";

import React from "react";


export async function getServerSideProps() {
    return {
        props: {
            search: await (new NewsService()).getTopHeadlines()
        }
    }
}

interface HomeProp {
    search: ISearch;
}
class HomePage extends React.Component<HomeProp> {
    
    render(): React.ReactNode {
        return (
            <>
                <h1>Hideyoshi News</h1>
                <HeadlinesSlider search={this.props.search}/>
            </>
        )
    }
}

export default HomePage;