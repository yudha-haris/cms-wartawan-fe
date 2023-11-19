import CardKomentar from "../Card/CardKomentar";
import useInput from "@/hooks/useInput";
import { createComment, getCommentByVersionId } from "@/states/comment/action";
import { useDispatch, useSelector } from "react-redux";
import Textbox from "../Inputs/Textbox";
import DatetimeConverter from "@/utils/datetimeConverter";
import { useEffect } from "react";
import { useState } from "react";

export default function SidebarKomentar({ isAddable, version_id, contents }) {

    const [commentContent, handleCommentContentChange, setCommentContent] = useInput("");
    const [isLoading, setIsLoading] = useState(false);
    const comments_fecthed = useSelector((state) => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        if (version_id) {
            dispatch(getCommentByVersionId({ versionId: version_id }));
        }

    }, [dispatch, version_id, setCommentContent]);

    const CARD_PLACEHOLDER = {
        author: "Nama Panjang",
        version: "Versi 1",
        comment: "Komentar lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
    }

    const handleCreateComment = () => {
        setIsLoading(true);
        dispatch(createComment({
            versionId: version_id,
            content: commentContent,
            onSuccess: () => {
                setCommentContent("");
                setIsLoading(false);
            },
            onError: () => {
                setIsLoading(false);
            }
        }));

    };

    return (
        <div className="flex flex-col self-stretch items-center gap-5 h-fit overflow-y-auto">

            <div className="flex flex-col items-center self-stretch gap-2 px-4 h-fit overflow-y-auto">
                {
                    (contents.length === 0)
                        ? <p className="font-body font-bold text-xl text-black py-6 px-4">Belum ada Komentar</p>
                        : contents.map((comment) => (
                            < CardKomentar
                                key={comment.id}
                                author={(comment.user_wartawan)
                                    ? (comment.user_wartawan.username)
                                    : (comment.user_redaktur.username)}
                                isUser={(comment.user_wartawan) ? true : false}
                                time={DatetimeConverter({ datetime: comment.created_at })}
                                comment={comment.content}
                            />
                        ))
                }
            </div>

            {isAddable &&
                <div className="flex flex-col items-center self-stretch px-5 gap-2">
                    <Textbox
                        id="prompt"
                        rows={1}
                        placeholder="Berikan Komentar"
                        value={commentContent}
                        onInputChange={handleCommentContentChange} />

                    {isLoading
                        ? <button disabled type="button"
                            className="
                                font-body text-md py-2 px-5
                                font-medium bg-gray-100 rounded-lg border border-gray-200 
                                focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 
                                inline-flex items-center text-black">
                            <svg aria-hidden="true" role="status" className="inline w-6 h-6 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                            </svg>
                            Mengirim Komentar...
                        </button>
                        : <button className="font-body py-2 px-5 text-md text-white bg-blue-600 rounded-lg hover:bg-blue-400"
                            onClick={() => { handleCreateComment() }}>Buat Komentar</button>
                    }

                </div>}

        </div>
    );
}