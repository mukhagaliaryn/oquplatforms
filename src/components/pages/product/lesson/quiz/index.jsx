import React from "react";
import QuizStartComponent from "./start";
import QuizProgressComponent from "./quiz";
import QuizResultComponent from "./result";


const QuizComponent = (props) => {
    const { user_quiz_data, user_answers, access } = props;

    return (
        <div className="shadow flex-1 mt-5 rounded-xl ml-2 px-5">
            {user_quiz_data.status === "FINISH" ?
                <QuizResultComponent 
                    user_quiz_data={user_quiz_data}
                    user_answers={user_answers}
                />
            : user_quiz_data.status === "PROGRESS" ?
                <QuizProgressComponent 
                    user_quiz_data={user_quiz_data}
                    user_answers={user_answers}
                    access={access}
                />
            :
                <QuizStartComponent
                    user_quiz_data={user_quiz_data}
                    access={access}
                />
            }
        </div>
    )
}

export default QuizComponent;