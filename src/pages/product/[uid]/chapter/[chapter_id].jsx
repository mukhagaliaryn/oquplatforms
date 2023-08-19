import According from "@/src/components/According";
import { BtnLink } from "@/src/components/Button";
import ProductLayout from "@/src/layouts/product";
import Link from "next/link";
import React from "react";
import { GoCircle } from "react-icons/go";

const sidebar = [0, 1, 2, 3, 4, 5]
const ls = [0, 1, 2, 3]


const Chapter = () => {

    return (
        <ProductLayout>
            <div className="container mx-auto px-5 flex items-start">
                {/* Sidebar */}
                <div className="w-64 sticky top-0 mr-2 pt-5 hidden md:block">
                    <ul>
                        {sidebar.map((item, i) => {
                            return (
                                <li key={i}>
                                    <Link href={"/"} className={`flex mb-2 rounded-lg items-center px-4 py-3 ${item == 0 ? "text-white bg-orange-400" : "text-neutral-600"}`}>
                                        <GoCircle className="mr-2" />
                                        <span>Бірінші бөлім</span>
                                    </Link>
                                </li>
                            )
                        })}

                    </ul>
                </div>

                {/* Content */}
                <div className="flex-1 ml-2 pt-5">
                    <div className="shadow rounded-xl p-10">
                        <h1 className="text-4xl font-bold">Бірінші бөлім</h1>
                        <span className="text-neutral-600 block mt-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Qui enim ratione, debitis dolore totam dolorum amet. Natus
                            officia adipisci ratione.
                        </span>
                    </div>

                    <div className="mt-10">
                        {sidebar.map(item => {
                            return (
                                <According title={"Сабақ тақырыбы"} content={"Сабақ жайлы мәлімет"} key={item}>
                                    {ls.map(item => {
                                        return (
                                            <div className="flex items-center justify-between text-neutral-600 p-5 border-b" key={item}>
                                                <div className="flex items-center">
                                                    <GoCircle className="text-xl mr-2" />
                                                    <span>Сабақтың тапсырмалары</span>
                                                </div>

                                                <div className="flex items-center">
                                                    {item == 0 &&
                                                        <BtnLink href={"/product/23/chapter/23/lesson/232"}>Сабақты бастау</BtnLink>}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </According>
                            )
                        })}
                    </div>
                </div>
            </div>
        </ProductLayout>
    )
}

export default Chapter;