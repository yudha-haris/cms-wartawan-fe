export default function CardKomentar({ author, time, comment }) {
    return (
        <div className="flex flex-col px-5 py-3 rounded-lg justify-center items-start gap-1 self-stretch 
                        bg-white border-2 border-stone-300">
            <div className="flex flex-col justify-center items-start self-stretch">
                <h1 className="font-body font-bold text-md">{author}</h1>
                <span className="font-body text-xs">{time}</span>
            </div>
            <p className="font-body text-md">{comment}</p>
        </div>
    );
}