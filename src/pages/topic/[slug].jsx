import MainLayout from "@/src/layouts/main";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { setTopicIcon } from "@/src/utils/topicIcon";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoStar } from "react-icons/io5";


export async function getServerSideProps(context) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${context.req.cookies.access}`
        }
    }
    const res = await fetch(`${BACKEND_URL}/topic/${context.params.slug}/`, context.req.cookies.access && config)
    const data = await res.json();
    const topic = data.topic;
    const topic_courses = data.topic_courses;

    return {
        props: {
            topic,
            topic_courses
        }
    }
}


const Category = (data) => {
    const { topic, topic_courses } = data;
    const router = useRouter();

    return (
        <MainLayout
            title={`${topic.name_kk} - OQU platforms`}
            content={"Категория парақшасы - OQU platforms"}
        >
            <div>
                <div className="bg-neutral-400 h-80 md:h-96 rounded-lg relative">
                    <div className="w-full h-full p-10 flex flex-col md:flex-row gap-6 items-center text-neutral-100">
                        <div className="text-6xl md:text-8xl">
                            {setTopicIcon(topic.slug)}
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-2xl md:text-5xl font-bold">{topic.name_kk}</h1>
                            <span className="block text-neutral-100">{topic.own.name_kk}</span>
                        </div>
                    </div>

                    <div className="absolute h-20 w-full bottom-0 left-0" id="topic"></div>
                </div>

                <div className="-translate-y-14 px-2 grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
                    {topic_courses.map((course, i) => {
                        return (
                            <Link key={i} href={`/course/${course.id}`} className="block shadow-sm bg-white rounded-lg overflow-hidden transition-all hover:shadow-md">
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
                                            return (
                                                <span
                                                    key={author.id}
                                                    className="text-sm text-neutral-500 line-clamp-1 inline-block"
                                                >
                                                    {author.full_name}
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
                        )
                    })}
                </div>
            </div>
        </MainLayout>

    )
}

export default Category;