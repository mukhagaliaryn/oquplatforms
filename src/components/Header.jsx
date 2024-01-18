import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth";
import Image from "next/image";
import Link from "next/link";
import { TfiSearch } from "react-icons/tfi";
import { PiUserCircleThin } from "react-icons/pi";
import Dropdown from "./Dropdown";
import { AnimatePresence } from "framer-motion";


const Header = () => {
    const dispatch = useDispatch();
    const [dropdown, setDropdown] = useState(false);


    const logoutHandler = () => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(logout())
        }
    }

    return (
        <div id="header" className="bg-white">
            <div className="flex justify-between h-12 px-4">
                
                <div id="logo" className="flex items-center">
                    <Link href={"/"} className="flex h-full items-center transition-all mr-2 active:scale-105">
                        <Image src={"/images/full-logo-white.png"} className="w-16" width={945} height={300} />
                    </Link>
                    <span className="font-poppins font-semibold text-base block pl-2 border-l border-neutral-200">platforms</span>
                </div>

                <form id="search" className="hidden md:flex h-full items-center relative w-96">
                    <input 
                        type="text" 
                        placeholder="Поиск" 
                        className="block w-full border border-neutral-200 bg-neutral-100 rounded-[4px] bg text-sm text-neutral-500 py-1 pl-2 pr-8 outline-none transition-all focus:border-b-2 focus:border-b-blue-500 focus:shadow focus:bg-white"
                    />
                    <div className="absolute right-2 text-neutral-500">
                        <TfiSearch />
                    </div>
                </form>

                <div className="py-1 relative">
                    <div 
                        className="text-neutral-500 text-3xl cursor-pointer h-full px-2 flex items-center transition-all hover:bg-neutral-100 rounded-md active:scale-105"
                        onClick={() => setDropdown(!dropdown)}
                    >
                        <PiUserCircleThin />
                    </div>

                    <AnimatePresence>
                        {dropdown &&
                            <Dropdown />
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Header;