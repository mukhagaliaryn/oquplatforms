import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoStar } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";


const CoursesList = (props) => {
    const { last_courses } = props;
    const router = useRouter();

    return (
        <div className="mt-8">
            <div className="mb-4">
                <h1 
                    onClick={() => router.push("/last-courses")}
                    className="text-neutral-900 inline-block font-semibold text-xl transition-all rounded-md cursor-pointer hover:translate-x-1 hover:text-neutral-500"
                >
                    Соңғы шыққан курстар
                </h1>
            </div>

            <Swiper
                slidesPerView={1}
                breakpoints={{
                    420: { // xs
                        slidesPerView: 2
                    },
                    640: { // sm
                        slidesPerView: 3
                    },
                    768: { // md
                        slidesPerView: 4
                    },
                    1024: { // lg
                        slidesPerView: 5
                    },
                    1280: { // xl
                        slidesPerView: 6
                    },
                    1536: { // 2xl
                        slidesPerView: 7
                    },
                    1920: { // 3xl
                        slidesPerView: 8
                    },
                }}
                spaceBetween={10}
                className="h-72"
            >
                {last_courses.map((course, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <Link href={`/course/${course.id}`} className="block shadow-sm bg-white rounded-lg overflow-hidden transition-all hover:shadow-md">
                                <div
                                    style={{ backgroundImage: `url(${course.image ? course.image : "/images/course.png"})` }}
                                    className="h-40 bg-cover bg-no-repeat bg-center"
                                >
                                    <div className="flex justify-center items-center w-full h-full bg-white bg-opacity-70 backdrop-blur-3xl rounded-t-lg overflow-hidden">
                                        <Image src={course.image ? course.image : "/images/course.png"} width={520} height={520} className="w-20 h-20" alt={course.name} />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div>
                                        <h1 className="text-neutral-900 font-semibold line-clamp-1">{course.name}</h1>
                                        {course.authors.map(author => {
                                            let is_last = course.authors[course.authors.length - 1].id === author.id
                                            return (
                                                <span 
                                                    key={author.id}
                                                    className="text-sm text-neutral-500 line-clamp-1 inline-block mr-1"
                                                >
                                                    {author.full_name}
                                                    {!is_last && ","}
                                                </span>
                                            )
                                        })}
                                    </div>
                                    <div className="mt-2 flex justify-between items-center">
                                        <div className="text-sm flex items-center text-neutral-500">
                                            <span className="mr-1">{course.all_rating}</span>
                                            <IoStar />
                                        </div>
                                        <div className="text-xs bg-blue-100 px-3 py-1 text-blue-500 rounded-md">
                                            {course.course_type === "DETAIL" ?
                                                <span>Экспресс курс</span>
                                            :
                                                <span>Бағытталған курс</span>
                                            }
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

export default CoursesList;