import React, { useState } from "react";

const CategoryFilter = ({
  onSelectListTech,
  listTech,
  selectedListTech,
  open,
  toggle,
}) => {


  return (
    <div>
      <div className="relative mt-16 ml-[20px]">
        <h3 className="text-right text-[16px] font-medium mb-2 flex items-center relative right-[15px] justify-end gap-2">
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
          value={listTech.filter(item => selectedListTech.includes(item.id))
         .map(item => item.techName).join(", ")
          }
          onClick={toggle}
          placeholder="دسته مورد نظر را انتخاب کنید"
          className="lg:w-[258px] cursor-pointer lg:h-[48px] lg:rounded-[16px] font-sans lg:text-[12px] lg:font-medium lg:text-right lg:bg-[#F1F1F1] outline-blue-500 dark:text-black"
        />

        <img
          src="../../../../../public/AuthImage/arrow-down-01.png"
          className="top-[45px] left-[8px] z-10 absolute"
          alt=""
        />
      </div>

      {open && (
        <ul className="absolute top-[188px] left-[17px]  bg-[#F1F1F1] rounded-[13px] overflow-hidden w-[264px] h-[440px] z-20 dark:bg-slate-600">
          <img
            src="../../../../../../public/AuthImage/arrow-down-01.png"
            className="absolute mt-[16px] ml-[10px] z-20 "
          />
          {listTech.map((item) => (
            <li
              key={item.id}
              onClick={() => onSelectListTech(item.id)}
                className={`
                cursor-pointer text-slate-600 dark:text-white border-b-2 p-3 text-center 
                hover:bg-slate-200 dark:hover:bg-gray-700 
                ${selectedListTech.includes(item.id)
                  ? "bg-blue-300 dark:bg-blue-800 text-white font-bold"
                  : ""}
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

export { CategoryFilter };
