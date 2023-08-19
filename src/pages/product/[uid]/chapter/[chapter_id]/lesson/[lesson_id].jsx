import { BtnLink } from "@/src/components/Button";
import ProductLayout from "@/src/layouts/product";
import Link from "next/link";
import React from "react";
import { GoCircle } from "react-icons/go";


const sidebar = [0, 1, 2, 3, 4, 5]

const Lesson = () => {
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
                        <h1 className="text-4xl font-bold">Сабақтың тақырыбы</h1>
                        <span className="text-neutral-600 block mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quod obcaecati quibusdam blanditiis, aliquid, sint quia ullam culpa 
                            commodi cum nesciunt magnam, debitis totam adipisci dolorum quidem? 
                            At provident expedita voluptas.
                        </span>
                    </div>

                    <div className="mt-5">
                        <div className="h-[580px] rounded-xl bg-black"></div>
                    </div>

                    <div className="my-5 flex justify-between">
                        <div className="flex items-center text-neutral-600">
                            <input 
                                type="checkbox" name="" id="full" 
                                className="mr-2"
                            />
                            <label htmlFor="full">Видеоны толық көріп шықтым</label>
                        </div>
                        <BtnLink href={"/product/23/chapter/23/lesson/232/tasks"}>Келесі тапсырмаға өту</BtnLink>
                    </div>
                </div>
            </div>
        </ProductLayout>

    )
}

export default Lesson;