import React from "react";


const QuizProgressComponent = ({ user_quiz_data, onSubmit, ChoiceAnswer }) => {

    return (
        <React.Fragment>
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