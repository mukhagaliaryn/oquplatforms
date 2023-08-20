import Image from "next/image";
import Link from "next/link";
import React from "react";


const Card = ({ item }) => {

    const getClassLevel = (prop) => {
        let result = 0;
        switch (prop) {
            case "ONE":
                result = 1;
                break;
            case "TWO":
                result = 2;
                break;
            case "THREE":
                result = 3;
                break;
            case "FOUR":
                result = 4;
                break;
            case "FIVE":
                result = 5;
                break;
            case "SIX":
                result = 6;
                break;
            case "SEVEN":
                result = 7;
                break;
            case "EIGHT":
                result = 8;
                break;
            case "NINE":
                result = 9;
                break;
            case "TEN":
                result = 10;
                break;
            case "ELEVEN":
                result = 11;
                break;
        }

        return result;
    }

    return (
        <Link
            key={item.id}
            href={`/product/${item.id}`}
            className="w-full rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
        >
            <Image
                src={item.poster} width={512} height={512}
                className="w-full block"
                alt={item.name}
            />

            <div className="p-5">
                <h1 className="text-xl font-bold">{item.name}</h1>
                <div className=" text-neutral-600">
                    <span>{getClassLevel(item.class_level)}-сынып</span>
                </div>
                <div className="mt-2">
                    <div className="h-1 rounded bg-neutral-100 overflow-hidden">
                        <div className="h-full bg-orange-400 rounded" style={{ width: `${item.id}%` }}></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;