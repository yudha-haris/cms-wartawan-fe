import { useState } from "react";
import CardKomentar from "../Card/CardKomentar";
import useInput from "@/hooks/useInput";
import { createComment } from "@/states/comment/action";
import { useDispatch } from "react-redux";

export default function SidebarKomentar({ isAddable, version_id, contents }) {

    const [value, setValue] = useInput("");
    const dispatch = useDispatch();

    const CARD_PLACEHOLDER = {
        author: "Nama Panjang",
        version: "Versi 1",
        comment: "Komentar lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
    }

    const handleCreateComment = () => {
        dispatch(createComment({
            versionId: version_id,
            content: value
        }))
    };

    return (
        <div className="flex flex-col min-h-screen w-1/4 items-center gap-10 py-20 px-10 bg-blue-900 overflow-y-auto">
            <h1 className="font-heading font-bold text-4xl text-white">Komentar</h1>
            {isAddable && <div className="flex flex-col">
                <input value={value} onChange={setValue} placeholder="Masukkan input" />
                <button className="" onClick={() => { handleCreateComment() }}>Buat Komentar</button>
            </div>}
            <div className="flex flex-col items-center self-stretch gap-5 h-[720] overflow-y-auto">
                {
                    contents
                        ? contents.map((comment) => (
                            <CardKomentar
                                key={comment.id}
                                author={CARD_PLACEHOLDER.author}
                                version={CARD_PLACEHOLDER.version}
                                comment={comment.content} />
                        ))
                        : <p className="font-body text-xl text-white py-2 px-4">Belum ada Komentar</p>

                }
            </div>
        </div>
    );
}