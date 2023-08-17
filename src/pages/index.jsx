import React from "react";
import MainLayout from "../layouts/main";
import LandingComponent from "../components/pages/main";
import { useSelector } from "react-redux";
import MainComponent from "../components/pages/platforms/students";



const Main = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <MainLayout
            title={'Басты бет - OQU platforms'}
        >
            {isAuthenticated ?
                <MainComponent />
                :
                <LandingComponent />
            }
        </MainLayout>
    )
}


export default Main;