import React from "react";
import MainLayout from "../layouts/main";
import Link from "next/link";


const Settings = () => {
    return (
        <MainLayout
            title={"Баптаулар - OQU platforms"}
        >
            <div className="container mx-auto my-10 text-center">
                <h1 className="text-8xl font-bold">Баптаулар</h1>
                <p className="text-neutral-600 mt-4">
                    Бұл бет әзірге өңделіп жатыр. 
                    <Link href={"/"} className="mx-1 text-blue-500">Басты бет</Link> 
                </p>
            </div>
        </MainLayout>
    )
}

export default Settings;
