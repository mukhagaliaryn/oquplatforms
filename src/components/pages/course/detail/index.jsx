import React, { useState } from "react";
import CourseView from "./View";
import CourseDescription from "./Description";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setAlert } from "@/src/redux/actions/alert";
import { BACKEND_URL } from "@/src/redux/actions/types";


const CourseDetail = (props) => {
    const { 
        isAuthenticated, 
        course,
        chapters_count,
        lessons_count,
        all_lesson_duration_sum,
        purposes, 
        chapters, 
        lessons,
        open_video,
        rating, 
        first_url, 
        user_course__course_id, 
        course_following_users,
        access 
    } = props;

    const router = useRouter();
    const [authModal, setAuthModal] = useState(false);
    const [shareModal, setShareModal] = useState(false);
    const dispatch = useDispatch();


    const handlePostCourse = async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/course/${course.id}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
            })

            if (response.status == 201) {
                dispatch(setAlert("Курсты бастай беруге болады!", "success"));
                location.href = router.asPath;
            } else {
                dispatch(setAlert("Бір жерден қателік кетті!", "error"));
            }

        } catch (e) {
            console.log(e);
            dispatch(setAlert("Бір жерден қателік кетті!", "error"));
        }
    }


    const handlePutCourse = async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/course/${course.id}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
            })

            if (response.status == 201) {
                dispatch(setAlert("Жаңа өзгерістер...", "success"));
                router.push(`/course/${first_url.user_course_id}/player/chapter/${first_url.user_chapter_id}/lesson/${first_url.user_lesson_id}`)
            } else {
                dispatch(setAlert("Бір жерден қателік кетті!", "error"));
            }

        } catch (e) {
            console.log(e);
            dispatch(setAlert("Бір жерден қателік кетті!", "error"));
        }
    }


    return (
        <div className="flex items-start gap-2 flex-col lg:flex-row">
            {/* Course view */}
            <CourseView 
                course={course}
                user_course__course_id={user_course__course_id}
                course_following_users={course_following_users}
                chapters_count={chapters_count}
                lessons_count={lessons_count}
                all_lesson_duration_sum={all_lesson_duration_sum}

                isAuthenticated={isAuthenticated}
                handlePostCourse={handlePostCourse}
                handlePutCourse={handlePutCourse}
                authModal={authModal}
                setAuthModal={setAuthModal}
                shareModal={shareModal}
                setShareModal={setShareModal}
            />

            {/* Course description */}
            <CourseDescription
                course={course} 
                purposes={purposes}
                chapters={chapters}
                lessons={lessons}
                open_video={open_video}
                rating={rating}

                isAuthenticated={isAuthenticated}
                authModal={authModal}
                setAuthModal={setAuthModal}
            />
        </div>
    )
}

export default CourseDetail;