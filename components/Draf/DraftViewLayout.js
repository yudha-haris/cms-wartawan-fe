import { useRouter } from 'next/navigation'
import DatetimeConverter from '@/utils/datetimeConverter';
import { useState } from 'react';
import { useEffect } from 'react';

export default function DraftViewLayout({ draft_detail }) {

    const router = useRouter();
    const [formattedDate, setFormattedDate] = useState('')
    const [isDraft, setIsDraft] = useState(false);

    useEffect(() => {
        if (draft_detail) {
            const date_converted = DatetimeConverter({ datetime: draft_detail.created_at });
            setFormattedDate(date_converted);
            if (draft_detail.status === "draft") {
                setIsDraft(true);
            }
        }
    }, [draft_detail])

    if (!draft_detail) {
        return (<div></div>);
    }

    const content_parsed = (draft_detail.content).split("\n")

    return (
        <div className="flex flex-col items-start self-stretch py-10 px-20 gap-8 min-h-screen w-3/4 bg-blue-50">
            <div className="flex flex-col items-start gap-3 self-stretch">
                <div className="flex flex-1 flex-row items-start gap-2 self-stretch">
                    <button
                        onClick={() => router.push(`/draf`)}
                        className="flex font-body py-1 px-4 border-2 text-blue-600 border-blue-600 rounded-lg 
                                    hover:bg-blue-400 hover:text-white">Kembali
                    </button>
                    <p className="flex flex-1 font-body text-black py-1 justify-center self-center bg-blue-200">Melihat Draf Berita</p>
                </div>
            </div>
            <h1 className="font-heading text-2xl font-bold text-black border-b-1 border-black">{draft_detail.title}</h1>
            <div className='flex flex-1 flex-col py-6 px-10 items-start self-stretch 
                bg-white border-2 border-blue-400 rounded-md gap-y-1 overflow-y-auto'>

                {content_parsed.map((paragraph) => (
                    <p key={paragraph} className='text-black font-body text-md text-justify'>{paragraph}</p>
                ))}

            </div>
            {/* <div className='flex flex-col py-4 px-10 items-start self-stretch
                            bg-white border-2 border-blue-400 rounded-md'>
                <p className='font-body text-md self-stretch'>Dibuat Oleh:</p>
                <p className='font-body text-md self-stretch'>Disupervisi Oleh:</p>
            </div> */}
            {/* <div className='flex flex-row self-stretch justify-between'>
                <button
                    onClick={() => router.push(`/draf`)}
                    className="font-body self-stretch py-2 px-4 border-2 text-blue-600 border-blue-600 rounded-lg hover:bg-blue-400 hover:text-white">
                    Kembali
                </button>
                <div className='flex flex-row gap-3'>
                    <button
                        onClick={() => router.push(`/draf/edit/${draft_detail.draft_id}`)}
                        className='font-body self-stretch py-2 px-5 text-white bg-blue-600 rounded-lg hover:bg-blue-400'>
                        Edit Draf Berita
                    </button>
                </div>
            </div> */}
        </div>
    );
}
