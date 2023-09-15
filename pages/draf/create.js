import React, { useState } from 'react';
import InputText from "@/components/Inputs/Text";
import Textbox from "@/components/Inputs/Textbox";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function CreateDrafBerita() {

    const [title, setTitle] = useState('');
    const [prompt, setPrompt] = useState('');

    const handleTitleChange = (newValue) => {
        setTitle(newValue);
    };

    const handlePromptChange = (newValue) => {
        setPrompt(newValue);
    };

    return (
        <div className="flex flex-row">
            <Sidebar />
            <div className="flex flex-col min-h-screen place-items-center p-20 justify-stretch">
                <div className="flex flex-col content-center place-items-start py-10">
                    <h1 className="font-heading place-self-start text-5xl font-bold pb-8">Buat Draf Berita</h1>
                    <p className="font-body text-lg">Buat draf berita secara otomatis dengan bantuan AI!
                    <br></br>Cukup masukkan judul berita dan deskripsi dari berita yang ingin dibuat pada kolom-kolom berikut ini.</p>
                </div>

                <div className="flex flex-col items-end self-stretch gap-3">
                    <InputText 
                        id="title" 
                        type="text" 
                        placeholder="Masukkan judul berita" 
                        onInputChange={handleTitleChange} />
                    <Textbox 
                        id="prompt" 
                        placeholder="Masukkan prompt untuk berita yang akan dibuat"
                        onInputChange={handlePromptChange} />
                    <button className="bg-blue-200 py-2 px-4 rounded-lg shadow-sm">Buat Berita</button>
                </div>

            </div>
        </div>
    );
}