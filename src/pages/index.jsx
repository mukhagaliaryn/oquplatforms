import React from "react";
import MainLayout from "../layouts/main";
import { BACKEND_URL } from "../redux/actions/types";

import Headliner from "../components/pages/main/Headliner";
import CoursesList from "../components/pages/main/CoursesList";
import AuthorsList from "../components/pages/main/AuthorsList";
import PopularTopics from "../components/pages/main/Topics";


export async function getServerSideProps(context) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${context.req.cookies.access}`
        }
    }
    const res = await fetch(`${BACKEND_URL}/`, context.req.cookies.access && config)
    const data = await res.json();

    const headliners = data.headliners || [];
    const last_courses = data.last_courses || [];
    const authors = data.authors || [];
    const popular_topics = data.popular_topics || [];

    return {
        props: {
            headliners,
            last_courses, 
            authors,
            popular_topics
        }
    }
}


const Main = (data) => {
    const { headliners, last_courses, authors, popular_topics } = data;

    return (
        <MainLayout
            title={"Басты бет - OQU platforms"}
            content={"Басты бет парақшасы - OQU platforms"}
        >
            {/* Headliner */}
            {headliners.length > 0 && <Headliner headliners={headliners} />}

            {/* last courses */}
            {last_courses.length > 0 && <CoursesList last_courses={last_courses} />}

            {/* last courses */}
            {authors.length > 0 && <AuthorsList authors={authors} />}

            {/* popular topics */}
            {popular_topics.length > 0 && <PopularTopics popular_topics={popular_topics} />}

            <div className="mt-8"></div>
        </MainLayout>
    )
}


export default Main;