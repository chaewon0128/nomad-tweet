import Link from 'next/link';

import Profile from './Profile';
import { TweetMsgType } from '../type/type';



export default function TweetMsg({ index, profile, content, date, name, email }: TweetMsgType) {

    return (
        <div className='border-b mt-6 pb-4 last:border-b-0'>
            <Link href={`/tweet/${index}`}>
                <div className='space-x-16 cursor-pointer'>
                    <Profile name={name} email={email} avatarUrl={profile?.avatarUrl} />
                    <p className=''>{content}</p>
                    <div className='text-right text-sm mt-4'>{date.slice(0, 10)}</div>
                </div>
            </Link>
        </div>
    );
}

