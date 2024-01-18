import React, { useState } from "react";
import Image from "next/image";


const ProfileComponent = (props) => {
    const { user, user_products } = props;

    return (
        <div className="flex mt-5 md:mt-10">
            <div
                className="flex-1 rounded-xl xl:mr-5 2xl:mr-10 block md:flex">
                <div className="mb-5 md:mb-0 md:mr-5">
                    <Image
                        src={user.image ? user.image : "/icons/user.png"} width={512} height={512} alt="image"
                        className="w-48 h-48 mx-auto md:mx-0 rounded-full border-4 p-1 border-orange-400"
                        priority
                    />
                    <div className="text-center mt-2">
                        <h1 className="text-xl font-bold">{user.full_name}</h1>
                    </div>
                </div>

                <div className="md:ml-5 flex-1">
                    {user_products.map(user_product => {
                        return (
                            <div key={user_product.id} className="mb-5">
                                <h1 className="text-neutral-600 text-sm">{user_product.product.name} - {user_product.score}%</h1>
                                <div className="h-2 bg-neutral-100 rounded">
                                    <div className="h-full bg-orange-400 rounded" style={{ width: `${user_product.score}%` }}></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="rounded-xl xl:ml-5 2xl:ml-10 hidden lg:block">
            </div>
        </div>
    )
}

export default ProfileComponent;