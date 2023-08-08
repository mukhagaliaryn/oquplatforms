import UserAccountLayout from "@/src/layouts/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { setAlert } from "@/src/redux/actions/alert";


const UserSettings = ({ access }) => {

    const schema = yup.object().shape({
        new_password: yup.string()
            .required('Пароль енгізу қажет')
            .min(8, 'Пароль 8 немесе одан да көп таңбадан тұруы керек')
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Пароль кем дегенде 8 таңбадан, бір бас әріптен, бір цифрдан және бір арнайы регистрден тұруы керек."
            ),
        re_new_password: yup.string()
            .required("Парольді растау қажет")
            .min(8)
            .oneOf([yup.ref('new_password'), null], "Пароль сәйкес келуі керек"),
    });

    const router = useRouter();
    const user = useSelector(state => state.auth.user)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const loading = useSelector(state => state.auth.loading);
    const dispatch = useDispatch();
    const [showPass, setPass] = useState(true)
    const [showNewPass, setNewPass] = useState(true)
    const [showRePass, setRePass] = useState(true)
    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });

    if (typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }


    const onSubmit = async (data) => {
        try {
            const response = await fetch(`${BACKEND_URL}/auth/users/set_password/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
                body: JSON.stringify(data)
            });

            if (response.status == 204) {
                dispatch(setAlert("Пароль өзгертілді!", "success"));
                router.push('/accounts/user/');
            } else {
                dispatch(setAlert("Бір жерден қателік кетті. Енгізілген парольдерді жақсылап тексеріңіз!", "error"));
            }
        } catch {
            console.log(e);
        }
    }


    return (
        <UserAccountLayout
            title={"Парольді ауыстыру"}
        >
            {(isAuthenticated && user) &&
                <div className="">
                    <div className="mb-5 md:mb-10">
                        <h1 className="text-4xl md:text-6xl font-bold">Парольді ауыстыру</h1>
                    </div>

                    <form className="my-5 max-w-2xl" onSubmit={handleSubmit(onSubmit)}>

                        <div className="py-2 w-full">
                            <label htmlFor="" className="block font-bold text-neutral-600 mb-2">
                                Пароль
                            </label>
                            <div className="relative">
                                <input
                                    type={showPass ? "password" : "text"}
                                    {...register("current_password")}
                                    placeholder="Ескі пароль..."
                                    required
                                    className={`block w-full border rounded-lg py-2 px-4 text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none`}
                                />
                                <span onClick={() => setPass(!showPass)} className="absolute right-2 top-2 text-2xl text-neutral-600 cursor-pointer">
                                    {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                </span>
                            </div>
                        </div>

                        <div className="py-2 w-full">
                            <label htmlFor="" className="block font-bold text-neutral-600 mb-2">
                                Жаңа пароль
                            </label>
                            <div className="relative">
                                <input
                                    type={showNewPass ? "password" : "text"}
                                    {...register("new_password")}
                                    placeholder="Мысалы: Abcd1234$"
                                    className={`block w-full border rounded-lg py-2 px-4 text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none`}
                                />
                                <span onClick={() => setNewPass(!showNewPass)} className="absolute right-2 top-2 text-2xl text-neutral-600 cursor-pointer">
                                    {showNewPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                </span>
                            </div>
                            {errors["new_password"] ?
                                <div className="mt-2 py-2 px-4 rounded-lg bg-red-500 text-white text-xs">
                                    {errors["new_password"].message}
                                </div>
                                : null}
                        </div>


                        <div className="py-2 w-full">
                            <label htmlFor="" className="block font-bold text-neutral-600 mb-2">
                                Жаңа парольді қайталау
                            </label>
                            <div className="relative">
                                <input
                                    type={showRePass ? "password" : "text"}
                                    {...register("re_new_password")}
                                    placeholder="Парольді қайталау..."
                                    className={`block w-full border rounded-lg py-2 px-4 text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none`}
                                />
                                <span onClick={() => setRePass(!showRePass)} className="absolute right-2 top-2 text-2xl text-neutral-600 cursor-pointer">
                                    {showRePass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                </span>
                            </div>
                            {errors["re_new_password"] ?
                                <div className="mt-2 py-2 px-4 rounded-lg bg-red-500 text-white text-xs">
                                    {errors["re_new_password"].message}
                                </div>
                                : null}
                        </div>

                        <div className="py-2 w-full">
                            <button className="block w-full px-4 py-2 border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70">
                                {loading
                                    ?
                                    "..."
                                    :
                                    "Жіберу"
                                }
                            </button>
                        </div>
                    </form>
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


export default UserSettings;