import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from '@/states/preload/action';


export default function Home() {

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const router = useRouter();

    useEffect(() => {
        dispatch(asyncPreloadProcess());
    }, [dispatch]);

    if (auth) {
        router.push("/overview");
    }

    const handleRegister = async () => {
        router.push("/auth/register")
    };

    const handleLogin = async () => {
        router.push("/auth/login")
    };

    return (
        <main className='flex justify-center items-center min-h-screen w-[640] bg-blue-50'>

            <div className="flex flex-col w-96 items-center place-items-center px-20 pt-12 pb-20 gap-y-4 
                    rounded-xl bg-white border-2 border-blue-400">

                <div className='flex flex-col place-items-center pb-6'>
                    <h1 className="font-heading place-self-center text-6xl font-bold text-black">AINGS</h1>
                    <p className='font-body text-lg place-self-center text-center text-black'>Artificial Intelligence News Generator System</p>
                </div>

                <button className="bg-blue-200 py-2 px-4 rounded-lg shadow-sm self-stretch text-black"
                    onClick={handleRegister}>Daftarkan Akun</button>

                <button className="bg-blue-200 py-2 px-4 rounded-lg shadow-sm self-stretch text-black"
                    onClick={handleLogin}>Masuk dengan Akun yang Sudah Ada</button>

            </div>

        </main>
    );
}