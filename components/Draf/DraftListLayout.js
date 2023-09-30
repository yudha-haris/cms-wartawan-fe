import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import Sidebar from "@/components/Sidebar/Sidebar";
import ListItem from "@/components/ListItem/ListItem";
import { useRouter } from 'next/navigation'
import axios from "axios";
import api from '@/utils/api';

export default function DraftListLayout() {

    const JUDUL_PLACEHOLDER = "Manchester United Menghancurkan Arsenal dengan Skor 8-2 di Tahun 2011";
    const TIME_PLACEHOLDER = "09.00 12/09/2023"

    // const BE_URI = "https://ta-aings-399219.uc.r.appspot.com";
    const BE_URI = "http://localhost:9000";

    const router = useRouter()

    const [drafts, setDrafts] = useState([]);
    const [JWT_TOKEN, setJWT_TOKEN] = useState('');
    const [isLoadData, setIsLoadData] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    

    const paginationParams = {"page": page, 
                              "limit": 5};

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
                `${BE_URI}/v1/draft/list`, 
                { params: {"page": page, "limit": 5},
                  headers: getHeaders() });

              const data = response.data;
              console.log('Fetched items:', data);
              setDrafts(data.draft_berita);
              setTotalPage(data.total_pages);
              
            } catch (error) {
              console.error('Error fetching items:', error);
            }
          };
        
        fetchData();

        // const response = await api.getDraftList(paginationParams);
        // console.log('Fetched items:', response);
        // setDrafts(response.draft_berita);
        // setTotalPage(response.total_pages);

        setIsLoadData(false);

    }, [JWT_TOKEN, page]);

    const handleViewDraf = (id) => {
        router.push(`/draf/${id}`)
    };

    const handleNextPage = () => {
        if (page !== totalPage) {
          setPage(page+1);
        }
    };

    const handlePrevPage = () => {
      if (page !== 1) {
        setPage(page-1);
      }
    };

    return (
        <main className="flex flex-row min-h-screen w-full bg-blue-50">
            <Sidebar />
            <div className='flex flex-col self-stretch items-start content-start p-20 w-4/5 h-fit bg-blue-50 '>
                <h1 className='font-heading text-5xl font-bold pb-8 self-stretch text-black'>Daftar Draf Berita</h1>  
                <div className='flex flex-col min-h-[360] self-stretch items-start content-start rounded-xl py-2 bg-white border-2 border-blue-400'>

                    {/* { isLoadData ? <Loader className='self-center' /> 
                      : drafts.map((draft) => (
                        <ListItem key={draft.draft_id} title={draft.title} time={draft.created_at} 
                            onClick={() => handleViewDraf(draft.draft_id)} />
                    )) } */}

                    {drafts.map((draft) => (
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