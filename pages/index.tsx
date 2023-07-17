import Link from 'next/link';
import React from 'react';
import TweetMsg from '../components/TweetMessage';
import Input from '../components/Input';
import Title from '../components/Title';

export default function Home() {

  return (
    <div className='pt-10 bg-gradient-to-r from-[#373B44] to-[#4286f4]'>
      <Title nickname='nico' />
      <div className='bg-white min-h-full rounded-t-3xl py-3 px-7'>
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <TweetMsg index={i} />
        ))}
      </div>
      <Input />
    </div>
  );
}

