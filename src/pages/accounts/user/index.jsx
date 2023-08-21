import UserAccountLayout from "@/src/layouts/user";
import { setAlert } from "@/src/redux/actions/alert";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";



const UserAccount = ({ user_account, access }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const { register, handleSubmit } = useForm();
    const { register: register2, handleSubmit: handleSubmit2, } = useForm();


    const onSubmitUser = async (data) => {
        try {
            const response = await fetch(`${BACKEND_URL}/accounts/user/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
                body: JSON.stringify(data)
            });

            if (response.status == 200) {
                router.push(`/accounts/user/`);
                dispatch(setAlert("Аккаунт сақталды!", "success"));
            } else {
                dispatch(setAlert("Бір жерден қателік кетті!", "error"));
            }
        } catch {
            console.log(e);
        }
    }

    const onSubmitAccount = async (data) => {
        data = { first_name: user.first_name, last_name: user.last_name, ...data }
        try {
            const response = await fetch(`${BACKEND_URL}/accounts/user/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
                body: JSON.stringify(data)
            });

            if (response.status == 200) {
                router.push(`/accounts/user/`);
                dispatch(setAlert("Аккаунт сақталды!", "success"));
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
            title={user ? `${user.first_name} ${user.last_name}` : "Аккаунт"}
        >
            {(isAuthenticated && user) &&
                <div className="">
                    <div className="mb-5 md:mb-10">
                        <h1 className="text-4xl md:text-6xl font-bold">Аккаунт</h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* User form */}
                        <form className="w-full border-b lg:border-none pb-5" onSubmit={handleSubmit(onSubmitUser)}>
                            <div className="mb-4">
                                <label htmlFor="" className="w-full block text-left font-bold mb-2 text-neutral-600">Аты</label>
                                <input
                                    type="text"
                                    placeholder="..."
                                    {...register("first_name")}
                                    className="border rounded-lg py-2 px-4 w-full text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none"
                                    required
                                    defaultValue={user.first_name}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="" className="w-full block text-left font-bold mb-2 text-neutral-600 ">Тегі</label>
                                <input
                                    type="text"
                                    placeholder="..."
                                    {...register("last_name")}
                                    className="border rounded-lg py-2 px-4 w-full text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none"
                                    required
                                    defaultValue={user.last_name}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="" className="w-full block text-left font-bold mb-2 text-neutral-600">Логин</label>
                                <input
                                    type="text"
                                    placeholder="..."
                                    className="border rounded-lg py-2 px-4 w-full text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none"
                                    disabled
                                    defaultValue={user.username}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="" className="w-full block text-left font-bold mb-2 text-neutral-600">Электронды пошта</label>
                                <input
                                    type="email"
                                    placeholder="..."
                                    className="border rounded-lg py-2 px-4 w-full text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none"
                                    disabled
                                    defaultValue={user.email}
                                />
                            </div>
                            <div className="mb-4">
                                <button className="block w-full px-4 py-2 border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70">Сақтау</button>
                            </div>
                        </form>


                        {/* User account form */}
                        <form className="w-full" onSubmit={handleSubmit2(onSubmitAccount)}>
                            <div className="mb-4">
                                <label htmlFor="" className="w-full block text-left font-bold mb-2 text-neutral-600">Қала</label>
                                <select defaultValue={user_account.city} {...register2("city")} className="border rounded-lg py-2 px-4 block w-full text-neutral-600">
                                    <option value="NOT_DEFINED">Таңдалмаған</option>
                                    <option value="SHYMKENT">Шымкент</option>
                                    <option value="ALMATY">Алматы</option>
                                    <option value="ASTANA">Астана</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="" className="w-full block text-left font-bold mb-2 text-neutral-600">Мекен-жайы</label>
                                <input
                                    placeholder="..."
                                    className="border rounded-lg py-2 px-4 w-full text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none"
                                    required
                                    {...register2("address")}
                                    defaultValue={user_account.address}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="" className="w-full block text-left font-bold mb-2 text-neutral-600">Жыныс</label>
                                <select defaultValue={user_account.gender} {...register2("gender")} className="border rounded-lg py-2 px-4 block w-full text-neutral-600">
                                    <option value="NOT_DEFINED">Таңдалмаған</option>
                                    <option value="MALE">Ер</option>
                                    <option value="FAMALE">Әйел</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="" className="w-full block text-left font-bold mb-2 text-neutral-600">Туылған күні</label>
                                <input
                                    type="date"
                                    placeholder="..."
                                    className="border rounded-lg py-2 px-4 w-full text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none"
                                    required
                                    {...register2("birthday")}
                                    defaultValue={user_account.birthday}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="" className="w-full block text-left font-bold mb-2 text-neutral-600">Телефон</label>
                                <input
                                    type="tel"
                                    placeholder="..."
                                    className="border rounded-lg py-2 px-4 w-full text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none"
                                    required
                                    {...register2("phone")}
                                    defaultValue={user_account.phone}
                                />
                            </div>
                            <div className="mb-4">
                                <button className="block w-full px-4 py-2 border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70">Сақтау</button>
                            </div>
                        </form>
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
            access: context.req.cookies.access || ""
        }
    }
}


export default UserAccount;