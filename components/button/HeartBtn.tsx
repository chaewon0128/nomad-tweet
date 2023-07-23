import useSWR from 'swr';
import { HeartFullIcon, HeartLineIcon } from '../../icons/icons';

import { useRouter } from 'next/router';
import useMutation from '../../lib/useMutation';

type likedType = { liked: boolean }

export default function HeartBtn({ liked }: likedType) {
    const router = useRouter();
    const { data, mutate } = useSWR(`/api/post/${router.query.id}`)
    const [favoriteMutate] = useMutation(`/api/post/${router.query.id}/fav`)
    const likedTweet = () => {
        mutate({ ...data, isLiked: !data?.isLiked }, { revalidate: false })
        favoriteMutate({})

    }
    return (
        <button onClick={likedTweet} className='hover:text-red-500 hover:transition-all'>
            {liked ? <HeartLineIcon size='6' /> : <HeartFullIcon size='6' />}
        </button>
    );
}

