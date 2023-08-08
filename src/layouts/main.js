import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { check_auth_status } from "../redux/actions/auth";
import { useDispatch } from "react-redux";


const MainLayout = (props) => {
    const router = useRouter();
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
            <div id="root" className="min-h-screen flex flex-col">
                <div id="main-wrapper" className="flex-1">
                    <Header />

                    <div id="page-props">
                        {props.children}
                    </div>
                </div>

                <Footer />
            </div>
        </React.Fragment>
    )
}

MainLayout.defaultProps = {
    title: "OQU platforms",
    content: "OQU platforms - онлайн білім беру микросервистері"
}

export default MainLayout;