import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";
import XButton from "../../components/button/XButton";
import MainBtn from "../../components/button/MainBtn";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormValue } from "../../type/type";
import Preview from "../../components/Preview";
import Input from "../../components/Input";
import useMutation from "../../lib/useMutation";
import useUser from "../../lib/useUser";

export default function Edit() {
    const [mutation, { loading }] = useMutation("/api/profile")
    const [error, data] = useUser();
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<FormValue>()
    const avatar = watch("avatar")


    useEffect(() => {
        if (data) {
            setValue("name", data.profile.name),
                setValue("email", data.profile.email)

        }
    }, [data]);




    const onEditPage = async ({ name, email, password, avatar }: FormValue) => {
        if (avatar && avatar.length > 0 && data.profile.id) {
            const { uploadURL } = await (await fetch("/api/files")).json()

            const form = new FormData()
            form.append("file", avatar[0], data?.profile.id + "")
            const { result: { id } } = await (await fetch(uploadURL, {
                method: "POST",
                body: form
            })).json()

            mutation({
                name,
                email,
                password,
                avatarId: id
            })
        }
        if (loading) {
            toast.loading("loading...")
        } else {
            toast.success("회원정보가 수정 되었습니다")
            router.push("/my-page")
        }

    }
    return (
        <div className='pt-20 bg-gradient-to-br'>
            < div className='bg-white w-full  animatecss animatecss-fadeInUp rounded-t-3xl flex flex-col space-y-12 items-center justify-center h-[683px] relative' >
                <h2 className="font-extrabold text-5xl mt-16 text-[#4286f4]">My Profile</h2>
                <XButton page="/" position="top-[-20px]" />
                <form onSubmit={handleSubmit(onEditPage)} className="w-[90%] flex flex-col space-y-3">
                    <Preview register={register} avatar={avatar} user={data?.profile} />
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

