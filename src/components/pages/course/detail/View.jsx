import React from "react";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { useRouter } from "next/router";
import { PiFolderSimpleFill, PiShareNetworkFill, PiTimerFill, PiUsersThreeFill } from "react-icons/pi";
import { MdPlayLesson } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { AuthModal, ShareModal } from "@/src/components/Modals";
import { WEBSITE_URL } from "@/src/redux/actions/types";
import { getAllLessonDurationSum, getCourseType } from "@/src/utils/courseType";


const CourseView = (props) => {
    const { 
        isAuthenticated, 
        course, 
        user_course__course_id, 
        course_following_users,
        chapters_count,
        lessons_count,
        all_lesson_duration_sum,
        handlePostCourse,
        handlePutCourse,
        authModal,
        setAuthModal,
        shareModal,
        setShareModal
    } = props;

    const router = useRouter();

    
    return (
        <React.Fragment>
            <div id="course-sidebar" className="bg-white flex flex-col justify-between w-full lg:w-96 border border-neutral-200 rounded-lg overflow-auto lg:sticky lg:top-2">
                <div className="p-10">
                    {/* Image */}
                    <div className="w-28 h-28 mx-auto overflow-hidden">
                        <Image
                            src={course.image ? course.image : "/images/course.png"} width={520} height={520} alt={course.name}
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
                                {course.course_type === "FREE" ?
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
                                    <div className="relative">
                                        <button
                                            className="flex gap-2 items-center bg-neutral-900 px-6 py-2 text-sm font-medium text-white rounded-md transition-all border border-neutral-900 hover:bg-transparent hover:text-neutral-900 active:scale-95"
                                        >
                                            <IoIosStar />
                                            <>50 000 тг</>
                                        </button>
                                    </div>
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
                        <button
                            onClick={() => setShareModal(!shareModal)} 
                            className="bg-neutral-900 inline-block px-4 py-2 font-medium text-white rounded-md transition-all border border-neutral-900 hover:bg-transparent hover:text-neutral-900 active:scale-95">
                            <PiShareNetworkFill />
                        </button>
                    </div>

                    {/* Subscribes */}
                    <div className="my-10 flex justify-center gap-5">
                        <div className="flex flex-col items-center">
                            <div className="flex gap-1 items-center justify-center">
                                <h1 className="text-neutral-900 font-semibold">{course.all_rating}</h1>
                                <IoStar className="text-orange-500 text-xl" />
                            </div>
                            <span className="text-xs text-neutral-500">Жалпы рейтинг</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="flex gap-1 items-center justify-center">
                                <h1 className="text-neutral-900 font-semibold">{course_following_users}</h1>
                                <PiUsersThreeFill className="text-neutral-900 text-xl" />
                            </div>
                            <span className="text-xs text-neutral-500">Білім алушы</span>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <div className="text-center my-10">
                        <span className="text-sm block text-neutral-500">{course.about}</span>
                    </div>


                    {/* Sum and counts */}
                    <div className="flex justify-center gap-5">
                        <div className="flex flex-col items-center">
                            <div className="flex gap-1 items-center justify-center">
                                <h1 className="text-neutral-900 font-semibold">{chapters_count}</h1>
                                <PiFolderSimpleFill className="text-neutral-900" />
                            </div>
                            <span className="text-xs text-neutral-500">Бөлім</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="flex gap-1 items-center justify-center">
                                <h1 className="text-neutral-900 font-semibold">{lessons_count}</h1>
                                <MdPlayLesson className="text-neutral-900"/>
                            </div>
                            <span className="text-xs text-neutral-500">Сабақ</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="flex gap-1 items-center justify-center">
                                <h1 className="text-neutral-900 font-semibold">{getAllLessonDurationSum(all_lesson_duration_sum)}</h1>
                                <PiTimerFill className="text-neutral-900"/>
                            </div>
                            <span className="text-xs text-neutral-500">Жалпы ұзақтығы</span>
                        </div>
                        
                    </div>
                </div>

                {/* Course type */}
                <div className="relative">
                    {getCourseType(course.course_type)}
                </div>
            </div>

            {authModal && <AuthModal authModal={authModal} setAuthModal={setAuthModal} />}
            {shareModal && 
                <ShareModal 
                    shareModal={shareModal} 
                    setShareModal={setShareModal} 
                    currentURL={`${WEBSITE_URL}${router.asPath}`}
                />
            }
        </React.Fragment>

    )
}


export default CourseView;