

export default function Title(type: { nickname: string }) {
    return (
        <div className='py-12'>
            <span className='text-white drop-shadow-md text-5xl font-semibold px-9'> {type.nickname ? `Hello, ${type.nickname}!` : ""}</span>
        </div>
    );
}

