import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { logout } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { CiSettings, CiLogout } from "react-icons/ci";
import { PiUserCircleThin, PiUserLight } from "react-icons/pi";
import Image from "next/image";



const Dropdown = (props) => {
    const { user, dropdown, setDropdown } = props;
    const dispatch = useDispatch();
    const router = useRouter();

    const handleClose = e => {
        if (e.target.id === "dropdown") setDropdown(!dropdown)
    }

    const logoutHandler = () => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(logout())
        }
        router.push(router.asPath);
    }

    return (
        <React.Fragment>
            <div id="dropdown" className="fixed w-full h-full top-0 left-0 z-10" onClick={e => handleClose(e)}>
                <motion.div
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 10, opacity: 1 }}
                    exit={{ y: 0, opacity: 0 }}
                    id="dropdown"
                    className="absolute overflow-hidden w-64 bg-white/80 backdrop-blur-xl right-3 top-10 border border-neutral-200 rounded-md shadow-sm"
                >
                    <div
                        onClick={() => router.push("/accounts/user/")} 
                        className="flex items-start gap-2 p-2 border-b border-neutral-200 cursor-pointer"
                    >
                        <div className="w-12 h-12">
                            {user.image ?
                                <div className="rounded-full w-full h-full overflow-hidden">
                                    <Image src={user.image} width={520} height={520} alt={user.full_name} />
                                </div>
                                :
                                <div className="text-5xl bg-neutral-900 text-neutral-100 rounded-full w-full h-full">
                                    <PiUserCircleThin />
                                </div>
                            }
                        </div>
                        <div className="flex-1">
                            <h1 className="text-neutral-900 font-semibold">{user.full_name}</h1>
                            <span className="block text-blue-500 text-sm">{user.email}</span>
                        </div>
                    </div>
                    <ul>
                        <li className="border-b border-neutral-200 transition-all p-2 text-neutral-500 cursor-pointer hover:bg-neutral-100/60">
                            <Link href={"/settings"} className="flex gap-2 items-center">
                                <div className="text-2xl">
                                    <CiSettings />
                                </div>
                                <span className="text-sm">Баптаулар</span>
                            </Link>
                        </li>
                        <li className="border-b border-neutral-200 transition-all p-2 text-neutral-500 cursor-pointer hover:bg-neutral-100/60">
                            <button 
                                onClick={() => logoutHandler()}
                                className="flex gap-2 items-center w-full"
                            >
                                <div className="text-2xl">
                                    <CiLogout />
                                </div>
                                <span className="text-sm">Жүйеден шығу</span>
                            </button>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </React.Fragment>

    )
}

export default Dropdown