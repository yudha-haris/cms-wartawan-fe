import React, { useEffect, useState } from 'react';
import Sidebar from "@/components/Sidebar/Sidebar";
import ListItem from "@/components/ListItem/ListItem";
import { useRouter } from 'next/navigation'
import axios from "axios";

export default function DaftarDrafBerita() {

    const JUDUL_PLACEHOLDER = "Manchester United Menghancurkan Arsenal dengan Skor 8-2 di Tahun 2011";
    const TIME_PLACEHOLDER = "09.00 12/09/2023"

    const BE_URI = "https://ta-aings-399219.uc.r.appspot.com";

    const headers = {
        'Authorization': `Bearer ${JWT_TOKEN}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BE_URI,
      };

    const router = useRouter()

    const [drafts, setDrafts] = useState([]);

    let JWT_TOKEN = "";

    useEffect( () => {
        JWT_TOKEN = localStorage.getItem("jwtToken");
    }, []);

    return (
        <div className="flex flex-row min-h-screen bg-blue-50">
            <Sidebar />
            <div className='flex flex-col self-stretch items-start content-start p-20 max-w-fit bg-blue-50'>
                <h1 className='font-heading text-5xl font-bold pb-8 self-stretch'>Daftar Draf Berita</h1>  
                <div className='flex flex-col self-stretch items-start content-start rounded-xl py-4 bg-white border-2 border-blue-400'>
                    <ListItem title={JUDUL_PLACEHOLDER} time={TIME_PLACEHOLDER} onClick={() => router.push('/draf/view')} />
                    <ListItem title={JUDUL_PLACEHOLDER} time={TIME_PLACEHOLDER} />
                    <ListItem title={JUDUL_PLACEHOLDER} time={TIME_PLACEHOLDER} />
                    <ListItem title={JUDUL_PLACEHOLDER} time={TIME_PLACEHOLDER} />
                    <ListItem title={JUDUL_PLACEHOLDER} time={TIME_PLACEHOLDER} />
                    <ListItem title={JUDUL_PLACEHOLDER} time={TIME_PLACEHOLDER} />
                    <ListItem title={JUDUL_PLACEHOLDER} time={TIME_PLACEHOLDER} />
                    <ListItem title={JUDUL_PLACEHOLDER} time={TIME_PLACEHOLDER} />
                </div>
            </div>
        </div>
    );
}