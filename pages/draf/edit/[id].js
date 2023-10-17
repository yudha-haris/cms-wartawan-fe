import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DraftEditLayout from "@/components/Draf/DraftEditLayout";
import { useDispatch, useSelector } from 'react-redux';
import { getDraftDetailById } from '@/states/draft/action';
import SidebarKomentar from '@/components/Sidebar/SidebarKomentar';
import useRequireAuth from '@/hooks/useRequireAuth';

export default function EditDrafBeritaById() {

  const router = useRouter();
  const auth = useRequireAuth();
  const { id } = router.query;

  const draft_detail = useSelector((state) => state.draft_detail);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getDraftDetailById({ id }));
    }

  }, [dispatch, id]);

  if (!draft_detail) {
    return (<div></div>)
  }

  return (
    <main className='flex flex-row items-start min-h-screen w-full'>
      <DraftEditLayout draft_detail={draft_detail} />
      <SidebarKomentar isAddable={false} />
    </main>
  );
}