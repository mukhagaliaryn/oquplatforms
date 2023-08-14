import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CiGrid41, CiHome, CiImageOn, CiSettings, CiUser } from "react-icons/ci";
import { PiPasswordThin } from "react-icons/pi";


const Sidebar = () => {
    const router = useRouter();

    return (
        <div className="hidden md:block w-64 border-r">
            <div className="border-b">
                <Link href={"/"} className="p-3 pl-5 block text-orange-400 transition-all hover:bg-orange-100">
                    <span className="text-4xl font-bold font-poppins">OQU</span>
                    <span>platforms</span>
                </Link>
            </div>

            <ul className="p-2">
                <li>
                    <Link href={"/"} className={`flex items-center text-neutral-600 px-4 py-3 rounded-lg transition-all hover:bg-orange-100 ${router.asPath === `/` && "bg-orange-400 text-white hover:bg-orange-400"}`}>
                        <CiHome className="mr-2 text-2xl" />
                        <span>Басты бет</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/explorer"}
                        className={`flex items-center text-neutral-600 px-4 py-3 rounded-lg transition-all hover:bg-orange-100 ${router.asPath === `/explorer` && "bg-orange-400 text-white hover:bg-orange-400"}`}>
                        <CiGrid41 className="mr-2 text-2xl" />
                        <span>Қосымшалар</span>
                    </Link>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar;