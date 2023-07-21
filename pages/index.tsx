import React, { useEffect } from 'react';
import TweetMsg from '../components/TweetMessage';
import TweetInput from '../components/TweetInput';
import Title from '../components/Title';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import useMutation from '../lib/useMutation';


const fetcher = (url: string) => fetch(url).then((res) => res.json())
export default function Home() {
  const router = useRouter()
  const { data, error } = useSWR("/api/profile", fetcher)
  const { data: tweet } = useSWR("/api/post", fetcher)
  const [mutation, { data: posting, loading, error: postingError }] = useMutation("/api/post")

  const onTweet = () => {
    mutation(data)

  }
  useEffect(() => {
    if (error) {
      router.replace("/log-in")
    }

  }, [error])


  return (
    <div className='pt-10 bg-gradient-to-br'>
      <Title nickname={data?.profile.name} />
      <div className='bg-white min-h-screen rounded-t-3xl py-3 px-7'>
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <TweetMsg index={i} key={i} profile={data?.profile} />
        ))}
      </div>
      <TweetInput />
    </div>
  );
}

