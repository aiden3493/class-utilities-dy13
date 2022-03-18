import { useState} from "react";

const Class = () => {
    const [dayOfTheWeek, setDayOfTheWeek] = useState(new Date().getDay() - 1)

    if (dayOfTheWeek === 5) {
        setDayOfTheWeek(4)
    }

    const dayName = ["월요일", "화요일", "수요일", "목요일", "금요일",]

    const Mon = [
        "과학",
        "과학",
        "수학",
        "진로",
        "국어",
        "주선",
        "주선",
    ]

    const Tue = [
        "도덕",
        "도덕",
        "보건",
        "국어",
        "자율",
        "수학",
    ]

    const Wen = [
        "영어",
        "수학",
        "기가",
        "기가",
        "기가",
    ]

    const Thu = [
        "체육",
        "체육",
        "영어",
        "국어",
        "기가",
        "과학",
        "미술",
    ]

    const Fri = [
        "사회",
        "사회",
        "체육",
        "체육",
        "예술",
        "예술",
    ]

    const days = [Mon, Tue, Wen, Thu, Fri, [], []]

    const onNextClick = async (e: any) => {
        e.preventDefault()
        if(dayOfTheWeek + 1 < 5) {
            await setDayOfTheWeek((prev) => prev + 1)
        } else {
            await setDayOfTheWeek(0)
        }
    }

    const onBeforeClick = async (e: any) => {
        e.preventDefault()
        if(dayOfTheWeek <= 6) {
            if (dayOfTheWeek === 0) {
                await setDayOfTheWeek(4)
            } else {
                await setDayOfTheWeek((prev) => prev - 1)
            }
        }
    }

    return (
        <div className=" w-96 h-96 rounded-[35px] border-2 border-solid p-[37px] shadow-xl">
            <div className="text-center text-[40px] font-bold font-sans">
                <span className="text-2xl text-center font-medium">
                    school {" "}
                </span>
                Schedule
            </div>

            <div className="w-full flex justify-center items-center">
                <div onClick={onBeforeClick}
                     className="bg-white hover:shadow-md rounded-full w-8 h-8 absolute transition-all duration-150 mr-[305px] mt-[290px] cursor-pointer flex justify-center border-2 border-green-300 text-green-300 text-center font-bold">
                    {"◁"}
                </div>

                <div onClick={onNextClick}
                     className="bg-white hover:shadow-md rounded-full w-8 h-8 absolute transition-all duration-150 ml-[305px] mt-[290px] cursor-pointer flex justify-center border-2 border-green-300 text-green-300 text-center font-bold">
                    {"▷"}
                </div>
            </div>

            <div
                className="mt-3 w-full h-[240px] border-solid border-green-300 border-2 rounded-3xl select-text p-5 flex flex-col items-center font-bold">
                <h2 className="text-center text-xl">{`${dayName[dayOfTheWeek]}`}</h2>
                <div className="flex flex-col justify-center w-full h-full">
                    <div className="flex flex-col items-center -space-y-[4px]">
                        {days[dayOfTheWeek].map((element, index) => <h1 className="font-medium" key={index}>{`${index + 1}. ${element}`}</h1>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Class