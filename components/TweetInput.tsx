import { useForm } from "react-hook-form";
import useMutation from "../lib/useMutation";
import { TweetForm } from "../type/type";


export default function TweetInput() {
    const { register, handleSubmit, reset } = useForm<TweetForm>()
    const [mutation, { loading }] = useMutation("/api/post")
    const onTweet = (tweetText: TweetForm) => {
        if (loading) return;
        mutation(tweetText)
        reset();
    }
    return (
        <form onSubmit={handleSubmit(onTweet)} className='fixed bottom-5 w-full flex '>
            <input {...register("Tweet")} type="text" placeholder="Type a comment.." className='border  mx-auto w-[90%] rounded-full h-12 pl-4 pr-16 ' />
            <button className='absolute right-10 top-3 bg-[#4286f4]  text-white  h-7 px-2 rounded-full '>
                <svg className='w-7 h-7'
                    fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </form>
    );
}

