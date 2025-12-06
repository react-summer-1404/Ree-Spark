import React from "react";


const CourseStatus = ({MyCourseName , MyCoursePublisher , MyCourseLevel  , ImageAddress}) => {
  return (
    <div dir="rtl" className="h-16 flex relative">
      <div className={`w-[83px] h-[52px] rounded-xl  absolute top-[72px] left-[971px]`}>
        <img src={ImageAddress} className="w-[100%] h-[100%] rounded-xl" />
      </div>
      <h3 dir="rtl" className="h-[23px] w-[150px] text-right absolute top-[86px] left-[780px] font-bold">
        {MyCourseName}
      </h3>
      <h3 className="h-[20px] absolute top-[86px] left-[660px] font-semibold text-sm">
        {MyCoursePublisher}
      </h3>
      <h3 className="h-[20px] absolute top-[86px] left-[447px] font-semibold text-sm">
        29 اردیبهشت 1403
      </h3>
      <h3 className="h-[20px] absolute top-[86px] left-[274px] font-semibold text-sm">
        29 اردیبهشت 1403
      </h3>
      <div className="h-6 absolute top-[85px] left-[154px] bg-[#FF37F5] rounded-[32px] py-[2px] px-2 text-white text-sm">
        {MyCourseLevel}
      </div>
    </div>
  );
};

export { CourseStatus };
