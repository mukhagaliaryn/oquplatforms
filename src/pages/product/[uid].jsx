import According from "@/src/components/According";
import { BtnLink, BtnLinkPrimary } from "@/src/components/Button";
import MainLayout from "@/src/layouts/main";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { getClassLevel } from "@/src/utils/get";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { CiCircleCheck, CiTextAlignLeft, CiTimer } from "react-icons/ci";
import { useSelector } from "react-redux";


const Product = ({ product, purposes, features, chapters, lessons, user_type }) => {
    const router = useRouter();
    const user = useSelector(state => state.auth.user);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


    if (typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }
    
    return (
        <MainLayout
            title={product && product.name}
            content={product && product.description}
        >
            {(isAuthenticated && product) &&
                <React.Fragment>
                    <div className="bg-neutral-50 border-b">
                        <div className="container mx-auto px-5 py-5 flex flex-col-reverse lg:flex-row lg:py-10">
                            <div className="flex-1 rounded-xl xl:mr-5">
                                <div>
                                    <div className="pb-5 flex items-center justify-center lg:justify-start">
                                        <h1 className="text-4xl lg:text-6xl font-bold">{product.name}</h1>
                                        <div className="text-2xl ml-2 lg:text-4xl lg:ml-5 text-green-500">
                                            <CiCircleCheck />
                                        </div>
                                    </div>
                                    <div className="py-5 text-neutral-600 border-b border-t">
                                        {product.about}
                                    </div>
                                    <div className="flex flex-col py-5 text-neutral-600 border-b">
                                        <div className="flex mt-2">
                                            <span className="mr-2 font-bold">Сынып:</span>
                                            <span>{getClassLevel(product.class_level)} - сынып</span>
                                        </div>
                                        <div className="flex mt-2">
                                            <span className="mr-2 font-bold">Типі:</span>
                                            <span>Жалпы орта мектептерге арналған пән</span>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <span className="font-bold">Өңдегендер:</span>
                                            <div className="ml-2 h-full w-full flex items-center">
                                                <span className="mr-2">Қадырали Орынбасар,</span>
                                                <span >Жалғасбек Тәліпбай</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:flex pt-5">
                                    {user_type !== "STUDENT" &&
                                        <div className="mt-2 lg:mt-0 lg:mr-2">
                                            <BtnLink href={"/"}>
                                                Жазылу
                                            </BtnLink>
                                        </div>
                                    }
                                    {chapters[0] &&
                                        <BtnLinkPrimary href={`/product/${product.id}/chapter/${chapters[0].id}`}>
                                            Сабаққа өту
                                        </BtnLinkPrimary>
                                    }
                                </div>
                            </div>

                            <div className="lg:w-96 lg:h-96 rounded-xl overflow-hidden mx-auto mb-5 lg:ml-5">
                                <Image
                                    src={product.poster} width={512} height={512} alt="poster"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto px-5 py-10 xl:flex">
                        <div className="flex-1 xl:mr-5">
                            
                            {/* Description */}
                            <div className="mb-10">
                                <h1 className="text-2xl lg:text-4xl font-bold">Пән жайлы</h1>
                                <span className="text-neutral-600 mt-5 block ">
                                    {product.description}
                                </span>
                            </div>

                            {/* Purpose */}
                            <div className="mb-10">
                                <h1 className="text-2xl lg:text-4xl font-bold">Оқыту мақсаттары</h1>
                                <div className="flex flex-col mt-5">
                                    {purposes.map(item => {
                                        return (
                                            <div className="flex items-center py-5 border-b" key={item.id}>
                                                <CiCircleCheck className="block text-2xl mr-2 text-green-500" />
                                                <span className="text-neutral-600">{item.item}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Chapters */}
                            <div>
                                <h1 className="text-2xl lg:text-4xl font-bold">Мазмұны</h1>

                                <div className="mt-5">
                                    {chapters.map(chapter => {
                                        return (
                                            <React.Fragment key={chapter.id}>
                                                <According
                                                    title={chapter.chapter_name}
                                                    content={`${chapter.chapter_name} бөлімінің контенті`}
                                                >
                                                    {lessons.map(lesson => {
                                                        if (lesson.chapter === chapter.id) {
                                                            return (
                                                                <div className="flex items-center justify-between text-neutral-600 p-5 border-b" key={lesson.id}>
                                                                    <div className="flex items-center">
                                                                        <CiTextAlignLeft className="text-xl mr-2" />
                                                                        <span>{lesson.title}</span>
                                                                    </div>
    
                                                                    <div className="flex items-center">
                                                                        <CiTimer className="text-xl mr-2" />
                                                                        <span>{lesson.duration}мин</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </According>
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        
                        {/* Features */}
                        <div className="w-full mt-10 xl:w-96 xl:ml-5 xl:mt-0">
                            <h1 className="text-2xl lg:text-4xl font-bold">Сипаттамалары</h1>
                            <div className="flex flex-col my-5 text-neutral-600">
                                {features.map((item) => {
                                    return (
                                        <div className="flex items-center py-3 border-b" key={item.id}>
                                            <span className="font-bold mr-2">{item.label}:</span>
                                            <span className="flex-1">{item.item}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
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
    const res = await fetch(`${BACKEND_URL}/products/product/${context.params.uid}/`, context.req.cookies.access && config)
    const data = await res.json();
    const user_type = data.user_type || null
    const product = data.product || null;
    const purposes = data.purposes || [];
    const features = data.features || [];
    const chapters = data.chapters || [];
    const lessons = data.lessons || [];


    if (user_type === "TEACHER" || user_type === "MANAGER") {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            product,
            purposes,
            features,
            chapters,
            lessons,
            user_type
        }
    }
}

export default Product;