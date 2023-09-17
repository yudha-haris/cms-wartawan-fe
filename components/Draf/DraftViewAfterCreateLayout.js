import { useRouter } from 'next/navigation'

export default function DraftViewAfterCreateLayout({title, content}) {
    
    const router = useRouter()

    // const DRAFT_CONTENT_EDITED = content.split(/\n/g);

    return (
        <main className='bg-blue-50 self-stretch'>
            <div className="flex flex-col items-start min-h-screen py-16 px-24 gap-8">
                <div className="flex flex-row items-start gap-4">
                    {/* <button className="font-body self-stretch px-4 border-2 border-blue-400 rounded-lg hover:bg-blue-100" 
                        onClick={() => router.back()}>Kembali</button> */}
                    <h1 className="font-heading text-2xl font-bold">
                        {title}
                    </h1>
                </div>
                <div className="flex flex-col h-[480px] py-8 px-12 items-start self-stretch 
                    bg-white border-2 border-blue-400 rounded-xl gap-y-2 overflow-y-auto">
                    {/* {DRAFT_CONTENT_EDITED.map((line, index) => (
                        // <p key={index}>{line}</p>
                        <p key={index} className="font-body text-lg"> {line} </p>
                    ))} */} <p className="font-body text-lg">{content}</p>
                </div>
            </div>
        </main>
    );
}
