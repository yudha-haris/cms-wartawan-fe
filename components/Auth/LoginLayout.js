import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputText from "@/components/Inputs/Text";
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import useInput from '@/hooks/useInput';
import { login } from '@/states/auth/action';

export default function LoginLayout() {

    const router = useRouter();

    const [email, setEmail] = useInput('')
    const [username, setUsername] = useInput('');
    const [password, setPassword] = useInput('');

    const [isUseUsername, setIsUseUsername] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleUseUsername = (value) => {
        setIsUseUsername(value);
    };

    const dispatch = useDispatch();

    const handleLogin = async () => {
        setIsLoading(true);
        if (isUseUsername) {
            dispatch(login({
                username, password,
                onSuccess: () => {
                    setIsLoading(false);
                    router.push("/draf");
                },
                onError: () => {
                    setIsLoading(false);
                }
            }));
        } else {
            dispatch(login({
                email, password,
                onSuccess: () => {
                    setIsLoading(false);
                    router.push("/draf");
                },
                onError: () => {
                    setIsLoading(false);
                }
            }));
        }
    };


    return (
        <main className='flex justify-center items-center min-h-screen w-[640] bg-blue-50'>

            <form className="flex flex-col items-center place-items-center p-20 gap-y-4 rounded-xl bg-white border-2 border-blue-400">

                <div className='flex flex-col place-items-center pb-4'>
                    <h1 className="font-heading place-self-center text-6xl font-bold text-black">AINGS</h1>
                    <p className='font-body text-lg place-self-center text-center text-black'>Artificial Intelligence News Generator System</p>
                </div>

                <h1 className="font-heading place-self-center text-2xl font-bold pb-4 text-black">Masuk</h1>

                <div className='flex flex-col place-items-center gap-y-2 justify-stretch'>
                    {isUseUsername
                        ? <>
                            <p className='font-body text-black'>
                                Coba masuk dengan <span
                                    className='text-blue-500 hover:underline hover:decoration-blue-500 hover:cursor-pointer'
                                    onClick={() => { handleUseUsername(false) }}>email</span></p>
                            <InputText id="username" type="text" placeholder="Username" onInputChange={setUsername} />
                        </>
                        : <>
                            <p className='font-body text-black'>
                                Coba masuk dengan <span
                                    className='text-blue-500 hover:underline hover:decoration-blue-500 hover:cursor-pointer'
                                    onClick={() => { handleUseUsername(true) }}>username</span></p>
                            <InputText id="email" type="text" placeholder="Email" onInputChange={setEmail} />
                        </>
                    }
                    <InputText id="password" type="password" placeholder="Password" onInputChange={setPassword} />
                </div>

                {
                    isLoading
                        ? <button disabled type="button"
                            className="
                            font-body py-2 px-5
                            font-medium bg-gray-100 rounded-lg border border-gray-200 
                            focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 
                            inline-flex items-center text-black">
                            <svg aria-hidden="true" role="status" className="inline w-6 h-6 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                            </svg>
                            Masuk...
                        </button>
                        : <button type='submit' className="font-body py-2 px-5 text-white bg-blue-600 rounded-lg hover:bg-blue-400"
                            onClick={handleLogin}>Masuk</button>
                }


                <p className='font-body text-black'>
                    Belum punya akun? <Link href="/auth/register">
                        <span className='text-blue-500 hover:underline hover:decoration-blue-500'>Daftarkan</span></Link>.
                </p>

            </form>

        </main>
    );
}