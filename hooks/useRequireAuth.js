import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function useRequireAuth() {

    const router = useRouter();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (!auth) {
            router.push("/auth/login");
        }
    }, [auth, router]);

    return auth;
}