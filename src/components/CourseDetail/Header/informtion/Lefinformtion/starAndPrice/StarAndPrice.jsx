import React from "react";
import CoursePrice from "./CoursePrice";
import CourseStar from "./Star";
import { useParams } from "react-router-dom";


const StarAndPrice = ({courseData}) => {
  const {id} = useParams();
  return (
    <div className="sm:flex hidden justify-between h-[34px] w-full ">
        <CoursePrice  cost={courseData.cost} />
        <CourseStar id={id} />
    </div>
  );
};  

export default StarAndPrice;
