import Link from "next/link";
import { useRouter } from "next/router";
import cls from "../lib/cls";
import { useScroll, useTransform, motion } from "framer-motion";


export default function Nav() {
    const router = useRouter()
    const { scrollY } = useScroll()
    const backgroundColor = useTransform(scrollY, [0, 80], ["rgba(255,252,0,0)", "#fffc00"])
    const onMyPage = () => {
        router.push("/my-page")
    }


    return (
        <>

            <motion.div className="fixed top-0 p-4 h-16  w-[500px] flex justify-between bg-red-200 z-40" style={{ backgroundColor }}>
                <h1 className={cls("text-[#4286f4] font-title font-semibold ", router.pathname === "/log-in" ? "hidden" : "text-2xl")}><Link href={"/"}>tweety</Link></h1>
                <button onClick={onMyPage} className={cls("text-[#4286f4] font-title font-semibold ", router.pathname === "/log-in" || router.pathname === "/create-account" ? "hidden" : "text-xl")}>my page</button>
            </motion.div>

        </>
    );
}

