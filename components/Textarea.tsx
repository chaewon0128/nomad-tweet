import { ITextarea } from "../type/type";



export default function Textarea({ onAnswer, handleSubmit, register }: ITextarea) {

    return (
        <form className="relative pb-10 border-b" onSubmit={handleSubmit(onAnswer)} method='POST'>
            <textarea {...register("answer", { required: true })} rows={3} placeholder="Tweet your reply" className=" w-full mt-5 outline-none resize-none" />
            <button className="bg-[#4286f4] absolute bottom-3 right-0 rounded-full px-4 py-2 text-white hover:bg-blue-600">tweet</button>
        </form>
    );
}

