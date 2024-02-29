import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { motion } from "framer-motion";
import ChapterAccording from "./_according";


const ChapterSection = (props) => {
    const { chapters, lessons } = props;
    const [show, setShow] = useState(false);


    return (
        <motion.div
            animate={{ height: show ? "100%" : "20rem" }}
            className="bg-white mb-2 border border-neutral-200 transition-all rounded-lg overflow-hidden relative"
        >
            {/* Title */}
            <div className="border-b border-neutral-200 py-2 px-5 flex justify-between cursor-pointer" onClick={() => setShow(!show)}>
                <h1 className="text-neutral-900 font-semibold">Курс жоспары</h1>

                <button className="text-neutral-900">
                    {show ? <SlArrowUp /> : <SlArrowDown />}
                </button>
            </div>
            {/* Content */}
            <div className="p-5">
                <div className="gap-5">
                    {chapters.map(chapter => {
                        return (
                            <ChapterAccording key={chapter.id} chapter={chapter} lessons={lessons} />
                        )
                    })}
                </div>
            </div>

            {!show &&
                <div className="absolute bottom-0 left-0 w-full h-20 cursor-pointer" id="shadow" onClick={() => setShow(!show)}></div>
            }
        </motion.div>
    )
}


export default ChapterSection;