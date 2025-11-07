import React from "react";
import { Link } from "react-router-dom";
const TopCourseBody = ({
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
      <div className="lg:hidden  relative top-[30px] dark:text-white right-[500px] ">
        <div className="">
          <div className={`w-[322px] h-[293px] ${bgcolor}  rounded-[32px]  `}>
            <div className="w-[172px] h-[172px] relative top-[88px] left-[75px] ">
              <img src={imageAddress} />
            </div>

            <div className="w-[89px] h-[24px] absolute top-[8px] left-[151px] rounded-[32px] bg-[#3772FF] py-[2px] px-2 ">
              <h5 className="w-[73px] h-[20px] text-[13px] font-sans font-medium text-[#FCFCFC]">
                {coding}
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
            <h1
              className=" w-[322px] h-[34px] gap-1 font-sans font-bold text-right relative right-[180px] bottom-[10px] dark:text-white text-[23px]
             text-[#2F2F2F]"
            >
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

      {/* // {DeskTop}   // */}

      <div className="lg:block hidden lg:dark:text-white ">
        <div
          className={`lg:w-[322px] lg:h-[293px] ${bgcolor} lg:rounded-[32px] lg:relative`}
        >
          <div className="lg:w-[172px] lg:h-[172px] lg:absolute lg:top-[78px] lg:left-[75px]">
            <img src={imageAddress} />
          </div>

          <div className="lg:w-[89px] lg:h-[24px] lg:absolute lg:top-[8px] lg:left-[151px] lg:rounded-[32px] lg:bg-[#3772FF] lg:py-[2px] lg:px-2">
            <h5 className="lg:w-[73px] lg:h-[20px] lg:text-[13px] lg:font-sans lg:font-medium lg:text-[#FCFCFC]">
              { coding}
            </h5>
          </div>

          <div className="lg:w-[62px] lg:h-[24px] lg:absolute lg:top-[8px] lg:left-[244px] lg:rounded-[32px] lg:bg-[#FF37F5] lg:py-[2px] lg:px-2">
            <h5 className="lg:w-[46px] lg:h-[20px] lg:text-[13px] lg:font-sans lg:font-medium lg:text-[#FCFCFC]">
              {level}
            </h5>
          </div>
        </div>

        <div
          dir="rtl"
          className="lg:absolute lg:w-[96px] lg:h-[20px] lg:mt-[45px] lg:text-[13px] lg:font-sans lg:font-bold lg:dark:text-white lg:text-[#2F2F2F]"
        >
          {coursePrice}
        </div>

        <div className="lg:w-[322px] lg:absolute lg:h-[61px] lg:gap-1 lg:ml-[170px] lg:mt-[10px]">
          <h1 className="lg:w-[322px] lg:h-[34px] lg:gap-1 lg:font-sans lg:font-bold lg:text-right lg:relative lg:right-[180px] lg:bottom-[10px] lg:text-[23px] lg:dark:text-white lg:text-[#2F2F2F]">
            {courseName}
          </h1>
          <div className="lg:w-[322px] lg:h-[23px]">
            <h5 className="lg:w-[133px] lg:h-[20px] lg:text-right lg:text-[13px] lg:font-sans lg:font-medium lg:text-[#707070] lg:float-end dark:lg:text-[#8F8F8F]">
              {teacherName}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { TopCourseBody };
