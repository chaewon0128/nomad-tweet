import Link from "next/link";
import { useRouter } from "next/router";
import cls from "../lib/cls";


export default function Nav() {
    const router = useRouter()

    return (
        <div className="absolute top-0 p-4" >
            <h1 className={cls("text-white font-semibold", router.pathname === "/log-in" ? "text-4xl" : "text-2xl")}><Link href={"/"}>tweety</Link></h1>
        </div>
    );
}

