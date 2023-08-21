import React from "react";
import MainLayout from "../layouts/main";
import { useSelector } from "react-redux";
import { BACKEND_URL } from "../redux/actions/types";
import { useRouter } from "next/router";
import { CiSearch } from "react-icons/ci";


const Exlorer = ({ categories, topics }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);
    const router = useRouter();

    if (typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }

    return (
        <MainLayout
            title={'Қосымшалар - OQU platforms'}
        >
            {isAuthenticated &&
                <div>
                    <div 
                        style={{ backgroundImage: "url('/landing/main.jpg')" }}
                        className="py-20 bg-orange-100 bg-cover px-5"
                    >
                        <div className="max-w-2xl mx-auto text-center">
                            <h1 className="text-4xl font-bold md:text-6xl">
                                <span className="mr-2 text-orange-400 font-poppins">OQU</span>
                                платформасының онлайн қосымшалары
                            </h1>
                            <span className="mt-5 block text-neutral-600">
                                Оқу бағдарламасынан бөлек өзіңе ұнайтын онлайн курстарды оқып үйрен!
                            </span>
                        </div>
                        <form className="max-w-2xl mx-auto mt-10">
                            <div className="relative">
                                <input 
                                    type="text" placeholder="Іздеу..." 
                                    className="pr-6 py-3 pl-11 rounded-lg w-full outline-none border text-neutral-600 transition-all focus:shadow"
                                />
                                <button className="absolute left-3 top-3 text-neutral-600">
                                    <CiSearch className="text-2xl" />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* All topics */}
                    <div className="container mx-auto px-5 my-10">
                        {categories.map(item => {
                            return (
                                <div key={item.id}>
                                    <h1 className="text-2xl font-bold ">{item.name}</h1>
                                    <div className="grid gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 my-5">
                                        {topics.map(topic => {
                                            if (topic.category.id === item.id)
                                            return (
                                                <div
                                                    key={topic.id} 
                                                    className="h-56 w-full bg-orange-400 text-white rounded-xl flex justify-center items-center"
                                                >
                                                    <h1 className="text-xl">{topic.name}</h1>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            }
        </MainLayout>
    )
}

export async function getServerSideProps(context) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${context.req.cookies.access}`
        }
    }
    const res = await fetch(`${BACKEND_URL}/explorer/`, context.req.cookies.access && config)
    const data = await res.json();
    const categories = data.categories || []
    const topics = data.topics || []
    const user_type = data.user_type || null

    if (user_type === "TEACHER" || user_type === "MANAGER") {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            categories,
            topics
        }
    }
}


export default Exlorer;