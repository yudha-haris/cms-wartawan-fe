import { useState } from "react";
import SidebarKomentar from "./SidebarKomentar";
import SidebarDetailDraf from "./SidebarDetailDraf";

export default function SidebarDraf({ draft_detail, comments }) {

    const [showComments, setShowComments] = useState(false);

    return (
        <div className="flex flex-col max-h-screen w-1/4 items-center gap-10 py-20 bg-white self-stretch">
            <h1 className="font-heading font-bold text-4xl text-black">AINGS</h1>

            <div className="flex flex-row justify-center items-start self-stretch border-b-2 border-blue-600">
                <button className={showComments
                    ? "flex flex-1 self-stretch items-center justify-center py-3 font-body font-bold text-black"
                    : "flex flex-1 self-stretch items-center justify-center py-3 font-body font-bold text-black bg-blue-100"}
                    onClick={() => { setShowComments(false) }}>Detail Draf</button>
                <button className={showComments
                    ? "flex flex-1 self-stretch items-center justify-center py-3 font-body font-bold text-black bg-blue-100"
                    : "flex flex-1 self-stretch items-center justify-center py-3 font-body font-bold text-black"}
                    onClick={() => { setShowComments(true) }}>Komentar</button>
            </div>

            {showComments
                ? <SidebarKomentar
                    isAddable={true}
                    version_id={draft_detail.id}
                    contents={comments} />
                : <SidebarDetailDraf draft_detail={draft_detail} />
            }

        </div>
    );
}