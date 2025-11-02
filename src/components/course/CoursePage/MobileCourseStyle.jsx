import React from "react";
import { Link } from "react-router-dom";
const MobileCourseStyle = ({
  courseName,
  teacherName,
  level,
  imageAddress,
  bgcolor,
  coursePrice,
}) => {
  return (
    // {mobile} //
    <Link className=" w-[322px] h-[366px] ">
      <div className="lg:hidden left-[20px]  relative top-[300px] dark:text-white ">
        <div className="absolute">
          <div className={`w-[322px] h-[293px] ${bgcolor}  rounded-[32px]  `}>
            <div className="w-[172px] h-[172px] relative top-[58px] left-[75px] ">
              <img src={`../../../../public/AuthImage/${imageAddress}.png`} />
            </div>

            <div className="w-[89px] h-[24px] absolute top-[8px] left-[151px] rounded-[32px] bg-[#3772FF] py-[2px] px-2 ">
              <h5 className="w-[73px] h-[20px] text-[13px] font-sans font-medium text-[#FCFCFC]">
                برنامه نویسی
              </h5>
            </div>

            <div className="w-[62px] h-[24px] absolute top-[8px] left-[244px] rounded-[32px] bg-[#FF37F5] py-[2px] px-2 ">
              <h5 className="w-[46px] h-[20px] text-[13px] font-sans font-medium text-[#FCFCFC]">
                {level}
              </h5>
            </div>
          </div>
          <div
            dir="rtl"
            className="absolute  w-[96px] h-[20px]  mt-[45px] text-[13px] font-sans font-bold text-[#2F2F2F] dark:text-white "
          >
            {coursePrice}
          </div>

          <div className=" w-[322px] absolute h-[61px] gap-1 ml-[170px] mt-[10px]">
            <h1 className=" w-[322px] h-[34px] gap-1 font-sans font-bold text-right relative right-[180px] bottom-[10px] dark:text-white text-[23px]
             text-[#2F2F2F]">
              {courseName}
            </h1>
            <div className="w-[322px] h-[23px] ">
              <h5 className="w-[133px] h-[20px]  text-right text-[13px] font-sans font-medium text-[#707070] float-end dark:text-[#8F8F8F] ">
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
