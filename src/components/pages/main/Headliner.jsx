import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";



const Headliner = (props) => {
    const { headliners } = props;

    return (
        <div className="overflow-hidden rounded-lg shadow-sm">
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
                className=" h-96 2xl:h-[620px] "
            >
                {headliners.map((headline, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <div
                                style={{ backgroundImage: `url(${headline.image})` }}
                                className="bg-white h-full bg-cover bg-center bg-no-repeat rounded-lg"
                            >
                                <div className="flex items-center w-full h-full bg-white bg-opacity-90 backdrop-blur-3xl p-10 rounded-lg">
                                    <div className="w-full flex flex-col items-center md:max-w-screen-md md:items-start md:flex-row">
                                        <div className="rounded-lg overflow-hidden block w-24 md:w-32">
                                            <Image
                                                src={headline.image} width={520} height={520} alt={headline.name}
                                                className="w-full"
                                            />
                                        </div>

                                        <div className="mt-4 text-center md:text-left md:mt-0 md:ml-10 md:flex-1">
                                            <h1 className="text-2xl md:text-5xl font-bold">{headline.name}</h1>
                                            <span className="text-neutral-500 text-sm my-4 line-clamp-2 md:line-clamp-none">
                                                {headline.about}
                                            </span>

                                            <Link href={"#"} className="bg-neutral-900 inline-block px-6 py-2 text-sm font-medium text-white rounded-md transition-all border border-neutral-900 hover:bg-transparent hover:text-neutral-900 active:scale-105">
                                                <span>Толығырақ</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}


export default Headliner;