import { BookMarkIcon, CommentIcon, XmarkIcon } from '../../icons/icons';
import { IconType } from '../../type/type';


export default function IconBtn({ type }: IconType) {
    return (
        <button className='hover:text-blue-600 hover:transition-all'>
            {type === "comment" ? <CommentIcon size='6' /> : null}
            {type === "xmark" ? <XmarkIcon size='6' /> : null}
            {type === "bookmark" ? <BookMarkIcon size='6' /> : null}
        </button>
    );
}

