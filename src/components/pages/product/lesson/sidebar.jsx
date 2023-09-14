import React from "react";
import Link from "next/link";
import { CiCircleChevLeft, CiFileOn, CiPlay1, CiViewList } from "react-icons/ci";
import { useRouter } from "next/router";
import { GoCheckCircleFill } from "react-icons/go";
import { BiSolidTimeFive } from "react-icons/bi";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { setAlert } from "@/src/redux/actions/alert";
import { useDispatch } from "react-redux";


const LessonSidebar = ({ chapter, user_lesson, videos, tasks, quizzes, access }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    let video_done;
    let task_done;
    let quiz_done;

    for (let i = 0; i < videos.length; i++) {
        if (videos[i].is_done) {
            video_done = true;
        } else {
            video_done = false;
            break;
        }
    }
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status === "FINISH") {
            task_done = true;
        } else {
            task_done = false;
            break;
        }
    }
    for (let i = 0; i < quizzes.length; i++) {
        if (quizzes[i].status === "FINISH") {
            quiz_done = true;
        } else {
            quiz_done = false;
            break;
        }
    }


    const handleFinishLesson = async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/products/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/finished/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
            });

            if (response.status == 200) {
                router.push(`/product/${router.query.uid}/chapter/${router.query.chapter_id}`);
                dispatch(setAlert("Сабақ аяқталды!", "success"));
            } else {
                dispatch(setAlert("Бір жерден қателік кетті!", "error"));
            }
        } catch (e) {
            console.log(e);
        }
    } 

    return (
        <div className="w-80 sticky top-0 mr-2 pt-5 hidden md:block">
            <Link href={`/product/${router.query.uid}/chapter/${router.query.chapter_id}`}
                className="p-4 block text-neutral-600  mb-4 shadow transition-all rounded-lg hover:bg-orange-100"
            >   
                <div className="flex items-center">
                    <CiCircleChevLeft className="text-2xl mr-2" />
                    <h1>{chapter.chapter_name}</h1>
                </div>
                <div className="mt-5 flex items-center">
                    <div className="h-1 w-full bg-neutral-100 rounded-lg overflow-hidden">
                        <div className="bg-orange-400 h-full" style={{ width: `${user_lesson.score}%` }}></div>
                    </div>
                    <span className="text-xs text-neutral-600 ml-2">
                        {user_lesson.score}%
                    </span>
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
                                <div className="flex items-center flex-1">
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
                                    <span className="flex-1 line-clamp-1">{item.task.title}</span>
                                </div>
                                {item.status === "PROGRESS" ?
                                    <BiSolidTimeFive className="text-xl text-blue-500" />
                                    :
                                    item.status === "FINISH" &&
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
                                {item.status === "PROGRESS" ?
                                    <BiSolidTimeFive className="text-xl text-blue-500" />
                                    :
                                    item.status === "FINISH" &&
                                    <GoCheckCircleFill className="text-xl text-green-500" />
                                } 
                            </Link>
                        </li>
                    )
                })}
            </ul>
            
            {!user_lesson.is_done &&
                <>
                    {(video_done && task_done && quiz_done) &&
                        <div className="mt-5">
                            <button
                                onClick={() => handleFinishLesson()}
                                className="px-6 py-3 block w-full border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70"
                            >
                                Сабақты аяқтау
                            </button>
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default LessonSidebar;