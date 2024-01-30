import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";


const DescriptionSection = (props) => {
    const { course } = props;
    const [show, setShow] = useState(false);

    const DecriptionText = (data) => {
        const description = { __html: data}
        return <div dangerouslySetInnerHTML={description} />
    }

    return (
        <div className={`bg-white mb-2 border border-neutral-200 transition-all rounded-lg overflow-hidden relative ${show ? "h-full" : "h-80"}`}>
            {/* Title */}
            <div className="border-b border-neutral-200 py-2 px-5 flex justify-between" onClick={() => setShow(!show)}>
                <h1 className="text-neutral-900 font-semibold">Толық сипаттама</h1>

                <button className="text-neutral-900">
                    {show ? <SlArrowUp /> : <SlArrowDown />}
                </button>
            </div>
            {/* Content */}
            <div className="p-5">
                <div className="text-neutral-500 text-xs block">
                    {DecriptionText(course.description)}
                </div>
            </div>

            {!show &&
                <div className="absolute bottom-0 left-0 w-full h-10 cursor-pointer" id="shadow" onClick={() => setShow(!show)}></div>
            }
        </div>
    )
}


export default DescriptionSection;
