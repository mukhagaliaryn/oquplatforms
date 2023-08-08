import Link from "next/link";
import React from "react";


export const BtnLinkPrimary = (props) => {
    return (
        <Link 
            href={props.href}
            className="border px-4 py-2 bg-white rounded-lg block text-center text-neutral-600 transition-all hover:border-neutral-900"
        >
            {props.children}
        </Link>
    )
};


export const BtnLink = (props) => {
    return (
        <Link 
            href={props.href}
            className="bg-orange-400 border-orange-400 px-4 py-2 rounded-lg block text-center cursor-pointer text-white transition-all hover:opacity-70"
        >
            {props.children}
        </Link>
    )
}


