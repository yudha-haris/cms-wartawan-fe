export default function DatetimeConverter({ datetime }) {

    var timestamp = new Date(datetime);
    var formattedDate = timestamp.toLocaleString();

    // 1/10/2023, 21.54.32
    var date_and_time = formattedDate.split(", ");
    var date = date_and_time[0];
    var time = date_and_time[1];

    var date_splitted = date.split("/");

    const MONTH = {
        1: "Januari",
        2: "Februari",
        3: "Maret",
        4: "April",
        5: "Mei",
        6: "Juni",
        7: "Juli",
        8: "Agustus",
        9: "September",
        10: "Oktober",
        11: "November",
        12: "Desember",
    };

    var result_date = `${date_splitted[0]} ${MONTH[Number(date_splitted[1])]} ${date_splitted[2]}`;
    var result_time = time.slice(0, 5);

    var result = `${result_time}, ${result_date}`

    return result;
}