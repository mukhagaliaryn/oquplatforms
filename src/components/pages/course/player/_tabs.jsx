import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { LiaCircle } from "react-icons/lia";
import { PiVideoThin } from "react-icons/pi";
import { SlArrowDown } from "react-icons/sl";



const Tabs = (props) => {
    const { user_course, user_chapters, user_lessons, handleIsCompleted } = props;
    const router = useRouter();
    const [tabIndex, setTabIndex] = useState(1)

    const DecriptionText = (data) => {
        const description = { __html: data }
        return <div dangerouslySetInnerHTML={description} />
    }

    return (
        <div>
            {/* Heads */}
            <div className="flex border-b">
                <button
                    id="overview"
                    onClick={() => setTabIndex(1)}
                    className={`px-6 py-3 font-semibold text-neutral-900 transition-all border-b-4 focus:border-b-neutral-900 ${tabIndex === 1 ? "border-b-neutral-900" : "border-b-transparent"} md:hidden`}
                >
                    Мазмұны
                </button>

                <button
                    id="overview"
                    onClick={() => setTabIndex(2)}
                    className={`px-6 py-3 font-semibold text-neutral-900 transition-all border-b-4 focus:border-b-neutral-900 ${tabIndex === 2 ? "border-b-neutral-900" : "border-b-transparent"}`}
                >
                    Шолу
                </button>
            </div>

            {/* Contents */}
            <div>
                {/* Chapters */}
                <div className={`block md:hidden ${tabIndex === 1 ? "block" : "hidden"}`}>
                    <ul >
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
                                                            className={`flex-1 flex gap-4 text-neutral-500 p-3 transition-all`}
                                                        >
                                                            <PiVideoThin className="text-xl" />
                                                            <div className="flex-1">
                                                                <h4 className="font-normal line-clamp-1">{user_lesson.lesson.title}</h4>
                                                                <span className="text-xs">{user_lesson.lesson.duration} мин</span>
                                                            </div>

                                                        </Link>

                                                        <div className="text-xl text-neutral-900 px-2 cursor-pointer">
                                                            {user_lesson.is_completed ?
                                                                <GoCheckCircleFill />
                                                                :
                                                                <div onClick={() => handleIsCompleted(user_course.id, user_chapter.id, user_lesson.id)}>
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

                {/* Review */}
                <div className={`${tabIndex === 2 ? "block" : "hidden"}`}>
                    <div className="p-10 border-b border-neutral-200">
                        <h1 className="text-2xl font-bold">{user_course.course.name}</h1>
                        <span className="block mt-2 text-sm text-neutral-500">{user_course.course.about}</span>
                    </div>

                    <div className="p-10 border-b border-neutral-200">
                        <div className="text-neutral-500 text-sm block">
                            {DecriptionText(user_course.course.description)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs;