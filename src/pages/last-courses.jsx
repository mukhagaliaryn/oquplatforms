import React from "react";
import MainLayout from "../layouts/main";
import { BACKEND_URL } from "../redux/actions/types";
import CoursesList from "../components/pages/main/CoursesList";
import Link from "next/link";
import Image from "next/image";
import { IoStar } from "react-icons/io5";


export async function getServerSideProps(context) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${context.req.cookies.access}`
        }
    }
    const res = await fetch(`${BACKEND_URL}/last-courses/`, context.req.cookies.access && config)
    const data = await res.json();
    const last_courses = data.last_courses;

    return {
        props: {
            last_courses,
        }
    }
}


const LastCourses = (data) => {
    const { last_courses } = data;

    return (
        <MainLayout
            title={"Соңғы шыққан курстар - OQU platforms"}
            content={"Соңғы шыққан курстар тізімі - OQU platforms"}
        >
            <div className="">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
                    {last_courses.map((course, i) => {
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
                                            {course.course_type === "FREE" ?
                                                <span>Тегін контент</span>
                                            :
                                                <span>Ақылы контент</span>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="mt-8"></div>
        </MainLayout>
    )
}


export default LastCourses;




{/* <Swiper
slidesPerView={2}
breakpoints={{
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
className="h-72"
> */}