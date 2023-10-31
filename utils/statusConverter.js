export default function StatusConverter({ status }) {

    const STATUS = {
        "draft": "Draf",
        "new": "Dikirim ke Redaktur",
        "reviewing": "Disunting Redaktur",
        "reviewed": "Di-review Redaktur",
        "approved": "Disetujui",
        "rejected": "Ditolak",
        "published": "Dipublikasikan",
    };

    return STATUS[status.toLowerCase()];
}

