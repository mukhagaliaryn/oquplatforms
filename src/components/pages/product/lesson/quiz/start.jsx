import { BACKEND_URL } from "@/src/redux/actions/types";
import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setAlert } from "@/src/redux/actions/alert";
import parse from 'html-react-parser';


const QuizStartComponent = (props) => {
    const { user_quiz_data, access } = props;
    const router = useRouter();
    const dispatch = useDispatch();


    const handleStartQuiz = async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/quiz/${router.query.quiz_id}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
            });

            if (response.status == 200) {
                router.push(router.asPath);
                dispatch(setAlert("Тест басталды!", "success"));
            } else {
                dispatch(setAlert("Бір жерден қателік кетті!", "error"));
            }
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <div className="my-5">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">{user_quiz_data.quiz.title}</h1>
                <span className="text-sm text-neutral-600">{user_quiz_data.quiz.duration} мин</span>
            </div>
            <div className="py-5 border-b">
                <span className="text-neutral-600">
                    {parse(user_quiz_data.quiz.body)}
                </span>
            </div>

            <div className="pt-5">
                <button
                    onClick={() => handleStartQuiz()}
                    className="px-4 py-2 border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70"
                >
                    Тестті бастау
                </button>
            </div>
        </div>
    )
}

export default QuizStartComponent;