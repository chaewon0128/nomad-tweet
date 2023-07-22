import React from 'react';

export default function Textarea() {
    return (
        <form className="relative pb-10 border-b">
            <textarea rows={3} placeholder="Tweet your reply" className=" w-full mt-5 outline-none resize-none" />
            <button className="bg-[#4286f4] absolute bottom-3 right-0 rounded-full px-4 py-2 text-white">tweet</button>
        </form>
    );
}

