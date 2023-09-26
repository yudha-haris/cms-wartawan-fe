import classes from "./styles.module.css";
import { useRouter } from 'next/navigation'

export default function Sidebar() {

    const router = useRouter()

    return (
        <div className="flex flex-col min-h-screen w-1/5 items-center py-24 px-8 bg-blue-900">
            <div className="flex p-8" onClick={() => router.push('/overview')}>
                <h1 className="font-heading place-self-center text-4xl font-bold text-white">AINGS</h1>
            </div>
            <div className="flex flex-col w-48 place-items-center self-stretch">
                <div className="self-stretch hover:bg-blue-950" onClick={() => router.push('/overview')}>
                    <button className="font-body text-lg py-2 px-3 self-stretch text-white">Overview</button>
                </div>
                <div className="self-stretch hover:bg-blue-950" onClick={() => router.push('/draf')}>
                    <button className="font-body text-lg py-2 px-3 self-stretch text-white">Daftar Draf Berita</button>
                </div>
                <div className="self-stretch hover:bg-blue-950" onClick={() => router.push('/draf/create')}>
                    <button className="font-body text-lg py-2 px-3 self-stretch text-white">Buat Draf Berita</button>
                </div>
            </div>
        </div>
    );
}