import React, { useState } from "react";

const MobileCategoryFilter = ({
 onSelectListTech,
  listTech,
  selectedListTech,
  open,
  toggle,
}) => {
  return (
    <div>
      <div className="relative mt-16 ml-[20px]">
        <h3 className="text-right text-[16px] font-medium mb-2 flex items-center relative right-[25px] justify-end gap-2">
          دسته بندی
          <img
            src="../../../../../../public/AuthImage/cells-stroke-rounded.png"
            alt=""
            className="w-6 h-6"
          />
        </h3>

        <input
          readOnly
          type="search"
          value={listTech
            .filter((item) => selectedListTech.includes(item.id))
            .map((item) => item.techName)
            .join(", ")}
          onClick={toggle}
          placeholder="دسته مورد نظر را انتخاب کنید"
          className="  dark:text-black w-[345px] h-[48px]  relative  rounded-[16px] bg-[#F1F1F1]  text-[11px] font-medium text-right pr-2 outline-none"
        />

        <img
          src="../../../../../public/AuthImage/arrow-down-01.png"
          className="top-[45px] left-[8px] z-10 absolute"
          alt=""
        />
      </div>

      {open && (
        <ul className="absolute top-[140px] left-[20px]  bg-[#F1F1F1] rounded-[13px] overflow-hidden w-[345px] h-[440px] z-20 dark:bg-slate-600">
          <img
            src="../../../../public/AuthImage/arrow-down-01.png"
            className="absolute mt-[15px] ml-[10px] z-10"
          />

          {listTech.map((item) => (
            <li
              key={item.id}
              onClick={() => onSelectListTech(item.id)}
              className={`
                cursor-pointer text-slate-500 dark:text-white border-gray-200 hover:bg-slate-200 hover:rounded-[11px] dark:border-gray-500 border-b-2 last:rounded-b-[11px] text-center font-normal dark:hover:bg-gray-700 p-3 box-border
                ${
                  selectedListTech.includes(item.id)
                    ? "bg-blue-300 dark:bg-blue-800 text-white font-bold"
                    : ""
                }
              `}
            >
              {item.techName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export { MobileCategoryFilter };
