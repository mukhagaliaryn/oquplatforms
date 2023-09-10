import React from "react";


const QuizStartComponent = ({ user_quiz_data }) => {
    return (
        <div className="my-5">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold">{user_quiz_data.quiz.title}</h1>
                <span className="text-sm text-neutral-600">{user_quiz_data.quiz.duration} мин</span>
            </div>
            <span className="text-neutral-600 block my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quod obcaecati quibusdam blanditiis, aliquid, sint quia ullam culpa
                commodi cum nesciunt magnam, debitis totam adipisci dolorum quidem?
                At provident expedita voluptas.
            </span>

            <button
                onClick={() => alert('Hello world')}
                className="px-4 py-2 border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70"
            >
                Тестті бастау
            </button>
        </div>
    )
}

export default QuizStartComponent;