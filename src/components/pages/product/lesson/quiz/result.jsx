import React from "react";


const QuizResultComponent = ({ user_quiz_data, user_answers }) => {
    
    return (
        <React.Fragment>
            <div className="border-b py-5 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Тест қорытындылары</h1>
                <span className="text-neutral-600"> {user_quiz_data.score}%</span>
            </div>
            
            <div className="py-5">
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
                                                className={`flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-orange-100 ${user_answer.answers.find(id => id === answer.id) && "bg-orange-100"} ${answer.correct && "bg-green-100 hover:bg-green-100"}`}
                                            >
                                                {user_answer.question.format === 'ONE' ?
                                                    <>
                                                        <input 
                                                            type="radio" 
                                                            id={answer.id} name={user_answer.question.id} 
                                                            defaultChecked={user_answer.answers.find(id => id === answer.id) ? true : false} 
                                                            disabled={true}
                                                        />
                                                        <span className="ml-2">{answer.text}</span>
                                                    </>

                                                :
                                                    <>
                                                        <input 
                                                            type="checkbox" 
                                                            id={answer.id} name={user_answer.question.id} 
                                                            defaultChecked={user_answer.answers.find(id => id === answer.id) ? true : false}
                                                            disabled={true}
                                                        />
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
        </React.Fragment>
    )
}

export default QuizResultComponent;