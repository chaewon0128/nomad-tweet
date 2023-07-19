import { useRouter } from "next/router";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { FormValue } from "../type/type";
import MainBtn from "../components/button/MainBtn";
import useMutation from "../lib/useMutation";
import Image from "next/image";
import twity from '../image/twity.png'


export default function LogIn() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValue>()
    const [mutation, { loading, data, error }] = useMutation("/api/login")
    const router = useRouter()
    const onCreatePage = () => {
        router.push("/create-account")
    }
    const onLogIn = (validForm: FormValue) => {
        mutation(validForm)
    }
    return (
        <div className=' flex flex-col space-y-5 items-center justify-center pt-10 min-h-screen bg-gradient-to-r from-[#373B44] to-[#4286f4]'>
            <Image src={twity} alt="twity" width={250} height={250} />
            <form onSubmit={handleSubmit(onLogIn)} className=" w-[90%] flex flex-col space-y-3">
                <Input title="email" type="email" register={register} formName="email" errors={errors} />
                <Input title="password" type="password" register={register} formName="password" errors={errors} />
                <MainBtn title="Log in" />
            </form>

            <button onClick={onCreatePage} className="text-white hover:underline">Create Account</button>
        </div>
    );
}

