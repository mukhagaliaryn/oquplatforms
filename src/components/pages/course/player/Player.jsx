import React from "react";


const Player = (props) => {
    const { video } = props;

    return (
        <div className="flex-1 overflow-auto" id="player">
            <div className="h-80 lg:h-96 xl:h-[480px] 2xl:h-[640px] bg-neutral-900">
                <iframe src={video.frame_url} frameborder="0" className="w-full h-full"></iframe>
            </div>

            <div className="h-20 bg-neutral-200 my-5"></div>
            <div className="h-20 bg-neutral-200 my-5"></div>
            <div className="h-20 bg-neutral-200 my-5"></div>
            <div className="h-20 bg-neutral-200 my-5"></div>
        </div>
    )
}

export default Player;