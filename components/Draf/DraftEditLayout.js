import Editor from "../Editor/Editor";

export default function DraftEditLayout({ title, content }) {

    return (
        <main className="bg-blue-50 min-h-screen">
            <div className="flex flex-col py-24 px-20">
                <h1 className="font-heading text-4xl">{title}</h1>
                <Editor
                    className="flex flex-col h-[480px] py-4 px-4 items-start self-stretch 
                    bg-white border-2 border-blue-400 rounded-md gap-y-2 overflow-y-auto"
                    contents={content} />
            </div>
        </main>
    );
}