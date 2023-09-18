import React, { useState } from 'react';
import InputText from "@/components/Inputs/Text";
import Link from 'next/link';
import axios from 'axios';
import { headers } from '@/next.config';
import BackgroundImage from '@/components/BackgroundImage/BackgroundImage';
import { useRouter } from 'next/navigation'



export default function Login() {

    const router = useRouter()

    const BE_URI = "https://ta-aings-399219.uc.r.appspot.com";

    const [email, setEmail] = useState('admin@admin.com');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);

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

        try {
            
            const response = await axios.post(
                BE_URI.concat('/auth/login'), 
                { 
                    "email": email,
                    "username": username, 
                    "password": password 
                }
                ).then( (response) => {
                    setIsFailed(false);
                    setIsSuccess(true);            
                    localStorage.setItem('jwtToken', response.data.token); 
                });

            setTimeout(() => {
                        router.push('/overview');
                      }, 2000);

          } catch (error) {
            console.log("ada error");
            console.error('Login error:', error);
            setIsFailed(true);
        }

    };

    return (
        <main className='flex justify-center items-center min-h-screen w-[640] bg-blue-50'>

            <BackgroundImage image_url="https://source.unsplash.com/WYd_PkCa1BY" />

                <div className="flex flex-col items-center place-items-center p-20 gap-y-4 rounded-xl bg-white border-2 border-blue-400">
                    
                    <div className='flex flex-col place-items-center pb-4'>
                        <h1 className="font-heading place-self-center text-6xl font-bold text-black">AINGS</h1>
                        <p className='font-body text-lg place-self-center text-center text-black'>Artificial Intelligence News Generator System</p>
                    </div>
                    
                    <h1 className="font-heading place-self-center text-2xl font-bold pb-4 text-black">Masuk</h1>
                    
                    <div className='flex flex-col place-items-center gap-y-2 justify-stretch'>
                        {/* <InputText id="email" type="email" placeholder="email@domain.com" onInputChange={handleEmailChange} /> */}
                        <InputText id="username" type="text" placeholder="Username" onInputChange={handleUsernameChange} />
                        <InputText id="password" type="password" placeholder="Password" onInputChange={handlePasswordChange} />
                    </div>

                    <button className="bg-blue-200 py-2 px-4 rounded-lg shadow-sm text-black"
                            onClick={handleLogin}>Masuk</button>

                    <p className='font-body text-black'>
                        Belum punya akun? <Link href="/auth/register"><span className='text-blue-500 underline-offset-1'>Daftarkan</span></Link>.
                    </p>

                    { isFailed ? 
                        <div className='bg-red-300 px-4 py-2 rounded-lg'>
                            <p className='font-body text-lg text-center text-black'>Username atau Password Salah</p>
                        </div>
                    : ( isSuccess ? 
                        <div className='bg-green-300 px-4 py-2 rounded-lg'>
                            <p className='font-body text-lg text-black'>Berhasil masuk!</p>
                        </div>
                    : <div></div> ) }

                </div>
            
        </main>
    );
}