import Link from 'next/link';
import React from 'react';
import IconBtn from './IconBtn';
import HeartBtn from './heartBtn';
import Profile from './Profile';

type TweetType = {
    index: number,
}
export default function TweetMsg({ index }: TweetType) {
    return (
        <div key={index} className='border-b mt-6 pb-4 last:border-b-0'>
            <Link href={`/tweet/${index}`}>
                <div className='space-x-16 cursor-pointer'>
                    <Profile nicname='nico' />
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, vitae! Voluptatibus, tempore officia aut, inventore quae omnis dolor earum saepe repellendus delectus eius vitae dolores libero quaerat minima eaque harum.</p>
                </div>
            </Link>
            <div className='flex justify-end items-center mt-5 gap-2'>
                <IconBtn type="comment" />
                <HeartBtn />
            </div>
        </div>
    );
}

