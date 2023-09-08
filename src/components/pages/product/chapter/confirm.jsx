import { BtnLinkPrimary } from "@/src/components/Button";
import { useRouter } from "next/router";
import React from "react";


const ConfirmModal = ({ confirm, setConfirm }) => {
    const router = useRouter();

    const handleConfirm = () => {
        setConfirm(!confirm)
    }

    return (
        <div className="absolute w-full h-full top-0 left-0 bg-white bg-opacity-20  z-50 flex justify-center items-center">
            <div className="max-w-2xl bg-white p-10 shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold">Бөлімге растама беру</h1>
                <p className="my-4 text-neutral-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Maxime cupiditate similique libero soluta saepe earum repudiandae fuga qui?
                    Error, esse? Itaque ipsum nihil sequi dignissimos perspiciatis cupiditate 
                    ratione quibusdam eveniet?
                </p>

                <div className="flex items-center">
                    <button
                        onClick={() => handleConfirm()} 
                        className="mr-2 px-4 py-2 border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70">
                        Бөлімге растама беру
                    </button>
                    <BtnLinkPrimary href={`/product/${router.query.uid}`}>Кері қайту</BtnLinkPrimary>
                </div>
                
            </div>
            
        </div>
    )
}

export default ConfirmModal;