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
            router.push("/accounts/login")
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
            <div className="max-w-sm mx-auto my-10 text-center">
                <h1 className="text-3xl font-bold mb-5">Хабарлама жіберілді!</h1>
                <span className="text-neutral-600">
                    Енгізілген электронды поштаға парольді қалпына келтіру бойынша хабарлама жіберілді
                </span>
            </div>
        </AccountLayout>
    )
}

export default PasswordRest;