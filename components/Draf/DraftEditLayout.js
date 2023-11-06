import { useDispatch } from "react-redux";
import Editor from "../Editor/Editor";
import { editDraft } from "@/states/draft/action";
import { useRouter } from "next/router";
import { useState } from "react";

export default function DraftEditLayout({ draft_detail, editedContent, handleEditedContentChange }) {

    const router = useRouter();
    const dispatch = useDispatch();

    const [contentEdited, setContentEdited] = useState(draft_detail.content);

    const handleEditDraf = () => {
        dispatch(editDraft({
            id: draft_detail.id,
            content: contentEdited,
        }));
        router.push(`/draf/${draft_detail.draft_id}`);
    };

    const handleconsolelog = () => {
        console.log("ini kepencet");
    }

    return (
        <div className="flex flex-col items-start self-stretch py-10 px-20 gap-8 min-h-screen w-full bg-blue-50">
            <div className="flex flex-col items-start gap-3 self-stretch">
                <div className="flex flex-1 flex-row items-start gap-2 self-stretch">
                    <button
                        onClick={() => router.push(`/draf/${draft_detail.draft_id}`)}
                        className="flex font-body py-1 px-4 border-2 text-blue-600 border-blue-600 rounded-lg 
                                    hover:bg-blue-400 hover:text-white">Kembali
                    </button>
                    <p className="flex flex-1 font-body text-black py-1 justify-center self-center bg-blue-200">Mengubah Draf Berita</p>
                </div>
            </div>
            <h1 className="font-heading text-2xl font-bold text-black border-b-1 border-black">{draft_detail.title}</h1>
            <Editor
                className="flex flex-1 flex-col py-3 px-10 items-start self-stretch 
                bg-white border-2 border-blue-400 rounded-md"
                contents={contentEdited} onChange={(value) => { setContentEdited(value) }} />
            <div className="flex flex-row justify-end self-stretch">
                <button onClick={() => { handleEditDraf() }}
                    className="flex items-center font-body font-bold text-white
                    text-md py-2 px-5 bg-blue-600 rounded-lg hover:bg-blue-400">Simpan Perubahan</button>
            </div>

        </div>
    );
}