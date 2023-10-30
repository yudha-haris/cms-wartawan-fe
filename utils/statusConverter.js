export default function StatusConverter({ status }) {

    const STATUS = {
        "draft": "Draf",
        "new": "Dikirim ke Redaktur",
        "reviewing": "Sedang Disunting Redaktur",
        "reviewed": "Sudah Di-Review Redaktur",
        "approved": "Disetujui",
        "rejected": "Ditolak",
        "Ditolak": "Dipublikasikan",
    };

    return STATUS[status.toLowerCase()];
}

