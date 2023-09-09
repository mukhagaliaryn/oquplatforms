import React from "react";
import Link from "next/link";
import { CiCircleChevLeft, CiFileOn, CiPlay1, CiViewList } from "react-icons/ci";
import { useRouter } from "next/router";
import { GoCheckCircleFill } from "react-icons/go";


const LessonSidebar = ({ chapter, videos, tasks, quizzes }) => {
    const router = useRouter();

    return (
        <div className="w-80 sticky top-0 mr-2 pt-5 hidden md:block">
            <Link href={`/product/${router.query.uid}/chapter/${router.query.chapter_id}`}
                className="p-4 block text-neutral-600  mb-4 shadow transition-all rounded-lg hover:bg-orange-100"
            >   
                <div className="flex items-center">
                    <CiCircleChevLeft className="text-2xl mr-2" />
                    <h1>{chapter.chapter_name}</h1>
                </div>
                <div className="mt-5">
                    <div className="h-1 w-full bg-neutral-100 rounded-lg overflow-hidden">
                        <div className="bg-orange-400" style={{ width: `${chapter.score}px` }}></div>
                    </div>
                </div>
            </Link>

            {/* Videos */}
            <ul>
                {videos.map(item => {
                    return (
                        <li key={item.video.id}>
                            <Link
                                href={`/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/video/${item.video.id}`}
                                className={`flex justify-between rounded-lg items-center p-4 hover:bg-orange-100 transition-all ${router.asPath === `/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/video/${item.video.id}` ? "text-white bg-orange-400 hover:bg-orange-400" : "text-neutral-600"}`}
                            >
                                <div className="flex items-center">
                                    <CiPlay1 className="mr-2 text-xl" />
                                    <span className="flex-1 line-clamp-1">{item.video.title}</span>
                                </div>
                                {item.is_done &&
                                    <GoCheckCircleFill className="text-xl text-green-500" />
                                }
                            </Link>
                        </li>
                    )
                })}
            </ul>
            {/* Tasks */}
            <ul>
                {tasks.map(item => {
                    return (
                        <li key={item.task.id}>
                            <Link
                                href={`/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/task/${item.task.id}`}
                                className={`flex justify-between rounded-lg items-center p-4 hover:bg-orange-100 transition-all ${router.asPath === `/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/task/${item.task.id}` ? "text-white bg-orange-400 hover:bg-orange-400" : "text-neutral-600"}`}
                            >   
                                <div className="flex items-center flex-1">
                                    <CiFileOn className="mr-2 text-xl" />
                                    <span className="line-clamp-1">{item.task.title}</span>
                                </div>
                                {item.is_done &&
                                    <GoCheckCircleFill className="text-xl text-green-500" />
                                }
                            </Link>
                        </li>
                    )
                })}
            </ul>
            {/* Quizzes */}
            <ul>
                {quizzes.map(item => {
                    return (
                        <li key={item.quiz.id}>
                            <Link
                                href={`/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/quiz/${item.quiz.id}`}
                                className={`flex rounded-lg items-center p-4 hover:bg-orange-100 transition-all ${router.asPath === `/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/quiz/${item.quiz.id}` ? "text-white bg-orange-400 hover:bg-orange-400" : "text-neutral-600"}`}
                            >
                                <div className="flex flex-1 items-center">
                                    <CiViewList className="mr-2 text-xl" />
                                    <span className="flex-1 line-clamp-1">{item.quiz.title}</span>
                                </div>
                                {item.status === "FINISH" &&
                                    <GoCheckCircleFill className="text-xl text-green-500" />
                                } 
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default LessonSidebar;