import DatetimeConverter from "@/utils/datetimeConverter";

export default function ListItem({ title, time, onClick }) {

    const formattedDate = DatetimeConverter({ datetime: time });

    return (
        <div onClick={() => onClick()}
            className="flex flex-col items-start self-stretch py-3 px-8
                            bg-white-200 border-solid border-b-2 border-black-950
                            hover:cursor-pointer hover:bg-gray-100">
            <h1 className="font-body leading-6 text-xl font-semibold text-black">{title}</h1>
            <div className="flex flex-row gap-5">
                <p className="font-body text-md text-black">Dibuat pada: {formattedDate}</p>
            </div>
        </div>
    );
}