import React from "react";
import DescriptionSection from "./_description";
import RatingSection from "./_rating";
import PurposeSection from "./_purpose";
import ChapterSection from "./_chapter";
import AddictionSection from "./_addiction";
import OverviewSection from "./_overview";


const CourseDescription = (props) => {
    const { 
        course, 
        purposes, 
        chapters, 
        lessons, 
        open_video, 
        rating,
        isAuthenticated, 
        setAuthModal, 
        authModal } = props;

    return (

        <div className="w-full lg:flex-1">
            {/* Overview */}
            <OverviewSection 
                open_video={open_video}
                isAuthenticated={isAuthenticated}
                authModal={authModal}
                setAuthModal={setAuthModal}
            /> 

            {/* Description */}
            <DescriptionSection course={course} />

            {/* Rating */}
            <RatingSection course={course} rating={rating} />

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