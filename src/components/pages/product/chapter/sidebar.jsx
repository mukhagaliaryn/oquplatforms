import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoCircle } from "react-icons/go";
import { CiCircleChevLeft } from "react-icons/ci";
import { GoCheckCircleFill } from "react-icons/go";


const ChapterSidebar = (props) => {
    const { user_product, user_chapters } = props;
    const router = useRouter();

    return (
        <div className="w-80 sticky line-clamp-1 top-0 mr-2 pt-5 hidden md:block">
            <Link href={`/product/${router.query.uid}`}
                className="p-4 block text-neutral-600  mb-4 shadow transition-all rounded-lg hover:bg-orange-100"
            >
                <div className="flex items-center">
                    <CiCircleChevLeft className="text-2xl mr-2" />
                    <h1>{user_product.product.name}</h1>
                </div>
                
                <div className="mt-5 flex items-center">
                    <div className="h-1 w-full bg-neutral-100 rounded-lg overflow-hidden">
                        <div className="bg-orange-400 h-full" style={{ width: `${user_product.score}%` }}></div>
                    </div>
                    <span className="text-xs text-neutral-600 ml-2">
                        {user_product.score}%
                    </span>
                </div>
            </Link>

            <ul>
                {user_chapters.map(item => {
                    return (
                        <li key={item.id}>
                            <Link href={`/product/${router.query.uid}/chapter/${item.id}`} className={`flex rounded-lg items-center p-4 hover:bg-orange-100 transition-all ${router.asPath === `/product/${router.query.uid}/chapter/${item.id}` ? "text-white bg-orange-400 hover:bg-orange-400" : "text-neutral-600"}`}>
                                {item.is_done ?
                                    <GoCheckCircleFill className="mr-2 text-xl text-green-500" />
                                :
                                    <GoCircle className="mr-2 text-xl" />
                                }
                                <span className="flex-1 line-clamp-1">{item.chapter.chapter_name}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ChapterSidebar;