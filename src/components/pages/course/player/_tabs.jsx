import React, { useState } from "react";

const Tabs = (props) => {
    const { user_course } = props;
    const [tabIndex, setTabIndex] = useState(1)

    const DecriptionText = (data) => {
        const description = { __html: data }
        return <div dangerouslySetInnerHTML={description} />
    }

    return (
        <div>
            {/* Heads */}
            <div className="flex border-b">
                <button
                    id="overview"
                    onClick={() => setTabIndex(1)}
                    className={`px-6 py-3 font-semibold text-neutral-900 transition-all border-b-4 focus:border-b-neutral-900 ${tabIndex === 1 ? "border-b-neutral-900" : "border-b-transparent"}`}
                >
                    Шолу
                </button>

                <button
                    id="reviews"
                    onClick={() => setTabIndex(2)}
                    className={`px-6 py-3 font-semibold text-neutral-900 transition-all border-b-4 focus:border-b-neutral-900 ${tabIndex === 2 ? "border-b-neutral-900" : "border-b-transparent"}`}
                >
                    Пікірлер
                </button>
            </div>

            {/* Contents */}
            <div>
                {/* Review */}
                <div className={`${tabIndex === 1 ? "block": "hidden"}`}>
                    <div className="p-10 border-b border-neutral-200">
                        <h1 className="text-2xl font-bold">{user_course.course.name}</h1>
                        <span className="block mt-2 text-sm text-neutral-500">{user_course.course.about}</span>
                    </div>

                    <div className="p-10 border-b border-neutral-200">
                        <div className="text-neutral-500 text-sm block">
                            {DecriptionText(user_course.course.description)}
                        </div>
                    </div>
                </div>

                {/* Reviews */}
                <div className={`${tabIndex === 2 ? "block": "hidden"}`}>

                    <div className="p-10 border-b border-neutral-200">
                        <h1>Hello world</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tabs;