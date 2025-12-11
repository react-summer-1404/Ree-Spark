import { View } from "lucide-react";
import React from "react";
import { LuCalendarRange, LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";

const BlogList = ({ BlogName, BlogTeacher, BlogImage, view, BlogAlt ,date}) => {
  return (
    <Link to="/BlogDetail">
      <div className=" w-full sm:w-[499px] h-[365px] flex flex-col gap-3">
        {/* blog image */}
        <div
          className={`h-[293px] rounded-[32px] flex justify-center items-center shadow-sm `}
        >
          <img
            src={BlogImage || null}
            alt={BlogAlt || null}
            className="container rounded-3xl"
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
              <LuCalendarRange size={20} className="dark:text-slate-400 text-[#707070]"/>
              <span className="dark:text-slate-400 text-[#707070] text-sm">
                {date}
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
