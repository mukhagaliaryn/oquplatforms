import React from "react";
import { BtnLink } from "@/src/components/Button";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useRouter } from "next/router";


const QuizComponent = ({ user_quiz_data, access }) => {
    const router = useRouter();

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

            <div className="mt-5">
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

            <div className="my-5 flex justify-between">
                <div className="flex items-center text-neutral-600">
                    <input
                        type="checkbox" name="" id="full"
                        className="mr-2"
                    />
                    <label htmlFor="full">Сұрақтарға толық жауап бердім</label>
                </div>
                <BtnLink href={"/product/23/chapter/23/lesson/232/tasks"}>Тестті аяқтау</BtnLink>
            </div>
        </div>
    )
}

export default QuizComponent;