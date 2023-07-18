import { BtnType } from "../type/type";


export default function MainBtn({ title, btnColor = "#4286f4", textColor = "white" }: BtnType) {
    return (
        <>
            <button className={`text-${textColor} bg-[${btnColor}] h-12 rounded-full`}>{title}</button>
        </>
    );
}

