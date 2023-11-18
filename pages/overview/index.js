import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar/SidebarMain';
import ListItem from '@/components/ListItem/ListItem';
import { useRouter } from 'next/navigation';
import useRequireAuth from '@/hooks/useRequireAuth';
import { useDispatch, useSelector } from 'react-redux';
import { getDraftList } from '@/states/draft_list/action';
import ReactLoading from 'react-loading';

export default function Overview() {

  const auth = useRequireAuth();
  const router = useRouter();

  const draft_list = useSelector((state) => state.draft_list);
  const dispatch = useDispatch();

  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getDraftList({
      "page": 1, "limit": 2,
      onSuccess: (value) => {
        setTotalPage(value.total_pages);
        setIsLoading(false);
      },
    }));
  }, [dispatch]);

  const handleViewDraf = (id) => {
    router.push(`/draf/${id}`)
  };

  if (!draft_list) {
    return (<div></div>);
  }

  return (
    <div></div>
  )
}