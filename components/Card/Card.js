export default function Card({title, body}) {
    return (
        <div className="flex flex-col h-40 w-80 items-end p-8 rounded-lg shadow-lg">
            <div className="flex flex-col items-start self-stretch inline-block">
                <h1 className="font-heading place-self-start text-2xl font-bold">{title}</h1>
                {/* <p className="font-body text-md truncate h-14">{body}</p> */}
                <span className="font-body text-md truncate h-14 block"> {body} </span>
            </div>
            <div className="flex flex-col">
                <button className="bg-blue-200 py-0.5 px-4 rounded-lg">Lihat</button>
            </div>
        </div>
    );
}