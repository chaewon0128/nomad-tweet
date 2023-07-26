import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import { FormValue } from "../type/type";
import MainBtn from "../components/button/MainBtn";
import Preview from "../components/Preview";
import XButton from "../components/button/XButton";
import useMutation from "../lib/useMutation";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";



export default function Create() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValue>()
    const [mutation, { loading, data }] = useMutation("/api/create-account")
    const [avatarPreview, setAvatarPreview] = useState("")
    const router = useRouter()
    const avatar = watch("avatar")
    const onSignUp = async (validForm: FormValue) => {
        if (loading) return;
        mutation(validForm)

        if (data?.status === 201) {
            toast.success(data?.message)
            router.push("/log-in")
        }
        if (data?.status === 400) {
            toast.error(data?.message)
        }

    }

    useEffect(() => {
        if (avatar && avatar.length > 0) {
            setAvatarPreview(URL.createObjectURL(avatar[0]))
        }


    }, [avatar])


    return (
        <div className='pt-20 min-h-screen bg-gradient-to-br'>
            < div className='bg-white w-full  animatecss animatecss-fadeInUp rounded-t-3xl flex flex-col space-y-12 items-center justify-center h-[683px] relative' >
                <h1 className="font-extrabold text-5xl text-[#4286f4]">Create an account</h1>
                <form onSubmit={handleSubmit(onSignUp)} className="w-[90%] flex flex-col space-y-3">
                    <Preview register={register} avatarPreview={avatarPreview} />
                    <Input title="name" type="text" register={register} formName="name" errors={errors} />
                    <Input title="email" type="email" register={register} formName="email" errors={errors} />
                    <Input title="password" type="password" register={register} formName="password" errors={errors} />
                    <MainBtn title="Sign Up" loading={loading} />
                </form>
                <XButton page="/log-in" position="top-[-20px]" />
                <div><Toaster /></div>
            </div >
        </div >
    );
}

