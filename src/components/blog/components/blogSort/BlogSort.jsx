import React from "react";
import { IoMdClose } from "react-icons/io";

const BlogSort = ({ sortType, onChangeSort }) => {
  return (
    <div>
      <div className="w-[325px] h-10 absolute top-[349px] right-5 lg:right-[370px] dark:text-white flex justify-between flex-row-reverse">
        <div className="mt-1 font-bold text-xl">ترتیب</div>

        {/* جدیدترین */}
        <button
          onClick={() => onChangeSort("InsertDate")}
          className={`w-[100px] hover:w-[125px] hover:text-[#FF5353] hover:border-[#FF5353] h-10 border border-black flex gap-2 rounded-[34px] transition-all duration-150 py-2 px-4 ${
            sortType === "InsertDate"
              ? ""
              : "text-black dark:text-white border-black dark:border-slate-400"
          }`}
        >
          <span>جدیدترین</span>
          {sortType === "InsertDate" && <IoMdClose size={20} />}
        </button>

        {/* محبوب‌ترین */}
        <button
          onClick={() => onChangeSort("ViewCount")}
          className={`w-[110px] hover:text-[#FF5353] hover:border-[#FF5353] hover:w-[135px] border-black h-10 border flex gap-2 rounded-[34px] transition-all duration-150 py-2 px-4 ${
            sortType === "ViewCount"
              ? ""
              : "text-black dark:text-white border-black dark:border-slate-400"
          }`}
        >
          <span>محبوب‌ترین</span>
          {sortType === "ViewCount" && <IoMdClose size={20} />}
        </button>
      </div>
    </div>
  );
};

export { BlogSort };

