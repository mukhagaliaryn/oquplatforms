import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { DRAG_BUFFER } from "@/src/redux/actions/types";
import { Swiper, SwiperSlide } from "swiper/react";



const Headliner = (props) => {
    const { headliners } = props;
    const [slideIndex, setSlideIndex] = useState(0);
    const [dragging, setDragging] = useState(false);

    const dragX = useMotionValue(0);
    const dragXProgress = useMotionValue(0);

    useMotionValueEvent(dragX, "change", (latest) => {
        if (typeof latest === "number" && dragging) {
            dragXProgress.set(latest);
        } else {
            dragXProgress.set(0)
        }
    })

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragXProgress.get();
            if (x === 0) {
                setSlideIndex(prev => {
                    if (prev === headliners.length - 1) {
                        return 0;
                    }
                    return prev + 1;
                })
            }
        }, 9000)

        return () => clearInterval(intervalRef)
    }, [])

    const onDragStart = () => {
        setDragging(true);
    }

    const onDragEnd = () => {
        setDragging(false);

        const x = dragX.get();
        if (x <= -DRAG_BUFFER && slideIndex < headliners.length - 1) {
            setSlideIndex(prev => prev + 1);
        } else if (x >= DRAG_BUFFER && slideIndex > 0) {
            setSlideIndex(prev => prev - 1);
        }
    }

    return (
        <div className="relative">
            <div className="overflow-hidden rounded-lg">
                <motion.div
                    drag="x"
                    dragConstraints={{
                        left: 0,
                        right: 0,
                    }}
                    style={{
                        x: dragX,
                    }}
                    onDragStart={onDragStart}
                    onDragEnd={onDragEnd}
                    animate={{
                        translateX: `-${slideIndex * 100}%`
                    }}
                    transition={{
                        type: "spring",
                        mass: 3,
                        stiffness: 400,
                        damping: 50
                    }}
                    className="h-96 xl:h-[480px] 2xl:h-[620px] flex cursor-grab active:cursor-grabbing"
                >
                    {headliners.map((headline, i) => {
                        return (
                            <motion.div
                                key={i}
                                animate={{
                                    scale: slideIndex === i ? 1 : 0.9,
                                }}
                                transition={{
                                    type: "spring",
                                    mass: 3,
                                    stiffness: 400,
                                    damping: 50
                                }}
                                style={{ backgroundImage: `url(${headline.poster})` }}
                                className="w-full h-full bg-cover bg-center bg-no-repeat shrink-0 rounded-lg overflow-hidden"
                            >
                                <div className="relative h-full">
                                    {/* Main content */}
                                    <div className="h-full w-full flex items-start xl:items-center absolute top-0 left-0" id="inner">
                                        <div className="p-10 w-full md:max-w-screen-sm">
                                            <div className="mb-6">
                                                <h1 className="text-5xl font-semibold text-white">{headline.name}</h1>
                                                <span className="block mt-2 text-neutral-100 text-sm max-w-md">{headline.about}</span>
                                            </div>
                                            <Link
                                                href={`/course/${headline.id}`}
                                                className="px-6 py-2 text-sm font-medium bg-neutral-200 text-neutral-900 rounded-md transition-all hover:bg-neutral-300 active:scale-95"
                                            >
                                                <span>Толығырақ</span>
                                            </Link>
                                        </div>

                                    </div>

                                    <div className="absolute bottom-0 left-0 w-full h-20" id="headliner"></div>
                                </div>

                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>

            <Dots
                headliners={headliners}
                slideIndex={slideIndex}
                setSlideIndex={setSlideIndex}
            />
        </div>

    )
}


export default Headliner;



const Dots = ({ headliners, slideIndex, setSlideIndex }) => {
    return (
        <div className="w-full pl-10 absolute -bottom-5 left-0">
            <Swiper
                slidesPerView={2}
                breakpoints={{
                    0: {
                        slidesPerView: 2
                    },
                    640: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 4
                    },
                    1024: {
                        slidesPerView: 5
                    },
                    1280: {
                        slidesPerView: 6
                    },
                    1536: {
                        slidesPerView: 7
                    },
                }}
                spaceBetween={10}
                className="h-32 xl:h-36 2xl:h-40"
            >
                {headliners.map((headline, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <div
                                onClick={() => setSlideIndex(i)}
                                className={`h-28 xl:h-32 2xl:h-36 relative overflow-hidden rounded-md transition-all cursor-pointer shadow-md
                                ${i === slideIndex ? "border-blue-500 border-2" : "border-transparent"}
                            `}
                            >
                                <Image
                                    src={headline.poster} width={500} height={250} alt="poster"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute h-full w-full top-0 left-0 transition-all hover:bg-white/30"></div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>

    )
}