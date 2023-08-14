import React, { useState } from "react";
import MainLayout from "../layouts/main";
import LandingComponent from "../components/pages/main";
import { useSelector } from "react-redux";
import { DayPicker } from 'react-day-picker';
import { kk } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import { format } from "date-fns";


const Main = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const [selected, setSelected] = useState();
    
    let footer = <p>Күнді таңдау.</p>;
    if (selected) {
      footer = <p>Сіз {format(selected, 'PP')} таңдадыңыз.</p>;
    }

    return (
        <MainLayout
            title={'Басты бет - OQU platforms'}
        >
            {isAuthenticated ?
                <div className="container mx-auto my-10">
                    <div className="flex">
                        <div className="flex-1 bg-orange-100 rounded-xl">
                        </div>

                        <DayPicker
                            mode="single"
                            locale={kk}
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                        />
                    </div>

                    <div className="mt-10">
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
                :
                <LandingComponent />
            }
        </MainLayout>
    )
}


export default Main;