import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { DRAG_BUFFER } from "@/src/redux/actions/types";



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
        }, 5000)

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
            setSlideIndex(prev => prev -1);
        }
    }

    return (
        <div className="overflow-hidden rounded-lg relative">
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
                            className="w-full h-full relative bg-cover bg-center bg-no-repeat shrink-0 rounded-lg"
                        >
                            <div className="flex items-end h-full w-full p-10 rounded-md overflow-hidden headliner">
                                <div className="w-full flex flex-col items-center md:max-w-screen-md md:items-start md:flex-row">
                                    <div className="block w-24 md:w-32">
                                        <Image
                                            src={headline.image} width={520} height={520} 
                                            alt={headline.name}
                                            className="w-full"
                                        />
                                    </div>

                                    <div className="mt-4 text-center md:text-left md:mt-0 md:ml-10 md:flex-1">
                                        <h1 className="text-2xl md:text-5xl text-neutral-900 font-bold">{headline.name}</h1>
                                        <span className="text-neutral-700 text-sm my-4 line-clamp-2 md:line-clamp-none">
                                            {headline.about}
                                        </span>

                                        <Link href={`/course/${headline.id}`} className="bg-neutral-900 inline-block px-6 py-2 text-sm font-medium text-white rounded-md transition-all border border-neutral-900 hover:bg-transparent hover:text-neutral-900 active:scale-95">
                                            <span>Толығырақ</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    )
                })}
            </motion.div>

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
        <div className="absolute bottom-0 left-5 flex items-center gap-1">
            {headliners.map((_, i) => {
                return (
                    <div 
                        className={`h-1 w-1 rounded-full transition-all cursor-pointer
                            ${i === slideIndex ? "bg-neutral-300 w-3 h-3": "bg-neutral-200"}
                        `}
                        key={i}
                        onClick={() => setSlideIndex(i)}
                    >
                    </div>
                )
            })}
        </div>
    )
}