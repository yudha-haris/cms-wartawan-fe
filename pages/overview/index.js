import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import ListItem from '@/components/ListItem/ListItem';
import { useRouter } from 'next/navigation'
import axios from 'axios';

export default function Overview() {

  const JUDUL_PLACEHOLDER = "Manchester United Menghancurkan Arsenal dengan Skor 8-2 di Tahun 2011";
  const TIME_PLACEHOLDER = "09.00 12/09/2023";

  const BE_URI = "https://ta-aings-399219.uc.r.appspot.com";
  const router = useRouter();

  const [drafts, setDrafts] = useState([]);
  const [JWT_TOKEN, setJWT_TOKEN] = useState('');

  const getHeaders = () => {
      return {
        'Authorization': `Bearer ${JWT_TOKEN}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BE_URI,
      };
    };

  useEffect( () => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        setJWT_TOKEN(token);
    };

    const fetchData = async () => {
        try {
          const response = await axios.get(
            BE_URI.concat('/v1/draft/list'), 
            { headers: getHeaders() });
          const data = response.data;
          console.log('Fetched items:', data);
          setDrafts(data.slice(0,3));
          
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      };
  
    fetchData();

    }, [JWT_TOKEN]); // Include JWT_TOKEN in the dependency array to update headers when it changes

    const handleViewDraf = (id) => {
        router.push(`/draf/${id}`)
    };

  return (
    <main className="flex flex-row min-h-screen max-w-full bg-blue-50">

      <Sidebar />

      <div className='flex flex-col items-start content-start p-20 max-w-fit '>
        <h1 className='font-heading text-5xl font-bold pb-8 self-stretch'>Overview</h1>  
        <div className='flex flex-row gap-8'>
          
          <div className='flex flex-col rounded-xl bg-white border-2 border-blue-400'>
            <h1 className='font-heading text-xl pt-6 font-bold px-8 self-stretch text-blue-600'>Berita Terbaru</h1>
            <div className='flex flex-col py-2 self-stretch items-start content-start  '>
              {/* <ListItem title={JUDUL_PLACEHOLDER} time={TIME_PLACEHOLDER} onClick={() => router.push('/draf/view')} /> */}
              {drafts.map((draft) => (
                        <ListItem key={draft.draft_id} title={draft.title} time={draft.created_at} 
                            onClick={() => handleViewDraf(draft.draft_id)} />
                    ))}
            </div>
          </div>
          
          <div className='flex flex-col w-[420px] bg-slate-200 py-6 px-8 gap-4 bg-white border-2 border-blue-400'>
            <h1 className='font-heading text-xl font-bold text-blue-600'>Notifikasi</h1>
            <p className='font-body text-md italic'>Belum ada kabar terbaru.</p>
          </div>
        </div>
    </div>

    </main>
  )
}