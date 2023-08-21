import React from "react";
import MainLayout from "../layouts/main";
import Link from "next/link";


const NotFound = () => {
    return (
        <MainLayout
            title={"Бұндай бет жоқ - 404"}
        >
            <div className="container mx-auto my-10 text-center">
                <h1 className="text-9xl font-bold">404</h1>
                <p className="text-neutral-600 mt-2">
                    Платформада бұндай бет жоқ. 
                    <Link href={"/"} className="mx-1 text-orange-400">Басты бетке</Link> 
                қайт!</p>
            </div>
        </MainLayout>
    )
}

export default NotFound;
