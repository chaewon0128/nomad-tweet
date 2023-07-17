import Link from 'next/link';
import React from 'react';

export default function Home() {
  const likedTweet = () => {
    console.log("liked")
  }
  return (
    <div className='pt-10 bg-gradient-to-r from-[#373B44] to-[#4286f4]'>
      <div className='py-12'>
        <span className='text-white text-4xl font-semibold px-9'>Hello, name!</span>
      </div>
      <div className='bg-white min-h-full rounded-t-3xl py-3 px-7'>
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div key={i} className='border-b mt-6 pb-4 last:border-b-0'>
            <Link href={`/tweet/${i}`}>
              <div className='flex space-x-5 cursor-pointer'>
                <div className='bg-red-300 rounded-full w-14 h-14 shadow-md' />
                <div className='w-[80%]'>
                  <span className='text-lg font-semibold inline-block mr-2'>nico</span>
                  <span className='text-sm inline-block'>3 days ago</span>
                  <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat mollitia magnam assumenda dicta! Laboriosam aperiam impedit expedita exercitationem quod maiores excepturi voluptatibus iure, asperiores modi ut alias? Vitae, corporis minus?</p>
                </div>
              </div>
            </Link>
            <div className='flex justify-end items-center mt-5'>
              <button className='hover:text-blue-600 hover:transition-all'>
                <svg className='w-5 h-5 mr-2' fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </button>
              <button onClick={likedTweet} className='hover:text-red-500 hover:transition-all'>
                <svg className='w-5 h-5' fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='fixed bottom-0 w-full shadow-sm'>
        <input type="text" placeholder="Type a comment.." className='border h-12 pl-4 w-full' />
        <button className='absolute right-3 top-3 bg-[#4286f4]  text-white  h-7 px-2 rounded-full '>
          <svg className='w-7 h-7'
            fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

