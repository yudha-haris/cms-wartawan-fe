import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DraftEditLayout from "@/components/Draf/DraftEditLayout";
import { useDispatch, useSelector } from 'react-redux';
import { getDraftDetailById } from '@/states/draft/action';
import useRequireAuth from '@/hooks/useRequireAuth';
import SidebarDraf from '@/components/Sidebar/SidebarDraf';
import { getCommentByVersionId } from '@/states/comment/action';
import useInput from '@/hooks/useInput';
import Head from 'next/head';

export default function EditDrafBeritaById() {

  const router = useRouter();
  const { id } = router.query;

  const draft_detail = useSelector((state) => state.draft_detail);
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const [editedContent, handleEditedContentChange, setEditedContent] = useInput("");

  useEffect(() => {
    // if (id) {
    //   dispatch(getDraftDetailById({ id }));
    // }

    // console.log(draft_detail);

    if (draft_detail) {
      dispatch(getCommentByVersionId({ versionId: draft_detail.id }))
      setEditedContent(draft_detail.content);
      // console.log(editedContent);
    }

  }, [dispatch, draft_detail, setEditedContent, editedContent]);

  const DRAFT_PLACEHOLDER = {
    "id": 51,
    "draft_id": 26,
    "version": 1,
    "created_at": "2023-10-17T10:50:37.251Z",
    "id_wartawan": 3,
    "id_redaktur": null,
    "status": "draft",
    "published_at": "2023-10-17T10:50:37.251Z",
    "category": "news",
    "content": "Gedung perkantoran tinggi yang terletak di pusat kota dilanda kebakaran pada tanggal 20 Oktober pukul 20.30. Kebakaran ini diduga disebabkan oleh korsleting listrik yang terjadi di salah satu lantai gedung. Kejadian ini mengakibatkan panik di kalangan penghuni dan pengunjung gedung.\n\nRespon dari pemadam kebakaran sangat cepat dalam mencegah korban jiwa. Tim pemadam kebakaran tiba di lokasi kejadian hanya dalam waktu beberapa menit setelah menerima laporan. Dengan sigap, mereka segera memadamkan api yang melalap gedung tersebut. Meskipun api berhasil dipadamkan, namun kerugian materiil cukup besar akibat kebakaran ini.\n\nPihak berwenang sedang melakukan penyelidikan lebih lanjut untuk mengetahui penyebab pasti terjadinya korsleting listrik yang menyebabkan kebakaran ini. Selain itu, mereka juga akan memeriksa kelengkapan sistem keamanan dan pemadam kebakaran di gedung tersebut.\n\nKejadian ini menjadi peringatan bagi semua gedung perkantoran di pusat kota untuk meningkatkan kewaspadaan terhadap risiko kebakaran. Penting bagi pengelola gedung untuk memastikan sistem listrik dan pemadam kebakaran berfungsi dengan baik serta melakukan pelatihan evakuasi kepada seluruh penghuni gedung.\n\nDiharapkan dengan adanya kejadian ini, kesadaran akan pentingnya keselamatan dan keamanan gedung perkantoran semakin meningkat. Semua pihak harus bekerja sama untuk mencegah terjadinya kebakaran serupa di masa yang akan datang.",
    "title": "Gedung Perkantoran Tinggi di Pusat Kota Dilanda Kebakaran, Pemadam Kebakaran Cepat Tanggap",
    "id_validasi": null
  }

  if (!draft_detail) {
    return (<div></div>)
  }

  return (
    <main className='flex flex-row items-start min-h-screen w-full'>
      <Head>
        <title>Ubah Draf: {draft_detail.title}</title>
      </Head>
      <DraftEditLayout draft_detail={draft_detail} />
      {
        ((draft_detail.status).toLowerCase() === "reviewed")
        && <SidebarDraf
          draft_detail={draft_detail}
          comments={comments}
          isEditing={true}
          editedContent={editedContent} />
      }
    </main>
  );
}