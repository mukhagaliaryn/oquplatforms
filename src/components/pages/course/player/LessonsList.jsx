import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { PiVideoCameraLight } from "react-icons/pi";
import { SlArrowDown } from "react-icons/sl";


const LessonsList = (props) => {
    const { course, chapters, lessons } = props;
    const router = useRouter();

    return (
        <div className="w-full hidden md:block md:max-w-sm xl:max-w-md border-l border-neutral-200 overflow-auto">
            <ul>
                {chapters.map(chapter => {
                    return (
                        <li key={chapter.id}>
                            <div className="flex items-center p-4 justify-between border-b bg-neutral-100 border-neutral-200">
                                <h1 className="font-bold text-base text-neutral-900">{chapter.chapter_name}</h1>

                                <div>
                                    <SlArrowDown />
                                </div>
                            </div>
                            <ul className="border-b text-sm">
                                {lessons.map(lesson => {
                                    if (lesson.chapter === chapter.id) {
                                        return (
                                            <li key={lesson.id} className={`flex items-center hover:bg-neutral-200
                                                ${router.asPath === `/course/${course.id}/player/chapter/${chapter.id}/lesson/${lesson.id}` && "bg-blue-200"}
                                            `}>
                                                <Link
                                                    href={`/course/${course.id}/player/chapter/${chapter.id}/lesson/${lesson.id}`}
                                                    className={`flex-1 flex items-center gap-4 text-neutral-500 px-4 py-3 transition-all`}
                                                >
                                                    <PiVideoCameraLight className="text-xl"/>
                                                    {lesson.title}
                                                </Link>

                                                <input type="checkbox" className="block mr-2" />
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