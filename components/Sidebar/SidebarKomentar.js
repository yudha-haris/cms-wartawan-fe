import { useState } from "react";
import CardKomentar from "../Card/CardKomentar";

export default function SidebarKomentar({ isAddable, contents }) {

    const CARD_PLACEHOLDER = {
        author: "Nama Panjang",
        version: "Versi 1",
        comment: "Komentar lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
    }

    return (
        <div className="flex flex-col min-h-screen w-1/4 items-center gap-10 py-20 px-10 bg-blue-900 overflow-y-auto">
            <h1 className="font-heading font-bold text-4xl text-white">Komentar</h1>
            {isAddable
                ? <button className="flex flex-col self-stretch items-center justify-center
                font-body font-bold text-lg py-3 px-5 text-black bg-green-400 rounded-lg">Tambahkan Komentar</button>
                : <></>}
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