import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function useRequireAuth() {

    const router = useRouter();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (!auth) {
            router.push("/auth/login");
            toast.error("Silahkan masuk kembali.", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    }, [auth, router]);

    return auth;
}