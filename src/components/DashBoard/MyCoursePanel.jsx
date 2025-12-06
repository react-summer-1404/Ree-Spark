import React from "react";
import { MyCourses } from "./components/MyCourses";
import { Link } from "react-router-dom";

const MyCoursePanel = () => {
  return (
    <div>
      <h6 className="h-5 absolute top-[7px] left-[738px] text-sm font-semibold">
        دوره من
      </h6>
      <div className="w-[106px] h-5 absolute top-2 left-4 flex justify-between">
        <div className="size-4">
          <img src="./img/backicon.png" className="w-[10px] h-[10px] mt-1" />
        </div>
        <Link to={"/dashboard/myCourse"} className="h-5 text-[#3772FF] text-sm  text-right leading-4 cursor-pointer">
          مشاهده بیشتر
        </Link>
      </div>
      <div className="w-[769px] h-11 absolute top-10 left-4 bg-[#F1F1F1] rounded-2xl">
        <h6 className="text-[#707070] text-[14px] font-semibold absolute top-[12px] left-[747px]">
          #
        </h6>
        <h6 className="text-[#707070] text-[14px] font-semibold absolute top-[12px] left-[629px]">
          نام
        </h6>
        <h6 className="text-[#707070] text-[14px] font-semibold absolute top-[12px] left-[480px]">
          مدرس
        </h6>
        <h6 className="text-[#707070] text-[14px] font-semibold absolute top-[12px] left-[265px]">
          تاریخ برگزاری
        </h6>
        <h6 className="text-[#707070] text-[14px] font-semibold absolute top-[12px] left-[130px]">
          سطح
        </h6>
      </div>
      <div className=" w-[95%] h-[130px] mx-auto mt-[85px] overflow-y-hidden ">
        <MyCourses />

      </div>
    </div>
  );
};

export default MyCoursePanel;
