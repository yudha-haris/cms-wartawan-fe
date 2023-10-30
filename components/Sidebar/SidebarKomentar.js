import CardKomentar from "../Card/CardKomentar";
import useInput from "@/hooks/useInput";
import { createComment } from "@/states/comment/action";
import { useDispatch } from "react-redux";
import Textbox from "../Inputs/Textbox";
import DatetimeConverter from "@/utils/datetimeConverter";

export default function SidebarKomentar({ isAddable, version_id, contents }) {

    const [commentContent, setCommentContent] = useInput("");
    const dispatch = useDispatch();

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
        <div className="flex flex-col self-stretch items-center gap-10 py-5 px-5 bg-blue-900 h-fit">
            {isAddable &&
                <div className="flex flex-col items-center self-stretch gap-2">
                    <Textbox
                        id="prompt"
                        rows={1}
                        placeholder="Berikan Komentar"
                        value={commentContent}
                        onInputChange={setCommentContent} />
                    <button className="font-body self-stretch py-2 px-5 text-white bg-blue-600 rounded-lg hover:bg-blue-400"
                        onClick={() => { handleCreateComment() }}>Buat Komentar</button>
                </div>}
            <div className="flex flex-col items-center self-stretch gap-5 h-[720] overflow-y-auto">
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
                        : <p className="font-body text-xl text-white py-2 px-4">Belum ada Komentar</p>

                }
            </div>
        </div>
    );
}