import { BtnLink } from "@/src/components/Button";
import ProductLayout from "@/src/layouts/product";
import { BACKEND_URL } from "@/src/redux/actions/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CiCircleChevLeft, CiFileOn, CiPlay1, CiViewList } from "react-icons/ci";
import { useSelector } from "react-redux";


const TaskLesson = ({ videos, tasks, quizzes, task, chapter }) => {
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


    if (typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }

    return (
        <ProductLayout
            title={task && task.title}
        >
            {(isAuthenticated && task) &&
                <div className="container mx-auto px-5 flex items-start mb-10">
                    {/* Sidebar */}
                    <div className="w-80 sticky top-0 mr-2 pt-5 hidden md:block">
                        <Link href={`/product/${router.query.uid}/chapter/${router.query.chapter_id}`}
                            className="p-4 text-neutral-600 flex mb-4 items-center shadow transition-all rounded-lg hover:bg-orange-100"
                        >
                            <CiCircleChevLeft className="text-2xl mr-2" />
                            <h1 className="">{chapter.chapter_name}</h1>
                        </Link>

                        {/* Videos */}
                        <ul>
                            {videos.map(item => {
                                return (
                                    <li key={item.id}>
                                        <Link
                                            href={`/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/video/${item.id}`}
                                            className={`flex rounded-lg items-center p-4 hover:bg-orange-100 transition-all ${router.asPath === `/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/video/${item.id}` ? "text-white bg-orange-400 hover:bg-orange-400" : "text-neutral-600"}`}
                                        >
                                            <CiPlay1 className="mr-2 text-xl" />
                                            <span className="flex-1 line-clamp-1">{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        {/* Tasks */}
                        <ul>
                            {tasks.map(item => {
                                return (
                                    <li key={item.id}>
                                        <Link
                                            href={`/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/task/${item.id}`}
                                            className={`flex rounded-lg items-center p-4 hover:bg-orange-100 transition-all ${router.asPath === `/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/task/${item.id}` ? "text-white bg-orange-400 hover:bg-orange-400" : "text-neutral-600"}`}
                                        >
                                            <CiFileOn className="mr-2 text-xl" />
                                            <span className="flex-1 line-clamp-1">{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        {/* Quizzes */}
                        <ul>
                            {quizzes.map(item => {
                                return (
                                    <li key={item.id}>
                                        <Link
                                            href={`/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/quiz/${item.id}`}
                                            className={`flex rounded-lg items-center p-4 hover:bg-orange-100 transition-all ${router.asPath === `/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/quiz/${item.id}` ? "text-white bg-orange-400 hover:bg-orange-400" : "text-neutral-600"}`}
                                        >
                                            <CiViewList className="mr-2 text-xl" />
                                            <span className="flex-1 line-clamp-1">{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>


                    {/* Content */}
                    <div className="shadow flex-1 mt-5 rounded-xl ml-2 px-5">
                        <div className="mt-5">
                            <div className="flex justify-between items-center">
                                <h1 className="text-4xl font-bold">{task.title}</h1>
                                <span className="text-sm text-neutral-600">{task.duration} мин</span>
                            </div>
                            <span className="text-neutral-600 block mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quod obcaecati quibusdam blanditiis, aliquid, sint quia ullam culpa
                                commodi cum nesciunt magnam, debitis totam adipisci dolorum quidem?
                                At provident expedita voluptas.
                            </span>
                        </div>

                        <div className="mt-5 px-5">
                            <ul className="text-neutral-600 list-disc">
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quae libero tenetur. Sed, nihil fugit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quae libero tenetur. Sed, nihil fugit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quae libero tenetur. Sed, nihil fugit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quae libero tenetur. Sed, nihil fugit.</li>
                            </ul>
                        </div>

                        <div className="my-5 flex justify-between">
                            <div className="flex items-center text-neutral-600">
                                <input
                                    type="checkbox" name="" id="full"
                                    className="mr-2"
                                />
                                <label htmlFor="full">Сұрақтарға толық жауап бердім</label>
                            </div>
                            <BtnLink href={"/product/23/chapter/23/lesson/232/tasks"}>Тестті аяқтау</BtnLink>
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
    const res = await fetch(`${BACKEND_URL}/products/product/${context.params.uid}/chapter/${context.params.chapter_id}/lesson/${context.params.lesson_id}/task/${context.params.task_id}`, context.req.cookies.access && config)
    const data = await res.json();

    const user_type = data.user_type || null
    const chapter = data.chapter || null;
    const task = data.task || null;

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
            chapter,
            task,
            videos,
            tasks,
            quizzes,
            user_type
        }
    }
}


export default TaskLesson;