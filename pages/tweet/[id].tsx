import IconBtn from "../../components/button/IconBtn";
import Profile from "../../components/Profile";
import Textarea from "../../components/Textarea";
import HeartBtn from "../../components/button/HeartBtn";
import XButton from "../../components/button/XButton";
import useSWR from "swr";
import { useRouter } from "next/router";
import Answer from "../../components/Answer";
import { useEffect } from "react";
import { AnswerType } from "../../type/type";
import dateInvert from "../../lib/dateInvert";



export default function Tweet() {
    const router = useRouter();
    const { data: answerData, mutate } = useSWR(router?.query.id ? `/api/post/${router.query.id}/answer` : null)
    const { error } = useSWR("/api/profile")
    const { data, isValidating } = useSWR(router?.query.id ? `/api/post/${router.query.id}` : null)
    useEffect(() => {
        if (error) {
            router.replace("/log-in")
        }
        mutate()
    }, [error, answerData])



    return (
        <div className="w-full bg-gradient-to-br min-h-screen flex justify-center items-center">

            {isValidating ? <div className="spinner"></div> :

                <div className="bg-white w-[80%] shadow-2xl mt-14 rounded-3xl py-14 px-8 relative">
                    <Profile name={data?.post.user.name} email={data?.post.user.email} />
                    <p className="ml-2 mt-5">
                        {data?.post.content}
                    </p>
                    <div className="text-end mt-4 text-sm">{dateInvert(data?.post.createdAt)}</div>
                    <div className="mt-5 py-3 border-t border-b flex justify-around items-center">
                        <div className="flex flex-col items-center justify-center cursor-pointer"><HeartBtn liked={data?.isLiked} />likes</div>
                        <div className="flex flex-col items-center justify-center cursor-pointer"><IconBtn type="comment" />comment</div>
                        <div className="flex flex-col items-center justify-center cursor-pointer"><IconBtn type="bookmark" />Mark</div>
                        <div className="flex flex-col items-center justify-center cursor-pointer"><IconBtn type="retweet" />Retweet</div>
                    </div>
                    <Textarea />
                    {answerData?.tweets.map((tweet: AnswerType) => (
                        <Answer key={tweet?.id} name={tweet?.user.name} email={tweet?.user.email} content={tweet?.answer} date={tweet?.createdAt} />
                    ))}
                    <XButton page="back" position="top-5" />
                </div>
            }
        </div>
    );
}

