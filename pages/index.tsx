// 2022.03.12 - 2022.03.19

import type { NextPage } from "next";
import Head from "next/head";
import Clock from "../components/clock";
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
        <meta name="description" content="Made by AIDEN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative w-screen h-screen select-none bg-[#F2F3F7] flex flex-col justify-center items-center overflow-x-hidden overflow-y-hidden">
        <h1 className="text-center sm:absolute top-2 sm:top-[170px] text-red-400 sm:font-extrabold sm:text-lg mt-10 text-sm font-bold sm:mt-0">
          해당 서비스는 복합적인 이유로 인해 종료되었습니다. <br />
          일부기능에 오류가 있을 수 있습니다.
        </h1>
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-[#F2F3F7] overflow-x-hidden overflow-y-hidden">
          <div className="w-full h-full overflow-x-hidden overflow-y-scroll lg:overflow-x-hidden lg:overflow-y-hidden max-w-[1300px] z-10 rounded-[50px] lg:max-h-[900px] lg:min-h-[900px] lg:min-w-[1000px] py-10 px-5 flex flex-col items-center lg:grid lg:grid-cols-3 lg:grid-rows-2 space-y-5 lg:space-y-0">
            <div className="flex justify-center items-center content-center">
              <Clock />
            </div>
            <div className="flex justify-center items-center content-center">
              <Meal />
            </div>
            <div className="flex justify-center items-center content-center">
              <Class />
            </div>
            <div className="flex justify-center items-center content-center">
              <HomeWork />
            </div>
            <div className="flex justify-center items-center content-center">
              <Event />
            </div>
            <div className="flex justify-center items-center content-center">
              <Materials />
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
