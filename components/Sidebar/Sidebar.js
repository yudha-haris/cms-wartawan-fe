import classes from "./styles.module.css";
import { useRouter } from 'next/navigation'

export default function Sidebar() {

    const router = useRouter()

    return (
        <main className="flex flex-col min-h-screen w-60 place-items-center py-24 px-2 bg-slate-300">
            <div className="flex p-8" onClick={() => router.push('/')}>
                <h1 className="font-heading place-self-center text-2xl font-bold">AINGS</h1>
            </div>
            <div className="flex flex-col">
                {/* <div onClick={() => router.push('/')}>
                    <p className="font-body text-md py-2">Overview</p>
                </div> */}
                <div onClick={() => router.push('/draf')}>
                    <p className="font-body text-md py-2">Daftar Draf Berita</p>
                </div>
                <div onClick={() => router.push('/draf/create')}>
                    <p className="font-body text-md py-2">Buat Draf Berita</p>
                </div>
                {/* <div>
                    <p className="font-body text-md py-2">Keluar dari Akun</p>
                </div>             */}
            </div>
        </main>
    );
}