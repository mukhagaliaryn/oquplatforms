import LessonSidebar from "@/src/components/pages/product/lesson/sidebar";
import VideoComponent from "@/src/components/pages/product/lesson/video";
import ProductLayout from "@/src/layouts/product";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";


const VideoLesson = ({ videos, tasks, quizzes, video, chapter }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const router = useRouter();


    if (typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }

    return (
        <ProductLayout
            title={video && video.title}
            content={video && video.description}
        >
            {(isAuthenticated && video) &&
                <div className="container mx-auto px-5 flex items-start mb-10">
                    
                    {/* Sidebar */}
                    <LessonSidebar 
                        videos={videos}
                        tasks={tasks}
                        quizzes={quizzes}
                        chapter={chapter}
                    />

                    {/* Content */}
                    <VideoComponent video={video} />
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

    const user_type = data.user_type || null
    const chapter = data.chapter || null;
    const video = data.video || null;

    const videos = data.videos || [];
    const tasks = data.tasks || [];
    const quizzes = data.quizzes || [];


    if (user_type === "TEACHER" || user_type === "MANAGER") {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            chapter,
            video,
            videos,
            tasks,
            quizzes,
            user_type
        }
    }
}


export default VideoLesson;