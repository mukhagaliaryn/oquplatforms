import React from "react";
import { motion } from "framer-motion";
import { CiLogin } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";


const Dropdown = () => {

    return (
        <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 10, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            id="dropdown"
            className="absolute overflow-hidden w-60 bg-white bg-opacity-80 backdrop-blur-xl right-0 border border-neutral-200 rounded-md shadow-sm"
        >
            <ul>
                <li className="flex items-center border-b border-neutral-200 transition-all p-2 text-neutral-500 cursor-pointer hover:bg-neutral-100 hover:bg-opacity-60">
                    <div className="text-2xl mr-2">
                        <CiLogin />
                    </div>
                    <span className="text-sm">Войти или регистрация</span>
                </li>
                <li className="flex items-center border-b border-neutral-200 transition-all p-2 text-neutral-500 cursor-pointer hover:bg-neutral-100 hover:bg-opacity-60">
                    <div className="text-2xl mr-2">
                        <CiSettings />
                    </div>
                    <span className="text-sm">Настройки</span>
                </li>
            </ul>
        </motion.div>
    )
}

export default Dropdown