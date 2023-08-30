import React from "react";
import Link from "next/link";
import { CiCircleChevLeft, CiFileOn, CiPlay1, CiViewList } from "react-icons/ci";
import { useRouter } from "next/router";


const LessonSidebar = ({ chapter, videos, tasks, quizzes }) => {
    const router = useRouter();

    return (
        <div className="w-80 sticky top-0 mr-2 pt-5 hidden md:block">
            <Link href={`/product/${router.query.uid}/chapter/${router.query.chapter_id}`}
                className="p-4 text-neutral-600 flex mb-4 items-center shadow transition-all rounded-lg hover:bg-orange-100"
            >
                <CiCircleChevLeft className="text-2xl mr-2" />
                <h1>{chapter.chapter_name}</h1>
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
    )
}

export default LessonSidebar;