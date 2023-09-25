import React from "react";
import { CiFileOn, CiPlay1, CiViewList } from "react-icons/ci";
import { GoCheckCircleFill, GoCircle } from "react-icons/go";
import According from "@/src/components/According";
import { useRouter } from "next/router";
import { BiSolidTimeFive } from "react-icons/bi";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { setAlert } from "@/src/redux/actions/alert";
import { useDispatch } from "react-redux";


const ChapterContent = (props) => {
    const { 
        product, 
        user_chapter, 
        user_lessons, 
        user_videos, 
        user_tasks, 
        user_quizzes, 
        access 
    } = props;
    const router = useRouter();
    const dispatch = useDispatch();

    let video_done;
    for (let i = 0; i < user_lessons.length; i++) {
        if (user_lessons[i].is_done) {
            video_done = true;
        } else {
            video_done = false;
            break;
        }
    }

    const linkToLesson = link => {
        router.push(link)
    }

    const handleFinishChapter = async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/product/${router.query.uid}/chapter/${router.query.chapter_id}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
            });

            if (response.status == 200) {
                router.push(router.asPath);
                dispatch(setAlert("Бөлім аяқталды!", "success"));
            } else {
                dispatch(setAlert("Бір жерден қателік кетті!", "error"));
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="flex-1 ml-2 pt-5">
            <div className="shadow rounded-xl p-10">
                <h1 className="text-2xl font-bold">{user_chapter.chapter.chapter_name}</h1>
                <span className="py-2 text-neutral-600 block border-b">{product.name}</span>
                <span className="text-neutral-600 block mt-2">
                    {user_chapter.chapter.about}
                </span>

                <div className="mt-5 flex items-center">
                    <div className="h-1 bg-neutral-100 flex-1 rounded-xl overflow-hidden">
                        <div className="h-full bg-orange-400" style={{ width: `${user_chapter.score}%` }}></div>
                    </div>
                    <div className="ml-4">
                        <span className="text-xs text-neutral-600">{user_chapter.score}%</span>
                    </div>
                </div>
            </div>

            <div className="my-10">
                {user_lessons.map(user_lesson => {
                    return (
                        <According 
                            title={user_lesson.lesson.title} 
                            content={"Сабақ жайлы мәлімет"} 
                            key={user_lesson.lesson.id}
                            status={user_lesson.is_done}
                        >
                            {/* Videos */}
                            {user_videos.map(user_video => {
                                if (user_video.video.lesson === user_lesson.lesson.id) {
                                    return (
                                        <div
                                            key={user_video.id}
                                            onClick={() => linkToLesson(`/product/${router.query.uid}/chapter/${user_chapter.id}/lesson/${user_lesson.id}/video/${user_video.id}`)}
                                            className="flex items-center justify-between text-neutral-600 p-5 border-b transition-all cursor-pointer hover:bg-orange-100"
                                        >
                                            <div className="flex items-center flex-1">
                                                <CiPlay1 className="text-xl mr-2" />
                                                <span>{user_video.video.title}</span>
                                            </div>

                                            <div className="flex items-center text-neutral-600">
                                                {user_video.is_done ?
                                                    <GoCheckCircleFill className="text-xl text-green-500" />
                                                :
                                                    <GoCircle className="text-xl" />
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            })}

                            {/* Tasks */}
                            {user_tasks.map(user_task => {
                                if (user_task.task.lesson === user_lesson.lesson.id) {
                                    return (
                                        <div
                                            key={user_task.id}
                                            onClick={() => linkToLesson(`/product/${router.query.uid}/chapter/${user_chapter.id}/lesson/${user_lesson.id}/task/${user_task.id}`)}
                                            className="flex items-center justify-between text-neutral-600 p-5 border-b transition-all cursor-pointer hover:bg-orange-100"
                                        >
                                            <div className="flex items-center">
                                                <CiFileOn className="text-xl mr-2" />
                                                <span>{user_task.task.title}</span>
                                            </div>

                                            <div className="flex items-center text-neutral-600">
                                                {user_task.status === "FINISH" ?
                                                    <GoCheckCircleFill className="text-xl text-green-500" />
                                                :
                                                user_task.status === "PROGRESS" ?
                                                    <BiSolidTimeFive className="text-xl text-blue-500" />
                                                :
                                                user_task.status === "CONFIRM" ?
                                                    <BiSolidTimeFive className="animate-bounce text-xl text-blue-500" />
                                                :
                                                    <GoCircle className="text-xl" />
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            })}

                            {/* Quizzes */}
                            {user_quizzes.map(user_quiz => {
                                if (user_quiz.quiz.lesson === user_lesson.lesson.id) {
                                    return (
                                        <div
                                            key={user_quiz.id}
                                            onClick={() => linkToLesson(`/product/${router.query.uid}/chapter/${user_chapter.id}/lesson/${user_lesson.id}/quiz/${user_quiz.id}`)}
                                            className="flex items-center justify-between text-neutral-600 p-5 border-b transition-all cursor-pointer hover:bg-orange-100"
                                        >
                                            <div className="flex items-center">
                                                <CiViewList className="text-xl mr-2" />
                                                <span>{user_quiz.quiz.title}</span>
                                            </div>

                                            <div className="flex items-center text-neutral-600">
                                                {user_quiz.status === "FINISH" ?
                                                    <GoCheckCircleFill className="text-xl text-green-500" />
                                                :
                                                user_quiz.status === "PROGRESS" ?
                                                    <BiSolidTimeFive className="text-xl text-blue-500" />
                                                :
                                                    <GoCircle className="text-xl" />
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </According>
                    )
                })}
            </div>
            
            {!user_chapter.is_done &&
                <React.Fragment>
                    {video_done &&
                        <div className="mb-10">
                            <button
                                onClick={() => handleFinishChapter()}
                                className="px-6 py-3 block w-full border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70"
                            >
                                Бөлімді қорытындылау
                            </button>
                        </div>
                    }
                </React.Fragment>
            }
        </div>
    )
}

export default ChapterContent;