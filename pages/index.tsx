import { useEffect } from 'react';
import TweetMsg from '../components/TweetMessage';
import TweetInput from '../components/TweetInput';
import Title from '../components/Title';
import useSWR from 'swr';
import { TweetType, TweetsType } from '../type/type';
import useUser from '../lib/useUser';


export default function Home() {
  const { data, isValidating } = useSWR("/api/profile")
  const { data: tweetMsg, mutate, isValidating: isLoading } = useSWR<TweetsType>("/api/post")
  const error = useUser();

  useEffect(() => {
    if (!isLoading) mutate();
  }, [isLoading]);


  return (
    <div className='pt-10 bg-gradient-to-br'>
      <Title nickname={data?.profile?.name} isLoading={isValidating} />
      <div className='bg-white w-full rounded-t-3xl py-3 px-7 animatecss animatecss-fadeInUp '>
        {tweetMsg?.tweets?.sort((a: TweetType, b: TweetType) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((tweet: TweetType) => (
          <TweetMsg
            key={tweet.id}
            index={tweet.id}
            profile={data?.profile}
            date={tweet.createdAt}
            liked={tweet.liked}
            name={tweet.user.name}
            email={tweet.user.email}
            content={tweet.content}
          />
        ))}
      </div>
      <TweetInput />
    </div>
  );
}

