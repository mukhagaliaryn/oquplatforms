import Image from "next/image";
import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";
import { authData } from "../utils/authData";
import Link from "next/link";


export const AuthModal = (props) => {
    const { authModal, setAuthModal } = props;
    const [slideIndex, setSlideIndex] = useState(0);


    return (
        <motion.div 
            className="fixed top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-white bg-opacity-80 backdrop-blur-3xl"
        >
            <div
                onClick={() => setAuthModal(!authModal)}
                className="w-8 h-8 rounded-md text-neutral-500 bg-white absolute top-4 right-4 shadow-sm flex justify-center items-center cursor-pointer transition-all hover:shadow active:scale-95">
                <TfiClose />
            </div>

            <motion.div
                className="max-w-sm w-full flex items-start overflow-hidden"
            >
                {authData.map((auth, i) => {
                    return (
                        <motion.div
                            key={i}
                            animate={{
                                translateX: `-${slideIndex * 100}%`,
                                scale: slideIndex === i ? 1 : 0.9,
                            }}
                            className="w-full p-5 bg-white border border-neutral-200 shadow-sm rounded-lg shrink-0"
                        >
                            <div>
                                <Image
                                    src={"/images/full-logo-white.png"} width={945} height={300} alt="logo"
                                    className="w-24 mx-auto"
                                />
                                <h1 className="text-neutral-900 font-semibold text-xl my-5 text-center">{auth.title}</h1>
                            </div>

                            <form className="grid gap-4">
                                {auth.fields.map((field, i) => (
                                    <div className="relative" key={i}>
                                        <input
                                            type={field.type} placeholder={field.placeholder}
                                            className="pl-4 pr-10 py-2 border text-neutral-900 border-neutral-200 rounded-md outline-none w-full text-sm transition-all focus:border-b-blue-500 focus:shadow focus:bg-white"
                                            required
                                        />
                                        <div className="absolute top-3 right-4 text-neutral-500">
                                            {field.get_icon()}
                                        </div>
                                    </div>
                                ))}
                                <div className="relative">
                                    <button className="bg-neutral-900 w-full px-6 py-2 text-sm font-medium text-white rounded-md transition-all border border-neutral-900 hover:bg-transparent hover:text-neutral-900 active:scale-95">
                                        {auth.submit.label}
                                    </button>
                                </div>
                            </form>

                            <div className="mt-4 grid gap-2 text-center">
                                {auth.links.map(link => (
                                    <div
                                        key={link.id}
                                        className="text-blue-500 text-sm cursor-pointer transition-all hover:text-neutral-500 active:scale-95" 
                                        onClick={() => setSlideIndex(link.id)}
                                    >
                                        {link.label}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}


export const SearchModal = (props) => {

    return (
        <div>
            
        </div>
    )
}