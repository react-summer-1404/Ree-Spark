import React from "react";


const Title = ({courseData}) => {
  return (
    <div className="sm:w-full w-[340px] h-[46px] dark:text-white flex justify-end font-bold text-[32px]">
      <div className=" h-[46px] flex items-center ">
        {courseData.title}
      </div>
    </div>
  );
};

export default Title;
