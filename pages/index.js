import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from '@/components/Card/Card';
import Sidebar from '@/components/Sidebar/Sidebar';
import ListItem from '@/components/ListItem/ListItem';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const JUDUL_PLACEHOLDER = "Bantu Warga Terdampak Kekeringan, PMI Depok Distribusikan 15.000 Liter Air Bersih";
  const TIME_PLACEHOLDER = "09.00 12/09/2023";

  const card_placeholder = "konten lorem ipsum"; 
    // = "Konten lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet";

  return (
    <main className="flex flex-row min-h-screen max-w-full">

      <Sidebar />

      <div className='flex flex-col self-stretch items-start content-start p-20 max-w-fit '>
        <h1 className='font-heading text-5xl font-bold pb-8 self-stretch'>Daftar Draf Berita</h1>  
        <div className='flex flex-row gap-8'>
          <div className='flex flex-col self-stretch items-start content-start'>
            <ListItem title={JUDUL_PLACEHOLDER} time={TIME_PLACEHOLDER} />
            <ListItem title={JUDUL_PLACEHOLDER} time={TIME_PLACEHOLDER} />

          </div>
          <div className='flex flex-col items-center w-42 h-64 bg-slate-200 py-4 px-12'>
            <h1 className='font-heading text-xl'>Notifikasi</h1>
          </div>
        </div>
    </div>

    </main>
  )
}
