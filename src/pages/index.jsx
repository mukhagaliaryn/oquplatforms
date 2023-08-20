import React from "react";
import MainLayout from "../layouts/main";
import LandingComponent from "../components/pages/main";
import { useSelector } from "react-redux";
import MainComponent from "../components/pages/platforms/students";
import { BACKEND_URL } from "../redux/actions/types";
import MainTeacherComponent from "../components/pages/platforms/teachers";
import MainManagerComponent from "../components/pages/platforms/managers";
import MainUserComponent from "../components/pages/platforms/user";


const Main = ({class_group, official_student}) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user)

    return (
        <MainLayout
            title={'Басты бет - OQU platforms'}
        >
            {(isAuthenticated && user) ?
                <React.Fragment>
                    {user.user_type === "STUDENT" ?
                        <MainComponent 
                            user={user}
                            class_group={class_group}
                            official_student={official_student}
                        />
                    : user.user_type === "TEACHER" ?
                        <MainTeacherComponent />
                    : user.user_type === "MANAGER" ?
                        <MainManagerComponent />
                    :
                        <MainUserComponent />
                    }
                </React.Fragment>
            :
                <LandingComponent />
            }
        </MainLayout>
    )
}

export async function getServerSideProps(context) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${context.req.cookies.access}`
        }
    }
    const res = await fetch(`${BACKEND_URL}/`, context.req.cookies.access && config)
    const data = await res.json();

    const class_group = data.class_group || null
    const official_student = data.official_student || null

    return {
        props: {
            class_group,
            official_student
        }
    }
}

export default Main;