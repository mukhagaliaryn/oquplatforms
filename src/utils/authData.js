import { PiPasswordLight, PiUserLight } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

export const authData = [
    {
        id: 0,
        auth_type: "login",
        title: "Жүйеге кіру",
        fields: [
            {
                type: "email",
                name: "email",
                placeholder: "example@gmail.com",
                get_icon: () => <TfiEmail />
            },
            {
                type: "password",
                name: "password",
                placeholder: "Abcdfg123$",
                get_icon: () => <PiPasswordLight />
            },
        ],
        submit: {
            label: "Кіру"
        },
        links: [
            {id: 1, label: "Регистрация"},
            {id: 2, label: "Парольді қалпына келтіру"},
        ]
    },
    {
        id: 1,
        auth_type: "register",
        title: "Регистрация",
        fields: [
            {
                type: "email",
                name: "email",
                placeholder: "example@gmail.com",
                get_icon: () => <TfiEmail />
            },
            {
                type: "text",
                name: "full_name",
                placeholder: "Есімің",
                get_icon: () => <PiUserLight />
            },
            {
                type: "password",
                name: "password",
                placeholder: "Abcdfg123$",
                get_icon: () => <PiPasswordLight />
            },
            {
                type: "password",
                name: "re_password",
                placeholder: "Парольді қайталау",
                get_icon: () => <PiPasswordLight />
            },
        ],
        submit: {
            label: "Регистрация"
        },
        links: [
            {id: 0, label: "Жүйеге кіру"},
            {id: 2, label: "Парольді қалпына келтіру"},
        ]
    },
    {
        id: 2,
        auth_type: "password-reset",
        title: "Парольді қалпына келтіру",
        fields: [
            {
                type: "email",
                name: "email",
                placeholder: "example@gmail.com",
                get_icon: () => <TfiEmail />
            },
        ],
        submit: {
            label: "Жіберу"
        },
        links: [
            {id: 0, label: "Жүйеге кіру"},
            {id: 1, label: "Регистрация"},
        ]
    },
]