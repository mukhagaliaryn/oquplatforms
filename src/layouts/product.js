import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import Footer from "../components/Footer";
import { check_auth_status } from "../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";


const ProductLayout = (props) => {
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

            <div id="root" className="min-h-screen flex flex-col">
                <div className="flex-1">
                    <Header
                        isAuthenticated={isAuthenticated}
                        user={user}
                    />
                    <div id="page-props" className="flex-1">
                        {props.children}
                    </div>
                </div>
                
                <Footer />
            </div>
        </React.Fragment>
    )
}

ProductLayout.defaultProps = {
    title: "OQU platforms",
    content: "OQU platforms - онлайн білім беру микросервистері"
}

export default ProductLayout;