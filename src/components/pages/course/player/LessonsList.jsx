import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { PiVideoCameraLight } from "react-icons/pi";
import { SlArrowDown } from "react-icons/sl";
import { LiaCircle } from "react-icons/lia";
import { GoCheckCircleFill } from "react-icons/go";


const LessonsList = (props) => {
    const { user_course, user_chapters, user_lessons } = props;
    const router = useRouter();
    const [completed, setCompleted] = useState(false)

    return (
        <div className="w-full hidden md:block md:max-w-sm xl:max-w-md border-l border-neutral-200 overflow-auto">
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
                                            <li key={user_lesson.id} className={`flex items-center hover:bg-neutral-100
                                                ${router.asPath === `/course/${user_course.id}/player/chapter/${user_chapter.id}/lesson/${user_lesson.id}` && "bg-blue-100"}
                                            `}>
                                                <Link
                                                    href={`/course/${user_course.id}/player/chapter/${user_chapter.id}/lesson/${user_lesson.id}`}
                                                    className={`flex-1 flex items-center gap-4 text-neutral-500 px-4 py-3 transition-all`}
                                                >
                                                    <PiVideoCameraLight className="text-xl"/>
                                                    {user_lesson.lesson.title}
                                                </Link>

                                                <div className="text-2xl text-neutral-900 px-3 cursor-pointer" onClick={() => setCompleted(!completed)}>
                                                    {completed ? <GoCheckCircleFill /> : <LiaCircle/>}
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