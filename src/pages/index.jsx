import React from "react";
import MainLayout from "../layouts/main";
import { useSelector } from "react-redux";
import { BACKEND_URL } from "../redux/actions/types";
import MainComponent from "../components/pages/platforms/main/user";
import MainAnonymousUserComponent from "../components/pages/platforms/main/anonymous";
import { useRouter } from "next/router";


const Main = (data) => {
    const { class_group, user_products, official_student } = data;
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);

    if (typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }

    return (
        <MainLayout
            title={'Басты бет - OQU platforms'}
            content={'Басты бет - OQU platforms'}
        >
            {(isAuthenticated && user) &&
                <React.Fragment>
                    {user.user_type === "STUDENT" ?
                        <MainComponent
                            user={user}
                            class_group={class_group}
                            user_products={user_products}
                            official_student={official_student}
                        />
                        :
                        <MainAnonymousUserComponent />
                    }
                </React.Fragment>
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
    const user_products = data.user_products || []
    const official_student = data.official_student || null

    return {
        props: {
            class_group,
            user_products,
            official_student
        }
    }
}

export default Main;