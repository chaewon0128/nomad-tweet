import Link from "next/link";
import { useRouter } from "next/router";
import cls from "../lib/cls";



export default function Nav() {
    const router = useRouter()

    return (
        <div className="absolute top-0 p-4 h-16  w-full" >
            <h1 className={cls("text-[#4286f4] font-title font-semibold", router.pathname === "/log-in" ? "hidden" : "text-2xl")}><Link href={"/"}>tweety</Link></h1>
        </div>
    );
}

