import dateInvert from "../lib/dateInvert";
import emailToId from "../lib/emailToId";
import { CommentDataType } from "../type/type";
import { Toaster } from "react-hot-toast";


export default function Answer({ commentData, onDelteAnswer }: CommentDataType) {

    return (
        <div>
            <div className="py-5 pb-5 pl-2 border-b last:border-b-0  relative ">
                <div>
                    <div className="mb-3 w-full  flex justify-between items-center">
                        <div className="flex justify-center items-center">
                            <span className="font-semibold mr-1">{commentData.user.name}</span>
                            <span className="text-gray-500 text-xs mr-2">{emailToId(commentData.user.email)}</span>
                        </div>
                        <span className="text-xs">{dateInvert(commentData.createdAt)}</span>
                    </div>
                    <p>{commentData.answer}</p>
                    <button onClick={() => onDelteAnswer(commentData)} className=" absolute text-xs h-5 right-0 bottom-3 hover:text-blue-600">삭제</button>
                </div>
            </div>
            <div><Toaster /></div>
        </div>
    );
}

