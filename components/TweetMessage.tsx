import Link from 'next/link';
import Profile from './Profile';
import { TweetMsgType } from '../type/type';
import dateInvert from '../lib/dateInvert';
import lineBreak from '../lib/lineBreak';



export default function TweetMsg({ index, profile, content, date, liked, answer, tweetImage }: TweetMsgType) {

    return (
        <div className='border-b my-3  p-6 rounded-3xl last:border-b-0 relative hover:bg-yellow-100'>
            <Link href={`/tweet/${index}`}>
                <div className='space-x-16 cursor-pointer'>
                    <Profile name={profile?.name} email={profile?.email} avatarUrl={profile?.avatarUrl} />
                    {lineBreak(content)}
                    <div className='text-xs top-4 right-4 absolute '>{dateInvert(date)}</div>
                    {tweetImage ? <img className="w-20 h-20 shadow-md mt-5" alt={`${content} 이미지`} src={`https://imagedelivery.net/AknRL7Jzvc4BH3-QpgQFyQ/${tweetImage}/public`} /> : null}
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

