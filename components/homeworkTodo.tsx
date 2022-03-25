import {useState} from "react";

const HTodo = (props: any) => {
    const [complete, setComplete] = useState(false)

    const onComplete = () => {
        setComplete(!complete)
    }

    return (
        <div className="flex flex-row justify-between items-center  w-[100%] px-10">
            <div className="flex flex-col justify-center items-center w-[auto]">
                {props.href !== "" ? <a href={`${props.href}`} target="#blank"
                                 className={`text-green-300 text-[22px] select-none text-center text-center transition-all duration-200 w-[auto] ${complete ? "line-through" : ""}`}>{props.todo}</a> :
                    <a
                        className={`text-[20px] select-none text-center text-center transition-all duration-200 w-[auto] ${complete ? "line-through" : ""}`}>{props.todo}
                    </a>
                }
            </div>
            <input
                className="form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-green-300 checked:border-green-300 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                type="checkbox" onClick={onComplete}/>
        </div>
    )
}

export default HTodo