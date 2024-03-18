import React from "react";
import { motion } from "framer-motion";
import { SlArrowRight } from "react-icons/sl";


const OverviewSection = (props) => {
    const { open_video, isAuthenticated, authModal, setAuthModal } = props;

    return (
        <motion.div
            className="bg-white mb-2 border border-neutral-200 transition-all rounded-lg overflow-hidden relative"
        >
            {/* Title */}
            <div className="border-b border-neutral-200 py-2 px-5 flex justify-between">
                <h1 className="text-neutral-900 font-semibold">Ашық сабақтар</h1>

                {!isAuthenticated &&
                    <button className="text-neutral-900" onClick={() => setAuthModal(!authModal)}>
                        <SlArrowRight />
                    </button>
                }

            </div>

            {/* Content */}
            <div className="p-5">
                <div className="grid gap-2 grid-cols-2 md:grid-cols-3">
                    {open_video.map(video => {
                        return (
                            <div
                                className="w-full rounded-lg overflow-hidden xl:h-48 2xl:h-64"
                                key={video.id}
                            >
                                <iframe 
                                    className="w-full h-full" 
                                    src={`${video.frame_url}?controls=0`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                    frameBorder="0"
                                >
                                </iframe>
                            </div>
                        )
                    })}
                </div>

            </div>
        </motion.div>
    )
}


export default OverviewSection;
