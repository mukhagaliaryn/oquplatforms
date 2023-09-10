import React from "react";
import { BtnLinkPrimary } from "@/src/components/Button";
import { getClassLevel, getProductType } from "@/src/utils/get";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setAlert } from "@/src/redux/actions/alert";


const ProductDetailComponent = ({ product, user_product, chapters, access }) => {
    const router = useRouter();
    const dispatch = useDispatch();


    const handleSubscribe = async product_id => {
        try {
            const response = await fetch(`${BACKEND_URL}/products/product/${product_id}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
            });

            if (response.status == 200) {
                router.push(`/product/${product_id}`);
                dispatch(setAlert("Сабаққа жазылды!", "success"));
            } else {
                dispatch(setAlert("Бір жерден қателік кетті!", "error"));
            }
        } catch (e) {
            console.log(e);
        }
    }

    const updateAndRoute = async product_id => {
        try {
            const response = await fetch(`${BACKEND_URL}/products/product/${product_id}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
            });

            if (response.status == 200) {
                router.push(`/product/${product.id}/chapter/${chapters[0].id}`);
            } else {
                dispatch(setAlert("Бір жерден қателік кетті!", "error"));
            }
        } catch (e) {
            console.log(e);
        }
    }

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
                            <span className="mr-2 font-bold">Категория:</span>
                            <span>{product.topic.category.name}</span>
                        </div>

                        <div className="flex mt-2">
                            <span className="mr-2 font-bold">Бағыты:</span>
                            <span>{product.topic.name} бағыты</span>
                        </div>

                        <div className="flex mt-2">
                            <span className="mr-2 font-bold">Сынып:</span>
                            <span>{getClassLevel(product.class_level)} - сынып</span>
                        </div>
                        
                        <div className="flex mt-2">
                            <span className="mr-2 font-bold">Типі:</span>
                            <span>{getProductType(product.product_type)}</span>
                        </div>

                        <div className="flex items-center mt-2">
                            <span className="font-bold">Өңдегендер:</span>
                            <div className="ml-2 h-full w-full flex items-center">
                                {product.authors.map(author => {
                                    return (
                                        <span className="mr-2" key={author.id}>{author.first_name} {author.last_name} </span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:flex pt-5">
                    {!user_product ?
                        <div className="mt-2 lg:mt-0 lg:mr-2">
                            <button
                                onClick={() => handleSubscribe(product.id)}
                                className="px-4 py-2 border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70">
                                Жазылу
                            </button>
                        </div>
                    :
                        <>
                            {chapters[0] &&
                                <button
                                    onClick={() => updateAndRoute(product.id)}
                                    className="border px-4 py-2 bg-white rounded-lg block text-center text-neutral-600 transition-all hover:border-neutral-900"
                                >
                                    Сабаққа өту
                                </button>
                            }
                        </>
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