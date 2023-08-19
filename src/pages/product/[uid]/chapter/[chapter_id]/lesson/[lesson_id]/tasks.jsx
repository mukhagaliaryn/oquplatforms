import { BtnLink } from "@/src/components/Button";
import ProductLayout from "@/src/layouts/product";
import Link from "next/link";
import React from "react";
import { GoCircle } from "react-icons/go";

const sidebar = [0, 1, 2, 3, 4, 5]


const LessonTask = () => {
    return (
        <ProductLayout>
            <div className="container mx-auto px-5 flex items-start mb-10">
                {/* Sidebar */}
                <div className="w-64 sticky top-0 mr-2 pt-5 hidden md:block">
                    <ul>
                        {sidebar.map((item, i) => {
                            return (
                                <li key={i}>
                                    <Link href={"/"} className={`flex mb-2 rounded-lg items-center px-4 py-3 ${item == 0 ? "text-white bg-orange-400" : "text-neutral-600"}`}>
                                        <GoCircle className="mr-2" />
                                        <span>Бірінші тапсырма</span>
                                    </Link>
                                </li>
                            )
                        })}

                    </ul>
                </div>

                {/* Content */}
                <div className="shadow flex-1 mt-5 rounded-xl ml-2 px-5">
                    <div className="mt-5">
                        <h1 className="text-4xl font-bold">Тест тапсырмалары</h1>
                        <span className="text-neutral-600 block mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quod obcaecati quibusdam blanditiis, aliquid, sint quia ullam culpa 
                            commodi cum nesciunt magnam, debitis totam adipisci dolorum quidem? 
                            At provident expedita voluptas.
                        </span>
                    </div>

                    <div className="mt-5">
                        <form>
                            {sidebar.map(item => {
                                return (
                                    <div className="border-b">
                                        {/* Question */}
                                        <div className="flex font-bold mt-5">
                                            <h1 className="mx-4">{item + 1}.</h1>
                                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, in?</h1>
                                        </div>
        
                                        {/* Variants */}
                                        <div className="my-5 text-neutral-600">
                                            <div className="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-orange-100">
                                                <input type="radio" />
                                                <span className="ml-2">Value 1</span>
                                            </div>
                                            <div className="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-orange-100">
                                                <input type="radio" />
                                                <span className="ml-2">Value 1</span>
                                            </div>
                                            <div className="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-orange-100">
                                                <input type="radio" />
                                                <span className="ml-2">Value 1</span>
                                            </div>
                                            <div className="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-orange-100">
                                                <input type="radio" />
                                                <span className="ml-2">Value 1</span>
                                            </div>
                                            <div className="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-orange-100">
                                                <input type="radio" />
                                                <span className="ml-2">Value 1</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </form>
                    </div>

                    <div className="my-5 flex justify-between">
                        <div className="flex items-center text-neutral-600">
                            <input 
                                type="checkbox" name="" id="full" 
                                className="mr-2"
                            />
                            <label htmlFor="full">Сұрақтарға толық жауап бердім</label>
                        </div>
                        <BtnLink href={"/product/23/chapter/23/lesson/232/tasks"}>Тестті аяқтау</BtnLink>
                    </div>
                </div>
            </div>
        </ProductLayout>
    )
}

export default LessonTask;