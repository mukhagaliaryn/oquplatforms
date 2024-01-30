import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';


const PopularTopics = (props) => {
    const { popular_topics } = props;

    return (
        <div className="mt-4">
            <div className="mb-4">
                <h1 className="text-neutral-900 font-semibold text-xl">Сұранысқа ие бөлімдер</h1>
            </div>

            <Swiper
                slidesPerView={2}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    1024: {
                        slidesPerView: 4
                    },
                    1280: {
                        slidesPerView: 5
                    },
                    1920: {
                        slidesPerView: 6
                    },
                }}
                spaceBetween={10}
                className=""
            >
                {popular_topics.map(topic => {
                    return (
                        <SwiperSlide key={topic.id}>
                            <Link href={`/topic/${topic.slug}`} className="h-56 rounded-lg shadow-sm bg-neutral-900 flex items-center justify-center text-center p-4">
                                <h1 className="text-neutral-100 font-semibold">{topic.name_kk}</h1>
                            </Link>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    )
}

export default PopularTopics;