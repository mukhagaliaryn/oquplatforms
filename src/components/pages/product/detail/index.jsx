import React from "react";
import { BtnLink, BtnLinkPrimary } from "@/src/components/Button";
import { getClassLevel } from "@/src/utils/get";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";


const ProductDetailComponent = ({ product, user_type, chapters }) => {
    return (
        <div className="bg-neutral-50 border-b">
            <div className="container mx-auto px-5 py-5 flex flex-col-reverse lg:flex-row lg:py-10">
                <div className="flex-1 rounded-xl xl:mr-5">
                    <div>
                        <div className="pb-5 flex items-center justify-center lg:justify-start">
                            <h1 className="text-4xl lg:text-6xl font-bold">{product.name}</h1>
                            <div className="text-2xl ml-2 lg:text-4xl lg:ml-5 text-green-500">
                                <CiCircleCheck />
                            </div>
                        </div>
                        <div className="py-5 text-neutral-600 border-b border-t">
                            {product.about}
                        </div>
                        <div className="flex flex-col py-5 text-neutral-600 border-b">
                            <div className="flex mt-2">
                                <span className="mr-2 font-bold">Сынып:</span>
                                <span>{getClassLevel(product.class_level)} - сынып</span>
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
                        {user_type !== "STUDENT" &&
                            <div className="mt-2 lg:mt-0 lg:mr-2">
                                <BtnLink href={"/"}>
                                    Жазылу
                                </BtnLink>
                            </div>
                        }
                        {chapters[0] &&
                            <BtnLinkPrimary href={`/product/${product.id}/chapter/${chapters[0].id}`}>
                                Сабаққа өту
                            </BtnLinkPrimary>
                        }
                    </div>
                </div>

                <div className="lg:w-96 lg:h-96 rounded-xl overflow-hidden mx-auto mb-5 lg:ml-5">
                    <Image
                        src={product.poster} width={512} height={512} alt="poster"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductDetailComponent;