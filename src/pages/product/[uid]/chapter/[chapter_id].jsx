import React, { useState } from "react";
import { useRouter } from "next/router";
import ChapterContent from "@/src/components/pages/product/chapter/content";
import ChapterSidebar from "@/src/components/pages/product/chapter/sidebar";
import ProductLayout from "@/src/layouts/product";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useSelector } from "react-redux";
import ConfirmModal from "@/src/components/pages/product/chapter/confirm";


const Chapter = ({ product, user_chapter, user_chapters, user_lessons, videos, tasks, quizzes }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const router = useRouter();
    const [confirm, setConfirm] = useState(true);

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
                    {confirm &&
                        <ConfirmModal confirm={confirm} setConfirm={setConfirm} />
                    }
                    
                    {/* Sidebar */}
                    <ChapterSidebar
                        product={product}
                        user_chapters={user_chapters} 
                    />

                    {/* Content */}
                    <ChapterContent
                        user_chapter={user_chapter}
                        user_lessons={user_lessons}
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
    const product = data.product || null
    const user_chapter = data.user_chapter || null;
    const user_chapters = data.user_chapters || [];
    const user_lessons = data.user_lessons || [];
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
            user_chapter,
            user_chapters,
            user_lessons,
            videos,
            tasks,
            quizzes,
            
            user_type
        }
    }
}


export default Chapter;