import { useRouter } from "next/router";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { FormValue } from "../type/type";
import MainBtn from "../components/button/MainBtn";
import useMutation from "../lib/useMutation";
import Image from "next/image";
import tweety from '../image/main.png'
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";


export default function LogIn() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValue>()
    const [mutation, { loading, data }] = useMutation("/api/login")
    const router = useRouter()
    const onCreatePage = () => {
        router.push("/create-account")
    }
    const onLogIn = async (validForm: FormValue) => {
        if (loading) return;
        await mutation(validForm)

    }


    useEffect(() => {
        if (data?.status === 200) {
            toast.success('Welcome to Tweety!')
            setTimeout(() => {
                router.replace("/")
            }, 1000)
        }
        if (data?.status === 404) {
            toast.error(data?.message)

        }
        if (data?.status === 401) {
            toast.error(data?.message)

        }
    }, [data])

    return (

        <div className=' flex flex-col space-y-5 items-center justify-center pt-10 h-[900px] bg-gradient-to-b from-[#fffc00] to-[#ffffff]'>
            <h1 className="text-[#4286f4] font-title text-8xl font-semibold animatecss animate-bounce animatecss-repeat-1"><Link href={"/"}>tweety</Link></h1>
            <Image src={tweety} alt="tweety" width={200} height={200} />
            <form onSubmit={handleSubmit(onLogIn)} className=" w-[90%] flex flex-col space-y-2" method="POST">
                <Input title="email" type="email" register={register} formName="email" errors={errors} />
                <Input title="password" type="password" register={register} formName="password" errors={errors} required={true} />
                <MainBtn title="Log in" loading={loading} />
            </form>
            <button onClick={onCreatePage} className="text-[#4286f4] hover:underline">Create Account</button>
            <div><Toaster /></div>
        </div>
    );
}

