import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from '@/states/preload/action';
import OnboardingLayout from '@/components/Auth/OnboardingLayout';
import { toast } from 'react-toastify';


export default function Home() {

    const auth = useSelector((state) => state.auth);
    const preload = useSelector((state) => state.preload);
    const dispatch = useDispatch();

    const router = useRouter();

    const handleRegister = async () => {
        router.push("/auth/register")
    };

    const handleLogin = async () => {
        router.push("/auth/login")
    };

    useEffect(() => {
        dispatch(asyncPreloadProcess());
    }, [dispatch]);

    if (preload) {
        return <OnboardingLayout handleRegister={handleRegister} handleLogin={handleLogin} />;
    }

    if (auth) {
        router.push("/draf");
    } else {
        router.push("/auth/login");
    }

    return (
        <>
            {/* <OnboardingLayout handleRegister={handleRegister} handleLogin={handleLogin} /> */}
        </>
    );
}