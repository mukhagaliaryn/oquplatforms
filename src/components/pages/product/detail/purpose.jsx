import React from "react";
import { CiCircleCheck } from "react-icons/ci";


const PurposeComponent = ({ purposes }) => {
    return (
        <div className="mb-10">
            <h1 className="text-2xl lg:text-4xl font-bold">Оқыту мақсаттары</h1>
            <div className="flex flex-col mt-5">
                {purposes.map(item => {
                    return (
                        <div className="flex items-center py-5 border-b" key={item.id}>
                            <CiCircleCheck className="block text-2xl mr-2 text-green-500" />
                            <span className="text-neutral-600">{item.item}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PurposeComponent;