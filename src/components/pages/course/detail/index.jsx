import React from "react";
import CourseView from "./View";
import CourseDescription from "./Description";



const CourseDetail = (props) => {
    const { 
        isAuthenticated, 
        course, 
        purposes, 
        chapters, 
        lessons, 
        rating, 
        first_url, 
        user_course__course_id, 
        course_following_users,
        access 
    } = props;

    return (
        <div className="flex items-start gap-2 flex-col lg:flex-row">
            {/* Course view */}
            <CourseView 
                isAuthenticated={isAuthenticated}
                course={course} 
                first_url={first_url}
                user_course__course_id={user_course__course_id}
                course_following_users={course_following_users}
                access={access}
            />

            {/* Course description */}
            <CourseDescription
                course={course} 
                purposes={purposes}
                chapters={chapters}
                lessons={lessons}
                rating={rating}
            />
        </div>
    )
}

export default CourseDetail;