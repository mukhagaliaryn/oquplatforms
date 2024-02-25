import React from "react";
import Tabs from "./Tabs";


const Player = (props) => {
    const { video, user_course, user_chapters, user_lessons, handleIsCompleted } = props;

    return (
        <div className="flex-1 overflow-auto" id="player">
            <div className="relative h-80 lg:h-96 xl:h-[480px] 2xl:h-[640px] bg-neutral-900">
                

                <iframe 
                    src={`${video.frame_url}`} 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>

            <Tabs 
                user_course={user_course} 
                user_chapters={user_chapters} 
                user_lessons={user_lessons}
                handleIsCompleted={handleIsCompleted}
            />
        </div>
    )
}

export default Player;