import React from "react";
import parse from 'html-react-parser';

const DescriptionComponent = ({ product }) => {

    return (
        <div className="mb-10">
            <h1 className="text-2xl lg:text-4xl font-bold">Пән жайлы</h1>
            <div className="text-neutral-600 mt-5 block parser">
                {parse(product.description)}
            </div>
        </div>
    )
}

export default DescriptionComponent;