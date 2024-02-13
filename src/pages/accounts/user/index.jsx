import MainLayout from "@/src/layouts/main";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { PiUserCircleThin } from "react-icons/pi";


const UserProfile = (data) => {
    const user = useSelector(state => state.auth.user);

    return (
        <MainLayout
            title={user && `${user.full_name} - OQU platforms`}
            content={user && `${user.full_name}`}
        >
            {user &&
            <div className="w-full flex items-center gap-5 bg-white p-10 rounded-lg border border-neutral-200">
                    {user.image ?
                        <div className="rounded-xl w-28 h-28 overflow-hidden">
                            <Image src={user.image} width={520} height={520} />
                        </div>
                    :
                        <div className="text-9xl bg-neutral-900 text-neutral-100 rounded-full">
                            <PiUserCircleThin />
                        </div>
                    }

                <div className="flex-1">
                    <span className="text-sm text-neutral-500">Профиль</span>
                    <h1 className="text-6xl font-semibold text-neutral-900">{user.full_name}</h1>
                    <span className="text-blue-500 block text-sm mt-2">{user.email}</span>
                </div>
            </div>
            }
        </MainLayout>
    )
}


export default UserProfile;