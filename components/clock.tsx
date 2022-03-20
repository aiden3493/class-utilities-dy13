import {useState} from "react";

const Clock = () => {
    const [displayH, setDisplayH] = useState(new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours())
    const [displayM, setDisplayM] = useState((new Date().getMinutes() < 10) ? '0' + new Date().getMinutes().toString() : new Date().getMinutes().toString())

    const [h, setH] = useState(new Date().getHours())
    const [m, setM] = useState(new Date().getMinutes())
    const [s, setS] = useState(new Date().getSeconds())
    const [amAndPm, setAmAndPm] = useState<"PM" | "AM">(h > 12 ? "PM" : "AM")

    setInterval(() => setDisplayH( new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours()), 1000)
    setInterval(() => setDisplayM((new Date().getMinutes() < 10) ? '0' + new Date().getMinutes().toString() : new Date().getMinutes().toString()), 1000)
    setInterval(() => setH(new Date().getHours()))
    setInterval(() => setM(new Date().getMinutes()))
    setInterval(() => setS(new Date().getSeconds()))

    return (
        <div className="w-96 h-96 rounded-[35px] border-2 border-solid p-5 shadow-xl ">
            <div
                className="flex items-center flex-col w-full h-full rounded-[25px] border-solid border-2 border-green-300 pt-7 pl-7 pr-7 mb-2">
                <h1 className="text-2xl text-center">Time is</h1>
                <div className="flex flex-row justify-center -mt-3">
                    <h2 className="text-center text-[40px] font-bold font-sans">{`${displayH}:${displayM}`}</h2>
                    <h2 className="text-center text-[20px] font-bold mt-6">{`${amAndPm}`}</h2>
                </div>
                <div
                    className="relative flex justify-center items-center bg-white w-[180px] h-[180px] mt-5 rounded-full shadow-md bg-[url('../public/analog_clock.png')] bg-cover p-16 before:w-[6px] before:h-[6px] before:bg-black before:rounded-full before:border-solid before:border-[1px] before:border-white before:z-50 before:absolute">
                    <div className="absolute w-[70px] h-[70px] ">
                        <div
                            className="w-[69px] h-[69px] flex justify-center rounded-full before:w-[3px] before:h-[32px] before:bg-black before:rounded before:origin-bottom transition-all ml-[0.3px]"
                            style={{transform: `rotateZ(${h * 30}deg)`}}></div>
                    </div>
                    <div className="absolute w-[80px] h-[80px]">
                        <div
                            className="w-[80px] h-[80px] flex justify-center rounded-full before:w-[2px] before:h-[41px] before:bg-black before:rounded before:origin-bottom"
                            style={{transform: `rotateZ(${m * 6}deg)`}}>
                        </div>
                    </div>
                    <div className="absolute w-[90px] h-[90px]">
                        <div
                            className="w-[90px] h-[90px] flex justify-center rounded-full before:w-[1px] before:h-[48px] before:bg-black before:bg-green-300 before:rounded before:origin-bottom"
                            style={{transform: `rotateZ(${s * 6}deg)`}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clock