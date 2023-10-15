import DraftListLayout from "@/components/Draf/DraftListLayout";
import useRequireAuth from "@/hooks/useRequireAuth";

export default function DaftarDrafBerita() {
    const auth = useRequireAuth();
    return (
        <DraftListLayout />
    );
}