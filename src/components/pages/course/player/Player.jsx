import React from "react";


const Player = (props) => {
    const { video, user_course } = props;

    const DecriptionText = (data) => {
        const description = { __html: data }
        return <div dangerouslySetInnerHTML={description} />
    }

    return (
        <div className="flex-1 overflow-auto" id="player">
            <div className="h-80 lg:h-96 xl:h-[480px] 2xl:h-[640px] bg-neutral-900">
                <iframe src={video.frame_url} frameBorder="0" className="w-full h-full"></iframe>
            </div>

            <div className="mb-20">
                <div className="p-10 border-b border-neutral-200">
                    <h1 className="text-2xl font-bold">{user_course.course.name}</h1>
                    <span className="block mt-2 text-sm text-neutral-500">{user_course.course.about}</span>
                </div>

                <div className="p-10 border-b border-neutral-200">
                    <div className="text-neutral-500 text-sm block">
                        {DecriptionText(user_course.course.description)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Player;