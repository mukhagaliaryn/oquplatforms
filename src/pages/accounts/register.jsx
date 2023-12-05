import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AccountLayout from "@/src/layouts/account";
import { useDispatch, useSelector } from "react-redux";
import { check_auth_status, signup } from "@/src/redux/actions/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Link from "next/link";


const Register = () => {
    const schema = yup.object().shape({
        full_name: yup.string()
            .required('Аты жазылуы қажет!')
            .min(3, "Минимум 3 символ болу қажет")
            .max(64, "Максимум 64 символдан аспауы қажет"),
        email: yup.string()
            .email('Электрондық пошта @ белгісі болуы керек')
            .required('Электрондық пошта қажет')
            .max(32, "Максимум 32 символ"),
        password: yup.string()
            .required('Пароль қажет')
            .min(8, 'Пароль 8 немесе одан да көп таңбадан тұруы керек')
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Пароль кем дегенде 8 таңбадан, бір бас әріптен, бір цифрдан және бір арнайы регистрден тұруы керек."
            ),
        re_password: yup.string()
            .required("Пароль растау қажет")
            .min(8)
            .oneOf([yup.ref('password'), null], "Пароль сәйкес келуі керек"),
    });

    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });
    const router = useRouter()
    const loading = useSelector(state => state.auth.loading);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch()
    const register_success = useSelector(state => state.auth.register_success);

    const [showPass, setPass] = useState(true)
    const [showRePass, setRePass] = useState(true)


    const onSubmit = (data) => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(signup(data.full_name, data.email, data.password, data.re_password));
    };

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(check_auth_status());

    }, [dispatch]);

    if (typeof window !== "undefined" && isAuthenticated)
        router.push(localStorage.getItem('currentPage') || "/");


    if (register_success)
        router.push('/accounts/login');


    return (
        <AccountLayout
            title={"Регистрация"}
        >
            <div className="max-w-sm mx-auto my-10">
                <h1 className="text-3xl font-bold text-center">Регистрация</h1>
                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="py-2 w-full">
                        <label htmlFor="" className="block font-bold text-neutral-600 mb-2">Аты-жөні</label>
                        <input
                            type="text"
                            {...register("full_name")}
                            placeholder="Аты-жөнің..."
                            className={`block w-full border rounded-lg py-2 px-4 text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none ${errors["full_name"] && "border-red-500"}`}
                        />
                        {errors["full_name"] ?
                            <div className="mt-2 py-2 px-4 rounded-lg bg-red-500 text-white text-xs">
                                {errors["full_name"].message}
                            </div>
                            : null}
                    </div>

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
                                placeholder="Мысалы: Abcd1234$"
                                className={`block w-full border rounded-lg py-2 px-4 text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none ${errors["password"] && "border-red-500"}`}
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

                    <div className="py-2 w-full">
                        <label htmlFor="" className="block font-bold text-neutral-600 mb-2">
                            Парольді қайталау
                        </label>
                        <div className="relative">
                            <input
                                type={showRePass ? "password" : "text"}
                                {...register("re_password")}
                                placeholder="Парольді қайталау..."
                                className={`block w-full border rounded-lg py-2 px-4 text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none ${errors["re_password"] && "border-red-500"}`}
                            />
                            <span onClick={() => setRePass(!showRePass)} className="absolute right-2 top-2 text-2xl text-neutral-600 cursor-pointer">
                                {showRePass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </span>
                        </div>
                        {errors["re_password"] ?
                            <div className="mt-2 py-2 px-4 rounded-lg bg-red-500 text-white text-xs">
                                {errors["re_password"].message}
                            </div>
                            : null}
                    </div>

                    <div className="py-2 w-full flex justify-between items-center">
                        <button className="block w-full px-4 py-2 border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70">
                            {loading ?
                                "..."
                                :
                                "Регистрация"
                            }
                        </button>
                    </div>

                    <div className="mt-2">
                        <span className="mb-2 block text-neutral-600">Егер аккаунт бар болса</span>
                        <Link 
                            href={"/accounts/login"}
                            className="px-4 py-2 block rounded-lg text-neutral-600 text-center border hover:border-neutral-900"
                        >Жүйеге кіру</Link>
                    </div>
                </form>
            </div>
        </AccountLayout>
    )
}

export default Register;