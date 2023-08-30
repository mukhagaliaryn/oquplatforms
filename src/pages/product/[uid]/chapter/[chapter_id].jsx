import React from "react";
import { useRouter } from "next/router";
import ChapterContent from "@/src/components/pages/product/chapter/content";
import ChapterSidebar from "@/src/components/pages/product/chapter/sidebar";
import ProductLayout from "@/src/layouts/product";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useSelector } from "react-redux";


const Chapter = ({ product, chapter, chapters, lessons, videos, tasks, quizzes }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const router = useRouter();

    if (typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }

    return (
        <ProductLayout
            title={chapter && chapter.chapter_name}
            content={chapter && chapter.about}
        >
            {(isAuthenticated && chapter) &&
                <div className="container mx-auto px-5 flex items-start">
                    {/* Sidebar */}
                    <ChapterSidebar 
                        product={product}
                        chapters={chapters} 
                    />

                    {/* Content */}
                    <ChapterContent
                        product={product}
                        chapter={chapter}
                        lessons={lessons}
                        videos={videos}
                        tasks={tasks}
                        quizzes={quizzes}
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
    const res = await fetch(`${BACKEND_URL}/products/product/${context.params.uid}/chapter/${context.params.chapter_id}/`, context.req.cookies.access && config)
    const data = await res.json();

    const user_type = data.user_type || null
    const product = data.product || null;
    const chapter = data.chapter || null;
    const chapters = data.chapters || [];
    const lessons = data.lessons || [];
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
            product,
            chapter,
            chapters,
            lessons,
            videos,
            tasks,
            quizzes,
            user_type
        }
    }
}


export default Chapter;