import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AccountLayout from "@/src/layouts/account";
import { check_auth_status, reset_password_confirm } from "@/src/redux/actions/auth";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Link from "next/link";


const PasswordResetConfirm = () => {
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

    const router = useRouter()
    const loading = useSelector(state => state.auth.loading);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });
    const [showPass, setPass] = useState(true)
    const [showRePass, setRePass] = useState(true)

    const onSubmit = (data) => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(reset_password_confirm(router.query.uid, router.query.token, data.new_password, data.re_new_password));
        }
        router.push('/accounts/login')
    };

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(check_auth_status());

    }, [dispatch]);

    if (typeof window !== "undefined" && isAuthenticated)
        router.push("/");


    return (
        <AccountLayout
            title={"Жаңа пароль енгізу"}
        >
            <div className="max-w-sm mx-auto my-10">
                <h1 className="text-3xl font-bold text-center">Жаңа пароль енгізу</h1>

                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>

                    <div className="py-2 w-full">
                        <label htmlFor="" className="block font-bold text-neutral-600 mb-2">
                            Пароль
                        </label>
                        <div className="relative">
                            <input
                                type={showPass ? "password" : "text"}
                                {...register("new_password")}
                                placeholder="Мысалы: Abcd1234$"
                                className={`block w-full border rounded-lg py-2 px-4 text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none ${errors["new_password"] && "border-red-500"}`}
                            />
                            <span onClick={() => setPass(!showPass)} className="absolute right-2 top-2 text-2xl text-neutral-600 cursor-pointer">
                                {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
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
                            Парольді қайталау
                        </label>
                        <div className="relative">
                            <input
                                type={showRePass ? "password" : "text"}
                                {...register("re_new_password")}
                                placeholder="Парольді қайталау..."
                                className={`block w-full border rounded-lg py-2 px-4 text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none ${errors["re_new_password"] && "border-red-500"}`}
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

                    <div className="pt-4 w-full">
                        <Link 
                            href={"/accounts/login"}
                            className="px-4 py-2 block rounded-lg text-neutral-600 text-center border hover:border-neutral-900"
                        >Кері қайту</Link>
                    </div>
                </form>
            </div>
        </AccountLayout>
    )
}

export default PasswordResetConfirm;
