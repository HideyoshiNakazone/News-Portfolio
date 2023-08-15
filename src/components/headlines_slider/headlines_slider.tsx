import styles from "./headlines_slider.module.css"

import { ISearch } from "@/interface/search.interface";
import News from "./news/news";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css';

import React from "react";


interface HeadlineProp {
    search: ISearch;
}
class HeadlinesSlider extends React.Component<HeadlineProp> {

    buildArticleList() {
        if (!!this.props.search.articles && this.props.search.articles.length > 0) {
            return this.props.search.articles.map(a => (
                <SwiperSlide key={a.title}>
                    <News article={a} />
                </SwiperSlide>
            ))
        }
        return (
            <></>
        );
    }

    render(): React.ReactNode {
        SwiperCore.use([Autoplay])
        return (
            <div className={styles.slider_body}>
                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 20000
                    }}
                    className={styles.slider}
                >
                    {this.buildArticleList()}
                </Swiper>
            </div>
        )
    }
}

export default HeadlinesSlider;