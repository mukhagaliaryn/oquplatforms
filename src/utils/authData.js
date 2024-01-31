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
            },
            {
                type: "password",
                name: "password",
                placeholder: "Abcdfg123$",
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
            },
            {
                type: "text",
                name: "full_name",
                placeholder: "Есімің",
            },
            {
                type: "password",
                name: "password",
                placeholder: "Abcdfg123$",
            },
            {
                type: "password",
                name: "re_password",
                placeholder: "Парольді қайталау",
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