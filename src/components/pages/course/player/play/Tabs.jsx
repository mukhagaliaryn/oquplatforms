import Image from "next/image";
import React, { useState } from "react";
import LessonItem from "../lessons/LessonItem";



const Tabs = (props) => {
    const { user_course, user_chapters, user_lessons, handleIsCompleted } = props;
    const [tabIndex, setTabIndex] = useState(1);

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
                    className={`px-6 py-3 font-semibold text-neutral-900 transition-all border-b-4 focus:border-b-neutral-900 ${tabIndex === 1 ? "border-b-neutral-900" : "border-b-transparent"} hidden md:block`}
                >
                    Шолу
                </button>

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
                    className={`px-6 py-3 font-semibold text-neutral-900 transition-all border-b-4 focus:border-b-neutral-900 ${tabIndex === 2 ? "border-b-neutral-900" : "border-b-transparent"} md:hidden`}
                >
                    Шолу
                </button>
            </div>

            {/* Contents */}
            <div className="pb-12 sm:pb-0">
                {/* Desktop Review */}
                <div className={`${tabIndex === 1 ? "block" : "hidden"} hidden md:block`}>
                    <div className="p-10 border-b border-neutral-200">
                        <h1 className="text-2xl font-bold">{user_course.course.name}</h1>
                        <span className="block mt-2 text-sm text-neutral-500">{user_course.course.about}</span>
                    </div>

                    {/* Description */}
                    <div className="flex gap-4 p-10 border-b border-neutral-200">
                        <div className="text-sm w-36 text-neutral-500 font-semibold">
                            <span className="block">Толық сипаттамасы</span>
                        </div>
                        <div className="flex-1 text-neutral-500 text-justify text-sm block" id="parser">
                            {DecriptionText(user_course.course.description)}
                        </div>
                    </div>

                    {/* Authors */}
                    <div className="flex gap-4 p-10 border-b border-neutral-200">
                        <div className="text-sm w-36 text-neutral-500 font-semibold">
                            <span className="block">Авторы</span>
                        </div>
                        <div className="flex-1 text-neutral-500 text-justify text-sm">
                            {user_course.course.authors.map(author => {
                                return (
                                    <div key={author.id} className="flex gap-2">
                                        <Image
                                            src={author.image ? author.image : "/images/user.png"} width={512} height={512} alt={author.full_name}
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div className="">
                                            <h1 className="text-neutral-900 font-semibold">{author.full_name}</h1>
                                            <span className="text-xs text-blue-500 block">{author.email}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Chapters */}
                <div className={`block md:hidden ${tabIndex === 1 ? "block" : "hidden"}`}>
                    <ul >
                        {user_chapters.map(user_chapter => {
                            return (
                                <li key={user_chapter.id}>
                                    <LessonItem
                                        user_course={user_course}
                                        user_chapter={user_chapter}
                                        user_lessons={user_lessons}
                                        handleIsCompleted={handleIsCompleted}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* Review */}
                <div className={`${tabIndex === 2 ? "block" : "hidden"} block md:hidden`}>
                    <div className="p-10 border-b border-neutral-200">
                        <h1 className="text-2xl font-bold">{user_course.course.name}</h1>
                        <span className="block mt-2 text-sm text-neutral-500">{user_course.course.about}</span>
                    </div>

                    {/* Description */}
                    <div className="p-10 border-b border-neutral-200">
                        <div className="text-sm mb-2 text-neutral-500 font-semibold">
                            <span className="block">Толық сипаттамасы</span>
                        </div>
                        <div className="text-neutral-500 text-justify text-sm block" id="parser">
                            {DecriptionText(user_course.course.description)}
                        </div>
                    </div>

                    {/* Authors */}
                    <div className="p-10 border-b border-neutral-200">
                        <div className="text-sm mb-2 text-neutral-500 font-semibold">
                            <span className="block">Авторы</span>
                        </div>
                        <div className="text-neutral-500 text-justify text-sm">
                            {user_course.course.authors.map(author => {
                                return (
                                    <div key={author.id} className="flex gap-2">
                                        <Image
                                            src={author.image ? author.image : "/images/user.png"} width={512} height={512} alt={author.full_name}
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div className="">
                                            <h1 className="text-neutral-900 font-semibold">{author.full_name}</h1>
                                            <span className="text-xs text-blue-500 block">{author.email}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs;