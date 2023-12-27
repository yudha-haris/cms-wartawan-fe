import DraftListLayout from "@/components/Draf/DraftListLayout";
import useRequireAuth from "@/hooks/useRequireAuth";
import Head from "next/head";

export default function DaftarDrafBerita() {
    // const auth = useRequireAuth();
    return (
        <>
            <Head>
                <title>Daftar Draf Berita</title>
            </Head>
            <DraftListLayout />
        </>

    );
}