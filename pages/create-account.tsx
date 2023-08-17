import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Input from "../components/Input";
import { FormValue } from "../type/type";
import MainBtn from "../components/button/MainBtn";
import XButton from "../components/button/XButton";
import useMutation from "../lib/useMutation";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";
import tweety from '../image/create.png'
import Image from "next/image";


export default function Create() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValue>({ mode: 'onBlur' })
    const [mutation, { loading, data }] = useMutation("/api/create-account")
    const router = useRouter()
    const onSignUp = async (validForm: FormValue) => {
        if (loading) return;
        mutation(validForm)

    }
    useEffect(() => {
        if (data?.status === 201) {
            toast.success(data?.message)
            router.push("/log-in")
        }
        if (data?.status === 400) {
            toast.error(data?.message)
        }
    }, [data])


    return (
        <div className='pt-16 bg-gradient-to-br overflow-hidden'>
            < div className='bg-white w-full  animatecss animatecss-fadeInUp rounded-t-3xl flex flex-col space-y-1 items-center justify-center h-[683px] relative' >
                <h2 className="font-extrabold text-5xl mt-16 text-[#4286f4]">Create an account</h2>
                <div className="w-32  m-auto">
                    <Image src={tweety} alt="tweety" />
                </div>
                <form onSubmit={handleSubmit(onSignUp)} className="w-[90%] flex flex-col space-y-2">
                    <Input title="name" type="text" register={register} formName="name" errors={errors} />
                    <Input title="email" type="email" register={register} formName="email" errors={errors} />
                    <Input title="password" type="password" register={register} formName="password" errors={errors} required={true} />
                    <MainBtn title="Sign Up" loading={loading} />
                </form>
                <XButton page="/log-in" position="top-[20px]" />
            </div >
            <div><Toaster /></div>
        </div >
    );
}

