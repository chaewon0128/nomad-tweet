import { useRouter } from "next/router";
import { XmarkIcon } from "../../icons/icons";
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
            <XmarkIcon size="8" />
        </button>
    );
}

