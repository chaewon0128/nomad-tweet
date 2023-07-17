import React from 'react';

export default function Input() {
    return (
        <form className='fixed bottom-0 w-full shadow-sm'>
            <input type="text" placeholder="Type a comment.." className='border h-12 pl-4 w-full' />
            <button className='absolute right-3 top-3 bg-[#4286f4]  text-white  h-7 px-2 rounded-full '>
                <svg className='w-7 h-7'
                    fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </form>
    );
}

