import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DraftEditLayout from "@/components/Draf/DraftEditLayout";
import { useDispatch, useSelector } from "react-redux";
import SidebarDraf from "@/components/Sidebar/SidebarDraf";
import {
  getCommentByDraftId,
  getCommentByVersionId,
} from "@/states/comment/action";
import useInput from "@/hooks/useInput";
import Head from "next/head";

export default function EditDrafBeritaById() {
  const router = useRouter();
  const { id } = router.query;

  const draft_detail = useSelector((state) => state.draft_detail);
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const [editedContent, _, setEditedContent] =
    useInput("");

  useEffect(() => {
    if (draft_detail) {
      dispatch(getCommentByDraftId({ draftId: draft_detail.draft_id }));
      setEditedContent(draft_detail.content);
    }
  }, [dispatch, draft_detail, setEditedContent, editedContent]);

  if (!draft_detail) {
    return <div />;
  }

  return (
    <main className="flex flex-row items-start min-h-screen w-full">
      <Head>
        <title>Ubah Draf: {draft_detail.title}</title>
      </Head>
      <DraftEditLayout draft_detail={draft_detail} />
      {draft_detail.status === "reviewed" && (
        <SidebarDraf
          draft_detail={draft_detail}
          comments={comments ? comments.comments : []}
          isEditing={true}
          editedContent={editedContent}
        />
      )}
    </main>
  );
}
