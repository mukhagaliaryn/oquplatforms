import React from "react";
import { motion } from "framer-motion";
import { PiUserLight } from "react-icons/pi";
import Link from "next/link";
import { CiBookmark, CiCalendarDate } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";


const AddictionSection = (props) => {
    const { course } = props;

    return (
        <motion.div
            className="bg-white mb-2 border border-neutral-200 transition-all rounded-lg overflow-hidden relative"
        >
            {/* Title */}
            <div className="border-b border-neutral-200 py-2 px-5 flex justify-between">
                <h1 className="text-neutral-900 font-semibold">Қосымша мәліметтер</h1>
            </div>
            {/* Content */}
            <div className="p-10">
                <div className="grid gap-10 grid-cols-2 max-w-xl 2xl:max-w-screen-xl w-full mx-auto">

                    {/* Author */}
                    <div className="flex gap-2 text-sm">
                        <div className="text-neutral-500 text-xl">
                            <PiUserLight />
                        </div>
                        <div className="grid gap-1">
                            <span className="block text-neutral-500">{course.authors.length > 1 ? "Авторлар" : "Авторы"}</span>
                            <div>
                                {course.authors.map(author => {
                                    let is_last = course.authors[course.authors.length - 1].id === author.id
                                    return (
                                        <Link
                                            key={author.id}
                                            href={"#"}
                                            className="text-blue-500 inline-block mr-1 transition-all active:scale-95"
                                        >
                                            {author.full_name}
                                            {!is_last && ","}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Last update */}
                    <div className="flex gap-2 text-sm">
                        <div className="text-neutral-500 text-xl">
                            <CiCalendarDate />
                        </div>
                        <div className="grid gap-1">
                            <span className="block text-neutral-500">Соңғы өзгерістер</span>
                            <span className="block text-neutral-900 font-medium">{course.last_update}</span>
                        </div>
                    </div>

                    {/* Last update */}
                    <div className="flex gap-2 text-sm">
                        <div className="text-neutral-500 text-xl">
                            <CiBookmark />
                        </div>
                        <div className="grid gap-1">
                            <span className="block text-neutral-500">Категория</span>
                            <Link 
                                href={`/topic/${course.topic.slug}`}
                                className="text-blue-500"
                            >{course.topic.name_kk}</Link>
                        </div>
                    </div>
                    
                    {/* Languages */}
                    <div className="flex gap-2 text-sm">
                        <div className="text-neutral-500 text-base">
                            <TfiWorld />
                        </div>
                        <div className="grid gap-1">
                            <span className="block text-neutral-500">{course.ln.length > 1 ? "Тілдер" : "Тілі"}</span>
                            <div>
                                {course.ln.map(l => {
                                    let is_last = course.ln[course.ln.length - 1].id === l.id
                                    return (
                                        <span
                                            key={l.id}
                                            className="text-neutral-900 block mr-1 font-medium"
                                        >
                                            {l.name}
                                            {!is_last && ","}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


export default AddictionSection;
