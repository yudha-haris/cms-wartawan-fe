import { useState, useEffect } from "react";
import SidebarKomentar from "./SidebarKomentar";
import SidebarDetailDraf from "./SidebarDetailDraf";
import { useDispatch, useSelector } from "react-redux";
import { getCommentByDraftId } from "@/states/comment/action";

export default function SidebarDraf({
  draft_detail,
  isEditing,
  editedContent,
  isShow,
  onToggleSidebar,
}) {
  const comments = useSelector((state) => state.comments);
  const [showComments, setShowComments] = useState(isEditing);

  const dispatch = useDispatch();

  useEffect(() => {
    if (draft_detail) {
      dispatch(
        getCommentByDraftId({
          draftId: draft_detail.draft_id,
        })
      );
    }
  }, [dispatch, draft_detail]);

  return (
    <div
      className={`${
        isShow ? "flex flex-col" : "hidden md:flex flex-col"
      } min-h-screen md:min-w-fit lg:w-1/3 w-full items-center gap-5 pt-12 pb-5 bg-stone-50 border-l-4 border-gray-200 z-50 overflow-auto absolute md:relative `}
    >
      <div className="flex justify-around w-full">
        <button
          onClick={onToggleSidebar}
          className="md:hidden font-bold border-2 border-blue-600 px-4 rounded-lg"
        >
          Menu
        </button>
        <h1 className="font-heading font-bold text-4xl text-black">AINGS</h1>
        <p />
      </div>

      <div className="flex flex-row justify-center items-start self-stretch border-b-2 border-gray-400">
        {!isEditing && (
          <button
            className={
              showComments
                ? "flex flex-1 self-stretch items-center justify-center py-3 font-body font-bold text-black"
                : "flex flex-1 self-stretch items-center justify-center py-3 font-body font-bold text-black bg-stone-200"
            }
            onClick={() => {
              setShowComments(false);
            }}
          >
            {draft_detail.status.toLowerCase() === "published"
              ? "Detail Berita"
              : "Detail Draf"}
          </button>
        )}
        {(draft_detail.status.toLowerCase() === "reviewed" ||
          draft_detail.status.toLowerCase() === "rejected") && (
          <button
            className={
              showComments
                ? "flex flex-1 self-stretch items-center justify-center py-3 font-body font-bold text-black bg-stone-200"
                : "flex flex-1 self-stretch items-center justify-center py-3 font-body font-bold text-black"
            }
            onClick={() => {
              setShowComments(true);
            }}
          >
            Komentar
          </button>
        )}
      </div>

      {showComments ? (
        <SidebarKomentar
          isAddable={isEditing ? false : true}
          version_id={draft_detail.id}
          draft_id={draft_detail.draft_id}
          contents={comments}
        />
      ) : (
        <SidebarDetailDraf
          draft_detail={draft_detail}
          isEditing={isEditing}
          editedContent={editedContent}
        />
      )}
    </div>
  );
}
