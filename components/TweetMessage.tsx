import Link from 'next/link';
import Profile from './Profile';
import { TweetMsgType } from '../type/type';
import dateInvert from '../lib/dateInvert';



export default function TweetMsg({ index, profile, content, date, liked, answer }: TweetMsgType) {


    return (
        <div className='border-b my-3  p-6 rounded-3xl last:border-b-0 relative hover:bg-yellow-100'>
            <Link href={`/tweet/${index}`}>
                <div className='space-x-16 cursor-pointer'>
                    <Profile name={profile?.name} email={profile?.email} avatarUrl={profile?.avatarUrl} />
                    <p >{content}</p>
                    <div className='text-xs top-4 right-4 absolute '>{dateInvert(date)}</div>
                    <div className='text-right text-xs'>
                        <span>
                            {`💗 ${liked}`}
                        </span>
                        <span className='ml-3'>{`💬 ${answer}`}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

