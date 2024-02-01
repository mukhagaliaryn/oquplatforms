import MainLayout from "@/src/layouts/main";
import { setTopicIcon } from "@/src/utils/topicIcon";
import { useRouter } from "next/router";
import React from "react";


const Category = () => {
    const router = useRouter();
    
    return (
        <MainLayout
            title={`${router.query.slug} - OQU platforms`}
            content={"Категория парақшасы - OQU platforms"}
        >
            <div>
                <div className="bg-neutral-900 h-96 rounded-lg relative">
                    <div className="w-full h-full p-10 flex gap-6 items-center text-neutral-100">
                        <div className="text-8xl">
                            {setTopicIcon(router.query.slug)}
                        </div>
                        <div className="flex-1">
                            <h1 className="text-5xl font-semibold">Веб дизайн</h1>
                            <span className="block text-neutral-500">Дизайн</span>
                        </div>
                    </div>

                    <div className="absolute h-10 w-full bottom-0 left-0" id="topic"></div>
                </div>

                <div className="-translate-y-10 px-2 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
                    <div className="h-40 bg-white rounded-lg shadow-sm"></div>
                    <div className="h-40 bg-white rounded-lg shadow-sm"></div>
                    <div className="h-40 bg-white rounded-lg shadow-sm"></div>
                    <div className="h-40 bg-white rounded-lg shadow-sm"></div>
                    <div className="h-40 bg-white rounded-lg shadow-sm"></div>
                    <div className="h-40 bg-white rounded-lg shadow-sm"></div>
                    <div className="h-40 bg-white rounded-lg shadow-sm"></div>
                    

                </div>
            </div>
        </MainLayout>

    )
}

export default Category;