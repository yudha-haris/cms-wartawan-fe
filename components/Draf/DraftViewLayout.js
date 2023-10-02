import { useRouter } from 'next/navigation'

export default function DraftViewLayout({ draftId, title, content }) {

    const router = useRouter();

    const handleEditDraf = () => {
        router.push(`/draf/edit/${draftId}`)
    };

    return (
        <main className='bg-blue-50'>
            <div className="flex flex-col items-start min-h-screen py-16 px-52 gap-8">
                <div className="flex flex-row items-start gap-4">
                    <button className="font-body self-stretch px-4 border-2 border-blue-400 rounded-lg hover:bg-blue-100"
                        onClick={() => router.back()}>Kembali</button>
                    <h1 className="font-heading text-2xl font-bold text-black">{title}</h1>
                </div>
                <div className="flex flex-col h-[480px] py-8 px-12 items-start self-stretch 
                    bg-white border-2 border-blue-400 rounded-xl gap-y-2 overflow-y-auto">
                    {content}
                </div>
                <div className='flex flex-row justify-end gap-3'>
                    <button disabled={true}
                        className='font-body text-md self-stretch px-4 py-2 bg-blue-300 rounded-lg disabled:opacity-75'>Tambah Komentar</button>
                    <button
                        onClick={() => handleEditDraf()}
                        className='font-body text-md self-stretch px-4 py-2 bg-blue-300 rounded-lg'>Edit</button>
                </div>
            </div>
        </main>
    );
}
