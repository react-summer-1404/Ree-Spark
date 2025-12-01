import React from "react";

const CommedPanel = () => {
  return (
    <div>
      <div className="mt-2 ml-5 w-[90%] text-sm flex justify-between">
        <button className="text-[#3772FF]">مشاهده بیشتر</button>
        <h6>نظرات شما</h6>
      </div>

      <div class="flex items-center justify-center my-2 w-[90%] mx-auto">
        <div class="flex-1 border-t border-gray-300"></div>
        <span class="px-4 text-gray-600 text-sm">دوره‌ها و بلاگ‌ها</span>
        <div class="flex-1 border-t border-gray-300"></div>
      </div>
    </div>
  );
};

export { CommedPanel };
