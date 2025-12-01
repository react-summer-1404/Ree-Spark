import React from "react";
import CoursePrice from "./CoursePrice";
import CourseStar from "./Star";

const StarAndPrice = () => {
  return (
    <div className="sm:flex hidden justify-between h-[34px] w-full ">
        <CoursePrice CoursePrice={2500000} />
        <CourseStar />
    </div>
  );
};

export default StarAndPrice;
