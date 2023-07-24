

export default function Title(type: { nickname: string, isLoading: boolean }) {
    return (
        <div className='py-12'>
            <span className='text-white drop-shadow-md text-5xl font-semibold px-9'>Hello, {type.isLoading ? <div className="spinner text-lg"></div> : `${type.nickname}!`}</span>
        </div>
    );
}

