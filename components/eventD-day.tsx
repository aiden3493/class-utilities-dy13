import {useState} from "react";

const DDay = (props: any) => {

    const [year, setYear] = useState(new Date().getFullYear())
    const [month, setMonth] = useState(parseInt(new Date().getMonth().toString()) + 1)
    const [date, setDay] = useState(parseInt(new Date().getDate().toString()))

    const startDate = new Date(year, month, date)
    const endDate = new Date(props.year, props.month, props.date)

    const btMs = endDate.getTime() - startDate.getTime()
    const btDay = btMs / (1000 * 60 * 60 * 24) === 0 ? "Day" : btMs / (1000 * 60 * 60 * 24)

    setInterval(() => setDay(parseInt(new Date().getDate().toString())), 1000)

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className={`${props.main ? "text-3xl" : "text-xl"}`}>{props.event}</h1>
            <h1 className={"text-ms"}>{`${props.year}.${props.month}.${props.date}`}</h1>
            <h1 className={`${props.main ? "text-4xl" : "text-2xl"} text-green-300`}>{`D - ${btDay}`}</h1>
        </div>
    )
}

export default DDay