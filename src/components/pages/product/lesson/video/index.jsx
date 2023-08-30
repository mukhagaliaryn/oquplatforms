import { BtnLink } from "@/src/components/Button";
import React from "react";


const VideoComponent = ({ video }) => {
    return (
        <div className="shadow flex-1 mt-5 rounded-xl ml-2 px-5">
            <div className="mt-5">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold">{video.title}</h1>
                    <span className="text-sm text-neutral-600">{video.duration} мин</span>
                </div>
                <span className="text-neutral-600 block mt-2">
                    {video.description}
                </span>
            </div>

            <div className="mt-5">
                <div className="h-[580px] rounded-xl bg-black overflow-hidden">
                    <iframe src={video.frame_url} frameBorder="0" className="w-full h-full"></iframe>
                </div>
            </div>

            <div className="my-5 flex justify-between">
                <div className="flex items-center text-neutral-600">
                    <input
                        type="checkbox" name="" id="full"
                        className="mr-2"
                    />
                    <label htmlFor="full">Видеоны толық көріп шықтым</label>
                </div>
                <BtnLink href={"/product/23/chapter/23/lesson/232/tasks"}>Келесі тапсырмаға өту</BtnLink>
            </div>
        </div>
    )
}

export default VideoComponent;