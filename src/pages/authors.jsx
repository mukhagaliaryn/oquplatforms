import React from "react";
import MainLayout from "../layouts/main";
import { BACKEND_URL } from "../redux/actions/types";
import Link from "next/link";
import Image from "next/image";


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
            title={"Авторлар - OQU platforms"}
            content={"Авторлар тізімі - OQU platforms"}
        >
            <div className="">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
                    {authors.map(author => {
                        return (
                            <Link href={"#"} key={author.id} className="block shadow-sm bg-white rounded-lg overflow-hidden transition-all hover:shadow-md">
                                <div className="p-4">
                                    <Image
                                        src={author.user.image ? author.user.image : "/images/user.png"} width={520} height={520}
                                        className="w-24 h-24 rounded-full mx-auto"
                                        alt={"Author image"}
                                    />
                                    <div className="mt-4 text-center">
                                        <h1 className="font-semibold">{author.user.full_name}</h1>

                                        <div className="mt-2 py-1 px-3 text-xs rounded-md bg-blue-100 text-blue-500 inline-block">
                                            <span>{author.specialty}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </MainLayout>
    )
}


export default Authors;