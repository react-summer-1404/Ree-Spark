import React from "react";

const HisMobile = () => {
  return (
    <div className="sm:hidden flex flex-col gap-y-4 ">
      <div className="flex w-[360px] h-[80px] border-2 rounded-[16px]">
        <div className="flex flex-col gap-3 justify-end p-3 w-[50%] h-full ">
          <div className="text-[#707070] w-[97%] text-right text-[14px]">
            اتمام دوره
          </div>
          <div className="text-[15px] w-full text-right "> 29 خرداد 1403</div>
        </div>
        <div className="flex flex-col gap-3 justify-end p-3 w-[50%] border-l-2 h-full ">
          <div className="text-[#707070] w-[97%] text-right text-[14px]">
            تاریخ برگزاری
          </div>
          <div className="flex justify-end ">
            <div className=" text-[13px] sm:text-[16px] h-[27px] flex justify-center items-center rounded-[32px]  ">
              29 اردیبهشت 1403
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[360px] h-[80px] border-2 rounded-[16px] ">
        <div className="flex flex-col gap-3 justify-end p-3 w-[50%] h-full ">
          <div className="text-[#707070] w-[97%] text-right text-[14px]">
            تعداد لایک
          </div>
          <div className="flex justify-end ">
            <div className="w-full mr-3 text-[13px] sm:text-[16px] h-[27px] flex justify-end items-center ">
              29
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-end p-3 w-[50%] border-l-2 h-full ">
          <div className="text-[#707070] w-[97%] text-right text-[14px]">
            تعداد دیس لایک
          </div>
          <div className="flex justify-end ">
            <div className="w-full mr-3 text-[13px] sm:text-[16px] h-[27px] flex justify-end items-center ">
              10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HisMobile;
