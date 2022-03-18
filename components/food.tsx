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
        return `${value}`.replaceAll("0","").replaceAll("1", "").replaceAll("2", "").replaceAll("3", "").replaceAll("4", "").replaceAll("5", "").replaceAll("6", "").replaceAll("7", "").replaceAll("8", "").replaceAll("9", "").replaceAll("10", "").replaceAll("12", "").replaceAll("13", "").replaceAll("14", "").replaceAll("15", "").replaceAll("16", "").replaceAll("17", "").replaceAll("18", "").replaceAll(".", "").replaceAll("(공)", "").replaceAll("(완공)", "").replaceAll("(주식)", "").replaceAll("(중등)", "").replaceAll("(조각)", "").replaceAll("(소)", "").replaceAll("(완)", "").replaceAll("(오븐)", "").split("<br/>")
    }

    const onNextClick = async (e: any) => {
        e.preventDefault()
        if(day < 31) {
            setDay((prev) => prev + 1)
            await fetchAPI(fullYear, Month, day + 1).then((value) => setMeal(formatMeal(value)))
        } else {
            setDay(1)
            await fetchAPI(fullYear, Month, day - 30).then((value) => setMeal(formatMeal(value)))
        }
    }

    const onBeforeClick = async (e: any) => {
        e.preventDefault()
        if(day <= 31) {
            if (day - 1 === 0) {
                setDay(31)
                await fetchAPI(fullYear, Month, day + 1).then((value) => setMeal(formatMeal(value)))
            } else {
                setDay((prev) => prev - 1)
                await fetchAPI(fullYear, Month, day + 1).then((value) => setMeal(formatMeal(value)))
            }
        }
    }

    useEffect(() => {
        fetchAPI(fullYear, Month, day).then((value) => setMeal(formatMeal(value)))
    }, [])

    return (
        <div className=" w-96 h-96 rounded-[35px] border-2 border-solid p-[37px] shadow-xl">
            <div className="text-center text-[40px] font-bold font-sans">
                <span className="text-2xl text-center font-medium">
                    school {" "}
                </span>
                Lunch
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