import IconBtn from "../../components/button/IconBtn";
import Profile from "../../components/Profile";
import Textarea from "../../components/Textarea";
import HeartBtn from "../../components/button/HeartBtn";
import XButton from "../../components/button/XButton";
import useSWR from "swr";
import { useRouter } from "next/router";
import Answer from "../../components/Answer";



export default function Tweet() {
    const router = useRouter();
    const { data } = useSWR(router?.query.id ? `/api/post/${router.query.id}` : null)

    return (
        <div className="w-full bg-gradient-to-br min-h-screen flex justify-center items-center">
            <div className="bg-white w-[80%] shadow-2xl mt-14 rounded-3xl py-14 px-8 relative">
                <Profile name={data?.post.user.name} email={data?.post.user.email} />
                <p className="ml-2 mt-5">
                    {data?.post.content}
                </p>
                <div className="text-end mt-4 text-sm">{(data?.post.createdAt)?.slice(0, 10)}</div>
                <div className="mt-5 py-3 border-t border-b flex justify-around items-center">
                    <div className="flex flex-col items-center justify-center cursor-pointer"><HeartBtn />likes</div>
                    <div className="flex flex-col items-center justify-center cursor-pointer"><IconBtn type="comment" />comment</div>
                    <div className="flex flex-col items-center justify-center cursor-pointer"><IconBtn type="bookmark" />Mark</div>
                    <div className="flex flex-col items-center justify-center cursor-pointer"><IconBtn type="retweet" />Retweet</div>
                </div>
                <Textarea />
                <Answer />
                <XButton page="back" position="top-5" />
            </div>

        </div>
    );
}

