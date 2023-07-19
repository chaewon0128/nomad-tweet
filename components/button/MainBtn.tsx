import { BtnType } from "../../type/type";


export default function MainBtn({ title }: BtnType) {
    return (
        <>
            <button className="text-white bg-[#4286f4] h-12 rounded-full
            font-semibold transition ease-in-out  hover:bg-white hover:border hover:border-[#4286f4] hover:text-[#373D49] hover:transition-all hover:duration-500 duration-500">{title}</button>
        </>
    );
}

