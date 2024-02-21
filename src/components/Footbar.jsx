import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { IoSettingsOutline, IoSettings } from "react-icons/io5";


const Footbar = () => {
    const router = useRouter();

    return (
        <div className="flex justify-between h-12 bg-white sm:hidden">
            <ul className="flex-1">
                <li className="w-full p-1 text-neutral-500">
                    <Link 
                        href={"/"} 
                        className={`flex flex-col items-center rounded-md transition-all hover:bg-neutral-200 active:scale-105 ${router.asPath === "/" && "bg-blue-100"}`}
                    >
                        <div className={`text-2xl p-2 ${router.asPath === "/" && "text-blue-500"}`}>
                            {router.asPath === "/" ? <GoHomeFill /> : <GoHome/>}
                        </div>
                    </Link>
                </li>
            </ul>

            <ul>
                <li className="w-full p-1 text-neutral-500">
                    <Link 
                        href={"/settings"} 
                        className={`flex flex-col items-center rounded-md transition-all hover:bg-neutral-200 active:scale-105 ${router.asPath === "/settings" && "bg-blue-100"}`}
                    >
                        <div className={`text-2xl p-2 ${router.asPath === "/settings" && "text-blue-500"}`}>
                            {router.asPath === "/settings" ? <IoSettings /> : <IoSettingsOutline/>}
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Footbar;