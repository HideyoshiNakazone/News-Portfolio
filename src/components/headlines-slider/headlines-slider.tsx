"use client";

import styles from "./headlines-slider.module.css"
import NewsCard from "@/components/news-card/news-card";

import {useQuery} from "@tanstack/react-query";
import {getTopHeadlines} from "@/services/news.service";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const HeadlinesSlider = () => {
    const {data} = useQuery({
        queryKey: ['news', 'top-headlines'],
        queryFn: getTopHeadlines
    });

    const buildArticleList = () => {
        if (!!data && !!data.articles && data.articles.length > 0) {
            return data.articles.map(a => (
                <SwiperSlide key={a.title}
                    className={styles.slider}
                >
                    <NewsCard article={a}/>
                </SwiperSlide>
            ))
        }
        return <></>;
    };


    return (
        <div className={styles.slider_body}>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                autoplay={{delay: 20000}}
                loop={true}
            >
                {buildArticleList()}
            </Swiper>
        </div>
    )

};


export default HeadlinesSlider;