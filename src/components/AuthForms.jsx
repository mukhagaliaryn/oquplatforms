import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const AuthForm = (props) => {

    const schema = yup.object().shape({
        email: yup.string()
            .email('Электрондық пошта @ белгісі болуы керек')
            // .notOneOf(emailList, 'Электронная почта уже существует')
            .required('Электрондық пошта қажет')
            .max(32, "Максимум 32 символ"),
        password: yup.string()
            .required('Парольді енгізу қажет')
            .min(8, 'Пароль 8 немесе одан да көп таңбадан тұруы керек')
    });

    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        // if (dispatch && dispatch !== null && dispatch !== undefined) {
        //     dispatch(login(data.email, data.password));
        // }
        alert(JSON.stringify(data))
    };

    return (
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            {auth.fields.map((field, i) => (
                <div className="relative" key={i}>
                    <input
                        {...register(field.name)}
                        type={field.type} placeholder={field.placeholder}
                        className="pl-4 pr-10 py-2 border text-neutral-900 border-neutral-200 rounded-md outline-none w-full text-sm transition-all focus:border-b-blue-500 focus:shadow focus:bg-white"
                    />
                    <div className="absolute top-3 right-4 text-neutral-500">
                        {field.get_icon()}
                    </div>
                </div>
            ))}
            <div className="relative">
                <button className="bg-neutral-900 w-full px-6 py-2 text-sm font-medium text-white rounded-md transition-all border border-neutral-900 hover:bg-transparent hover:text-neutral-900 active:scale-95">
                    {auth.submit.label}
                </button>
            </div>
        </form>
    )
}


export default AuthForm;