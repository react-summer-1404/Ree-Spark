import React from "react";

const Situation = ({courseData}) => {
  return (
    <div
      className="= hidden sm:flex justify-center dark:text-white w-full h-[80px] 
                        rounded-2xl 
                        border-2"
    >
        {/* // */}
      <div className="flex w-[25%] mt-2 flex-wrap justify-end text-right border-r-2 pr-3 ">
        <div className="w-[110px] h-[20px] text-[#707070] text-[13px] sm:text-[14px] flex justify-end ">
          <div>استاد دوره</div>
        </div>
        <div className="min-w-full h-[23px] sm:text-[14px] text-[13px] flex justify-end items-center">
         {courseData.teacherName}
        </div>
      </div>
      {/* // */}
      <div className="flex w-[25%] mt-2 flex-wrap justify-end  border-r-2 pr-3 ">
        <div className="w-[110px] h-[20px] text-[#707070] text-[13px] sm:text-[14px] flex justify-end">
          <div className="w-full text-right ">سطح آموزشی</div>
        </div>
        <div className="w-full justify-end flex ">
          <div className="sm:w-[69px] w-[60px] h-[27px] text-[13px] sm:text-[16px] flex justify-center items-center rounded-[32px] bg-[#FF37F5] ">
           {courseData.courseLevelName}
          </div>
        </div>
      </div>
{/* ///// */}
      <div className="flex w-[25%] mt-2 flex-wrap justify-end border-r-2 pr-3 ">
        <div className="w-[120px] h-[20px] text-[#707070] text-[13px] sm:text-[14px] flex justify-end">
          <div className="w-full text-right">دسته‌بندی </div>
        </div>
        <div className=" flex w-full justify-end">
          <div className="sm:w-[99px] w-[80px] h-[27px] sm:text-[16px] text-[13px] flex items-center rounded-[32px] bg-[#3772FF] justify-center">
          </div>
        </div>
      </div>
      {/* //// */}
      <div className="flex w-[25%] mt-2 flex-wrap justify-end pr-3 ">
        <div className="w-[110px] h-[20px] text-[13px] sm:text-[14px] text-[#707070] flex justify-end  ">
          <div className="w-full text-right">وضعیت</div>
        </div>
        <div className="w-full flex justify-end">
          <div className="sm:w-[101px] w-[80px] text-[13px] sm:text-[16px] h-[27px] flex justify-center items-center rounded-[32px] bg-[#FF5353] ] ">
            {courseData.courseStatusName} 
          </div>
        </div>
      </div>

    </div>
  );
};

export default Situation;
