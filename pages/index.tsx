import { useEffect } from 'react';
import TweetMsg from '../components/TweetMessage';
import TweetInput from '../components/TweetInput';
import Title from '../components/Title';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { TweetMsgType, TweetType, TweetUser, TweetsType } from '../type/type';




export default function Home() {
  const router = useRouter()
  const { data, error } = useSWR("/api/profile")
  const { data: tweetMsg } = useSWR<TweetsType>("/api/post")

  useEffect(() => {
    if (error) {
      router.replace("/log-in")
    }

  }, [error])

  return (
    <div className='pt-10 bg-gradient-to-br'>
      <Title nickname={data?.profile.name} />
      <div className='bg-white min-h-screen rounded-t-3xl py-3 px-7'>
        {tweetMsg?.tweets?.toReversed().map((tweet: TweetType) => (
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

