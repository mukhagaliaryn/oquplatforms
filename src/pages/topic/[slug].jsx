import MainLayout from "@/src/layouts/main";
import { useRouter } from "next/router";
import React from "react";


const Category = () => {
    const router = useRouter();
    
    return (
        <MainLayout
            title={`${router.query.slug} - OQU platforms`}
            content={"Категория парақшасы - OQU platforms"}
        >
            <div>
                <h1>{router.query.slug}</h1>
            </div>
        </MainLayout>

    )
}

export default Category;