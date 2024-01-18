import React from "react";
import MainLayout from "../layouts/main";
import { useSelector } from "react-redux";
import { BACKEND_URL } from "../redux/actions/types";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';


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

    const arr = [0, 1, 3, 4, 5, 6, 7, 8, 9]

    return (
        <MainLayout
            title={"Басты бет - OQU platforms"}
            content={"Басты бет - OQU platforms"}
        >
            {/* Headliner */}
            <div className="shadow-sm rounded-lg overflow-hidden border">
                <Swiper
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="h-[520px]"
                >
                    <SwiperSlide>
                        <div className="bg-white h-full flex items-center p-10">
                            <div className="max-w-screen-md">
                                <h1 className="text-5xl font-bold">Wecome to OQU platforms</h1>
                                <p className="mt-4 text-neutral-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    A enim quaerat distinctio obcaecati eos totam numquam optio
                                    ratione officiis reprehenderit!
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-white h-full flex items-center p-10">
                            <div className="max-w-screen-md">
                                <h1 className="text-5xl font-bold">Wecome to OQU platforms</h1>
                                <p className="mt-4 text-neutral-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    A enim quaerat distinctio obcaecati eos totam numquam optio
                                    ratione officiis reprehenderit!
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-white h-full flex items-center p-10">
                            <div className="max-w-screen-md">
                                <h1 className="text-5xl font-bold">Wecome to OQU platforms</h1>
                                <p className="mt-4 text-neutral-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    A enim quaerat distinctio obcaecati eos totam numquam optio
                                    ratione officiis reprehenderit!
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-white h-full flex items-center p-10">
                            <div className="max-w-screen-md">
                                <h1 className="text-5xl font-bold">Wecome to OQU platforms</h1>
                                <p className="mt-4 text-neutral-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    A enim quaerat distinctio obcaecati eos totam numquam optio
                                    ratione officiis reprehenderit!
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            {/* last courses */}
            <div className="mt-8">
                <div className="mb-4">
                    <h1 className="text-neutral-900 font-semibold text-xl">Соңғы шыққан курстар</h1>
                </div>

                <Swiper
                    slidesPerView={8}
                    spaceBetween={10}
                    className="mySwiper"
                >
                    {arr.map((el, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="h-52 rounded-lg shadow-sm bg-white flex justify-center items-center">
                                    <h1 className="text-neutral-900 font-semibold text-xl">{el}</h1>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>

            {/* last courses */}
            <div className="mt-8">
                <div className="mb-4">
                    <h1 className="text-neutral-900 font-semibold text-xl">Соңғы шыққан курстар</h1>
                </div>

                <Swiper
                    slidesPerView={8}
                    spaceBetween={10}
                    className="mySwiper"
                >
                    {arr.map((el, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="h-52 rounded-lg shadow-sm bg-white flex justify-center items-center">
                                    <h1 className="text-neutral-900 font-semibold text-xl">{el}</h1>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>


            {/* popular topics */}
            <div className="mt-8">
                <div className="mb-4">
                    <h1 className="text-neutral-900 font-semibold text-xl">Сұранысқа ие бөлімдер</h1>
                </div>

                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    className="mySwiper"
                >
                    {arr.map((el, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="h-64 rounded-lg shadow-sm bg-white flex justify-center items-center">
                                    <h1 className="text-neutral-900 font-semibold text-xl">{el}</h1>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        </MainLayout>
    )
}


export default Main;