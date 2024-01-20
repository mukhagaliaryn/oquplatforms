import React from "react";
import MainLayout from "../layouts/main";
import { BACKEND_URL } from "../redux/actions/types";


export async function getServerSideProps(context) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${context.req.cookies.access}`
        }
    }
    const res = await fetch(`${BACKEND_URL}/authors/`, context.req.cookies.access && config)
    const data = await res.json();
    const authors = data.authors;

    return {
        props: {
            authors, 
        }
    }
}


const Authors = (data) => {
    const { authors } = data;

    return (
        <MainLayout
            title={"Басты бет - OQU platforms"}
            content={"Басты бет - OQU platforms"}
        >
            {/* last courses */}
            <div className="bg-white rounded-md p-4 shadow-sm">
                <h1 className="text-xl font-semibold">Авторлар</h1>
            </div>

            <div className="mt-8"></div>
        </MainLayout>
    )
}


export default Authors;