import React from "react";

const CourseHistory = ({dissLikeCount, likeCount, endTime, startTime }) => {
  return (
    <div
      className="sm:flex hidden justify-center dark:text-white w-full h-[80px] 
                            rounded-2xl 
                            border-2"
    >
      <div className="flex w-[25%] mt-2 flex-wrap justify-end border-r-2 pr-3  ">
        <div className="w-full h-[20px] text-[#707070] text-[14px] flex justify-end ">
          <div className="w-full text-right ">تعداد دیس لایک </div>
        </div>
        <div className="w-[120px] flex justify-end ">
          {dissLikeCount}
        </div>
      </div>
      <div className="flex w-[25%] mt-2 flex-wrap justify-end border-r-2 pr-3 ">
        <div className="w-[100px] h-[20px] text-[#707070] text-[14px] flex justify-end  ">
          <div className="w-full text-right">تعداد لایک</div>
        </div>
        <div className="w-full flex justify-end ">
          {likeCount}
        </div>
      </div>
      <div className="flex w-[25%] mt-2 flex-wrap justify-end border-r-2 pr-3 ">
        <div className="w-[100px] h-[20px] text-[#707070]  text-[14px] flex justify-end ">
          <div className="w-full text-right ">اتمام تاریخ </div>
        </div>
        <div className="w-full flex justify-end text-[14px] ">
          {endTime}
        </div>
      </div>
      <div className="flex w-[25%] mt-2 flex-wrap justify-end pr-3 ">
        <div className="w-[100px] h-[20px]  text-[14px] text-[#707070] flex justify-end  ">
          {" "}
          <div className="w-full text-right ">تاریخ برگزاری</div>
        </div>
        <div className="w-full flex justify-end text-[14px]  "> 
          {startTime}
        </div>
      </div>
    </div>
  );
};

export default CourseHistory;
