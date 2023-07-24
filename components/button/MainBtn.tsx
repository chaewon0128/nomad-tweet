import { BtnType } from "../../type/type";


export default function MainBtn({ title, loading }: BtnType) {
    return (
        <>
            <button className="text-white bg-[#4286f4] h-12 rounded-full
            font-semibold transition ease-in-out  hover:bg-blue-600">{loading ? "loading" : title}</button>
        </>
    );
}

