import useMutation from "../../lib/useMutation";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import XButton from "../../components/button/XButton";
import MainBtn from "../../components/button/MainBtn";
import { FormValue } from "../../type/type";
import { useEffect } from "react";
import useUser from "../../lib/useUser";

export default function index() {
    const { register, handleSubmit, setValue } = useForm<FormValue>()
    const [mutation] = useMutation("/api/logout")
    const [data] = useUser();
    const router = useRouter()
    const onLogOut = () => {
        toast('bye bye!', {
            icon: '👋',
        });
        mutation(data)
        router.push("/log-in")
    }
    const onEditPage = () => {
        router.push({
            pathname: "/my-page/edit",
        })
    }

    useEffect(() => {
        if (data) {
            setValue("name", data.profile?.name)
            setValue("email", data.profile?.email)
            setValue("avatar", data.profile?.avatarUrl)
        }
    }, [data]);


    return (
        <div className='pt-16 bg-gradient-to-br overflow-hidden'>
            < div className='bg-white w-full  animatecss animatecss-fadeInUp rounded-t-3xl flex flex-col space-y-12 items-center justify-center h-[683px] relative' >
                <h2 className="font-extrabold text-5xl text-[#4286f4]">My Profile</h2>
                <XButton page="/" position="top-[-20px]" />
                {data?.profile?.avatarUrl ? <img className="rounded-full w-20 h-20 shadow-md" alt={`${data?.profile.name}의 프로필 이미지`} src={`https://imagedelivery.net/AknRL7Jzvc4BH3-QpgQFyQ/${data?.profile.avatarUrl}/public`} /> :
                    <div className='bg-yellow-200 rounded-full w-20 h-20 shadow-md' />}
                <form onSubmit={handleSubmit(onEditPage)} className="w-[90%] flex flex-col space-y-4">
                    <label htmlFor="email" className="sr-only">email</label>
                    <input id="email" {...register("email")} className="h-12 rounded-full border focus:outline-none pl-5 text-gray-500 " disabled />
                    <label htmlFor="name" className="sr-only">name</label>
                    <input id="name" {...register("name")} className="h-12 rounded-full border focus:outline-none pl-5 text-gray-500 " disabled />
                    <MainBtn title="Profile Edit" />
                </form>
                <button onClick={onLogOut} className="text-[#4286f4] hover:underline">Log out</button>
            </div >
            <div><Toaster /></div>
        </div >

    );
}

