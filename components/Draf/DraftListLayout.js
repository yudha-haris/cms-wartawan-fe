import React, { useEffect, useState } from 'react';
import Sidebar from "@/components/Sidebar/Sidebar";
import ListItem from "@/components/ListItem/ListItem";
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { getDraftList } from '@/states/draft_list/action';

export default function DraftListLayout() {

  const router = useRouter()

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const draft_list = useSelector((state) => state.draft_list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDraftList({
      "page": page, "limit": 5,
      onSuccess: (value) => {
        setTotalPage(value.total_pages);
      },
    }));
  }, [dispatch, page]);

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
      <div className='flex flex-col self-stretch items-start content-start p-20 w-4/5 h-fit bg-blue-50 '>
        <h1 className='font-heading text-5xl font-bold pb-8 self-stretch text-black'>Daftar Draf Berita</h1>
        <div className='flex flex-col min-h-[360] self-stretch items-start content-start rounded-xl py-2 bg-white border-2 border-blue-400'>

          {(draft_list.draft_berita).map((draft) => (
            <ListItem key={draft.draft_id} title={draft.title} time={draft.created_at}
              onClick={() => handleViewDraf(draft.draft_id)} />
          ))}

          <div className='flex flex-row p-4 gap-5 items-center self-stretch justify-center'>
            <p className='font-body font-bold hover:cursor-pointer' onClick={handlePrevPage}>Prev</p>
            <p className='font-body font-bold'> <span className='text-blue-600'>{page}</span>/{totalPage}</p>
            <p className='font-body font-bold hover:cursor-pointer' onClick={handleNextPage}>Next</p>
          </div>

        </div>
      </div>
    </main>
  );
}