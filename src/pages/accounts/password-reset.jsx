import AccountLayout from "@/src/layouts/account";
import { check_auth_status, passwordReset } from "@/src/redux/actions/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";


const PasswordRest = () => {
    const router = useRouter()
    const loading = useSelector(state => state.auth.loading);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(passwordReset(data.email));
            router.push("/accounts/sended")
        }
    };

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(check_auth_status());

    }, [dispatch]);


    if (typeof window !== "undefined" && isAuthenticated)
        router.push(localStorage.getItem("currentPage") || "/");


    return (
        <AccountLayout
            title={"Парольді қалпына келтіру"}
        >
            <div className="max-w-sm mx-auto my-10">
                <h1 className="text-3xl font-bold text-center">Парольді қалпына келтіру</h1>

                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>

                    <div className="py-2 w-full">
                        <label htmlFor="" className="block font-bold text-neutral-600 mb-2">
                            Электронды пошта
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            placeholder="nurbekomar@gmail.com"
                            className="block w-full border rounded-lg py-2 px-4 text-neutral-600 transition-all focus:shadow-sm focus:bg-neutral-100 outline-none"
                            required
                        />
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

export default PasswordRest;