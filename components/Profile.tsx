

type ProfileType = {
    nicname: string,
    id?: string,
    imageUrl?: string,
}

export default function Profile({ nicname, id, imageUrl }: ProfileType) {
    return (
        <div className="flex space-x-3 items-start">
            <div className='bg-red-300 rounded-full w-14 h-14 shadow-md' />
            <div className='w-[80%] flex flex-col'>
                <span className='text-xl font-semibold inline-block mr-2'>{nicname}</span>
                <span className="text-sm inline-block">{`@${id}`}</span>
            </div>

        </div>
    );
}

