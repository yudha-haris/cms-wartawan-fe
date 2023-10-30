import React, { useEffect, useState } from 'react';
import Sidebar from "@/components/Sidebar/SidebarMain";
import ListItem from "@/components/ListItem/ListItem";
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { emptyDraftList, getDraftList } from '@/states/draft_list/action';

export default function DraftListLayout() {

  const router = useRouter()

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const dispatch = useDispatch();
  const draft_list = useSelector((state) => state.draft_list);

  useEffect(() => {
    dispatch(getDraftList({
      "page": page, "limit": 8,
      onSuccess: (value) => {
        setTotalPage(value.total_pages);
      },
    }));
  }, [dispatch, page]);

  console.log(draft_list);

  const handleViewDraf = (id) => {
    router.push(`/draf/${id}`)
  };

  const handleNextPage = () => {
    if (page !== totalPage) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  if (!draft_list) {
    return (<div></div>)
  }

  return (
    <main className="flex flex-row min-h-screen w-full bg-blue-50">
      <Sidebar />
      <div className='flex flex-col self-stretch items-start content-start p-16 w-4/5 bg-blue-50 max-h-screen'>
        <h1 className='font-heading text-5xl font-bold pb-8 self-stretch text-black'>Daftar Draf Berita</h1>
        <div className='flex flex-col min-h-[360] self-stretch items-start content-start 
                        gap-3 rounded-md bg-white border-2 border-blue-400 overflow-hidden'>

          <div className='flex flex-col py-5 px-8 bg-blue-200 self-stretch'>
            <h1 className='font-heading text-xl font-bold self-stretch text-black'>Semua Draf Berita</h1>
          </div>

          <div className='flex flex-col items-start self-stretch overflow-y-auto'>
            {(draft_list.draft_berita).map((draft) => (
              <ListItem key={draft.draft_id} title={draft.title} status={draft.status} time={draft.created_at}
                onClick={() => handleViewDraf(draft.draft_id)} />
            ))}
          </div>

          <div className='flex flex-row py-5 gap-5 items-center self-stretch justify-center border-t-2 border-gray-200'>
            <p className={(page === 1)
              ? 'font-body font-bold'
              : 'font-body font-bold hover:cursor-pointer hover:text-blue-500 hover:underline hover:decoration-blue-500'}
              onClick={handlePrevPage}>Sebelumnya</p>
            <p className='font-body font-bold'>
              <span className='text-blue-600'>{page}</span>/{totalPage}</p>
            <p className={(page === totalPage)
              ? 'font-body font-bold'
              : 'font-body font-bold hover:cursor-pointer hover:text-blue-500 hover:underline hover:decoration-blue-500'}
              onClick={handleNextPage}>Berikutnya</p>
          </div>

        </div>
      </div>
    </main>
  );
}