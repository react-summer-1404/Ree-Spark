import React from "react";
import CoursePrice from "./CoursePrice";
import CourseStar from "./Star";

const StarAndPrice = ({course}) => {
  return (
    <div className="sm:flex hidden justify-between h-[34px] w-full ">
        <CoursePrice course={course}/>
        <CourseStar />
    </div>
  );
};

export default StarAndPrice;
