import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { logout } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { CiSettings, CiLogout } from "react-icons/ci";
import { PiUserLight } from "react-icons/pi";



const Dropdown = (props) => {
    const { dropdown, setDropdown } = props;
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
                    className="absolute overflow-hidden w-60 bg-white/80 backdrop-blur-xl right-6 top-10 border border-neutral-200 rounded-md shadow-sm"
                >
                    <ul>
                        <li className="border-b border-neutral-200 transition-all p-2 text-neutral-500 cursor-pointer hover:bg-neutral-100/60">
                            <Link href={"/accounts/user"} className="flex gap-2 items-center">
                                <div className="text-2xl">
                                    <PiUserLight />
                                </div>
                                <span className="text-sm">Профиль</span>
                            </Link>
                        </li>
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