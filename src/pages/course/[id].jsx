import CourseDetail from "@/src/components/pages/course/detail";
import MainLayout from "@/src/layouts/main";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";


export async function getServerSideProps(context) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${context.req.cookies.access}`
        }
    }
    const res = await fetch(`${BACKEND_URL}/course/${context.params.id}/`, context.req.cookies.access && config)
    const data = await res.json();
    const course = data.course;
    const purposes = data.purposes;
    const chapters = data.chapters;
    const lessons = data.lessons;
    const rating = data.rating;
    const first_url = data.first_url || null;
    const user_course__course_id = data.user_course__course_id || null
    const course_following_users = data.course_following_users;

    return {
        props: {
            course,
            purposes,
            chapters,
            lessons,
            rating,
            first_url,
            user_course__course_id,
            course_following_users,
            access: context.req.cookies.access || null
        }
    }
}


const Course = (data) => {
    const { 
        course, 
        purposes, 
        lessons, 
        chapters, 
        rating, 
        first_url, 
        user_course__course_id, 
        course_following_users,
        access 
    } = data; 
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <MainLayout
            title={`${course.name} - OQU platforms`}
            content={course.about}
        >
            {/* Detail */}
            <CourseDetail 
                isAuthenticated={isAuthenticated}
                course={course}
                purposes={purposes}
                chapters={chapters}
                lessons={lessons}
                rating={rating}
                first_url={first_url}
                user_course__course_id={user_course__course_id}
                course_following_users={course_following_users}
                access={access}
            />
        </MainLayout>
    )
}


export default Course;