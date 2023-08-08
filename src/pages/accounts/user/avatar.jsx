import UserAccountLayout from "@/src/layouts/user";
import { setAlert } from "@/src/redux/actions/alert";
import { BACKEND_URL } from "@/src/redux/actions/types";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { PiTrashThin } from "react-icons/pi";
import { CiSaveDown2 } from "react-icons/ci";


const UserAvatar = ({ access }) => {
    const router = useRouter();
    const user = useSelector(state => state.auth.user)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();


    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append('image', data.image[0])

        try {
            const response = await fetch(`${BACKEND_URL}/accounts/user/avatar/`, {
                method: "POST",
                headers: {
                    "Authorization": `JWT ${access}`
                },
                body: formData
            });

            if (response.status == 200) {
                router.push(`/accounts/user/`);
                dispatch(setAlert("Сурет қойылды!", "success"));
            } else {
                dispatch(setAlert("Бір жерден қателік кетті!", "error"));
            }
        } catch {
            console.log(e);
        }
    }


    const deleteAvatar = async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/accounts/user/avatar`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
            });

            if (response.status == 204) {
                router.reload();
                dispatch(setAlert("Сурет өшті!", "success"));
            } else {
                dispatch(setAlert("Бір жерден қателік кетті!", "error"));
            }
        } catch {
            console.log(e);
        }
    }


    if (typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }

    return (
        <UserAccountLayout
            title={"Аватар"}
        >
            {(isAuthenticated && user) &&
                <div>
                    <div className="mb-5 md:mb-10">
                        <h1 className="text-4xl md:text-6xl font-bold">Аватар</h1>
                    </div>

                    <div
                        style={{ backgroundImage: "url('/accounts/avatar-bg.jpg')" }}
                        className="w-full py-20 bg-cover rounded-xl"
                    >
                        <Image
                            src={user.image ? user.image : "/icons/user.png"} width={520} height={520} alt="avatar"
                            className="block w-48 h-48 shadow-xl rounded-full mx-auto"
                        />
                    
                        {user.image ?
                            <div className="flex justify-center mt-10">
                                <button
                                    className="flex items-center p-4 border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70"
                                    onClick={deleteAvatar}
                                    title="Өшіру"
                                >
                                    <PiTrashThin className="text-xl"/>
                                </button>
                            </div>
                            :
                            <form className="flex flex-col items-center mt-10" onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-5">
                                    <input
                                        type="file"
                                        required
                                        {...register("image")}
                                        className="border px-4 py-2 rounded-xl text-neutral-600"
                                    />
                                </div>
                                <button
                                    className="flex items-center px-4 py-2 border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70"
                                >
                                    <CiSaveDown2 className="mr-2 text-xl" />
                                    <span>Сақтау</span>
                                </button>
                            </form>
                        }
                    </div>
                </div>
            }
        </UserAccountLayout>
    )
}


export async function getServerSideProps(context) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${context.req.cookies.access}`
        }
    }
    const res = await fetch(`${BACKEND_URL}/accounts/user/`, context.req.cookies.access && config)
    const user_account = await res.json();

    return {
        props: {
            user_account,
            access: context.req.cookies.access || ''
        }
    }
}


export default UserAvatar;