import { useRouter } from "next/router";
import { DeleteType } from "../../type/type";
import { Toaster, toast } from "react-hot-toast";
import { useEffect, useState } from "react";



export default function DeleteBtn({ data }: DeleteType) {
    const router = useRouter();
    const [deleteData, setDeleteData] = useState<undefined | any>(undefined)
    const onTweetDelete = async () => {
        await fetch("/api/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => res.json().catch(() => { }))
            .then((json) => setDeleteData(json))
    }

    useEffect(() => {
        if (deleteData?.status === 200) {
            toast.success(deleteData?.message)
            setTimeout(() => (router.push("/")), 1000)

        }
        if (deleteData?.status === 400) {
            toast.error(deleteData?.message)
        }

    }, [deleteData])
    return (
        <button onClick={onTweetDelete} >
            <svg className={`w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
            <div><Toaster /></div>
        </button>
    );
}

