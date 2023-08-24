import TweetMsg from '../components/TweetMessage';
import TweetInput from '../components/TweetInput';
import Title from '../components/Title';
import useSWR from 'swr';
import { TweetForm, TweetType, TweetsType } from '../type/type';
import useUser from '../lib/useUser';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import useMutation from '../lib/useMutation';



export default function Home() {
  const { data: tweetMsg, mutate } = useSWR<TweetsType>("/api/post")
  const { register, handleSubmit, reset, watch } = useForm<TweetForm>()
  const [data] = useUser();
  const [mutation, { data: tweetData, loading }] = useMutation("/api/post")
  const image = watch("tweetImg");
  const [tweetImage, setTweetImage] = useState("")
  const onTweet = async ({ Tweet }: TweetForm) => {
    if (loading) return;

    if (Tweet && Tweet.length > 0) {
      if (image && image.length > 0) {
        const { uploadURL } = await (await fetch("/api/files")).json()

        const form = new FormData()
        form.append("file", image[0], Tweet)
        const { result: { id } } = await (await fetch(uploadURL, {
          method: "POST",
          body: form
        })).json()

        mutation({ Tweet, tweetImageId: id })
      } else {
        mutation({ Tweet })
      }
      reset();
      setTweetImage("");
    }
  }

  useEffect(() => {
    if (tweetData) {
      mutate();
    }
  }, [tweetData])



  return (
    <div className='pt-10 bg-gradient-to-br'>
      <Title nickname={data?.profile?.name} />
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
      <TweetInput onTweet={onTweet} handleSubmit={handleSubmit} register={register} image={image} tweetImage={tweetImage} setTweetImage={setTweetImage} />
    </div>
  );
}

