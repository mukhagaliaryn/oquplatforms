import ProductLayout from "@/src/layouts/product";
import React from "react";


const Chapter = () => {
    return (
        <ProductLayout>
            <div className="container mx-auto px-5 my-10 flex items-start">
                <div className="w-64 bg-orange-100 rounded-xl mr-1 sticky top-20">
                    <h1>sidebar</h1>
                    <h1>sidebar</h1>
                    <h1>sidebar</h1>
                    <h1>sidebar</h1>
                    <h1>sidebar</h1>
                </div>
                <div className="flex-1 bg-orange-100 rounded-xl ml-1">
                    <div className="h-64"></div>
                    <div className="h-64"></div>
                    <div className="h-64"></div>
                    <div className="h-64"></div>
                </div>

            </div>
        </ProductLayout>
    )
}

export default Chapter;