import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { LuCalendarRange } from "react-icons/lu";

const BlogFilter = ({Search}) => {
  return (
    <div className="dark:text-white">
      <h2 className="float-right text-2xl font-bold mt-4 mr-5">فیلتر</h2>
      <div className="w-[258px] h-[80px] gap-2  mt-4 relative m-auto">
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
      {/*  */}
      <div className="w-[258px] h-[80px] mt-[90px] m-auto relative">
        <div className="w-[102px] h-[24px] gap-2  float-right flex ">
          <h3 className="w-[80px] h-[23px] text-[16px] font-medium leading-5 ">
            دسته بندی
          </h3>
          <BiCategoryAlt size={20} />
        </div>

        <input
          type="text"
          placeholder="دسته مورد نظر را انتخاب کنید"
          className="  dark:text-black w-[258px] h-[48px] absolute top-8 rounded-[16px] bg-[#F1F1F1]  text-[14px] font-medium text-right pr-2 outline-blue-500"
        ></input>
      </div>
      {/*  */}
      <div className="w-[258px] h-[80px] mt-[5px] m-auto relative ">
        <div className="w-[157px] h-[24px] gap-2  float-right flex ">
          <h3 className="w-[125px] h-[23px] text-[15px] font-medium leading-5 text-right ">
            تاریخ برگزاری - اتمام
          </h3>
          <LuCalendarRange size={20}/>
        </div>
        <input
        type="date"
          placeholder="29 اردیبهشت 1403 - 5 خرداد 1403"
          className="w-[258px] h-[48px] rounded-[16px] bg-[#F1F1F1] outline-blue-500 absolute top-8 text-[#707070] font-medium text-[14px] p-4 text-right"
        />
      </div>
    </div>
  );
};

export { BlogFilter };
