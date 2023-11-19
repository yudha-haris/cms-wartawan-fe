export default function DateTimeConverter({ datetime }) {
    const date = new Date(datetime);

    // Define the names of days and months in Indonesian
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    let dayName = days[date.getUTCDay()];
    const dayOfMonth = date.getUTCDate();
    const monthName = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    let rawHour = date.getUTCHours() + 7;
    let hour = date.getUTCHours();
    if (rawHour > 23) {
        rawHour -= 24;
        dayName = dayName === "Sabtu" ? "Senin" : days[date.getUTCDay() + 1];
    }
    hour = rawHour;

    const minute = (date.getUTCMinutes() < 10 ? "0" : "") + date.getUTCMinutes();

    return `${hour}:${minute}, ${dayOfMonth} ${monthName} ${year}`;
}