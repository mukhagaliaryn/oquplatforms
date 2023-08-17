import According from "@/src/components/According";
import { BtnLink } from "@/src/components/Button";
import MainLayout from "@/src/layouts/main";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";


const Product = () => {
    const router = useRouter();

    return (
        <MainLayout
            title={router.query.uid}
            content={""}
        >
            <div className="bg-neutral-50 border-b">
                <div className="container mx-auto px-5 py-5 flex flex-col-reverse lg:flex-row lg:py-10">
                    <div className="flex-1 rounded-xl xl:mr-5">
                        <div>
                            <div className="pb-5 flex items-center justify-center lg:justify-start">
                                <h1 className="text-4xl lg:text-6xl font-bold">Информатика</h1>
                                <div className="text-2xl ml-2 lg:text-4xl lg:ml-5 text-green-500">
                                    <CiCircleCheck />
                                </div>
                            </div>
                            <div className="py-5 text-neutral-600 border-b border-t">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Placeat aut, deleniti reprehenderit ipsum in dolor nihil nisi
                                odit ducimus assumenda libero neque recusandae consequuntur fugit
                                accusamus eos porro minus temporibus!
                            </div>
                            <div className="flex flex-col py-5 text-neutral-600 border-b">
                                <div className="flex mt-2">
                                    <span className="mr-2 font-bold">Сынып:</span>
                                    <span>7 - сынып</span>
                                </div>
                                <div className="flex mt-2">
                                    <span className="mr-2 font-bold">Типі:</span>
                                    <span>Жалпы орта мектептерге арналған пән</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <span className="font-bold">Өңдегендер:</span>
                                    <div className="ml-2 h-full w-full flex items-center">
                                        <span className="mr-2">Қадырали Орынбасар,</span>
                                        <span >Жалғасбек Тәліпбай</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex pt-5">
                            <BtnLink href={"/"}>
                                Жазылу
                            </BtnLink>
                        </div>
                    </div>

                    <div className="lg:w-96 lg:h-96 rounded-xl overflow-hidden mx-auto mb-5 lg:ml-5">
                        <Image
                            src={"/scheme/informatics.png"} width={512} height={512}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-5 py-10 xl:flex">
                <div className="flex-1 xl:mr-5">
                    {/* Description */}
                    <div className="mb-10">
                        <h1 className="text-2xl lg:text-4xl font-bold">Пән жайлы</h1>
                        <span className="text-neutral-600 mt-5 block">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Recusandae, quibusdam ut a optio voluptate velit sed! Aspernatur quo aut ad,
                            saepe assumenda possimus dicta, voluptate in consequuntur cupiditate repellat
                            magnam obcaecati voluptas animi asperiores culpa illo. Provident, inventore?
                            Accusamus nihil quasi odio delectus, eos architecto alias. Maiores sit,
                            accusamus dignissimos, sapiente tempora eos pariatur ducimus, magni libero
                            id facere ipsum alias fuga! Fugiat, dolores porro architecto iusto modi
                            blanditiis adipisci ullam aliquid reprehenderit vitae ducimus, qui maiores
                            saepe sunt odit aliquam, quos assumenda? Consectetur cumque fugit nulla,
                            beatae ullam alias cum in, eius dolorum provident animi eligendi voluptatibus
                            et ea?
                        </span>
                    </div>

                    {/* Purpose */}
                    <div className="mb-10">
                        <h1 className="text-2xl lg:text-4xl font-bold">Оқыту мақсаттары</h1>
                        <div className="flex flex-col mt-5">
                            <div className="flex items-center py-5 border-b">
                                <CiCircleCheck className="block text-2xl mr-2 text-green-500" />
                                <span className="text-neutral-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, similique.</span>
                            </div>
                            <div className="flex items-center py-5 border-b">
                                <CiCircleCheck className="block text-2xl mr-2 text-green-500" />
                                <span className="text-neutral-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, similique.</span>
                            </div>
                            <div className="flex items-center py-5 border-b">
                                <CiCircleCheck className="block text-2xl mr-2 text-green-500" />
                                <span className="text-neutral-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, similique.</span>
                            </div>
                        </div>
                    </div>

                    {/* Chapters */}
                    <div>
                        <h1 className="text-2xl lg:text-4xl font-bold">Мазмұны</h1>

                        <div className="pt-5">
                            <According
                                title={"Бірінші бөлім"}
                                content={"Бірінші бөлім контенті"}
                            />

                            <According
                                title={"Екінші бөлім"}
                                content={"Екінші бөлім контенті"}
                            />

                            <According
                                title={"Үшінші бөлім"}
                                content={"Үшінші бөлім контенті"}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full mt-10 xl:w-96 xl:ml-5 xl:mt-0">
                    <h1 className="text-2xl lg:text-4xl font-bold">Сипаттамалары</h1>
                    <div className="flex flex-col my-5 text-neutral-600">
                        <div className="flex items-center py-3 border-b">
                            <span className="font-bold mr-2">Lorem:</span>
                            <span className="flex-1">Lorem ipsum dolor.</span>
                        </div>
                        <div className="flex items-center py-3 border-b">
                            <span className="font-bold mr-2">Lorem:</span>
                            <span className="flex-1">Lorem ipsum dolor.</span>
                        </div>
                        <div className="flex items-center py-3 border-b">
                            <span className="font-bold mr-2">Lorem:</span>
                            <span className="flex-1">Lorem ipsum dolor.</span>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>
    )
}

export default Product;