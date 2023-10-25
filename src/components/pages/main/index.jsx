import React from "react";
import { SiReactquery } from "react-icons/si";
import { CiUser, CiGrid41, CiCircleChevUp, CiGrid42, CiCloudSun, CiViewList, CiTextAlignLeft, CiCloudMoon, CiPhone } from "react-icons/ci";
import { BtnLink, BtnLinkPrimary } from "../../Button";


const LandingComponent = () => {
    return (
        <React.Fragment>
            {/* Main offer */}
            {/* ===================================================================================== */}
            <div
                className="border-b bg-cover"
                style={{ backgroundImage: "url('/landing/main.jpg')" }}
            >
                <div className="text-center max-w-[1080px] mx-auto py-20 px-5">
                    <h1 className="text-3xl md:text-6xl font-bold">
                        <span className="text-orange-400">OQU platforms </span>
                        - онлайн методикалық оқыту платформасы
                    </h1>

                    <p className="my-5 md:my-10 text-neutral-600">
                        <span className="block">Өзіңіздің әлеуетіңізді ашып, білім мен өсу сапарына шығуға дайынсыз ба?</span>
                        OQU platforms сізге табысқа жету үшін қажетті құралдарды ұсыну үшін осында.
                        Сіз ізденімпаз оқушы болсаңыз да, тәжірибелі маман болсаңыз да,
                        біздің платформа сіздің бірегей оқу қажеттіліктеріңізді
                        қанағаттандыру үшін көптеген сабақтар мен ресурстарды ұсынады.
                    </p>

                    <div className="flex justify-center">
                        <div className="mr-2">
                            <BtnLinkPrimary href={"/"}>Нұсқаулық</BtnLinkPrimary>
                        </div>
                        <BtnLink href={"/accounts/register"}>Іске кірісу</BtnLink>
                    </div>
                </div>
            </div>

            {/* Why Choose */}
            {/* ===================================================================================== */}
            <div className="border-b">
                <div className="container mx-auto px-5 py-10 md:py-20">
                    <h1 className="text-2xl md:text-4xl font-bold text-center mb-5 md:mb-10">
                        Неліктен <span className="text-orange-400">OQU </span>
                        платформасын таңдауымыз керек?
                    </h1>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">

                        <div className="text-center shadow-xl rounded-xl p-5">
                            <SiReactquery className="text-4xl mx-auto text-orange-400" />
                            <h1 className="text-xl font-bold my-2">Теңдесі жоқ әртүрлілік</h1>
                            <span className="text-neutral-600">
                                Барлық ойластырылған тақырыптарды қамтитын курстардың
                                кең жинағын зерттеңіз. Озық технологиядан ескірмейтін
                                өнерге дейін бізде барлығына бір нәрсе бар.
                            </span>
                        </div>

                        <div className="text-center shadow-xl rounded-xl p-5">
                            <CiUser className="text-4xl mx-auto text-orange-400" />
                            <h1 className="text-xl font-bold my-2">Тәжірибелі эксперттер</h1>
                            <span className="text-neutral-600">
                                Үздіктерден үйреніңіз! Біздің арнайы таңдалған нұсқаушыларымыз
                                сала көшбасшылары, ынталы оқытушылар және өз салаларында шеберлер.
                            </span>
                        </div>
                        <div className="text-center shadow-xl rounded-xl p-5">
                            <CiGrid42 className="text-4xl mx-auto text-orange-400" />
                            <h1 className="text-xl font-bold my-2">Икемді оқыту</h1>
                            <span className="text-neutral-600">
                                Өмір қаныққан, бірақ сіздің оқуыңыз зардап шекпеуі керек.
                                Біздің платформа сіздің кестеңіз бойынша өз қарқыныңызбен
                                оқуға мүмкіндік береді.
                            </span>
                        </div>
                        <div className="text-center shadow-xl rounded-xl p-5">
                            <CiGrid41 className="text-4xl mx-auto text-orange-400" />
                            <h1 className="text-xl font-bold my-2">Толық ресурстар</h1>
                            <span className="text-neutral-600">
                                Ресурстар қазынасына сүңгіңіз-интерактивті викториналар,
                                практикалық тапсырмалар, жүктелетін материалдар және т.б.
                            </span>
                        </div>
                        <div className="text-center shadow-xl rounded-xl p-5">
                            <CiCircleChevUp className="text-4xl mx-auto text-orange-400" />
                            <h1 className="text-xl font-bold my-2">Біліктілікті арттыру</h1>
                            <span className="text-neutral-600">
                                Сіз жеке өсуге немесе кәсіби дамуға ұмтылатын болсаңыз!
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            {/* We Offer */}
            {/* ===================================================================================== */}
            <div className="border-b">
                <div className="container mx-auto py-10 md:py-20 px-5">
                    <h1 className="text-2xl md:text-4xl font-bold text-center mb-5 md:mb-10">
                        <span className="text-orange-400">OQU </span>
                        платформасы не ұсынады
                    </h1>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">

                        <div className="text-center shadow-xl rounded-xl p-5 bg-orange-400 text-white">
                            <CiTextAlignLeft className="text-4xl mx-auto " />
                            <h1 className="text-xl font-bold my-2">Жаңа әдістеме</h1>
                            <span className="text-neutral-100">
                                Барлық ойластырылған тақырыптарды қамтитын курстардың
                                кең жинағын зерттеңіз. Озық технологиядан ескірмейтін
                                өнерге дейін бізде барлығына бір нәрсе бар.
                            </span>
                        </div>

                        <div className="text-center shadow-xl rounded-xl p-5 bg-orange-400 text-white">
                            <CiCloudSun className="text-4xl mx-auto " />
                            <h1 className="text-xl font-bold my-2">Мүмкіндіктерді ашыңыз</h1>
                            <span className="text-neutral-100">
                                Барлық ойластырылған тақырыптарды қамтитын курстардың
                                кең жинағын зерттеңіз. Озық технологиядан ескірмейтін
                                өнерге дейін бізде барлығына бір нәрсе бар.
                            </span>
                        </div>

                        <div className="text-center shadow-xl rounded-xl p-5 bg-orange-400 text-white">
                            <CiViewList className="text-4xl mx-auto" />
                            <h1 className="text-xl font-bold my-2">Сертификаттау</h1>
                            <span className="text-neutral-100">
                                Барлық ойластырылған тақырыптарды қамтитын курстардың
                                кең жинағын зерттеңіз. Озық технологиядан ескірмейтін
                                өнерге дейін бізде барлығына бір нәрсе бар.
                            </span>
                        </div>

                        <div className="text-center shadow-xl rounded-xl p-5 bg-orange-400 text-white">
                            <CiCloudMoon className="text-4xl mx-auto " />
                            <h1 className="text-xl font-bold my-2">Үздіксіз оқыту</h1>
                            <span className="text-neutral-100">
                                Барлық ойластырылған тақырыптарды қамтитын курстардың
                                кең жинағын зерттеңіз.
                            </span>
                        </div>

                        <div className="text-center shadow-xl rounded-xl p-5 bg-orange-400 text-white">
                            <CiPhone className="text-4xl mx-auto " />
                            <h1 className="text-xl font-bold my-2">Кері байланыс</h1>
                            <span className="text-neutral-100">
                                Барлық ойластырылған тақырыптарды қамтитын курстардың
                                кең жинағын зерттеңіз. Озық технологиядан ескірмейтін
                                өнерге дейін бізде барлығына бір нәрсе бар.
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            {/* Join today */}
            {/* ===================================================================================== */}
            <div className="bg-neutral-50">
                <div className="max-w-2xl text-center mx-auto py-10 md:py-20 px-5">
                    <h1 className="text-2xl md:text-4xl font-bold text-center mb-5 md:mb-10">Қазірден бізге қосыл!</h1>
                    <p className="mb-5 md:mb-10 text-neutral-600">
                        Оқу, өсу және өркендеу мүмкіндігін пайдаланбай,
                        бір сәт өтуге жол бермеңіз.
                        <br />
                        Бүгін OQU платформасына қосыл және болашағыңды анықтайтын
                        қызықты оқиғаларды бастан өткіз. Сенің білім іздеуің осы жерден басталады.
                    </p>

                    <div className="flex justify-center">
                        <BtnLink href={"/accounts/register"}>Қазір бастау</BtnLink>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LandingComponent;
