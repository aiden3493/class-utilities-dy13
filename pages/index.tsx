// 2022.03.12 - 2022.03.19

import type {NextPage} from 'next'
import Head from 'next/head'
import Clock from "../components/clock"
import Meal from "../components/food";
import Class from "../components/class";
import HomeWork from "../components/homework";
import Event from "../components/events";
import Materials from "../components/materials";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Dukyang103 - Class Utilities</title>
                <meta name="description" content="Made by AIDEN"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="overflow-hidden scrollbar-hide select-none">
                <div className="w-screen h-screen px-10 flex flex-row justify-center items-center content-center bg-[#F2F3F7]">
                    <div
                        className="w-auto max-w-[1500px] h-full max-h-[900px] z-10 rounded-[50px] p-10 min-h-[500px] min-w-[1000px] grid grid-cols-3 lg:gap-x-10 lg:gap-y-8">
                        <Clock />
                        <Meal />
                        <Class />
                        <HomeWork />
                        <Event />
                        <Materials />
                    </div>
                </div>
            </main>

            <footer>
            </footer>
        </div>
    )
}

export default Home
