"use server";

import HeadlinesSlider from "@/components/headlines-slider/headlines-slider";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import Header from "@/components/header/header";
import {getTopHeadlines} from "@/services/news-service-helper";


const Home = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['news', 'top-headlines'],
        queryFn: getTopHeadlines,
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <HeadlinesSlider/>
        </HydrationBoundary>
    );
}

export default Home;