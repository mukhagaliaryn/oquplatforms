import MainLayout from "@/src/layouts/main";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PiUserCircleThin } from "react-icons/pi";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { AuthModal, EditProfileModal } from "@/src/components/Modals";


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
    const [editModal, setEditModal] = useState(false);

    return (
        <MainLayout
            title={user ? `${user.full_name} - OQU platforms` : "OQU platforms"}
            content={user && `${user.full_name}`}
        >
            {isAuthenticated ?
                <React.Fragment>
                    {editModal && 
                        <EditProfileModal
                            user={user}
                            editModal={editModal} 
                            setEditModal={setEditModal} 
                        />
                    }

                    <React.Fragment>
                        {user &&
                            <div className="w-full flex flex-col md:flex-row items-center gap-5 bg-white p-10 rounded-lg border border-neutral-200">
                                {user.image ?
                                    <div className="rounded-full w-28 h-28 overflow-hidden">
                                        <Image src={user.image} width={520} height={520} alt={user.full_name}/>
                                    </div>
                                :
                                    <div className="text-9xl bg-neutral-900 text-neutral-100 rounded-full">
                                        <PiUserCircleThin />
                                    </div>
                                }

                                <div className="flex-1 text-center md:text-left">
                                    <span className="text-sm text-neutral-500">Профиль</span>
                                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-neutral-900">{user.full_name}</h1>
                                    <span className="text-blue-500 block text-sm my-2">{user.email}</span>
                                    <button
                                        onClick={() => setEditModal(!editModal)}
                                        className="bg-neutral-900 px-6 py-2 text-sm font-medium text-white rounded-md transition-all border border-neutral-900 hover:bg-transparent hover:text-neutral-900 active:scale-95"
                                    >
                                        Профильді өзгерту
                                    </button>
                                </div>
                            </div>
                        }
                    </React.Fragment>
                </React.Fragment>
            :
                <AuthModal closeLink={true} />
            }
        </MainLayout>
    )
}


export default UserProfile;