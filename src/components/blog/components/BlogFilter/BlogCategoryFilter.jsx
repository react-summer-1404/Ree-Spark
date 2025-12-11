import React, { useState } from "react";

const BlogCategoryFilter = ({
  onSelectedCategory,
  selectedCategory,
  listTech,
  open,
  toggle,
}) => {
    const selectedObj = listTech.find(x => x.id === selectedCategory);

  return (
    <div>
      <div className="w-[258px] h-[80px] gap-2  mt-4 relative m-auto">
        <input
          readOnly
          type="search"
         value={selectedObj?.categoryName  || ""}
          onClick={toggle}
          placeholder="دسته مورد نظر را انتخاب کنید"
          className="  dark:text-black w-[258px] h-[48px] absolute top-8 rounded-[16px] bg-[#F1F1F1]  text-[14px] font-medium text-right pr-2 outline-blue-500"
        />

        <img
          src="../../../../../public/AuthImage/arrow-down-01.png"
          className="top-[45px] left-[8px] z-10 absolute"
          alt=""
        />
      </div>

      {open && (
        <ul className="relative top-[-50px] left-[-2px]  bg-[#F1F1F1] rounded-[13px] overflow-hidden w-[264px] h-[440px] z-20 dark:bg-slate-600">
          <img
            src="../../../../../../public/AuthImage/arrow-down-01.png"
            className="absolute mt-[16px] ml-[10px] z-20 "
          />
          {listTech.map((item) => (
            <li
              key={item.id}
              onClick={() => onSelectedCategory(item.id)}
              className={`
                cursor-pointer text-slate-600 dark:text-white border-b-2 p-3 text-center 
                hover:bg-slate-200 dark:hover:bg-gray-700 
                ${
                   selectedCategory === item.id
                    ? "bg-blue-300 dark:bg-blue-800 text-white font-bold"
                    : ""
                }
              `}
            >
              {item.categoryName }
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { BlogCategoryFilter };
