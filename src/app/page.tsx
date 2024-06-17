import HeadlinesSlider from "@/components/headlines-slider/headlines-slider";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getTopHeadlines} from "@/services/news.service";
import Header from "@/components/header/header";


const Home = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['news', 'top-headlines'],
        queryFn: getTopHeadlines
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Header></Header>
            <HeadlinesSlider/>
        </HydrationBoundary>
    );
}

export default Home;