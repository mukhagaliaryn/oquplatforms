import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";
import { useRouter } from "next/router";


const AuthorsList = (props) => {
    const { authors } = props;
    const router = useRouter();

    return (
        <div className="mt-4">
            <div className="mb-4">
                <h1 
                    onClick={() => router.push("/authors")}
                    className="text-neutral-900 inline-block font-semibold text-xl transition-all rounded-md cursor-pointer hover:translate-x-1 hover:text-neutral-500"
                >
                    Авторлар
                </h1>
            </div>

            <Swiper
                slidesPerView={1}
                breakpoints={{
                    420: { // xs
                        slidesPerView: 2
                    },
                    640: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 4
                    },
                    1024: {
                        slidesPerView: 5
                    },
                    1280: {
                        slidesPerView: 6
                    },
                    1536: {
                        slidesPerView: 7
                    },
                    1920: {
                        slidesPerView: 8
                    },
                }}
                spaceBetween={10}
                className="h-56"
            >
                {authors.map(author => {
                    return (
                        <SwiperSlide key={author.id}>
                            <Link href={"#"} className="block shadow-sm bg-white rounded-lg overflow-hidden transition-all hover:shadow-md">
                                <div className="p-4">
                                    <Image 
                                        src={author.user.image ? author.user.image : "/images/user.png"} width={520} height={520}
                                        className="w-24 h-24 rounded-full mx-auto"
                                        alt={"Author image"}
                                    />
                                    <div className="mt-4 text-center">
                                        <h1 className="font-semibold">{author.user.full_name}</h1>

                                        <div className="mt-2 py-1 px-3 text-xs rounded-md bg-blue-100 text-blue-500 inline-block">
                                            <span>{author.specialty}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default AuthorsList;