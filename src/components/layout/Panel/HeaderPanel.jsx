import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "../../common/Darkmode/DarkMode";
import { FiBell } from "react-icons/fi";
import Peppe from "../../../assets/image/LayoutImage/Peppe.svg";
import { getItem } from "../../../core/services/storage/storage.api";

const HeaderPanel = () => {
  const gmail = getItem("gmail");
  const fName = getItem("fName");
  const lName = getItem("lName");
  return (
    <div className="flex justify-between">
      {/*  */}
      <div className=" flex gap-3 mt-4">
        {" "}
        <button className="w-[48px] h-[48px] border border-black dark:border-white rounded-full flex justify-center items-center">
          <FiBell size={30} className="dark:text-white" />
        </button>
        <div >
          <DarkMode />
        </div>
      </div>
      {/*  */}
      <div className="flex gap-6 mt-7 justify-center text-black flex-row-reverse">
        {" "}
        <Link
          to={"/"}
          className="dark:text-[#FCFCFC] text-black  hover:font-semibold"
        >
          صفحه اصلی
        </Link>
        <div className="dark:text-[#FCFCFC] text-black  hover:font-semibold">
          گزارش
        </div>
        <div className="dark:text-[#FCFCFC] text-black  hover:font-semibold">
          ارتباط باما
        </div>
      </div>
      {/*  */}

      <div className=" h-12 flex gap-2 mt-5 mr-6">
        <div className=" flex flex-col dark:text-white text-black">
          <h4 className="h-[23px] text-[15px] font-semibold">
            {fName} {lName}
          </h4>
          <h4 className="h-[23px] text-[13px] font-medium text-right">
            دانشجو
          </h4>
        </div>
        <div className="size-12">
          <img src={Peppe} className="mt-1" />
        </div>
      </div>
    </div>
  );
};

export { HeaderPanel };
