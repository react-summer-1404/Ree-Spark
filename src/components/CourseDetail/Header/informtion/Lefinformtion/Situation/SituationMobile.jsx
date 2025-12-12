import React from "react";

const SituationMobile = ({ level, coding, teacherName}) => {
  return (
    <div className="sm:hidden flex flex-col gap-y-4 ">
      <div className="flex w-[360px] h-[80px] border-2 rounded-[16px]">
        <div className="flex flex-col gap-3 justify-end p-3 w-[50%] h-full ">
          <div className="text-[#707070] w-[97%] text-right text-[14px]">
            استاد دوره
          </div>
          <div className="text-[15px] w-full">{teacherName}</div>
        </div>
        <div className="flex flex-col gap-3 justify-end p-3 w-[50%] border-l-2 h-full ">
          <div className="text-[#707070] w-[97%] text-right text-[14px]">
            سطح آموزشی
          </div>
          <div className="flex justify-end ">
            <div className="sm:w-[101px] w-[80px] text-[13px] sm:text-[16px] h-[27px] flex justify-center items-center rounded-[32px] bg-[#FF5353] ] ">
            {level}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[360px] h-[80px] border-2 rounded-[16px] ">
        <div className="flex flex-col gap-3 justify-end p-3 w-[50%] h-full ">
          <div className="text-[#707070] w-[97%] text-right text-[14px]">
            دسته بندی
          </div>
          <div className="text-[15px] w-full">
            <div className="flex justify-end ">
              <div className="sm:w-[101px] w-[80px] text-[13px] sm:text-[16px] h-[27px] flex justify-center items-center rounded-[32px] bg-[#3772FF] ] ">
                برنامه نویسی
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-end p-3 w-[50%] border-l-2 h-full ">
          <div className="text-[#707070] w-[97%] text-right text-[14px]">
            سطح آموزشی
          </div>
          <div className="flex justify-end ">
            <div className="sm:w-[101px] w-[80px] text-[13px] sm:text-[16px] h-[27px] flex justify-center items-center rounded-[32px] bg-[#FF37F5] ] ">
          {coding}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SituationMobile;
