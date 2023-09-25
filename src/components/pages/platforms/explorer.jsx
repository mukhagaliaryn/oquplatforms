import React from "react";
import { CiSearch } from "react-icons/ci";

const ExlorerComponent = ({ categories, topics }) => {
    return (
        <div>
            <div
                style={{ backgroundImage: "url('/landing/main.jpg')" }}
                className="py-20 bg-cover px-5"
            >
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-4xl font-bold md:text-6xl">
                        <span className="mr-2 text-orange-400 font-poppins">OQU</span>
                        платформасының онлайн қосымшалары
                    </h1>
                    <span className="mt-5 block text-neutral-600">
                        Оқу бағдарламасынан бөлек өзіңе ұнайтын онлайн курстарды оқып үйрен!
                    </span>
                </div>
                <form className="max-w-2xl mx-auto mt-10">
                    <div className="relative">
                        <input
                            type="text" placeholder="Іздеу..."
                            className="pr-6 py-3 pl-11 rounded-lg w-full outline-none border text-neutral-600 transition-all focus:shadow"
                        />
                        <button className="absolute left-3 top-3 text-neutral-600">
                            <CiSearch className="text-2xl" />
                        </button>
                    </div>
                </form>
            </div>

            {/* All topics */}
            <div className="container mx-auto px-5 my-10">
                {categories.map(item => {
                    return (
                        <div key={item.id}>
                            <h1 className="text-2xl font-bold ">{item.name}</h1>
                            <div className="grid gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 my-5">
                                {topics.map(topic => {
                                    if (topic.category.id === item.id)
                                        return (
                                            <div
                                                key={topic.id}
                                                className="h-56 w-full bg-orange-300 text-white rounded-xl flex justify-center items-center"
                                            >
                                                <h1 className="text-xl">{topic.name}</h1>
                                            </div>
                                        )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExlorerComponent;
