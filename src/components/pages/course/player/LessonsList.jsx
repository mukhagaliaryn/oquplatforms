import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { PiVideoThin } from "react-icons/pi";
import { SlArrowDown } from "react-icons/sl";
import { LiaCircle } from "react-icons/lia";
import { GoCheckCircleFill } from "react-icons/go";


const LessonsList = (props) => {
    const { user_course, user_chapters, user_lessons, handleIsCompleted } = props;
    const router = useRouter();

    return (
        <div className="w-full hidden md:block md:max-w-sm 2xl:max-w-md border-l border-neutral-200 overflow-auto">
            <ul>
                {user_chapters.map(user_chapter => {
                    return (
                        <li key={user_chapter.id}>
                            <div className="flex items-center p-4 justify-between border-b bg-neutral-100 border-neutral-200">
                                <h1 className="font-bold text-base text-neutral-900">{user_chapter.chapter.chapter_name}</h1>

                                <div>
                                    <SlArrowDown />
                                </div>
                            </div>
                            <ul className="border-b text-sm">
                                {user_lessons.map(user_lesson => {
                                    if (user_lesson.lesson.chapter === user_chapter.chapter.id) {
                                        return (
                                            <li key={user_lesson.id} className={`flex hover:bg-neutral-100
                                                ${router.asPath === `/course/${user_course.id}/player/chapter/${user_chapter.id}/lesson/${user_lesson.id}` && "bg-blue-100"}
                                            `}>
                                                <Link
                                                    href={`/course/${user_course.id}/player/chapter/${user_chapter.id}/lesson/${user_lesson.id}`}
                                                    className={`flex-1 flex gap-4 text-neutral-500 p-3 transition-all`}
                                                >
                                                    <PiVideoThin className="text-xl" />
                                                    <div className="flex-1">
                                                        <h4 className="font-normal line-clamp-1">{user_lesson.lesson.title}</h4>
                                                        <span className="text-xs">{user_lesson.lesson.duration} мин</span>
                                                    </div>
                                                    
                                                </Link>

                                                <div
                                                    title="Өтілген сабақты белгілеуді ұмытпа!" 
                                                    className={`text-xl text-neutral-900 ${!user_lesson.is_completed && "hover:bg-blue-200"}`}>
                                                    {user_lesson.is_completed ?
                                                        <div className="flex items-center w-full h-full px-4 cursor-pointer">
                                                            <GoCheckCircleFill />
                                                        </div>
                                                        :
                                                        <div 
                                                            onClick={() => handleIsCompleted(user_course.id, user_chapter.id, user_lesson.id)}
                                                            className="flex items-center w-full h-full px-4 cursor-pointer"
                                                        >
                                                            <LiaCircle />
                                                        </div>
                                                    }
                                                </div>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default LessonsList;