import React from "react";
import {MobileCourseBody} from "./MobileCourseBody"
import { CourseStyle } from "./CourseStyle";

const CourseBody = () => {
  return (
    <div>
      <div className=" hidden lg:block">
        <div className=" xl:w-[1061px] lg:w-[961px] lg:h-[366px] lg:relative xl:left-[-120px]  lg:right-[170px] lg:top-[300px] lg:justify-center  lg:flex-wrap lg:gap-6  lg:flex ">
          {/* html css */}

      
        </div>
      </div>
      <div className="lg:hidden">
        <MobileCourseBody />
      </div>
    </div>
  );
};
export { CourseBody };
