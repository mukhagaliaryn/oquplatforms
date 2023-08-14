import React from "react";
import MainLayout from "../layouts/main";
import { useSelector } from "react-redux";


const Exlorer = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <MainLayout
            title={'Қосымшалар - OQU platforms'}
        >
            {isAuthenticated &&
                <div className="2xl:container">
                    <div className="mb-5">
                        <h1 className="text-2xl font-bold ">Бүгінгі өтілетін пәндер</h1>
                        <div className="grid gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 my-5">
                            <div className="h-56 w-full bg-orange-100 rounded-xl"></div>
                            <div className="h-56 w-full bg-orange-100 rounded-xl"></div>
                            <div className="h-56 w-full bg-orange-100 rounded-xl"></div>
                            <div className="h-56 w-full bg-orange-100 rounded-xl"></div>
                            <div className="h-56 w-full bg-orange-100 rounded-xl"></div>
                        </div>
                    </div>

                    <div className="mb-5">
                        <h1 className="text-2xl font-bold ">Бүгінгі өтілетін пәндер</h1>
                        <div className="grid gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 my-5">
                            <div className="h-56 w-full bg-orange-100 rounded-xl"></div>
                            <div className="h-56 w-full bg-orange-100 rounded-xl"></div>
                            <div className="h-56 w-full bg-orange-100 rounded-xl"></div>
                            <div className="h-56 w-full bg-orange-100 rounded-xl"></div>
                            <div className="h-56 w-full bg-orange-100 rounded-xl"></div>
                        </div>
                    </div>

                    <div className="mb-5">
                        <h1 className="text-2xl font-bold ">Бүгінгі өтілетін пәндер</h1>
                        <div className="grid gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 my-5">
                            <div className="h-56 w-full bg-orange-100 rounded-xl"></div>
                            <div className="h-56 w-full bg-orange-100 rounded-xl"></div>
                            <div className="h-56 w-full bg-orange-100 rounded-xl"></div>
                            <div className="h-56 w-full bg-orange-100 rounded-xl"></div>
                            <div className="h-56 w-full bg-orange-100 rounded-xl"></div>
                        </div>
                    </div>
                </div>
            }
        </MainLayout>
    )
}


export default Exlorer;