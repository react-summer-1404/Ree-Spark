import React from "react";
import Button from "../../../common/Button";
import ButtonResponsive from "../../../common/ButtonResponsive";

const TopBlogInfo = ({
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
      <div className="flex justify-center relative top-[480px]  flex-col lg:hidden right-[760px]">
        <div className={`w-[322px]  h-[293px] rounded-[32px] ${blogBg}`}>
          <img
            className="w-full  left-[70px] top-[50px] h-full rounded-[15px] "
            src={img}
          />
        </div>

        <div className="flex flex-col w-[350px] relative right-[90px]">
          <p
            dir="rtl"
            className="w-[318px] relative left-[100px]  h-[34px] text-[23px] text-right font-bold   truncate"
          >
            {title}
          </p>
          <div className="relative left-[277px]">
            <div className="w-[133px] absolute h-[20px]  text-right text-[13px] font-medium text-[#707070]">
              {Teacher}
            </div>
          </div>
          <div className="relative left-[70px]">
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
        <div className="relative left-[50px]">
          <ButtonResponsive />
        </div>
        <div className="absolute bottom-[860px] left-[45px]">
          <ButtonResponsive />
        </div>
      </div>

      {/* {Desktop} */}
      <div>
        <div className=" lg:justify-center lg:gap-3 lg:flex-col hidden lg:block">
          <div
            className={`lg:w-[432px] lg:h-[293px] lg:rounded-[32px] ${blogBg}`}
          >
            <img
              className="lg:w-full lg:h-full  lg:left-[130px] lg:top-[70px] rounded-[15px]"
              src={img}
              alt={title}
            />
          </div>

          <div className="lg:flex lg:flex-col">
            <p
              dir="rtl"
              className="lg:w-[342px] lg:h-[34px] lg:text-[19px] lg:text-right lg:font-bold relative left-[70px] truncate  "
            >
              {title}
            </p>

            <div className="lg:relative lg:left-[277px]">
              <div className="lg:w-[133px] lg:absolute lg:h-[20px] lg:text-right lg:text-[13px] lg:font-medium lg:text-[#707070]">
                {Teacher}
              </div>
            </div>
            <div className="relative left-[20px] ">
              <div className="lg:relative lg:left-[90px]">
                <h5
                  dir="rtl"
                  className="lg:text-[#707070] lg:absolute lg:bottom-[-23px] lg:text-[13px] lg:font-medium"
                >
                  {Date}
                  <img
                    className="lg:w-[20px] lg:h-[20px] lg:absolute lg:left-[-22px] lg:bottom-[1px]"
                    src={`../../../../../../public/AuthImage/${icDate}.png`}
                    alt="date icon"
                  />
                </h5>
              </div>

              <div className="lg:relative lg:left-[30px]">
                <h5
                  dir="rtl"
                  className="lg:text-[#707070] lg:absolute lg:bottom-[-23px] lg:text-[13px] lg:font-medium"
                >
                  {view}
                  <img
                    className="lg:w-[20px] lg:h-[20px] lg:absolute lg:left-[-22px] lg:bottom-[1px]"
                    src={`../../../../../../public/AuthImage/${icView}.png`}
                    alt="view icon"
                  />
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[-20px]">
        <Button />
      </div>
    </div>
  );
};

export default TopBlogInfo;
