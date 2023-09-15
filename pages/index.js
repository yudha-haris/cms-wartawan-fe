import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from '@/components/Card/Card';
import Sidebar from '@/components/Sidebar/Sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const card_placeholder = "konten lorem ipsum"; 
    // = "Konten lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet";

  return (
    <main className="flex flex-row min-h-screen">

      <Sidebar />

      <div className='flex flex-col self-stretch items-start content-start p-20 max-w-fit '>
        <h1 className='font-heading text-5xl font-bold pb-8'>Daftar Draf Berita</h1>  
        <div className='flex flex-row self-stretch items-start gap-8 flex-wrap content-start'>
          <Card title="Judul #1" body={card_placeholder} />
          <Card title="Judul #2" body={card_placeholder} />
          <Card title="Judul #3" body={card_placeholder} />
          <Card title="Judul #4" body={card_placeholder} />
          <Card title="Judul #5" body={card_placeholder} />
        </div>
      </div>

    </main>
  )
}
