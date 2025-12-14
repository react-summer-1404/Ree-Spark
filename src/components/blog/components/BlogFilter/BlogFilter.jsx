import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { LuCalendarRange } from "react-icons/lu";
import { BlogCategory } from "./BlogCategory";
import BolgDateFilter from "./BlogDateFilter";

const BlogFilter = ({
  Search,
  setSelectedCategory,
  selectedCategory,

}) => {
  const handleSelectListTech = (value) => {
    setSelectedCategory(value);
  };

  return (
    <div className="dark:text-white relative">
      <h2 className="float-right text-2xl font-bold mt-4 mr-5">فیلتر</h2>
      <div className="w-[258px] h-[80px] gap-2   relative m-auto">
        <div className="w-[90px] h-[24px] gap-2 flex absolute top-[74px] right-2 ">
          <h3 className="w-[58px] h-[23px] text-[16px] font-medium leading-5 ">
            جست‌جو
          </h3>
          <CiSearch size={25} />
        </div>

        <div className="w-[258px] h-[48px] gap-2  absolute top-[106px]">
          <input
            type="search"
            placeholder="دوره مورد نظر را جست‌جو کنید"
            className="w-[258px] h-[48px] rounded-[16px] text-[14px] font-medium text-right bg-[#F1F1F1] outline-blue-500 dark:text-black"
            onChange={(e) => Search(e.target.value)}
          />
          <button className="w-12 h-12 bg-[#3772FF] absolute left-0 rounded-[16px]">
            <CiSearch size={25} className="m-auto text-white" />
          </button>
        </div>
      </div>

      <div className="w-[258px] h-[80px] mt-[90px] m-auto relative">
        <div className="w-[102px] h-[24px] relative  gap-2 right-2 float-right flex ">
          <h3 className="w-[80px] h-[23px] text-[16px] font-medium leading-5 ">
            دسته بندی
          </h3>
          <BiCategoryAlt size={20} />
        </div>

        <BlogCategory
      selectedCategory={selectedCategory}
  onSelectedCategory={handleSelectListTech}
        />
      </div>

      {/* <div className="relative top-[20px] right-[20px]">
        <div className="w-[157px] h-[24px] gap-2 relative bottom-[10px] float-right flex ">
          <h3 className="w-[125px] h-[23px] text-[15px] font-medium leading-5 text-right ">
            تاریخ انتشار{" "}
          </h3>
          <LuCalendarRange size={20} />
        </div>

        <BolgDateFilter
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </div> */}
    </div>
  );
};

export { BlogFilter };
