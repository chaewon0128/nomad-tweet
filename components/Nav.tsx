import Link from "next/link";
import { useRouter } from "next/router";
import cls from "../lib/cls";


export default function Nav() {
    const router = useRouter()
    const onMyPage = () => {
        router.push("/my-page")
    }


    return (
        <>
            <div className="absolute top-0 p-4 h-16  w-[500px] flex justify-between " >
                <h1 className={cls("text-[#4286f4] font-title font-semibold ", router.pathname === "/log-in" ? "hidden" : "text-2xl")}><Link href={"/"}>tweety</Link></h1>
                <button onClick={onMyPage} className={cls("text-[#4286f4] font-title font-semibold ", router.pathname === "/log-in" || router.pathname === "/create-account" ? "hidden" : "text-xl")}>my page</button>
            </div>

        </>
    );
}

