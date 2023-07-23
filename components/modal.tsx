import { useRouter } from "next/router";
import { ModalType } from "../type/type";



export default function Modal({ message, movePage, setModal }: ModalType) {
    const router = useRouter()
    const onMovePage = () => {
        router.push(movePage)
        setModal(false)
    }

    return (
        <div className="absolute w-[350px] shadow-md text-center py-10 rounded-3xl top-[25%] bg-white border">
            <p>{message}</p>
            <button className="bg-[#4286f4] inline-block w-20 rounded-md mt-5 py-1 text-white" onClick={onMovePage}>확인</button>
        </div>
    );
}

