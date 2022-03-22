import Todo from "./homeworkTodo";

const Materials = () => {

    const materials = [{name: "워크숍 동의서", href: ""}]

    return (
        <div className=" w-[22.5rem] h-[22.5rem] rounded-[35px] border-2 border-solid p-[37px] shadow-xl">
            <div className="text-center text-[35px] font-bold font-sans mt-2">
                <span className="text-2xl text-center font-medium">
                    Today&apos;s {" "}
                </span>
                Materials
            </div>

            <div
                className="mt-3 w-full h-[220px] border-solid border-green-300 border-2 rounded-3xl select-text p-5 pt-8 flex flex-col items-center font-bold">
                {materials.map((element, index) =>
                    <Todo key={index} todo={element.name} href={element.href}/>)}
            </div>
        </div>
    )
}

export default Materials