import { getClassLevel } from "@/src/utils/get";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const CardProduct = (props) => {
    const { user_products } = props;

    return (
        <div className="mt-10">
            <h1 className="text-2xl font-bold ">Өтілетін бағдарламалар</h1>
            <div className="grid gap-2 md:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 my-5">
                {user_products.map(user_product => {
                    return (
                        <Link
                            key={user_product.id}
                            href={`/product/${user_product.id}`}
                            className="w-full rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
                        >
                            <Image
                                src={user_product.product.poster ? user_product.product.poster : "/icons/product.png"} width={512} height={512}
                                className="w-full block"
                                alt={user_product.product.name}
                                priority
                            />

                            <div className="p-5">
                                <h1 className="text-xl font-bold">{user_product.product.name}</h1>
                                {user_product.product.class_level === "NOT DEFINED" && 
                                    <div className=" text-neutral-600">
                                        <span>{getClassLevel(user_product.product.class_level)}-сынып</span>
                                    </div>
                                }
                                <div className="mt-2">
                                    <div className="h-1 rounded bg-neutral-100 overflow-hidden">
                                        <div className="h-full bg-orange-400 rounded" style={{ width: `${user_product.score}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>

    )
}

export default CardProduct;
