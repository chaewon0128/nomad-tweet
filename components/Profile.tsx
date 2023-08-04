import emailToId from "../lib/emailToId";
import { ProfileType } from "../type/type";
import Image from "next/image";



export default function Profile({ name, email, avatarUrl }: ProfileType) {


    return (
        <div className="flex space-x-3 items-start">
            <div className='bg-yellow-200 rounded-full w-14 h-14 shadow-md'>
                {avatarUrl ? <img className="rounded-full w-14 h-14 shadow-md" src={`https://imagedelivery.net/AknRL7Jzvc4BH3-QpgQFyQ/${avatarUrl}/public`} /> :
                    <div className='bg-yellow-200 rounded-full w-14 h-14 shadow-md' />}
            </div>
            <div className='w-[80%] flex flex-col'>
                <span className='text-xl font-semibold inline-block mr-2'>{name}</span>
                <span className="text-sm inline-block text-gray-500">{emailToId(email)}</span>
            </div>

        </div>
    );
}

