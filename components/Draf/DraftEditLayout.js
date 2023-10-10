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
        <div className="flex flex-col items-start self-stretch py-12 px-20 gap-4 bg-blue-50 max-h-screen w-3/4">
            <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="flex flex-col py-1 justify-center items-start self-stretch bg-blue-200">
                    <p className="font-body text-black self-center">Mengedit Draf Berita</p>
                </div>
                <h1 className="font-heading text-4xl font-bold text-black">{title}</h1>
                <div className="flex flex-row items-center self-stretch gap-3 py-2 border-b-2 border-black">
                    <button disabled={true} className="flex items-center py-1 px-2 bg-green-400 rounded-md">Status: Placeholder</button>
                    <p className="font-body font-bold text-xl text-black">Dibuat pada: Placeholder</p>
                </div>
            </div>
            <Editor
                className="flex flex-col h-[440px] py-3 px-10 items-start self-stretch 
                bg-white border-2 border-blue-400 rounded-md gap-y-2 overflow-y-auto"
                contents={content} />
            <div className='flex flex-row py-3 gap-3 self-stretch justify-between'>
                <button
                    onClick={() => router.back()}
                    className="font-body self-stretch py-2 px-4 border-2 text-blue-600 border-blue-600 rounded-lg hover:bg-blue-400 hover:text-white">
                    Kembali
                </button>
                <div className="flex flex-row justify-end items-center gap-5">
                    <div className="flex flex-row">
                        <button disabled={true}
                            className="flex-shrink-0 z-10 inline-flex items-center py-2 px-5 text-sm 
                                font-medium text-black text-center bg-gray-100 border border-gray-300 
                                rounded-l-lg focus:ring-4 focus:outline-none focus:ring-gray-100">Simpan Sebagai</button>
                        <select id="draft-save-options" value={saveToNew} onChange={setSaveToNew}
                            className="bg-gray-50 border border-gray-300 font-body py-2 px-5
                                text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ">
                            <option value={false}>Draft</option>
                            <option value={true}>New</option>
                        </select>
                    </div>
                    <button
                        onClick={() => handleSaveDraf()}
                        className='font-body self-stretch py-2 px-5 border-2 text-white bg-blue-600 rounded-lg hover:bg-blue-400'>Simpan
                    </button>
                </div>
            </div>
        </div>
    );
}