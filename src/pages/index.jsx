import React from "react";
import MainLayout from "../layouts/main";
import { useSelector } from "react-redux";
import { BACKEND_URL } from "../redux/actions/types";
import { useRouter } from "next/router";


export async function getServerSideProps(context) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${context.req.cookies.access}`
        }
    }
    const res = await fetch(`${BACKEND_URL}/`, context.req.cookies.access && config)
    const data = await res.json();

    return {
        props: {}
    }
}


const Main = (data) => {
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);

    return (
        <MainLayout
            title={"Басты бет - OQU platforms"}
            content={"Басты бет - OQU platforms"}
        >
            <div className="h-16 m-4 rounded-md shadow-sm bg-red-500 sm:bg-green-500 md:bg-orange-500 lg:bg-gray-500 xl:bg-blue-500 2xl:bg-white"></div>
            <div className="h-16 m-4 rounded-md shadow-sm bg-red-500 sm:bg-green-500 md:bg-orange-500 lg:bg-gray-500 xl:bg-blue-500 2xl:bg-white"></div>
            <div className="h-16 m-4 rounded-md shadow-sm bg-red-500 sm:bg-green-500 md:bg-orange-500 lg:bg-gray-500 xl:bg-blue-500 2xl:bg-white"></div>
            <div className="h-16 m-4 rounded-md shadow-sm bg-red-500 sm:bg-green-500 md:bg-orange-500 lg:bg-gray-500 xl:bg-blue-500 2xl:bg-white"></div>
            <div className="h-16 m-4 rounded-md shadow-sm bg-red-500 sm:bg-green-500 md:bg-orange-500 lg:bg-gray-500 xl:bg-blue-500 2xl:bg-white"></div>
            <div className="h-16 m-4 rounded-md shadow-sm bg-red-500 sm:bg-green-500 md:bg-orange-500 lg:bg-gray-500 xl:bg-blue-500 2xl:bg-white"></div>
            <div className="h-16 m-4 rounded-md shadow-sm bg-red-500 sm:bg-green-500 md:bg-orange-500 lg:bg-gray-500 xl:bg-blue-500 2xl:bg-white"></div>
            <div className="h-16 m-4 rounded-md shadow-sm bg-red-500 sm:bg-green-500 md:bg-orange-500 lg:bg-gray-500 xl:bg-blue-500 2xl:bg-white"></div>
            <div className="h-16 m-4 rounded-md shadow-sm bg-red-500 sm:bg-green-500 md:bg-orange-500 lg:bg-gray-500 xl:bg-blue-500 2xl:bg-white"></div>
            <div className="h-16 m-4 rounded-md shadow-sm bg-red-500 sm:bg-green-500 md:bg-orange-500 lg:bg-gray-500 xl:bg-blue-500 2xl:bg-white"></div>
            <div className="h-16 m-4 rounded-md shadow-sm bg-red-500 sm:bg-green-500 md:bg-orange-500 lg:bg-gray-500 xl:bg-blue-500 2xl:bg-white"></div>
            <div className="h-16 m-4 rounded-md shadow-sm bg-red-500 sm:bg-green-500 md:bg-orange-500 lg:bg-gray-500 xl:bg-blue-500 2xl:bg-white"></div>
            <div className="h-16 m-4 rounded-md shadow-sm bg-red-500 sm:bg-green-500 md:bg-orange-500 lg:bg-gray-500 xl:bg-blue-500 2xl:bg-white"></div>
        </MainLayout>
    )
}


export default Main;