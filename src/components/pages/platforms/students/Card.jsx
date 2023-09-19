import { getClassLevel } from "@/src/utils/get";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Card = ({ user_product }) => {
    return (
        <Link
            href={`/product/${user_product.product.id}`}
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
                <div className=" text-neutral-600">
                    <span>{getClassLevel(user_product.product.class_level)}-сынып</span>
                </div>
                <div className="mt-2">
                    <div className="h-1 rounded bg-neutral-100 overflow-hidden">
                        <div className="h-full bg-orange-400 rounded" style={{ width: `${user_product.score}%` }}></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;
