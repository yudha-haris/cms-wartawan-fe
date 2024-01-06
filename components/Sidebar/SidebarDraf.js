import { useState } from "react";
import SidebarKomentar from "./SidebarKomentar";
import SidebarDetailDraf from "./SidebarDetailDraf";

export default function SidebarDraf({
  draft_detail,
  comments,
  isEditing,
  editedContent,
}) {
  const [showComments, setShowComments] = useState(isEditing);

  if (!draft_detail.status) {
    return <div />;
  }

  return (
    <div
      className={
        isEditing
          ? "flex flex-col min-h-screen w-1/4 items-center gap-5 pt-12 pb-5 bg-stone-50 self-stretch border-l-4 border-gray-200 overflow-auto"
          : "flex flex-col max-h-screen w-1/4 items-center gap-5 pt-12 pb-5 bg-stone-50 self-stretch border-l-4 border-gray-200 overflow-auto"
      }
    >
      <h1 className="font-heading font-bold text-4xl text-black">AINGS</h1>

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
