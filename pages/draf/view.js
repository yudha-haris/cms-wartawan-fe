import DraftViewLayout from "@/components/Draf/DraftViewLayout";

export default function ViewDrafBerita() {

    const DRAFT_TITLE = "Manchester United Menghancurkan Arsenal dengan Skor 8-2 di Tahun 2011";
    const DRAFT_CONTENT = "Manchester United berhasil mencatatkan kemenangan yang mengesankan saat melawan Arsenal dengan skor telak 8-2 pada pertandingan yang berlangsung pada tahun 2011. Pertandingan ini menjadi sorotan publik karena keunggulan yang begitu dominan dari Manchester United.\n\nPertandingan ini berlangsung di Old Trafford, markas Manchester United, yang dipadati oleh ribuan suporter dari kedua tim. Para pemain Manchester United tampil dengan performa yang luar biasa, terutama Wayne Rooney yang mencetak hattrick dan Ashley Young yang menyumbangkan dua gol.\n\nPertandingan dimulai dengan serangan balik cepat dari Manchester United yang berhasil membuka keunggulan melalui gol dari Ashley Young pada menit ke-28. Arsenal mencoba untuk membalas, namun pertahanan yang solid dari Manchester United membuat mereka kesulitan mencetak gol.\n\nPada babak kedua, Manchester United semakin menggila dengan mencetak lima gol tambahan. Gol-gol tersebut dicetak oleh Wayne Rooney, Nani, dan Park Ji-sung. Sementara itu, Arsenal hanya mampu membalas dua gol melalui Robin van Persie dan Theo Walcott.\n\nKemenangan ini menjadi salah satu kemenangan terbesar Manchester United dalam sejarah pertandingan mereka melawan Arsenal. Selain itu, skor yang begitu mencolok juga menjadi catatan tersendiri dalam sejarah pertandingan sepak bola Inggris.\n\nPertandingan ini menjadi sorotan publik karena keunggulan yang begitu dominan dari Manchester United. Kemenangan ini juga menunjukkan kekuatan dan dominasi Manchester United dalam kompetisi sepak bola Inggris pada saat itu.";

    return (
        <DraftViewLayout title={DRAFT_TITLE} content={DRAFT_CONTENT} />
    );
}