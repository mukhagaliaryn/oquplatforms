import Image from "next/image";
import Link from "next/link";
import React from "react";


const Card = ({item}) => {

    return (
        <Link
            key={item.id}
            href={`/product/${item.id}`}
            className="w-full rounded-xl overflow-hidden shadow-xl"
        >
            <Image 
                src={item.image} width={512} height={512} 
                className="w-full block"
                alt={item.title}
            />
            
            <div className="p-5">
                <h1 className="text-xl font-bold">{item.title}</h1>
                <div className=" text-neutral-600">
                    <span>7-сынып</span>
                </div>
                <div className="mt-2">
                    <div className="h-1 rounded bg-neutral-100 overflow-hidden">
                        <div className={`h-full bg-orange-400 rounded w-[${item.progress}%]`}></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;