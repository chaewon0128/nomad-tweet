import { BookMarkIcon, CommentIcon, XmarkIcon } from '../../icons/icons';
import { IconType } from '../../type/type';


export default function IconBtn({ type }: IconType) {
    return (
        <button className='hover:text-blue-600 hover:transition-all'>
            {type === "comment" ? <CommentIcon /> : null}
            {type === "xmark" ? <XmarkIcon /> : null}
            {type === "bookmark" ? <BookMarkIcon /> : null}
        </button>
    );
}

