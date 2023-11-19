export default function StatusConverter({ status }) {

    const STATUS = {
        "draft": "Draf",
        "new": "Dikirim ke Redaktur",
        "reviewing": "Sedang disunting Redaktur",
        "reviewed": "Dikembalikan oleh Redaktur",
        "approved": "Disetujui",
        "rejected": "Ditolak",
        "published": "Dipublikasikan",
    };

    return STATUS[status.toLowerCase()];
}

