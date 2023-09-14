import { setAlert } from "@/src/redux/actions/alert";
import { BACKEND_URL } from "@/src/redux/actions/types";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";


const VideoComponent = ({ user_video, access }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch(`${BACKEND_URL}/products/product/${router.query.uid}/chapter/${router.query.chapter_id}/lesson/${router.query.lesson_id}/video/${router.query.video_id}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
            });

            if (response.status == 200) {
                router.push(router.asPath);
                dispatch(setAlert("Видеосабақ қаралынды!", "success"));
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
                    <h1 className="text-4xl font-bold">{user_video.video.title}</h1>
                    <span className="text-sm text-neutral-600">{user_video.video.duration} мин</span>
                </div>
                <span className="text-neutral-600 block mt-2">
                    {user_video.video.description}
                </span>
            </div>

            <div className="my-5">
                <div className="h-[580px] rounded-xl bg-black overflow-hidden">
                    <iframe src={user_video.video.frame_url} frameBorder="0" className="w-full h-full"></iframe>
                </div>
            </div>

            {!user_video.is_done &&
                <form className="mb-5 flex justify-between" onSubmit={e => onSubmit(e)}>
                    <div className="flex items-center text-neutral-600">
                        <input
                            type="checkbox" name="" id="full"
                            className="mr-2"
                            required
                        />
                        <label htmlFor="full">Видеоны толық көріп шықтым</label>
                    </div>
                    <button
                        className="px-4 py-2 border-orange-400 bg-orange-400 text-white rounded-lg transition-all hover:opacity-70"
                    >Видеосабақты аяқтау</button>
                </form>
            }
        </div>
    )
}

export default VideoComponent;