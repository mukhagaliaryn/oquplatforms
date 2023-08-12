import React from "react";
import { BtnLink, BtnLinkPrimary } from "../Button";
import Link from "next/link";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";


const Window = ({ user, isAuthenticated, logoutHandler, burgerMenu, setBurgerMenu }) => {

    return (
        <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50">
            <div className="bg-white shadow-sm">
                <div className="flex items-center justify-between border-b px-5 py-3">
                    <div id="hidden" className="block md:hidden"></div>

                    <div id="logo" className="flex">
                        <Link href={"/"} className="font-poppins font-extrabold text-4xl text-orange-400">OQU</Link>
                    </div>

                    <div className="cursor-pointer" onClick={() => setBurgerMenu(!burgerMenu)}>
                        <IoCloseOutline className="text-2xl text-neutral-600" />
                    </div>
                </div>

                <div id="nav" className="flex flex-col">
                    <Link href={"/"} className="text-neutral-600 transition-all px-4 py-3 border-b hover:bg-orange-100">Басты бет</Link>
                    <Link href={"/"} className="text-neutral-600 transition-all px-4 py-3 border-b hover:bg-orange-100">Өнімдер</Link>
                    <Link href={"/"} className="text-neutral-600 transition-all px-4 py-3 border-b hover:bg-orange-100">Біз жайлы</Link>
                </div>

                {isAuthenticated ?
                    <div className="">
                        {user &&
                            <div className="flex items-center px-4 py-3 border-b bg-orange-100">
                                <Image src={user.image ? user.image : "/icons/user.png"} width={300} height={300} className="w-10 border-2 border-orange-400 p-1 rounded-full" alt="image" />
                                <div className="ml-2">
                                    <h1 className="text-neutral-600 font-semibold">{user.first_name} {user.last_name}</h1>
                                    <span className="text-neutral-600 text-sm">{user.email}</span>
                                </div>
                            </div>
                        }
                        <div className="flex flex-col">
                            <Link href={"/accounts/user"} className="text-neutral-600 transition-all px-4 py-3 border-b hover:bg-orange-100">Аккаунт</Link>
                            <Link href={"/accounts/user/settings"} className="text-neutral-600 transition-all px-4 py-3 border-b hover:bg-orange-100">Баптаулар</Link>
                            <span onClick={logoutHandler} className="cursor-pointer text-neutral-600 transition-all px-4 py-3 border-b hover:bg-orange-100">Шығу</span>
                        </div>
                    </div>
                    :
                    <div id="auth" className="p-4">
                        <div className="mb-2">
                            <BtnLinkPrimary href={'/accounts/login'}>Жүйеге кіру</BtnLinkPrimary>
                        </div>
                        <BtnLink href={"/"}>Регистрация</BtnLink>
                    </div>
                }
            </div>
        </div>
    )
}

export default Window;