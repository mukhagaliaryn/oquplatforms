import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { check_auth_status } from "../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footbar from "../components/Footbar";


const MainLayout = (props) => {
    const router = useRouter();
    const user = useSelector(state => state.auth.user)
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
                <Header 
                    isAuthenticated={isAuthenticated}
                    user={user}
                />

                <div id="wrapper" className="flex flex-col sm:flex-row">
                    <Sidebar />

                    <div className="flex-1 pb-24 sm:pb-0 overflow-auto border border-neutral-200 sm:rounded-tl-lg bg-neutral-100">
                        <div className="max-w-[1920px] mx-auto p-2">
                            {props.children}
                        </div>
                    </div>
                </div>

                <Footbar />
            </div>
        </React.Fragment>
    )
}

MainLayout.defaultProps = {
    title: "OQU platforms",
    content: "OQU platforms - онлайн білім беру платформасы"
}

export default MainLayout;