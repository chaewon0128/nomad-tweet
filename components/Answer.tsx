import dateInvert from "../lib/dateInvert";
import emailToId from "../lib/emailToId";
import { CommentType } from "../type/type";



export default function Answer({ name, email, date, content }: CommentType) {
    return (
        <div>
            <div className="pl-2 py-5 pb-3 border-b last:border-b-0 ">
                <div className="mb-3">
                    <span className="font-semibold mr-2">{name}</span>
                    <span className="text-gray-500 text-sm mr-2">{emailToId(email)}</span>
                    <span className="text-sm ">{dateInvert(date)}</span>
                </div>
                <p>{content}</p>
            </div>

        </div>
    );
}

