import React from "react";
import { getProductType } from "@/src/utils/get";
import Image from "next/image";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setAlert } from "@/src/redux/actions/alert";
import parse from 'html-react-parser';
import { GoCheckCircleFill } from "react-icons/go";


const ProductDetailComponent = (props) => {
    const { user_product, first_user_chapter_id, chapters, access } = props;
    const router = useRouter();
    const dispatch = useDispatch();


    const handleSubscribe = async product_id => {
        try {
            const response = await fetch(`${BACKEND_URL}/product/${product_id}/`, {
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
            const response = await fetch(`${BACKEND_URL}/product/${product_id}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
            });

            if (response.status == 200) {
                router.push(`/product/${product_id}/chapter/${first_user_chapter_id}`);
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
                        <h1 className="text-4xl lg:text-6xl font-bold">{user_product.product.name}</h1>
                        <div className="text-2xl ml-2 lg:text-4xl lg:ml-5 text-green-500">
                            <GoCheckCircleFill />
                        </div>
                    </div>
                    <div className="py-5 text-neutral-600 border-b border-t">
                        {parse(user_product.product.about)}
                    </div>

                    <div className="flex flex-col py-5 text-neutral-600 border-b">
                        <div className="flex mt-2">
                            <span className="mr-2 font-bold">Типі:</span>
                            <span>{getProductType(user_product.product.product_type)}</span>
                        </div>

                        <div className="flex mt-2">
                            <span className="mr-2 font-bold">Категория:</span>
                            <span>{user_product.product.topic.category.name}</span>
                        </div>

                        <div className="flex mt-2">
                            <span className="mr-2 font-bold">Бағыты:</span>
                            <span>{user_product.product.topic.name}</span>
                        </div>

                        <div className="flex items-center mt-2">
                            <span className="font-bold">Өңдегендер:</span>
                            <div className="ml-2 h-full w-full flex items-center">
                                {user_product.product.authors.map(author => {
                                    return (
                                        <span className="mr-2" key={author.id}>{author.first_name} {author.last_name} </span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:flex pt-5">
                    {!user_product.is_subscribe ?
                        <div className="mt-2 lg:mt-0 lg:mr-2">
                            <button
                                onClick={() => handleSubscribe(user_product.id)}
                                className="px-4 py-2 border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70">
                                Жазылу
                            </button>
                        </div>
                    :
                        <>
                            {first_user_chapter_id &&
                                <button
                                    onClick={() => updateAndRoute(user_product.id)}
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
                    src={user_product.product.poster ? user_product.product.poster : "/icons/product.png"} width={512} height={512} alt="poster"
                    className="w-full h-full"
                    priority
                />
            </div>
        </div>
    </div>
)
}

export default ProductDetailComponent;