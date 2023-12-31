import QuizComponent from "@/src/components/pages/product/lesson/quiz";
import LessonSidebar from "@/src/components/pages/product/lesson/sidebar";
import ProductLayout from "@/src/layouts/product";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";


const QuizLesson = (data) => {
    const {
        chapter,
        user_lesson,
        user_quiz_data,
        user_answers,
        user_videos,
        user_tasks,
        user_quizzes,
        access
    } = data;
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


    if (typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }

    return (
        <ProductLayout
            title={user_quiz_data && user_quiz_data.quiz.title}
        >
            {(isAuthenticated && user_quiz_data) &&
                <div className="container mx-auto px-5 flex items-start mb-10">
                    {/* Sidebar */}
                    <LessonSidebar
                        chapter={chapter}
                        user_lesson={user_lesson}
                        user_videos={user_videos}
                        user_tasks={user_tasks}
                        user_quizzes={user_quizzes}
                        access={access}
                    />

                    {/* Content */}
                    <QuizComponent
                        user_quiz_data={user_quiz_data}
                        user_answers={user_answers}
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
    const res = await fetch(`${BACKEND_URL}/product/${context.params.uid}/chapter/${context.params.chapter_id}/lesson/${context.params.lesson_id}/quiz/${context.params.quiz_id}`, context.req.cookies.access && config)
    const data = await res.json();

    const user_type = data.user_type || null
    const chapter = data.chapter || null;
    const user_lesson = data.user_lesson || null;
    const user_quiz_data = data.user_quiz_data || null;
    const user_answers = data.user_answers || [];

    const user_videos = data.user_videos || [];
    const user_tasks = data.user_tasks || [];
    const user_quizzes = data.user_quizzes || [];
    const access = context.req.cookies.access || ""

    if (user_type === "TEACHER" || user_type === "MANAGER") {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            chapter,
            user_lesson,
            user_quiz_data,
            user_answers,

            user_videos,
            user_tasks,
            user_quizzes,
            access
        }
    }
}


export default QuizLesson;