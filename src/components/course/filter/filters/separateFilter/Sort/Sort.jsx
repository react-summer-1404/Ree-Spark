import React from "react";
import { IoMdClose } from "react-icons/io";

const Sort = ({ sortType, sortingCol, onChangeSort }) => {
  const activeClass = "border-[#FF5353] text-[#FF5353]";
  const inactiveClass = "text-black dark:text-white border-black dark:border-slate-400";

  const sortOptions = [
    { label: "جدیدترین", col: "lastUpdate", type: "DESC" },
    { label: "محبوب‌ترین", col: "likeCount", type: "DESC" },
    { label: "گران‌ترین", col: "cost", type: "DESC" },
    { label: "ارزان‌ترین", col: "cost", type: "ASC" },
  ];

  const handleClick = (opt) => {
    if (sortType === opt.type && sortingCol === opt.col) {
      onChangeSort("");
    } else {
      onChangeSort(opt.type, opt.col);
    }
  };

  return (
    <div className="w-[825px] h-10 absolute right-[330px] bottom-[690px] flex flex-row-reverse gap-3 transition-all duration-300">
      <div className="mt-1 font-bold text-xl dark:text-white">ترتیب</div>

      {sortOptions.map((opt) => {
        const isActive = sortType === opt.type && sortingCol === opt.col;

        return (
          <button
            key={opt.label}
            onClick={() => handleClick(opt)}
            className={`h-10 border flex gap-2 rounded-[34px] transition-all duration-300 py-2 px-4 hover:text-[#FF5353] hover:border-[#FF5353] ${
              isActive ? activeClass : inactiveClass
            }`}
          >
            <span>{opt.label}</span>
            {isActive && <IoMdClose size={20} />}
          </button>
        );
      })}
    </div>
  );
};

export { Sort };
