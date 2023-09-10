import LessonSidebar from "@/src/components/pages/product/lesson/sidebar";
import VideoComponent from "@/src/components/pages/product/lesson/video";
import ProductLayout from "@/src/layouts/product";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";


const VideoLesson = ({ user_video, user_lesson, tasks, quizzes, videos, chapter, access }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const router = useRouter();


    if (typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }

    return (
        <ProductLayout
            title={user_video && user_video.video.title}
            content={user_video && user_video.video.description}
        >
            {(isAuthenticated && user_video) &&
                <div className="container mx-auto px-5 flex items-start mb-10">
                    
                    {/* Sidebar */}
                    <LessonSidebar
                        user_lesson={user_lesson}
                        videos={videos}
                        tasks={tasks}
                        quizzes={quizzes}
                        chapter={chapter}
                        access={access}
                    />

                    {/* Content */}
                    <VideoComponent 
                        user_video={user_video} 
                        access={access} 
                    />
                </div>
            }
        </ProductLayout>

    )
}


export async function getServerSideProps(context) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${context.req.cookies.access}`
        }
    }
    const res = await fetch(`${BACKEND_URL}/products/product/${context.params.uid}/chapter/${context.params.chapter_id}/lesson/${context.params.lesson_id}/video/${context.params.video_id}`, context.req.cookies.access && config)
    const data = await res.json();

    const user_type = data.user_type || null;
    const chapter = data.chapter || null;
    const user_lesson = data.user_lesson || null;
    const user_video = data.user_video || null;

    const videos = data.videos || [];
    const tasks = data.tasks || [];
    const quizzes = data.quizzes || [];
    const access = context.req.cookies.access || "";

    if (user_type === "TEACHER" || user_type === "MANAGER") {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            chapter,
            user_lesson,
            user_video,
            videos,
            tasks,
            quizzes,
            user_type,
            access
        }
    }
}


export default VideoLesson;