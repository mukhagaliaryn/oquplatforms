import React from "react";
import LessonItem from "./LessonItem";



const LessonsList = (props) => {
    const { user_course, user_chapters, user_lessons, handleIsCompleted } = props;

    return (
        <div className="w-full hidden md:block md:max-w-sm 2xl:max-w-md border-l border-neutral-200 overflow-auto">
            <ul>
                {user_chapters.map(user_chapter => {
                    return (
                        <li key={user_chapter.id}>
                            <LessonItem 
                                user_course={user_course}
                                user_chapter={user_chapter}
                                user_lessons={user_lessons}
                                handleIsCompleted={handleIsCompleted}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default LessonsList;