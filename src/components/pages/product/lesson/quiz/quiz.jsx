import React from "react";
import { setAlert } from "@/src/redux/actions/alert";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";


const QuizProgressComponent = ({ user_quiz_data, user_answers, access }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const ChoiceAnswer = async (user_quiz_id, question_id, answer_id) => {
        try {
            const response = await fetch(`${BACKEND_URL}/products/user/quiz/${user_quiz_id}/question/${question_id}/answer/${answer_id}/`, {
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
            const response = await fetch(`${BACKEND_URL}/products/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/quiz/${router.query.quiz_id}/finished/`, {
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
        <React.Fragment>
            <div className="my-5">
                <form>
                    {user_answers.map((user_answer, i) => {
                        return (
                            <div className="border-b" key={user_answer.id}>
                                {/* Question */}
                                <div className="flex font-bold mt-5">
                                    <h1 className="mx-4">{i + 1}.</h1>
                                    <h1>{user_answer.question.title}</h1>
                                    <span>{user_answer.question.body}</span>
                                </div>

                                {/* Variants */}
                                <div className="my-5 text-neutral-600">
                                    {user_answer.question.get_answers.map(answer => {
                                        return (
                                            <label
                                                key={answer.id}
                                                htmlFor={answer.id}
                                                onClick={() => ChoiceAnswer(user_quiz_data.id, user_answer.question.id, answer.id)}
                                                className={`flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-orange-100 ${user_answer.answers.find(id => id === answer.id) && "bg-orange-100"}`}
                                            >
                                                {user_answer.question.format === 'ONE' ?
                                                    <>
                                                        <input type="radio" id={answer.id} name={user_answer.question.id} defaultChecked={user_answer.answers.find(id => id === answer.id) ? true : false} />
                                                        <span className="ml-2">{answer.text}</span>
                                                    </>

                                                :
                                                    <>
                                                        <input type="checkbox" id={answer.id} name={user_answer.question.id} defaultChecked={user_answer.answers.find(id => id === answer.id) ? true : false}/>
                                                        <span className="ml-2">{answer.text}</span>
                                                    </>
                                                }
                                            </label>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </form>
            </div>

            <form className="m-5 flex justify-between" onSubmit={e => onSubmit(e)}>
                <div className="flex items-center text-neutral-600">
                    <input
                        type="checkbox" name="" id="full"
                        className="mr-2"
                        required
                    />
                    <label htmlFor="full">Сұрақтарға толық жауап бердім</label>
                </div>
                <button
                    className="px-4 py-2 border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70"
                >
                    Келесі тапсырмаға өту
                </button>
            </form>
        </React.Fragment>
    )
}

export default QuizProgressComponent;