import React from "react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from "next/link";
import { IoExitOutline } from "react-icons/io5";
import Image from "next/image";


const Dropdown = ({user, logoutHandler, }) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <div className="cursor-pointer" title={user && user.full_name}>
                    {user &&
                        <Image src={user.image ? user.image : "/icons/user.png"} width={300} height={300} className="w-10 h-10 border-2 p-1 border-orange-400 rounded-full" alt="image" />
                    }
                </div>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content className="absolute right-[-24px] mt-2 w-48 bg-white shadow-xl rounded-xl overflow-hidden">
                <DropdownMenu.Item className="outline-none">
                    <Link
                        href={"/accounts/user"}
                        className="block text-neutral-600 px-4 py-2 border-b hover:bg-orange-100"
                    >Аккаунт</Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="outline-none">
                    <Link
                        href={"/accounts/user/settings"}
                        className="block text-neutral-600 px-4 py-2 border-b hover:bg-orange-100"
                    >Баптаулар</Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item
                    onClick={logoutHandler}
                    className="px-4 py-2 border-b flex items-center cursor-pointer outline-none hover:bg-orange-100"
                >
                    <div className="text-xl text-neutral-500 mr-2">
                        <IoExitOutline className="text-2xl" />
                    </div>
                    <span className="text-neutral-600">Жүйеден шығу</span>
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}

export default Dropdown;