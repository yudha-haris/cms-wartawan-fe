import { setIsRegenerate } from "@/states/regenerate/action";
import DatetimeConverter from "@/utils/datetimeConverter";
import StatusConverter from "@/utils/statusConverter";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function SidebarDetailDraf({ draft_detail }) {

    const router = useRouter();
    const dispatch = useDispatch();

    const formattedStatus = StatusConverter({ status: draft_detail.status });
    const formattedDate = DatetimeConverter({ datetime: draft_detail.created_at });


    return (
        <div className="flex flex-col items-start self-stretch gap-8 px-8 overflow-y-auto">

            <div className="flex flex-col gap-2 self-stretch">
                <div className="flex flex-col items-start">
                    <p className="font-body font-bold text-md">{(draft_detail.status === "draft") ? "Dibuat pada" : "Diubah pada"}</p>
                    <p className="font-body text-lg">{formattedDate}</p>
                </div>
                <div className="flex flex-col items-start">
                    <p className="font-body font-bold text-md">Status</p>
                    <p className="font-body text-lg">{formattedStatus}</p>
                </div>
            </div>

            <div className="flex flex-1 flex-col gap-3 items-start self-stretch">
                <div className="flex flex-1 flex-row gap-3 justify-center items-start self-stretch">
                    <button onClick={() => router.push(`/draf/edit/${draft_detail.draft_id}`)}
                        className="flex flex-1 self-stretch items-center justify-center font-body font-bold text-white
                                        text-md py-2 px-5 bg-blue-600 rounded-lg hover:bg-blue-400">
                        Ubah Draf
                    </button>
                    <button
                        className="flex flex-none self-stretch items-center justify-center font-body font-bold text-white
                                        text-md py-2 px-8 bg-blue-600 rounded-lg hover:bg-blue-400">
                        Kirim Redaktur
                    </button>
                </div>
                <button onClick={() => { dispatch(setIsRegenerate(true)); router.push(`/draf/create`) }}
                    className="flex flex-1 self-stretch items-center justify-center font-body font-bold text-black
                                    text-md py-2 px-3 border-2 border-blue-600 rounded-lg hover:border-blue-400">
                    Buat Ulang Draf Berita
                </button>
            </div>

        </div>
    );
}