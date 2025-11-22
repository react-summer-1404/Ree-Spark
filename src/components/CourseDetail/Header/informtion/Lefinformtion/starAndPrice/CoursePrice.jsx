import React from "react";
import {addCommas} from 'persian-tools'

const CoursePrice = ({CoursePrice}) => {
  return (
    <div
      className="dark:text-white 
                    w-[150px] flex flex-nowrap justify-center items-center
                    font-bold text-[24px]
                    h-[34px]"
    >
      <div className="flex gap-1 justify-center ">
        <span>{addCommas(CoursePrice)} </span>
        <p className="mt-1 h-[25px] text-[18px] font-thin">تومان</p>
      </div>
    </div>
  );
};

export default CoursePrice;
