import { setAlert } from "@/src/redux/actions/alert";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";


const TaskComponent = (props) => {
    const { user_task, access } = props;
    const router = useRouter();
    const dispatch = useDispatch();

    const handleSendTask = async e => {
        e.preventDefault();

        try {
            const response = await fetch(`${BACKEND_URL}/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/task/${router.query.task_id}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
            });

            if (response.status == 200) {
                router.push(router.asPath);
                dispatch(setAlert("Тапсырма жіберілді!", "success"));
            } else {
                dispatch(setAlert("Бір жерден қателік кетті!", "error"));
            }
        } catch (e) {
            console.log(e);
        }
    }

    
    const handleTaskFinish = async e => {
        e.preventDefault();

        try {
            const response = await fetch(`${BACKEND_URL}/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/task/${router.query.task_id}/finished/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
            });

            if (response.status == 200) {
                router.push(router.asPath);
                dispatch(setAlert("Тапсырма аяқталды!", "success"));
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
                    <h1 className="text-2xl font-bold">{user_task.task.title}</h1>
                    <span className="text-sm text-neutral-600">{user_task.task.duration} мин</span>
                </div>
            </div>

            <div className="my-5 text-neutral-600">
                {user_task.task.body}
            </div>
            
            {user_task.status === "FINISH" ?
                <div className="py-5 border-t text-center">
                    <h1 className="font-bold text-2xl mb-2">Тапсырма аяқталды!</h1>
                    <span className="text-neutral-600">Тапсырма балы: {user_task.score}</span>
                </div>
            : user_task.status === "CONFIRM" ?
                <form className="py-5 flex justify-between border-t" onSubmit={e => handleTaskFinish(e)}>
                    <button
                        className="px-4 py-2 border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70"
                    >
                        Бағаны алу
                    </button>
                </form>
            : user_task.status === "PROGRESS" ?
                <div className="py-5 text-center border-t">
                    <span className="text-neutral-600">Жауап қаралуда...</span>
                </div>
            :
                <form className="flex justify-between border-t py-5" onSubmit={e => handleSendTask(e)}>
                    <div className="flex items-center text-neutral-600">
                        <input
                            type="checkbox" name="" id="full"
                            className="mr-2"
                            required
                        />
                        <label htmlFor="full">Тапсырманы жазбаша орындап, мұғалімге тескеруге бердім</label>
                    </div>
                    <button
                        className="px-4 py-2 border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70"
                    >
                        Мұғалімнің бағалауын күту
                    </button>
                </form>
            }
        </div>
    )
}

export default TaskComponent;