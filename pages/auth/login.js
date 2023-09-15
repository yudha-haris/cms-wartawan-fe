import React, { useState } from 'react';
import InputText from "@/components/Inputs/Text";
import Link from 'next/link';
import axios from 'axios';
import { headers } from '@/next.config';
import BackgroundImage from '@/components/BackgroundImage/BackgroundImage';
import { useRouter } from 'next/navigation'


export default function Login() {

    const router = useRouter()

    const BE_URI = "http://localhost:9000";

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (newValue) => {
        setEmail(newValue);
      };

    const handleUsernameChange = (newValue) => {
        setUsername(newValue);
    };
    
    const handlePasswordChange = (newValue) => {
        setPassword(newValue);
    };

    const handleLogin = async () => {

        console.log('Email:', email);
        console.log('Email:', username);
        console.log('Password:', password);

        router.push("/draf")

        // try {
            
        //     const response = await axios.post(
        //         BE_URI.concat('/auth/login'), 
        //         { 
        //             "email": "name@domain.com",
        //             "username": username, 
        //             "password": password 
        //         });

        //     console.log('Login response:', response.data);
        //     router.push("/draf")

        //   } catch (error) {
        //     console.error('Login error:', error);
        //     console.log("ada error")
        // }

    };

    return (
        <main className='flex justify-center items-center'>

            <BackgroundImage image_url="https://source.unsplash.com/WYd_PkCa1BY" />

                <div className="flex flex-col min-h-screen w-96 items-center place-items-center p-20 gap-y-4">
                    
                    <div className='flex flex-col place-items-center pb-8'>
                        <h1 className="font-heading place-self-center text-6xl font-bold">AINGS</h1>
                        <p className='font-body text-lg place-self-center text-center'>Artificial Intelligence News Generator System</p>
                    </div>
                    
                    <h1 className="font-heading place-self-center text-2xl font-bold pb-4">Masuk</h1>
                    
                    <div className='flex flex-col place-items-center gap-y-2 justify-stretch'>
                        <InputText id="email" type="email" placeholder="email@domain.com" onInputChange={handleEmailChange} />
                        <InputText id="username" type="text" placeholder="Username" onInputChange={handleUsernameChange} />
                        <InputText id="password" type="password" placeholder="Password" onInputChange={handlePasswordChange} />
                    </div>

                    <button className="bg-blue-200 py-2 px-4 rounded-lg shadow-sm"
                            onClick={handleLogin}>Masuk</button>

                    <p className='font-body'>
                        Belum punya akun? <Link href="/auth/register"><span className='text-blue-500 underline-offset-1'>Daftarkan</span></Link>.
                    </p>

                </div>
            
        </main>
    );
}