import React, { useEffect, useState } from "react";
import AccountLayout from "@/src/layouts/account";

import { check_auth_status, login } from "@/src/redux/actions/auth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Link from "next/link";


const Login = () => {
    const schema = yup.object().shape({
        email: yup.string()
            .email('Электрондық пошта @ белгісі болуы керек')
            // .notOneOf(emailList, 'Электронная почта уже существует')
            .required('Электрондық пошта қажет')
            .max(32, "Максимум 32 символ"),
        password: yup.string()
            .required('Парольді енгізу қажет')
            .min(8, 'Пароль 8 немесе одан да көп таңбадан тұруы керек')
    });


    const router = useRouter()
    const loading = useSelector(state => state.auth.loading);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });
    const [showPass, setPass] = useState(true)


    const onSubmit = (data) => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(login(data.email, data.password));
        }
    };

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(check_auth_status());

    }, [dispatch]);


    if (typeof window !== "undefined" && isAuthenticated)
        router.push(localStorage.getItem('currentPage') || "/");


    return (
        <AccountLayout
            title={"Жүйеге кіру"}
        >
            <div className="max-w-sm mx-auto my-10">
                <h1 className="text-3xl font-bold text-center">Жүйеге кіру</h1>

                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="py-2 w-full">
                        <label htmlFor="" className="block font-bold text-neutral-600 mb-2">
                            Электронды пошта
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            placeholder="example@gmail.com"
                            className={`block w-full border rounded-lg py-2 px-4 text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none ${errors["email"] && "border-red-500"}`}
                        />
                        {errors["email"] ?
                            <div className="mt-2 py-2 px-4 rounded-lg bg-red-500 text-white text-xs">
                                {errors["email"].message}
                            </div>
                            : null}
                    </div>

                    <div className="py-2 w-full">
                        <label htmlFor="" className="block font-bold text-neutral-600 mb-2">
                            Пароль
                        </label>
                        <div className="relative">
                            <input
                                type={showPass ? "password" : "text"}
                                {...register("password")}
                                placeholder="Парольді енгіз!"
                                className={`block w-full border rounded-lg py-2 px-4 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none text-neutral-600 ${errors["password"] && "border-red-500"}`}
                            />
                            <span onClick={() => setPass(!showPass)} className="absolute right-2 top-2 text-2xl text-neutral-600 cursor-pointer">
                                {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </span>
                        </div>
                        {errors["password"] ?
                            <div className="mt-2 py-2 px-4 rounded-lg bg-red-500 text-white text-xs">
                                {errors["password"].message}
                            </div>
                            : null}
                    </div>

                    <div className="py-2 w-full flex flex-col">
                        <button className="px-4 py-2 border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70">
                            {loading 
                            ? 
                                "..." 
                            : 
                                "Кіру"
                            }
                        </button>
                        
                        <Link href={"/accounts/password-reset"} className="inline-block text-center mt-4 text-neutral-600 hover:underline">Парольді қалпына келтіру</Link>
                    </div>

                    {/* <div className="mt-4">
                        <Link href={"/accounts/register"} 
                            className="px-4 py-2 block rounded-lg text-neutral-600 text-center border hover:border-neutral-900">Регистрация</Link>
                    </div> */}
                </form>
            </div>
        </AccountLayout>
    )
}

export default Login;