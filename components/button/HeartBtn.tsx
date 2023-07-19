import useSWR from 'swr';
import { HeartFullIcon, HeartLineIcon } from '../../icons/icons';
import { useState } from 'react';

const fetcher = () => {

}
export default function HeartBtn() {
    const [isLiked, setIsLiked] = useState(false)
    const { data, mutate } = useSWR("/api/love", fetcher)
    const likedTweet = () => {
        // mutate({ ...data, isLiked: !data.isLiked }, { revalidate: false })
        setIsLiked(!isLiked)
    }
    return (
        <button onClick={likedTweet} className='hover:text-red-500 hover:transition-all'>
            {isLiked ? <HeartLineIcon size="6" /> : <HeartFullIcon size='6' />}
        </button>
    );
}

