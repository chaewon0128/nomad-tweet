import { useForm } from 'react-hook-form';
import useMutation from '../lib/useMutation';
import { useRouter } from 'next/router';


export default function Textarea() {
    const router = useRouter();
    const [mutation, { loading }] = useMutation(`/api/post/${router.query.id}/answer`)
    const { register, handleSubmit, reset } = useForm()

    const onAnswer = (answerForm: any) => {
        if (loading) return;
        mutation(answerForm)
        reset();
    }
    return (
        <form className="relative pb-10 border-b" onSubmit={handleSubmit(onAnswer)} >
            <textarea {...register("answer", { required: true })} rows={3} placeholder="Tweet your reply" className=" w-full mt-5 outline-none resize-none" />
            <button className="bg-[#4286f4] absolute bottom-3 right-0 rounded-full px-4 py-2 text-white hover:bg-blue-600">tweet</button>
        </form>
    );
}

