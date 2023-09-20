import React from "react";
import According from "@/src/components/According";
import { CiTextAlignLeft, CiTimer } from "react-icons/ci";


const ChaptersComponent = ({ chapters, lessons }) => {
    return (
        <div>
            <h1 className="text-2xl lg:text-4xl font-bold">Мазмұны</h1>

            <div className="mt-5">
                {chapters.map(chapter => {
                    return (
                        <React.Fragment key={chapter.id}>
                            <According
                                title={chapter.chapter_name}
                                content={`${chapter.chapter_name} бөлімінің контенті`}
                            >
                                {lessons.map(lesson => {
                                    if (lesson.chapter === chapter.id) {
                                        return (
                                            <div className="flex items-center justify-between text-neutral-600 p-5 border-b" key={lesson.id}>
                                                <div className="flex items-center">
                                                    <CiTextAlignLeft className="text-xl mr-2" />
                                                    <span>{lesson.title}</span>
                                                </div>

                                                <div className="flex items-center">
                                                    <CiTimer className="text-xl mr-2" />
                                                    <span className="text-sm">{lesson.duration}мин</span>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </According>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default ChaptersComponent;