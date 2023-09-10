import React from "react";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useRouter } from "next/router";
import { setAlert } from "@/src/redux/actions/alert";
import { useDispatch } from "react-redux";
import QuizStartComponent from "./start";
import QuizProgressComponent from "./quiz";
import QuizResultComponent from "./result";


const QuizComponent = ({ user_quiz_data, access }) => {
    const router = useRouter();
    const dispatch = useDispatch();


    const ChoiceAnswer = async (id, q_id, a_id) => {
        try {
            const response = await fetch(`${BACKEND_URL}/answer/${id}/${q_id}/${a_id}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
            });

            router.push(router.asPath);
        } catch {
            console.log('Error!');
        }
    }


    const onSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch(`${BACKEND_URL}/products/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/quiz/${router.query.quiz_id}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
            });

            if (response.status == 200) {
                router.push(router.asPath);
                dispatch(setAlert("Тест аяқталды!", "success"));
            } else {
                dispatch(setAlert("Бір жерден қателік кетті!", "error"));
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="shadow flex-1 mt-5 rounded-xl ml-2 px-5">
            {user_quiz_data.status === "START" ?
                <QuizStartComponent 
                    user_quiz_data={user_quiz_data} 
                />
            : user_quiz_data.status === "PROGRESS" ?
                <QuizProgressComponent 
                    user_quiz_data={user_quiz_data}
                    onSubmit={onSubmit}
                    ChoiceAnswer={ChoiceAnswer}
                />
            :
                <QuizResultComponent />
            }
        </div>
    )
}

export default QuizComponent;