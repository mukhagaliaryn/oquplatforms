import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { TfiSearch, TfiBell, TfiWorld } from "react-icons/tfi";
import { PiUserCircleThin } from "react-icons/pi";
import Dropdown from "./Dropdown";
import { AuthModal } from "./Modals";



export const Header = (props) => {
    const { isAuthenticated } = props;
    const dispatch = useDispatch();
    const [dropdown, setDropdown] = useState(false);
    const [authModal, setAuthModal] = useState(false);


    const logoutHandler = () => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(logout())
        }
    }

    return (
        <div id="header" className="bg-white">
            <div className="flex justify-between h-12 px-4">

                <div id="logo" className="flex items-center">
                    <Link href={"/"} className="flex h-full items-center transition-all mr-2 active:scale-95">
                        <Image src={"/images/full-logo-white.png"} className="w-16" width={945} height={300} alt="Logo" />
                    </Link>
                    <span className="font-poppins font-semibold text-base block pl-2 border-l border-neutral-200">platforms</span>
                </div>

                <div 
                    id="search" 
                    className="relative w-full max-w-md hidden md:block"
                    onClick={() => alert("Іздеу функциясы әзірге жұмыс жасамайды")}
                >
                    <form
                        className="flex h-full w-full items-center relative"
                    >
                        <input
                            type="text"
                            placeholder="Поиск"
                            className="w-full border border-neutral-200 bg-neutral-100 rounded bg text-sm text-neutral-900 py-1 pl-2 pr-8 outline-none transition-all focus:border-b-2 focus:border-b-blue-500 focus:shadow focus:bg-white"
                        />
                        <div className="absolute right-2 text-neutral-500 cursor-pointer">
                            <TfiSearch />
                        </div>
                    </form>
                </div>


                <div className="flex py-1">
                    {/* <div 
                        className="text-neutral-500 text-xl cursor-pointer h-full px-3 flex items-center transition-all hover:bg-neutral-100 rounded-md active:scale-95"
                    >
                        <TfiWorld />
                    </div>

                    <div
                        className="text-neutral-500 text-xl cursor-pointer h-full px-3 flex items-center transition-all hover:bg-neutral-100 rounded-md active:scale-95"
                    >
                        <TfiBell />
                    </div> */}

                    <div className="relative">
                        {isAuthenticated ?
                            <React.Fragment>
                                <div
                                    className="text-neutral-500 text-3xl cursor-pointer h-full px-2 flex items-center transition-all hover:bg-neutral-100 rounded-md active:scale-95"
                                    onClick={() => setDropdown(!dropdown)}
                                >
                                    <PiUserCircleThin />
                                </div>

                                <AnimatePresence>
                                    {dropdown &&
                                        <Dropdown
                                            dropdown={dropdown}
                                            setDropdown={setDropdown}
                                        />
                                    }
                                </AnimatePresence>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <div
                                    className="text-neutral-500 text-3xl cursor-pointer h-full px-2 flex items-center transition-all hover:bg-neutral-100 rounded-md active:scale-95"
                                    onClick={() => setAuthModal(!authModal)}
                                >
                                    <PiUserCircleThin />
                                </div>

                                <AnimatePresence>
                                    {authModal && <AuthModal authModal={authModal} setAuthModal={setAuthModal} />}
                                </AnimatePresence>
                            </React.Fragment>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}



export const PlayerHeader = (props) => {
    const {} = props;

    return (
        <div className="bg-neutral-900">
            <div className="flex justify-between h-12 px-4">
                <div id="logo" className="flex items-center">
                    <Link href={"/"} className="flex h-full items-center transition-all mr-2 active:scale-95">
                        <Image src={"/images/full-logo-black.png"} className="w-16" width={945} height={300} alt="Logo" />
                    </Link>
                    <span className="font-poppins font-semibold block pl-2 border-l text-white border-neutral-200">player</span>
                </div>
            </div>
        </div>
    )
}