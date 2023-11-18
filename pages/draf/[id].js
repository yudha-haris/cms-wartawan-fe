import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DraftViewLayout from "@/components/Draf/DraftViewLayout";
import { useDispatch, useSelector } from 'react-redux';
import { getDraftDetailById, getDraftDetailRedakturById } from '@/states/draft/action';
import useRequireAuth from '@/hooks/useRequireAuth';
import { getCommentByVersionId } from '@/states/comment/action';
import SidebarDraf from '@/components/Sidebar/SidebarDraf';
import ReactLoading from 'react-loading';
import Head from 'next/head';

export default function ViewDrafBeritaById() {

  const router = useRouter();
  const { id } = router.query;

  const draft_detail = useSelector((state) => state.draft_detail);
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      dispatch(getDraftDetailById({
        id,
        onSuccess: () => {
          setIsLoading(false);
        }
      }));
    }

    if (draft_detail) {
      dispatch(getCommentByVersionId({ versionId: draft_detail.id }));
    }

  }, [dispatch, id, draft_detail]);

  if (!draft_detail) {
    return (<div></div>);
  }

  return (
    <>
      {
        isLoading
          ? <>
            <Head>
              <title>Lihat Draft</title>
            </Head>
            <div className='flex flex-col bg-blue-50 min-h-screen items-center justify-center'>
              <ReactLoading type={"spin"} color={"blue"} height={'10%'} width={'10%'} />
            </div>
          </>
          : <main className='flex flex-row items-start max-h-screen w-full'>
            <Head>
              <title>Lihat Draft: {draft_detail.title}</title>
            </Head>
            <DraftViewLayout draft_detail={draft_detail} />
            <SidebarDraf draft_detail={draft_detail} comments={comments} isEditing={false} />
          </main>
      }
    </>
  );

}