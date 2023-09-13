import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import Footer from "../components/Footer";
import { check_auth_status } from "../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import { Inter_Tight, Poppins } from 'next/font/google'


const inter = Inter_Tight({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: '--font-inter',
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: '--font-poppins',
})


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

            <div id="root" className={`${inter.variable} font-inter min-h-screen flex flex-col`}>
                <div id="main-wrapper" className="flex-1">
                    <Header
                        isAuthenticated={isAuthenticated}
                        user={user}
                        poppins={poppins}
                    />
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