import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";


export default function useUser() {
    const router = useRouter()
    const { error } = useSWR("/api/profile")
    useEffect(() => {
        if (error) {
            router.replace("/log-in")
        }
    }, [error])


    return error;
}

