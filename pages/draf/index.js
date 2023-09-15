import Editor from "@/components/Editor/Editor";
import Sidebar from "@/components/Sidebar/Sidebar";
import ListItem from "@/components/ListItem/ListItem";

export default function DaftarDrafBerita() {

    const JUDUL_PLACEHOLDER = "Bantu Warga Terdampak Kekeringan, PMI Depok Distribusikan 15.000 Liter Air Bersih";
    const TIME_PLACEHOLDER = "09.00 12/09/2023"

    return (
        <div className="flex flex-row min-h-screen w-fit">
            <Sidebar />
            <div className='flex flex-col self-stretch items-start content-start p-20 max-w-fit '>
                <h1 className='font-heading text-5xl font-bold pb-8 self-stretch'>Daftar Draf Berita</h1>  
                <div className='flex flex-col self-stretch items-start content-start'>
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