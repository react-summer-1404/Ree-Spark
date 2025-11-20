import React from "react";

const CoursePrice = ({ course }) => {
  return (
    <div
      className="dark:text-white 
                    w-[150px] flex flex-nowrap justify-center items-center
                    font-bold text-[24px]
                    h-[34px]"
    >
      <div className="flex gap-1 justify-center ">
        <p className="mt-1 h-[25px] text-[18px] font-thin"></p>{" "}
        {course.coursePrice}{" "}
      </div>
    </div>
  );
};

export default CoursePrice;
