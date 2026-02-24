import { Fullscreen } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const TopCorusesStyle = ({
  courseName,
  teacherName,
  level,
  imageAddress,
  coursePrice,
  coding,
  courseId,
  bgcolor,
}) => {
  return (
    <Link to={`/course/${courseId}`}>
      <div className="flex  gap-3 justify-center md:justify-between flex-wrap md:flex-nowrap ">
        <div className="w-[430px] h-[366px]">
          <div
            className={`w-full h-[293px] rounded-[32px]
                      ${bgcolor}  flex flex-wrap p-2 justify-center `}
          >
            <div className="flex justify-end gap-2 w-[100%] h-[28px]">
              <div className="h-[24px] rounded-[32px] bg-[#3772FF] ">
                <div className=" mr-1 ml-1">{coding} </div>
              </div>
              <div className="w-[65px] h-[24px] rounded-[32px] bg-[#FF37F5] ">
                <div className="mr-1 ml-1 ">{level}</div>
              </div>
            </div>
            <img src={imageAddress} className="flex justify-center" />
          </div>
          <div className="w-[100%] h-[61px] flex flex-wrap gap-y-4 ">
            <div className="w-[100%] h-[32px] text-right text-[24px] font-bold dark:text-white">
             {courseName}
            </div>
            <div className="w-[100%] h-[23px] flex justify-between ">
              <div className="flex gap-1 font-bold dark:text-white ">
                <div className="font-thin ">تومان</div>{coursePrice}{" "}
              </div>
            <div className="text-[#a7a7a7] ">{teacherName} </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopCorusesStyle;
