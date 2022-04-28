import {useEffect, useState} from "react";

const Meal = () => {
    const fullYear = new Date().getFullYear()
    const Month = new Date().getMonth() < 10 ? '0' + (parseInt(new Date().getMonth().toString()) + 1).toString() : (parseInt(new Date().getMonth().toString()) + 1).toString()
    const [day, setDay] = useState(parseInt(new Date().getDate() < 10 ? '0' + new Date().getDate().toString() : new Date().getDate().toString()))

    const [meal, setMeal] = useState<string[]>([])

    async function fetchAPI(year:any, month:any, day:any) {
        const response = await fetch(`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=2d9929f041b342ba8e6701c69cd5ff24&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7621058&MLSV_YMD=${year}${month}${day}`)
        const json = await response.json()
        try {
            return (json.mealServiceDietInfo[1].row[0].DDISH_NM)
        } catch {
            return ("해당 날짜에 급식데이터가 없습니다")
        }

    }

    function formatMeal(value: String) {
        const format =  `${value}`.replaceAll("0","").replaceAll("1", "").replaceAll("2", "").replaceAll("3", "").replaceAll("4", "").replaceAll("5", "").replaceAll("6", "").replaceAll("7", "").replaceAll("8", "").replaceAll("9", "").replaceAll("10", "").replaceAll("12", "").replaceAll("13", "").replaceAll("14", "").replaceAll("15", "").replaceAll("16", "").replaceAll("17", "").replaceAll("18", "").replaceAll(".", "").replaceAll("(공)", "").replaceAll("(완공)", "").replaceAll("(주식)", "").replaceAll("(중등)", "").replaceAll("(조각)", "").replaceAll("(소)", "").replaceAll("(대)", "").replaceAll("(완)", "").replaceAll("(오븐)", "").replaceAll("(분쇄육)", "").replaceAll("()", "").split("<br/>")
        const unique = format.filter((element, index) => {
            return format.indexOf(element) === index;
        });

        return unique
    }

    const onNextClick = async (e: any) => {
        e.preventDefault()
        if(day < 31) {
            await fetchAPI(fullYear, Month, day + 1).then((value) => setMeal(formatMeal(value)))
            await setDay((prev) => prev + 1)
        } else {
            await fetchAPI(fullYear, Month, 1).then((value) => setMeal(formatMeal(value)))
            await setDay(1)
        }
    }

    const onBeforeClick = async (e: any) => {
        e.preventDefault()
        if(day <= 31) {
            if (day - 1 === 0) {
                await fetchAPI(fullYear, Month, 31).then((value) => setMeal(formatMeal(value)))
                await setDay(31)
            } else {
                await fetchAPI(fullYear, Month, day - 1).then((value) => setMeal(formatMeal(value)))
                await setDay((prev) => prev - 1)
            }
        }
    }

    useEffect(() => {
        fetchAPI(fullYear, Month, day).then((value) => setMeal(formatMeal(value)))
    }, [day, Month, fullYear])

    return (
        <div className=" w-[22.5rem] h-[22.5rem] rounded-[35px] border-2 border-solid p-[37px] shadow-xl">
            <div className="text-center text-[40px] font-bold font-sans">
                <span className="text-2xl text-center font-medium">
                    school {" "}
                </span>
                Lunch
            </div>

            <div className="relative w-full flex justify-center ">
                <div onClick={onBeforeClick}
                     className="bg-white hover:shadow-md rounded-full w-8 h-8 absolute transition-all duration-150 right-[265px] top-[120px] cursor-pointer flex justify-center border-2 border-green-300 text-green-300 text-center font-bold z-50">
                    <h1 className="mr-[3px] mt-[1px] text-center flex  content-center justify-center">◁</h1>
                </div>

                <div onClick={onNextClick}
                     className="bg-white hover:shadow-md rounded-full w-8 h-8 absolute transition-all duration-150 left-[265px] top-[120px] cursor-pointer flex justify-center border-2 border-green-300 text-green-300 text-center font-bold z-50">
                    <h1 className="ml-[3px] mt-[1px] text-center flex content-center justify-center">▷</h1>
                </div>
            </div>

            <div
                className="mt-3 w-full h-[220px] border-solid border-green-300 border-2 rounded-3xl select-text p-5 flex flex-col items-center font-bold">
                <h2 className="text-center text-xl">{`${fullYear}.${Month}.${day}`}</h2>
                <div className="flex flex-col justify-center w-full h-full space-y-1">
                    {meal.map((element, index) => <p key={index}
                                                     className="text-center text-sm ">{element}</p>)}
                </div>
            </div>
        </div>
    )
}

export default Meal