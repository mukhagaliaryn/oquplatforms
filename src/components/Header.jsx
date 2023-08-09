import Link from "next/link";
import React, { useState } from "react";
import { BtnLink, BtnLinkPrimary } from "./Button";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline, IoExitOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { logout } from "../redux/actions/auth";
import Image from "next/image";


const Header = () => {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const router = useRouter();
    const [burgerMenu, setBurgerMenu] = useState(false);


    const logoutHandler = () => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(logout())
        }
    }

    return (
        <div id="header" className="bg-white border-b sticky top-0 z-50">
            <div id="intro-header" className="container mx-auto px-5 py-3 flex justify-between items-center">
                <div id="hidden" className="block md:hidden"></div>

                <div id="logo" className="flex">
                    <Link href={"/"} className="font-poppins font-extrabold text-4xl text-orange-400">OQU</Link>
                </div>

                <div id="nav" className="hidden md:flex">
                    <Link href={"/"} className="text-neutral-600 transition-all hover:underline mx-2">Басты бет</Link>
                    <Link href={"/"} className="text-neutral-600 transition-all hover:underline mx-2">Өнімдер</Link>
                    <Link href={"/"} className="text-neutral-600 transition-all hover:underline mx-2">Біз жайлы</Link>
                </div>

                {isAuthenticated ?
                    <div id="auth" className="hidden md:flex">
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                <div className="cursor-pointer" title={user && user.full_name}>
                                    {user &&
                                        <Image src={user.image ? user.image : "/icons/user.png"} width={300} height={300} className="w-10 h-10 border-2 p-1 border-orange-400 rounded-full" alt="image" />
                                    }
                                </div>
                            </DropdownMenu.Trigger>

                            <DropdownMenu.Content className="absolute right-[-24px] mt-2 w-48 bg-white shadow-xl rounded-xl overflow-hidden">
                                <DropdownMenu.Item className="outline-none">
                                    <Link
                                        href={"/accounts/user"}
                                        className="block text-neutral-600 px-4 py-2 border-b hover:bg-orange-100"
                                    >Аккаунт</Link>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="outline-none">
                                    <Link
                                        href={"/accounts/user/settings"}
                                        className="block text-neutral-600 px-4 py-2 border-b hover:bg-orange-100"
                                    >Баптаулар</Link>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item
                                    onClick={logoutHandler}
                                    className="px-4 py-2 border-b flex items-center cursor-pointer outline-none hover:bg-orange-100"
                                >
                                    <div className="text-xl text-neutral-500 mr-2">
                                        <IoExitOutline className="text-2xl"/>
                                    </div>
                                    <span className="text-neutral-600">Жүйеден шығу</span>
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </div>

                    :
                    <div id="auth" className="hidden md:flex">
                        <div className="mr-2">
                            <BtnLinkPrimary href={'/accounts/login'}>Жүйеге кіру</BtnLinkPrimary>
                        </div>
                        <BtnLink href={"/"}>Регистрация</BtnLink>
                    </div>
                }

                {/* Burger menu btn for mobile */}
                <div className="cursor-pointer flex md:hidden" onClick={() => setBurgerMenu(!burgerMenu)}>
                    <RxHamburgerMenu className="text-2xl text-neutral-600" />
                </div>

                {/* Window for burger-menu */}
                {burgerMenu &&
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
                }
            </div>
        </div>
    )
}

export default Header;