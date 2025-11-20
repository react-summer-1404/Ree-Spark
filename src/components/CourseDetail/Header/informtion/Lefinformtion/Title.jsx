import React from "react";

const Title = ({course}) => {
  return (
    <div className="sm:w-full  h-[46px] dark:text-white flex justify-end font-bold text-[32px]">
      <div className=" h-[46px] flex items-center text-right">
        {course.courseName}
      </div>
    </div>
  );
};

export default Title;
