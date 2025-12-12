import { View } from "lucide-react";
import React from "react";
import { LuCalendarRange, LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";

const BlogList = ({ BlogName, BlogTeacher, BlogImage, view, BlogAlt, Id }) => {
  return (
    <Link 
      to={`BlogDetail/${Id}`}
    >
      <div className=" w-full sm:w-[499px] h-[365px] flex flex-col gap-3">
        {/* blog image */}
        <div
          className={`h-[293px] rounded-[32px] transition-all duration-300 hover:shadow-xl bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg flex justify-center items-center `}
        >
          <img
            src={BlogImage ? BlogImage : "/AuthImage/react.png" }
            alt={BlogAlt}
            className="w-full h-full rounded-3xl"
          />
          
        </div>
        {/* blog description */}
        <div className="h-[69px] flex flex-col gap-2 ">
          <span className="h-9 text-right text-2xl font-bold overflow-hidden">
            {BlogName}
          </span>
          <div className="h-6 flex justify-between">
            <div className="flex gap-2">
              <LuEye size={20} className="dark:text-slate-400 text-[#707070]" />{" "}
              <span className="dark:text-slate-400 text-[#707070] text-sm">
                {view}
              </span>
              <LuCalendarRange
                size={20}
                className="dark:text-slate-400 text-[#707070]"
              />
              <span className="dark:text-slate-400 text-[#707070] text-sm">
                {view}
              </span>
            </div>
            <span className="text-[13px] text-[#707070] text-right dark:text-slate-300">
              {BlogTeacher}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { BlogList };
