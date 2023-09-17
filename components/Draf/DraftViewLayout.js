// import Editor from "../Editor/Editor";
// import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

export default function DraftViewLayout() {
    const router = useRouter()

    // const Editor = dynamic(() => import('../Editor/Editor'), { ssr: false })

    const DRAFT_TITLE = "Manchester United Menghancurkan Arsenal dengan Skor 8-2 di Tahun 2011";
    const DRAFT_CONTENT = "Manchester United berhasil mencatatkan kemenangan yang mengesankan saat melawan Arsenal dengan skor telak 8-2 pada pertandingan yang berlangsung pada tahun 2011. Pertandingan ini menjadi sorotan publik karena keunggulan yang begitu dominan dari Manchester United.\n\nPertandingan ini berlangsung di Old Trafford, markas Manchester United, yang dipadati oleh ribuan suporter dari kedua tim. Para pemain Manchester United tampil dengan performa yang luar biasa, terutama Wayne Rooney yang mencetak hattrick dan Ashley Young yang menyumbangkan dua gol.\n\nPertandingan dimulai dengan serangan balik cepat dari Manchester United yang berhasil membuka keunggulan melalui gol dari Ashley Young pada menit ke-28. Arsenal mencoba untuk membalas, namun pertahanan yang solid dari Manchester United membuat mereka kesulitan mencetak gol.\n\nPada babak kedua, Manchester United semakin menggila dengan mencetak lima gol tambahan. Gol-gol tersebut dicetak oleh Wayne Rooney, Nani, dan Park Ji-sung. Sementara itu, Arsenal hanya mampu membalas dua gol melalui Robin van Persie dan Theo Walcott.\n\nKemenangan ini menjadi salah satu kemenangan terbesar Manchester United dalam sejarah pertandingan mereka melawan Arsenal. Selain itu, skor yang begitu mencolok juga menjadi catatan tersendiri dalam sejarah pertandingan sepak bola Inggris.\n\nPertandingan ini menjadi sorotan publik karena keunggulan yang begitu dominan dari Manchester United. Kemenangan ini juga menunjukkan kekuatan dan dominasi Manchester United dalam kompetisi sepak bola Inggris pada saat itu.";
    // const DRAFT_CONTENT = "Manchester United Menghancurkan Arsenal dengan Skor 8-2 di Tahun 2011";
    const DRAFT_CONTENT_EDITED = DRAFT_CONTENT.split(/\n/g);

    return (
        <main className='bg-blue-50'>
            <div className="flex flex-col items-start min-h-screen py-16 px-52 gap-8">
                <div className="flex flex-row items-start gap-4">
                    <button className="font-body self-stretch px-4 border-2 border-blue-400 rounded-lg hover:bg-blue-100" 
                        onClick={() => router.back()}>Kembali</button>
                    <h1 className="font-heading text-2xl font-bold">{DRAFT_TITLE}</h1>
                </div>
                <div className="flex flex-col h-[480px] py-8 px-12 items-start self-stretch 
                    bg-white border-2 border-blue-400 rounded-xl gap-y-2 overflow-y-auto">
                    {DRAFT_CONTENT_EDITED.map((line, index) => (
                        // <p key={index}>{line}</p>
                        <p key={index} className="font-body text-lg"> {line} </p>
                    ))}
                </div>
                {/* <div className='flex flex-row justify-end gap-3'>
                    <button disabled="true" className='font-body text-md self-stretch px-4 py-2 bg-blue-300 rounded-lg'>Opsi Penyimpanan</button>
                    <button disabled="true" className='font-body text-md self-stretch px-4 py-2 bg-blue-300 rounded-lg'>Simpan</button>
                </div> */}
            </div>
        </main>
    );
}
