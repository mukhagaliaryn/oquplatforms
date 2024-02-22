import React from "react";
import { motion } from "framer-motion";
import { PiFolderSimpleFill, PiVideoThin } from "react-icons/pi";


const ChapterAccording = (props) => {
    const { chapter, lessons } = props;

    return (
        <div className="">
            <div className="flex justify-between items-center text-neutral-900 py-4 border-b bg-neutral-100 border-neutral-200 transition-all cursor-pointer">
                <div className="flex items-center gap-2">
                    <PiFolderSimpleFill className="text-xl" />
                    <h1 className="text-sm font-medium">{chapter.chapter_name}</h1>
                </div>
            </div>

            <motion.div
                className=""
            >
                {lessons.map(lesson => {
                    if (lesson.chapter === chapter.id) {
                        return (
                            <div 
                                key={lesson.id} 
                                className="py-3 text-sm text-neutral-500 flex justify-between items-center"
                            >
                                <div className="flex items-center gap-2">
                                    <PiVideoThin className="text-xl"/>
                                    <span className="block">{lesson.title}</span>
                                </div>

                                <span className="block">{lesson.duration}:00 мин</span>
                            </div>
                        )
                    }
                })}
            </motion.div>
        </div>

    )
}


export default ChapterAccording;