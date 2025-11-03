import React from "react";
import { Outlet } from "react-router-dom";
import DarkMode from "../common/Darkmode/DarkMode";

const AuthLayout = () => {
  return (
    <>
      <div className="flex justify-center bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <div className=" w-11/12 flex justify-center gap-6  ">
          {/*  */}

          <div className="w-[748px] shadow-md bg-[#F1F1F1] dark:bg-slate-500 dark:text-white overflow-hidden h-[704px] rounded-[32px] mt-8 mb-6 ml-8 hidden md:block relative">
            {" "}
            <div className="mt-6 ml-10 z-10">
              <DarkMode />
            </div>
            <img
              src="/src/assets/image/AuthImage/LoginPhoto.png"
              className="hidden sm:block m-auto mt-80"
            />
            <img
              src="/src/assets/image/AuthImage/logo.png"
              className="block absolute top-8 right-6"
            />
            <img
              src="/src/assets/image/AuthImage/SepehrTitle.png"
              className="hidden sm:block absolute top-9 right-[69px]"
            />
            <h1 className="hidden sm:block absolute top-[140px] right-8 font-bold font text-[32px]">
              شروع یک ماجراجویی
            </h1>
            <h4 className="hidden truncate sm:block absolute top-[200px] right-8 text-xl text-[#707070] dark:text-slate-300 font-semibold text-right">
              هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر
            </h4>
          </div>

          {/*  */}
          <div className="mt-8 mb-6 md:mr-8 h-[704px] w-[530px] dark:text-white">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export { AuthLayout };
