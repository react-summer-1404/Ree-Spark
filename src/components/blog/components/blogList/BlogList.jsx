import React from "react";

const BlogList = ({BlogName,BlogTeacher,BlogImage,BlogBg}) => {
  
  return (
    <div className=" w-full sm:w-[499px] h-[365px] flex flex-col gap-3">
      {/* blog image */}
      <div className={`h-[293px] rounded-[32px] flex justify-center items-center shadow-sm ${BlogBg}`}>
        <img
          src={BlogImage}
          alt=""
          className="w-[167px] h-[167px]"
        />
      </div>
      {/* blog description */}
      <div className="h-[69px] flex flex-col gap-2 ">
        <span className="h-9 text-right text-2xl font-bold overflow-hidden">
          {BlogName}
        </span>
        <div className="h-6 flex justify-between">
            <div></div>
            <span className="text-[13px] text-[#707070] text-right dark:text-slate-300">{BlogTeacher}</span>
        </div>
      </div>
    </div>
  );
};

export { BlogList };
