import React from "react";
import MainLayout from "../layouts/main";
import { TbSettingsCode } from "react-icons/tb";



const Settings = () => {
    return (
        <MainLayout
            title={"Баптаулар - OQU platforms"}
        >
            <div className="max-w-xl w-full mx-auto bg-white p-10 rounded-lg border border-neutral-200 text-center">
                <div className="text-6xl text-neutral-900">
                    <TbSettingsCode className="block text-center w-full"/>
                </div>
                <h1 className="text-xl font-semibold text-neutral-900 mt-2">Баптаулар</h1>
                <span className="text-sm text-neutral-500 block">
                    Баптаулар беті әзірге жасалып жатыр
                </span>
            </div>
        </MainLayout>
    )
}

export default Settings;
