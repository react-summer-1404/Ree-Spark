import React from "react";
import CoursePrice from "./CoursePrice";
import CourseStar from "./Star";

const StarAndPrice = ({courseData}) => {
  return (
    <div className="sm:flex hidden justify-between h-[34px] w-full ">
        <CoursePrice  cost={courseData.cost} />
        <CourseStar />
    </div>
  );
};

export default StarAndPrice;
