import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar/Sidebar';
import ListItem from '@/components/ListItem/ListItem';
import { useRouter } from 'next/navigation'

export default function Overview() {

  const JUDUL_PLACEHOLDER = "Manchester United Menghancurkan Arsenal dengan Skor 8-2 di Tahun 2011";
  const TIME_PLACEHOLDER = "09.00 12/09/2023";

  const router = useRouter()

  return (
    <main className="flex flex-row min-h-screen max-w-full bg-blue-50">

      <Sidebar />

      <div className='flex flex-col items-start content-start p-20 max-w-fit '>
        <h1 className='font-heading text-5xl font-bold pb-8 self-stretch'>Overview</h1>  
        <div className='flex flex-row gap-8'>
          
          <div className='flex flex-col rounded-xl bg-white border-2 border-blue-400'>
            <h1 className='font-heading text-xl pt-6 font-bold px-8 self-stretch text-blue-600'>Berita Terbaru</h1>
            <div className='flex flex-col py-2 self-stretch items-start content-start  '>
              <ListItem title={JUDUL_PLACEHOLDER} time={TIME_PLACEHOLDER} onClick={() => router.push('/draf/view')} />
              <ListItem title={JUDUL_PLACEHOLDER} time={TIME_PLACEHOLDER} />
              <ListItem title={JUDUL_PLACEHOLDER} time={TIME_PLACEHOLDER} />
              <ListItem title={JUDUL_PLACEHOLDER} time={TIME_PLACEHOLDER} />
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