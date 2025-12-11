import React from "react";
import { CgClose } from "react-icons/cg";
import figma from "../../../assets/image/BlogImage/figma.png";
const CourseReserve = () => {
  return (
    <>
      <div className="h-16 flex relative">
        <div className="w-[83px] h-[52px] absolute right-0 rounded-xl bg-[#FF6C6C]">
          <img src={figma} className="w-8 h-8 mt-2 mx-auto" />
        </div>
        <div className="h-[23px] absolute right-[120px] top-3 font-bold text-base">
          دوره فیگما
        </div>
        <div className="h-[20px] absolute top-3 right-[250px] font-semibold text-sm">
          محمدحسین خلیل‌پور
        </div>
        <div className="h-6 absolute top-3 right-[430px] bg-[#FF5353] py-[2px] px-2 rounded-[32px] text-sm text-white">
          تایید نشده
        </div>
        <button className="size-5 absolute top-3 right-[560px]">
          <CgClose size={20} color="red" />
        </button>
      </div>
    </>
  );
};

export { CourseReserve };
