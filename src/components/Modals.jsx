import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PiEyeLight, PiEyeSlashLight, PiUserLight, PiWarningOctagonLight } from "react-icons/pi";
import { TfiClose, TfiEmail } from "react-icons/tfi";
import { login, passwordReset, signup } from "../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";



// Authentication modal
export const AuthModal = (props) => {
    const { authModal, setAuthModal, closeLink } = props;
    const [slideIndex, setSlideIndex] = useState(0);
    const router = useRouter();
    const loading = useSelector(state => state.auth.loading);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();


    // Login
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
    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });
    const [showPass, setPass] = useState(true)

    const Login = (data) => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(login(data.email, data.password));
        }
    };

    // Register
    const regSchema = yup.object().shape({
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
    const { register: register2, formState: { errors: errors2 }, handleSubmit: handleSubmit2 } = useForm({ resolver: yupResolver(regSchema) });
    const [showRegPass, setRegPass] = useState(true)
    const register_success = useSelector(state => state.auth.register_success);

    const Register = (data) => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(signup(data.full_name, data.email, data.password, data.re_password));
            setSlideIndex(0);
        }
    };


    // Reset password
    const { register: register3, handleSubmit: handleSubmit3 } = useForm();

    const ResetPassword = (data) => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(passwordReset(data.email));
            setSlideIndex(0)
        }
    };

    if (typeof window !== "undefined" && isAuthenticated) {
        setAuthModal(!authModal);
        router.push(router.asPath);
    }


    return (
        <div className="fixed top-0 left-0 z-10 w-full h-full p-2 flex justify-center items-center bg-white/50 backdrop-blur-3xl">
            {closeLink ?
                <div
                    onClick={() => router.push("/")}
                    className="w-8 h-8 rounded-md text-neutral-500 bg-white absolute top-4 right-4 shadow-sm flex justify-center items-center cursor-pointer transition-all hover:shadow active:scale-95"
                >
                    <TfiClose />
                </div>
                :
                <div
                    onClick={() => setAuthModal(!authModal)}
                    className="w-8 h-8 rounded-md text-neutral-500 bg-white absolute top-4 right-4 shadow-sm flex justify-center items-center cursor-pointer transition-all hover:shadow active:scale-95"
                >
                    <TfiClose />
                </div>
            }

            <div className="max-w-sm w-full flex items-start overflow-hidden">
                {/* Login */}
                {/* -------------------------------------------------------------------------------------------------------- */}
                <motion.div
                    animate={{
                        translateX: `-${slideIndex * 100}%`,
                        scale: slideIndex === 0 ? 1 : 0.9,
                    }}
                    className="w-full p-5 bg-white border border-neutral-200 shadow-sm rounded-lg shrink-0"
                >
                    <div>
                        <Image
                            src={"/images/full-logo-white.png"} width={945} height={300} alt="logo"
                            className="w-24 mx-auto"
                        />
                        <h1 className="text-neutral-900 font-semibold text-xl my-5 text-center">Жүйеге кіру</h1>
                    </div>

                    <form className="grid gap-4" onSubmit={handleSubmit(Login)}>
                        {/* email */}
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                {...register("email")}
                                className="pl-4 pr-10 py-2 border text-neutral-900 border-neutral-200 rounded-md outline-none w-full text-sm transition-all focus:border-b-blue-500 focus:shadow focus:bg-white"
                            />
                            <div className="absolute top-2 right-3 text-neutral-500 text-xl">
                                <PiUserLight />
                            </div>
                            {errors["email"] &&
                                <div className="mt-2 px-2 text-red-500 text-xs flex gap-1 items-center">
                                    <PiWarningOctagonLight />
                                    <span className="block">{errors["email"].message}</span>
                                </div>
                            }
                        </div>
                        {/* password */}
                        <div className="relative">
                            <input
                                type={showPass ? "password" : "text"}
                                placeholder="Abcdfg123$"
                                {...register("password")}
                                className="pl-4 pr-10 py-2 border text-neutral-900 border-neutral-200 rounded-md outline-none w-full text-sm transition-all focus:border-b-blue-500 focus:shadow focus:bg-white"
                            />
                            <div
                                onClick={() => setPass(!showPass)}
                                className="absolute top-2 right-3 text-neutral-500 text-xl cursor-pointer"
                            >
                                {showPass ? <PiEyeLight /> : <PiEyeSlashLight />}
                            </div>
                            {errors["password"] &&
                                <div className="mt-2 px-2 text-red-500 text-xs flex gap-1 items-center">
                                    <PiWarningOctagonLight />
                                    <span className="block">{errors["password"].message}</span>
                                </div>
                            }
                        </div>

                        <div className="relative">
                            <button className="bg-neutral-900 w-full px-6 py-2 text-sm font-medium text-white rounded-md transition-all border border-neutral-900 hover:bg-transparent hover:text-neutral-900 active:scale-95">
                                Кіру
                            </button>
                        </div>
                    </form>
                    {/* Links */}
                    <div className="mt-4 grid gap-2 text-center">
                        <div
                            onClick={() => setSlideIndex(1)}
                            className="text-blue-500 text-sm cursor-pointer transition-all hover:text-neutral-500 active:scale-95"
                        >
                            Регистрация
                        </div>
                        <div
                            onClick={() => setSlideIndex(2)}
                            className="text-blue-500 text-sm cursor-pointer transition-all hover:text-neutral-500 active:scale-95"
                        >
                            Парольді қалпына келтіру
                        </div>
                    </div>
                </motion.div>


                {/* Register */}
                {/* -------------------------------------------------------------------------------------------------------- */}
                <motion.div
                    animate={{
                        translateX: `-${slideIndex * 100}%`,
                        scale: slideIndex === 1 ? 1 : 0.9,
                    }}
                    className="w-full p-5 bg-white border border-neutral-200 shadow-sm rounded-lg shrink-0"
                >
                    <div>
                        <Image
                            src={"/images/full-logo-white.png"} width={945} height={300} alt="logo"
                            className="w-24 mx-auto"
                        />
                        <h1 className="text-neutral-900 font-semibold text-xl my-5 text-center">Регистрация</h1>
                    </div>

                    <form className="grid gap-4" onSubmit={handleSubmit2(Register)}>
                        {/* full_name */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Толық аты-жөні"
                                {...register2("full_name")}
                                className="pl-4 pr-10 py-2 border text-neutral-900 border-neutral-200 rounded-md outline-none w-full text-sm transition-all focus:border-b-blue-500 focus:shadow focus:bg-white"
                            />
                            <div className="absolute top-2 right-3 text-neutral-500 text-xl">
                                <PiUserLight />
                            </div>
                            {errors2["full_name"] &&
                                <div className="mt-2 px-2 text-red-500 text-xs flex gap-1 items-center">
                                    <PiWarningOctagonLight />
                                    <span className="block flex-1">{errors2["full_name"].message}</span>
                                </div>
                            }
                        </div>
                        {/* email */}
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                {...register2("email")}
                                className="pl-4 pr-10 py-2 border text-neutral-900 border-neutral-200 rounded-md outline-none w-full text-sm transition-all focus:border-b-blue-500 focus:shadow focus:bg-white"
                            />
                            <div className="absolute top-3 right-3 text-neutral-500">
                                <TfiEmail />
                            </div>
                            {errors2["email"] &&
                                <div className="mt-2 px-2 text-red-500 text-xs flex gap-1 items-center">
                                    <PiWarningOctagonLight />
                                    <span className="block flex-1">{errors2["email"].message}</span>
                                </div>
                            }
                        </div>
                        {/* password */}
                        <div className="relative">
                            <input
                                type={showRegPass ? "password" : "text"}
                                placeholder="Abcdfg123$"
                                {...register2("password")}
                                className="pl-4 pr-10 py-2 border text-neutral-900 border-neutral-200 rounded-md outline-none w-full text-sm transition-all focus:border-b-blue-500 focus:shadow focus:bg-white"
                            />
                            <div
                                onClick={() => setRegPass(!showRegPass)}
                                className="absolute top-2 right-3 text-neutral-500 text-xl cursor-pointer"
                            >
                                {showRegPass ? <PiEyeLight /> : <PiEyeSlashLight />}
                            </div>
                            {errors2["password"] &&
                                <div className="mt-2 px-2 text-red-500 text-xs flex gap-1 items-center">
                                    <PiWarningOctagonLight />
                                    <span className="block flex-1">{errors2["password"].message}</span>
                                </div>
                            }
                        </div>
                        {/* re_password */}
                        <div className="relative">
                            <input
                                type={showRegPass ? "password" : "text"}
                                placeholder="Abcdfg123$"
                                {...register2("re_password")}
                                className="pl-4 pr-10 py-2 border text-neutral-900 border-neutral-200 rounded-md outline-none w-full text-sm transition-all focus:border-b-blue-500 focus:shadow focus:bg-white"
                            />
                            <div
                                onClick={() => setRegPass(!showRegPass)}
                                className="absolute top-2 right-3 text-neutral-500 text-xl cursor-pointer"
                            >
                                {showRegPass ? <PiEyeLight /> : <PiEyeSlashLight />}
                            </div>
                            {errors2["re_password"] &&
                                <div className="mt-2 px-2 text-red-500 text-xs flex gap-1 items-center">
                                    <PiWarningOctagonLight />
                                    <span className="block flex-1">{errors2["re_password"].message}</span>
                                </div>
                            }
                        </div>

                        <div className="relative">
                            <button className="bg-neutral-900 w-full px-6 py-2 text-sm font-medium text-white rounded-md transition-all border border-neutral-900 hover:bg-transparent hover:text-neutral-900 active:scale-95">
                                Регистрация
                            </button>
                        </div>
                    </form>

                    {/* Links */}
                    <div className="mt-4 grid gap-2 text-center">
                        <div
                            onClick={() => setSlideIndex(0)}
                            className="text-blue-500 text-sm cursor-pointer transition-all hover:text-neutral-500 active:scale-95"
                        >
                            Жүйеге кіру
                        </div>
                        <div
                            onClick={() => setSlideIndex(2)}
                            className="text-blue-500 text-sm cursor-pointer transition-all hover:text-neutral-500 active:scale-95"
                        >
                            Парольді қалпына келтіру
                        </div>
                    </div>
                </motion.div>


                {/* Reset password */}
                {/* -------------------------------------------------------------------------------------------------------- */}
                <motion.div
                    animate={{
                        translateX: `-${slideIndex * 100}%`,
                        scale: slideIndex === 2 ? 1 : 0.9,
                    }}
                    className="w-full p-5 bg-white border border-neutral-200 shadow-sm rounded-lg shrink-0"
                >
                    <div>
                        <Image
                            src={"/images/full-logo-white.png"} width={945} height={300} alt="logo"
                            className="w-24 mx-auto"
                        />
                        <h1 className="text-neutral-900 font-semibold text-xl my-5 text-center">Парольді қалпына келтіру</h1>
                    </div>

                    <form className="grid gap-4" onSubmit={handleSubmit3(ResetPassword)}>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                {...register3("email")}
                                className="pl-4 pr-10 py-2 border text-neutral-900 border-neutral-200 rounded-md outline-none w-full text-sm transition-all focus:border-b-blue-500 focus:shadow focus:bg-white"
                                required
                            />
                            <div className="absolute top-3 right-3 text-neutral-500">
                                <TfiEmail />
                            </div>
                        </div>

                        <div className="relative">
                            <button className="bg-neutral-900 w-full px-6 py-2 text-sm font-medium text-white rounded-md transition-all border border-neutral-900 hover:bg-transparent hover:text-neutral-900 active:scale-95">
                                Жіберу
                            </button>
                        </div>
                    </form>

                    {/* Links */}
                    <div className="mt-4 grid gap-2 text-center">
                        <div
                            onClick={() => setSlideIndex(0)}
                            className="text-blue-500 text-sm cursor-pointer transition-all hover:text-neutral-500 active:scale-95"
                        >
                            Жүйеге кіру
                        </div>
                        <div
                            onClick={() => setSlideIndex(1)}
                            className="text-blue-500 text-sm cursor-pointer transition-all hover:text-neutral-500 active:scale-95"
                        >
                            Регистрация
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}


const EditProfileModal = (props) => {
    const { user, editModal, setEditModal } = props;

    return (
        <div className="fixed top-0 left-0 z-10 w-full h-full p-2 flex justify-center items-center bg-white/50 backdrop-blur-3xl">
            <div
                onClick={() => setEditModal(!editModal)}
                className="w-8 h-8 rounded-md text-neutral-500 bg-white absolute top-4 right-4 shadow-sm flex justify-center items-center cursor-pointer transition-all hover:shadow active:scale-95"
            >
                <TfiClose />
            </div>

            <div className="max-w-lg w-full overflow-hidden p-5 bg-white border border-neutral-200 shadow-sm rounded-lg">
                <h1 className="text-neutral-900 font-semibold text-xl my-5 text-center">Профильді өзгерту</h1>

                <form className="grid gap-4">
                    <div className="relative">
                        <div className="flex justify-center mb-4">
                            {user.image ?
                                <div className="rounded-full w-28 h-28 overflow-hidden">
                                    <Image src={user.image} width={520} height={520} alt={user.full_name} />
                                </div>
                                :
                                <div className="text-9xl bg-neutral-900 text-neutral-100 rounded-full">
                                    <PiUserCircleThin />
                                </div>
                            }
                        </div>
                        <input 
                            type="file"
                            className="pl-4 pr-10 py-2 border text-neutral-900 border-neutral-200 rounded-md outline-none w-full text-sm transition-all focus:border-b-blue-500 focus:shadow focus:bg-white"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Толық аты-жөні"
                            className="pl-4 pr-10 py-2 border text-neutral-900 border-neutral-200 rounded-md outline-none w-full text-sm transition-all focus:border-b-blue-500 focus:shadow focus:bg-white"
                            defaultValue={user.full_name}
                        />
                        <div className="absolute top-2 right-3 text-neutral-500 text-xl">
                            <PiUserLight />
                        </div>
                    </div>

                    <div className="relative">
                        <button className="bg-neutral-900 w-full px-6 py-2 text-sm font-medium text-white rounded-md transition-all border border-neutral-900 hover:bg-transparent hover:text-neutral-900 active:scale-95">
                            Жіберу
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfileModal;