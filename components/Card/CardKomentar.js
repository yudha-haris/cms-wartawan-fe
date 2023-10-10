export default function CardKomentar({ author, version, comment }) {
    return (
        <div className="flex flex-col px-8 py-5 rounded-lg justify-center items-start gap-1 self-stretch bg-white">
            <div className="flex flex-col justify-center items-start self-stretch">
                <h1 className="font-body font-bold text-2xl">{author}</h1>
                <span className="font-body font-bold text-lg">{version}</span>
            </div>
            <p className="font-body text-lg">{comment}</p>
        </div>
    );
}