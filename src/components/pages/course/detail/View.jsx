import React, { useState } from "react";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { PiShareNetworkFill, PiTimer, PiUsersFill } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";
import { useRouter } from "next/router";
import { AuthModal } from "@/src/components/Modals";
import { useDispatch } from "react-redux";
import { setAlert } from "@/src/redux/actions/alert";
import { BACKEND_URL } from "@/src/redux/actions/types";


const CourseView = (props) => {
    const { isAuthenticated, course, first_url, user_course__course_id, access } = props;
    const router = useRouter();
    const [authModal, setAuthModal] = useState(false);
    const dispatch = useDispatch();


    const handlePostCourse = async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/course/${course.id}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
            })

            const res = await response.json();
            
            if (response.status == 201) {
                dispatch(setAlert("Курсты бастай беруге болады!", "success"));
            } else {
                dispatch(setAlert("Бір жерден қателік кетті!", "error"));
            }

        } catch (e) {
            console.log(e);
            dispatch(setAlert("Бір жерден қателік кетті!", "error"));
        }
    }


    const handlePutCourse = async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/course/${course.id}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${access}`
                },
            })

            const res = await response.json();
            if (response.status == 201) {
                dispatch(setAlert("Курста жаңа өзгерістер...", "success"));
                router.push(`/course/${first_url.user_course_id}/player/chapter/${first_url.user_chapter_id}/lesson/${first_url.user_lesson_id}`)
            } else {
                dispatch(setAlert("Бір жерден қателік кетті!", "error"));
            }

        } catch (e) {
            console.log(e);
            dispatch(setAlert("Бір жерден қателік кетті!", "error"));
        }
    }

    return (
        <React.Fragment>
            <div id="course-sidebar" className="bg-white flex flex-col justify-between w-full lg:w-96 border border-neutral-200 rounded-lg overflow-auto lg:sticky lg:top-2">
                <div className="p-10">
                    {/* Image */}
                    <div className="w-28 h-28 mx-auto overflow-hidden">
                        <Image
                            src={course.image} width={520} height={520} alt={course.name}
                            className="w-full h-full"
                        />
                    </div>

                    {/* Title */}
                    <div className="my-10 text-center ">
                        <h1 className="text-2xl font-semibold">{course.name}</h1>
                        <span className="text-sm block text-neutral-500">{course.topic.name_kk}</span>
                    </div>

                    {/* Action */}
                    <div className="flex justify-center gap-2">
                        {isAuthenticated ?
                            <React.Fragment>
                                {course.id === user_course__course_id ?
                                    <button
                                        onClick={handlePutCourse}
                                        className="bg-neutral-900 inline-block px-6 py-2 text-sm font-medium text-white rounded-md transition-all border border-neutral-900 hover:bg-transparent hover:text-neutral-900 active:scale-95"
                                    >
                                        Курсқа кіру
                                    </button>
                                    :
                                    <button
                                        onClick={handlePostCourse}
                                        className="bg-neutral-900 inline-block px-6 py-2 text-sm font-medium text-white rounded-md transition-all border border-neutral-900 hover:bg-transparent hover:text-neutral-900 active:scale-95"
                                    >
                                        Курсты бастау
                                    </button>
                                }
                            </React.Fragment>
                        :
                            <button
                                onClick={() => setAuthModal(!authModal)}
                                className="bg-neutral-900 inline-block px-6 py-2 text-sm font-medium text-white rounded-md transition-all border border-neutral-900 hover:bg-transparent hover:text-neutral-900 active:scale-95"
                            >
                                Кіру/Тіркелу
                            </button>
                        }
                        <button className="bg-neutral-900 inline-block px-4 py-2 font-medium text-white rounded-md transition-all border border-neutral-900 hover:bg-transparent hover:text-neutral-900 active:scale-95">
                            <PiShareNetworkFill />
                        </button>
                    </div>

                    {/* Subscribes */}
                    <div className="my-10 flex justify-center gap-5">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center">
                                <h1 className="text-neutral-900 font-semibold">{course.all_rating}</h1>
                                <IoStar className="text-orange-500 ml-2" />
                            </div>
                            <span className="text-xs text-neutral-500">Жалпы рейтинг</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center">
                                <h1 className="text-neutral-900 font-semibold">0</h1>
                                <PiUsersFill className="text-neutral-900 ml-2" />
                            </div>
                            <span className="text-xs text-neutral-500">Білім алушы</span>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <div className="text-center my-10">
                        <span className="text-sm block text-neutral-500">{course.about}</span>
                    </div>


                    {/* Locals */}
                    <div className="flex justify-center gap-5">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center">
                                <h1 className="text-neutral-900 font-semibold">{course.last_update}</h1>
                                <PiTimer className="text-neutral-900 ml-2" />
                            </div>
                            <span className="text-xs text-neutral-500">Соңғы өзгерістер</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center">
                                <h1 className="text-neutral-900 font-semibold">
                                    {course.ln.map(l => (<div key={l.id}>{l.name}</div>))}
                                </h1>
                                <TfiWorld className="text-neutral-900 ml-2" />
                            </div>
                            <span className="text-xs text-neutral-500">Курстың тілі</span>
                        </div>
                    </div>
                </div>

                {/* Course type */}
                <div className="">
                    <div className="flex items-start">
                        <div className="text-white bg-neutral-900 font-bold text-3xl p-2">EX</div>
                        <div className="ml-2">
                            <h1 className="font-semibold text-sm text-neutral-900">Express free</h1>
                            <span className="text-neutral-500 text-xs block">Экспресс курс</span>
                        </div>
                    </div>
                </div>
            </div>

            {authModal && <AuthModal authModal={authModal} setAuthModal={setAuthModal} />}
        </React.Fragment>

    )
}


export default CourseView;