import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function usePreload() {

    const router = useRouter();
    const preload = useSelector((state) => state.preload);

    useEffect(() => {
        if (!preload) {
            router.push("/auth/login");
            toast.error("Silahkan masuk kembali.", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    }, [preload, router]);

    return preload;
}