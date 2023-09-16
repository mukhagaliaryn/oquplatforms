import React from "react";
import { CiFileOn, CiPlay1, CiViewList } from "react-icons/ci";
import { GoCheckCircleFill, GoCircle } from "react-icons/go";
import According from "@/src/components/According";
import { useRouter } from "next/router";
import { BiSolidTimeFive } from "react-icons/bi";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { setAlert } from "@/src/redux/actions/alert";
import { useDispatch } from "react-redux";


const ChapterContent = ({ product, user_chapter, user_lessons, videos, tasks, quizzes, access }) => {
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
            const response = await fetch(`${BACKEND_URL}/products/product/${router.query.uid}/chapter/${router.query.chapter_id}/`, {
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
                <h1 className="text-4xl font-bold">{user_chapter.chapter.chapter_name}</h1>
                <span className="py-2 text-neutral-600 block border-b">{product}</span>
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
                {user_lessons.map(item => {
                    return (
                        <According 
                            title={item.lesson.title} 
                            content={"Сабақ жайлы мәлімет"} 
                            key={item.lesson.id}
                            status={item.is_done}
                        >
                            {/* Videos */}
                            {videos.map(video_item => {
                                if (video_item.video.lesson === item.lesson.id) {
                                    return (
                                        <div
                                            key={video_item.video.id}
                                            onClick={() => linkToLesson(`/product/${router.query.uid}/chapter/${user_chapter.chapter.id}/lesson/${item.lesson.id}/video/${video_item.video.id}`)}
                                            className="flex items-center justify-between text-neutral-600 p-5 border-b transition-all cursor-pointer hover:bg-orange-100"
                                        >
                                            <div className="flex items-center flex-1">
                                                <CiPlay1 className="text-xl mr-2" />
                                                <span>{video_item.video.title}</span>
                                            </div>

                                            <div className="flex items-center text-neutral-600">
                                                {video_item.is_done ?
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
                            {tasks.map(task_item => {
                                if (task_item.task.lesson === item.lesson.id) {
                                    return (
                                        <div
                                            key={task_item.task.id}
                                            onClick={() => linkToLesson(`/product/${router.query.uid}/chapter/${user_chapter.chapter.id}/lesson/${item.lesson.id}/task/${task_item.task.id}`)}
                                            className="flex items-center justify-between text-neutral-600 p-5 border-b transition-all cursor-pointer hover:bg-orange-100"
                                        >
                                            <div className="flex items-center">
                                                <CiFileOn className="text-xl mr-2" />
                                                <span>{task_item.task.title}</span>
                                            </div>

                                            <div className="flex items-center text-neutral-600">
                                                {task_item.status === "FINISH" ?
                                                    <GoCheckCircleFill className="text-xl text-green-500" />
                                                :
                                                task_item.status === "PROGRESS" ?
                                                    <BiSolidTimeFive className="text-xl text-blue-500" />
                                                :
                                                task_item.status === "CONFIRM" ?
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
                            {quizzes.map(quiz_item => {
                                if (quiz_item.quiz.lesson === item.lesson.id) {
                                    return (
                                        <div
                                            key={quiz_item.quiz.id}
                                            onClick={() => linkToLesson(`/product/${router.query.uid}/chapter/${user_chapter.chapter.id}/lesson/${item.lesson.id}/quiz/${quiz_item.quiz.id}`)}
                                            className="flex items-center justify-between text-neutral-600 p-5 border-b transition-all cursor-pointer hover:bg-orange-100"
                                        >
                                            <div className="flex items-center">
                                                <CiViewList className="text-xl mr-2" />
                                                <span>{quiz_item.quiz.title}</span>
                                            </div>

                                            <div className="flex items-center text-neutral-600">
                                                {quiz_item.status === "FINISH" ?
                                                    <GoCheckCircleFill className="text-xl text-green-500" />
                                                :
                                                quiz_item.status === "PROGRESS" ?
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