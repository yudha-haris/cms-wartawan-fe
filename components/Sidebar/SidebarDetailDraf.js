import { editDraft, saveDraftToApproved, saveDraftToNew } from "@/states/draft/action";
import { setIsRegenerate } from "@/states/regenerate/action";
import DatetimeConverter from "@/utils/datetimeConverter";
import StatusConverter from "@/utils/statusConverter";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function SidebarDetailDraf({ draft_detail, isEditing, editedContent }) {

    const router = useRouter();
    const dispatch = useDispatch();

    const formattedStatus = StatusConverter({ status: draft_detail.status });
    const formattedDate = DatetimeConverter({ datetime: draft_detail.created_at });

    const handleEditDraf = () => {
        dispatch(editDraft({
            id: draft_detail.id,
            content: editedContent,
        }));
        router.push(`/draf/${draft_detail.draft_id}`);
    };

    const handleSaveDraf = () => {
        dispatch(saveDraftToNew({
            id: draft_detail.id,
            content: editedContent,
        }));
    }

    const handleApproveDraf = () => {
        dispatch(saveDraftToApproved({
            id: draft_detail.id,
        }));
    }

    return (
        <div className="flex flex-col items-start self-stretch gap-8 px-8 overflow-y-auto">

            <div className="flex flex-col gap-2 self-stretch">
                <div className="flex flex-col items-start">
                    <p className="font-body font-bold text-md text-black">{(draft_detail.status === "draft") ? "Dibuat pada" : "Diubah pada"}</p>
                    <p className="font-body text-lg text-black">{formattedDate}</p>
                </div>
                <div className="flex flex-col items-start">
                    <p className="font-body font-bold text-md text-black">Status</p>
                    <p className="font-body text-lg text-black">{formattedStatus}</p>
                </div>
            </div>

            {((draft_detail.status).toLowerCase() === "draft")
                && (isEditing
                    ? (<button onClick={() => handleEditDraf()}
                        className="flex flex-1 self-stretch items-center justify-center font-body font-bold text-white
                                text-md py-2 px-5 bg-blue-600 rounded-lg hover:bg-blue-400">
                        Simpan Perubahan
                    </button>)
                    : (<div className="flex flex-1 flex-col gap-3 items-start self-stretch">
                        <div className="flex flex-1 flex-row gap-3 justify-center items-start self-stretch">
                            <button onClick={() => router.push(`/draf/edit/${draft_detail.draft_id}`)}
                                className="flex flex-1 self-stretch items-center justify-center font-body font-bold text-white
                                        text-md py-2 px-5 bg-blue-600 rounded-lg hover:bg-blue-400">
                                Ubah Draf
                            </button>
                            <button onClick={() => handleSaveDraf()}
                                className="flex flex-none self-stretch items-center justify-center font-body font-bold text-white
                                        text-md py-2 px-8 bg-blue-600 rounded-lg hover:bg-blue-400">
                                Kirim Redaktur
                            </button>
                        </div>
                        <button onClick={() => { dispatch(setIsRegenerate(true)); router.push(`/draf/create`) }}
                            className="flex flex-1 self-stretch items-center justify-center font-body font-bold text-blue-600
                                    text-md py-2 px-3 border-2 border-blue-600 rounded-lg hover:bg-blue-400 hover:text-white">
                            Buat Ulang Draf Berita
                        </button>
                    </div>))
            }

            {((draft_detail.status).toLowerCase() === "reviewed")
                && (<div className="flex flex-1 flex-col gap-2 items-start self-stretch">
                    <button onClick={() => router.push(`/draf/edit/${draft_detail.draft_id}`)}
                        className="flex flex-1 self-stretch items-center justify-center font-body font-bold text-white
                        text-md py-2 px-5 bg-blue-600 rounded-lg hover:bg-green-400"
                    >Ubah Kembali Draf Berita
                    </button>
                    <button onClick={() => handleSaveDraf()}
                        className="flex flex-1 self-stretch items-center justify-center font-body font-bold text-white
                        text-md py-2 px-5 bg-green-500 rounded-lg hover:bg-green-400"
                    >Kirim Ulang ke Redaktur
                    </button>
                </div>)}

        </div>
    );
}