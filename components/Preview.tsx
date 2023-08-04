
import { useEffect, useState } from 'react';
import { PreviewType } from '../type/type';

export default function Preview({ register, avatar, user }: PreviewType) {
    const [avatarPreview, setAvatarPreview] = useState("")
    console.log(user)
    useEffect(() => {
        setAvatarPreview(`https://imagedelivery.net/AknRL7Jzvc4BH3-QpgQFyQ/${user?.avatarUrl}/public`)
    }, [user])

    useEffect(() => {

        if (avatar && avatar.length > 0) {
            setAvatarPreview(URL.createObjectURL(avatar[0]))
        }


    }, [avatar])

    return (
        <>
            <label htmlFor="avatar" className="cursor-pointer" >
                <div className="flex justify-center items-center flex-col space-y-2  px-10 py-5">
                    <div className='bg-yellow-200  rounded-full w-20 h-20 shadow-md relative text-center' >

                        {avatarPreview ? <img src={avatarPreview} className="rounded-full w-20 h-20 absolute" /> : null}
                        <div className="text-xs flex items-center rounded-full w-20 h-20 opacity-0 text-white duration-300 bg-opacity-30 bg-slate-500  hover:opacity-100 z-20 hover:transition-all">Avatar Change</div>
                    </div>
                    <span>Preview</span>
                </div>
            </label>
            <input hidden {...register("avatar")} id="avatar" accept="image/*" className="h-12 rounded-md  border focus:outline-none pl-3 text-[#4286f4] " placeholder="name" type="file" />
        </>
    );
}

