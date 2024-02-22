import React from "react";
import Tabs from "./_tabs";


const Player = (props) => {
    const { video, user_course } = props;



    return (
        <div className="flex-1 overflow-auto" id="player">
            <div className="h-80 lg:h-96 xl:h-[480px] 2xl:h-[640px] bg-neutral-900">
                <iframe 
                    src={video.frame_url} 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>

            <Tabs user_course={user_course} />

        </div>
    )
}

export default Player;