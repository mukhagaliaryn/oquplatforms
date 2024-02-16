import MainLayout from "@/src/layouts/main";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { PiUserCircleThin } from "react-icons/pi";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { AuthModal } from "@/src/components/Modals";


export async function getServerSideProps(context) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${context.req.cookies.access}`
        }
    }
    const res = await fetch(`${BACKEND_URL}/auth/users/me/`, context.req.cookies.access && config)
    const data = await res.json();
    const user = data || null

    return {
        props: {
            user
        }
    }
}


const UserProfile = (data) => {
    const { user } = data;
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <MainLayout
            title={user ? `${user.full_name} - OQU platforms` : "OQU platforms"}
            content={user && `${user.full_name}`}
        >
            {isAuthenticated ?
                <React.Fragment>
                    {user &&
                        <div className="w-full flex items-center gap-5 bg-white p-10 rounded-lg border border-neutral-200">
                            {user.image ?
                                <div className="rounded-xl w-28 h-28 overflow-hidden">
                                    <Image src={user.image} width={520} height={520} alt={user.full_name}/>
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
                </React.Fragment>
            :
                <AuthModal closeLink={true} />
            }
        </MainLayout>
    )
}


export default UserProfile;