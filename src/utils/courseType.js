export const getCourseType = (prop) => {
    switch (prop) {
        case "EXPRESS":
            return (
                <div className="flex items-start">
                    <div className="text-white bg-neutral-900 font-bold text-3xl p-2">EX</div>
                    <div className="ml-2">
                        <h1 className="font-semibold text-sm text-neutral-900">Express free</h1>
                        <span className="text-neutral-500 text-xs block">Экспресс курс</span>
                    </div>
                </div>
            )
        case "DETAIL":
            return (
                <div className="flex items-start">
                    <div className="text-white bg-neutral-900 font-bold text-3xl p-2">FLL</div>
                    <div className="ml-2">
                        <h1 className="font-semibold text-sm text-neutral-900">Full free</h1>
                        <span className="text-neutral-500 text-xs block">Толық курс</span>
                    </div>
                </div>
            )
        case "DETECTED":
            return (
                <div className="flex items-start">
                    <div className="text-white bg-neutral-900 font-bold text-3xl p-2">ERT</div>
                    <div className="ml-2">
                        <h1 className="font-semibold text-sm text-neutral-900">Expert free</h1>
                        <span className="text-neutral-500 text-xs block">Бағытталған курс</span>
                    </div>
                </div>
            )
    }
}


export const getAllLessonDurationSum = (prop) => {
    let hours;
    let minutes = prop;

    if (minutes > 60) {
        hours = Math.floor(minutes / 60)
        return hours + " час, " + minutes % 60 + " мин"
    } else {
        return minutes + "мин"
    }
}