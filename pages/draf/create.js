import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Textbox from "@/components/Inputs/Textbox";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useRouter } from 'next/navigation'
import DraftViewAfterCreateLayout from '@/components/Draf/DraftViewAfterCreateLayout';

export default function CreateDrafBerita() {

    const router = useRouter()
    
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isDoneGenerate, setIsDoneGenerate] = useState(false);

    const PROMPT_PREPEND = "Buatkan berita mengenai ";

    const BE_URI = "https://ta-aings-399219.uc.r.appspot.com";

    const [JWT_TOKEN, setJWT_TOKEN] = useState('');
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect( () => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            setJWT_TOKEN(token);
        }
    }, []);

    const handlePromptChange = (newValue) => {
        setPrompt(newValue);
    };

    const headers = {
        'Authorization': `Bearer ${JWT_TOKEN}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BE_URI,
      };

    const handleGenerateBerita = async () => {

        setIsLoading(true);
        
        try {
        
            const response = await axios.post(
                BE_URI.concat('/v1/draft/create'), 
                { 
                    "prompt": PROMPT_PREPEND.concat(prompt), 
                }, 
                { headers} 
                ).then( (response) => {
                    console.log('API response:', response.data);
                    setIsLoading(false);
                    setIsDoneGenerate(true);
                    setTitle(response.data.title);
                    setContent(response.data.content);
                });

          } catch (error) {
            console.error('Error:', error);
            console.log("ada error")
        }
    }

    return (
        <div className="flex flex-row min-h-screen bg-blue-50">
            <Sidebar />
            <div className="flex flex-col place-items-center p-20">

                {/* <div className='flex flex-col px-20 pt-10 pb-40 rounded-xl bg-white border-2 border-blue-400'> */}
                    
                    <div className="flex flex-col content-center place-items-start py-10">
                        <h1 className="font-heading place-self-start text-5xl font-bold pb-8 text-black">Buat Draf Berita</h1>
                        <p className="font-body text-lg text-black">Buat draf berita secara otomatis dengan bantuan AI!
                        <br></br>Cukup masukkan deskripsi berita yang ingin dibuat pada kolom berikut.</p>
                    </div>

                    <div className="flex flex-col items-center self-stretch gap-3">
                        <Textbox 
                            id="prompt" 
                            placeholder="Masukkan deskripsi berita yang ingin dibuat"
                            onInputChange={handlePromptChange} />
                            
                        { isLoading ? 
                            <button disabled type="button" 
                                className="
                                py-2 px-4 mr-2 text-md font-medium text-gray-900 bg-white rounded-lg border border-gray-200 
                                focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 
                                inline-flex items-center text-black">
                                <svg aria-hidden="true" role="status" className="inline w-6 h-6 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                                </svg>
                                Sistem sedang Generate Berita...
                            </button>
                            :  (isDoneGenerate ? 
                                    <button disabled type='button' 
                                        className='bg-green-400 py-2 px-4 rounded-lg font-body text-md text-black'>Generate Done!</button> 
                                    
                                    
                                : <button className="bg-blue-300 py-2 px-4 rounded-lg font-body text-md text-black"
                                    onClick={handleGenerateBerita}>Buat Berita</button>)
                        } {isDoneGenerate ? (<DraftViewAfterCreateLayout title={title} content={content} />) : <p></p>}

                    </div>

                {/* </div> */}

            </div>
        </div>
    );
}