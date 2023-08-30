import React from "react";


const DescriptionComponent = ({ product }) => {
    return (
        <div className="mb-10">
            <h1 className="text-2xl lg:text-4xl font-bold">Пән жайлы</h1>
            <span className="text-neutral-600 mt-5 block ">
                {product.description}
            </span>
        </div>
    )
}

export default DescriptionComponent;