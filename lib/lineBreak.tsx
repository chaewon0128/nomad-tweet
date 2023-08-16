
export default function lineBreak(content: string | undefined) {

    if (!content) return;

    return (
        <div className=' w-80 max-h-96 pr-5'>
            {content.match(new RegExp(`.{1,34}`, 'g'))?.map((chunk, index) => (
                <span key={index}>
                    {chunk}
                    <br />
                </span>
            ))}
        </div>
    );
}

