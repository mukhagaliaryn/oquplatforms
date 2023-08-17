import React, { useState } from "react";
import { CiCircleChevDown, CiCircleChevUp, CiTextAlignLeft, CiTimer } from "react-icons/ci";


const According = (props) => {
    const [content, setContent] = useState(false);

    return (
        <div className="my-5 rounded-xl shadow overflow-hidden">
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

            <div 
                className={`${content ? "block" : "hidden"} border-t`}
            >
                <div className="flex items-center justify-between text-neutral-600 p-5 border-b">
                    <div className="flex items-center">
                        <CiTextAlignLeft className="text-xl mr-2"/>
                        <span>Сабақтың тақырыбы 1</span>
                    </div>

                    <div className="flex items-center">
                        <CiTimer className="text-xl mr-2"/>
                        <span>40:00</span>
                    </div>
                </div>
                
                <div className="flex items-center justify-between text-neutral-600 p-5 border-b">
                    <div className="flex items-center">
                        <CiTextAlignLeft className="text-xl mr-2"/>
                        <span>Сабақтың тақырыбы 2</span>
                    </div>

                    <div className="flex items-center">
                        <CiTimer className="text-xl mr-2"/>
                        <span>40:00</span>
                    </div>
                </div>

                <div className="flex items-center justify-between text-neutral-600 p-5 border-b">
                    <div className="flex items-center">
                        <CiTextAlignLeft className="text-xl mr-2"/>
                        <span>Сабақтың тақырыбы 3</span>
                    </div>

                    <div className="flex items-center">
                        <CiTimer className="text-xl mr-2"/>
                        <span>40:00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default According;