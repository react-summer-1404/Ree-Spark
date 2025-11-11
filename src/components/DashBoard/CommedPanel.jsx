import React from "react";
import { Command } from "./components/Command";

const CommedPanel = () => {
  return (
    <div>
      <div className="mt-2 ml-5 w-[90%] text-sm flex justify-between">
        <button className="text-[#3772FF]">مشاهده بیشتر</button>
        <h6>نظرات شما</h6>
      </div>

      <div className="flex items-center justify-center my-2 w-[90%] mx-auto">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 text-gray-600 dark:text-gray-300 text-sm">دوره‌ها و بلاگ‌ها</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      <div className="mx-auto w-[90%] h-[390px]">
        <Command/>
      </div>
    </div>
  );
};

export { CommedPanel };
