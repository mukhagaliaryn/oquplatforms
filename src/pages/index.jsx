import React from "react";
import MainLayout from "../layouts/main";
import LandingComponent from "../components/pages/main";
import { useSelector } from "react-redux";


const Main = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <MainLayout>
            {isAuthenticated ?
                <div>
                    <h1>You are in platforms</h1>
                    <div className="h-48 w-full bg-orange-100 my-5 rounded-xl"></div>
                    <div className="h-48 w-full bg-orange-100 my-5 rounded-xl"></div>
                    <div className="h-48 w-full bg-orange-100 my-5 rounded-xl"></div>
                    <div className="h-48 w-full bg-orange-100 my-5 rounded-xl"></div>
                    <div className="h-48 w-full bg-orange-100 my-5 rounded-xl"></div>
                </div>
            :
                <LandingComponent />
            }
        </MainLayout>
    )
}


export default Main;