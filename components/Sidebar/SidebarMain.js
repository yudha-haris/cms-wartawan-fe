import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation'
import { logout } from "@/states/auth/action";

export default function Sidebar() {

    const dispatch = useDispatch();

    const router = useRouter()

    return (
        <div className="flex flex-col min-h-screen w-1/5 items-center py-24 px-8 bg-blue-900">
            <div className="flex p-8" onClick={() => router.push('/overview')}>
                <h1 className="font-heading place-self-center text-4xl font-bold text-white hover:cursor-pointer">AINGS</h1>
            </div>
            <div className="flex flex-col w-48 place-items-center self-stretch">
                <div className="self-stretch hover:bg-blue-950 hover:cursor-pointer" onClick={() => router.push('/overview')}>
                    <p className="font-body text-lg py-2 px-3 self-stretch text-white ">Overview</p>
                </div>
                <div className="self-stretch hover:bg-blue-950 hover:cursor-pointer" onClick={() => router.push('/draf')}>
                    <p className="font-body text-lg py-2 px-3 self-stretch text-white">Daftar Draf Berita</p>
                </div>
                <div className="self-stretch hover:bg-blue-950 hover:cursor-pointer" onClick={() => router.push('/draf/create')}>
                    <p className="font-body text-lg py-2 px-3 self-stretch text-white">Buat Draf Berita</p>
                </div>
                <div className="self-stretch hover:bg-blue-950 hover:cursor-pointer" onClick={() => { dispatch(logout()) }}>
                    <p className="font-body text-lg py-2 px-3 self-stretch text-white">Log out</p>
                </div>
            </div>
        </div>
    );
}