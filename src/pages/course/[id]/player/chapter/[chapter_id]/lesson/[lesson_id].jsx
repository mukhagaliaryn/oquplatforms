import LessonsList from "@/src/components/pages/course/player/LessonsList";
import Player from "@/src/components/pages/course/player/Player";
import PlayerLayout from "@/src/layouts/player";
import { BACKEND_URL } from "@/src/redux/actions/types";
import React from "react";


export async function getServerSideProps(context) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${context.req.cookies.access}`
        }
    }
    const id = context.params.id;
    const chapter_id = context.params.chapter_id;
    const lesson_id = context.params.lesson_id;

    const res = await fetch(`${BACKEND_URL}/course/${id}/chapter/${chapter_id}/lesson/${lesson_id}/`, context.req.cookies.access && config)
    const data = await res.json();

    const video = data.video;
    const user_course = data.user_course;
    const user_chapters = data.user_chapters;
    const user_lessons = data.user_lessons;


    return {
        props: {
            video,
            user_course,
            user_chapters,
            user_lessons
        }
    }
}


const CoursePlayer = (data) => {
    const { video, user_course, user_chapters, user_lessons } = data;

    return (
        <PlayerLayout
            title={`${lesson.title} - OQU player`}
            content={course.about}
        >   
            {/* Lesson content */}
            <Player video={video} />
            
            {/* Lessons list */}
            <LessonsList course={course} chapters={chapters} lessons={lessons} />
        </PlayerLayout>
    )
}

export default CoursePlayer;