import emailToId from "../lib/emailToId";
import { ProfileType } from "../type/type";
import Image from "next/image";
import profileImg from '../image/profile.png'


export default function Profile({ name, email, avatarUrl }: ProfileType) {
    return (
        <div className="flex space-x-3 items-start">
            <div className='bg-yellow-200 rounded-full w-14 h-14 shadow-md'>
                <Image src={profileImg} alt="profile" width={300} height={300} />
            </div>
            <div className='w-[80%] flex flex-col'>
                <span className='text-xl font-semibold inline-block mr-2'>{name}</span>
                <span className="text-sm inline-block">{emailToId(email)}</span>
            </div>

        </div>
    );
}

