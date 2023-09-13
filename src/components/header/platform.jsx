import React from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { CiGrid41, CiHome, CiSearch } from "react-icons/ci";
import { useRouter } from "next/router";


const PlatformHeader = ({user, logoutHandler, poppins}) => {
    const router = useRouter();

    return (
        <div id="intro-header" className="container mx-auto px-5 flex justify-between h-16">
            <div id="hidden" className="block md:hidden"></div>

            <div id="logo" className="flex items-center">
                <Link href={"/"} className={`${poppins.variable} font-poppins font-extrabold text-4xl text-orange-400`}>OQU</Link>
            </div>

            <div className="hidden lg:flex">
                <nav className="flex mr-5">
                    <Link 
                        href={"/"} 
                        className={`flex h-full px-2 items-center text-neutral-600 border-b-2 ${router.pathname == "/" ? "border-orange-400 text-orange-400" : "border-transparent"}`}
                    >
                        <CiHome className="text-2xl mr-2"/>
                        <span>Басты бет</span>
                    </Link>

                    <Link 
                        href={"/explorer"} 
                        className={`flex h-full px-2 items-center text-neutral-600 border-b-2 ${router.pathname == "/explorer" ? "border-orange-400 text-orange-400" : "border-transparent"}`}
                    >
                        <CiGrid41 className="text-2xl mr-2"/>
                        <span>Қосымшалар</span>
                    </Link>
                </nav>

                <form className="flex items-center relative">
                    <input 
                        type="text" placeholder="Поиск..." 
                        className="border rounded-lg px-4 py-2 pl-10 outline-none text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100"
                    />
                    <button className="absolute left-2 text-neutral-600">
                        <CiSearch className="text-2xl" />
                    </button>
                </form>
            </div>


            <div id="auth" className="flex items-center">
                    <Dropdown user={user} logoutHandler={logoutHandler} />
            </div>
        </div>
    )
}

export default PlatformHeader;