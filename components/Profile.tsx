import emailToId from "../lib/emailToId";
import { ProfileType } from "../type/type";



export default function Profile({ name, email, avatarUrl }: ProfileType) {
    return (
        <div className="flex space-x-3 items-start">
            <div className='bg-yellow-200 rounded-full w-14 h-14 shadow-md' />
            <div className='w-[80%] flex flex-col'>
                <span className='text-xl font-semibold inline-block mr-2'>{name}</span>
                <span className="text-sm inline-block">{emailToId(email)}</span>
            </div>

        </div>
    );
}

