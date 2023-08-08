import Link from "next/link";
import React from "react";


const Footer = () => {
    return (
        <div className="bg-white border-t">
            <div className="container mx-auto px-5 py-10 md:flex justify-between items-center">
                <div className="flex">
                    <Link href={"/"} className="font-poppins font-extrabold text-4xl text-orange-400">OQU</Link>
                </div>

                <div className="mt-4 md:mt-0">
                    <p className="text-neutral-600 text-sm md:text-base">OQU platforms 2023. Барлық авторлық құқықтар қорғалған</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;