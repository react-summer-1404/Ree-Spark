import React from "react";
import { Link } from "react-router-dom";
const CourseStyle = ({
  courseName,
  teacherName,
  level,
  imageAddress,
  bgcolor,
  coursePrice,
  coding,
}) => {
  return (
    <Link className=" w-[322px] h-[366px] ">

     {/* {desktop low} */}
      
      <div className="lg:block   hidden lg:dark:text-white ">
        <div
          className={`lg:w-[322px] lg:h-[293px] ${bgcolor} lg:rounded-[32px] lg:relative`}
        >
          <div className="lg:w-[322px] lg:h-[293px] lg:rounded-[105px] ">
            <img className="lg:w-full lg:h-full lg:rounded-[105px]" src={imageAddress ? imageAddress : "../../../../../public/AuthImage/react.png" }  />
          </div>

          <div className="lg:w-[89px] lg:h-[24px] lg:absolute lg:top-[8px] lg:left-[151px] lg:rounded-[32px] lg:bg-[#3772FF] lg:py-[2px] lg:px-2">
            <h5 className="lg:w-[73px] lg:h-[20px] lg:text-[13px] lg:absolute lg:left-[15px] lg:top-[2px] lg:font-medium lg:text-[#FCFCFC]">
             {coding}
            </h5>
          </div>

          <div className="lg:w-[62px] lg:h-[24px] lg:absolute lg:top-[8px] lg:left-[244px] lg:rounded-[32px] lg:bg-[#FF37F5] lg:py-[2px] lg:px-2">
            <h5 dir="rtl" className="lg:w-[40px] lg:h-[20px] lg:text-[13px] lg:font-medium lg:absolute lg:left-[8px] lg:text-[#FCFCFC] truncate">
              {level}
            </h5>
          </div>
        </div>

        <div
          dir="rtl"
          className="lg:absolute lg:w-[76px] lg:h-[20px] lg:mt-[45px]  lg:text-[13px]  lg:font-bold lg:dark:text-white lg:text-[#2F2F2F]"
        >
          {coursePrice} <div className=" lg:left-[10px] lg:bottom-[1px] lg:absolute">تومان</div>  
        </div>

        <div className="lg:w-[322px] lg:absolute lg:h-[61px] lg:gap-1 lg:ml-[170px] lg:mt-[10px]">
          <h1 dir="rtl" className="lg:w-[322px] lg:truncate lg:h-[34px] lg:gap-1  lg:font-bold lg:text-right lg:relative lg:right-[180px] lg:bottom-[10px] lg:text-[23px] lg:dark:text-white lg:text-[#2F2F2F] ">
            {courseName}
          </h1>
          <div className="lg:w-[322px] lg:h-[23px]">
            <h5 className="lg:w-[143px] lg:h-[20px] lg:text-right lg:text-[13px]  lg:font-medium lg:text-[#707070] lg:float-end dark:lg:text-[#8F8F8F]">
              {teacherName}
            </h5>
          </div>
        </div>
      </div>

    </Link>
  );
};

export { CourseStyle };
