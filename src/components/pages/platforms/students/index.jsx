import React, { useState } from "react";
import { DayPicker } from 'react-day-picker';
import { kk } from 'date-fns/locale';
import Link from "next/link";


const MainComponent = () => {
    const [selected, setSelected] = useState(undefined);
    const handleDayClick = day => {
        setSelected(day)
        // console.log(day)
    }

    const products = [0,1,2,3,4]

    return (
        <div className="container mx-auto my-10 px-5">
            <div className="h-20 bg-orange-100 rounded-xl"></div>

            <div className="flex mt-10">
                <div className="flex-1 bg-orange-100 rounded-xl mr-5">
                </div>

                <div className="bg-orange-100 rounded-xl">
                    <DayPicker
                        mode="single"
                        locale={kk}
                        selected={selected}
                        onDayClick={handleDayClick}
                    />
                </div>

            </div>

            <div className="mt-10">
                <h1 className="text-2xl font-bold ">Бүгінгі өтілетін пәндер</h1>
                <div className="grid gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 my-5">
                    {products.map((item, i) => {
                        return (
                            <Link
                                key={i}
                                href={`/product/${i}`}
                                className="h-56 w-full bg-orange-100 rounded-xl"
                            >
                                {item}
                            </Link>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default MainComponent;