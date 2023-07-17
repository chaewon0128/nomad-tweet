import React from 'react';

export default function Title(type: { nickname: string }) {
    return (
        <div className='py-12'>
            <span className='text-white text-4xl font-semibold px-9'>{`Hello,  ${type.nickname}!`}</span>
        </div>
    );
}

