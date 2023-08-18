import { useEffect } from 'react';
import TweetMsg from '../components/TweetMessage';
import TweetInput from '../components/TweetInput';
import Title from '../components/Title';
import useSWR from 'swr';
import { TweetType, TweetsType } from '../type/type';
import useUser from '../lib/useUser';



export default function Home() {
  const { data: tweetMsg, mutate } = useSWR<TweetsType>("/api/post")
  const [data, isValidating] = useUser();

  useEffect(() => {

    mutate();

  }, [tweetMsg]);


  return (
    <div className='pt-10 bg-gradient-to-br'>
      <Title nickname={data?.profile?.name} isLoading={isValidating} />
      <div className='bg-white w-full pb-16 rounded-t-3xl py-1 px-3 animatecss animatecss-fadeInUp '>
        {tweetMsg?.tweets?.sort((a: TweetType, b: TweetType) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((tweet: TweetType) => (
          <TweetMsg
            key={tweet.id}
            index={tweet.id}
            profile={tweet?.user}
            date={tweet.createdAt}
            liked={tweet._count.favorite}
            answer={tweet._count.answer}
            content={tweet.content}
            tweetImage={tweet.tweetImg}
          />
        ))}
      </div>
      <TweetInput />
    </div>
  );
}

