import React from "react";
import DescriptionSection from "./_description";
import RatingSection from "./_rating";
import PurposeSection from "./_purpose";
import ChapterSection from "./_chapter";


const CourseDescription = (props) => {
    const { course, purposes } = props;

    return (

        <div className="w-full lg:flex-1">
            {/* Description */}
            <DescriptionSection course={course} />

            {/* Rating */}
            <RatingSection course={course} />

            {/* Purpose */}
            <PurposeSection purposes={purposes} />

            {/* Purpose */}
            <ChapterSection purposes={purposes} />
        </div>
    )
}

export default CourseDescription;