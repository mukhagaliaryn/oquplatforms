import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { check_auth_status, reset_password_confirm } from "@/src/redux/actions/auth";
import MainLayout from "@/src/layouts/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PiEyeLight, PiEyeSlashLight, PiWarningOctagonLight } from "react-icons/pi";



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


    const onSubmit = (data) => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(reset_password_confirm(router.query.uid, router.query.token, data.new_password, data.re_new_password));
        }
        router.push('/')
    };

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(check_auth_status());

    }, [dispatch]);

    if (typeof window !== "undefined" && isAuthenticated)
        router.push("/");


    return (
        <MainLayout
            title={"Жаңа пароль енгізу"}
        >
            <div className="w-full max-w-xl mx-auto bg-white rounded-lg border border-neutral-200 p-10">
                <h1 className="text-xl font-semibold text-center">Жаңа пароль енгізу</h1>

                <form className="mt-5 grid gap-4" onSubmit={handleSubmit(onSubmit)}>

                    {/* new_password */}
                    <div className="relative">
                        <input
                            type={showPass ? "password" : "text"}
                            placeholder="Abcdfg123$"
                            {...register("new_password")}
                            className="pl-4 pr-10 py-2 border text-neutral-900 border-neutral-200 rounded-md outline-none w-full text-sm transition-all focus:border-b-blue-500 focus:shadow focus:bg-white"
                        />
                        <div
                            onClick={() => setPass(!showPass)}
                            className="absolute top-2 right-3 text-neutral-500 text-xl cursor-pointer"
                        >
                            {showPass ? <PiEyeLight /> : <PiEyeSlashLight />}
                        </div>
                        {errors["new_password"] &&
                            <div className="mt-2 px-2 text-red-500 text-xs flex gap-1 items-center">
                                <PiWarningOctagonLight />
                                <span className="block">{errors["new_password"].message}</span>
                            </div>
                        }
                    </div>

                    {/* re_new_password */}
                    <div className="relative">
                        <input
                            type={showPass ? "password" : "text"}
                            placeholder="Парольді қайталау"
                            {...register("re_new_password")}
                            className="pl-4 pr-10 py-2 border text-neutral-900 border-neutral-200 rounded-md outline-none w-full text-sm transition-all focus:border-b-blue-500 focus:shadow focus:bg-white"
                        />
                        <div
                            onClick={() => setPass(!showPass)}
                            className="absolute top-2 right-3 text-neutral-500 text-xl cursor-pointer"
                        >
                            {showPass ? <PiEyeLight /> : <PiEyeSlashLight />}
                        </div>
                        {errors["re_new_password"] &&
                            <div className="mt-2 px-2 text-red-500 text-xs flex gap-1 items-center">
                                <PiWarningOctagonLight />
                                <span className="block">{errors["re_new_password"].message}</span>
                            </div>
                        }
                    </div>

                    <div className="relative">
                        <button className="bg-neutral-900 w-full px-6 py-2 text-sm font-medium text-white rounded-md transition-all border border-neutral-900 hover:bg-transparent hover:text-neutral-900 active:scale-95">
                            Парольді ауыстыру
                        </button>
                    </div>
                </form>
            </div>
        </MainLayout>
    )
}

export default PasswordResetConfirm;
