import React from "react";
import { Link } from "react-router-dom";
const MobileCourseStyle = ({
  courseName,
  teacherName,
  level,
  imageAddress,
  bgcolor,
  coursePrice,
  coding,
}) => {
  return (
    // {mobile} //
    <Link className=" w-[322px] h-[366px] ">
      <div className="lg:hidden  flex justify-center relative top-[300px] dark:text-white ">
        <div className="absolute">
          <div className={`w-[322px] h-[293px]  ${bgcolor}  rounded-[32px]  `}>
            <div className="w-full h-full ">
              <img className="rounded-[32px] w-full h-full" src={imageAddress ? imageAddress : "../../../../../public/AuthImage/react.png"} />
            </div>

            <div className="w-[89px] h-[24px] absolute top-[8px] left-[151px] rounded-[32px] bg-[#3772FF] py-[2px] px-2 ">
              <h5 className="w-[73px] h-[20px] absolute left-[15px] text-[13px]  font-medium text-[#FCFCFC]">
                {coding}
              </h5>
            </div>

            <div className="w-[62px] h-[24px] absolute top-[8px] left-[244px]  rounded-[32px] bg-[#FF37F5] py-[2px] px-2 ">
              <h5 dir="rtl" className="w-[46px] h-[20px] text-[13px]  font-medium absolute left-[8px] text-[#FCFCFC] truncate">
                {level}
              </h5>
            </div>
          </div>
          <div
            dir="rtl"
            className="absolute  w-[76px] h-[20px]  mt-[45px] text-[13px]  font-bold text-[#2F2F2F] dark:text-white "
          >
            {coursePrice} <div className=" left-[5px] bottom-[1px] absolute">تومان</div>
          </div>

          <div className=" w-[322px] absolute h-[61px] gap-1 ml-[170px] mt-[10px]">
            <h1 dir="rtl" className=" w-[322px] truncate h-[34px] gap-1  font-bold text-right relative right-[180px] bottom-[10px] dark:text-white text-[23px]
             text-[#2F2F2F]">
              {courseName}
            </h1>
            <div className="w-[322px] h-[23px] ">
              <h5 className="w-[138px] h-[20px]  text-right text-[13px]  font-medium text-[#707070] float-end dark:text-[#8F8F8F] ">
                {teacherName}
              </h5>
            </div>
          </div>
        </div>
                     

      </div>

               
    </Link>
  );
};

export { MobileCourseStyle };
