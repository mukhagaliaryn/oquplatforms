import React from "react";
import { useRouter } from "next/router";
import ChapterContent from "@/src/components/pages/product/chapter/content";
import ChapterSidebar from "@/src/components/pages/product/chapter/sidebar";
import ProductLayout from "@/src/layouts/product";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useSelector } from "react-redux";


const Chapter = (props) => {
    const { 
        user_product, 
        user_chapter, 
        user_chapters, 
        user_lessons, 
        user_videos, 
        user_tasks, 
        user_quizzes,
        access 
    } = props;
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const router = useRouter();

    if (typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }

    return (
        <ProductLayout
            title={user_chapter && user_chapter.chapter.chapter_name}
            content={user_chapter && user_chapter.chapter.about}
        >
            {(isAuthenticated && user_chapter) &&
                <div className="container mx-auto px-5 flex items-start">
                    {/* Sidebar */}
                    <ChapterSidebar
                        user_product={user_product}
                        user_chapters={user_chapters}
                    />

                    {/* Content */}
                    <ChapterContent
                        product={user_product.product}
                        user_chapter={user_chapter}
                        user_lessons={user_lessons}
                        user_videos={user_videos}
                        user_tasks={user_tasks}
                        user_quizzes={user_quizzes}
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
    const res = await fetch(`${BACKEND_URL}/product/${context.params.uid}/chapter/${context.params.chapter_id}/`, context.req.cookies.access && config)
    const data = await res.json();

    const user_type = data.user_type || null
    const user_product = data.user_product || null
    const user_chapter = data.user_chapter || null;
    const user_chapters = data.user_chapters || [];
    const user_lessons = data.user_lessons || [];
    const user_videos = data.user_videos || [];
    const user_tasks = data.user_tasks || [];
    const user_quizzes = data.user_quizzes || [];
    const access = context.req.cookies.access || "";


    if (user_type === "TEACHER" || user_type === "MANAGER") {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            user_product,
            user_chapter,
            user_chapters,
            user_lessons,
            user_videos,
            user_tasks,
            user_quizzes,

            access,
            user_type
        }
    }
}


export default Chapter;