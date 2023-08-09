import React from "react";
import MainLayout from "./main";
import Link from "next/link";
import { useRouter } from "next/router";
import { CiImageOn, CiSettings, CiUser } from "react-icons/ci";
import { PiPasswordThin } from "react-icons/pi";


const UserAccountLayout = (props) => {
    const router = useRouter()

    return (
        <MainLayout
            title={props.title}
            content={props.content}
        >
            <div className="mx-auto container my-10 px-5">
                <div className="flex items-start">
                    <div className="hidden md:block mr-4 w-64 sticky top-20">
                        <ul>
                            <li>
                                <Link href={"/accounts/user"} className={`flex items-center text-neutral-600 px-4 py-3 rounded-lg transition-all hover:bg-orange-100 ${router.asPath === `/accounts/user` && "bg-orange-400 text-white hover:bg-orange-400"}`}>
                                    <CiUser className="mr-2 text-2xl" />
                                    <span>Аккаунт</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/accounts/user/avatar"}
                                    className={`flex items-center text-neutral-600 px-4 py-3 rounded-lg transition-all hover:bg-orange-100 ${router.asPath === `/accounts/user/avatar` && "bg-orange-400 text-white hover:bg-orange-400"}`}>
                                    <CiImageOn className="mr-2 text-2xl" />
                                    <span>Аватар</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link href={"/accounts/user/passwords"} className={`flex items-center text-neutral-600 px-4 py-3 transition-all rounded-lg hover:bg-orange-100 ${router.asPath === `/accounts/user/passwords` && "bg-orange-400 text-white hover:bg-orange-400"}`}>
                                    <PiPasswordThin className="mr-2 text-2xl" />
                                    <span>Парольдер</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/accounts/user/settings"} className={`flex items-center text-neutral-600 px-4 py-3 transition-all rounded-lg hover:bg-orange-100 ${router.asPath === `/accounts/user/settings` && "bg-orange-400 text-white hover:bg-orange-400"}`}>
                                    <CiSettings className="mr-2 text-2xl" />
                                    <span>Баптаулар</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 md:ml-4">
                        {props.children}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default UserAccountLayout;