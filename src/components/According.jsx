import React, { useState } from "react";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";


const According = (props) => {
    const [content, setContent] = useState(false);

    return (
        <div className="mb-5 rounded-xl shadow overflow-hidden">
            {/* Head */}
            <div 
                className="flex justify-between items-center cursor-pointer p-5 bg-neutral-50" 
                onClick={() => setContent(!content)}
            >
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold">{props.title}</h1>
                    <span className="text-neutral-600">{props.content}</span>
                </div>

                <div className="text-2xl text-neutral-600">
                    {content ? <CiCircleChevUp /> : <CiCircleChevDown />}
                </div>
            </div>


            {/* Content */}
            <div 
                className={`${content ? "block" : "hidden"} border-t`}
            >
                {props.children}
            </div>
        </div>
    )
}

export default According;