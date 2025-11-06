import React from "react";
import { IoMdClose } from "react-icons/io";

const BlogSort = () => {
  return (
    <div>
      <div className="w-[325px] h-10 absolute top-[349px] right-5 lg:right-[370px] dark:text-white  flex justify-between flex-row-reverse">
        <div className=" mt-1 font-bold text-xl">ترتیب</div>
        <button className="w-[100px] hover:w-[125px] h-10 border border-black flex gap-2 rounded-[34px] transition-all duration-150 py-2 px-4 hover:text-[#FF5353] hover:border-[#FF5353] dark:hover:border-[#FF5353] dark:border-slate-400 ">
          <span>جدیدترین</span>
          <IoMdClose size={20} />
        </button>
        <button className="w-[110px] hover:w-[135px] h-10 border flex gap-2 border-black rounded-[34px] transition-all duration-150 py-2 px-4 hover:text-[#FF5353] hover:border-[#FF5353] dark:hover:border-[#FF5353] dark:border-slate-400 ">
          <span>محبوب‌ترین</span>
          <IoMdClose size={20} />
        </button>
      </div>
    </div>
  );
};

export { BlogSort };
