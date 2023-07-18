import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";



export default function Create() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [avatarPreview, setAvatarPreview] = useState("")
    const avatar = watch("avatar")
    const onSignUp = (data: any) => {


    }

    useEffect(() => {
        if (avatar && avatar.length > 0) {
            setAvatarPreview(URL.createObjectURL(avatar[0]))
        }

    }, [avatar])


    return (
        <div className='pt-20 min-h-screen bg-gradient-to-r from-[#373B44] to-[#4286f4]'>

            < div className='bg-white w-full rounded-t-3xl flex flex-col space-y-12 items-center justify-center h-[683px]' >
                <h1 className="font-extrabold text-5xl text-[#4286f4]">Create an account</h1>
                <form onSubmit={handleSubmit(onSignUp)} className=" w-[90%] flex flex-col space-y-6">
                    <label htmlFor="avatar" className="cursor-pointer" >
                        <div className="flex justify-center items-center flex-col space-y-2  px-10 py-5">
                            <div className='bg-red-300 rounded-full w-16 h-16 shadow-md relative text-center' >
                                <img src={avatarPreview} className="rounded-full w-16 h-16 absolute" />
                                <div className="text-xs flex items-center rounded-full w-16 h-16 opacity-0 text-white duration-300 bg-opacity-30 bg-slate-500  hover:opacity-100 z-20 hover:transition-all">Avatar Change</div>
                            </div>
                            <span>Preview</span>
                        </div>
                    </label>
                    <input hidden {...register("avatar")} id="avatar" accept="image/*" className="h-12 rounded-md  border focus:outline-none pl-3 text-[#4286f4] " placeholder="name" type="file" />

                    <label className="sr-only" htmlFor="name">name</label>
                    <input {...register("name", {
                        required: "필수 입력 항목 입니다"
                    })} id="name" className="h-12 rounded-md  border focus:outline-none pl-3 text-[#4286f4] " placeholder="name" type="text" />
                    <label className="sr-only" htmlFor="email">email</label>
                    <input  {...register("email", {
                        required: "필수 입력 항목 입니다"
                    })} id="email" className="h-12 rounded-md border  focus:outline-none pl-3 text-[#4286f4]" placeholder="email" type="email" />
                    <label className="sr-only" htmlFor="password">email</label>
                    <input {...register("password", {
                        required: "필수 입력 항목 입니다",
                        minLength: {
                            value: 8,
                            message: "8자리 이상 입력하세요"
                        }
                    })} id="password" className="h-12 rounded-md border focus:outline-none pl-3 text-[#4286f4]" placeholder="password" type="password" />

                    <button className="text-white bg-[#4286f4] h-12 rounded-full">Sign Up</button>
                </form>

            </div >
        </div >
    );
}

