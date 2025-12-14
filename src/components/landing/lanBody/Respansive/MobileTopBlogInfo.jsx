import React from "react";
import ButtonResponsive from "../../../common/Button/ButtonResponsive";
import { Link } from "react-router-dom";

const MobileTopBlogInfo = ({
  title,
  Teacher,
  img,
  blogBg,
  Date,
  icDate,
  icView,
  view,
}) => {

  return (
    <div>
      
      <div className="flex justify-center relative  flex-col lg:hidden ">
        <div className={`w-[322px]  h-[293px] rounded-[32px] ${blogBg}`}>
          <img
            className="w-full  left-[70px] top-[50px] h-full rounded-[32px] "
              src={img ? img : "/AuthImage/react.png" }
          />
        </div>
        <div className="flex flex-col w-[350px] relative right-[100px]">
          <p
            dir="rtl"
            className="w-[318px] relative left-[95px]  h-[34px] text-[23px] text-right font-bold  truncate"
          >
            {title}
          </p>
          <div className="relative left-[277px]">
            <div className="w-[133px] absolute h-[20px]  text-right text-[13px] font-medium text-[#707070]">
              {Teacher}
            </div>
          </div>
          <div className="relative left-[100px]">
            <div className="relative left-[80px]">
              <h5
                dir="rtl"
                className="text-[#707070]  absolute bottom-[-23px] text-[13px] font-medium "
              >
                  {Date}
                <img
                  className="w-[20px] absolute left-[-22px] bottom-[1px] h-[20px] "
                  src={`../../../../../../public/AuthImage/${icDate}.png`}
                />
              </h5>
            </div>

            <div className="relative left-[30px]">
              <h5
                dir="rtl"
                className="text-[#707070]  absolute bottom-[-23px] text-[13px] font-medium "
              >
                {view}
                <img
                  className="w-[20px] absolute left-[-22px] bottom-[1px] h-[20px] "
                  src={`../../../../../../public/AuthImage/${icView}.png`}
                />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MobileTopBlogInfo;
