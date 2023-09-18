import React, { useEffect, useState } from 'react';
import Sidebar from "@/components/Sidebar/Sidebar";
import ListItem from "@/components/ListItem/ListItem";
import { useRouter } from 'next/navigation'
import axios from "axios";

export default function DaftarDrafBerita() {

    const JUDUL_PLACEHOLDER = "Manchester United Menghancurkan Arsenal dengan Skor 8-2 di Tahun 2011";
    const TIME_PLACEHOLDER = "09.00 12/09/2023"

    const BE_URI = "https://ta-aings-399219.uc.r.appspot.com";

    const router = useRouter()

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
              setDrafts(data);
              
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
        <div className="flex flex-row min-h-screen bg-blue-50">
            <Sidebar />
            <div className='flex flex-col self-stretch items-start content-start p-20 max-w-fit bg-blue-50 '>
                <h1 className='font-heading text-5xl font-bold pb-8 self-stretch text-black'>Daftar Draf Berita</h1>  
                <div className='flex flex-col self-stretch items-start content-start rounded-xl py-4 bg-white border-2 border-blue-400'>

                    {drafts.map((draft) => (
                        <ListItem key={draft.draft_id} title={draft.title} time={draft.created_at} 
                            onClick={() => handleViewDraf(draft.draft_id)} />
                    ))}

                </div>
            </div>
        </div>
    );
}