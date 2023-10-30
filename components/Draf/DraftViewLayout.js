import { useRouter } from 'next/navigation'
import Editor from '../Editor/Editor';
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

    // const CONTENT_PLACEHOLDER = `
    // Sebuah terobosan teknologi baru telah dilakukan oleh sekelompok pelajar Indonesia. Mereka berhasil menciptakan laptop canggih terbaru 
    // yang mampu bersaing dengan produk-produk internasional. Laptop ini memiliki berbagai fitur dan spesifikasi yang mengesankan, 
    // menjadikannya sebagai pilihan yang menarik bagi para pengguna gadget.\n\nDalam pengembangannya, laptop ini melibatkan sejumlah pelajar 
    // dari berbagai sekolah di Indonesia. Mereka bekerja sama dengan para ahli teknologi dan desain untuk menciptakan produk yang inovatif 
    // dan berkualitas tinggi. Dengan semangat kreativitas dan keinginan untuk menghasilkan sesuatu yang bermanfaat, mereka berhasil 
    // menghasilkan laptop yang dapat memenuhi kebutuhan pengguna modern.\n\nLaptop canggih ini memiliki desain yang elegan dan ringan, 
    // membuatnya mudah dibawa kemana-mana. Selain itu, laptop ini juga dilengkapi dengan prosesor terbaru yang memberikan performa yang cepat 
    // dan responsif. Dengan kapasitas penyimpanan yang besar, pengguna dapat menyimpan berbagai file dan dokumen dengan mudah. Tidak hanya itu, 
    // laptop ini juga dilengkapi dengan layar berkualitas tinggi yang memberikan pengalaman visual yang memukau.\n\nTidak hanya dari segi 
    // desain dan performa, laptop canggih ini juga memiliki keunggulan dalam hal keamanan. Dilengkapi dengan teknologi keamanan terkini, 
    // laptop ini dapat melindungi data pengguna dari ancaman virus dan serangan siber. Dengan demikian, pengguna dapat dengan tenang 
    // menggunakan laptop ini tanpa khawatir akan kebocoran data pribadi.\n\nKeberhasilan pelajar Indonesia dalam menciptakan laptop canggih 
    // ini menjadi bukti bahwa potensi dan kreativitas anak bangsa tidak kalah dengan negara-negara lain. Diharapkan, prestasi ini dapat 
    // menjadi inspirasi bagi generasi muda Indonesia untuk terus berinovasi dan menghasilkan produk-produk berkualitas tinggi yang dapat 
    // bersaing di pasar global.\n\nDengan adanya laptop canggih terbaru buatan pelajar Indonesia ini, diharapkan dapat meningkatkan daya 
    // saing industri teknologi dalam negeri. Selain itu, produk ini juga dapat menjadi pilihan yang menarik bagi masyarakat Indonesia yang 
    // mencari laptop dengan kualitas tinggi namun dengan harga yang terjangkau.\n\n
    // Sebuah terobosan teknologi baru telah dilakukan oleh sekelompok pelajar Indonesia. Mereka berhasil menciptakan laptop canggih terbaru 
    // yang mampu bersaing dengan produk-produk internasional. Laptop ini memiliki berbagai fitur dan spesifikasi yang mengesankan, 
    // menjadikannya sebagai pilihan yang menarik bagi para pengguna gadget.\n\nDalam pengembangannya, laptop ini melibatkan sejumlah pelajar 
    // dari berbagai sekolah di Indonesia. Mereka bekerja sama dengan para ahli teknologi dan desain untuk menciptakan produk yang inovatif 
    // dan berkualitas tinggi. Dengan semangat kreativitas dan keinginan untuk menghasilkan sesuatu yang bermanfaat, mereka berhasil 
    // menghasilkan laptop yang dapat memenuhi kebutuhan pengguna modern.\n\nLaptop canggih ini memiliki desain yang elegan dan ringan, 
    // membuatnya mudah dibawa kemana-mana. Selain itu, laptop ini juga dilengkapi dengan prosesor terbaru yang memberikan performa yang cepat 
    // dan responsif. Dengan kapasitas penyimpanan yang besar, pengguna dapat menyimpan berbagai file dan dokumen dengan mudah. Tidak hanya itu, 
    // laptop ini juga dilengkapi dengan layar berkualitas tinggi yang memberikan pengalaman visual yang memukau.\n\nTidak hanya dari segi 
    // desain dan performa, laptop canggih ini juga memiliki keunggulan dalam hal keamanan. Dilengkapi dengan teknologi keamanan terkini, 
    // laptop ini dapat melindungi data pengguna dari ancaman virus dan serangan siber. Dengan demikian, pengguna dapat dengan tenang 
    // menggunakan laptop ini tanpa khawatir akan kebocoran data pribadi.\n\nKeberhasilan pelajar Indonesia dalam menciptakan laptop canggih 
    // ini menjadi bukti bahwa potensi dan kreativitas anak bangsa tidak kalah dengan negara-negara lain. Diharapkan, prestasi ini dapat 
    // menjadi inspirasi bagi generasi muda Indonesia untuk terus berinovasi dan menghasilkan produk-produk berkualitas tinggi yang dapat 
    // bersaing di pasar global.\n\nDengan adanya laptop canggih terbaru buatan pelajar Indonesia ini, diharapkan dapat meningkatkan daya 
    // saing industri teknologi dalam negeri. Selain itu, produk ini juga dapat menjadi pilihan yang menarik bagi masyarakat Indonesia yang 
    // mencari laptop dengan kualitas tinggi namun dengan harga yang terjangkau.
    // `;

    return (
        <div className="flex flex-col items-start self-stretch py-10 px-20 gap-8 bg-blue-50 max-h-screen w-3/4">
            <div className="flex flex-col items-start gap-3 self-stretch">
                <div className="flex flex-1 flex-row items-start gap-2 self-stretch">
                    <button
                        onClick={() => router.push(`/draf`)}
                        className="flex font-body py-1 px-4 border-2 text-blue-600 border-blue-600 rounded-lg hover:bg-blue-400 hover:text-white">
                        Kembali
                    </button>
                    <p className="flex flex-1 font-body text-black py-1 justify-center self-center bg-blue-200">Melihat Draf Berita</p>
                </div>
            </div>
            <h1 className="font-heading text-2xl font-bold text-black border-b-1 border-black">{draft_detail.title}</h1>
            <div className='flex flex-1 flex-col py-6 px-10 items-start self-stretch 
                bg-white border-2 border-blue-400 rounded-md gap-y-2 overflow-y-auto'>
                <p className='text-black font-body text-md'>
                    {/* {CONTENT_PLACEHOLDER} */}
                    {draft_detail.content}
                </p>
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
