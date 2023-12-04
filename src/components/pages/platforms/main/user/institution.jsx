import React from "react";
import { IoSchoolSharp } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import Image from "next/image";


const Institution = (props) => {
    const { class_group, official_student, user } = props;

    return (
        <React.Fragment>
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
                        <span className="text-neutral-600 text-sm">{class_group.institution.direction.name}</span>
                    </div>
                    {official_student &&
                        <CiCircleCheck className="block lg:hidden text-green-500 text-2xl" />
                    }
                </div>

                <div className="hidden lg:block">
                    <h1 className="font-bold">Білім алушы</h1>
                    <span className="text-neutral-600 text-sm">{user.full_name}</span>
                </div>

                <div className="hidden lg:block">
                    <h1 className="font-bold">Тобы</h1>
                    <span className="text-neutral-600 text-sm">{class_group.name}</span>
                </div>

                <div className="hidden lg:block">
                    <h1 className="font-bold">Топ кураторы</h1>
                    <span className="text-neutral-600 text-sm">{class_group.teacher.full_name}</span>
                </div>

                <div className="hidden lg:block">
                    <h1 className="font-bold">Статус</h1>
                    {official_student &&
                        <div className="flex items-center">
                            <CiCircleCheck className="mr-1 text-green-500" />
                            <span className="text-neutral-600 text-sm">Ресми білім алушы</span>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>

    )
}

export default Institution;