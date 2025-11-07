import React from "react";
import { CgClose } from "react-icons/cg";
import figma from "../../../assets/image/BlogImage/figma.png"
const CourseReserve = () => {
  return (
    <div>
      <div className="w-[83px] h-[52px] absolute top-[96px] left-[555px] rounded-xl bg-[#FF6C6C]">
        <img src={figma} className="w-8 h-8 mt-2 mx-auto" />
      </div>
      <div className="h-[23px] absolute top-[110px] left-[453px] font-bold text-base">
        دوره فیگما
      </div>
      <div className="h-[20px] absolute top-[111px] left-[280px] font-semibold text-sm">
        محمدحسین خلیل‌پور
      </div>
      <div className="h-6 absolute top-[109px] left-[134px] bg-[#FF5353] py-[2px] px-2 rounded-[32px] text-sm text-white">
        تایید نشده
      </div>

      <button className="size-5 absolute top-[111px] left-[24px]">
        <CgClose size={20} color="red"/>
      </button>
    </div>
  );
};

export { CourseReserve };