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
    
    const headliners = data.headliners;
    const last_courses = data.last_courses;
    const authors = data.authors;
    const popular_topics = data.popular_topics;

    // const headliners = [];
    // const last_courses = [];
    // const authors = [];
    // const popular_topics = [];

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
            <Headliner headliners={headliners} />

            {/* last courses */}
            <CoursesList last_courses={last_courses} />

            {/* last courses */}
            <AuthorsList authors={authors} />

            {/* popular topics */}
            <PopularTopics popular_topics={popular_topics} />

            <div className="mt-8"></div>
        </MainLayout>
    )
}


export default Main;