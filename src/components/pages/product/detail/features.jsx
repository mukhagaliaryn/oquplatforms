import React from "react";


const FeaturesComponent = ({ features }) => {
    return (
        <div className="w-full mt-10 xl:w-96 xl:ml-5 xl:mt-0">
            <h1 className="text-2xl lg:text-4xl font-bold">Сипаттамалары</h1>
            <div className="flex flex-col my-5 text-neutral-600">
                {features.map((item) => {
                    return (
                        <div className="flex items-center py-3 border-b" key={item.id}>
                            <span className="font-bold mr-2">{item.label}:</span>
                            <span className="flex-1">{item.item}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FeaturesComponent;