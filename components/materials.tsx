import MTodo from "./materialsTodo";

const Materials = () => {

    //ml-[90px] mt-[70px] absolute

    const materials = [{name: "우유급식 문자->부모님께 말씀드리기", href: ""}, {name: "학부모 상담주간 문자-> 부모님께 말씀드리기", href: ""}]

    return (
        <div className=" w-[22.5rem] h-[22.5rem] rounded-[35px] border-2 border-solid p-[37px] shadow-xl">
            <div className="text-center text-[35px] font-bold font-sans mt-2">
                <span className="text-2xl text-center font-medium">
                    Today&apos;s {" "}
                </span>
                Materials
            </div>

            <div
                className="mt-3 w-full h-[220px] border-solid border-green-300 border-2 rounded-3xl select-text pt-7 flex flex-col items-center font-bold space-y-4">
                {materials.map((element, index) =>
                    <MTodo key={index} todo={element.name} href={element.href}/>)}
            </div>
        </div>
    )
}

export default Materials