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

    const video = data.video || null
    const user_course = data.user_course || null; 
    const user_chapters = data.user_chapters || [];
    const user_lessons = data.user_lessons || [];


    return {
        props: {
            video,
            user_course,
            user_chapters,
            user_lessons,
            access: context.req.cookies.access || null
        }
    }
}


const CoursePlayer = (data) => {
    const { video, user_course, user_chapters, user_lessons, access } = data;

    return (
        <PlayerLayout
            title={video ? `${video.lesson.title} - OQU player`: "OQU player"}
            content={user_course && user_course.course.about}
        >
            {/* Lesson content */}
            {video && <Player video={video} user_course={user_course} />}

            {/* Lessons list */}
            <LessonsList user_course={user_course} user_chapters={user_chapters} user_lessons={user_lessons} />
        </PlayerLayout>
    )
}

export default CoursePlayer;


