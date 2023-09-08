import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoCircle } from "react-icons/go";
import { CiCircleChevLeft } from "react-icons/ci";
import { GoCheckCircleFill } from "react-icons/go";


const ChapterSidebar = ({ product, user_chapters }) => {
    const router = useRouter();

    return (
        <div className="w-80 sticky line-clamp-1 top-0 mr-2 pt-5 hidden md:block">
            <Link href={`/product/${router.query.uid}`}
                className="p-4 text-neutral-600 flex mb-4 items-center shadow transition-all rounded-lg hover:bg-orange-100"
            >
                <CiCircleChevLeft className="text-2xl mr-2" />
                <h1>{product}</h1>
            </Link>

            <ul>
                {user_chapters.map(item => {
                    return (
                        <li key={item.id}>
                            <Link href={`/product/${router.query.uid}/chapter/${item.chapter.id}`} className={`flex rounded-lg items-center p-4 hover:bg-orange-100 transition-all ${router.asPath === `/product/${router.query.uid}/chapter/${item.chapter.id}` ? "text-white bg-orange-400 hover:bg-orange-400" : "text-neutral-600"}`}>
                                {item.is_done ?
                                    <GoCheckCircleFill className="mr-2 text-xl text-green-500" />
                                :
                                    <GoCircle className="mr-2 text-xl" />
                                }
                                <span>{item.chapter.chapter_name}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ChapterSidebar;