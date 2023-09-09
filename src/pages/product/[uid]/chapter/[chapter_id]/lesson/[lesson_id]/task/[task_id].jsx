import LessonSidebar from "@/src/components/pages/product/lesson/sidebar";
import TaskComponent from "@/src/components/pages/product/lesson/task";
import ProductLayout from "@/src/layouts/product";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";


const TaskLesson = ({ videos, tasks, quizzes, user_task, chapter, access }) => {
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


    if (typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }

    return (
        <ProductLayout
            title={user_task && user_task.task.title}
        >
            {(isAuthenticated && user_task) &&
                <div className="container mx-auto px-5 flex items-start mb-10">
                    {/* Sidebar */}
                    <LessonSidebar 
                        videos={videos}
                        tasks={tasks}
                        quizzes={quizzes}
                        chapter={chapter}
                    />

                    {/* Content */}
                    <TaskComponent user_task={user_task} access={access} />
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
    const res = await fetch(`${BACKEND_URL}/products/product/${context.params.uid}/chapter/${context.params.chapter_id}/lesson/${context.params.lesson_id}/task/${context.params.task_id}`, context.req.cookies.access && config)
    const data = await res.json();

    const user_type = data.user_type || null
    const chapter = data.chapter || null;
    const user_task = data.user_task || null;

    const videos = data.videos || [];
    const tasks = data.tasks || [];
    const quizzes = data.quizzes || [];
    const access = context.req.cookies.access || ""

    if (user_type === "TEACHER" || user_type === "MANAGER") {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            chapter,
            user_task,
            videos,
            tasks,
            quizzes,
            user_type,
            access
        }
    }
}


export default TaskLesson;