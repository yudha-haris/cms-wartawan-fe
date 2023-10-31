export default function StatusConverter({ status }) {

    const STATUS = {
        "draft": "Draf",
        "new": "Dikirim ke Redaktur",
        "reviewing": "Sedang disunting Redaktur",
        "reviewed": "Sudah di-review Redaktur",
        "approved": "Disetujui",
        "rejected": "Ditolak",
        "published": "Dipublikasikan",
    };

    return STATUS[status.toLowerCase()];
}

