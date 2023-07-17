import { useRouter } from "next/router";
import IconBtn from "../../components/IconBtn";
import Profile from "../../components/Profile";
import Textarea from "../../components/Textarea";
import HeartBtn from "../../components/heartBtn";
import { XmarkIcon } from "../../icons/icons";


export default function Tweet() {
    const router = useRouter()
    const onClose = () => {
        router.back()
    }
    return (
        <div className="w-full bg-gradient-to-r from-[#373B44] to-[#4286f4] min-h-screen flex justify-center items-center">
            <div className="bg-white w-[80%] rounded-3xl py-14 px-8 relative">
                <Profile nicname="nico" id="nicolas" />
                <p className="ml-2 mt-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio autem minus ab voluptatem, sint rerum reprehenderit sit fuga earum officiis iure tenetur dignissimos? Esse aliquam itaque eos ipsa vel.
                </p>
                <div className="text-end mt-4">2023년 7월 17일</div>
                <div className="mt-5 py-3 border-t border-b flex justify-around items-center">
                    <div className="flex flex-col items-center justify-center cursor-pointer"><HeartBtn />likes</div>
                    <div className="flex flex-col items-center justify-center cursor-pointer"><IconBtn type="comment" />comment</div>
                    <div className="flex flex-col items-center justify-center cursor-pointer"><IconBtn type="bookmark" />Mark</div>
                    <div className="flex flex-col items-center justify-center cursor-pointer"><IconBtn type="retweet" />Retweet</div>
                </div>
                <Textarea />
                <button onClick={onClose} className="w-8 h-8 absolute top-5 right-5"><XmarkIcon size="8" /></button>
            </div>
        </div>
    );
}

