import { useEffect } from "react";
import dateInvert from "../lib/dateInvert";
import emailToId from "../lib/emailToId";
import { CommentDataType } from "../type/type";
import useMutation from "../lib/useMutation";
import { Toaster, toast } from "react-hot-toast";


export default function Answer({ commentData }: CommentDataType) {
    const [mutation, { data: deleteData }] = useMutation("/api/post/answer-delete")
    useEffect(() => {
        if (deleteData?.status === 200) {
            toast.success(deleteData?.message)
        }
        if (deleteData?.status === 400) {
            toast.error(deleteData?.message)
        }
    }, [deleteData])
    const onTweetDelete = async () => {
        mutation(commentData, "DELETE")

    }


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
                    <button onClick={onTweetDelete} className=" absolute text-xs h-5 right-0 bottom-3 hover:text-blue-600">삭제</button>
                </div>
            </div>
            <div><Toaster /></div>
        </div>
    );
}

