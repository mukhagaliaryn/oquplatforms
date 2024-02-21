import { setTopicIcon } from "@/src/utils/topicIcon";
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
                slidesPerView={1}
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
            >
                {popular_topics.map(topic => {
                    return (
                        <SwiperSlide key={topic.id}>
                            <Link href={`/topic/${topic.slug}`} className="rounded-lg bg-neutral-900 flex items-center justify-center transition-all hover:bg-neutral-950 h-44 sm:h-46 md:h-48 lg:h-52 xl:h-56 2xl:h-60">
                                <div className="text-center p-5">
                                    <div className="text-neutral-100 text-5xl mb-4 flex justify-center">
                                        {setTopicIcon(topic.slug)}
                                    </div>
                                    <h1 className="text-neutral-100 font-semibold">{topic.name_kk}</h1>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    )
}

export default PopularTopics;