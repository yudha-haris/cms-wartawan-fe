import Editor from "../Editor/Editor";

export default function DraftViewAfterCreateLayout({ title, content }) {
    return (
        <div className='flex flex-col h-[440px] my-10 items-start self-stretch 
                        bg-white border-2 border-gray-400 rounded-md overflow-hidden'>
            <div className="flex py-4 px-10 self-stretch bg-gray-200">
                <h1 className="font-heading text-2xl font-bold text-black">{title}</h1>
            </div>
            <Editor
                contents={content}
                className={"py-1 px-10 overflow-y-auto"} />
        </div>
    );
}
