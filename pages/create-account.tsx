import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import { FormValue } from "../type/type";
import MainBtn from "../components/button/MainBtn";
import Preview from "../components/Preview";
import XButton from "../components/button/XButton";
import useMutation from "../lib/useMutation";
import { useRouter } from "next/router";



export default function Create() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValue>()
    const [mutation, { loading, error, data }] = useMutation("/api/create-account")
    const [modal, setModal] = useState(false)
    const router = useRouter()
    const [avatarPreview, setAvatarPreview] = useState("")
    const avatar = watch("avatar")
    const onSignUp = async (validForm: FormValue) => {
        mutation(validForm)
        console.log(data)

    }
    const onLoginPage = () => { router.push("/log-in") }
    useEffect(() => {
        if (avatar && avatar.length > 0) {
            setAvatarPreview(URL.createObjectURL(avatar[0]))
        }
        if (data?.ok) {
            setModal(true)
        }

    }, [avatar, modal])


    return (
        <div className='pt-20 min-h-screen bg-gradient-to-br'>
            < div className='bg-white w-full rounded-t-3xl flex flex-col space-y-12 items-center justify-center h-[683px] relative' >
                <h1 className="font-extrabold text-5xl text-[#4286f4]">Create an account</h1>
                <form onSubmit={handleSubmit(onSignUp)} className="w-[90%] flex flex-col space-y-3">
                    <Preview register={register} avatarPreview={avatarPreview} />
                    <Input title="name" type="text" register={register} formName="name" errors={errors} />
                    <Input title="email" type="email" register={register} formName="email" errors={errors} />
                    <Input title="password" type="password" register={register} formName="password" errors={errors} />
                    <MainBtn title="Sign Up" loading={loading} />
                    <span className="text-sm text-red-500">{data?.message}</span>
                </form>
                <XButton page="/log-in" position="top-0" />
                {modal ?
                    <div className="absolute w-[350px] text-center py-10 rounded-3xl top-[25%] bg-white border">
                        <p>Welcome to tweety!</p>
                        <button className="bg-[#4286f4] inline-block w-20 rounded-md mt-5 py-1 text-white" onClick={onLoginPage}>확인</button>
                    </div> : null}
            </div >
        </div >
    );
}

