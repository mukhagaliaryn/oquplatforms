import React from "react";
import { IoSchoolSharp } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import { getDirectionType } from "@/src/utils/get";
import Image from "next/image";


const Institution = (props) => {
    const { class_group, official_student, user } = props;

    return (
        <React.Fragment>
            {class_group.institution.inst_type === "SCHOOL" ?
                <div className="h-20 border-b flex justify-center lg:justify-between items-center">
                    <div className="flex items-center">
                        {class_group.institution.image ?
                            <Image
                                src={class_group.institution.image} width={100} height={100} alt="Image"
                                className="w-10 h-10"
                            />
                            :
                            <IoSchoolSharp className="text-4xl" />
                        }
                        <div className="mx-4">
                            <h1 className="font-bold line-clamp-1">{class_group.institution.name}</h1>
                            <span className="text-neutral-600 text-sm">{getDirectionType(class_group.institution.direction)}</span>
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
                :
                <div className="h-20 border-b flex justify-center lg:justify-between items-center">
                    <div className="flex items-center">
                        {class_group.institution.image ?
                            <Image
                                src={class_group.institution.image} width={48} height={48} alt="Image"
                                className="rounded-full"
                            />
                            :
                            <IoSchoolSharp className="text-4xl" />
                        }
                        <div className="mx-4">
                            <h1 className="font-bold line-clamp-1">{class_group.institution.name}</h1>
                            <span className="text-neutral-600 text-sm">{getDirectionType(class_group.institution.direction)}</span>
                        </div>
                        {official_student &&
                            <CiCircleCheck className="block lg:hidden text-green-500 text-2xl" />
                        }
                    </div>

                    <div className="hidden lg:block">
                        <h1 className="font-bold">Білім алушы</h1>
                        <span className="text-neutral-600 text-sm">{user.first_name} {user.last_name}</span>
                    </div>

                    <div className="hidden lg:block">
                        <h1 className="font-bold">Тобы</h1>
                        <span className="text-neutral-600 text-sm">{class_group.name}</span>
                    </div>

                    <div className="hidden lg:block">
                        <h1 className="font-bold">Топ кураторы</h1>
                        <span className="text-neutral-600 text-sm">{class_group.teacher.first_name} {class_group.teacher.last_name}</span>
                    </div>

                    <div className="hidden lg:block">
                        <h1 className="font-bold">Статус</h1>
                        {official_student &&
                            <div className="flex items-center">
                                <CiCircleCheck className="mr-1 text-green-500" />
                                <span className="text-neutral-600 text-sm">Ресми қатысушы</span>
                            </div>
                        }
                    </div>
                </div>
            }
        </React.Fragment>

    )
}

export default Institution;