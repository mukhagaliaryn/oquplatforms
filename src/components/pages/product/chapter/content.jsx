import React from "react";
import { CiFileOn, CiPlay1, CiViewList } from "react-icons/ci";
import { GoCircle } from "react-icons/go";
import According from "@/src/components/According";
import { useRouter } from "next/router";


const ChapterContent = ({ product, user_chapter, user_lessons, videos, tasks, quizzes, }) => {
    const router = useRouter();

    const linkToLesson = link => {
        router.push(link)
    }

    return (
        <div className="flex-1 ml-2 pt-5">
            <div className="shadow rounded-xl p-10">
                <h1 className="text-4xl font-bold">{user_chapter.chapter.chapter_name}</h1>
                <span className="py-2 text-neutral-600 block border-b">{product}</span>
                <span className="text-neutral-600 block mt-2">
                    {user_chapter.chapter.about}
                </span>

                <div className="mt-5 flex items-center">
                    <div className="h-1 bg-neutral-100 flex-1 rounded-xl overflow-hidden">
                        <div className="h-full bg-orange-400" style={{ width: `${user_chapter.score}px` }}></div>
                    </div>
                    <div className="ml-4">
                        <span className="text-xs text-neutral-600">{user_chapter.score}/{user_chapter.max_score}</span>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                {user_lessons.map(item => {
                    return (
                        <According title={item.lesson.title} content={"Сабақ жайлы мәлімет"} key={item.lesson.id}>
                            {/* Videos */}
                            {videos.map(video => {
                                if (video.lesson === item.lesson.id) {
                                    return (
                                        <div
                                            key={video.id}
                                            onClick={() => linkToLesson(`/product/${router.query.uid}/chapter/${user_chapter.chapter.id}/lesson/${item.lesson.id}/video/${video.id}`)}
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
                                if (task.lesson === item.lesson.id) {
                                    return (
                                        <div
                                            key={task.id}
                                            onClick={() => linkToLesson(`/product/${router.query.uid}/chapter/${user_chapter.chapter.id}/lesson/${item.lesson.id}/task/${task.id}`)}
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
                                if (quiz.lesson === item.lesson.id) {
                                    return (
                                        <div
                                            key={quiz.id}
                                            onClick={() => linkToLesson(`/product/${router.query.uid}/chapter/${user_chapter.chapter.id}/lesson/${item.lesson.id}/quiz/${quiz.id}`)}
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
    )
}

export default ChapterContent;