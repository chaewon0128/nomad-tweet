import Link from "next/link";
import { useRouter } from "next/router";
import cls from "../lib/cls";
import { Toaster, toast } from "react-hot-toast";
import useMutation from "../lib/useMutation";
import useSWR from "swr";


export default function Nav() {
    const { data } = useSWR("/api/profile")
    const [mutation] = useMutation("/api/logout")
    const router = useRouter()
    const onLogOut = () => {
        toast('bye bye!', {
            icon: '👋',
        });
        mutation(data)
        router.push("/log-in")
    }



    return (
        <>
            <div className="absolute top-0 p-4 h-16  w-[500px] flex justify-between " >
                <h1 className={cls("text-[#4286f4] font-title font-semibold ", router.pathname === "/log-in" ? "hidden" : "text-2xl")}><Link href={"/"}>tweety</Link></h1>
                <button onClick={onLogOut} className={cls("text-[#4286f4] font-title font-semibold ", router.pathname === "/log-in" || router.pathname === "/create-account" ? "hidden" : "text-2xl")}>log out</button>
            </div>
            <div><Toaster /></div>
        </>
    );
}

