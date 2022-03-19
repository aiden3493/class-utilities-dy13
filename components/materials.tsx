import Todo from "./homeworkTodo";

const Materials = () => {

    const materials = ["test", "test2", "test3"]

    return (
        <div className=" w-96 h-96 rounded-[35px] border-2 border-solid p-[37px] shadow-xl">
            <div className="text-center text-[40px] font-bold font-sans">
                <span className="text-2xl text-center font-medium">
                    Today&apos;s {" "}
                </span>
                Materials
            </div>

            <div
                className="mt-3 w-full h-[240px] border-solid border-green-300 border-2 rounded-3xl select-text p-5 flex flex-col items-center font-bold">
                {materials.map((element, index) =>
                    <Todo key={index} todo={element} />)}
            </div>
        </div>
    )
}

export default Materials