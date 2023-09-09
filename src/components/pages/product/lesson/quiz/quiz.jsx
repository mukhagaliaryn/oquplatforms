import React from "react";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useRouter } from "next/router";
import { setAlert } from "@/src/redux/actions/alert";
import { useDispatch } from "react-redux";


const QuizComponent = ({ user_quiz_data, access }) => {
    const router = useRouter();
    const dispatch= useDispatch();


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
            <div className="mt-5">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold">{user_quiz_data.quiz.title}</h1>
                    <span className="text-sm text-neutral-600">{user_quiz_data.quiz.duration} мин</span>
                </div>
                <span className="text-neutral-600 block mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod obcaecati quibusdam blanditiis, aliquid, sint quia ullam culpa
                    commodi cum nesciunt magnam, debitis totam adipisci dolorum quidem?
                    At provident expedita voluptas.
                </span>
            </div>

            <div className="my-5">
                <form>
                    {user_quiz_data.questions.map((question, i) => {
                        return (
                            <div className="border-b" key={question.id}>
                                {/* Question */}
                                <div className="flex font-bold mt-5">
                                    <h1 className="mx-4">{i + 1}.</h1>
                                    <h1>{question.title}</h1>
                                    <span>{question.body}</span>
                                </div>

                                {/* Variants */}
                                <div className="my-5 text-neutral-600">
                                    {question.get_answers.map(answer => {
                                        return (
                                            <label
                                                key={answer.id}
                                                htmlFor={answer.id}
                                                onClick={() => ChoiceAnswer(user_quiz_data.id, question.id, answer.id)}
                                                className="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-orange-100"
                                            >
                                                {question.format === 'ONE' ?
                                                    <>
                                                        <input type="radio" id={answer.id} name={question.id} />
                                                        <span className="ml-2">{answer.text}</span>
                                                    </>

                                                :
                                                    <>
                                                        <input type="checkbox" id={answer.id} name={question.id} />
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

            {user_quiz_data.status === "START" &&
                <form className="mb-5 flex justify-between" onSubmit={e => onSubmit(e)}>
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
            }
        </div>
    )
}

export default QuizComponent;