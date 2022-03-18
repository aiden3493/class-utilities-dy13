import {useEffect, useState} from "react";
import DDay from "./eventD-day";
import {any} from "prop-types";

const Event = () => {
    const mainEvent = {event: "선거", year: 2022, month: 3, date: 22}
    const nextEvents = [{event: "팝스", year: 2022, month: 3, date: 25}]
    
    return (
        <div className=" w-96 h-96 rounded-[35px] border-2 border-solid p-[37px] shadow-xl">
            <div className="text-center text-[40px] font-bold font-sans">
                <span className="text-2xl text-center font-medium">
                    school {" "}
                </span>
                Events
            </div>

            <div
                className="mt-3 w-full h-[240px] border-solid border-green-300 border-2 rounded-3xl select-text p-5 flex flex-col items-center font-bold flex flex-col justify-center items-center space-y-2">
                <DDay event={mainEvent.event} year={mainEvent.year} month={mainEvent.month} date={mainEvent.date} main={true}/>
                {nextEvents.map((element, index) =>
                    <DDay key={index} event={element.event} year={element.year} month={element.month} date={element.date} main={false}/>
                    )}
            </div>
        </div>
    )
}

export default Event