import { useDispatch } from "react-redux";
import Editor from "../Editor/Editor";
import useInput from "@/hooks/useInput";
import { editDraft, saveDraftToNew } from "@/states/draft/action";
import { useRouter } from "next/router";

export default function DraftEditLayout({ id, title, content }) {

    const [saveToNew, setSaveToNew] = useInput(false);
    const router = useRouter();
    const dispatch = useDispatch();

    const handleSaveDraf = () => {
        if (saveToNew) {
            dispatch(saveDraftToNew({ id, content }));
        } else {
            dispatch(editDraft({ id, content }));
        }
    };

    return (
        <main className="bg-blue-50 min-h-screen">
            <div className="flex flex-col py-24 px-20 gap-4">
                <div className="flex flex-row items-start gap-4">
                    <button className="font-body self-stretch px-4 border-2 border-blue-400 rounded-lg hover:bg-blue-100"
                        onClick={() => router.back()}>Kembali</button>
                    <h1 className="font-heading text-2xl font-bold text-black">{title}</h1>
                </div>
                <Editor
                    className="flex flex-col h-[480px] py-4 px-4 items-start self-stretch 
                    bg-white border-2 border-blue-400 rounded-md gap-y-2 overflow-y-auto"
                    contents={content} />
                <div className='flex flex-row justify-end gap-3'>
                    <div className="flex flex-row">
                        <button
                            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm 
                                font-medium text-black text-center bg-gray-100 border border-gray-300 
                                rounded-l-lg focus:ring-4 focus:outline-none focus:ring-gray-100">Simpan Sebagai</button>
                        <select id="draft-save-options" value={saveToNew} onChange={setSaveToNew}
                            className="bg-gray-50 border border-gray-300 font-body
                                text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option value={false}>Draft</option>
                            <option value={true}>New</option>
                        </select>
                    </div>
                    <button
                        onClick={() => handleSaveDraf()}
                        className='font-body text-md self-stretch px-4 py-2 bg-blue-300 rounded-lg'>Simpan</button>
                </div>
            </div>
        </main>
    );
}