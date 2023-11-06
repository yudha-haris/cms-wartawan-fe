import DateTimeConverter from "@/utils/datetimeConverter";
import StatusConverter from "@/utils/statusConverter";

export default function ListItem({ title, status, time, onClick }) {

    const formattedStatus = StatusConverter({ status });
    const formattedDate = DateTimeConverter({ datetime: time });

    return (
        <div onClick={() => onClick()}
            className="flex flex-col items-start self-stretch py-3 px-8 gap-1.5
                            bg-white-200 border-solid border-b-2 border-black-950
                            hover:cursor-pointer hover:bg-gray-100">
            <h1 className="font-body leading-6 text-xl font-semibold text-black">{title}</h1>
            <div className="flex flex-row gap-2">
                <p className="font-body text-md text-black bg-blue-200 px-2 rounded-sm">{formattedStatus}</p>
                <p className="font-body text-md text-black">
                    {(status === "draft") ? "Dibuat pada" : "Diubah pada"} {formattedDate}</p>
            </div>
        </div>
    );
}