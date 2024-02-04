import React from "react";
import DescriptionSection from "./_description";
import RatingSection from "./_rating";
import PurposeSection from "./_purpose";
import ChapterSection from "./_chapter";
import AddictionSection from "./_addiction";


const CourseDescription = (props) => {
    const { course, purposes, chapters, lessons } = props;

    return (

        <div className="w-full lg:flex-1">
            {/* Description */}
            <DescriptionSection course={course} />

            {/* Rating */}
            <RatingSection course={course} />

            {/* Purpose */}
            <PurposeSection purposes={purposes} />

            {/* Chapters */}
            <ChapterSection chapters={chapters} lessons={lessons} />

            {/* Addiction */}
            <AddictionSection course={course} />
        </div>
    )
}

export default CourseDescription;