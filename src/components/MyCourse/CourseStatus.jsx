import React from "react";


const CourseStatus = ({MyCourseName , MyCoursePublisher , MyCourseLevel  , ImageAddress , startDate , endDate}) => {
  return (
    <div dir="rtl" className="h-16 flex relative ">
      <div className={`w-[83px] h-[52px] rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg  absolute top-[72px] left-[971px]`}>
        <img src={ImageAddress} className="w-[100%] h-[100%] rounded-xl" />
      </div>
      <h3 dir="rtl" className="h-[23px] w-[150px] text-right absolute top-[86px] left-[780px] font-bold">
        {MyCourseName}
      </h3>
      <h3 className="h-[20px] absolute top-[86px] left-[660px] font-semibold text-sm">
        {MyCoursePublisher}
      </h3>
      <h3 className="h-[20px] absolute top-[86px] left-[487px] font-semibold text-sm">
      {startDate}
      </h3>
      <h3 className="h-[20px] absolute top-[86px] left-[314px] font-semibold text-sm">
       {endDate}
      </h3>
      <div className="h-6 absolute top-[85px] left-[164px] bg-[#FF37F5] rounded-[32px] py-[2px] px-2 text-white text-sm">
        {MyCourseLevel}
      </div>
    </div>
  );
};

export { CourseStatus };
