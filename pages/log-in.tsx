import { useRouter } from "next/router";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { FormValue } from "../type/type";
import MainBtn from "../components/button/MainBtn";
import useMutation from "../lib/useMutation";
import Image from "next/image";
import twity from '../image/twity.png'
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "../components/modal";


export default function LogIn() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValue>()
    const [modal, setModal] = useState(false)
    const [mutation, { loading, data }] = useMutation("/api/login")
    const router = useRouter()
    const onCreatePage = () => {
        router.push("/create-account")

    }
    const onLogIn = (validForm: FormValue) => {
        mutation(validForm)
    }

    useEffect(() => {
        if (data?.status === 200) setModal(true)
    }, [data])



    return (
        <div className=' flex flex-col space-y-5 items-center justify-center pt-10 min-h-screen bg-gradient-to-b from-[#fffc00] to-[#ffffff]'>
            <h1 className="text-[#4286f4] font-title text-8xl font-semibold"><Link href={"/"}>tweety</Link></h1>
            <Image src={twity} alt="twity" width={200} height={200} />
            <form onSubmit={handleSubmit(onLogIn)} className=" w-[90%] flex flex-col space-y-3">
                <Input title="email" type="email" register={register} formName="email" errors={errors} />
                <Input title="password" type="password" register={register} formName="password" errors={errors} />
                <MainBtn title="Log in" loading={loading} />
            </form>
            <span className="text-sm text-red-500">{data?.message}</span>
            <button onClick={onCreatePage} className="text-[#4286f4] hover:underline">Create Account</button>
            {modal ?
                <Modal movePage="/" message="Welcome to tweety!" setModal={setModal} /> : null}
        </div>
    );
}

