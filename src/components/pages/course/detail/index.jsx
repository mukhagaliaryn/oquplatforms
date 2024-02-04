import React from "react";
import CourseView from "./View";
import CourseDescription from "./Description";



const CourseDetail = (props) => {
    const { course, purposes, chapters, lessons } = props;

    return (
        <div className="flex items-start gap-2 flex-col lg:flex-row">
            {/* Course view */}
            <CourseView course={course} />

            {/* Course description */}
            <CourseDescription 
                course={course} 
                purposes={purposes}
                chapters={chapters}
                lessons={lessons}
            />
        </div>
    )
}

export default CourseDetail;