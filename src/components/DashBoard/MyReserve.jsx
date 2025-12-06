import React from "react";
import { CourseReserve } from "./components/CourseReserve";
import { Link } from "react-router-dom";

const MyReserve = () => {
  return (
    <div>
      <h5 className="h-5 absolute top-2 left-[603px] font-semibold text-sm">
        رزرو من
      </h5>

      <div className="w-[630px] h-11 absolute top-10 left-4 rounded-2xl bg-[#F1F1F1]">
        <h6 className="absolute top-3 left-[607px] text-[#707070] text-sm font-semibold">
          #
        </h6>
        <h6 className="absolute top-3 left-[490px] text-[#707070] text-sm font-semibold">
          نام
        </h6>
        <h6 className="absolute top-3 left-[341px] text-[#707070] text-sm font-semibold">
          مدرس
        </h6>
        <h6 className="absolute top-3 left-[151px] text-[#707070] text-sm font-semibold">
          وضعیت
        </h6>
      </div>
      <div className="w-[95%] mx-auto h-[320px] mt-24 overflow-hidden">
        <CourseReserve />
        <CourseReserve />
      </div>

      <div className="w-[106px] h-5 absolute top-2 left-4 flex justify-between">
        <div className="size-4">
          <img src="./img/backicon.png" className="w-[10px] h-[10px] mt-1" />
        </div>
        <Link
          to={"/Dashboard/MyReserve"}
          className="h-5 text-[#3772FF] text-sm  text-right leading-5 cursor-pointer "
        >
          مشاهده بیشتر
        </Link>
      </div>
    </div>
  );
};

export { MyReserve };
