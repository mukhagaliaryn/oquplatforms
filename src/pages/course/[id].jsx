import MainLayout from "@/src/layouts/main";
import { useRouter } from "next/router";
import React from "react";


const Course = () => {
    const router = useRouter();

    
    return (
        <MainLayout
            title={"Басты бет - OQU platforms"}
            content={"Басты бет - OQU platforms"}
        >
            <h1>Hello world</h1>
        </MainLayout>
    )
}


export default Course;