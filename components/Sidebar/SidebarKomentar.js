import CardKomentar from "../Card/CardKomentar";
import useInput from "@/hooks/useInput";
import { createComment, getCommentByVersionId } from "@/states/comment/action";
import { useDispatch, useSelector } from "react-redux";
import Textbox from "../Inputs/Textbox";
import DatetimeConverter from "@/utils/datetimeConverter";
import { useEffect } from "react";

export default function SidebarKomentar({ isAddable, version_id, contents }) {

    const [commentContent, setCommentContent] = useInput("");
    const comments_fecthed = useSelector((state) => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        if (version_id) {
            dispatch(getCommentByVersionId({ versionId: version_id }));
        }

    }, [dispatch, version_id]);

    const CARD_PLACEHOLDER = {
        author: "Nama Panjang",
        version: "Versi 1",
        comment: "Komentar lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
    }

    const handleCreateComment = () => {
        dispatch(createComment({
            versionId: version_id,
            content: commentContent,
        }))
    };

    return (
        <div className="flex flex-col self-stretch items-center gap-10 py-5 px-5 h-fit">

            <div className="flex flex-col items-center self-stretch gap-2 h-fit overflow-y-auto">
                {
                    contents
                        ? contents.map((comment) => (
                            < CardKomentar
                                key={comment.id}
                                author={(comment.user_wartawan)
                                    ? (comment.user_wartawan.username)
                                    : (comment.user_redaktur.username)}
                                time={DatetimeConverter({ datetime: comment.created_at })}
                                comment={comment.content} />
                        ))
                        : <p className="font-body text-xl text-black py-2 px-4">Belum ada Komentar</p>
                }
            </div>

            {isAddable &&
                <div className="flex flex-col items-center self-stretch gap-2">
                    <Textbox
                        id="prompt"
                        rows={1}
                        placeholder="Berikan Komentar"
                        value={commentContent}
                        onInputChange={setCommentContent} />
                    <button className="font-body py-2 px-5 text-white bg-blue-600 rounded-lg hover:bg-blue-400"
                        onClick={() => { handleCreateComment() }}>Buat Komentar</button>
                </div>}

        </div>
    );
}