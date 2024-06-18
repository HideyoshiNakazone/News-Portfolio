"use client";

import styles from "./headlines-slider.module.css"
import NewsCard from "@/components/news-card/news-card";

import {useQuery} from "@tanstack/react-query";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {getTopHeadlines} from "@/services/news-service-helper";
import {NewsSearch} from "@/types/news-search.type";


const HeadlinesSlider = () => {
    const {data} = useQuery({
        queryKey: ['news', 'top-headlines'],
        queryFn: getTopHeadlines
    });

    if (!data || !data.articles || data.articles.length === 0) {
        throw new Error("No articles found");
    }


    const buildArticleList = (news: NewsSearch) => {
        return news.articles?.map(a => (
            <SwiperSlide key={a.title}
                className={styles.slider}
            >
                <NewsCard article={a}/>
            </SwiperSlide>
        ))
    };


    return (
        <div className={styles.slider_body}>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                autoplay={{delay: 20000}}
                loop={true}
            >
                {buildArticleList(data)}
            </Swiper>
        </div>
    )

};


export default HeadlinesSlider;