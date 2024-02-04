import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { motion } from "framer-motion";


const RatingSection = (props) => {
    const { course, rating } = props;
    const [show, setShow] = useState(false);

    return (
        <motion.div
            animate={{ height: show ? "100%" : "20rem" }}
            className="bg-white mb-2 border border-neutral-200 transition-all rounded-lg overflow-hidden relative">
            {/* Title */}
            <div className="border-b border-neutral-200 py-2 px-5 flex justify-between" onClick={() => setShow(!show)}>
                <h1 className="text-neutral-900 font-semibold">Рейтинг</h1>

                <button className="text-neutral-900">
                    {show ? <SlArrowUp /> : <SlArrowDown />}
                </button>
            </div>
            {/* Content */}
            <div className="p-5">
                {/* Avg rating */}
                <div className="flex items-center gap-5">
                    <div className="text-center">
                        <h1 className="text-8xl font-semibold text-neutral-900">{course.all_rating}</h1>
                        <span className="block text-neutral-500 text-xs">{rating.all} адам баға берді</span>
                    </div>

                    <ul className="flex-1">
                        {rating.rating_scales.map((score, i) => (
                            <li className="flex items-center gap-4 mb-2" key={i}>
                                <div className="flex items-center">
                                    <span className="block text-neutral-500 text-sm w-2">{i+1}</span>
                                    <IoStar className="text-orange-500 ml-2" />
                                </div>

                                <div className="flex-1 relative bg-neutral-200 h-2 rounded-md overflow-hidden">
                                    <div className="absolute h-full bg-orange-500" style={{ width: `${score/rating.all * 100}%`, }}></div>
                                </div>
                            </li> 
                        ))}
                       
                    </ul>
                </div>

                {/* Reviews */}
                <div className="mt-5">
                    {rating.users_with_comments.map(rating => (
                        <div className="py-4 border-b border-neutral-200" key={rating.id}>
                            <div className="flex items-center">
                                <div className="flex pr-2 border-r border-neutral-500">
                                    <h1 className="text-sm text-neutral-900 font-semibold">{rating.rating_score}</h1> 
                                    <IoStar className="text-orange-500 ml-1" />
                                </div>
                                <h1 className="text-neutral-900 font-semibold ml-2 text-sm">{rating.user.full_name}</h1>
                            </div>
                            <div className="mt-2">
                                <span className="block text-neutral-500 text-sm">
                                    {rating.comment}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {!show &&
                <div className="absolute bottom-0 left-0 w-full h-10 cursor-pointer" id="shadow" onClick={() => setShow(!show)}></div>
            }
        </motion.div>
    )
}


export default RatingSection;
