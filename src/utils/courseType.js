export const getCourseType = (prop) => {
    switch (prop) {
        case "FREE":
            return (
                <div className="flex items-start">
                    <div className="text-white bg-neutral-900 font-bold text-3xl p-2">FRE</div>
                    <div className="ml-2">
                        <h1 className="font-semibold text-sm text-neutral-900">Free content</h1>
                        <span className="text-neutral-500 text-xs block">Тегін контент</span>
                    </div>
                </div>
            )
        case "PRO":
            return (
                <div className="flex items-start">
                    <div className="text-white bg-neutral-900 font-bold text-3xl p-2">PRO</div>
                    <div className="ml-2">
                        <h1 className="font-semibold text-sm text-neutral-900">PRO content</h1>
                        <span className="text-neutral-500 text-xs block">Ақылы контент</span>
                    </div>
                </div>
            )
    }
}


export const getAllLessonDurationSum = (prop) => {
    let hours;
    let minutes = prop || 0 + " ";

    if (minutes > 60) {
        hours = Math.floor(minutes / 60)
        return hours + " час, " + minutes % 60 + " мин"
    } else {
        return minutes + "мин"
    }
}