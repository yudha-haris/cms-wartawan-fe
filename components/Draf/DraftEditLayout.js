import Editor from "../Editor/Editor";

export default function DraftEditLayout({ title, content }) {
    return (
        <main>
            <div className="flex flex-col bg-blue-50">
                <h1 className="font-heading text-4xl">{title}</h1>
                <Editor contents={content} />
            </div>
        </main>
    );
}