import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { GoCheck } from "react-icons/go";
import { motion } from "framer-motion";


const PurposeSection = (props) => {
    const { purposes } = props;
    const [show, setShow] = useState(false);


    return (
        <motion.div
            animate={{ height: show ? "100%" : "20rem" }}
            className="bg-white mb-2 border border-neutral-200 transition-all rounded-lg overflow-hidden relative"
        >
            {/* Title */}
            <div className="border-b border-neutral-200 py-2 px-5 flex justify-between" onClick={() => setShow(!show)}>
                <h1 className="text-neutral-900 font-semibold">Өтілу мақсаты</h1>

                <button className="text-neutral-900">
                    {show ? <SlArrowUp /> : <SlArrowDown />}
                </button>
            </div>
            {/* Content */}
            <div className="p-5">
                <div className="grid gap-5 grid-cols-2">
                    {purposes.map(purpose => (
                        <div className="flex" key={purpose.id}>
                            <GoCheck className="mr-2 text-neutral-900"/>
                            <span className="block text-sm text-neutral-500 flex-1">{purpose.item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {!show &&
                <div className="absolute bottom-0 left-0 w-full h-10 cursor-pointer" id="shadow" onClick={() => setShow(!show)}></div>
            }
        </motion.div>
    )
}


export default PurposeSection;