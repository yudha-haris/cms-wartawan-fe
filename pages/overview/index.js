import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import ListItem from '@/components/ListItem/ListItem';
import { useRouter } from 'next/navigation';
import useRequireAuth from '@/hooks/useRequireAuth';
import { useDispatch, useSelector } from 'react-redux';
import { getDraftList } from '@/states/draft_list/action';

export default function Overview() {

  const auth = useRequireAuth();

  const router = useRouter();

  const draft_list = useSelector((state) => state.draft_list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDraftList({ "page": 1, "limit": 3 }));
  }, [dispatch]);

  const handleViewDraf = (id) => {
    router.push(`/draf/${id}`)
  };

  if (!draft_list) {
    return (<div></div>);
  }

  return (
    <main className="flex flex-row min-h-screen w-full bg-blue-50">

      <Sidebar />

      <div className='flex flex-col items-start content-start p-20 w-4/5 '>
        <h1 className='font-heading text-5xl font-bold pb-8 self-stretch text-black'>Overview</h1>
        <div className='flex flex-row self-stretch gap-8'>

          <div className='flex flex-col w-2/3 rounded-xl bg-white border-2 border-blue-400'>
            <h1 className='font-heading text-xl pt-6 font-bold px-8 self-stretch text-blue-600'>Draf Berita Terbaru</h1>
            <div className='flex flex-col py-2 self-stretch items-start content-start'>
              {(draft_list.draft_berita).map((draft) => (
                <ListItem key={draft.draft_id} title={draft.title} time={draft.created_at}
                  onClick={() => handleViewDraf(draft.draft_id)} />
              ))}
            </div>
          </div>

          <div className='flex flex-col w-1/3 bg-slate-200 py-6 px-8 gap-4 bg-white border-2 border-blue-400'>
            <h1 className='font-heading text-xl font-bold text-blue-600 text-black'>Notifikasi</h1>
            <p className='font-body text-md italic text-black'>Belum ada kabar terbaru.</p>
          </div>
        </div>
      </div>

    </main>
  )
}