import { useRouter } from 'next/navigation'

export default function DraftViewAfterCreateLayout({ title, content }) {

    const router = useRouter()

    return (
        <main className='bg-blue-50 self-stretch'>
            <div className="flex flex-col items-start min-h-screen py-16 px-24 gap-8">
                <div className="flex flex-row items-start gap-4">
                    <h1 className="font-heading text-2xl font-bold text-black">
                        {title}
                    </h1>
                </div>
                <div className="flex flex-col h-[480px] py-8 px-12 items-start self-stretch 
                    bg-white border-2 border-blue-400 rounded-xl gap-y-2 overflow-y-auto">
                    <p className="font-body text-lg text-black">{content}</p>
                </div>
            </div>
        </main>
    );
}
