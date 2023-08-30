import { BtnLink } from "@/src/components/Button";
import React from "react";


const TaskComponent = ({task}) => {
    return (
        <div className="shadow flex-1 mt-5 rounded-xl ml-2 px-5">
            <div className="mt-5">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold">{task.title}</h1>
                    <span className="text-sm text-neutral-600">{task.duration} мин</span>
                </div>
                <span className="text-neutral-600 block mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod obcaecati quibusdam blanditiis, aliquid, sint quia ullam culpa
                    commodi cum nesciunt magnam, debitis totam adipisci dolorum quidem?
                    At provident expedita voluptas.
                </span>
            </div>

            <div className="mt-5 px-5">
                <ul className="text-neutral-600 list-disc">
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quae libero tenetur. Sed, nihil fugit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quae libero tenetur. Sed, nihil fugit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quae libero tenetur. Sed, nihil fugit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quae libero tenetur. Sed, nihil fugit.</li>
                </ul>
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

export default TaskComponent;