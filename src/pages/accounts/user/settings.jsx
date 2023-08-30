import UserAccountLayout from "@/src/layouts/user";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";


const UserSettings = () => {
    const router = useRouter();
    const user = useSelector(state => state.auth.user)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    if (typeof window !== 'undefined' && !isAuthenticated) {
        router.push('/accounts/login')
    }

    const settings = [0, 1, 2, 3, 4]

    return (
        <UserAccountLayout
            title={"Баптаулар"}
        >
            {(isAuthenticated && user) &&
                <div>
                    <div className="mb-5 md:mb-10">
                        <h1 className="text-4xl md:text-6xl font-bold">Баптаулар</h1>
                    </div>

                    <div>
                        {settings.map(item => {
                            return (
                                <div className="flex items-center border-b py-4" key={item}>
                                    <div className="flex items-center h-5">
                                        <input
                                            id="checkbox-id"
                                            type="checkbox"
                                            className="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded-lg"
                                        />
                                    </div>
                                    <div className="ml-4 text-sm">
                                        <h1 htmlFor="checkbox-id" className="font-bold text-base">Free shipping via Flowbite</h1>
                                        <span className="text-neutral-600">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio alias sed eaque vel illum sequi dolorum at saepe maiores obcaecati, sint placeat quas fuga vero quam odio deleniti aut labore.
                                        </span>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                </div>
            }
        </UserAccountLayout>
    )
}

export default UserSettings;