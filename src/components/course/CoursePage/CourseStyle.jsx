import React from "react";
import { Link } from "react-router-dom";
const CourseStyle = ({
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
      <div className="xl:hidden lg:hidden relative top-[2600px] dark:text-white ">
        <div className="absolute right-[1000px]">
          <div className={` w-[322px] h-[293px] ${bgcolor}  rounded-[32px]  `}>
         

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

                    {/* // {DeskTop hight}   // */}

     <div className="  lg:hidden hidden xl:dark:text-white">
  <div
    className={`xl:w-[322px] xl:h-[293px] ${bgcolor} xl:rounded-[32px] xl:relative`}
  >
    <div className="xl:w-[172px] xl:h-[172px] xl:absolute xl:top-[68px] xl:left-[75px]">
      <img src={`../../../../public/AuthImage/${imageAddress}.png`} />
    </div>

    <div className="xl:w-[89px] xl:h-[24px] xl:absolute xl:top-[8px] xl:left-[151px] xl:rounded-[32px] xl:bg-[#3772FF] xl:py-[2px] xl:px-2">
      <h5 className="xl:w-[73px] xl:h-[20px] xl:text-[13px] xl:font-sans xl:font-medium xl:text-[#FCFCFC]">
        برنامه نویسی
      </h5>
    </div>

    <div className="xl:w-[62px] xl:h-[24px] xl:absolute xl:top-[8px] xl:left-[244px] xl:rounded-[32px] xl:bg-[#FF37F5] xl:py-[2px] xl:px-2">
      <h5 className="xl:w-[46px] xl:h-[20px] xl:text-[13px] xl:font-sans xl:font-medium xl:text-[#FCFCFC]">
        {level}
      </h5>
    </div>
  </div>

  <div
    dir="rtl"
    className="xl:absolute xl:w-[96px] xl:h-[20px] xl:mt-[45px] xl:text-[13px] xl:font-sans xl:font-bold xl:dark:text-white xl:text-[#2F2F2F]"
  >
    {coursePrice}
  </div>

  <div className="xl:w-[322px] xl:absolute xl:h-[61px] xl:gap-1 xl:ml-[170px] xl:mt-[10px]">
    <h1 className="xl:w-[322px] xl:h-[34px] xl:gap-1 xl:font-sans xl:font-bold xl:text-right xl:relative xl:right-[180px] xl:bottom-[10px] xl:text-[23px] xl:dark:text-white xl:text-[#2F2F2F]">
      {courseName}
    </h1>
    <div className="xl:w-[322px] xl:h-[23px]">
      <h5 className="xl:w-[133px] xl:h-[20px] xl:text-right xl:text-[13px] xl:font-sans xl:font-medium xl:text-[#707070] xl:float-end dark:xl:text-[#8F8F8F]">
        {teacherName}
      </h5>
    </div>
  </div>
</div>

     {/* {desktop low} */}
      
      <div className="lg:block  lx:hidden hidden lg:dark:text-white ">
        <div
          className={`lg:w-[322px] lg:h-[293px] ${bgcolor} lg:rounded-[32px] lg:relative`}
        >
          <div className="lg:w-[172px] lg:h-[172px] lg:absolute lg:top-[68px] lg:left-[75px]">
            <img src={`../../../../public/AuthImage/${imageAddress}.png`} />
          </div>

          <div className="lg:w-[89px] lg:h-[24px] lg:absolute lg:top-[8px] lg:left-[151px] lg:rounded-[32px] lg:bg-[#3772FF] lg:py-[2px] lg:px-2">
            <h5 className="lg:w-[73px] lg:h-[20px] lg:text-[13px] lg:font-sans lg:font-medium lg:text-[#FCFCFC]">
              برنامه نویسی
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

export { CourseStyle };
