import React from 'react';
import InputText from "@/components/Inputs/Text";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
import { register } from '@/states/auth/action';
import useInput from '@/hooks/useInput';

export default function RegisterLayout() {

    const router = useRouter();

    const [email, setEmail] = useInput('')
    const [username, setUsername] = useInput('');
    const [password, setPassword] = useInput('');

    const dispatch = useDispatch();

    const handleRegister = async () => {
        dispatch(register({
            email, username, password,
            onSuccess: () => {
                router.push("auth/login");
            }
        }));
    };

    return (
        <main className='flex justify-center items-center min-h-screen w-[640] bg-blue-50'>

            <div className="flex flex-col items-center place-items-center p-20 gap-y-4 rounded-xl bg-white border-2 border-blue-400">

                <div className='flex flex-col place-items-center pb-4'>
                    <h1 className="font-heading place-self-center text-6xl font-bold text-black">AINGS</h1>
                    <p className='font-body text-lg place-self-center text-center text-black'>Artificial Intelligence News Generator System</p>
                </div>

                <h1 className="font-heading place-self-center text-2xl font-bold pb-4 text-black">Daftarkan Akun</h1>

                <div className='flex flex-col place-items-center gap-y-2 justify-stretch'>
                    <InputText id="email" type="email" placeholder="email@domain.com" onInputChange={setEmail} />
                    <InputText id="username" type="text" placeholder="Username" onInputChange={setUsername} />
                    <InputText id="password" type="password" placeholder="Password" onInputChange={setPassword} />
                </div>

                <button className="bg-blue-200 py-2 px-4 rounded-lg shadow-sm text-black"
                    onClick={handleRegister}>Daftar</button>

                <p className='font-body text-black'>
                    Sudah punya akun? <Link href="/auth/login">
                        <span className='text-blue-500 hover:underline hover:decoration-blue-500'>Masuk</span></Link>.
                </p>

            </div>

        </main>
    );
}