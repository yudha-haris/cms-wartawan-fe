import React, { useState } from 'react';
import InputText from "@/components/Inputs/Text";
import Link from 'next/link';
import axios from 'axios';
import { headers } from '@/next.config';
import BackgroundImage from '@/components/BackgroundImage/BackgroundImage';
import { useRouter } from 'next/navigation'


export default function Home() {

    const router = useRouter()

    const handleRegister = async () => {
      router.push("/auth/register")
    };

    const handleLogin = async () => {
      router.push("/auth/login")  
    };
    
    return (
        <main className='flex justify-center items-center'>

            <BackgroundImage image_url="https://source.unsplash.com/WYd_PkCa1BY" />

                <div className="flex flex-col min-h-screen w-96 items-center place-items-center p-20 gap-y-4">
                    
                    <div className='flex flex-col place-items-center pb-8'>
                        <h1 className="font-heading place-self-center text-6xl font-bold">AINGS</h1>
                        <p className='font-body text-lg place-self-center text-center'>Artificial Intelligence News Generator System</p>
                    </div>

                    <button className="bg-blue-200 py-2 px-4 rounded-lg shadow-sm self-stretch"
                            onClick={handleRegister}>Daftarkan Akun</button>

                    <button className="bg-blue-200 py-2 px-4 rounded-lg shadow-sm self-stretch"
                            onClick={handleLogin}>Masuk dengan Akun yang Sudah Ada</button>

                </div>
            
        </main>
    );
}