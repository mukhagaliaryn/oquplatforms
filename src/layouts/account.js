import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";


const AccountLayout = (props) => {
    
    return (
        <React.Fragment>
            <Head>
                <title>{props.title}</title>
                <meta content={props.content} />
            </Head>
            <Script id="storage">
                {``}
            </Script>
            <div id="root" className="h-screen flex flex-col overflow-y-auto">
                <div id="main-wrapper" className="flex-1">
                    <div className="w-full py-5 border-b text-center">
                        <Link href={"/"} 
                            className="inline-block text-orange-400 font-poppins font-bold text-6xl"
                        >
                            OQU
                        </Link>
                    </div>

                    <div id="page-props" className="container mx-auto px-5">
                        {props.children}
                    </div>
                </div>

                <Footer />
            </div>
        </React.Fragment>
    )
}

AccountLayout.defaultProps = {
    title: "OQU platforms",
    content: "OQU platforms - онлайн білім беру микросервистері"
}

export default AccountLayout;