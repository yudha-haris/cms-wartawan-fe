import React, { useState } from 'react';
import InputText from "@/components/Inputs/Text";
import Link from 'next/link';
import BackgroundImage from '@/components/BackgroundImage/BackgroundImage';
import { useRouter } from "next/router";


export default function Register() {

    const BE_URI = "http://localhost:9000";

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleEmailChange = (newValue) => {
        setEmail(newValue);
      };

    const handleUsernameChange = (newValue) => {
        setUsername(newValue);
    };
    
    const handlePasswordChange = (newValue) => {
        setPassword(newValue);
    };

    const handleRegister = async () => {

        console.log('Email:', email);
        console.log('Email:', username);
        console.log('Password:', password);

        if (!(email !== "" && username !== "" && password !== "")) {
            console.log("isi dulu")
        } else {
            router.push("/draf");
        }

    };

    return (

        <main className='flex justify-center items-center'>

            <BackgroundImage image_url="https://source.unsplash.com/WYd_PkCa1BY" />

                <div className="flex flex-col min-h-screen w-96 items-center place-items-center p-20 gap-y-4">

                    <div className='flex flex-col place-items-center pb-8'>
                        <h1 className="font-heading place-self-center text-6xl font-bold">AINGS</h1>
                        <p className='font-body text-lg place-self-center text-center'>Artificial Intelligence News Generator System</p>
                    </div>

                    <h1 className="font-heading place-self-center text-2xl font-bold pb-4">Daftarkan Akun</h1>
                    
                    <div className='flex flex-col place-items-center gap-y-2 justify-stretch'>
                        <InputText id="email" type="email" placeholder="email@domain.com" onInputChange={handleEmailChange} />
                        <InputText id="username" type="text" placeholder="Username" onInputChange={handleUsernameChange} />
                        <InputText id="password" type="password" placeholder="Password" onInputChange={handlePasswordChange} />
                    </div>

                    <button className="bg-blue-200 py-2 px-4 rounded-lg shadow-sm"
                            onClick={handleRegister}>Daftar</button>

                    <p className='font-body'>
                        Sudah punya akun? <Link href="/auth/login"><span className='text-blue-500 underline-offset-1'>Masuk</span></Link>.
                    </p>

                </div>
            
        </main>

    );
}