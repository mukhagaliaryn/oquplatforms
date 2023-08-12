import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Window from "./Window";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { BtnLink, BtnLinkPrimary } from "../Button";


const MainHeader = ({user, isAuthenticated, logoutHandler }) => {
    const [burgerMenu, setBurgerMenu] = useState(false);

    return (
        <div id="intro-header" className="container mx-auto px-5 py-3 flex justify-between items-center">
            <div id="hidden" className="block md:hidden"></div>

            <div id="logo" className="flex">
                <Link href={"/"} className="font-poppins font-extrabold text-4xl text-orange-400">OQU</Link>
            </div>

            <div id="nav" className="hidden md:flex">
                <Link href={"/"} className="text-neutral-600 transition-all hover:text-orange-400 mx-2">Басты бет</Link>
                <Link href={"/"} className="text-neutral-600 transition-all hover:text-orange-400 mx-2">Өнімдер</Link>
                <Link href={"/"} className="text-neutral-600 transition-all hover:text-orange-400 mx-2">Біз жайлы</Link>
            </div>

            {isAuthenticated ?
                <div id="auth" className="hidden md:flex">
                    <Dropdown user={user} logoutHandler={logoutHandler} />
                </div>

                :
                <div id="auth" className="hidden md:flex">
                    <div className="mr-2">
                        <BtnLinkPrimary href={'/accounts/login'}>Жүйеге кіру</BtnLinkPrimary>
                    </div>
                    <BtnLink href={"/accounts/register"}>Регистрация</BtnLink>
                </div>
            }

            {/* Burger menu btn for mobile */}
            <div className="cursor-pointer flex md:hidden" onClick={() => setBurgerMenu(!burgerMenu)}>
                <RxHamburgerMenu className="text-2xl text-neutral-600" />
            </div>

            {/* Window for burger-menu */}
            {burgerMenu &&
                <Window
                    user={user}
                    isAuthenticated={isAuthenticated}
                    logoutHandler={logoutHandler}
                    burgerMenu={burgerMenu}
                    setBurgerMenu={setBurgerMenu}
                />
            }
        </div>
    )
}

export default MainHeader;