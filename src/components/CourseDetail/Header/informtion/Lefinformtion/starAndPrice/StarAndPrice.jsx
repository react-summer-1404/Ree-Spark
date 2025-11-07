import React from "react";
import CoursePrice from "./CoursePrice";
import CourseStar from "./Star";

const StarAndPrice = () => {
  return (
    <div className="flex justify-between h-[34px] w-full ">
        <CoursePrice />
        <CourseStar rating={4} />
    </div>
  );
};

export default StarAndPrice;
