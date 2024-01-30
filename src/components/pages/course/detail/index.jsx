import React from "react";
import CourseView from "./CourseView";
import { SlArrowDown } from "react-icons/sl";



const CourseDetail = (props) => {
    const { course } = props;

    return (
        <div className="flex items-start gap-2 flex-col lg:flex-row">
            {/* Course view */}
            <CourseView course={course} />

            <div className="w-full lg:flex-1">
                
                <div className="h-64 bg-white mb-2 border border-neutral-200 rounded-lg">
                    {/* Title */}
                    <div className="border-b border-neutral-200 py-2 px-5 flex justify-between">
                        <h1 className="text-neutral-900 font-semibold">Оқу жоспары</h1>

                        <button>
                            <SlArrowDown />
                        </button>
                    </div>
                    {/* Content */}
                    <div className="p-5">
                        <span className="text-sm text-neutral-500 block">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas animi aut quisquam omnis quaerat architecto consequuntur 
                            adipisci neque veniam natus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas animi aut quisquam omnis quaerat architecto consequuntur 
                            adipisci neque veniam natus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas animi aut quisquam omnis quaerat architecto consequuntur 
                            adipisci neque veniam natus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas animi aut quisquam omnis quaerat architecto consequuntur 
                            adipisci neque veniam natus.
                        </span>
                       
                    </div>
                </div>

                <div className="h-64 bg-white mb-2 border border-neutral-200 rounded-lg">
                    {/* Title */}
                    <div className="border-b border-neutral-200 py-2 px-5 flex justify-between">
                        <h1 className="text-neutral-900 font-semibold">Оқу жоспары</h1>

                        <button>
                            <SlArrowDown />
                        </button>
                    </div>
                    {/* Content */}
                    <div className="p-5">
                        <span className="text-sm text-neutral-500 block">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas animi aut quisquam omnis quaerat architecto consequuntur 
                            adipisci neque veniam natus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas animi aut quisquam omnis quaerat architecto consequuntur 
                            adipisci neque veniam natus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas animi aut quisquam omnis quaerat architecto consequuntur 
                            adipisci neque veniam natus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas animi aut quisquam omnis quaerat architecto consequuntur 
                            adipisci neque veniam natus.
                        </span>
                       
                    </div>
                </div>

                <div className="h-64 bg-white mb-2 border border-neutral-200 rounded-lg">
                    {/* Title */}
                    <div className="border-b border-neutral-200 py-2 px-5 flex justify-between">
                        <h1 className="text-neutral-900 font-semibold">Оқу жоспары</h1>

                        <button>
                            <SlArrowDown />
                        </button>
                    </div>
                    {/* Content */}
                    <div className="p-5">
                        <span className="text-sm text-neutral-500 block">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas animi aut quisquam omnis quaerat architecto consequuntur 
                            adipisci neque veniam natus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas animi aut quisquam omnis quaerat architecto consequuntur 
                            adipisci neque veniam natus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas animi aut quisquam omnis quaerat architecto consequuntur 
                            adipisci neque veniam natus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas animi aut quisquam omnis quaerat architecto consequuntur 
                            adipisci neque veniam natus.
                        </span>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail;