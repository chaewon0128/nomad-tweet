import { useRouter } from "next/router";
import { XButtonType } from "../../type/type";


export default function XButton({ page, position }: XButtonType) {
    const router = useRouter();
    const onClosePage = () => {
        router.push(page)
    }
    const onBackPage = () => {
        router.back()
    }
    return (
        <button className={`absolute right-6 ${position}`} onClick={page === "back" ? onBackPage : onClosePage}>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
        </button>
    );
}

