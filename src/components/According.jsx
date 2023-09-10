import React, { useState } from "react";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { GoCheckCircleFill } from "react-icons/go";


const According = (props) => {
    const [content, setContent] = useState(false);

    return (
        <div className="mb-5 rounded-xl shadow overflow-hidden">
            {/* Head */}
            <div 
                className={`flex justify-between items-center cursor-pointer p-5 ${props.status ? "bg-green-50" : "bg-neutral-50"}`} 
                onClick={() => setContent(!content)}
            >
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold">{props.title}</h1>
                    <span className="text-neutral-600">{props.content}</span>
                </div>

                <div className="text-2xl text-neutral-600">
                    {props.status ?
                        <GoCheckCircleFill className="text-green-500" />
                    :
                        <>
                            {content ? <CiCircleChevUp /> : <CiCircleChevDown />}
                        </>
                    }
                    
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