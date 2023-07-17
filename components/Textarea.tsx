import React from 'react';

export default function Textarea() {
    return (
        <form className="relative mb-3">
            <textarea rows={4} placeholder="Tweet your reply" className=" w-full mt-5" />
            <button className="bg-[#4286f4] absolute top-32 right-0 rounded-full px-6 py-3 text-white">tweet</button>
        </form>
    );
}

