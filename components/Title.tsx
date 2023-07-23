

export default function Title(type: { nickname: string }) {
    return (
        <div className='py-12'>
            <span className='text-white drop-shadow-md text-5xl font-semibold px-9'>{`Hello,  ${type.nickname}!`}</span>
        </div>
    );
}

