import CourseDetail from "@/src/components/pages/course/detail";
import MainLayout from "@/src/layouts/main";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useRouter } from "next/router";
import React from "react";


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

    return {
        props: {
            course,
            purposes
        }
    }
}


const Course = (data) => {
    const { course, purposes } = data; 
    const router = useRouter();

    
    return (
        <MainLayout
            title={`${course.name} - OQU platforms`}
            content={course.about}
        >
            {/* Detail */}
            <CourseDetail 
                course={course}
                purposes={purposes}
            />
        </MainLayout>
    )
}


export default Course;