import React, { useState } from "react";
import { DayPicker } from 'react-day-picker';
import { kk } from 'date-fns/locale';
import Card from "./Card";
import Image from "next/image";
import { IoSchoolSharp } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";


const MainComponent = (props) => {
    const { user, class_group, official_student } = props;
    const [selected, setSelected] = useState(new Date());
    const handleDayClick = day => {
        setSelected(day)
        // console.log(day)
    }

    return (
        <div className="container mx-auto my-5 md:my-10 px-5">
            {class_group &&
                <React.Fragment>
                    <div className="h-20 border-b flex justify-center lg:justify-between items-center">
                        <div className="flex items-center">
                            <IoSchoolSharp className="text-4xl" />
                            <div className="mx-4">
                                <h1 className="font-bold line-clamp-1">{class_group.institution.name}</h1>
                                {class_group.institution.school_view === "GENERAL" ?
                                    <span className="text-neutral-600 text-sm">Жалпы орта мектеп</span>
                                    : class_group.institution.school_view === "LYCEUM" ?
                                        <span className="text-neutral-600 text-sm">Лицей</span>
                                        :
                                        null
                                }
                            </div>
                            {official_student &&
                                <CiCircleCheck className="block lg:hidden text-green-500 text-2xl" />
                            }
                        </div>

                        <div className="hidden lg:block">
                            <h1 className="font-bold">Оқушы</h1>
                            <span className="text-neutral-600 text-sm">{user.first_name} {user.last_name}</span>
                        </div>

                        <div className="hidden lg:block">
                            <h1 className="font-bold">Сыныбы</h1>
                            <span className="text-neutral-600 text-sm">{class_group.name}</span>
                        </div>

                        <div className="hidden lg:block">
                            <h1 className="font-bold">Сынып жетекшісі</h1>
                            <span className="text-neutral-600 text-sm">{class_group.teacher.first_name} {class_group.teacher.last_name}</span>
                        </div>

                        <div className="hidden lg:block">
                            <h1 className="font-bold">Статус</h1>
                            {official_student &&
                                <div className="flex items-center">
                                    <CiCircleCheck className="mr-1 text-green-500" />
                                    <span className="text-neutral-600 text-sm">Ресми оқушы</span>
                                </div>
                            }
                        </div>
                    </div>

                    <div className="flex mt-5 md:mt-10">
                        <div
                            className="flex-1 rounded-xl xl:mr-5 2xl:mr-10 block md:flex cursor-pointer">
                            <div className="mb-5 md:mb-0 md:mr-5">
                                <Image
                                    src={user.image ? user.image : "/icons/user.png"} width={512} height={512} alt="image"
                                    className="w-48 h-48 mx-auto md:mx-0 rounded-full border-4 p-1 border-orange-400"
                                />
                                <div className="text-center mt-2">
                                    <h1 className="text-xl font-bold">{user.first_name} {user.last_name}</h1>
                                </div>
                            </div>

                            <div className="md:ml-5 flex-1">
                                {class_group.subjects.map(item => {
                                    return (
                                        <div key={item.id} className="mb-5">
                                            <h1 className="text-neutral-600 text-sm">{item.name} - {item.id}%</h1>
                                            <div className="h-2 bg-neutral-100 rounded">
                                                <div className="h-full bg-orange-400 rounded" style={{ width: `${item.id}%` }}></div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="rounded-xl xl:ml-5 2xl:ml-10 hidden lg:block">
                            <DayPicker
                                mode="single"
                                locale={kk}
                                selected={selected}
                                onDayClick={handleDayClick}
                            />
                        </div>
                    </div>

                    <div className="mt-10">
                        <h1 className="text-2xl font-bold ">Бағдарлама пәндері</h1>
                        <div className="grid gap-2 md:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 my-5">
                            {class_group.subjects.map(item => {
                                return (
                                    <Card item={item} key={item.id} />
                                )
                            })}
                        </div>
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

export default MainComponent;