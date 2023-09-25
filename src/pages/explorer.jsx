import React from "react";
import MainLayout from "../layouts/main";
import { useSelector } from "react-redux";
import { BACKEND_URL } from "../redux/actions/types";
import { useRouter } from "next/router";
import ExlorerComponent from "../components/pages/platforms/explorer";
import MainUserComponent from "../components/pages/platforms/main/user";


const Exlorer = ({ categories, topics }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const router = useRouter();
    const user = useSelector(state => state.auth.user)


    if (typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }

    return (
        <MainLayout
            title={'Қосымшалар - OQU platforms'}
        >
            {(isAuthenticated && user) &&
                <React.Fragment>
                    {user.user_type === "STUDENT" ?
                        <ExlorerComponent
                            categories={categories}
                            topics={topics}
                        />
                    :
                        <MainUserComponent />
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
    const res = await fetch(`${BACKEND_URL}/explorer/`, context.req.cookies.access && config)
    const data = await res.json();
    const categories = data.categories || []
    const topics = data.topics || []
    const user_type = data.user_type || null

    if (user_type === "TEACHER" || user_type === "MANAGER") {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            categories,
            topics
        }
    }
}


export default Exlorer;