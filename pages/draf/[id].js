import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DraftViewLayout from "@/components/Draf/DraftViewLayout";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getDraftDetailById } from '@/states/draft/action';

export default function ViewDrafBeritaById() {

  const router = useRouter();
  const { id } = router.query;

  const draft_detail = useSelector((state) => state.draft_detail);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getDraftDetailById({ id }));
    }

  }, [dispatch, id]);

  const handleViewDraf = (id) => {
    router.push(`/draf/${id}`)
  };

  if (!draft_detail) {
    return (<div></div>)
  }

  return (
    <DraftViewLayout title={draft_detail.title} content={draft_detail.content} />
  );
}