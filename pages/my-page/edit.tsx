import useSWR from "swr";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";
import XButton from "../../components/button/XButton";
import MainBtn from "../../components/button/MainBtn";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormValue } from "../../type/type";
import Preview from "../../components/Preview";
import Input from "../../components/Input";
import useMutation from "../../lib/useMutation";

export default function index() {
    const [mutation, { loading, data }] = useMutation("/api/profile")
    const [avatarPreview, setAvatarPreview] = useState("")
    const { data: profileData } = useSWR("/api/profile")
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<FormValue>()
    const avatar = watch("avatar")

    useEffect(() => {
        if (avatar && avatar.length > 0) {
            setAvatarPreview(URL.createObjectURL(avatar[0]))
        }
    }, [avatar])


    useEffect(() => {
        if (profileData) {
            setValue("name", profileData.profile.name),
                setValue("email", profileData.profile.email)
        }
    }, [profileData]);

    console.log(profileData)

    const onEditPage = async (editForm: FormValue) => {
        mutation(editForm)
        // if (data?.status === 201) {
        //     toast.success(data?.message)
        //     router.push("/my-page")
        // }
        // if (data?.status === 400) {
        //     toast.error(data?.message)
        // }
    }
    return (
        <div className='pt-20 bg-gradient-to-br'>
            < div className='bg-white w-full  animatecss animatecss-fadeInUp rounded-t-3xl flex flex-col space-y-12 items-center justify-center h-[683px] relative' >
                <h2 className="font-extrabold text-5xl mt-16 text-[#4286f4]">My Profile</h2>
                <XButton page="/" position="top-[-20px]" />
                <form onSubmit={handleSubmit(onEditPage)} className="w-[90%] flex flex-col space-y-3">
                    <Preview register={register} avatarPreview={avatarPreview} />
                    <input {...register("email")} className="h-12 rounded-full border focus:outline-none pl-5 text-gray-500 bg-gray-100" readOnly />
                    <input  {...register("name")} className="h-12 rounded-full border pl-5 text-gray-500 " />
                    <Input title="password" type="password" register={register} formName="password" errors={errors} required={false} />
                    <MainBtn title="Edit Confirm" />
                </form>
            </div >
            <div><Toaster /></div>
        </div >

    );
}

