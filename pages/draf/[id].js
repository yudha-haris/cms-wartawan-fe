import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DraftViewLayout from "@/components/Draf/DraftViewLayout";
import { useDispatch, useSelector } from 'react-redux';
import { getDraftDetailById } from '@/states/draft/action';
import SidebarKomentar from '@/components/Sidebar/SidebarKomentar';
import useRequireAuth from '@/hooks/useRequireAuth';

export default function ViewDrafBeritaById() {

  const router = useRouter();
  const { id } = router.query;

  const draft_detail = useSelector((state) => state.draft_detail);
  // const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getDraftDetailById({ id }));
    }

    // if (draft_detail) {
    //   dispatch(getCommentByVersionId({ versionId: draft_detail.id }))
    // }

  }, [dispatch, id]);
  // }, [dispatch, id, draft_detail]);

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
      <DraftViewLayout draft_detail={draft_detail} />
      <SidebarKomentar
        isAddable={true}
      // contents={comments}
      />
    </main>
  );

}