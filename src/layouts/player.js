import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { check_auth_status } from "../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { PlayerHeader } from "../components/Header";
import { AuthModal } from "../components/Modals";


const PlayerLayout = (props) => {
    const router = useRouter();
    const user = useSelector(state => state.auth.user);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();


    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(check_auth_status());

    }, [dispatch]);

    return (
        <React.Fragment>
            <Head>
                <title>{props.title}</title>
                <meta content={props.content} />
            </Head>
            <Script id="storage">
                {`
                    localStorage.setItem("currentPage", "${router.asPath}");
                `}
            </Script>
            <div id="root" className="h-screen">
                <PlayerHeader 
                    user={user}
                />

                {isAuthenticated ?
                    <div id="wrapper" className="flex">
                        {props.children}
                    </div>
                    :
                    <AuthModal closeLink={true} />
                }
            </div>
        </React.Fragment>
    )
}

PlayerLayout.defaultProps = {
    title: "OQU platforms",
    content: "OQU platforms - онлайн білім беру микросервистері"
}

export default PlayerLayout;