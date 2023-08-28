import According from "@/src/components/According";
import { BtnLink } from "@/src/components/Button";
import ProductLayout from "@/src/layouts/product";
import { BACKEND_URL } from "@/src/redux/actions/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CiFileOn, CiPlay1, CiViewList } from "react-icons/ci";
import { GoCircle } from "react-icons/go";
import { useSelector } from "react-redux";


const Chapter = ({ product, chapter, chapters, lessons, videos, tasks, quizzes }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const router = useRouter();

    const linkToLesson = link => {
        router.push(link)
    }

    return (
        <ProductLayout
            title={chapter && chapter.chapter_name}
            content={chapter && chapter.about}
        >
            {(isAuthenticated && chapter) &&
                <div className="container mx-auto px-5 flex items-start">
                    {/* Sidebar */}
                    <div className="w-80 sticky line-clamp-1 top-0 mr-2 pt-5 hidden md:block">
                        <ul>
                            {chapters.map(item => {
                                return (
                                    <li key={item.id}>
                                        <Link href={`/product/${router.query.uid}/chapter/${item.id}`} className={`flex rounded-lg items-center p-4 hover:bg-orange-100 transition-all ${router.asPath === `/product/${router.query.uid}/chapter/${item.id}` ? "text-white bg-orange-400 hover:bg-orange-400" : "text-neutral-600"}`}>
                                            <GoCircle className="mr-2 text-xl" />
                                            <span>{item.chapter_name}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Content */}
                    <div className="flex-1 ml-2 pt-5">
                        <div className="shadow rounded-xl p-10">
                            <h1 className="text-4xl font-bold">{chapter.chapter_name}</h1>
                            <span className="py-2 text-neutral-600 block border-b">{product}</span>
                            <span className="text-neutral-600 block mt-2">
                                {chapter.about}
                            </span>

                            <div className="mt-5 flex items-center">
                                <div className="h-1 bg-neutral-100 flex-1 rounded-xl overflow-hidden">
                                    <div className="h-full bg-orange-400 w-0"></div>
                                </div>
                                <div className="ml-4">
                                    <span className="text-xs text-neutral-600">0/100</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            {lessons.map(lesson => {
                                return (
                                    <According title={lesson.title} content={"Сабақ жайлы мәлімет"} key={lesson.id}>
                                        {/* Videos */}
                                        {videos.map(video => {
                                            if (video.lesson === lesson.id) {
                                                return (
                                                    <div
                                                        key={video.id}
                                                        onClick={() => linkToLesson(`/product/${router.query.uid}/chapter/${chapter.id}/lesson/${lesson.id}`)}
                                                        className="flex items-center justify-between text-neutral-600 p-5 border-b transition-all cursor-pointer hover:bg-orange-100"
                                                    >
                                                        <div className="flex items-center">
                                                            <CiPlay1 className="text-xl mr-2" />
                                                            <span>{video.title}</span>
                                                        </div>
    
                                                        <div className="flex items-center text-neutral-600">
                                                            <GoCircle className="text-xl" />
                                                            {/* <BtnLink href={"/product/23/chapter/23/lesson/232"}>Сабақты бастау</BtnLink> */}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}

                                        {/* Tasks */}
                                        {tasks.map(task => {
                                            if (task.lesson === lesson.id) {
                                                return (
                                                    <div
                                                        key={task.id}
                                                        onClick={() => linkToLesson(`/product/${router.query.uid}/chapter/${chapter.id}/lesson/${lesson.id}/tasks`)}
                                                        className="flex items-center justify-between text-neutral-600 p-5 border-b transition-all cursor-pointer hover:bg-orange-100"
                                                    >
                                                        <div className="flex items-center">
                                                            <CiFileOn className="text-xl mr-2" />
                                                            <span>{task.title}</span>
                                                        </div>

                                                        <div className="flex items-center text-neutral-600">
                                                            <GoCircle className="text-xl" />
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}

                                        {/* Quizzes */}
                                        {quizzes.map(quiz => {
                                            if (quiz.lesson === lesson.id) {
                                                return (
                                                    <div
                                                        key={quiz.id}
                                                        onClick={() => linkToLesson(`/product/${router.query.uid}/chapter/${chapter.id}/lesson/${lesson.id}/tasks`)}
                                                        className="flex items-center justify-between text-neutral-600 p-5 border-b transition-all cursor-pointer hover:bg-orange-100"
                                                    >
                                                        <div className="flex items-center">
                                                            <CiViewList className="text-xl mr-2" />
                                                            <span>{quiz.title}</span>
                                                        </div>

                                                        <div className="flex items-center text-neutral-600">
                                                            <GoCircle className="text-xl" />
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </According>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }
        </ProductLayout>
    )
}


export async function getServerSideProps(context) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${context.req.cookies.access}`
        }
    }
    const res = await fetch(`${BACKEND_URL}/products/product/${context.params.uid}/chapter/${context.params.chapter_id}/`, context.req.cookies.access && config)
    const data = await res.json();

    const user_type = data.user_type || null
    const product = data.product || null;
    const chapter = data.chapter || null;
    const chapters = data.chapters || [];
    const lessons = data.lessons || [];
    const videos = data.videos || [];
    const tasks = data.tasks || [];
    const quizzes = data.quizzes || [];


    if (user_type === "TEACHER" || user_type === "MANAGER") {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            product,
            chapter,
            chapters,
            lessons,
            videos,
            tasks,
            quizzes,
            user_type
        }
    }
}


export default Chapter;