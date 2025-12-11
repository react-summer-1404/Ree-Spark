import React from "react";
import figma from "../../../assets/image/BlogImage/figma.png";
const MyCourses = () => {
  return (
    <>
      <div className="h-16 flex relative">
        {" "}
        <div className="w-[83px] h-[52px] absolute mt-3 right-0 rounded-xl bg-[#FF6C6C]">
          <img src={figma} className="w-8 h-8 m-auto mt-2" />
        </div>
        <h3 className="absolute mt-6 left-[572px] font-bold">دوره فیگما</h3>
        <h3 className="absolute mt-6 left-[390px] font-semibold text-sm">
          محمدحسین خلیل‌پور
        </h3>
        <h3 className="absolute mt-6 left-[220px] font-semibold text-sm">
          29 اردیبهشت 1403
        </h3>
        <div className="h-6 absolute mt-6 left-[100px] bg-[#FF37F5] rounded-[32px] py-[2px] px-2 text-sm text-white">
          پیشرفته
        </div>
      </div>
    </>
  );
};

export { MyCourses };
