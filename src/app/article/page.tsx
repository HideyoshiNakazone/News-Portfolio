"use server";


import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getFirstArticleFromSearchByTitle, getSearchInTopHeadlinesByTitle} from "@/services/news-service-helper";
import NewsCard from "@/components/news-card/news-card";
import NewsPage from "@/components/news-page/news-page";


type ArticlePageProps = {
    articleTitle: string;
}


const ArticlePage = async ({
                               searchParams
                           }: {
    searchParams: { title: string };
}) => {
    const queryClient = new QueryClient();

    const articleTitle = searchParams.title;
    if (!articleTitle) {
        throw new Error("No article title found");
    }

    await queryClient.prefetchQuery({
        queryKey: ['news', articleTitle],
        queryFn: async () => getFirstArticleFromSearchByTitle(
            articleTitle
        )
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NewsPage  articleTitle={articleTitle}/>
        </HydrationBoundary>
    );
}

export default ArticlePage;